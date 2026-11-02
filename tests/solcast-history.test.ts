import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { fetchForecastHistory } from "../src/data/forecast-history.js";
import { dayKey, type HistoryLog } from "../src/data/history-log.js";
import { entity, KWH, makeConfig, makeHass, sensor } from "./helpers.js";

const ids = ["sensor.solcast_forecast_today"] as never;
const at = (day: number, hour: number, minute = 0) => new Date(2026, 5, day, hour, minute).toISOString();
const period = (day: number, hour: number, kw: number) => ({
  period_start: at(day, hour),
  pv_estimate: kw,
  pv_estimate10: kw / 2,
  pv_estimate90: kw * 2,
});

function solcastWS(periods: unknown, log: HistoryLog | null = null) {
  return vi.fn(async (message: Record<string, unknown>) => {
    if (message.type === "frontend/get_user_data") return { value: log };
    if (periods instanceof Error) throw periods;
    return { context: {}, response: { data: periods } };
  });
}

async function load(callWS: unknown, integration_type: "solcast" | "manual" = "solcast", rows: unknown = []) {
  const callApi = vi.fn().mockResolvedValue(rows);
  const hass = makeHass({ [ids[0]]: entity(20, KWH) }, { callWS: callWS as never, callApi: callApi as never });
  return { hass, days: await fetchForecastHistory(hass, makeConfig({ forecast_entities: ids, integration_type })) };
}

beforeEach(() => {
  vi.useFakeTimers();
  vi.setSystemTime(new Date(2026, 5, 15, 13, 20));
  vi.spyOn(console, "debug").mockImplementation(() => {});
});

afterEach(() => {
  vi.useRealTimers();
  vi.restoreAllMocks();
});

describe("Solcast forecast history", () => {
  it("calls the action for the last 7 days with a response", async () => {
    const callWS = solcastWS([]);
    await load(callWS);
    expect(callWS).toHaveBeenCalledWith({
      type: "call_service",
      domain: "solcast_solar",
      service: "query_forecast_data",
      service_data: { start_date_time: at(8, 0), end_date_time: at(15, 0) },
      return_response: true,
    });
  });

  it("totals 30-minute kW periods into each local day", async () => {
    const { days } = await load(solcastWS([period(14, 9, 4), period(14, 10, 6), period(13, 12, 2)]));
    expect(days![6].forecastKwh).toBe(5);
    expect(days![5].forecastKwh).toBe(1);
    expect(days![0].forecastKwh).toBeNull();
  });

  it("is used for hand-configured cards when the sensor is from Solcast", async () => {
    const callWS = solcastWS([period(14, 9, 4)]);
    const callApi = vi.fn().mockResolvedValue([]);
    const hass = makeHass({ [ids[0]]: entity(20, KWH) }, {
      callWS: callWS as never,
      callApi: callApi as never,
      entities: { [ids[0]]: sensor(ids[0], "solcast_solar") },
    });
    const days = await fetchForecastHistory(hass, makeConfig({ forecast_entities: ids }));
    expect(days![6].forecastKwh).toBe(2);
  });

  it("is not called for other integrations", async () => {
    const callWS = solcastWS([period(14, 9, 4)]);
    const { days } = await load(callWS, "manual");
    expect(days![6].forecastKwh).toBeNull();
    expect(callWS.mock.calls.some(([m]) => m.type === "call_service")).toBe(false);
  });

  it("prefers recorder forecasts", async () => {
    const rows = [[{ entity_id: ids[0], state: "30", last_changed: at(14, 3) }]];
    const { days } = await load(solcastWS([period(14, 9, 4)]), "solcast", rows);
    expect(days![6].forecastKwh).toBe(30);
  });

  it("prefers forecasts in the card's log", async () => {
    const log = { [dayKey(new Date(2026, 5, 14))]: { forecastKwh: 25, actualKwh: 20, complete: true } };
    const { days } = await load(solcastWS([period(14, 9, 4)], log));
    expect(days![6]).toMatchObject({ forecastKwh: 25, actualKwh: 20 });
  });

  it("carries on without it when the action fails", async () => {
    const { days } = await load(solcastWS(new Error("unknown action")));
    expect(days).toHaveLength(7);
    expect(days![6].forecastKwh).toBeNull();
  });

  it("skips malformed entries", async () => {
    const { days } = await load(solcastWS([{ period_start: "nope", pv_estimate: 1 }, { period_start: at(14, 9) }, period(14, 10, 2)]));
    expect(days![6].forecastKwh).toBe(1);
  });
});
