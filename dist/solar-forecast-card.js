var af = {
  "day": {
    "today": "Vandag",
    "tomorrow": "Môre",
    "sunday_short": "So",
    "monday_short": "Ma",
    "tuesday_short": "Di",
    "wednesday_short": "Wo",
    "thursday_short": "Do",
    "friday_short": "Vr",
    "saturday_short": "Sa"
  },
  "card": {
    "defaultTitle": "Sonvoorspelling",
    "placeholder": "No forecast entities configured.",
    "placeholderAction": "Open the card editor to get started.",
    "twoDayNote": "2-day forecast available",
    "labels": {
      "live": "REGSTREEKS:",
      "exportRate": "UITVOERTARIEF:",
      "nextHour": "+1 U:",
      "left": "OOR:",
      "week": "WEEK:",
      "avg": "GEM:",
      "total": "Totaal",
      "p10": "P10",
      "forecast": "voorspelling",
      "generated": "opgewek"
    },
    "days": {
      "today": "Today"
    },
    "popup": {
      "close": "Close",
      "noForecastData": "No forecast data",
      "noHourlyData": "No hourly data available for this day.",
      "integrationNoHourlyData": "The selected forecast entities do not provide hourly forecast data.",
      "chart": {
        "time": "Time",
        "power": "Power",
        "kwh": "kWh",
        "forecastShort": "Fcst",
        "actualShort": "Act."
      }
    },
    "history": {
      "title": "Last 7 days",
      "forecast": "Forecast",
      "actual": "Actual",
      "accuracy": "Accuracy",
      "averageMiss": "Average miss per day",
      "bias": "Actual vs forecast per day",
      "readout": "{day}: forecast {forecast}, actual {actual} kWh ({difference})",
      "noActual": "{day}: forecast {forecast} kWh, no recorded generation",
      "noForecast": "{day}: no recorded forecast",
      "loading": "Loading forecast history…",
      "noData": "No forecast history found. Home Assistant needs to have recorded the forecast sensor for at least one full day."
    },
    "aria": {
      "dayButton": "{day} {date}"
    },
    "errors": {
      "invalidConfig": "Invalid configuration"
    },
    "units": {
      "watts": "W",
      "kilowatts": "kW",
      "kilowattHours": "kWh",
      "kilowattHoursPerDay": "kWh/day"
    }
  },
  "editor": {
    "labels": {
      "title": "Title (optional)",
      "icon": "Header icon (optional, e.g. mdi:solar-power)",
      "show_header": "Show header",
      "display_estimate10": "Display Estimate10 Forecast Values",
      "device_id": "Forecast Device",
      "integration_type": "Integration Type",
      "forecast_entity_0": "Day 1 — Today",
      "forecast_entity_1": "Day 2 — Tomorrow",
      "forecast_entity_2": "Day 3",
      "forecast_entity_3": "Day 4",
      "forecast_entity_4": "Day 5",
      "forecast_entity_5": "Day 6",
      "forecast_entity_6": "Day 7",
      "export_rate_entity": "Current Export Rate Entity",
      "live_power_entity": "Live power (optional, kW sensor)",
      "today_actual_entity": "Today's actual generation (optional)",
      "next_hour_entity": "+1HR forecast (optional, overrides auto-derived value)",
      "remaining_today_entity": "LEFT / remaining today (optional, overrides auto-derived value)",
      "main_view": "Main View",
      "inverter_max_kw": "Inverter max output (kW)",
      "solar_max_kwp": "Solar array size (kWp)",
      "low_threshold": "Low threshold (kWh)",
      "high_threshold": "High threshold (kWh)",
      "low_threshold_entity": "Low threshold sensor (optional, kWh)",
      "high_threshold_entity": "High threshold sensor (optional, kWh)",
      "show_low_threshold_zone": "Tint bar track below low threshold",
      "show_high_threshold_zone": "Tint bar track above high threshold",
      "threshold_zone_opacity": "Threshold tint opacity (lower is more transparent)",
      "desktop_text_scale": "Desktop Text Scale",
      "font_size": "Font Size",
      "bar_width": "Bar Width"
    },
    "options": {
      "autoDetect": "Auto-detect",
      "solcast": "Solcast",
      "volcast": "Volcast",
      "forecastSolar": "Forecast.Solar",
      "openMeteo": "Open-Meteo Solar Forecast",
      "mainViewDaily": "Daily",
      "mainViewHourly": "Hourly",
      "mainViewHistory": "History"
    },
    "sections": {
      "integrationType": "Integration Type",
      "dailyForecastEntities": "Daily Forecast Entities",
      "liveData": "Live Data",
      "actualGenerationArrays": "Actual Generation Arrays",
      "systemParameters": "System Parameters",
      "energyProvider": "Energy Provider",
      "colourThresholds": "Colour Thresholds",
      "dateTimeDisplay": "Display"
    },
    "helpers": {
      "device": "Recommended: selecting a device will auto-configure the card",
      "estimate10": "Display Estimate10 is only applicable when the integration type is Solcast",
      "integrationType": "Automatically set when a forecast device is selected above. Override here only when configuring forecast entities manually without a device.",
      "liveData": "+1HR and LEFT are auto-detected or auto-derived where possible. Set these manually to override, or to use a custom sensor.",
      "actualArrays": "Optional: configure individual array sensors to display a stacked breakdown on today's bar. Each label is a single character shown inside its segment (e.g. N, S, E).",
      "desktopTextScale": "Desktop Text Scale: only applies on wider screens (≥ 768 px). Mobile sizing is unchanged.",
      "mainView": "Choose what the card shows. Hourly shows today's hourly forecast. History compares the last 7 days of forecast and actual generation.",
      "fontSize": "Optional daily bar text size in pixels. Leave blank to use CSS/default styling.",
      "barWidth": "Optional forecast bar width in pixels. Leave blank to use CSS/default styling."
    },
    "warnings": {
      "manualEntities": "Changing device will not overwrite manually configured entities."
    },
    "arrays": {
      "entity": "Array entity",
      "label": "Label (1 char)",
      "placeholder": "E",
      "hint": "bar & popup",
      "remove": "Remove",
      "add": "Add array"
    }
  },
  "customCard": {
    "name": "Solar Forecast Card",
    "description": "Daily solar energy forecast with hourly breakdown support."
  }
}
;

var ar = {
  "day": {
    "today": "اليوم",
    "tomorrow": "غدًا",
    "sunday_short": "الأحد",
    "monday_short": "الاثنين",
    "tuesday_short": "الثلاثاء",
    "wednesday_short": "الأربعاء",
    "thursday_short": "الخميس",
    "friday_short": "الجمعة",
    "saturday_short": "السبت"
  },
  "card": {
    "defaultTitle": "توقع الطاقة الشمسية",
    "placeholder": "No forecast entities configured.",
    "placeholderAction": "Open the card editor to get started.",
    "twoDayNote": "2-day forecast available",
    "labels": {
      "live": "مباشر:",
      "exportRate": "تعرفة التصدير:",
      "nextHour": "+1 س:",
      "left": "المتبقي:",
      "week": "الأسبوع:",
      "avg": "متوسط:",
      "total": "الإجمالي",
      "p10": "P10",
      "forecast": "توقع",
      "generated": "مُولّد"
    },
    "days": {
      "today": "Today"
    },
    "popup": {
      "close": "Close",
      "noForecastData": "No forecast data",
      "noHourlyData": "No hourly data available for this day.",
      "integrationNoHourlyData": "The selected forecast entities do not provide hourly forecast data.",
      "chart": {
        "time": "Time",
        "power": "Power",
        "kwh": "kWh",
        "forecastShort": "Fcst",
        "actualShort": "Act."
      }
    },
    "history": {
      "title": "Last 7 days",
      "forecast": "Forecast",
      "actual": "Actual",
      "accuracy": "Accuracy",
      "averageMiss": "Average miss per day",
      "bias": "Actual vs forecast per day",
      "readout": "{day}: forecast {forecast}, actual {actual} kWh ({difference})",
      "noActual": "{day}: forecast {forecast} kWh, no recorded generation",
      "noForecast": "{day}: no recorded forecast",
      "loading": "Loading forecast history…",
      "noData": "No forecast history found. Home Assistant needs to have recorded the forecast sensor for at least one full day."
    },
    "aria": {
      "dayButton": "{day} {date}"
    },
    "errors": {
      "invalidConfig": "Invalid configuration"
    },
    "units": {
      "watts": "W",
      "kilowatts": "kW",
      "kilowattHours": "kWh",
      "kilowattHoursPerDay": "kWh/day"
    }
  },
  "editor": {
    "labels": {
      "title": "Title (optional)",
      "icon": "Header icon (optional, e.g. mdi:solar-power)",
      "show_header": "Show header",
      "display_estimate10": "Display Estimate10 Forecast Values",
      "device_id": "Forecast Device",
      "integration_type": "Integration Type",
      "forecast_entity_0": "Day 1 — Today",
      "forecast_entity_1": "Day 2 — Tomorrow",
      "forecast_entity_2": "Day 3",
      "forecast_entity_3": "Day 4",
      "forecast_entity_4": "Day 5",
      "forecast_entity_5": "Day 6",
      "forecast_entity_6": "Day 7",
      "export_rate_entity": "Current Export Rate Entity",
      "live_power_entity": "Live power (optional, kW sensor)",
      "today_actual_entity": "Today's actual generation (optional)",
      "next_hour_entity": "+1HR forecast (optional, overrides auto-derived value)",
      "remaining_today_entity": "LEFT / remaining today (optional, overrides auto-derived value)",
      "main_view": "Main View",
      "inverter_max_kw": "Inverter max output (kW)",
      "solar_max_kwp": "Solar array size (kWp)",
      "low_threshold": "Low threshold (kWh)",
      "high_threshold": "High threshold (kWh)",
      "low_threshold_entity": "Low threshold sensor (optional, kWh)",
      "high_threshold_entity": "High threshold sensor (optional, kWh)",
      "show_low_threshold_zone": "Tint bar track below low threshold",
      "show_high_threshold_zone": "Tint bar track above high threshold",
      "threshold_zone_opacity": "Threshold tint opacity (lower is more transparent)",
      "desktop_text_scale": "Desktop Text Scale",
      "font_size": "Font Size",
      "bar_width": "Bar Width"
    },
    "options": {
      "autoDetect": "Auto-detect",
      "solcast": "Solcast",
      "volcast": "Volcast",
      "forecastSolar": "Forecast.Solar",
      "openMeteo": "Open-Meteo Solar Forecast",
      "mainViewDaily": "Daily",
      "mainViewHourly": "Hourly",
      "mainViewHistory": "History"
    },
    "sections": {
      "integrationType": "Integration Type",
      "dailyForecastEntities": "Daily Forecast Entities",
      "liveData": "Live Data",
      "actualGenerationArrays": "Actual Generation Arrays",
      "systemParameters": "System Parameters",
      "energyProvider": "Energy Provider",
      "colourThresholds": "Colour Thresholds",
      "dateTimeDisplay": "Display"
    },
    "helpers": {
      "device": "Recommended: selecting a device will auto-configure the card",
      "estimate10": "Display Estimate10 is only applicable when the integration type is Solcast",
      "integrationType": "Automatically set when a forecast device is selected above. Override here only when configuring forecast entities manually without a device.",
      "liveData": "+1HR and LEFT are auto-detected or auto-derived where possible. Set these manually to override, or to use a custom sensor.",
      "actualArrays": "Optional: configure individual array sensors to display a stacked breakdown on today's bar. Each label is a single character shown inside its segment (e.g. N, S, E).",
      "desktopTextScale": "Desktop Text Scale: only applies on wider screens (≥ 768 px). Mobile sizing is unchanged.",
      "mainView": "Choose what the card shows. Hourly shows today's hourly forecast. History compares the last 7 days of forecast and actual generation.",
      "fontSize": "Optional daily bar text size in pixels. Leave blank to use CSS/default styling.",
      "barWidth": "Optional forecast bar width in pixels. Leave blank to use CSS/default styling."
    },
    "warnings": {
      "manualEntities": "Changing device will not overwrite manually configured entities."
    },
    "arrays": {
      "entity": "Array entity",
      "label": "Label (1 char)",
      "placeholder": "E",
      "hint": "bar & popup",
      "remove": "Remove",
      "add": "Add array"
    }
  },
  "customCard": {
    "name": "Solar Forecast Card",
    "description": "Daily solar energy forecast with hourly breakdown support."
  }
}
;

var bg = {
  "day": {
    "today": "Днес",
    "tomorrow": "Утре",
    "sunday_short": "нд",
    "monday_short": "пн",
    "tuesday_short": "вт",
    "wednesday_short": "ср",
    "thursday_short": "чт",
    "friday_short": "пт",
    "saturday_short": "сб"
  },
  "card": {
    "defaultTitle": "Слънчева прогноза",
    "placeholder": "No forecast entities configured.",
    "placeholderAction": "Open the card editor to get started.",
    "twoDayNote": "2-day forecast available",
    "labels": {
      "live": "НА ЖИВО:",
      "exportRate": "ТАРИФА ИЗНОС:",
      "nextHour": "+1 Ч:",
      "left": "ОСТАВА:",
      "week": "СЕДМИЦА:",
      "avg": "СРЕДНО:",
      "total": "Общо",
      "p10": "P10",
      "forecast": "прогноза",
      "generated": "произведено"
    },
    "days": {
      "today": "Today"
    },
    "popup": {
      "close": "Close",
      "noForecastData": "No forecast data",
      "noHourlyData": "No hourly data available for this day.",
      "integrationNoHourlyData": "The selected forecast entities do not provide hourly forecast data.",
      "chart": {
        "time": "Time",
        "power": "Power",
        "kwh": "kWh",
        "forecastShort": "Fcst",
        "actualShort": "Act."
      }
    },
    "history": {
      "title": "Last 7 days",
      "forecast": "Forecast",
      "actual": "Actual",
      "accuracy": "Accuracy",
      "averageMiss": "Average miss per day",
      "bias": "Actual vs forecast per day",
      "readout": "{day}: forecast {forecast}, actual {actual} kWh ({difference})",
      "noActual": "{day}: forecast {forecast} kWh, no recorded generation",
      "noForecast": "{day}: no recorded forecast",
      "loading": "Loading forecast history…",
      "noData": "No forecast history found. Home Assistant needs to have recorded the forecast sensor for at least one full day."
    },
    "aria": {
      "dayButton": "{day} {date}"
    },
    "errors": {
      "invalidConfig": "Invalid configuration"
    },
    "units": {
      "watts": "W",
      "kilowatts": "kW",
      "kilowattHours": "kWh",
      "kilowattHoursPerDay": "kWh/day"
    }
  },
  "editor": {
    "labels": {
      "title": "Title (optional)",
      "icon": "Header icon (optional, e.g. mdi:solar-power)",
      "show_header": "Show header",
      "display_estimate10": "Display Estimate10 Forecast Values",
      "device_id": "Forecast Device",
      "integration_type": "Integration Type",
      "forecast_entity_0": "Day 1 — Today",
      "forecast_entity_1": "Day 2 — Tomorrow",
      "forecast_entity_2": "Day 3",
      "forecast_entity_3": "Day 4",
      "forecast_entity_4": "Day 5",
      "forecast_entity_5": "Day 6",
      "forecast_entity_6": "Day 7",
      "export_rate_entity": "Current Export Rate Entity",
      "live_power_entity": "Live power (optional, kW sensor)",
      "today_actual_entity": "Today's actual generation (optional)",
      "next_hour_entity": "+1HR forecast (optional, overrides auto-derived value)",
      "remaining_today_entity": "LEFT / remaining today (optional, overrides auto-derived value)",
      "main_view": "Main View",
      "inverter_max_kw": "Inverter max output (kW)",
      "solar_max_kwp": "Solar array size (kWp)",
      "low_threshold": "Low threshold (kWh)",
      "high_threshold": "High threshold (kWh)",
      "low_threshold_entity": "Low threshold sensor (optional, kWh)",
      "high_threshold_entity": "High threshold sensor (optional, kWh)",
      "show_low_threshold_zone": "Tint bar track below low threshold",
      "show_high_threshold_zone": "Tint bar track above high threshold",
      "threshold_zone_opacity": "Threshold tint opacity (lower is more transparent)",
      "desktop_text_scale": "Desktop Text Scale",
      "font_size": "Font Size",
      "bar_width": "Bar Width"
    },
    "options": {
      "autoDetect": "Auto-detect",
      "solcast": "Solcast",
      "volcast": "Volcast",
      "forecastSolar": "Forecast.Solar",
      "openMeteo": "Open-Meteo Solar Forecast",
      "mainViewDaily": "Daily",
      "mainViewHourly": "Hourly",
      "mainViewHistory": "History"
    },
    "sections": {
      "integrationType": "Integration Type",
      "dailyForecastEntities": "Daily Forecast Entities",
      "liveData": "Live Data",
      "actualGenerationArrays": "Actual Generation Arrays",
      "systemParameters": "System Parameters",
      "energyProvider": "Energy Provider",
      "colourThresholds": "Colour Thresholds",
      "dateTimeDisplay": "Display"
    },
    "helpers": {
      "device": "Recommended: selecting a device will auto-configure the card",
      "estimate10": "Display Estimate10 is only applicable when the integration type is Solcast",
      "integrationType": "Automatically set when a forecast device is selected above. Override here only when configuring forecast entities manually without a device.",
      "liveData": "+1HR and LEFT are auto-detected or auto-derived where possible. Set these manually to override, or to use a custom sensor.",
      "actualArrays": "Optional: configure individual array sensors to display a stacked breakdown on today's bar. Each label is a single character shown inside its segment (e.g. N, S, E).",
      "desktopTextScale": "Desktop Text Scale: only applies on wider screens (≥ 768 px). Mobile sizing is unchanged.",
      "mainView": "Choose what the card shows. Hourly shows today's hourly forecast. History compares the last 7 days of forecast and actual generation.",
      "fontSize": "Optional daily bar text size in pixels. Leave blank to use CSS/default styling.",
      "barWidth": "Optional forecast bar width in pixels. Leave blank to use CSS/default styling."
    },
    "warnings": {
      "manualEntities": "Changing device will not overwrite manually configured entities."
    },
    "arrays": {
      "entity": "Array entity",
      "label": "Label (1 char)",
      "placeholder": "E",
      "hint": "bar & popup",
      "remove": "Remove",
      "add": "Add array"
    }
  },
  "customCard": {
    "name": "Solar Forecast Card",
    "description": "Daily solar energy forecast with hourly breakdown support."
  }
}
;

var bn = {
  "day": {
    "today": "আজ",
    "tomorrow": "আগামীকাল",
    "sunday_short": "রবি",
    "monday_short": "সোম",
    "tuesday_short": "মঙ্গল",
    "wednesday_short": "বুধ",
    "thursday_short": "বৃহস্পতি",
    "friday_short": "শুক্র",
    "saturday_short": "শনি"
  },
  "card": {
    "defaultTitle": "সৌর পূর্বাভাস",
    "placeholder": "No forecast entities configured.",
    "placeholderAction": "Open the card editor to get started.",
    "twoDayNote": "2-day forecast available",
    "labels": {
      "live": "লাইভ:",
      "exportRate": "রপ্তানি হার:",
      "nextHour": "+1 ঘ:",
      "left": "বাকি:",
      "week": "সপ্তাহ:",
      "avg": "গড়:",
      "total": "মোট",
      "p10": "P10",
      "forecast": "পূর্বাভাস",
      "generated": "উৎপন্ন"
    },
    "days": {
      "today": "Today"
    },
    "popup": {
      "close": "Close",
      "noForecastData": "No forecast data",
      "noHourlyData": "No hourly data available for this day.",
      "integrationNoHourlyData": "The selected forecast entities do not provide hourly forecast data.",
      "chart": {
        "time": "Time",
        "power": "Power",
        "kwh": "kWh",
        "forecastShort": "Fcst",
        "actualShort": "Act."
      }
    },
    "history": {
      "title": "Last 7 days",
      "forecast": "Forecast",
      "actual": "Actual",
      "accuracy": "Accuracy",
      "averageMiss": "Average miss per day",
      "bias": "Actual vs forecast per day",
      "readout": "{day}: forecast {forecast}, actual {actual} kWh ({difference})",
      "noActual": "{day}: forecast {forecast} kWh, no recorded generation",
      "noForecast": "{day}: no recorded forecast",
      "loading": "Loading forecast history…",
      "noData": "No forecast history found. Home Assistant needs to have recorded the forecast sensor for at least one full day."
    },
    "aria": {
      "dayButton": "{day} {date}"
    },
    "errors": {
      "invalidConfig": "Invalid configuration"
    },
    "units": {
      "watts": "W",
      "kilowatts": "kW",
      "kilowattHours": "kWh",
      "kilowattHoursPerDay": "kWh/day"
    }
  },
  "editor": {
    "labels": {
      "title": "Title (optional)",
      "icon": "Header icon (optional, e.g. mdi:solar-power)",
      "show_header": "Show header",
      "display_estimate10": "Display Estimate10 Forecast Values",
      "device_id": "Forecast Device",
      "integration_type": "Integration Type",
      "forecast_entity_0": "Day 1 — Today",
      "forecast_entity_1": "Day 2 — Tomorrow",
      "forecast_entity_2": "Day 3",
      "forecast_entity_3": "Day 4",
      "forecast_entity_4": "Day 5",
      "forecast_entity_5": "Day 6",
      "forecast_entity_6": "Day 7",
      "export_rate_entity": "Current Export Rate Entity",
      "live_power_entity": "Live power (optional, kW sensor)",
      "today_actual_entity": "Today's actual generation (optional)",
      "next_hour_entity": "+1HR forecast (optional, overrides auto-derived value)",
      "remaining_today_entity": "LEFT / remaining today (optional, overrides auto-derived value)",
      "main_view": "Main View",
      "inverter_max_kw": "Inverter max output (kW)",
      "solar_max_kwp": "Solar array size (kWp)",
      "low_threshold": "Low threshold (kWh)",
      "high_threshold": "High threshold (kWh)",
      "low_threshold_entity": "Low threshold sensor (optional, kWh)",
      "high_threshold_entity": "High threshold sensor (optional, kWh)",
      "show_low_threshold_zone": "Tint bar track below low threshold",
      "show_high_threshold_zone": "Tint bar track above high threshold",
      "threshold_zone_opacity": "Threshold tint opacity (lower is more transparent)",
      "desktop_text_scale": "Desktop Text Scale",
      "font_size": "Font Size",
      "bar_width": "Bar Width"
    },
    "options": {
      "autoDetect": "Auto-detect",
      "solcast": "Solcast",
      "volcast": "Volcast",
      "forecastSolar": "Forecast.Solar",
      "openMeteo": "Open-Meteo Solar Forecast",
      "mainViewDaily": "Daily",
      "mainViewHourly": "Hourly",
      "mainViewHistory": "History"
    },
    "sections": {
      "integrationType": "Integration Type",
      "dailyForecastEntities": "Daily Forecast Entities",
      "liveData": "Live Data",
      "actualGenerationArrays": "Actual Generation Arrays",
      "systemParameters": "System Parameters",
      "energyProvider": "Energy Provider",
      "colourThresholds": "Colour Thresholds",
      "dateTimeDisplay": "Display"
    },
    "helpers": {
      "device": "Recommended: selecting a device will auto-configure the card",
      "estimate10": "Display Estimate10 is only applicable when the integration type is Solcast",
      "integrationType": "Automatically set when a forecast device is selected above. Override here only when configuring forecast entities manually without a device.",
      "liveData": "+1HR and LEFT are auto-detected or auto-derived where possible. Set these manually to override, or to use a custom sensor.",
      "actualArrays": "Optional: configure individual array sensors to display a stacked breakdown on today's bar. Each label is a single character shown inside its segment (e.g. N, S, E).",
      "desktopTextScale": "Desktop Text Scale: only applies on wider screens (≥ 768 px). Mobile sizing is unchanged.",
      "mainView": "Choose what the card shows. Hourly shows today's hourly forecast. History compares the last 7 days of forecast and actual generation.",
      "fontSize": "Optional daily bar text size in pixels. Leave blank to use CSS/default styling.",
      "barWidth": "Optional forecast bar width in pixels. Leave blank to use CSS/default styling."
    },
    "warnings": {
      "manualEntities": "Changing device will not overwrite manually configured entities."
    },
    "arrays": {
      "entity": "Array entity",
      "label": "Label (1 char)",
      "placeholder": "E",
      "hint": "bar & popup",
      "remove": "Remove",
      "add": "Add array"
    }
  },
  "customCard": {
    "name": "Solar Forecast Card",
    "description": "Daily solar energy forecast with hourly breakdown support."
  }
}
;

var bs = {
  "day": {
    "today": "Danas",
    "tomorrow": "Sutra",
    "sunday_short": "ned",
    "monday_short": "pon",
    "tuesday_short": "uto",
    "wednesday_short": "sri",
    "thursday_short": "čet",
    "friday_short": "pet",
    "saturday_short": "sub"
  },
  "card": {
    "defaultTitle": "Solarna prognoza",
    "placeholder": "No forecast entities configured.",
    "placeholderAction": "Open the card editor to get started.",
    "twoDayNote": "2-day forecast available",
    "labels": {
      "live": "UŽIVO:",
      "exportRate": "TARIFA IZVOZA:",
      "nextHour": "+1 H:",
      "left": "OSTALO:",
      "week": "SEDMICA:",
      "avg": "PROSJEK:",
      "total": "Ukupno",
      "p10": "P10",
      "forecast": "prognoza",
      "generated": "proizvedeno"
    },
    "days": {
      "today": "Today"
    },
    "popup": {
      "close": "Close",
      "noForecastData": "No forecast data",
      "noHourlyData": "No hourly data available for this day.",
      "integrationNoHourlyData": "The selected forecast entities do not provide hourly forecast data.",
      "chart": {
        "time": "Time",
        "power": "Power",
        "kwh": "kWh",
        "forecastShort": "Fcst",
        "actualShort": "Act."
      }
    },
    "history": {
      "title": "Last 7 days",
      "forecast": "Forecast",
      "actual": "Actual",
      "accuracy": "Accuracy",
      "averageMiss": "Average miss per day",
      "bias": "Actual vs forecast per day",
      "readout": "{day}: forecast {forecast}, actual {actual} kWh ({difference})",
      "noActual": "{day}: forecast {forecast} kWh, no recorded generation",
      "noForecast": "{day}: no recorded forecast",
      "loading": "Loading forecast history…",
      "noData": "No forecast history found. Home Assistant needs to have recorded the forecast sensor for at least one full day."
    },
    "aria": {
      "dayButton": "{day} {date}"
    },
    "errors": {
      "invalidConfig": "Invalid configuration"
    },
    "units": {
      "watts": "W",
      "kilowatts": "kW",
      "kilowattHours": "kWh",
      "kilowattHoursPerDay": "kWh/day"
    }
  },
  "editor": {
    "labels": {
      "title": "Title (optional)",
      "icon": "Header icon (optional, e.g. mdi:solar-power)",
      "show_header": "Show header",
      "display_estimate10": "Display Estimate10 Forecast Values",
      "device_id": "Forecast Device",
      "integration_type": "Integration Type",
      "forecast_entity_0": "Day 1 — Today",
      "forecast_entity_1": "Day 2 — Tomorrow",
      "forecast_entity_2": "Day 3",
      "forecast_entity_3": "Day 4",
      "forecast_entity_4": "Day 5",
      "forecast_entity_5": "Day 6",
      "forecast_entity_6": "Day 7",
      "export_rate_entity": "Current Export Rate Entity",
      "live_power_entity": "Live power (optional, kW sensor)",
      "today_actual_entity": "Today's actual generation (optional)",
      "next_hour_entity": "+1HR forecast (optional, overrides auto-derived value)",
      "remaining_today_entity": "LEFT / remaining today (optional, overrides auto-derived value)",
      "main_view": "Main View",
      "inverter_max_kw": "Inverter max output (kW)",
      "solar_max_kwp": "Solar array size (kWp)",
      "low_threshold": "Low threshold (kWh)",
      "high_threshold": "High threshold (kWh)",
      "low_threshold_entity": "Low threshold sensor (optional, kWh)",
      "high_threshold_entity": "High threshold sensor (optional, kWh)",
      "show_low_threshold_zone": "Tint bar track below low threshold",
      "show_high_threshold_zone": "Tint bar track above high threshold",
      "threshold_zone_opacity": "Threshold tint opacity (lower is more transparent)",
      "desktop_text_scale": "Desktop Text Scale",
      "font_size": "Font Size",
      "bar_width": "Bar Width"
    },
    "options": {
      "autoDetect": "Auto-detect",
      "solcast": "Solcast",
      "volcast": "Volcast",
      "forecastSolar": "Forecast.Solar",
      "openMeteo": "Open-Meteo Solar Forecast",
      "mainViewDaily": "Daily",
      "mainViewHourly": "Hourly",
      "mainViewHistory": "History"
    },
    "sections": {
      "integrationType": "Integration Type",
      "dailyForecastEntities": "Daily Forecast Entities",
      "liveData": "Live Data",
      "actualGenerationArrays": "Actual Generation Arrays",
      "systemParameters": "System Parameters",
      "energyProvider": "Energy Provider",
      "colourThresholds": "Colour Thresholds",
      "dateTimeDisplay": "Display"
    },
    "helpers": {
      "device": "Recommended: selecting a device will auto-configure the card",
      "estimate10": "Display Estimate10 is only applicable when the integration type is Solcast",
      "integrationType": "Automatically set when a forecast device is selected above. Override here only when configuring forecast entities manually without a device.",
      "liveData": "+1HR and LEFT are auto-detected or auto-derived where possible. Set these manually to override, or to use a custom sensor.",
      "actualArrays": "Optional: configure individual array sensors to display a stacked breakdown on today's bar. Each label is a single character shown inside its segment (e.g. N, S, E).",
      "desktopTextScale": "Desktop Text Scale: only applies on wider screens (≥ 768 px). Mobile sizing is unchanged.",
      "mainView": "Choose what the card shows. Hourly shows today's hourly forecast. History compares the last 7 days of forecast and actual generation.",
      "fontSize": "Optional daily bar text size in pixels. Leave blank to use CSS/default styling.",
      "barWidth": "Optional forecast bar width in pixels. Leave blank to use CSS/default styling."
    },
    "warnings": {
      "manualEntities": "Changing device will not overwrite manually configured entities."
    },
    "arrays": {
      "entity": "Array entity",
      "label": "Label (1 char)",
      "placeholder": "E",
      "hint": "bar & popup",
      "remove": "Remove",
      "add": "Add array"
    }
  },
  "customCard": {
    "name": "Solar Forecast Card",
    "description": "Daily solar energy forecast with hourly breakdown support."
  }
}
;

var ca = {
  "day": {
    "today": "Avui",
    "tomorrow": "Demà",
    "sunday_short": "dg",
    "monday_short": "dl",
    "tuesday_short": "dt",
    "wednesday_short": "dc",
    "thursday_short": "dj",
    "friday_short": "dv",
    "saturday_short": "ds"
  },
  "card": {
    "defaultTitle": "Previsió solar",
    "placeholder": "No forecast entities configured.",
    "placeholderAction": "Open the card editor to get started.",
    "twoDayNote": "2-day forecast available",
    "labels": {
      "live": "EN DIRECTE:",
      "exportRate": "TARIFA EXPORT:",
      "nextHour": "+1 H:",
      "left": "RESTANT:",
      "week": "SETMANA:",
      "avg": "MITJANA:",
      "total": "Total",
      "p10": "P10",
      "forecast": "previsió",
      "generated": "generat"
    },
    "days": {
      "today": "Today"
    },
    "popup": {
      "close": "Close",
      "noForecastData": "No forecast data",
      "noHourlyData": "No hourly data available for this day.",
      "integrationNoHourlyData": "The selected forecast entities do not provide hourly forecast data.",
      "chart": {
        "time": "Time",
        "power": "Power",
        "kwh": "kWh",
        "forecastShort": "Fcst",
        "actualShort": "Act."
      }
    },
    "history": {
      "title": "Last 7 days",
      "forecast": "Forecast",
      "actual": "Actual",
      "accuracy": "Accuracy",
      "averageMiss": "Average miss per day",
      "bias": "Actual vs forecast per day",
      "readout": "{day}: forecast {forecast}, actual {actual} kWh ({difference})",
      "noActual": "{day}: forecast {forecast} kWh, no recorded generation",
      "noForecast": "{day}: no recorded forecast",
      "loading": "Loading forecast history…",
      "noData": "No forecast history found. Home Assistant needs to have recorded the forecast sensor for at least one full day."
    },
    "aria": {
      "dayButton": "{day} {date}"
    },
    "errors": {
      "invalidConfig": "Invalid configuration"
    },
    "units": {
      "watts": "W",
      "kilowatts": "kW",
      "kilowattHours": "kWh",
      "kilowattHoursPerDay": "kWh/day"
    }
  },
  "editor": {
    "labels": {
      "title": "Title (optional)",
      "icon": "Header icon (optional, e.g. mdi:solar-power)",
      "show_header": "Show header",
      "display_estimate10": "Display Estimate10 Forecast Values",
      "device_id": "Forecast Device",
      "integration_type": "Integration Type",
      "forecast_entity_0": "Day 1 — Today",
      "forecast_entity_1": "Day 2 — Tomorrow",
      "forecast_entity_2": "Day 3",
      "forecast_entity_3": "Day 4",
      "forecast_entity_4": "Day 5",
      "forecast_entity_5": "Day 6",
      "forecast_entity_6": "Day 7",
      "export_rate_entity": "Current Export Rate Entity",
      "live_power_entity": "Live power (optional, kW sensor)",
      "today_actual_entity": "Today's actual generation (optional)",
      "next_hour_entity": "+1HR forecast (optional, overrides auto-derived value)",
      "remaining_today_entity": "LEFT / remaining today (optional, overrides auto-derived value)",
      "main_view": "Main View",
      "inverter_max_kw": "Inverter max output (kW)",
      "solar_max_kwp": "Solar array size (kWp)",
      "low_threshold": "Low threshold (kWh)",
      "high_threshold": "High threshold (kWh)",
      "low_threshold_entity": "Low threshold sensor (optional, kWh)",
      "high_threshold_entity": "High threshold sensor (optional, kWh)",
      "show_low_threshold_zone": "Tint bar track below low threshold",
      "show_high_threshold_zone": "Tint bar track above high threshold",
      "threshold_zone_opacity": "Threshold tint opacity (lower is more transparent)",
      "desktop_text_scale": "Desktop Text Scale",
      "font_size": "Font Size",
      "bar_width": "Bar Width"
    },
    "options": {
      "autoDetect": "Auto-detect",
      "solcast": "Solcast",
      "volcast": "Volcast",
      "forecastSolar": "Forecast.Solar",
      "openMeteo": "Open-Meteo Solar Forecast",
      "mainViewDaily": "Daily",
      "mainViewHourly": "Hourly",
      "mainViewHistory": "History"
    },
    "sections": {
      "integrationType": "Integration Type",
      "dailyForecastEntities": "Daily Forecast Entities",
      "liveData": "Live Data",
      "actualGenerationArrays": "Actual Generation Arrays",
      "systemParameters": "System Parameters",
      "energyProvider": "Energy Provider",
      "colourThresholds": "Colour Thresholds",
      "dateTimeDisplay": "Display"
    },
    "helpers": {
      "device": "Recommended: selecting a device will auto-configure the card",
      "estimate10": "Display Estimate10 is only applicable when the integration type is Solcast",
      "integrationType": "Automatically set when a forecast device is selected above. Override here only when configuring forecast entities manually without a device.",
      "liveData": "+1HR and LEFT are auto-detected or auto-derived where possible. Set these manually to override, or to use a custom sensor.",
      "actualArrays": "Optional: configure individual array sensors to display a stacked breakdown on today's bar. Each label is a single character shown inside its segment (e.g. N, S, E).",
      "desktopTextScale": "Desktop Text Scale: only applies on wider screens (≥ 768 px). Mobile sizing is unchanged.",
      "mainView": "Choose what the card shows. Hourly shows today's hourly forecast. History compares the last 7 days of forecast and actual generation.",
      "fontSize": "Optional daily bar text size in pixels. Leave blank to use CSS/default styling.",
      "barWidth": "Optional forecast bar width in pixels. Leave blank to use CSS/default styling."
    },
    "warnings": {
      "manualEntities": "Changing device will not overwrite manually configured entities."
    },
    "arrays": {
      "entity": "Array entity",
      "label": "Label (1 char)",
      "placeholder": "E",
      "hint": "bar & popup",
      "remove": "Remove",
      "add": "Add array"
    }
  },
  "customCard": {
    "name": "Solar Forecast Card",
    "description": "Daily solar energy forecast with hourly breakdown support."
  }
}
;

var cs = {
  "day": {
    "today": "Dnes",
    "tomorrow": "Zítra",
    "sunday_short": "ne",
    "monday_short": "po",
    "tuesday_short": "út",
    "wednesday_short": "st",
    "thursday_short": "čt",
    "friday_short": "pá",
    "saturday_short": "so"
  },
  "card": {
    "defaultTitle": "Solární předpověď",
    "placeholder": "No forecast entities configured.",
    "placeholderAction": "Open the card editor to get started.",
    "twoDayNote": "2-day forecast available",
    "labels": {
      "live": "ŽIVĚ:",
      "exportRate": "VÝKUPNÍ TARIF:",
      "nextHour": "+1 H:",
      "left": "ZBÝVÁ:",
      "week": "TÝDEN:",
      "avg": "PRŮM.:",
      "total": "Celkem",
      "p10": "P10",
      "forecast": "předpověď",
      "generated": "vyrobeno"
    },
    "days": {
      "today": "Today"
    },
    "popup": {
      "close": "Close",
      "noForecastData": "No forecast data",
      "noHourlyData": "No hourly data available for this day.",
      "integrationNoHourlyData": "The selected forecast entities do not provide hourly forecast data.",
      "chart": {
        "time": "Time",
        "power": "Power",
        "kwh": "kWh",
        "forecastShort": "Fcst",
        "actualShort": "Act."
      }
    },
    "history": {
      "title": "Last 7 days",
      "forecast": "Forecast",
      "actual": "Actual",
      "accuracy": "Accuracy",
      "averageMiss": "Average miss per day",
      "bias": "Actual vs forecast per day",
      "readout": "{day}: forecast {forecast}, actual {actual} kWh ({difference})",
      "noActual": "{day}: forecast {forecast} kWh, no recorded generation",
      "noForecast": "{day}: no recorded forecast",
      "loading": "Loading forecast history…",
      "noData": "No forecast history found. Home Assistant needs to have recorded the forecast sensor for at least one full day."
    },
    "aria": {
      "dayButton": "{day} {date}"
    },
    "errors": {
      "invalidConfig": "Invalid configuration"
    },
    "units": {
      "watts": "W",
      "kilowatts": "kW",
      "kilowattHours": "kWh",
      "kilowattHoursPerDay": "kWh/day"
    }
  },
  "editor": {
    "labels": {
      "title": "Title (optional)",
      "icon": "Header icon (optional, e.g. mdi:solar-power)",
      "show_header": "Show header",
      "display_estimate10": "Display Estimate10 Forecast Values",
      "device_id": "Forecast Device",
      "integration_type": "Integration Type",
      "forecast_entity_0": "Day 1 — Today",
      "forecast_entity_1": "Day 2 — Tomorrow",
      "forecast_entity_2": "Day 3",
      "forecast_entity_3": "Day 4",
      "forecast_entity_4": "Day 5",
      "forecast_entity_5": "Day 6",
      "forecast_entity_6": "Day 7",
      "export_rate_entity": "Current Export Rate Entity",
      "live_power_entity": "Live power (optional, kW sensor)",
      "today_actual_entity": "Today's actual generation (optional)",
      "next_hour_entity": "+1HR forecast (optional, overrides auto-derived value)",
      "remaining_today_entity": "LEFT / remaining today (optional, overrides auto-derived value)",
      "main_view": "Main View",
      "inverter_max_kw": "Inverter max output (kW)",
      "solar_max_kwp": "Solar array size (kWp)",
      "low_threshold": "Low threshold (kWh)",
      "high_threshold": "High threshold (kWh)",
      "low_threshold_entity": "Low threshold sensor (optional, kWh)",
      "high_threshold_entity": "High threshold sensor (optional, kWh)",
      "show_low_threshold_zone": "Tint bar track below low threshold",
      "show_high_threshold_zone": "Tint bar track above high threshold",
      "threshold_zone_opacity": "Threshold tint opacity (lower is more transparent)",
      "desktop_text_scale": "Desktop Text Scale",
      "font_size": "Font Size",
      "bar_width": "Bar Width"
    },
    "options": {
      "autoDetect": "Auto-detect",
      "solcast": "Solcast",
      "volcast": "Volcast",
      "forecastSolar": "Forecast.Solar",
      "openMeteo": "Open-Meteo Solar Forecast",
      "mainViewDaily": "Daily",
      "mainViewHourly": "Hourly",
      "mainViewHistory": "History"
    },
    "sections": {
      "integrationType": "Integration Type",
      "dailyForecastEntities": "Daily Forecast Entities",
      "liveData": "Live Data",
      "actualGenerationArrays": "Actual Generation Arrays",
      "systemParameters": "System Parameters",
      "energyProvider": "Energy Provider",
      "colourThresholds": "Colour Thresholds",
      "dateTimeDisplay": "Display"
    },
    "helpers": {
      "device": "Recommended: selecting a device will auto-configure the card",
      "estimate10": "Display Estimate10 is only applicable when the integration type is Solcast",
      "integrationType": "Automatically set when a forecast device is selected above. Override here only when configuring forecast entities manually without a device.",
      "liveData": "+1HR and LEFT are auto-detected or auto-derived where possible. Set these manually to override, or to use a custom sensor.",
      "actualArrays": "Optional: configure individual array sensors to display a stacked breakdown on today's bar. Each label is a single character shown inside its segment (e.g. N, S, E).",
      "desktopTextScale": "Desktop Text Scale: only applies on wider screens (≥ 768 px). Mobile sizing is unchanged.",
      "mainView": "Choose what the card shows. Hourly shows today's hourly forecast. History compares the last 7 days of forecast and actual generation.",
      "fontSize": "Optional daily bar text size in pixels. Leave blank to use CSS/default styling.",
      "barWidth": "Optional forecast bar width in pixels. Leave blank to use CSS/default styling."
    },
    "warnings": {
      "manualEntities": "Changing device will not overwrite manually configured entities."
    },
    "arrays": {
      "entity": "Array entity",
      "label": "Label (1 char)",
      "placeholder": "E",
      "hint": "bar & popup",
      "remove": "Remove",
      "add": "Add array"
    }
  },
  "customCard": {
    "name": "Solar Forecast Card",
    "description": "Daily solar energy forecast with hourly breakdown support."
  }
}
;

var cy = {
  "day": {
    "today": "Heddiw",
    "tomorrow": "Yfory",
    "sunday_short": "Sul",
    "monday_short": "Llun",
    "tuesday_short": "Maw",
    "wednesday_short": "Mer",
    "thursday_short": "Iau",
    "friday_short": "Gwe",
    "saturday_short": "Sad"
  },
  "card": {
    "defaultTitle": "Rhagolwg solar",
    "placeholder": "No forecast entities configured.",
    "placeholderAction": "Open the card editor to get started.",
    "twoDayNote": "2-day forecast available",
    "labels": {
      "live": "BYW:",
      "exportRate": "CYFRADD ALLFORIO:",
      "nextHour": "+1 A:",
      "left": "AR ÔL:",
      "week": "WYTHNOS:",
      "avg": "CYF:",
      "total": "Cyfanswm",
      "p10": "P10",
      "forecast": "rhagolwg",
      "generated": "cynhyrchwyd"
    },
    "days": {
      "today": "Today"
    },
    "popup": {
      "close": "Close",
      "noForecastData": "No forecast data",
      "noHourlyData": "No hourly data available for this day.",
      "integrationNoHourlyData": "The selected forecast entities do not provide hourly forecast data.",
      "chart": {
        "time": "Time",
        "power": "Power",
        "kwh": "kWh",
        "forecastShort": "Fcst",
        "actualShort": "Act."
      }
    },
    "history": {
      "title": "Last 7 days",
      "forecast": "Forecast",
      "actual": "Actual",
      "accuracy": "Accuracy",
      "averageMiss": "Average miss per day",
      "bias": "Actual vs forecast per day",
      "readout": "{day}: forecast {forecast}, actual {actual} kWh ({difference})",
      "noActual": "{day}: forecast {forecast} kWh, no recorded generation",
      "noForecast": "{day}: no recorded forecast",
      "loading": "Loading forecast history…",
      "noData": "No forecast history found. Home Assistant needs to have recorded the forecast sensor for at least one full day."
    },
    "aria": {
      "dayButton": "{day} {date}"
    },
    "errors": {
      "invalidConfig": "Invalid configuration"
    },
    "units": {
      "watts": "W",
      "kilowatts": "kW",
      "kilowattHours": "kWh",
      "kilowattHoursPerDay": "kWh/day"
    }
  },
  "editor": {
    "labels": {
      "title": "Title (optional)",
      "icon": "Header icon (optional, e.g. mdi:solar-power)",
      "show_header": "Show header",
      "display_estimate10": "Display Estimate10 Forecast Values",
      "device_id": "Forecast Device",
      "integration_type": "Integration Type",
      "forecast_entity_0": "Day 1 — Today",
      "forecast_entity_1": "Day 2 — Tomorrow",
      "forecast_entity_2": "Day 3",
      "forecast_entity_3": "Day 4",
      "forecast_entity_4": "Day 5",
      "forecast_entity_5": "Day 6",
      "forecast_entity_6": "Day 7",
      "export_rate_entity": "Current Export Rate Entity",
      "live_power_entity": "Live power (optional, kW sensor)",
      "today_actual_entity": "Today's actual generation (optional)",
      "next_hour_entity": "+1HR forecast (optional, overrides auto-derived value)",
      "remaining_today_entity": "LEFT / remaining today (optional, overrides auto-derived value)",
      "main_view": "Main View",
      "inverter_max_kw": "Inverter max output (kW)",
      "solar_max_kwp": "Solar array size (kWp)",
      "low_threshold": "Low threshold (kWh)",
      "high_threshold": "High threshold (kWh)",
      "low_threshold_entity": "Low threshold sensor (optional, kWh)",
      "high_threshold_entity": "High threshold sensor (optional, kWh)",
      "show_low_threshold_zone": "Tint bar track below low threshold",
      "show_high_threshold_zone": "Tint bar track above high threshold",
      "threshold_zone_opacity": "Threshold tint opacity (lower is more transparent)",
      "desktop_text_scale": "Desktop Text Scale",
      "font_size": "Font Size",
      "bar_width": "Bar Width"
    },
    "options": {
      "autoDetect": "Auto-detect",
      "solcast": "Solcast",
      "volcast": "Volcast",
      "forecastSolar": "Forecast.Solar",
      "openMeteo": "Open-Meteo Solar Forecast",
      "mainViewDaily": "Daily",
      "mainViewHourly": "Hourly",
      "mainViewHistory": "History"
    },
    "sections": {
      "integrationType": "Integration Type",
      "dailyForecastEntities": "Daily Forecast Entities",
      "liveData": "Live Data",
      "actualGenerationArrays": "Actual Generation Arrays",
      "systemParameters": "System Parameters",
      "energyProvider": "Energy Provider",
      "colourThresholds": "Colour Thresholds",
      "dateTimeDisplay": "Display"
    },
    "helpers": {
      "device": "Recommended: selecting a device will auto-configure the card",
      "estimate10": "Display Estimate10 is only applicable when the integration type is Solcast",
      "integrationType": "Automatically set when a forecast device is selected above. Override here only when configuring forecast entities manually without a device.",
      "liveData": "+1HR and LEFT are auto-detected or auto-derived where possible. Set these manually to override, or to use a custom sensor.",
      "actualArrays": "Optional: configure individual array sensors to display a stacked breakdown on today's bar. Each label is a single character shown inside its segment (e.g. N, S, E).",
      "desktopTextScale": "Desktop Text Scale: only applies on wider screens (≥ 768 px). Mobile sizing is unchanged.",
      "mainView": "Choose what the card shows. Hourly shows today's hourly forecast. History compares the last 7 days of forecast and actual generation.",
      "fontSize": "Optional daily bar text size in pixels. Leave blank to use CSS/default styling.",
      "barWidth": "Optional forecast bar width in pixels. Leave blank to use CSS/default styling."
    },
    "warnings": {
      "manualEntities": "Changing device will not overwrite manually configured entities."
    },
    "arrays": {
      "entity": "Array entity",
      "label": "Label (1 char)",
      "placeholder": "E",
      "hint": "bar & popup",
      "remove": "Remove",
      "add": "Add array"
    }
  },
  "customCard": {
    "name": "Solar Forecast Card",
    "description": "Daily solar energy forecast with hourly breakdown support."
  }
}
;

var da = {
  "day": {
    "today": "I dag",
    "tomorrow": "I morgen",
    "sunday_short": "søn",
    "monday_short": "man",
    "tuesday_short": "tirs",
    "wednesday_short": "ons",
    "thursday_short": "tors",
    "friday_short": "fre",
    "saturday_short": "lør"
  },
  "card": {
    "defaultTitle": "Solprognose",
    "placeholder": "No forecast entities configured.",
    "placeholderAction": "Open the card editor to get started.",
    "twoDayNote": "2-day forecast available",
    "labels": {
      "live": "LIVE:",
      "exportRate": "EKSPORTTARIF:",
      "nextHour": "+1 T:",
      "left": "TILBAGE:",
      "week": "UGE:",
      "avg": "GENNEM.:",
      "total": "Total",
      "p10": "P10",
      "forecast": "prognose",
      "generated": "produceret"
    },
    "days": {
      "today": "Today"
    },
    "popup": {
      "close": "Close",
      "noForecastData": "No forecast data",
      "noHourlyData": "No hourly data available for this day.",
      "integrationNoHourlyData": "The selected forecast entities do not provide hourly forecast data.",
      "chart": {
        "time": "Time",
        "power": "Power",
        "kwh": "kWh",
        "forecastShort": "Fcst",
        "actualShort": "Act."
      }
    },
    "history": {
      "title": "Last 7 days",
      "forecast": "Forecast",
      "actual": "Actual",
      "accuracy": "Accuracy",
      "averageMiss": "Average miss per day",
      "bias": "Actual vs forecast per day",
      "readout": "{day}: forecast {forecast}, actual {actual} kWh ({difference})",
      "noActual": "{day}: forecast {forecast} kWh, no recorded generation",
      "noForecast": "{day}: no recorded forecast",
      "loading": "Loading forecast history…",
      "noData": "No forecast history found. Home Assistant needs to have recorded the forecast sensor for at least one full day."
    },
    "aria": {
      "dayButton": "{day} {date}"
    },
    "errors": {
      "invalidConfig": "Invalid configuration"
    },
    "units": {
      "watts": "W",
      "kilowatts": "kW",
      "kilowattHours": "kWh",
      "kilowattHoursPerDay": "kWh/day"
    }
  },
  "editor": {
    "labels": {
      "title": "Title (optional)",
      "icon": "Header icon (optional, e.g. mdi:solar-power)",
      "show_header": "Show header",
      "display_estimate10": "Display Estimate10 Forecast Values",
      "device_id": "Forecast Device",
      "integration_type": "Integration Type",
      "forecast_entity_0": "Day 1 — Today",
      "forecast_entity_1": "Day 2 — Tomorrow",
      "forecast_entity_2": "Day 3",
      "forecast_entity_3": "Day 4",
      "forecast_entity_4": "Day 5",
      "forecast_entity_5": "Day 6",
      "forecast_entity_6": "Day 7",
      "export_rate_entity": "Current Export Rate Entity",
      "live_power_entity": "Live power (optional, kW sensor)",
      "today_actual_entity": "Today's actual generation (optional)",
      "next_hour_entity": "+1HR forecast (optional, overrides auto-derived value)",
      "remaining_today_entity": "LEFT / remaining today (optional, overrides auto-derived value)",
      "main_view": "Main View",
      "inverter_max_kw": "Inverter max output (kW)",
      "solar_max_kwp": "Solar array size (kWp)",
      "low_threshold": "Low threshold (kWh)",
      "high_threshold": "High threshold (kWh)",
      "low_threshold_entity": "Low threshold sensor (optional, kWh)",
      "high_threshold_entity": "High threshold sensor (optional, kWh)",
      "show_low_threshold_zone": "Tint bar track below low threshold",
      "show_high_threshold_zone": "Tint bar track above high threshold",
      "threshold_zone_opacity": "Threshold tint opacity (lower is more transparent)",
      "desktop_text_scale": "Desktop Text Scale",
      "font_size": "Font Size",
      "bar_width": "Bar Width"
    },
    "options": {
      "autoDetect": "Auto-detect",
      "solcast": "Solcast",
      "volcast": "Volcast",
      "forecastSolar": "Forecast.Solar",
      "openMeteo": "Open-Meteo Solar Forecast",
      "mainViewDaily": "Daily",
      "mainViewHourly": "Hourly",
      "mainViewHistory": "History"
    },
    "sections": {
      "integrationType": "Integration Type",
      "dailyForecastEntities": "Daily Forecast Entities",
      "liveData": "Live Data",
      "actualGenerationArrays": "Actual Generation Arrays",
      "systemParameters": "System Parameters",
      "energyProvider": "Energy Provider",
      "colourThresholds": "Colour Thresholds",
      "dateTimeDisplay": "Display"
    },
    "helpers": {
      "device": "Recommended: selecting a device will auto-configure the card",
      "estimate10": "Display Estimate10 is only applicable when the integration type is Solcast",
      "integrationType": "Automatically set when a forecast device is selected above. Override here only when configuring forecast entities manually without a device.",
      "liveData": "+1HR and LEFT are auto-detected or auto-derived where possible. Set these manually to override, or to use a custom sensor.",
      "actualArrays": "Optional: configure individual array sensors to display a stacked breakdown on today's bar. Each label is a single character shown inside its segment (e.g. N, S, E).",
      "desktopTextScale": "Desktop Text Scale: only applies on wider screens (≥ 768 px). Mobile sizing is unchanged.",
      "mainView": "Choose what the card shows. Hourly shows today's hourly forecast. History compares the last 7 days of forecast and actual generation.",
      "fontSize": "Optional daily bar text size in pixels. Leave blank to use CSS/default styling.",
      "barWidth": "Optional forecast bar width in pixels. Leave blank to use CSS/default styling."
    },
    "warnings": {
      "manualEntities": "Changing device will not overwrite manually configured entities."
    },
    "arrays": {
      "entity": "Array entity",
      "label": "Label (1 char)",
      "placeholder": "E",
      "hint": "bar & popup",
      "remove": "Remove",
      "add": "Add array"
    }
  },
  "customCard": {
    "name": "Solar Forecast Card",
    "description": "Daily solar energy forecast with hourly breakdown support."
  }
}
;

var de = {
  "day": {
    "today": "Heute",
    "tomorrow": "Morgen",
    "sunday_short": "So",
    "monday_short": "Mo",
    "tuesday_short": "Di",
    "wednesday_short": "Mi",
    "thursday_short": "Do",
    "friday_short": "Fr",
    "saturday_short": "Sa"
  },
  "card": {
    "defaultTitle": "Solarprognose",
    "placeholder": "Keine Prognose-Entitäten konfiguriert.",
    "placeholderAction": "Öffne den Karteneditor, um zu beginnen.",
    "twoDayNote": "2-Tage-Prognose verfügbar",
    "labels": {
      "live": "LIVE:",
      "exportRate": "EINSPEISEVERGÜTUNG:",
      "nextHour": "+1 STD:",
      "left": "REST:",
      "week": "WOCHE:",
      "avg": "Ø:",
      "total": "Gesamt",
      "p10": "P10",
      "forecast": "Prognose",
      "generated": "erzeugt"
    },
    "days": {
      "today": "Heute"
    },
    "popup": {
      "close": "Schließen",
      "noForecastData": "Keine Prognosedaten",
      "noHourlyData": "Keine stündlichen Daten für diesen Tag verfügbar.",
      "integrationNoHourlyData": "Die ausgewählten Prognose-Entitäten stellen keine stündlichen Prognosedaten bereit.",
      "chart": {
        "time": "Zeit",
        "power": "Leistung",
        "kwh": "kWh",
        "forecastShort": "Prog.",
        "actualShort": "Ist"
      }
    },
    "history": {
      "title": "Last 7 days",
      "forecast": "Forecast",
      "actual": "Actual",
      "accuracy": "Accuracy",
      "averageMiss": "Average miss per day",
      "bias": "Actual vs forecast per day",
      "readout": "{day}: forecast {forecast}, actual {actual} kWh ({difference})",
      "noActual": "{day}: forecast {forecast} kWh, no recorded generation",
      "noForecast": "{day}: no recorded forecast",
      "loading": "Loading forecast history…",
      "noData": "No forecast history found. Home Assistant needs to have recorded the forecast sensor for at least one full day."
    },
    "aria": {
      "dayButton": "{day} {date}"
    },
    "errors": {
      "invalidConfig": "Ungültige Konfiguration"
    },
    "units": {
      "watts": "W",
      "kilowatts": "kW",
      "kilowattHours": "kWh",
      "kilowattHoursPerDay": "kWh/Tag"
    }
  },
  "editor": {
    "labels": {
      "title": "Titel (optional)",
      "icon": "Header-Symbol (optional, z. B. mdi:solar-power)",
      "show_header": "Header anzeigen",
      "display_estimate10": "Estimate10-Prognosewerte anzeigen",
      "device_id": "Prognosegerät",
      "integration_type": "Integrationstyp",
      "forecast_entity_0": "Tag 1 - Heute",
      "forecast_entity_1": "Tag 2 - Morgen",
      "forecast_entity_2": "Tag 3",
      "forecast_entity_3": "Tag 4",
      "forecast_entity_4": "Tag 5",
      "forecast_entity_5": "Tag 6",
      "forecast_entity_6": "Tag 7",
      "export_rate_entity": "Aktuelle Einspeisevergütung-Entität",
      "live_power_entity": "Live-Leistung (optional, kW-Sensor)",
      "today_actual_entity": "Heutige tatsächliche Erzeugung (optional)",
      "next_hour_entity": "+1 STD Prognose (optional, überschreibt automatisch abgeleiteten Wert)",
      "remaining_today_entity": "REST / verbleibend heute (optional, überschreibt automatisch abgeleiteten Wert)",
      "main_view": "Main View",
      "inverter_max_kw": "Max. Wechselrichterleistung (kW)",
      "solar_max_kwp": "Größe der Solaranlage (kWp)",
      "low_threshold": "Niedriger Schwellenwert (kWh)",
      "high_threshold": "Hoher Schwellenwert (kWh)",
      "low_threshold_entity": "Niedriger Schwellenwert Sensor (kWh)",
      "high_threshold_entity": "Hoher Schwellenwert Sensor (kWh)",
      "show_low_threshold_zone": "Tint bar track below low threshold",
      "show_high_threshold_zone": "Tint bar track above high threshold",
      "threshold_zone_opacity": "Threshold tint opacity (lower is more transparent)",
      "desktop_text_scale": "Desktop-Textskalierung",
      "font_size": "Font Size",
      "bar_width": "Bar Width"
    },
    "options": {
      "autoDetect": "Automatisch erkennen",
      "solcast": "Solcast",
      "volcast": "Volcast",
      "forecastSolar": "Forecast.Solar",
      "openMeteo": "Open-Meteo Solar Forecast",
      "mainViewDaily": "Daily",
      "mainViewHourly": "Hourly",
      "mainViewHistory": "History"
    },
    "sections": {
      "integrationType": "Integrationstyp",
      "dailyForecastEntities": "Tägliche Prognose-Entitäten",
      "liveData": "Live-Daten",
      "actualGenerationArrays": "Tatsächliche Erzeugungs-Arrays",
      "systemParameters": "Systemparameter",
      "energyProvider": "Energieanbieter",
      "colourThresholds": "Farbschwellenwerte",
      "dateTimeDisplay": "Display"
    },
    "helpers": {
      "device": "Empfohlen: Die Auswahl eines Geräts konfiguriert die Karte automatisch",
      "estimate10": "Estimate10 anzeigen gilt nur für den Integrationstyp Solcast",
      "integrationType": "Wird automatisch gesetzt, wenn oben ein Prognosegerät ausgewählt ist. Nur überschreiben, wenn Prognose-Entitäten manuell ohne Gerät konfiguriert werden.",
      "liveData": "+1 STD und REST werden, wenn möglich, automatisch erkannt oder abgeleitet. Setze diese Werte manuell, um sie zu überschreiben oder einen eigenen Sensor zu verwenden.",
      "actualArrays": "Optional: Konfiguriere einzelne Array-Sensoren, um eine gestapelte Aufschlüsselung auf dem heutigen Balken anzuzeigen. Jedes Label ist ein einzelnes Zeichen im Segment (z. B. N, S, O).",
      "desktopTextScale": "Desktop-Textskalierung: gilt nur auf breiteren Bildschirmen (≥ 768 px). Die mobile Größe bleibt unverändert.",
      "mainView": "Choose what the card shows. Hourly shows today's hourly forecast. History compares the last 7 days of forecast and actual generation.",
      "fontSize": "Optional daily bar text size in pixels. Leave blank to use CSS/default styling.",
      "barWidth": "Optional forecast bar width in pixels. Leave blank to use CSS/default styling."
    },
    "warnings": {
      "manualEntities": "Das Ändern des Geräts überschreibt manuell konfigurierte Entitäten nicht."
    },
    "arrays": {
      "entity": "Array-Entität",
      "label": "Label (1 Zeichen)",
      "placeholder": "O",
      "hint": "Balken & Popup",
      "remove": "Entfernen",
      "add": "Array hinzufügen"
    }
  },
  "customCard": {
    "name": "Solar Forecast Card",
    "description": "Tägliche Solarenergieprognose mit Unterstützung für stündliche Aufschlüsselung."
  }
}
;

var el = {
  "day": {
    "today": "Σήμερα",
    "tomorrow": "Αύριο",
    "sunday_short": "Κυρ",
    "monday_short": "Δευ",
    "tuesday_short": "Τρί",
    "wednesday_short": "Τετ",
    "thursday_short": "Πέμ",
    "friday_short": "Παρ",
    "saturday_short": "Σάβ"
  },
  "card": {
    "defaultTitle": "Ηλιακή πρόγνωση",
    "placeholder": "No forecast entities configured.",
    "placeholderAction": "Open the card editor to get started.",
    "twoDayNote": "2-day forecast available",
    "labels": {
      "live": "ΖΩΝΤΑΝΑ:",
      "exportRate": "ΤΙΜΗ ΕΞΑΓΩΓΗΣ:",
      "nextHour": "+1 Ω:",
      "left": "ΥΠΟΛ.:",
      "week": "ΕΒΔΟΜΑΔΑ:",
      "avg": "Μ.Ο.:",
      "total": "Σύνολο",
      "p10": "P10",
      "forecast": "πρόγνωση",
      "generated": "παράχθηκε"
    },
    "days": {
      "today": "Today"
    },
    "popup": {
      "close": "Close",
      "noForecastData": "No forecast data",
      "noHourlyData": "No hourly data available for this day.",
      "integrationNoHourlyData": "The selected forecast entities do not provide hourly forecast data.",
      "chart": {
        "time": "Time",
        "power": "Power",
        "kwh": "kWh",
        "forecastShort": "Fcst",
        "actualShort": "Act."
      }
    },
    "history": {
      "title": "Last 7 days",
      "forecast": "Forecast",
      "actual": "Actual",
      "accuracy": "Accuracy",
      "averageMiss": "Average miss per day",
      "bias": "Actual vs forecast per day",
      "readout": "{day}: forecast {forecast}, actual {actual} kWh ({difference})",
      "noActual": "{day}: forecast {forecast} kWh, no recorded generation",
      "noForecast": "{day}: no recorded forecast",
      "loading": "Loading forecast history…",
      "noData": "No forecast history found. Home Assistant needs to have recorded the forecast sensor for at least one full day."
    },
    "aria": {
      "dayButton": "{day} {date}"
    },
    "errors": {
      "invalidConfig": "Invalid configuration"
    },
    "units": {
      "watts": "W",
      "kilowatts": "kW",
      "kilowattHours": "kWh",
      "kilowattHoursPerDay": "kWh/day"
    }
  },
  "editor": {
    "labels": {
      "title": "Title (optional)",
      "icon": "Header icon (optional, e.g. mdi:solar-power)",
      "show_header": "Show header",
      "display_estimate10": "Display Estimate10 Forecast Values",
      "device_id": "Forecast Device",
      "integration_type": "Integration Type",
      "forecast_entity_0": "Day 1 — Today",
      "forecast_entity_1": "Day 2 — Tomorrow",
      "forecast_entity_2": "Day 3",
      "forecast_entity_3": "Day 4",
      "forecast_entity_4": "Day 5",
      "forecast_entity_5": "Day 6",
      "forecast_entity_6": "Day 7",
      "export_rate_entity": "Current Export Rate Entity",
      "live_power_entity": "Live power (optional, kW sensor)",
      "today_actual_entity": "Today's actual generation (optional)",
      "next_hour_entity": "+1HR forecast (optional, overrides auto-derived value)",
      "remaining_today_entity": "LEFT / remaining today (optional, overrides auto-derived value)",
      "main_view": "Main View",
      "inverter_max_kw": "Inverter max output (kW)",
      "solar_max_kwp": "Solar array size (kWp)",
      "low_threshold": "Low threshold (kWh)",
      "high_threshold": "High threshold (kWh)",
      "low_threshold_entity": "Low threshold sensor (optional, kWh)",
      "high_threshold_entity": "High threshold sensor (optional, kWh)",
      "show_low_threshold_zone": "Tint bar track below low threshold",
      "show_high_threshold_zone": "Tint bar track above high threshold",
      "threshold_zone_opacity": "Threshold tint opacity (lower is more transparent)",
      "desktop_text_scale": "Desktop Text Scale",
      "font_size": "Font Size",
      "bar_width": "Bar Width"
    },
    "options": {
      "autoDetect": "Auto-detect",
      "solcast": "Solcast",
      "volcast": "Volcast",
      "forecastSolar": "Forecast.Solar",
      "openMeteo": "Open-Meteo Solar Forecast",
      "mainViewDaily": "Daily",
      "mainViewHourly": "Hourly",
      "mainViewHistory": "History"
    },
    "sections": {
      "integrationType": "Integration Type",
      "dailyForecastEntities": "Daily Forecast Entities",
      "liveData": "Live Data",
      "actualGenerationArrays": "Actual Generation Arrays",
      "systemParameters": "System Parameters",
      "energyProvider": "Energy Provider",
      "colourThresholds": "Colour Thresholds",
      "dateTimeDisplay": "Display"
    },
    "helpers": {
      "device": "Recommended: selecting a device will auto-configure the card",
      "estimate10": "Display Estimate10 is only applicable when the integration type is Solcast",
      "integrationType": "Automatically set when a forecast device is selected above. Override here only when configuring forecast entities manually without a device.",
      "liveData": "+1HR and LEFT are auto-detected or auto-derived where possible. Set these manually to override, or to use a custom sensor.",
      "actualArrays": "Optional: configure individual array sensors to display a stacked breakdown on today's bar. Each label is a single character shown inside its segment (e.g. N, S, E).",
      "desktopTextScale": "Desktop Text Scale: only applies on wider screens (≥ 768 px). Mobile sizing is unchanged.",
      "mainView": "Choose what the card shows. Hourly shows today's hourly forecast. History compares the last 7 days of forecast and actual generation.",
      "fontSize": "Optional daily bar text size in pixels. Leave blank to use CSS/default styling.",
      "barWidth": "Optional forecast bar width in pixels. Leave blank to use CSS/default styling."
    },
    "warnings": {
      "manualEntities": "Changing device will not overwrite manually configured entities."
    },
    "arrays": {
      "entity": "Array entity",
      "label": "Label (1 char)",
      "placeholder": "E",
      "hint": "bar & popup",
      "remove": "Remove",
      "add": "Add array"
    }
  },
  "customCard": {
    "name": "Solar Forecast Card",
    "description": "Daily solar energy forecast with hourly breakdown support."
  }
}
;

var en = {
  "day": {
    "today": "Today",
    "tomorrow": "Tomorrow",
    "sunday_short": "Sun",
    "monday_short": "Mon",
    "tuesday_short": "Tue",
    "wednesday_short": "Wed",
    "thursday_short": "Thu",
    "friday_short": "Fri",
    "saturday_short": "Sat"
  },
  "card": {
    "defaultTitle": "Solar Forecast",
    "placeholder": "No forecast entities configured.",
    "placeholderAction": "Open the card editor to get started.",
    "twoDayNote": "2-day forecast available",
    "labels": {
      "live": "LIVE:",
      "exportRate": "EXPORT RATE:",
      "nextHour": "+1HR:",
      "left": "LEFT:",
      "week": "WEEK:",
      "avg": "AVG:",
      "total": "Total",
      "p10": "P10",
      "forecast": "forecast",
      "generated": "generated"
    },
    "days": {
      "today": "Today"
    },
    "popup": {
      "close": "Close",
      "noForecastData": "No forecast data",
      "noHourlyData": "No hourly data available for this day.",
      "integrationNoHourlyData": "The selected forecast entities do not provide hourly forecast data.",
      "chart": {
        "time": "Time",
        "power": "Power",
        "kwh": "kWh",
        "forecastShort": "Fcst",
        "actualShort": "Act."
      }
    },
    "history": {
      "title": "Last 7 days",
      "forecast": "Forecast",
      "actual": "Actual",
      "accuracy": "Accuracy",
      "averageMiss": "Average miss per day",
      "bias": "Actual vs forecast per day",
      "readout": "{day}: forecast {forecast}, actual {actual} kWh ({difference})",
      "noActual": "{day}: forecast {forecast} kWh, no recorded generation",
      "noForecast": "{day}: no recorded forecast",
      "loading": "Loading forecast history…",
      "noData": "No forecast history found. Home Assistant needs to have recorded the forecast sensor for at least one full day."
    },
    "aria": {
      "dayButton": "{day} {date}"
    },
    "errors": {
      "invalidConfig": "Invalid configuration"
    },
    "units": {
      "watts": "W",
      "kilowatts": "kW",
      "kilowattHours": "kWh",
      "kilowattHoursPerDay": "kWh/day"
    }
  },
  "editor": {
    "labels": {
      "title": "Title (optional)",
      "icon": "Header icon (optional, e.g. mdi:solar-power)",
      "show_header": "Show header",
      "display_estimate10": "Display Estimate10 Forecast Values",
      "device_id": "Forecast Device",
      "integration_type": "Integration Type",
      "forecast_entity_0": "Day 1 — Today",
      "forecast_entity_1": "Day 2 — Tomorrow",
      "forecast_entity_2": "Day 3",
      "forecast_entity_3": "Day 4",
      "forecast_entity_4": "Day 5",
      "forecast_entity_5": "Day 6",
      "forecast_entity_6": "Day 7",
      "export_rate_entity": "Current Export Rate Entity",
      "live_power_entity": "Live power (optional, kW sensor)",
      "today_actual_entity": "Today's actual generation (optional)",
      "next_hour_entity": "+1HR forecast (optional, overrides auto-derived value)",
      "remaining_today_entity": "LEFT / remaining today (optional, overrides auto-derived value)",
      "main_view": "Main View",
      "inverter_max_kw": "Inverter max output (kW)",
      "solar_max_kwp": "Solar array size (kWp)",
      "low_threshold": "Low threshold (kWh)",
      "high_threshold": "High threshold (kWh)",
      "low_threshold_entity": "Low threshold sensor (optional, kWh)",
      "high_threshold_entity": "High threshold sensor (optional, kWh)",
      "show_low_threshold_zone": "Tint bar track below low threshold",
      "show_high_threshold_zone": "Tint bar track above high threshold",
      "threshold_zone_opacity": "Threshold tint opacity (lower is more transparent)",
      "desktop_text_scale": "Desktop Text Scale",
      "font_size": "Font Size",
      "bar_width": "Bar Width"
    },
    "options": {
      "autoDetect": "Auto-detect",
      "solcast": "Solcast",
      "volcast": "Volcast",
      "forecastSolar": "Forecast.Solar",
      "openMeteo": "Open-Meteo Solar Forecast",
      "mainViewDaily": "Daily",
      "mainViewHourly": "Hourly",
      "mainViewHistory": "History"
    },
    "sections": {
      "integrationType": "Integration Type",
      "dailyForecastEntities": "Daily Forecast Entities",
      "liveData": "Live Data",
      "actualGenerationArrays": "Actual Generation Arrays",
      "systemParameters": "System Parameters",
      "energyProvider": "Energy Provider",
      "colourThresholds": "Colour Thresholds",
      "dateTimeDisplay": "Display"
    },
    "helpers": {
      "device": "Recommended: selecting a device will auto-configure the card",
      "estimate10": "Display Estimate10 is only applicable when the integration type is Solcast",
      "integrationType": "Automatically set when a forecast device is selected above. Override here only when configuring forecast entities manually without a device.",
      "liveData": "+1HR and LEFT are auto-detected or auto-derived where possible. Set these manually to override, or to use a custom sensor.",
      "actualArrays": "Optional: configure individual array sensors to display a stacked breakdown on today's bar. Each label is a single character shown inside its segment (e.g. N, S, E).",
      "desktopTextScale": "Desktop Text Scale: only applies on wider screens (≥ 768 px). Mobile sizing is unchanged.",
      "mainView": "Choose what the card shows. Hourly shows today's hourly forecast. History compares the last 7 days of forecast and actual generation.",
      "fontSize": "Optional daily bar text size in pixels. Leave blank to use CSS/default styling.",
      "barWidth": "Optional forecast bar width in pixels. Leave blank to use CSS/default styling."
    },
    "warnings": {
      "manualEntities": "Changing device will not overwrite manually configured entities."
    },
    "arrays": {
      "entity": "Array entity",
      "label": "Label (1 char)",
      "placeholder": "E",
      "hint": "bar & popup",
      "remove": "Remove",
      "add": "Add array"
    }
  },
  "customCard": {
    "name": "Solar Forecast Card",
    "description": "Daily solar energy forecast with hourly breakdown support."
  }
}
;

var en_GB = {
  "day": {
    "today": "Today",
    "tomorrow": "Tomorrow",
    "sunday_short": "Sun",
    "monday_short": "Mon",
    "tuesday_short": "Tue",
    "wednesday_short": "Wed",
    "thursday_short": "Thu",
    "friday_short": "Fri",
    "saturday_short": "Sat"
  },
  "card": {
    "defaultTitle": "Solar Forecast",
    "placeholder": "No forecast entities configured.",
    "placeholderAction": "Open the card editor to get started.",
    "twoDayNote": "2-day forecast available",
    "labels": {
      "live": "LIVE:",
      "exportRate": "EXPORT RATE:",
      "nextHour": "+1HR:",
      "left": "LEFT:",
      "week": "WEEK:",
      "avg": "AVG:",
      "total": "Total",
      "p10": "P10",
      "forecast": "forecast",
      "generated": "generated"
    },
    "days": {
      "today": "Today"
    },
    "popup": {
      "close": "Close",
      "noForecastData": "No forecast data",
      "noHourlyData": "No hourly data available for this day.",
      "integrationNoHourlyData": "The selected forecast entities do not provide hourly forecast data.",
      "chart": {
        "time": "Time",
        "power": "Power",
        "kwh": "kWh",
        "forecastShort": "Fcst",
        "actualShort": "Act."
      }
    },
    "history": {
      "title": "Last 7 days",
      "forecast": "Forecast",
      "actual": "Actual",
      "accuracy": "Accuracy",
      "averageMiss": "Average miss per day",
      "bias": "Actual vs forecast per day",
      "readout": "{day}: forecast {forecast}, actual {actual} kWh ({difference})",
      "noActual": "{day}: forecast {forecast} kWh, no recorded generation",
      "noForecast": "{day}: no recorded forecast",
      "loading": "Loading forecast history…",
      "noData": "No forecast history found. Home Assistant needs to have recorded the forecast sensor for at least one full day."
    },
    "aria": {
      "dayButton": "{day} {date}"
    },
    "errors": {
      "invalidConfig": "Invalid configuration"
    },
    "units": {
      "watts": "W",
      "kilowatts": "kW",
      "kilowattHours": "kWh",
      "kilowattHoursPerDay": "kWh/day"
    }
  },
  "editor": {
    "labels": {
      "title": "Title (optional)",
      "icon": "Header icon (optional, e.g. mdi:solar-power)",
      "show_header": "Show header",
      "display_estimate10": "Display Estimate10 Forecast Values",
      "device_id": "Forecast Device",
      "integration_type": "Integration Type",
      "forecast_entity_0": "Day 1 — Today",
      "forecast_entity_1": "Day 2 — Tomorrow",
      "forecast_entity_2": "Day 3",
      "forecast_entity_3": "Day 4",
      "forecast_entity_4": "Day 5",
      "forecast_entity_5": "Day 6",
      "forecast_entity_6": "Day 7",
      "export_rate_entity": "Current Export Rate Entity",
      "live_power_entity": "Live power (optional, kW sensor)",
      "today_actual_entity": "Today's actual generation (optional)",
      "next_hour_entity": "+1HR forecast (optional, overrides auto-derived value)",
      "remaining_today_entity": "LEFT / remaining today (optional, overrides auto-derived value)",
      "main_view": "Main View",
      "inverter_max_kw": "Inverter max output (kW)",
      "solar_max_kwp": "Solar array size (kWp)",
      "low_threshold": "Low threshold (kWh)",
      "high_threshold": "High threshold (kWh)",
      "low_threshold_entity": "Low threshold sensor (optional, kWh)",
      "high_threshold_entity": "High threshold sensor (optional, kWh)",
      "show_low_threshold_zone": "Tint bar track below low threshold",
      "show_high_threshold_zone": "Tint bar track above high threshold",
      "threshold_zone_opacity": "Threshold tint opacity (lower is more transparent)",
      "desktop_text_scale": "Desktop Text Scale",
      "font_size": "Font Size",
      "bar_width": "Bar Width"
    },
    "options": {
      "autoDetect": "Auto-detect",
      "solcast": "Solcast",
      "volcast": "Volcast",
      "forecastSolar": "Forecast.Solar",
      "openMeteo": "Open-Meteo Solar Forecast",
      "mainViewDaily": "Daily",
      "mainViewHourly": "Hourly",
      "mainViewHistory": "History"
    },
    "sections": {
      "integrationType": "Integration Type",
      "dailyForecastEntities": "Daily Forecast Entities",
      "liveData": "Live Data",
      "actualGenerationArrays": "Actual Generation Arrays",
      "systemParameters": "System Parameters",
      "energyProvider": "Energy Provider",
      "colourThresholds": "Colour Thresholds",
      "dateTimeDisplay": "Display"
    },
    "helpers": {
      "device": "Recommended: selecting a device will auto-configure the card",
      "estimate10": "Display Estimate10 is only applicable when the integration type is Solcast",
      "integrationType": "Automatically set when a forecast device is selected above. Override here only when configuring forecast entities manually without a device.",
      "liveData": "+1HR and LEFT are auto-detected or auto-derived where possible. Set these manually to override, or to use a custom sensor.",
      "actualArrays": "Optional: configure individual array sensors to display a stacked breakdown on today's bar. Each label is a single character shown inside its segment (e.g. N, S, E).",
      "desktopTextScale": "Desktop Text Scale: only applies on wider screens (≥ 768 px). Mobile sizing is unchanged.",
      "mainView": "Choose what the card shows. Hourly shows today's hourly forecast. History compares the last 7 days of forecast and actual generation.",
      "fontSize": "Optional daily bar text size in pixels. Leave blank to use CSS/default styling.",
      "barWidth": "Optional forecast bar width in pixels. Leave blank to use CSS/default styling."
    },
    "warnings": {
      "manualEntities": "Changing device will not overwrite manually configured entities."
    },
    "arrays": {
      "entity": "Array entity",
      "label": "Label (1 char)",
      "placeholder": "E",
      "hint": "bar & popup",
      "remove": "Remove",
      "add": "Add array"
    }
  },
  "customCard": {
    "name": "Solar Forecast Card",
    "description": "Daily solar energy forecast with hourly breakdown support."
  }
}
;

var eo = {
  "day": {
    "today": "Hodiaŭ",
    "tomorrow": "Morgaŭ",
    "sunday_short": "di",
    "monday_short": "lu",
    "tuesday_short": "ma",
    "wednesday_short": "me",
    "thursday_short": "ĵa",
    "friday_short": "ve",
    "saturday_short": "sa"
  },
  "card": {
    "defaultTitle": "Suna prognozo",
    "placeholder": "No forecast entities configured.",
    "placeholderAction": "Open the card editor to get started.",
    "twoDayNote": "2-day forecast available",
    "labels": {
      "live": "VIVE:",
      "exportRate": "EKSPORTA TARIFO:",
      "nextHour": "+1 H:",
      "left": "RESTAS:",
      "week": "SEMAJNO:",
      "avg": "MEZ.:",
      "total": "Entute",
      "p10": "P10",
      "forecast": "prognozo",
      "generated": "produktita"
    },
    "days": {
      "today": "Today"
    },
    "popup": {
      "close": "Close",
      "noForecastData": "No forecast data",
      "noHourlyData": "No hourly data available for this day.",
      "integrationNoHourlyData": "The selected forecast entities do not provide hourly forecast data.",
      "chart": {
        "time": "Time",
        "power": "Power",
        "kwh": "kWh",
        "forecastShort": "Fcst",
        "actualShort": "Act."
      }
    },
    "history": {
      "title": "Last 7 days",
      "forecast": "Forecast",
      "actual": "Actual",
      "accuracy": "Accuracy",
      "averageMiss": "Average miss per day",
      "bias": "Actual vs forecast per day",
      "readout": "{day}: forecast {forecast}, actual {actual} kWh ({difference})",
      "noActual": "{day}: forecast {forecast} kWh, no recorded generation",
      "noForecast": "{day}: no recorded forecast",
      "loading": "Loading forecast history…",
      "noData": "No forecast history found. Home Assistant needs to have recorded the forecast sensor for at least one full day."
    },
    "aria": {
      "dayButton": "{day} {date}"
    },
    "errors": {
      "invalidConfig": "Invalid configuration"
    },
    "units": {
      "watts": "W",
      "kilowatts": "kW",
      "kilowattHours": "kWh",
      "kilowattHoursPerDay": "kWh/day"
    }
  },
  "editor": {
    "labels": {
      "title": "Title (optional)",
      "icon": "Header icon (optional, e.g. mdi:solar-power)",
      "show_header": "Show header",
      "display_estimate10": "Display Estimate10 Forecast Values",
      "device_id": "Forecast Device",
      "integration_type": "Integration Type",
      "forecast_entity_0": "Day 1 — Today",
      "forecast_entity_1": "Day 2 — Tomorrow",
      "forecast_entity_2": "Day 3",
      "forecast_entity_3": "Day 4",
      "forecast_entity_4": "Day 5",
      "forecast_entity_5": "Day 6",
      "forecast_entity_6": "Day 7",
      "export_rate_entity": "Current Export Rate Entity",
      "live_power_entity": "Live power (optional, kW sensor)",
      "today_actual_entity": "Today's actual generation (optional)",
      "next_hour_entity": "+1HR forecast (optional, overrides auto-derived value)",
      "remaining_today_entity": "LEFT / remaining today (optional, overrides auto-derived value)",
      "main_view": "Main View",
      "inverter_max_kw": "Inverter max output (kW)",
      "solar_max_kwp": "Solar array size (kWp)",
      "low_threshold": "Low threshold (kWh)",
      "high_threshold": "High threshold (kWh)",
      "low_threshold_entity": "Low threshold sensor (optional, kWh)",
      "high_threshold_entity": "High threshold sensor (optional, kWh)",
      "show_low_threshold_zone": "Tint bar track below low threshold",
      "show_high_threshold_zone": "Tint bar track above high threshold",
      "threshold_zone_opacity": "Threshold tint opacity (lower is more transparent)",
      "desktop_text_scale": "Desktop Text Scale",
      "font_size": "Font Size",
      "bar_width": "Bar Width"
    },
    "options": {
      "autoDetect": "Auto-detect",
      "solcast": "Solcast",
      "volcast": "Volcast",
      "forecastSolar": "Forecast.Solar",
      "openMeteo": "Open-Meteo Solar Forecast",
      "mainViewDaily": "Daily",
      "mainViewHourly": "Hourly",
      "mainViewHistory": "History"
    },
    "sections": {
      "integrationType": "Integration Type",
      "dailyForecastEntities": "Daily Forecast Entities",
      "liveData": "Live Data",
      "actualGenerationArrays": "Actual Generation Arrays",
      "systemParameters": "System Parameters",
      "energyProvider": "Energy Provider",
      "colourThresholds": "Colour Thresholds",
      "dateTimeDisplay": "Display"
    },
    "helpers": {
      "device": "Recommended: selecting a device will auto-configure the card",
      "estimate10": "Display Estimate10 is only applicable when the integration type is Solcast",
      "integrationType": "Automatically set when a forecast device is selected above. Override here only when configuring forecast entities manually without a device.",
      "liveData": "+1HR and LEFT are auto-detected or auto-derived where possible. Set these manually to override, or to use a custom sensor.",
      "actualArrays": "Optional: configure individual array sensors to display a stacked breakdown on today's bar. Each label is a single character shown inside its segment (e.g. N, S, E).",
      "desktopTextScale": "Desktop Text Scale: only applies on wider screens (≥ 768 px). Mobile sizing is unchanged.",
      "mainView": "Choose what the card shows. Hourly shows today's hourly forecast. History compares the last 7 days of forecast and actual generation.",
      "fontSize": "Optional daily bar text size in pixels. Leave blank to use CSS/default styling.",
      "barWidth": "Optional forecast bar width in pixels. Leave blank to use CSS/default styling."
    },
    "warnings": {
      "manualEntities": "Changing device will not overwrite manually configured entities."
    },
    "arrays": {
      "entity": "Array entity",
      "label": "Label (1 char)",
      "placeholder": "E",
      "hint": "bar & popup",
      "remove": "Remove",
      "add": "Add array"
    }
  },
  "customCard": {
    "name": "Solar Forecast Card",
    "description": "Daily solar energy forecast with hourly breakdown support."
  }
}
;

var es = {
  "day": {
    "today": "Hoy",
    "tomorrow": "Mañana",
    "sunday_short": "dom",
    "monday_short": "lun",
    "tuesday_short": "mar",
    "wednesday_short": "mié",
    "thursday_short": "jue",
    "friday_short": "vie",
    "saturday_short": "sáb"
  },
  "card": {
    "defaultTitle": "Pronóstico solar",
    "placeholder": "No forecast entities configured.",
    "placeholderAction": "Open the card editor to get started.",
    "twoDayNote": "2-day forecast available",
    "labels": {
      "live": "EN VIVO:",
      "exportRate": "TARIFA EXPORT.:",
      "nextHour": "+1 H:",
      "left": "RESTANTE:",
      "week": "SEMANA:",
      "avg": "PROM.:",
      "total": "Total",
      "p10": "P10",
      "forecast": "previsión",
      "generated": "generado"
    },
    "days": {
      "today": "Today"
    },
    "popup": {
      "close": "Close",
      "noForecastData": "No forecast data",
      "noHourlyData": "No hourly data available for this day.",
      "integrationNoHourlyData": "The selected forecast entities do not provide hourly forecast data.",
      "chart": {
        "time": "Time",
        "power": "Power",
        "kwh": "kWh",
        "forecastShort": "Fcst",
        "actualShort": "Act."
      }
    },
    "history": {
      "title": "Last 7 days",
      "forecast": "Forecast",
      "actual": "Actual",
      "accuracy": "Accuracy",
      "averageMiss": "Average miss per day",
      "bias": "Actual vs forecast per day",
      "readout": "{day}: forecast {forecast}, actual {actual} kWh ({difference})",
      "noActual": "{day}: forecast {forecast} kWh, no recorded generation",
      "noForecast": "{day}: no recorded forecast",
      "loading": "Loading forecast history…",
      "noData": "No forecast history found. Home Assistant needs to have recorded the forecast sensor for at least one full day."
    },
    "aria": {
      "dayButton": "{day} {date}"
    },
    "errors": {
      "invalidConfig": "Invalid configuration"
    },
    "units": {
      "watts": "W",
      "kilowatts": "kW",
      "kilowattHours": "kWh",
      "kilowattHoursPerDay": "kWh/day"
    }
  },
  "editor": {
    "labels": {
      "title": "Title (optional)",
      "icon": "Header icon (optional, e.g. mdi:solar-power)",
      "show_header": "Show header",
      "display_estimate10": "Display Estimate10 Forecast Values",
      "device_id": "Forecast Device",
      "integration_type": "Integration Type",
      "forecast_entity_0": "Day 1 — Today",
      "forecast_entity_1": "Day 2 — Tomorrow",
      "forecast_entity_2": "Day 3",
      "forecast_entity_3": "Day 4",
      "forecast_entity_4": "Day 5",
      "forecast_entity_5": "Day 6",
      "forecast_entity_6": "Day 7",
      "export_rate_entity": "Current Export Rate Entity",
      "live_power_entity": "Live power (optional, kW sensor)",
      "today_actual_entity": "Today's actual generation (optional)",
      "next_hour_entity": "+1HR forecast (optional, overrides auto-derived value)",
      "remaining_today_entity": "LEFT / remaining today (optional, overrides auto-derived value)",
      "main_view": "Main View",
      "inverter_max_kw": "Inverter max output (kW)",
      "solar_max_kwp": "Solar array size (kWp)",
      "low_threshold": "Low threshold (kWh)",
      "high_threshold": "High threshold (kWh)",
      "low_threshold_entity": "Low threshold sensor (optional, kWh)",
      "high_threshold_entity": "High threshold sensor (optional, kWh)",
      "show_low_threshold_zone": "Tint bar track below low threshold",
      "show_high_threshold_zone": "Tint bar track above high threshold",
      "threshold_zone_opacity": "Threshold tint opacity (lower is more transparent)",
      "desktop_text_scale": "Desktop Text Scale",
      "font_size": "Font Size",
      "bar_width": "Bar Width"
    },
    "options": {
      "autoDetect": "Auto-detect",
      "solcast": "Solcast",
      "volcast": "Volcast",
      "forecastSolar": "Forecast.Solar",
      "openMeteo": "Open-Meteo Solar Forecast",
      "mainViewDaily": "Daily",
      "mainViewHourly": "Hourly",
      "mainViewHistory": "History"
    },
    "sections": {
      "integrationType": "Integration Type",
      "dailyForecastEntities": "Daily Forecast Entities",
      "liveData": "Live Data",
      "actualGenerationArrays": "Actual Generation Arrays",
      "systemParameters": "System Parameters",
      "energyProvider": "Energy Provider",
      "colourThresholds": "Colour Thresholds",
      "dateTimeDisplay": "Display"
    },
    "helpers": {
      "device": "Recommended: selecting a device will auto-configure the card",
      "estimate10": "Display Estimate10 is only applicable when the integration type is Solcast",
      "integrationType": "Automatically set when a forecast device is selected above. Override here only when configuring forecast entities manually without a device.",
      "liveData": "+1HR and LEFT are auto-detected or auto-derived where possible. Set these manually to override, or to use a custom sensor.",
      "actualArrays": "Optional: configure individual array sensors to display a stacked breakdown on today's bar. Each label is a single character shown inside its segment (e.g. N, S, E).",
      "desktopTextScale": "Desktop Text Scale: only applies on wider screens (≥ 768 px). Mobile sizing is unchanged.",
      "mainView": "Choose what the card shows. Hourly shows today's hourly forecast. History compares the last 7 days of forecast and actual generation.",
      "fontSize": "Optional daily bar text size in pixels. Leave blank to use CSS/default styling.",
      "barWidth": "Optional forecast bar width in pixels. Leave blank to use CSS/default styling."
    },
    "warnings": {
      "manualEntities": "Changing device will not overwrite manually configured entities."
    },
    "arrays": {
      "entity": "Array entity",
      "label": "Label (1 char)",
      "placeholder": "E",
      "hint": "bar & popup",
      "remove": "Remove",
      "add": "Add array"
    }
  },
  "customCard": {
    "name": "Solar Forecast Card",
    "description": "Daily solar energy forecast with hourly breakdown support."
  }
}
;

var es_419 = {
  "day": {
    "today": "Hoy",
    "tomorrow": "Mañana",
    "sunday_short": "dom",
    "monday_short": "lun",
    "tuesday_short": "mar",
    "wednesday_short": "mié",
    "thursday_short": "jue",
    "friday_short": "vie",
    "saturday_short": "sáb"
  },
  "card": {
    "defaultTitle": "Pronóstico solar",
    "placeholder": "No forecast entities configured.",
    "placeholderAction": "Open the card editor to get started.",
    "twoDayNote": "2-day forecast available",
    "labels": {
      "live": "EN VIVO:",
      "exportRate": "TARIFA EXPORT.:",
      "nextHour": "+1 H:",
      "left": "RESTANTE:",
      "week": "SEMANA:",
      "avg": "PROM.:",
      "total": "Total",
      "p10": "P10",
      "forecast": "pronóstico",
      "generated": "generado"
    },
    "days": {
      "today": "Today"
    },
    "popup": {
      "close": "Close",
      "noForecastData": "No forecast data",
      "noHourlyData": "No hourly data available for this day.",
      "integrationNoHourlyData": "The selected forecast entities do not provide hourly forecast data.",
      "chart": {
        "time": "Time",
        "power": "Power",
        "kwh": "kWh",
        "forecastShort": "Fcst",
        "actualShort": "Act."
      }
    },
    "history": {
      "title": "Last 7 days",
      "forecast": "Forecast",
      "actual": "Actual",
      "accuracy": "Accuracy",
      "averageMiss": "Average miss per day",
      "bias": "Actual vs forecast per day",
      "readout": "{day}: forecast {forecast}, actual {actual} kWh ({difference})",
      "noActual": "{day}: forecast {forecast} kWh, no recorded generation",
      "noForecast": "{day}: no recorded forecast",
      "loading": "Loading forecast history…",
      "noData": "No forecast history found. Home Assistant needs to have recorded the forecast sensor for at least one full day."
    },
    "aria": {
      "dayButton": "{day} {date}"
    },
    "errors": {
      "invalidConfig": "Invalid configuration"
    },
    "units": {
      "watts": "W",
      "kilowatts": "kW",
      "kilowattHours": "kWh",
      "kilowattHoursPerDay": "kWh/day"
    }
  },
  "editor": {
    "labels": {
      "title": "Title (optional)",
      "icon": "Header icon (optional, e.g. mdi:solar-power)",
      "show_header": "Show header",
      "display_estimate10": "Display Estimate10 Forecast Values",
      "device_id": "Forecast Device",
      "integration_type": "Integration Type",
      "forecast_entity_0": "Day 1 — Today",
      "forecast_entity_1": "Day 2 — Tomorrow",
      "forecast_entity_2": "Day 3",
      "forecast_entity_3": "Day 4",
      "forecast_entity_4": "Day 5",
      "forecast_entity_5": "Day 6",
      "forecast_entity_6": "Day 7",
      "export_rate_entity": "Current Export Rate Entity",
      "live_power_entity": "Live power (optional, kW sensor)",
      "today_actual_entity": "Today's actual generation (optional)",
      "next_hour_entity": "+1HR forecast (optional, overrides auto-derived value)",
      "remaining_today_entity": "LEFT / remaining today (optional, overrides auto-derived value)",
      "main_view": "Main View",
      "inverter_max_kw": "Inverter max output (kW)",
      "solar_max_kwp": "Solar array size (kWp)",
      "low_threshold": "Low threshold (kWh)",
      "high_threshold": "High threshold (kWh)",
      "low_threshold_entity": "Low threshold sensor (optional, kWh)",
      "high_threshold_entity": "High threshold sensor (optional, kWh)",
      "show_low_threshold_zone": "Tint bar track below low threshold",
      "show_high_threshold_zone": "Tint bar track above high threshold",
      "threshold_zone_opacity": "Threshold tint opacity (lower is more transparent)",
      "desktop_text_scale": "Desktop Text Scale",
      "font_size": "Font Size",
      "bar_width": "Bar Width"
    },
    "options": {
      "autoDetect": "Auto-detect",
      "solcast": "Solcast",
      "volcast": "Volcast",
      "forecastSolar": "Forecast.Solar",
      "openMeteo": "Open-Meteo Solar Forecast",
      "mainViewDaily": "Daily",
      "mainViewHourly": "Hourly",
      "mainViewHistory": "History"
    },
    "sections": {
      "integrationType": "Integration Type",
      "dailyForecastEntities": "Daily Forecast Entities",
      "liveData": "Live Data",
      "actualGenerationArrays": "Actual Generation Arrays",
      "systemParameters": "System Parameters",
      "energyProvider": "Energy Provider",
      "colourThresholds": "Colour Thresholds",
      "dateTimeDisplay": "Display"
    },
    "helpers": {
      "device": "Recommended: selecting a device will auto-configure the card",
      "estimate10": "Display Estimate10 is only applicable when the integration type is Solcast",
      "integrationType": "Automatically set when a forecast device is selected above. Override here only when configuring forecast entities manually without a device.",
      "liveData": "+1HR and LEFT are auto-detected or auto-derived where possible. Set these manually to override, or to use a custom sensor.",
      "actualArrays": "Optional: configure individual array sensors to display a stacked breakdown on today's bar. Each label is a single character shown inside its segment (e.g. N, S, E).",
      "desktopTextScale": "Desktop Text Scale: only applies on wider screens (≥ 768 px). Mobile sizing is unchanged.",
      "mainView": "Choose what the card shows. Hourly shows today's hourly forecast. History compares the last 7 days of forecast and actual generation.",
      "fontSize": "Optional daily bar text size in pixels. Leave blank to use CSS/default styling.",
      "barWidth": "Optional forecast bar width in pixels. Leave blank to use CSS/default styling."
    },
    "warnings": {
      "manualEntities": "Changing device will not overwrite manually configured entities."
    },
    "arrays": {
      "entity": "Array entity",
      "label": "Label (1 char)",
      "placeholder": "E",
      "hint": "bar & popup",
      "remove": "Remove",
      "add": "Add array"
    }
  },
  "customCard": {
    "name": "Solar Forecast Card",
    "description": "Daily solar energy forecast with hourly breakdown support."
  }
}
;

var et = {
  "day": {
    "today": "Täna",
    "tomorrow": "Homme",
    "sunday_short": "P",
    "monday_short": "E",
    "tuesday_short": "T",
    "wednesday_short": "K",
    "thursday_short": "N",
    "friday_short": "R",
    "saturday_short": "L"
  },
  "card": {
    "defaultTitle": "Päikeseprognoos",
    "placeholder": "No forecast entities configured.",
    "placeholderAction": "Open the card editor to get started.",
    "twoDayNote": "2-day forecast available",
    "labels": {
      "live": "OTSE:",
      "exportRate": "MÜÜGITARIIF:",
      "nextHour": "+1 H:",
      "left": "JÄÄNUD:",
      "week": "NÄDAL:",
      "avg": "KESKM.:",
      "total": "Kokku",
      "p10": "P10",
      "forecast": "prognoos",
      "generated": "toodetud"
    },
    "days": {
      "today": "Today"
    },
    "popup": {
      "close": "Close",
      "noForecastData": "No forecast data",
      "noHourlyData": "No hourly data available for this day.",
      "integrationNoHourlyData": "The selected forecast entities do not provide hourly forecast data.",
      "chart": {
        "time": "Time",
        "power": "Power",
        "kwh": "kWh",
        "forecastShort": "Fcst",
        "actualShort": "Act."
      }
    },
    "history": {
      "title": "Last 7 days",
      "forecast": "Forecast",
      "actual": "Actual",
      "accuracy": "Accuracy",
      "averageMiss": "Average miss per day",
      "bias": "Actual vs forecast per day",
      "readout": "{day}: forecast {forecast}, actual {actual} kWh ({difference})",
      "noActual": "{day}: forecast {forecast} kWh, no recorded generation",
      "noForecast": "{day}: no recorded forecast",
      "loading": "Loading forecast history…",
      "noData": "No forecast history found. Home Assistant needs to have recorded the forecast sensor for at least one full day."
    },
    "aria": {
      "dayButton": "{day} {date}"
    },
    "errors": {
      "invalidConfig": "Invalid configuration"
    },
    "units": {
      "watts": "W",
      "kilowatts": "kW",
      "kilowattHours": "kWh",
      "kilowattHoursPerDay": "kWh/day"
    }
  },
  "editor": {
    "labels": {
      "title": "Title (optional)",
      "icon": "Header icon (optional, e.g. mdi:solar-power)",
      "show_header": "Show header",
      "display_estimate10": "Display Estimate10 Forecast Values",
      "device_id": "Forecast Device",
      "integration_type": "Integration Type",
      "forecast_entity_0": "Day 1 — Today",
      "forecast_entity_1": "Day 2 — Tomorrow",
      "forecast_entity_2": "Day 3",
      "forecast_entity_3": "Day 4",
      "forecast_entity_4": "Day 5",
      "forecast_entity_5": "Day 6",
      "forecast_entity_6": "Day 7",
      "export_rate_entity": "Current Export Rate Entity",
      "live_power_entity": "Live power (optional, kW sensor)",
      "today_actual_entity": "Today's actual generation (optional)",
      "next_hour_entity": "+1HR forecast (optional, overrides auto-derived value)",
      "remaining_today_entity": "LEFT / remaining today (optional, overrides auto-derived value)",
      "main_view": "Main View",
      "inverter_max_kw": "Inverter max output (kW)",
      "solar_max_kwp": "Solar array size (kWp)",
      "low_threshold": "Low threshold (kWh)",
      "high_threshold": "High threshold (kWh)",
      "low_threshold_entity": "Low threshold sensor (optional, kWh)",
      "high_threshold_entity": "High threshold sensor (optional, kWh)",
      "show_low_threshold_zone": "Tint bar track below low threshold",
      "show_high_threshold_zone": "Tint bar track above high threshold",
      "threshold_zone_opacity": "Threshold tint opacity (lower is more transparent)",
      "desktop_text_scale": "Desktop Text Scale",
      "font_size": "Font Size",
      "bar_width": "Bar Width"
    },
    "options": {
      "autoDetect": "Auto-detect",
      "solcast": "Solcast",
      "volcast": "Volcast",
      "forecastSolar": "Forecast.Solar",
      "openMeteo": "Open-Meteo Solar Forecast",
      "mainViewDaily": "Daily",
      "mainViewHourly": "Hourly",
      "mainViewHistory": "History"
    },
    "sections": {
      "integrationType": "Integration Type",
      "dailyForecastEntities": "Daily Forecast Entities",
      "liveData": "Live Data",
      "actualGenerationArrays": "Actual Generation Arrays",
      "systemParameters": "System Parameters",
      "energyProvider": "Energy Provider",
      "colourThresholds": "Colour Thresholds",
      "dateTimeDisplay": "Display"
    },
    "helpers": {
      "device": "Recommended: selecting a device will auto-configure the card",
      "estimate10": "Display Estimate10 is only applicable when the integration type is Solcast",
      "integrationType": "Automatically set when a forecast device is selected above. Override here only when configuring forecast entities manually without a device.",
      "liveData": "+1HR and LEFT are auto-detected or auto-derived where possible. Set these manually to override, or to use a custom sensor.",
      "actualArrays": "Optional: configure individual array sensors to display a stacked breakdown on today's bar. Each label is a single character shown inside its segment (e.g. N, S, E).",
      "desktopTextScale": "Desktop Text Scale: only applies on wider screens (≥ 768 px). Mobile sizing is unchanged.",
      "mainView": "Choose what the card shows. Hourly shows today's hourly forecast. History compares the last 7 days of forecast and actual generation.",
      "fontSize": "Optional daily bar text size in pixels. Leave blank to use CSS/default styling.",
      "barWidth": "Optional forecast bar width in pixels. Leave blank to use CSS/default styling."
    },
    "warnings": {
      "manualEntities": "Changing device will not overwrite manually configured entities."
    },
    "arrays": {
      "entity": "Array entity",
      "label": "Label (1 char)",
      "placeholder": "E",
      "hint": "bar & popup",
      "remove": "Remove",
      "add": "Add array"
    }
  },
  "customCard": {
    "name": "Solar Forecast Card",
    "description": "Daily solar energy forecast with hourly breakdown support."
  }
}
;

var eu = {
  "day": {
    "today": "Gaur",
    "tomorrow": "Bihar",
    "sunday_short": "ig",
    "monday_short": "al",
    "tuesday_short": "ar",
    "wednesday_short": "az",
    "thursday_short": "og",
    "friday_short": "or",
    "saturday_short": "lr"
  },
  "card": {
    "defaultTitle": "Eguzki iragarpena",
    "placeholder": "No forecast entities configured.",
    "placeholderAction": "Open the card editor to get started.",
    "twoDayNote": "2-day forecast available",
    "labels": {
      "live": "ZUZENEAN:",
      "exportRate": "ESPORTAZIO TARIFA:",
      "nextHour": "+1 H:",
      "left": "GERATZEN:",
      "week": "ASTEA:",
      "avg": "BB:",
      "total": "Guztira",
      "p10": "P10",
      "forecast": "iragarpena",
      "generated": "sortua"
    },
    "days": {
      "today": "Today"
    },
    "popup": {
      "close": "Close",
      "noForecastData": "No forecast data",
      "noHourlyData": "No hourly data available for this day.",
      "integrationNoHourlyData": "The selected forecast entities do not provide hourly forecast data.",
      "chart": {
        "time": "Time",
        "power": "Power",
        "kwh": "kWh",
        "forecastShort": "Fcst",
        "actualShort": "Act."
      }
    },
    "history": {
      "title": "Last 7 days",
      "forecast": "Forecast",
      "actual": "Actual",
      "accuracy": "Accuracy",
      "averageMiss": "Average miss per day",
      "bias": "Actual vs forecast per day",
      "readout": "{day}: forecast {forecast}, actual {actual} kWh ({difference})",
      "noActual": "{day}: forecast {forecast} kWh, no recorded generation",
      "noForecast": "{day}: no recorded forecast",
      "loading": "Loading forecast history…",
      "noData": "No forecast history found. Home Assistant needs to have recorded the forecast sensor for at least one full day."
    },
    "aria": {
      "dayButton": "{day} {date}"
    },
    "errors": {
      "invalidConfig": "Invalid configuration"
    },
    "units": {
      "watts": "W",
      "kilowatts": "kW",
      "kilowattHours": "kWh",
      "kilowattHoursPerDay": "kWh/day"
    }
  },
  "editor": {
    "labels": {
      "title": "Title (optional)",
      "icon": "Header icon (optional, e.g. mdi:solar-power)",
      "show_header": "Show header",
      "display_estimate10": "Display Estimate10 Forecast Values",
      "device_id": "Forecast Device",
      "integration_type": "Integration Type",
      "forecast_entity_0": "Day 1 — Today",
      "forecast_entity_1": "Day 2 — Tomorrow",
      "forecast_entity_2": "Day 3",
      "forecast_entity_3": "Day 4",
      "forecast_entity_4": "Day 5",
      "forecast_entity_5": "Day 6",
      "forecast_entity_6": "Day 7",
      "export_rate_entity": "Current Export Rate Entity",
      "live_power_entity": "Live power (optional, kW sensor)",
      "today_actual_entity": "Today's actual generation (optional)",
      "next_hour_entity": "+1HR forecast (optional, overrides auto-derived value)",
      "remaining_today_entity": "LEFT / remaining today (optional, overrides auto-derived value)",
      "main_view": "Main View",
      "inverter_max_kw": "Inverter max output (kW)",
      "solar_max_kwp": "Solar array size (kWp)",
      "low_threshold": "Low threshold (kWh)",
      "high_threshold": "High threshold (kWh)",
      "low_threshold_entity": "Low threshold sensor (optional, kWh)",
      "high_threshold_entity": "High threshold sensor (optional, kWh)",
      "show_low_threshold_zone": "Tint bar track below low threshold",
      "show_high_threshold_zone": "Tint bar track above high threshold",
      "threshold_zone_opacity": "Threshold tint opacity (lower is more transparent)",
      "desktop_text_scale": "Desktop Text Scale",
      "font_size": "Font Size",
      "bar_width": "Bar Width"
    },
    "options": {
      "autoDetect": "Auto-detect",
      "solcast": "Solcast",
      "volcast": "Volcast",
      "forecastSolar": "Forecast.Solar",
      "openMeteo": "Open-Meteo Solar Forecast",
      "mainViewDaily": "Daily",
      "mainViewHourly": "Hourly",
      "mainViewHistory": "History"
    },
    "sections": {
      "integrationType": "Integration Type",
      "dailyForecastEntities": "Daily Forecast Entities",
      "liveData": "Live Data",
      "actualGenerationArrays": "Actual Generation Arrays",
      "systemParameters": "System Parameters",
      "energyProvider": "Energy Provider",
      "colourThresholds": "Colour Thresholds",
      "dateTimeDisplay": "Display"
    },
    "helpers": {
      "device": "Recommended: selecting a device will auto-configure the card",
      "estimate10": "Display Estimate10 is only applicable when the integration type is Solcast",
      "integrationType": "Automatically set when a forecast device is selected above. Override here only when configuring forecast entities manually without a device.",
      "liveData": "+1HR and LEFT are auto-detected or auto-derived where possible. Set these manually to override, or to use a custom sensor.",
      "actualArrays": "Optional: configure individual array sensors to display a stacked breakdown on today's bar. Each label is a single character shown inside its segment (e.g. N, S, E).",
      "desktopTextScale": "Desktop Text Scale: only applies on wider screens (≥ 768 px). Mobile sizing is unchanged.",
      "mainView": "Choose what the card shows. Hourly shows today's hourly forecast. History compares the last 7 days of forecast and actual generation.",
      "fontSize": "Optional daily bar text size in pixels. Leave blank to use CSS/default styling.",
      "barWidth": "Optional forecast bar width in pixels. Leave blank to use CSS/default styling."
    },
    "warnings": {
      "manualEntities": "Changing device will not overwrite manually configured entities."
    },
    "arrays": {
      "entity": "Array entity",
      "label": "Label (1 char)",
      "placeholder": "E",
      "hint": "bar & popup",
      "remove": "Remove",
      "add": "Add array"
    }
  },
  "customCard": {
    "name": "Solar Forecast Card",
    "description": "Daily solar energy forecast with hourly breakdown support."
  }
}
;

var fa = {
  "day": {
    "today": "امروز",
    "tomorrow": "فردا",
    "sunday_short": "یکشنبه",
    "monday_short": "دوشنبه",
    "tuesday_short": "سه‌شنبه",
    "wednesday_short": "چهارشنبه",
    "thursday_short": "پنجشنبه",
    "friday_short": "جمعه",
    "saturday_short": "شنبه"
  },
  "card": {
    "defaultTitle": "پیش‌بینی خورشیدی",
    "placeholder": "No forecast entities configured.",
    "placeholderAction": "Open the card editor to get started.",
    "twoDayNote": "2-day forecast available",
    "labels": {
      "live": "زنده:",
      "exportRate": "نرخ فروش:",
      "nextHour": "+1 س:",
      "left": "باقی‌مانده:",
      "week": "هفته:",
      "avg": "میانگین:",
      "total": "مجموع",
      "p10": "P10",
      "forecast": "پیش‌بینی",
      "generated": "تولیدشده"
    },
    "days": {
      "today": "Today"
    },
    "popup": {
      "close": "Close",
      "noForecastData": "No forecast data",
      "noHourlyData": "No hourly data available for this day.",
      "integrationNoHourlyData": "The selected forecast entities do not provide hourly forecast data.",
      "chart": {
        "time": "Time",
        "power": "Power",
        "kwh": "kWh",
        "forecastShort": "Fcst",
        "actualShort": "Act."
      }
    },
    "history": {
      "title": "Last 7 days",
      "forecast": "Forecast",
      "actual": "Actual",
      "accuracy": "Accuracy",
      "averageMiss": "Average miss per day",
      "bias": "Actual vs forecast per day",
      "readout": "{day}: forecast {forecast}, actual {actual} kWh ({difference})",
      "noActual": "{day}: forecast {forecast} kWh, no recorded generation",
      "noForecast": "{day}: no recorded forecast",
      "loading": "Loading forecast history…",
      "noData": "No forecast history found. Home Assistant needs to have recorded the forecast sensor for at least one full day."
    },
    "aria": {
      "dayButton": "{day} {date}"
    },
    "errors": {
      "invalidConfig": "Invalid configuration"
    },
    "units": {
      "watts": "W",
      "kilowatts": "kW",
      "kilowattHours": "kWh",
      "kilowattHoursPerDay": "kWh/day"
    }
  },
  "editor": {
    "labels": {
      "title": "Title (optional)",
      "icon": "Header icon (optional, e.g. mdi:solar-power)",
      "show_header": "Show header",
      "display_estimate10": "Display Estimate10 Forecast Values",
      "device_id": "Forecast Device",
      "integration_type": "Integration Type",
      "forecast_entity_0": "Day 1 — Today",
      "forecast_entity_1": "Day 2 — Tomorrow",
      "forecast_entity_2": "Day 3",
      "forecast_entity_3": "Day 4",
      "forecast_entity_4": "Day 5",
      "forecast_entity_5": "Day 6",
      "forecast_entity_6": "Day 7",
      "export_rate_entity": "Current Export Rate Entity",
      "live_power_entity": "Live power (optional, kW sensor)",
      "today_actual_entity": "Today's actual generation (optional)",
      "next_hour_entity": "+1HR forecast (optional, overrides auto-derived value)",
      "remaining_today_entity": "LEFT / remaining today (optional, overrides auto-derived value)",
      "main_view": "Main View",
      "inverter_max_kw": "Inverter max output (kW)",
      "solar_max_kwp": "Solar array size (kWp)",
      "low_threshold": "Low threshold (kWh)",
      "high_threshold": "High threshold (kWh)",
      "low_threshold_entity": "Low threshold sensor (optional, kWh)",
      "high_threshold_entity": "High threshold sensor (optional, kWh)",
      "show_low_threshold_zone": "Tint bar track below low threshold",
      "show_high_threshold_zone": "Tint bar track above high threshold",
      "threshold_zone_opacity": "Threshold tint opacity (lower is more transparent)",
      "desktop_text_scale": "Desktop Text Scale",
      "font_size": "Font Size",
      "bar_width": "Bar Width"
    },
    "options": {
      "autoDetect": "Auto-detect",
      "solcast": "Solcast",
      "volcast": "Volcast",
      "forecastSolar": "Forecast.Solar",
      "openMeteo": "Open-Meteo Solar Forecast",
      "mainViewDaily": "Daily",
      "mainViewHourly": "Hourly",
      "mainViewHistory": "History"
    },
    "sections": {
      "integrationType": "Integration Type",
      "dailyForecastEntities": "Daily Forecast Entities",
      "liveData": "Live Data",
      "actualGenerationArrays": "Actual Generation Arrays",
      "systemParameters": "System Parameters",
      "energyProvider": "Energy Provider",
      "colourThresholds": "Colour Thresholds",
      "dateTimeDisplay": "Display"
    },
    "helpers": {
      "device": "Recommended: selecting a device will auto-configure the card",
      "estimate10": "Display Estimate10 is only applicable when the integration type is Solcast",
      "integrationType": "Automatically set when a forecast device is selected above. Override here only when configuring forecast entities manually without a device.",
      "liveData": "+1HR and LEFT are auto-detected or auto-derived where possible. Set these manually to override, or to use a custom sensor.",
      "actualArrays": "Optional: configure individual array sensors to display a stacked breakdown on today's bar. Each label is a single character shown inside its segment (e.g. N, S, E).",
      "desktopTextScale": "Desktop Text Scale: only applies on wider screens (≥ 768 px). Mobile sizing is unchanged.",
      "mainView": "Choose what the card shows. Hourly shows today's hourly forecast. History compares the last 7 days of forecast and actual generation.",
      "fontSize": "Optional daily bar text size in pixels. Leave blank to use CSS/default styling.",
      "barWidth": "Optional forecast bar width in pixels. Leave blank to use CSS/default styling."
    },
    "warnings": {
      "manualEntities": "Changing device will not overwrite manually configured entities."
    },
    "arrays": {
      "entity": "Array entity",
      "label": "Label (1 char)",
      "placeholder": "E",
      "hint": "bar & popup",
      "remove": "Remove",
      "add": "Add array"
    }
  },
  "customCard": {
    "name": "Solar Forecast Card",
    "description": "Daily solar energy forecast with hourly breakdown support."
  }
}
;

var fi = {
  "day": {
    "today": "Tänään",
    "tomorrow": "Huomenna",
    "sunday_short": "su",
    "monday_short": "ma",
    "tuesday_short": "ti",
    "wednesday_short": "ke",
    "thursday_short": "to",
    "friday_short": "pe",
    "saturday_short": "la"
  },
  "card": {
    "defaultTitle": "Aurinkoennuste",
    "placeholder": "No forecast entities configured.",
    "placeholderAction": "Open the card editor to get started.",
    "twoDayNote": "2-day forecast available",
    "labels": {
      "live": "LIVE:",
      "exportRate": "MYYNTIHINTA:",
      "nextHour": "+1 H:",
      "left": "JÄLJELLÄ:",
      "week": "VIIKKO:",
      "avg": "KA:",
      "total": "Yhteensä",
      "p10": "P10",
      "forecast": "ennuste",
      "generated": "tuotettu"
    },
    "days": {
      "today": "Today"
    },
    "popup": {
      "close": "Close",
      "noForecastData": "No forecast data",
      "noHourlyData": "No hourly data available for this day.",
      "integrationNoHourlyData": "The selected forecast entities do not provide hourly forecast data.",
      "chart": {
        "time": "Time",
        "power": "Power",
        "kwh": "kWh",
        "forecastShort": "Fcst",
        "actualShort": "Act."
      }
    },
    "history": {
      "title": "Last 7 days",
      "forecast": "Forecast",
      "actual": "Actual",
      "accuracy": "Accuracy",
      "averageMiss": "Average miss per day",
      "bias": "Actual vs forecast per day",
      "readout": "{day}: forecast {forecast}, actual {actual} kWh ({difference})",
      "noActual": "{day}: forecast {forecast} kWh, no recorded generation",
      "noForecast": "{day}: no recorded forecast",
      "loading": "Loading forecast history…",
      "noData": "No forecast history found. Home Assistant needs to have recorded the forecast sensor for at least one full day."
    },
    "aria": {
      "dayButton": "{day} {date}"
    },
    "errors": {
      "invalidConfig": "Invalid configuration"
    },
    "units": {
      "watts": "W",
      "kilowatts": "kW",
      "kilowattHours": "kWh",
      "kilowattHoursPerDay": "kWh/day"
    }
  },
  "editor": {
    "labels": {
      "title": "Title (optional)",
      "icon": "Header icon (optional, e.g. mdi:solar-power)",
      "show_header": "Show header",
      "display_estimate10": "Display Estimate10 Forecast Values",
      "device_id": "Forecast Device",
      "integration_type": "Integration Type",
      "forecast_entity_0": "Day 1 — Today",
      "forecast_entity_1": "Day 2 — Tomorrow",
      "forecast_entity_2": "Day 3",
      "forecast_entity_3": "Day 4",
      "forecast_entity_4": "Day 5",
      "forecast_entity_5": "Day 6",
      "forecast_entity_6": "Day 7",
      "export_rate_entity": "Current Export Rate Entity",
      "live_power_entity": "Live power (optional, kW sensor)",
      "today_actual_entity": "Today's actual generation (optional)",
      "next_hour_entity": "+1HR forecast (optional, overrides auto-derived value)",
      "remaining_today_entity": "LEFT / remaining today (optional, overrides auto-derived value)",
      "main_view": "Main View",
      "inverter_max_kw": "Inverter max output (kW)",
      "solar_max_kwp": "Solar array size (kWp)",
      "low_threshold": "Low threshold (kWh)",
      "high_threshold": "High threshold (kWh)",
      "low_threshold_entity": "Low threshold sensor (optional, kWh)",
      "high_threshold_entity": "High threshold sensor (optional, kWh)",
      "show_low_threshold_zone": "Tint bar track below low threshold",
      "show_high_threshold_zone": "Tint bar track above high threshold",
      "threshold_zone_opacity": "Threshold tint opacity (lower is more transparent)",
      "desktop_text_scale": "Desktop Text Scale",
      "font_size": "Font Size",
      "bar_width": "Bar Width"
    },
    "options": {
      "autoDetect": "Auto-detect",
      "solcast": "Solcast",
      "volcast": "Volcast",
      "forecastSolar": "Forecast.Solar",
      "openMeteo": "Open-Meteo Solar Forecast",
      "mainViewDaily": "Daily",
      "mainViewHourly": "Hourly",
      "mainViewHistory": "History"
    },
    "sections": {
      "integrationType": "Integration Type",
      "dailyForecastEntities": "Daily Forecast Entities",
      "liveData": "Live Data",
      "actualGenerationArrays": "Actual Generation Arrays",
      "systemParameters": "System Parameters",
      "energyProvider": "Energy Provider",
      "colourThresholds": "Colour Thresholds",
      "dateTimeDisplay": "Display"
    },
    "helpers": {
      "device": "Recommended: selecting a device will auto-configure the card",
      "estimate10": "Display Estimate10 is only applicable when the integration type is Solcast",
      "integrationType": "Automatically set when a forecast device is selected above. Override here only when configuring forecast entities manually without a device.",
      "liveData": "+1HR and LEFT are auto-detected or auto-derived where possible. Set these manually to override, or to use a custom sensor.",
      "actualArrays": "Optional: configure individual array sensors to display a stacked breakdown on today's bar. Each label is a single character shown inside its segment (e.g. N, S, E).",
      "desktopTextScale": "Desktop Text Scale: only applies on wider screens (≥ 768 px). Mobile sizing is unchanged.",
      "mainView": "Choose what the card shows. Hourly shows today's hourly forecast. History compares the last 7 days of forecast and actual generation.",
      "fontSize": "Optional daily bar text size in pixels. Leave blank to use CSS/default styling.",
      "barWidth": "Optional forecast bar width in pixels. Leave blank to use CSS/default styling."
    },
    "warnings": {
      "manualEntities": "Changing device will not overwrite manually configured entities."
    },
    "arrays": {
      "entity": "Array entity",
      "label": "Label (1 char)",
      "placeholder": "E",
      "hint": "bar & popup",
      "remove": "Remove",
      "add": "Add array"
    }
  },
  "customCard": {
    "name": "Solar Forecast Card",
    "description": "Daily solar energy forecast with hourly breakdown support."
  }
}
;

var fy = {
  "day": {
    "today": "Hjoed",
    "tomorrow": "Moarn",
    "sunday_short": "si",
    "monday_short": "mo",
    "tuesday_short": "ti",
    "wednesday_short": "wo",
    "thursday_short": "to",
    "friday_short": "fr",
    "saturday_short": "so"
  },
  "card": {
    "defaultTitle": "Sinnefoarsizzing",
    "placeholder": "No forecast entities configured.",
    "placeholderAction": "Open the card editor to get started.",
    "twoDayNote": "2-day forecast available",
    "labels": {
      "live": "LIVE:",
      "exportRate": "EKSPORTTARYF:",
      "nextHour": "+1 O:",
      "left": "OER:",
      "week": "WIKE:",
      "avg": "GEM.:",
      "total": "Totaal",
      "p10": "P10",
      "forecast": "foarsizzing",
      "generated": "opwekt"
    },
    "days": {
      "today": "Today"
    },
    "popup": {
      "close": "Close",
      "noForecastData": "No forecast data",
      "noHourlyData": "No hourly data available for this day.",
      "integrationNoHourlyData": "The selected forecast entities do not provide hourly forecast data.",
      "chart": {
        "time": "Time",
        "power": "Power",
        "kwh": "kWh",
        "forecastShort": "Fcst",
        "actualShort": "Act."
      }
    },
    "history": {
      "title": "Last 7 days",
      "forecast": "Forecast",
      "actual": "Actual",
      "accuracy": "Accuracy",
      "averageMiss": "Average miss per day",
      "bias": "Actual vs forecast per day",
      "readout": "{day}: forecast {forecast}, actual {actual} kWh ({difference})",
      "noActual": "{day}: forecast {forecast} kWh, no recorded generation",
      "noForecast": "{day}: no recorded forecast",
      "loading": "Loading forecast history…",
      "noData": "No forecast history found. Home Assistant needs to have recorded the forecast sensor for at least one full day."
    },
    "aria": {
      "dayButton": "{day} {date}"
    },
    "errors": {
      "invalidConfig": "Invalid configuration"
    },
    "units": {
      "watts": "W",
      "kilowatts": "kW",
      "kilowattHours": "kWh",
      "kilowattHoursPerDay": "kWh/day"
    }
  },
  "editor": {
    "labels": {
      "title": "Title (optional)",
      "icon": "Header icon (optional, e.g. mdi:solar-power)",
      "show_header": "Show header",
      "display_estimate10": "Display Estimate10 Forecast Values",
      "device_id": "Forecast Device",
      "integration_type": "Integration Type",
      "forecast_entity_0": "Day 1 — Today",
      "forecast_entity_1": "Day 2 — Tomorrow",
      "forecast_entity_2": "Day 3",
      "forecast_entity_3": "Day 4",
      "forecast_entity_4": "Day 5",
      "forecast_entity_5": "Day 6",
      "forecast_entity_6": "Day 7",
      "export_rate_entity": "Current Export Rate Entity",
      "live_power_entity": "Live power (optional, kW sensor)",
      "today_actual_entity": "Today's actual generation (optional)",
      "next_hour_entity": "+1HR forecast (optional, overrides auto-derived value)",
      "remaining_today_entity": "LEFT / remaining today (optional, overrides auto-derived value)",
      "main_view": "Main View",
      "inverter_max_kw": "Inverter max output (kW)",
      "solar_max_kwp": "Solar array size (kWp)",
      "low_threshold": "Low threshold (kWh)",
      "high_threshold": "High threshold (kWh)",
      "low_threshold_entity": "Low threshold sensor (optional, kWh)",
      "high_threshold_entity": "High threshold sensor (optional, kWh)",
      "show_low_threshold_zone": "Tint bar track below low threshold",
      "show_high_threshold_zone": "Tint bar track above high threshold",
      "threshold_zone_opacity": "Threshold tint opacity (lower is more transparent)",
      "desktop_text_scale": "Desktop Text Scale",
      "font_size": "Font Size",
      "bar_width": "Bar Width"
    },
    "options": {
      "autoDetect": "Auto-detect",
      "solcast": "Solcast",
      "volcast": "Volcast",
      "forecastSolar": "Forecast.Solar",
      "openMeteo": "Open-Meteo Solar Forecast",
      "mainViewDaily": "Daily",
      "mainViewHourly": "Hourly",
      "mainViewHistory": "History"
    },
    "sections": {
      "integrationType": "Integration Type",
      "dailyForecastEntities": "Daily Forecast Entities",
      "liveData": "Live Data",
      "actualGenerationArrays": "Actual Generation Arrays",
      "systemParameters": "System Parameters",
      "energyProvider": "Energy Provider",
      "colourThresholds": "Colour Thresholds",
      "dateTimeDisplay": "Display"
    },
    "helpers": {
      "device": "Recommended: selecting a device will auto-configure the card",
      "estimate10": "Display Estimate10 is only applicable when the integration type is Solcast",
      "integrationType": "Automatically set when a forecast device is selected above. Override here only when configuring forecast entities manually without a device.",
      "liveData": "+1HR and LEFT are auto-detected or auto-derived where possible. Set these manually to override, or to use a custom sensor.",
      "actualArrays": "Optional: configure individual array sensors to display a stacked breakdown on today's bar. Each label is a single character shown inside its segment (e.g. N, S, E).",
      "desktopTextScale": "Desktop Text Scale: only applies on wider screens (≥ 768 px). Mobile sizing is unchanged.",
      "mainView": "Choose what the card shows. Hourly shows today's hourly forecast. History compares the last 7 days of forecast and actual generation.",
      "fontSize": "Optional daily bar text size in pixels. Leave blank to use CSS/default styling.",
      "barWidth": "Optional forecast bar width in pixels. Leave blank to use CSS/default styling."
    },
    "warnings": {
      "manualEntities": "Changing device will not overwrite manually configured entities."
    },
    "arrays": {
      "entity": "Array entity",
      "label": "Label (1 char)",
      "placeholder": "E",
      "hint": "bar & popup",
      "remove": "Remove",
      "add": "Add array"
    }
  },
  "customCard": {
    "name": "Solar Forecast Card",
    "description": "Daily solar energy forecast with hourly breakdown support."
  }
}
;

var fr = {
  "day": {
    "today": "Aujourd’hui",
    "tomorrow": "Demain",
    "sunday_short": "dim",
    "monday_short": "lun",
    "tuesday_short": "mar",
    "wednesday_short": "mer",
    "thursday_short": "jeu",
    "friday_short": "ven",
    "saturday_short": "sam"
  },
  "card": {
    "defaultTitle": "Prévision solaire",
    "placeholder": "No forecast entities configured.",
    "placeholderAction": "Open the card editor to get started.",
    "twoDayNote": "2-day forecast available",
    "labels": {
      "live": "DIRECT :",
      "exportRate": "TARIF EXPORT :",
      "nextHour": "+1 H :",
      "left": "RESTE :",
      "week": "SEMAINE :",
      "avg": "MOY :",
      "total": "Total",
      "p10": "P10",
      "forecast": "prévu",
      "generated": "produit"
    },
    "days": {
      "today": "Aujourd'hui"
    },
    "popup": {
      "close": "Fermer",
      "noForecastData": "No forecast data",
      "noHourlyData": "Aucune donnée horaire disponible pour ce jour.",
      "integrationNoHourlyData": "Les entités de prévision sélectionnées ne fournissent pas de données horaires.",
      "chart": {
        "time": "Heure",
        "power": "Puissance",
        "kwh": "kWh",
        "forecastShort": "Prév.",
        "actualShort": "Réel"
      }
    },
    "history": {
      "title": "Last 7 days",
      "forecast": "Forecast",
      "actual": "Actual",
      "accuracy": "Accuracy",
      "averageMiss": "Average miss per day",
      "bias": "Actual vs forecast per day",
      "readout": "{day}: forecast {forecast}, actual {actual} kWh ({difference})",
      "noActual": "{day}: forecast {forecast} kWh, no recorded generation",
      "noForecast": "{day}: no recorded forecast",
      "loading": "Loading forecast history…",
      "noData": "No forecast history found. Home Assistant needs to have recorded the forecast sensor for at least one full day."
    },
    "aria": {
      "dayButton": "{day} {date}"
    },
    "errors": {
      "invalidConfig": "Invalid configuration"
    },
    "units": {
      "watts": "W",
      "kilowatts": "kW",
      "kilowattHours": "kWh",
      "kilowattHoursPerDay": "kWh/day"
    }
  },
  "editor": {
    "labels": {
      "title": "Title (optional)",
      "icon": "Header icon (optional, e.g. mdi:solar-power)",
      "show_header": "Show header",
      "display_estimate10": "Display Estimate10 Forecast Values",
      "device_id": "Forecast Device",
      "integration_type": "Integration Type",
      "forecast_entity_0": "Day 1 — Today",
      "forecast_entity_1": "Day 2 — Tomorrow",
      "forecast_entity_2": "Day 3",
      "forecast_entity_3": "Day 4",
      "forecast_entity_4": "Day 5",
      "forecast_entity_5": "Day 6",
      "forecast_entity_6": "Day 7",
      "export_rate_entity": "Current Export Rate Entity",
      "live_power_entity": "Live power (optional, kW sensor)",
      "today_actual_entity": "Today's actual generation (optional)",
      "next_hour_entity": "+1HR forecast (optional, overrides auto-derived value)",
      "remaining_today_entity": "LEFT / remaining today (optional, overrides auto-derived value)",
      "main_view": "Main View",
      "inverter_max_kw": "Inverter max output (kW)",
      "solar_max_kwp": "Solar array size (kWp)",
      "low_threshold": "Low threshold (kWh)",
      "high_threshold": "High threshold (kWh)",
      "low_threshold_entity": "Low threshold sensor (optional, kWh)",
      "high_threshold_entity": "High threshold sensor (optional, kWh)",
      "show_low_threshold_zone": "Tint bar track below low threshold",
      "show_high_threshold_zone": "Tint bar track above high threshold",
      "threshold_zone_opacity": "Threshold tint opacity (lower is more transparent)",
      "desktop_text_scale": "Desktop Text Scale",
      "font_size": "Font Size",
      "bar_width": "Bar Width"
    },
    "options": {
      "autoDetect": "Auto-detect",
      "solcast": "Solcast",
      "volcast": "Volcast",
      "forecastSolar": "Forecast.Solar",
      "openMeteo": "Open-Meteo Solar Forecast",
      "mainViewDaily": "Daily",
      "mainViewHourly": "Hourly",
      "mainViewHistory": "History"
    },
    "sections": {
      "integrationType": "Integration Type",
      "dailyForecastEntities": "Daily Forecast Entities",
      "liveData": "Live Data",
      "actualGenerationArrays": "Actual Generation Arrays",
      "systemParameters": "System Parameters",
      "energyProvider": "Energy Provider",
      "colourThresholds": "Colour Thresholds",
      "dateTimeDisplay": "Display"
    },
    "helpers": {
      "device": "Recommended: selecting a device will auto-configure the card",
      "estimate10": "Display Estimate10 is only applicable when the integration type is Solcast",
      "integrationType": "Automatically set when a forecast device is selected above. Override here only when configuring forecast entities manually without a device.",
      "liveData": "+1HR and LEFT are auto-detected or auto-derived where possible. Set these manually to override, or to use a custom sensor.",
      "actualArrays": "Optional: configure individual array sensors to display a stacked breakdown on today's bar. Each label is a single character shown inside its segment (e.g. N, S, E).",
      "desktopTextScale": "Desktop Text Scale: only applies on wider screens (≥ 768 px). Mobile sizing is unchanged.",
      "mainView": "Choose what the card shows. Hourly shows today's hourly forecast. History compares the last 7 days of forecast and actual generation.",
      "fontSize": "Optional daily bar text size in pixels. Leave blank to use CSS/default styling.",
      "barWidth": "Optional forecast bar width in pixels. Leave blank to use CSS/default styling."
    },
    "warnings": {
      "manualEntities": "Changing device will not overwrite manually configured entities."
    },
    "arrays": {
      "entity": "Array entity",
      "label": "Label (1 char)",
      "placeholder": "E",
      "hint": "bar & popup",
      "remove": "Remove",
      "add": "Add array"
    }
  },
  "customCard": {
    "name": "Solar Forecast Card",
    "description": "Daily solar energy forecast with hourly breakdown support."
  }
}
;

var ga = {
  "day": {
    "today": "Inniu",
    "tomorrow": "Amárach",
    "sunday_short": "Domh",
    "monday_short": "Luan",
    "tuesday_short": "Máirt",
    "wednesday_short": "Céad",
    "thursday_short": "Déar",
    "friday_short": "Aoine",
    "saturday_short": "Sath"
  },
  "card": {
    "defaultTitle": "Réamhaisnéis ghréine",
    "placeholder": "No forecast entities configured.",
    "placeholderAction": "Open the card editor to get started.",
    "twoDayNote": "2-day forecast available",
    "labels": {
      "live": "BEO:",
      "exportRate": "RÁTA EASPÓRT.:",
      "nextHour": "+1 U:",
      "left": "FÁGTHA:",
      "week": "SEACHTAIN:",
      "avg": "MEÁN:",
      "total": "Iomlán",
      "p10": "P10",
      "forecast": "réamhaisnéis",
      "generated": "giniúna"
    },
    "days": {
      "today": "Today"
    },
    "popup": {
      "close": "Close",
      "noForecastData": "No forecast data",
      "noHourlyData": "No hourly data available for this day.",
      "integrationNoHourlyData": "The selected forecast entities do not provide hourly forecast data.",
      "chart": {
        "time": "Time",
        "power": "Power",
        "kwh": "kWh",
        "forecastShort": "Fcst",
        "actualShort": "Act."
      }
    },
    "history": {
      "title": "Last 7 days",
      "forecast": "Forecast",
      "actual": "Actual",
      "accuracy": "Accuracy",
      "averageMiss": "Average miss per day",
      "bias": "Actual vs forecast per day",
      "readout": "{day}: forecast {forecast}, actual {actual} kWh ({difference})",
      "noActual": "{day}: forecast {forecast} kWh, no recorded generation",
      "noForecast": "{day}: no recorded forecast",
      "loading": "Loading forecast history…",
      "noData": "No forecast history found. Home Assistant needs to have recorded the forecast sensor for at least one full day."
    },
    "aria": {
      "dayButton": "{day} {date}"
    },
    "errors": {
      "invalidConfig": "Invalid configuration"
    },
    "units": {
      "watts": "W",
      "kilowatts": "kW",
      "kilowattHours": "kWh",
      "kilowattHoursPerDay": "kWh/day"
    }
  },
  "editor": {
    "labels": {
      "title": "Title (optional)",
      "icon": "Header icon (optional, e.g. mdi:solar-power)",
      "show_header": "Show header",
      "display_estimate10": "Display Estimate10 Forecast Values",
      "device_id": "Forecast Device",
      "integration_type": "Integration Type",
      "forecast_entity_0": "Day 1 — Today",
      "forecast_entity_1": "Day 2 — Tomorrow",
      "forecast_entity_2": "Day 3",
      "forecast_entity_3": "Day 4",
      "forecast_entity_4": "Day 5",
      "forecast_entity_5": "Day 6",
      "forecast_entity_6": "Day 7",
      "export_rate_entity": "Current Export Rate Entity",
      "live_power_entity": "Live power (optional, kW sensor)",
      "today_actual_entity": "Today's actual generation (optional)",
      "next_hour_entity": "+1HR forecast (optional, overrides auto-derived value)",
      "remaining_today_entity": "LEFT / remaining today (optional, overrides auto-derived value)",
      "main_view": "Main View",
      "inverter_max_kw": "Inverter max output (kW)",
      "solar_max_kwp": "Solar array size (kWp)",
      "low_threshold": "Low threshold (kWh)",
      "high_threshold": "High threshold (kWh)",
      "low_threshold_entity": "Low threshold sensor (optional, kWh)",
      "high_threshold_entity": "High threshold sensor (optional, kWh)",
      "show_low_threshold_zone": "Tint bar track below low threshold",
      "show_high_threshold_zone": "Tint bar track above high threshold",
      "threshold_zone_opacity": "Threshold tint opacity (lower is more transparent)",
      "desktop_text_scale": "Desktop Text Scale",
      "font_size": "Font Size",
      "bar_width": "Bar Width"
    },
    "options": {
      "autoDetect": "Auto-detect",
      "solcast": "Solcast",
      "volcast": "Volcast",
      "forecastSolar": "Forecast.Solar",
      "openMeteo": "Open-Meteo Solar Forecast",
      "mainViewDaily": "Daily",
      "mainViewHourly": "Hourly",
      "mainViewHistory": "History"
    },
    "sections": {
      "integrationType": "Integration Type",
      "dailyForecastEntities": "Daily Forecast Entities",
      "liveData": "Live Data",
      "actualGenerationArrays": "Actual Generation Arrays",
      "systemParameters": "System Parameters",
      "energyProvider": "Energy Provider",
      "colourThresholds": "Colour Thresholds",
      "dateTimeDisplay": "Display"
    },
    "helpers": {
      "device": "Recommended: selecting a device will auto-configure the card",
      "estimate10": "Display Estimate10 is only applicable when the integration type is Solcast",
      "integrationType": "Automatically set when a forecast device is selected above. Override here only when configuring forecast entities manually without a device.",
      "liveData": "+1HR and LEFT are auto-detected or auto-derived where possible. Set these manually to override, or to use a custom sensor.",
      "actualArrays": "Optional: configure individual array sensors to display a stacked breakdown on today's bar. Each label is a single character shown inside its segment (e.g. N, S, E).",
      "desktopTextScale": "Desktop Text Scale: only applies on wider screens (≥ 768 px). Mobile sizing is unchanged.",
      "mainView": "Choose what the card shows. Hourly shows today's hourly forecast. History compares the last 7 days of forecast and actual generation.",
      "fontSize": "Optional daily bar text size in pixels. Leave blank to use CSS/default styling.",
      "barWidth": "Optional forecast bar width in pixels. Leave blank to use CSS/default styling."
    },
    "warnings": {
      "manualEntities": "Changing device will not overwrite manually configured entities."
    },
    "arrays": {
      "entity": "Array entity",
      "label": "Label (1 char)",
      "placeholder": "E",
      "hint": "bar & popup",
      "remove": "Remove",
      "add": "Add array"
    }
  },
  "customCard": {
    "name": "Solar Forecast Card",
    "description": "Daily solar energy forecast with hourly breakdown support."
  }
}
;

var gl = {
  "day": {
    "today": "Hoxe",
    "tomorrow": "Mañá",
    "sunday_short": "dom",
    "monday_short": "luns",
    "tuesday_short": "mar",
    "wednesday_short": "mér",
    "thursday_short": "xov",
    "friday_short": "ven",
    "saturday_short": "sáb"
  },
  "card": {
    "defaultTitle": "Previsión solar",
    "placeholder": "No forecast entities configured.",
    "placeholderAction": "Open the card editor to get started.",
    "twoDayNote": "2-day forecast available",
    "labels": {
      "live": "EN DIRECTO:",
      "exportRate": "TARIFA EXPORT.:",
      "nextHour": "+1 H:",
      "left": "RESTANTE:",
      "week": "SEMANA:",
      "avg": "MEDIA:",
      "total": "Total",
      "p10": "P10",
      "forecast": "previsión",
      "generated": "xerado"
    },
    "days": {
      "today": "Today"
    },
    "popup": {
      "close": "Close",
      "noForecastData": "No forecast data",
      "noHourlyData": "No hourly data available for this day.",
      "integrationNoHourlyData": "The selected forecast entities do not provide hourly forecast data.",
      "chart": {
        "time": "Time",
        "power": "Power",
        "kwh": "kWh",
        "forecastShort": "Fcst",
        "actualShort": "Act."
      }
    },
    "history": {
      "title": "Last 7 days",
      "forecast": "Forecast",
      "actual": "Actual",
      "accuracy": "Accuracy",
      "averageMiss": "Average miss per day",
      "bias": "Actual vs forecast per day",
      "readout": "{day}: forecast {forecast}, actual {actual} kWh ({difference})",
      "noActual": "{day}: forecast {forecast} kWh, no recorded generation",
      "noForecast": "{day}: no recorded forecast",
      "loading": "Loading forecast history…",
      "noData": "No forecast history found. Home Assistant needs to have recorded the forecast sensor for at least one full day."
    },
    "aria": {
      "dayButton": "{day} {date}"
    },
    "errors": {
      "invalidConfig": "Invalid configuration"
    },
    "units": {
      "watts": "W",
      "kilowatts": "kW",
      "kilowattHours": "kWh",
      "kilowattHoursPerDay": "kWh/day"
    }
  },
  "editor": {
    "labels": {
      "title": "Title (optional)",
      "icon": "Header icon (optional, e.g. mdi:solar-power)",
      "show_header": "Show header",
      "display_estimate10": "Display Estimate10 Forecast Values",
      "device_id": "Forecast Device",
      "integration_type": "Integration Type",
      "forecast_entity_0": "Day 1 — Today",
      "forecast_entity_1": "Day 2 — Tomorrow",
      "forecast_entity_2": "Day 3",
      "forecast_entity_3": "Day 4",
      "forecast_entity_4": "Day 5",
      "forecast_entity_5": "Day 6",
      "forecast_entity_6": "Day 7",
      "export_rate_entity": "Current Export Rate Entity",
      "live_power_entity": "Live power (optional, kW sensor)",
      "today_actual_entity": "Today's actual generation (optional)",
      "next_hour_entity": "+1HR forecast (optional, overrides auto-derived value)",
      "remaining_today_entity": "LEFT / remaining today (optional, overrides auto-derived value)",
      "main_view": "Main View",
      "inverter_max_kw": "Inverter max output (kW)",
      "solar_max_kwp": "Solar array size (kWp)",
      "low_threshold": "Low threshold (kWh)",
      "high_threshold": "High threshold (kWh)",
      "low_threshold_entity": "Low threshold sensor (optional, kWh)",
      "high_threshold_entity": "High threshold sensor (optional, kWh)",
      "show_low_threshold_zone": "Tint bar track below low threshold",
      "show_high_threshold_zone": "Tint bar track above high threshold",
      "threshold_zone_opacity": "Threshold tint opacity (lower is more transparent)",
      "desktop_text_scale": "Desktop Text Scale",
      "font_size": "Font Size",
      "bar_width": "Bar Width"
    },
    "options": {
      "autoDetect": "Auto-detect",
      "solcast": "Solcast",
      "volcast": "Volcast",
      "forecastSolar": "Forecast.Solar",
      "openMeteo": "Open-Meteo Solar Forecast",
      "mainViewDaily": "Daily",
      "mainViewHourly": "Hourly",
      "mainViewHistory": "History"
    },
    "sections": {
      "integrationType": "Integration Type",
      "dailyForecastEntities": "Daily Forecast Entities",
      "liveData": "Live Data",
      "actualGenerationArrays": "Actual Generation Arrays",
      "systemParameters": "System Parameters",
      "energyProvider": "Energy Provider",
      "colourThresholds": "Colour Thresholds",
      "dateTimeDisplay": "Display"
    },
    "helpers": {
      "device": "Recommended: selecting a device will auto-configure the card",
      "estimate10": "Display Estimate10 is only applicable when the integration type is Solcast",
      "integrationType": "Automatically set when a forecast device is selected above. Override here only when configuring forecast entities manually without a device.",
      "liveData": "+1HR and LEFT are auto-detected or auto-derived where possible. Set these manually to override, or to use a custom sensor.",
      "actualArrays": "Optional: configure individual array sensors to display a stacked breakdown on today's bar. Each label is a single character shown inside its segment (e.g. N, S, E).",
      "desktopTextScale": "Desktop Text Scale: only applies on wider screens (≥ 768 px). Mobile sizing is unchanged.",
      "mainView": "Choose what the card shows. Hourly shows today's hourly forecast. History compares the last 7 days of forecast and actual generation.",
      "fontSize": "Optional daily bar text size in pixels. Leave blank to use CSS/default styling.",
      "barWidth": "Optional forecast bar width in pixels. Leave blank to use CSS/default styling."
    },
    "warnings": {
      "manualEntities": "Changing device will not overwrite manually configured entities."
    },
    "arrays": {
      "entity": "Array entity",
      "label": "Label (1 char)",
      "placeholder": "E",
      "hint": "bar & popup",
      "remove": "Remove",
      "add": "Add array"
    }
  },
  "customCard": {
    "name": "Solar Forecast Card",
    "description": "Daily solar energy forecast with hourly breakdown support."
  }
}
;

var gsw = {
  "day": {
    "today": "Hüt",
    "tomorrow": "Morn",
    "sunday_short": "Su",
    "monday_short": "Mä",
    "tuesday_short": "Zi",
    "wednesday_short": "Mi",
    "thursday_short": "Du",
    "friday_short": "Fr",
    "saturday_short": "Sa"
  },
  "card": {
    "defaultTitle": "Solarprognose",
    "placeholder": "No forecast entities configured.",
    "placeholderAction": "Open the card editor to get started.",
    "twoDayNote": "2-day forecast available",
    "labels": {
      "live": "LIVE:",
      "exportRate": "IISPIISIG:",
      "nextHour": "+1 STD:",
      "left": "REST:",
      "week": "WUCHE:",
      "avg": "Ø:",
      "total": "Total",
      "p10": "P10",
      "forecast": "Prognose",
      "generated": "erzügt"
    },
    "days": {
      "today": "Today"
    },
    "popup": {
      "close": "Close",
      "noForecastData": "No forecast data",
      "noHourlyData": "No hourly data available for this day.",
      "integrationNoHourlyData": "The selected forecast entities do not provide hourly forecast data.",
      "chart": {
        "time": "Time",
        "power": "Power",
        "kwh": "kWh",
        "forecastShort": "Fcst",
        "actualShort": "Act."
      }
    },
    "history": {
      "title": "Last 7 days",
      "forecast": "Forecast",
      "actual": "Actual",
      "accuracy": "Accuracy",
      "averageMiss": "Average miss per day",
      "bias": "Actual vs forecast per day",
      "readout": "{day}: forecast {forecast}, actual {actual} kWh ({difference})",
      "noActual": "{day}: forecast {forecast} kWh, no recorded generation",
      "noForecast": "{day}: no recorded forecast",
      "loading": "Loading forecast history…",
      "noData": "No forecast history found. Home Assistant needs to have recorded the forecast sensor for at least one full day."
    },
    "aria": {
      "dayButton": "{day} {date}"
    },
    "errors": {
      "invalidConfig": "Invalid configuration"
    },
    "units": {
      "watts": "W",
      "kilowatts": "kW",
      "kilowattHours": "kWh",
      "kilowattHoursPerDay": "kWh/day"
    }
  },
  "editor": {
    "labels": {
      "title": "Title (optional)",
      "icon": "Header icon (optional, e.g. mdi:solar-power)",
      "show_header": "Show header",
      "display_estimate10": "Display Estimate10 Forecast Values",
      "device_id": "Forecast Device",
      "integration_type": "Integration Type",
      "forecast_entity_0": "Day 1 — Today",
      "forecast_entity_1": "Day 2 — Tomorrow",
      "forecast_entity_2": "Day 3",
      "forecast_entity_3": "Day 4",
      "forecast_entity_4": "Day 5",
      "forecast_entity_5": "Day 6",
      "forecast_entity_6": "Day 7",
      "export_rate_entity": "Current Export Rate Entity",
      "live_power_entity": "Live power (optional, kW sensor)",
      "today_actual_entity": "Today's actual generation (optional)",
      "next_hour_entity": "+1HR forecast (optional, overrides auto-derived value)",
      "remaining_today_entity": "LEFT / remaining today (optional, overrides auto-derived value)",
      "main_view": "Main View",
      "inverter_max_kw": "Inverter max output (kW)",
      "solar_max_kwp": "Solar array size (kWp)",
      "low_threshold": "Low threshold (kWh)",
      "high_threshold": "High threshold (kWh)",
      "low_threshold_entity": "Low threshold sensor (optional, kWh)",
      "high_threshold_entity": "High threshold sensor (optional, kWh)",
      "show_low_threshold_zone": "Tint bar track below low threshold",
      "show_high_threshold_zone": "Tint bar track above high threshold",
      "threshold_zone_opacity": "Threshold tint opacity (lower is more transparent)",
      "desktop_text_scale": "Desktop Text Scale",
      "font_size": "Font Size",
      "bar_width": "Bar Width"
    },
    "options": {
      "autoDetect": "Auto-detect",
      "solcast": "Solcast",
      "volcast": "Volcast",
      "forecastSolar": "Forecast.Solar",
      "openMeteo": "Open-Meteo Solar Forecast",
      "mainViewDaily": "Daily",
      "mainViewHourly": "Hourly",
      "mainViewHistory": "History"
    },
    "sections": {
      "integrationType": "Integration Type",
      "dailyForecastEntities": "Daily Forecast Entities",
      "liveData": "Live Data",
      "actualGenerationArrays": "Actual Generation Arrays",
      "systemParameters": "System Parameters",
      "energyProvider": "Energy Provider",
      "colourThresholds": "Colour Thresholds",
      "dateTimeDisplay": "Display"
    },
    "helpers": {
      "device": "Recommended: selecting a device will auto-configure the card",
      "estimate10": "Display Estimate10 is only applicable when the integration type is Solcast",
      "integrationType": "Automatically set when a forecast device is selected above. Override here only when configuring forecast entities manually without a device.",
      "liveData": "+1HR and LEFT are auto-detected or auto-derived where possible. Set these manually to override, or to use a custom sensor.",
      "actualArrays": "Optional: configure individual array sensors to display a stacked breakdown on today's bar. Each label is a single character shown inside its segment (e.g. N, S, E).",
      "desktopTextScale": "Desktop Text Scale: only applies on wider screens (≥ 768 px). Mobile sizing is unchanged.",
      "mainView": "Choose what the card shows. Hourly shows today's hourly forecast. History compares the last 7 days of forecast and actual generation.",
      "fontSize": "Optional daily bar text size in pixels. Leave blank to use CSS/default styling.",
      "barWidth": "Optional forecast bar width in pixels. Leave blank to use CSS/default styling."
    },
    "warnings": {
      "manualEntities": "Changing device will not overwrite manually configured entities."
    },
    "arrays": {
      "entity": "Array entity",
      "label": "Label (1 char)",
      "placeholder": "E",
      "hint": "bar & popup",
      "remove": "Remove",
      "add": "Add array"
    }
  },
  "customCard": {
    "name": "Solar Forecast Card",
    "description": "Daily solar energy forecast with hourly breakdown support."
  }
}
;

var he = {
  "day": {
    "today": "היום",
    "tomorrow": "מחר",
    "sunday_short": "יום א׳",
    "monday_short": "יום ב׳",
    "tuesday_short": "יום ג׳",
    "wednesday_short": "יום ד׳",
    "thursday_short": "יום ה׳",
    "friday_short": "יום ו׳",
    "saturday_short": "שבת"
  },
  "card": {
    "defaultTitle": "תחזית סולארית",
    "placeholder": "No forecast entities configured.",
    "placeholderAction": "Open the card editor to get started.",
    "twoDayNote": "2-day forecast available",
    "labels": {
      "live": "חי:",
      "exportRate": "תעריף ייצוא:",
      "nextHour": "+1 ש:",
      "left": "נותר:",
      "week": "שבוע:",
      "avg": "ממוצע:",
      "total": "סה״כ",
      "p10": "P10",
      "forecast": "תחזית",
      "generated": "יוצר"
    },
    "days": {
      "today": "Today"
    },
    "popup": {
      "close": "Close",
      "noForecastData": "No forecast data",
      "noHourlyData": "No hourly data available for this day.",
      "integrationNoHourlyData": "The selected forecast entities do not provide hourly forecast data.",
      "chart": {
        "time": "Time",
        "power": "Power",
        "kwh": "kWh",
        "forecastShort": "Fcst",
        "actualShort": "Act."
      }
    },
    "history": {
      "title": "Last 7 days",
      "forecast": "Forecast",
      "actual": "Actual",
      "accuracy": "Accuracy",
      "averageMiss": "Average miss per day",
      "bias": "Actual vs forecast per day",
      "readout": "{day}: forecast {forecast}, actual {actual} kWh ({difference})",
      "noActual": "{day}: forecast {forecast} kWh, no recorded generation",
      "noForecast": "{day}: no recorded forecast",
      "loading": "Loading forecast history…",
      "noData": "No forecast history found. Home Assistant needs to have recorded the forecast sensor for at least one full day."
    },
    "aria": {
      "dayButton": "{day} {date}"
    },
    "errors": {
      "invalidConfig": "Invalid configuration"
    },
    "units": {
      "watts": "W",
      "kilowatts": "kW",
      "kilowattHours": "kWh",
      "kilowattHoursPerDay": "kWh/day"
    }
  },
  "editor": {
    "labels": {
      "title": "Title (optional)",
      "icon": "Header icon (optional, e.g. mdi:solar-power)",
      "show_header": "Show header",
      "display_estimate10": "Display Estimate10 Forecast Values",
      "device_id": "Forecast Device",
      "integration_type": "Integration Type",
      "forecast_entity_0": "Day 1 — Today",
      "forecast_entity_1": "Day 2 — Tomorrow",
      "forecast_entity_2": "Day 3",
      "forecast_entity_3": "Day 4",
      "forecast_entity_4": "Day 5",
      "forecast_entity_5": "Day 6",
      "forecast_entity_6": "Day 7",
      "export_rate_entity": "Current Export Rate Entity",
      "live_power_entity": "Live power (optional, kW sensor)",
      "today_actual_entity": "Today's actual generation (optional)",
      "next_hour_entity": "+1HR forecast (optional, overrides auto-derived value)",
      "remaining_today_entity": "LEFT / remaining today (optional, overrides auto-derived value)",
      "main_view": "Main View",
      "inverter_max_kw": "Inverter max output (kW)",
      "solar_max_kwp": "Solar array size (kWp)",
      "low_threshold": "Low threshold (kWh)",
      "high_threshold": "High threshold (kWh)",
      "low_threshold_entity": "Low threshold sensor (optional, kWh)",
      "high_threshold_entity": "High threshold sensor (optional, kWh)",
      "show_low_threshold_zone": "Tint bar track below low threshold",
      "show_high_threshold_zone": "Tint bar track above high threshold",
      "threshold_zone_opacity": "Threshold tint opacity (lower is more transparent)",
      "desktop_text_scale": "Desktop Text Scale",
      "font_size": "Font Size",
      "bar_width": "Bar Width"
    },
    "options": {
      "autoDetect": "Auto-detect",
      "solcast": "Solcast",
      "volcast": "Volcast",
      "forecastSolar": "Forecast.Solar",
      "openMeteo": "Open-Meteo Solar Forecast",
      "mainViewDaily": "Daily",
      "mainViewHourly": "Hourly",
      "mainViewHistory": "History"
    },
    "sections": {
      "integrationType": "Integration Type",
      "dailyForecastEntities": "Daily Forecast Entities",
      "liveData": "Live Data",
      "actualGenerationArrays": "Actual Generation Arrays",
      "systemParameters": "System Parameters",
      "energyProvider": "Energy Provider",
      "colourThresholds": "Colour Thresholds",
      "dateTimeDisplay": "Display"
    },
    "helpers": {
      "device": "Recommended: selecting a device will auto-configure the card",
      "estimate10": "Display Estimate10 is only applicable when the integration type is Solcast",
      "integrationType": "Automatically set when a forecast device is selected above. Override here only when configuring forecast entities manually without a device.",
      "liveData": "+1HR and LEFT are auto-detected or auto-derived where possible. Set these manually to override, or to use a custom sensor.",
      "actualArrays": "Optional: configure individual array sensors to display a stacked breakdown on today's bar. Each label is a single character shown inside its segment (e.g. N, S, E).",
      "desktopTextScale": "Desktop Text Scale: only applies on wider screens (≥ 768 px). Mobile sizing is unchanged.",
      "mainView": "Choose what the card shows. Hourly shows today's hourly forecast. History compares the last 7 days of forecast and actual generation.",
      "fontSize": "Optional daily bar text size in pixels. Leave blank to use CSS/default styling.",
      "barWidth": "Optional forecast bar width in pixels. Leave blank to use CSS/default styling."
    },
    "warnings": {
      "manualEntities": "Changing device will not overwrite manually configured entities."
    },
    "arrays": {
      "entity": "Array entity",
      "label": "Label (1 char)",
      "placeholder": "E",
      "hint": "bar & popup",
      "remove": "Remove",
      "add": "Add array"
    }
  },
  "customCard": {
    "name": "Solar Forecast Card",
    "description": "Daily solar energy forecast with hourly breakdown support."
  }
}
;

var hi = {
  "day": {
    "today": "आज",
    "tomorrow": "कल",
    "sunday_short": "रवि",
    "monday_short": "सोम",
    "tuesday_short": "मंगल",
    "wednesday_short": "बुध",
    "thursday_short": "गुरु",
    "friday_short": "शुक्र",
    "saturday_short": "शनि"
  },
  "card": {
    "defaultTitle": "सौर पूर्वानुमान",
    "placeholder": "No forecast entities configured.",
    "placeholderAction": "Open the card editor to get started.",
    "twoDayNote": "2-day forecast available",
    "labels": {
      "live": "लाइव:",
      "exportRate": "निर्यात दर:",
      "nextHour": "+1 घं:",
      "left": "शेष:",
      "week": "सप्ताह:",
      "avg": "औसत:",
      "total": "कुल",
      "p10": "P10",
      "forecast": "पूर्वानुमान",
      "generated": "उत्पन्न"
    },
    "days": {
      "today": "Today"
    },
    "popup": {
      "close": "Close",
      "noForecastData": "No forecast data",
      "noHourlyData": "No hourly data available for this day.",
      "integrationNoHourlyData": "The selected forecast entities do not provide hourly forecast data.",
      "chart": {
        "time": "Time",
        "power": "Power",
        "kwh": "kWh",
        "forecastShort": "Fcst",
        "actualShort": "Act."
      }
    },
    "history": {
      "title": "Last 7 days",
      "forecast": "Forecast",
      "actual": "Actual",
      "accuracy": "Accuracy",
      "averageMiss": "Average miss per day",
      "bias": "Actual vs forecast per day",
      "readout": "{day}: forecast {forecast}, actual {actual} kWh ({difference})",
      "noActual": "{day}: forecast {forecast} kWh, no recorded generation",
      "noForecast": "{day}: no recorded forecast",
      "loading": "Loading forecast history…",
      "noData": "No forecast history found. Home Assistant needs to have recorded the forecast sensor for at least one full day."
    },
    "aria": {
      "dayButton": "{day} {date}"
    },
    "errors": {
      "invalidConfig": "Invalid configuration"
    },
    "units": {
      "watts": "W",
      "kilowatts": "kW",
      "kilowattHours": "kWh",
      "kilowattHoursPerDay": "kWh/day"
    }
  },
  "editor": {
    "labels": {
      "title": "Title (optional)",
      "icon": "Header icon (optional, e.g. mdi:solar-power)",
      "show_header": "Show header",
      "display_estimate10": "Display Estimate10 Forecast Values",
      "device_id": "Forecast Device",
      "integration_type": "Integration Type",
      "forecast_entity_0": "Day 1 — Today",
      "forecast_entity_1": "Day 2 — Tomorrow",
      "forecast_entity_2": "Day 3",
      "forecast_entity_3": "Day 4",
      "forecast_entity_4": "Day 5",
      "forecast_entity_5": "Day 6",
      "forecast_entity_6": "Day 7",
      "export_rate_entity": "Current Export Rate Entity",
      "live_power_entity": "Live power (optional, kW sensor)",
      "today_actual_entity": "Today's actual generation (optional)",
      "next_hour_entity": "+1HR forecast (optional, overrides auto-derived value)",
      "remaining_today_entity": "LEFT / remaining today (optional, overrides auto-derived value)",
      "main_view": "Main View",
      "inverter_max_kw": "Inverter max output (kW)",
      "solar_max_kwp": "Solar array size (kWp)",
      "low_threshold": "Low threshold (kWh)",
      "high_threshold": "High threshold (kWh)",
      "low_threshold_entity": "Low threshold sensor (optional, kWh)",
      "high_threshold_entity": "High threshold sensor (optional, kWh)",
      "show_low_threshold_zone": "Tint bar track below low threshold",
      "show_high_threshold_zone": "Tint bar track above high threshold",
      "threshold_zone_opacity": "Threshold tint opacity (lower is more transparent)",
      "desktop_text_scale": "Desktop Text Scale",
      "font_size": "Font Size",
      "bar_width": "Bar Width"
    },
    "options": {
      "autoDetect": "Auto-detect",
      "solcast": "Solcast",
      "volcast": "Volcast",
      "forecastSolar": "Forecast.Solar",
      "openMeteo": "Open-Meteo Solar Forecast",
      "mainViewDaily": "Daily",
      "mainViewHourly": "Hourly",
      "mainViewHistory": "History"
    },
    "sections": {
      "integrationType": "Integration Type",
      "dailyForecastEntities": "Daily Forecast Entities",
      "liveData": "Live Data",
      "actualGenerationArrays": "Actual Generation Arrays",
      "systemParameters": "System Parameters",
      "energyProvider": "Energy Provider",
      "colourThresholds": "Colour Thresholds",
      "dateTimeDisplay": "Display"
    },
    "helpers": {
      "device": "Recommended: selecting a device will auto-configure the card",
      "estimate10": "Display Estimate10 is only applicable when the integration type is Solcast",
      "integrationType": "Automatically set when a forecast device is selected above. Override here only when configuring forecast entities manually without a device.",
      "liveData": "+1HR and LEFT are auto-detected or auto-derived where possible. Set these manually to override, or to use a custom sensor.",
      "actualArrays": "Optional: configure individual array sensors to display a stacked breakdown on today's bar. Each label is a single character shown inside its segment (e.g. N, S, E).",
      "desktopTextScale": "Desktop Text Scale: only applies on wider screens (≥ 768 px). Mobile sizing is unchanged.",
      "mainView": "Choose what the card shows. Hourly shows today's hourly forecast. History compares the last 7 days of forecast and actual generation.",
      "fontSize": "Optional daily bar text size in pixels. Leave blank to use CSS/default styling.",
      "barWidth": "Optional forecast bar width in pixels. Leave blank to use CSS/default styling."
    },
    "warnings": {
      "manualEntities": "Changing device will not overwrite manually configured entities."
    },
    "arrays": {
      "entity": "Array entity",
      "label": "Label (1 char)",
      "placeholder": "E",
      "hint": "bar & popup",
      "remove": "Remove",
      "add": "Add array"
    }
  },
  "customCard": {
    "name": "Solar Forecast Card",
    "description": "Daily solar energy forecast with hourly breakdown support."
  }
}
;

var hr = {
  "day": {
    "today": "Danas",
    "tomorrow": "Sutra",
    "sunday_short": "ned",
    "monday_short": "pon",
    "tuesday_short": "uto",
    "wednesday_short": "sri",
    "thursday_short": "čet",
    "friday_short": "pet",
    "saturday_short": "sub"
  },
  "card": {
    "defaultTitle": "Solarna prognoza",
    "placeholder": "No forecast entities configured.",
    "placeholderAction": "Open the card editor to get started.",
    "twoDayNote": "2-day forecast available",
    "labels": {
      "live": "UŽIVO:",
      "exportRate": "IZVOZNA TARIFA:",
      "nextHour": "+1 H:",
      "left": "PREOSTALO:",
      "week": "TJEDAN:",
      "avg": "PROSJEK:",
      "total": "Ukupno",
      "p10": "P10",
      "forecast": "prognoza",
      "generated": "proizvedeno"
    },
    "days": {
      "today": "Today"
    },
    "popup": {
      "close": "Close",
      "noForecastData": "No forecast data",
      "noHourlyData": "No hourly data available for this day.",
      "integrationNoHourlyData": "The selected forecast entities do not provide hourly forecast data.",
      "chart": {
        "time": "Time",
        "power": "Power",
        "kwh": "kWh",
        "forecastShort": "Fcst",
        "actualShort": "Act."
      }
    },
    "history": {
      "title": "Last 7 days",
      "forecast": "Forecast",
      "actual": "Actual",
      "accuracy": "Accuracy",
      "averageMiss": "Average miss per day",
      "bias": "Actual vs forecast per day",
      "readout": "{day}: forecast {forecast}, actual {actual} kWh ({difference})",
      "noActual": "{day}: forecast {forecast} kWh, no recorded generation",
      "noForecast": "{day}: no recorded forecast",
      "loading": "Loading forecast history…",
      "noData": "No forecast history found. Home Assistant needs to have recorded the forecast sensor for at least one full day."
    },
    "aria": {
      "dayButton": "{day} {date}"
    },
    "errors": {
      "invalidConfig": "Invalid configuration"
    },
    "units": {
      "watts": "W",
      "kilowatts": "kW",
      "kilowattHours": "kWh",
      "kilowattHoursPerDay": "kWh/day"
    }
  },
  "editor": {
    "labels": {
      "title": "Title (optional)",
      "icon": "Header icon (optional, e.g. mdi:solar-power)",
      "show_header": "Show header",
      "display_estimate10": "Display Estimate10 Forecast Values",
      "device_id": "Forecast Device",
      "integration_type": "Integration Type",
      "forecast_entity_0": "Day 1 — Today",
      "forecast_entity_1": "Day 2 — Tomorrow",
      "forecast_entity_2": "Day 3",
      "forecast_entity_3": "Day 4",
      "forecast_entity_4": "Day 5",
      "forecast_entity_5": "Day 6",
      "forecast_entity_6": "Day 7",
      "export_rate_entity": "Current Export Rate Entity",
      "live_power_entity": "Live power (optional, kW sensor)",
      "today_actual_entity": "Today's actual generation (optional)",
      "next_hour_entity": "+1HR forecast (optional, overrides auto-derived value)",
      "remaining_today_entity": "LEFT / remaining today (optional, overrides auto-derived value)",
      "main_view": "Main View",
      "inverter_max_kw": "Inverter max output (kW)",
      "solar_max_kwp": "Solar array size (kWp)",
      "low_threshold": "Low threshold (kWh)",
      "high_threshold": "High threshold (kWh)",
      "low_threshold_entity": "Low threshold sensor (optional, kWh)",
      "high_threshold_entity": "High threshold sensor (optional, kWh)",
      "show_low_threshold_zone": "Tint bar track below low threshold",
      "show_high_threshold_zone": "Tint bar track above high threshold",
      "threshold_zone_opacity": "Threshold tint opacity (lower is more transparent)",
      "desktop_text_scale": "Desktop Text Scale",
      "font_size": "Font Size",
      "bar_width": "Bar Width"
    },
    "options": {
      "autoDetect": "Auto-detect",
      "solcast": "Solcast",
      "volcast": "Volcast",
      "forecastSolar": "Forecast.Solar",
      "openMeteo": "Open-Meteo Solar Forecast",
      "mainViewDaily": "Daily",
      "mainViewHourly": "Hourly",
      "mainViewHistory": "History"
    },
    "sections": {
      "integrationType": "Integration Type",
      "dailyForecastEntities": "Daily Forecast Entities",
      "liveData": "Live Data",
      "actualGenerationArrays": "Actual Generation Arrays",
      "systemParameters": "System Parameters",
      "energyProvider": "Energy Provider",
      "colourThresholds": "Colour Thresholds",
      "dateTimeDisplay": "Display"
    },
    "helpers": {
      "device": "Recommended: selecting a device will auto-configure the card",
      "estimate10": "Display Estimate10 is only applicable when the integration type is Solcast",
      "integrationType": "Automatically set when a forecast device is selected above. Override here only when configuring forecast entities manually without a device.",
      "liveData": "+1HR and LEFT are auto-detected or auto-derived where possible. Set these manually to override, or to use a custom sensor.",
      "actualArrays": "Optional: configure individual array sensors to display a stacked breakdown on today's bar. Each label is a single character shown inside its segment (e.g. N, S, E).",
      "desktopTextScale": "Desktop Text Scale: only applies on wider screens (≥ 768 px). Mobile sizing is unchanged.",
      "mainView": "Choose what the card shows. Hourly shows today's hourly forecast. History compares the last 7 days of forecast and actual generation.",
      "fontSize": "Optional daily bar text size in pixels. Leave blank to use CSS/default styling.",
      "barWidth": "Optional forecast bar width in pixels. Leave blank to use CSS/default styling."
    },
    "warnings": {
      "manualEntities": "Changing device will not overwrite manually configured entities."
    },
    "arrays": {
      "entity": "Array entity",
      "label": "Label (1 char)",
      "placeholder": "E",
      "hint": "bar & popup",
      "remove": "Remove",
      "add": "Add array"
    }
  },
  "customCard": {
    "name": "Solar Forecast Card",
    "description": "Daily solar energy forecast with hourly breakdown support."
  }
}
;

var hu = {
  "day": {
    "today": "Ma",
    "tomorrow": "Holnap",
    "sunday_short": "V",
    "monday_short": "H",
    "tuesday_short": "K",
    "wednesday_short": "Sze",
    "thursday_short": "Cs",
    "friday_short": "P",
    "saturday_short": "Szo"
  },
  "card": {
    "defaultTitle": "Napelem előrejelzés",
    "placeholder": "No forecast entities configured.",
    "placeholderAction": "Open the card editor to get started.",
    "twoDayNote": "2-day forecast available",
    "labels": {
      "live": "ÉLŐ:",
      "exportRate": "BETÁPL. TARIFA:",
      "nextHour": "+1 Ó:",
      "left": "MARAD:",
      "week": "HÉT:",
      "avg": "ÁTL.:",
      "total": "Összesen",
      "p10": "P10",
      "forecast": "előrejelzés",
      "generated": "termelt"
    },
    "days": {
      "today": "Today"
    },
    "popup": {
      "close": "Close",
      "noForecastData": "No forecast data",
      "noHourlyData": "No hourly data available for this day.",
      "integrationNoHourlyData": "The selected forecast entities do not provide hourly forecast data.",
      "chart": {
        "time": "Time",
        "power": "Power",
        "kwh": "kWh",
        "forecastShort": "Fcst",
        "actualShort": "Act."
      }
    },
    "history": {
      "title": "Last 7 days",
      "forecast": "Forecast",
      "actual": "Actual",
      "accuracy": "Accuracy",
      "averageMiss": "Average miss per day",
      "bias": "Actual vs forecast per day",
      "readout": "{day}: forecast {forecast}, actual {actual} kWh ({difference})",
      "noActual": "{day}: forecast {forecast} kWh, no recorded generation",
      "noForecast": "{day}: no recorded forecast",
      "loading": "Loading forecast history…",
      "noData": "No forecast history found. Home Assistant needs to have recorded the forecast sensor for at least one full day."
    },
    "aria": {
      "dayButton": "{day} {date}"
    },
    "errors": {
      "invalidConfig": "Invalid configuration"
    },
    "units": {
      "watts": "W",
      "kilowatts": "kW",
      "kilowattHours": "kWh",
      "kilowattHoursPerDay": "kWh/day"
    }
  },
  "editor": {
    "labels": {
      "title": "Title (optional)",
      "icon": "Header icon (optional, e.g. mdi:solar-power)",
      "show_header": "Show header",
      "display_estimate10": "Display Estimate10 Forecast Values",
      "device_id": "Forecast Device",
      "integration_type": "Integration Type",
      "forecast_entity_0": "Day 1 — Today",
      "forecast_entity_1": "Day 2 — Tomorrow",
      "forecast_entity_2": "Day 3",
      "forecast_entity_3": "Day 4",
      "forecast_entity_4": "Day 5",
      "forecast_entity_5": "Day 6",
      "forecast_entity_6": "Day 7",
      "export_rate_entity": "Current Export Rate Entity",
      "live_power_entity": "Live power (optional, kW sensor)",
      "today_actual_entity": "Today's actual generation (optional)",
      "next_hour_entity": "+1HR forecast (optional, overrides auto-derived value)",
      "remaining_today_entity": "LEFT / remaining today (optional, overrides auto-derived value)",
      "main_view": "Main View",
      "inverter_max_kw": "Inverter max output (kW)",
      "solar_max_kwp": "Solar array size (kWp)",
      "low_threshold": "Low threshold (kWh)",
      "high_threshold": "High threshold (kWh)",
      "low_threshold_entity": "Low threshold sensor (optional, kWh)",
      "high_threshold_entity": "High threshold sensor (optional, kWh)",
      "show_low_threshold_zone": "Tint bar track below low threshold",
      "show_high_threshold_zone": "Tint bar track above high threshold",
      "threshold_zone_opacity": "Threshold tint opacity (lower is more transparent)",
      "desktop_text_scale": "Desktop Text Scale",
      "font_size": "Font Size",
      "bar_width": "Bar Width"
    },
    "options": {
      "autoDetect": "Auto-detect",
      "solcast": "Solcast",
      "volcast": "Volcast",
      "forecastSolar": "Forecast.Solar",
      "openMeteo": "Open-Meteo Solar Forecast",
      "mainViewDaily": "Daily",
      "mainViewHourly": "Hourly",
      "mainViewHistory": "History"
    },
    "sections": {
      "integrationType": "Integration Type",
      "dailyForecastEntities": "Daily Forecast Entities",
      "liveData": "Live Data",
      "actualGenerationArrays": "Actual Generation Arrays",
      "systemParameters": "System Parameters",
      "energyProvider": "Energy Provider",
      "colourThresholds": "Colour Thresholds",
      "dateTimeDisplay": "Display"
    },
    "helpers": {
      "device": "Recommended: selecting a device will auto-configure the card",
      "estimate10": "Display Estimate10 is only applicable when the integration type is Solcast",
      "integrationType": "Automatically set when a forecast device is selected above. Override here only when configuring forecast entities manually without a device.",
      "liveData": "+1HR and LEFT are auto-detected or auto-derived where possible. Set these manually to override, or to use a custom sensor.",
      "actualArrays": "Optional: configure individual array sensors to display a stacked breakdown on today's bar. Each label is a single character shown inside its segment (e.g. N, S, E).",
      "desktopTextScale": "Desktop Text Scale: only applies on wider screens (≥ 768 px). Mobile sizing is unchanged.",
      "mainView": "Choose what the card shows. Hourly shows today's hourly forecast. History compares the last 7 days of forecast and actual generation.",
      "fontSize": "Optional daily bar text size in pixels. Leave blank to use CSS/default styling.",
      "barWidth": "Optional forecast bar width in pixels. Leave blank to use CSS/default styling."
    },
    "warnings": {
      "manualEntities": "Changing device will not overwrite manually configured entities."
    },
    "arrays": {
      "entity": "Array entity",
      "label": "Label (1 char)",
      "placeholder": "E",
      "hint": "bar & popup",
      "remove": "Remove",
      "add": "Add array"
    }
  },
  "customCard": {
    "name": "Solar Forecast Card",
    "description": "Daily solar energy forecast with hourly breakdown support."
  }
}
;

var hy = {
  "day": {
    "today": "Այսօր",
    "tomorrow": "Վաղը",
    "sunday_short": "կիր",
    "monday_short": "երկ",
    "tuesday_short": "երք",
    "wednesday_short": "չրք",
    "thursday_short": "հնգ",
    "friday_short": "ուր",
    "saturday_short": "շբթ"
  },
  "card": {
    "defaultTitle": "Արևային կանխատեսում",
    "placeholder": "No forecast entities configured.",
    "placeholderAction": "Open the card editor to get started.",
    "twoDayNote": "2-day forecast available",
    "labels": {
      "live": "ՈՒՂԻՂ:",
      "exportRate": "ԱՐՏԱՀԱՆՄԱՆ ՍԱԿԱԳԻՆ:",
      "nextHour": "+1 Ժ:",
      "left": "ՄՆԱՑԵԼ Է:",
      "week": "ՇԱԲԱԹ:",
      "avg": "ՄԻՋ.:",
      "total": "Ընդամենը",
      "p10": "P10",
      "forecast": "կանխատեսում",
      "generated": "արտադրված"
    },
    "days": {
      "today": "Today"
    },
    "popup": {
      "close": "Close",
      "noForecastData": "No forecast data",
      "noHourlyData": "No hourly data available for this day.",
      "integrationNoHourlyData": "The selected forecast entities do not provide hourly forecast data.",
      "chart": {
        "time": "Time",
        "power": "Power",
        "kwh": "kWh",
        "forecastShort": "Fcst",
        "actualShort": "Act."
      }
    },
    "history": {
      "title": "Last 7 days",
      "forecast": "Forecast",
      "actual": "Actual",
      "accuracy": "Accuracy",
      "averageMiss": "Average miss per day",
      "bias": "Actual vs forecast per day",
      "readout": "{day}: forecast {forecast}, actual {actual} kWh ({difference})",
      "noActual": "{day}: forecast {forecast} kWh, no recorded generation",
      "noForecast": "{day}: no recorded forecast",
      "loading": "Loading forecast history…",
      "noData": "No forecast history found. Home Assistant needs to have recorded the forecast sensor for at least one full day."
    },
    "aria": {
      "dayButton": "{day} {date}"
    },
    "errors": {
      "invalidConfig": "Invalid configuration"
    },
    "units": {
      "watts": "W",
      "kilowatts": "kW",
      "kilowattHours": "kWh",
      "kilowattHoursPerDay": "kWh/day"
    }
  },
  "editor": {
    "labels": {
      "title": "Title (optional)",
      "icon": "Header icon (optional, e.g. mdi:solar-power)",
      "show_header": "Show header",
      "display_estimate10": "Display Estimate10 Forecast Values",
      "device_id": "Forecast Device",
      "integration_type": "Integration Type",
      "forecast_entity_0": "Day 1 — Today",
      "forecast_entity_1": "Day 2 — Tomorrow",
      "forecast_entity_2": "Day 3",
      "forecast_entity_3": "Day 4",
      "forecast_entity_4": "Day 5",
      "forecast_entity_5": "Day 6",
      "forecast_entity_6": "Day 7",
      "export_rate_entity": "Current Export Rate Entity",
      "live_power_entity": "Live power (optional, kW sensor)",
      "today_actual_entity": "Today's actual generation (optional)",
      "next_hour_entity": "+1HR forecast (optional, overrides auto-derived value)",
      "remaining_today_entity": "LEFT / remaining today (optional, overrides auto-derived value)",
      "main_view": "Main View",
      "inverter_max_kw": "Inverter max output (kW)",
      "solar_max_kwp": "Solar array size (kWp)",
      "low_threshold": "Low threshold (kWh)",
      "high_threshold": "High threshold (kWh)",
      "low_threshold_entity": "Low threshold sensor (optional, kWh)",
      "high_threshold_entity": "High threshold sensor (optional, kWh)",
      "show_low_threshold_zone": "Tint bar track below low threshold",
      "show_high_threshold_zone": "Tint bar track above high threshold",
      "threshold_zone_opacity": "Threshold tint opacity (lower is more transparent)",
      "desktop_text_scale": "Desktop Text Scale",
      "font_size": "Font Size",
      "bar_width": "Bar Width"
    },
    "options": {
      "autoDetect": "Auto-detect",
      "solcast": "Solcast",
      "volcast": "Volcast",
      "forecastSolar": "Forecast.Solar",
      "openMeteo": "Open-Meteo Solar Forecast",
      "mainViewDaily": "Daily",
      "mainViewHourly": "Hourly",
      "mainViewHistory": "History"
    },
    "sections": {
      "integrationType": "Integration Type",
      "dailyForecastEntities": "Daily Forecast Entities",
      "liveData": "Live Data",
      "actualGenerationArrays": "Actual Generation Arrays",
      "systemParameters": "System Parameters",
      "energyProvider": "Energy Provider",
      "colourThresholds": "Colour Thresholds",
      "dateTimeDisplay": "Display"
    },
    "helpers": {
      "device": "Recommended: selecting a device will auto-configure the card",
      "estimate10": "Display Estimate10 is only applicable when the integration type is Solcast",
      "integrationType": "Automatically set when a forecast device is selected above. Override here only when configuring forecast entities manually without a device.",
      "liveData": "+1HR and LEFT are auto-detected or auto-derived where possible. Set these manually to override, or to use a custom sensor.",
      "actualArrays": "Optional: configure individual array sensors to display a stacked breakdown on today's bar. Each label is a single character shown inside its segment (e.g. N, S, E).",
      "desktopTextScale": "Desktop Text Scale: only applies on wider screens (≥ 768 px). Mobile sizing is unchanged.",
      "mainView": "Choose what the card shows. Hourly shows today's hourly forecast. History compares the last 7 days of forecast and actual generation.",
      "fontSize": "Optional daily bar text size in pixels. Leave blank to use CSS/default styling.",
      "barWidth": "Optional forecast bar width in pixels. Leave blank to use CSS/default styling."
    },
    "warnings": {
      "manualEntities": "Changing device will not overwrite manually configured entities."
    },
    "arrays": {
      "entity": "Array entity",
      "label": "Label (1 char)",
      "placeholder": "E",
      "hint": "bar & popup",
      "remove": "Remove",
      "add": "Add array"
    }
  },
  "customCard": {
    "name": "Solar Forecast Card",
    "description": "Daily solar energy forecast with hourly breakdown support."
  }
}
;

var id = {
  "day": {
    "today": "Hari ini",
    "tomorrow": "Besok",
    "sunday_short": "Min",
    "monday_short": "Sen",
    "tuesday_short": "Sel",
    "wednesday_short": "Rab",
    "thursday_short": "Kam",
    "friday_short": "Jum",
    "saturday_short": "Sab"
  },
  "card": {
    "defaultTitle": "Prakiraan Surya",
    "placeholder": "No forecast entities configured.",
    "placeholderAction": "Open the card editor to get started.",
    "twoDayNote": "2-day forecast available",
    "labels": {
      "live": "LANGSUNG:",
      "exportRate": "TARIF EKSPOR:",
      "nextHour": "+1 JAM:",
      "left": "SISA:",
      "week": "MINGGU:",
      "avg": "RATA2:",
      "total": "Total",
      "p10": "P10",
      "forecast": "prakiraan",
      "generated": "dihasilkan"
    },
    "days": {
      "today": "Today"
    },
    "popup": {
      "close": "Close",
      "noForecastData": "No forecast data",
      "noHourlyData": "No hourly data available for this day.",
      "integrationNoHourlyData": "The selected forecast entities do not provide hourly forecast data.",
      "chart": {
        "time": "Time",
        "power": "Power",
        "kwh": "kWh",
        "forecastShort": "Fcst",
        "actualShort": "Act."
      }
    },
    "history": {
      "title": "Last 7 days",
      "forecast": "Forecast",
      "actual": "Actual",
      "accuracy": "Accuracy",
      "averageMiss": "Average miss per day",
      "bias": "Actual vs forecast per day",
      "readout": "{day}: forecast {forecast}, actual {actual} kWh ({difference})",
      "noActual": "{day}: forecast {forecast} kWh, no recorded generation",
      "noForecast": "{day}: no recorded forecast",
      "loading": "Loading forecast history…",
      "noData": "No forecast history found. Home Assistant needs to have recorded the forecast sensor for at least one full day."
    },
    "aria": {
      "dayButton": "{day} {date}"
    },
    "errors": {
      "invalidConfig": "Invalid configuration"
    },
    "units": {
      "watts": "W",
      "kilowatts": "kW",
      "kilowattHours": "kWh",
      "kilowattHoursPerDay": "kWh/day"
    }
  },
  "editor": {
    "labels": {
      "title": "Title (optional)",
      "icon": "Header icon (optional, e.g. mdi:solar-power)",
      "show_header": "Show header",
      "display_estimate10": "Display Estimate10 Forecast Values",
      "device_id": "Forecast Device",
      "integration_type": "Integration Type",
      "forecast_entity_0": "Day 1 — Today",
      "forecast_entity_1": "Day 2 — Tomorrow",
      "forecast_entity_2": "Day 3",
      "forecast_entity_3": "Day 4",
      "forecast_entity_4": "Day 5",
      "forecast_entity_5": "Day 6",
      "forecast_entity_6": "Day 7",
      "export_rate_entity": "Current Export Rate Entity",
      "live_power_entity": "Live power (optional, kW sensor)",
      "today_actual_entity": "Today's actual generation (optional)",
      "next_hour_entity": "+1HR forecast (optional, overrides auto-derived value)",
      "remaining_today_entity": "LEFT / remaining today (optional, overrides auto-derived value)",
      "main_view": "Main View",
      "inverter_max_kw": "Inverter max output (kW)",
      "solar_max_kwp": "Solar array size (kWp)",
      "low_threshold": "Low threshold (kWh)",
      "high_threshold": "High threshold (kWh)",
      "low_threshold_entity": "Low threshold sensor (optional, kWh)",
      "high_threshold_entity": "High threshold sensor (optional, kWh)",
      "show_low_threshold_zone": "Tint bar track below low threshold",
      "show_high_threshold_zone": "Tint bar track above high threshold",
      "threshold_zone_opacity": "Threshold tint opacity (lower is more transparent)",
      "desktop_text_scale": "Desktop Text Scale",
      "font_size": "Font Size",
      "bar_width": "Bar Width"
    },
    "options": {
      "autoDetect": "Auto-detect",
      "solcast": "Solcast",
      "volcast": "Volcast",
      "forecastSolar": "Forecast.Solar",
      "openMeteo": "Open-Meteo Solar Forecast",
      "mainViewDaily": "Daily",
      "mainViewHourly": "Hourly",
      "mainViewHistory": "History"
    },
    "sections": {
      "integrationType": "Integration Type",
      "dailyForecastEntities": "Daily Forecast Entities",
      "liveData": "Live Data",
      "actualGenerationArrays": "Actual Generation Arrays",
      "systemParameters": "System Parameters",
      "energyProvider": "Energy Provider",
      "colourThresholds": "Colour Thresholds",
      "dateTimeDisplay": "Display"
    },
    "helpers": {
      "device": "Recommended: selecting a device will auto-configure the card",
      "estimate10": "Display Estimate10 is only applicable when the integration type is Solcast",
      "integrationType": "Automatically set when a forecast device is selected above. Override here only when configuring forecast entities manually without a device.",
      "liveData": "+1HR and LEFT are auto-detected or auto-derived where possible. Set these manually to override, or to use a custom sensor.",
      "actualArrays": "Optional: configure individual array sensors to display a stacked breakdown on today's bar. Each label is a single character shown inside its segment (e.g. N, S, E).",
      "desktopTextScale": "Desktop Text Scale: only applies on wider screens (≥ 768 px). Mobile sizing is unchanged.",
      "mainView": "Choose what the card shows. Hourly shows today's hourly forecast. History compares the last 7 days of forecast and actual generation.",
      "fontSize": "Optional daily bar text size in pixels. Leave blank to use CSS/default styling.",
      "barWidth": "Optional forecast bar width in pixels. Leave blank to use CSS/default styling."
    },
    "warnings": {
      "manualEntities": "Changing device will not overwrite manually configured entities."
    },
    "arrays": {
      "entity": "Array entity",
      "label": "Label (1 char)",
      "placeholder": "E",
      "hint": "bar & popup",
      "remove": "Remove",
      "add": "Add array"
    }
  },
  "customCard": {
    "name": "Solar Forecast Card",
    "description": "Daily solar energy forecast with hourly breakdown support."
  }
}
;

var it = {
  "day": {
    "today": "Oggi",
    "tomorrow": "Domani",
    "sunday_short": "dom",
    "monday_short": "lun",
    "tuesday_short": "mar",
    "wednesday_short": "mer",
    "thursday_short": "gio",
    "friday_short": "ven",
    "saturday_short": "sab"
  },
  "card": {
    "defaultTitle": "Previsione solare",
    "placeholder": "No forecast entities configured.",
    "placeholderAction": "Open the card editor to get started.",
    "twoDayNote": "2-day forecast available",
    "labels": {
      "live": "LIVE:",
      "exportRate": "TARIFFA EXPORT:",
      "nextHour": "+1 H:",
      "left": "RESTANTE:",
      "week": "SETTIMANA:",
      "avg": "MEDIA:",
      "total": "Totale",
      "p10": "P10",
      "forecast": "previsione",
      "generated": "prodotto"
    },
    "days": {
      "today": "Today"
    },
    "popup": {
      "close": "Close",
      "noForecastData": "No forecast data",
      "noHourlyData": "No hourly data available for this day.",
      "integrationNoHourlyData": "The selected forecast entities do not provide hourly forecast data.",
      "chart": {
        "time": "Time",
        "power": "Power",
        "kwh": "kWh",
        "forecastShort": "Fcst",
        "actualShort": "Act."
      }
    },
    "history": {
      "title": "Last 7 days",
      "forecast": "Forecast",
      "actual": "Actual",
      "accuracy": "Accuracy",
      "averageMiss": "Average miss per day",
      "bias": "Actual vs forecast per day",
      "readout": "{day}: forecast {forecast}, actual {actual} kWh ({difference})",
      "noActual": "{day}: forecast {forecast} kWh, no recorded generation",
      "noForecast": "{day}: no recorded forecast",
      "loading": "Loading forecast history…",
      "noData": "No forecast history found. Home Assistant needs to have recorded the forecast sensor for at least one full day."
    },
    "aria": {
      "dayButton": "{day} {date}"
    },
    "errors": {
      "invalidConfig": "Invalid configuration"
    },
    "units": {
      "watts": "W",
      "kilowatts": "kW",
      "kilowattHours": "kWh",
      "kilowattHoursPerDay": "kWh/day"
    }
  },
  "editor": {
    "labels": {
      "title": "Title (optional)",
      "icon": "Header icon (optional, e.g. mdi:solar-power)",
      "show_header": "Show header",
      "display_estimate10": "Display Estimate10 Forecast Values",
      "device_id": "Forecast Device",
      "integration_type": "Integration Type",
      "forecast_entity_0": "Day 1 — Today",
      "forecast_entity_1": "Day 2 — Tomorrow",
      "forecast_entity_2": "Day 3",
      "forecast_entity_3": "Day 4",
      "forecast_entity_4": "Day 5",
      "forecast_entity_5": "Day 6",
      "forecast_entity_6": "Day 7",
      "export_rate_entity": "Current Export Rate Entity",
      "live_power_entity": "Live power (optional, kW sensor)",
      "today_actual_entity": "Today's actual generation (optional)",
      "next_hour_entity": "+1HR forecast (optional, overrides auto-derived value)",
      "remaining_today_entity": "LEFT / remaining today (optional, overrides auto-derived value)",
      "main_view": "Main View",
      "inverter_max_kw": "Inverter max output (kW)",
      "solar_max_kwp": "Solar array size (kWp)",
      "low_threshold": "Low threshold (kWh)",
      "high_threshold": "High threshold (kWh)",
      "low_threshold_entity": "Low threshold sensor (optional, kWh)",
      "high_threshold_entity": "High threshold sensor (optional, kWh)",
      "show_low_threshold_zone": "Tint bar track below low threshold",
      "show_high_threshold_zone": "Tint bar track above high threshold",
      "threshold_zone_opacity": "Threshold tint opacity (lower is more transparent)",
      "desktop_text_scale": "Desktop Text Scale",
      "font_size": "Font Size",
      "bar_width": "Bar Width"
    },
    "options": {
      "autoDetect": "Auto-detect",
      "solcast": "Solcast",
      "volcast": "Volcast",
      "forecastSolar": "Forecast.Solar",
      "openMeteo": "Open-Meteo Solar Forecast",
      "mainViewDaily": "Daily",
      "mainViewHourly": "Hourly",
      "mainViewHistory": "History"
    },
    "sections": {
      "integrationType": "Integration Type",
      "dailyForecastEntities": "Daily Forecast Entities",
      "liveData": "Live Data",
      "actualGenerationArrays": "Actual Generation Arrays",
      "systemParameters": "System Parameters",
      "energyProvider": "Energy Provider",
      "colourThresholds": "Colour Thresholds",
      "dateTimeDisplay": "Display"
    },
    "helpers": {
      "device": "Recommended: selecting a device will auto-configure the card",
      "estimate10": "Display Estimate10 is only applicable when the integration type is Solcast",
      "integrationType": "Automatically set when a forecast device is selected above. Override here only when configuring forecast entities manually without a device.",
      "liveData": "+1HR and LEFT are auto-detected or auto-derived where possible. Set these manually to override, or to use a custom sensor.",
      "actualArrays": "Optional: configure individual array sensors to display a stacked breakdown on today's bar. Each label is a single character shown inside its segment (e.g. N, S, E).",
      "desktopTextScale": "Desktop Text Scale: only applies on wider screens (≥ 768 px). Mobile sizing is unchanged.",
      "mainView": "Choose what the card shows. Hourly shows today's hourly forecast. History compares the last 7 days of forecast and actual generation.",
      "fontSize": "Optional daily bar text size in pixels. Leave blank to use CSS/default styling.",
      "barWidth": "Optional forecast bar width in pixels. Leave blank to use CSS/default styling."
    },
    "warnings": {
      "manualEntities": "Changing device will not overwrite manually configured entities."
    },
    "arrays": {
      "entity": "Array entity",
      "label": "Label (1 char)",
      "placeholder": "E",
      "hint": "bar & popup",
      "remove": "Remove",
      "add": "Add array"
    }
  },
  "customCard": {
    "name": "Solar Forecast Card",
    "description": "Daily solar energy forecast with hourly breakdown support."
  }
}
;

var is = {
  "day": {
    "today": "Í dag",
    "tomorrow": "Á morgun",
    "sunday_short": "sun",
    "monday_short": "mán",
    "tuesday_short": "þri",
    "wednesday_short": "mið",
    "thursday_short": "fim",
    "friday_short": "fös",
    "saturday_short": "lau"
  },
  "card": {
    "defaultTitle": "Sólarspá",
    "placeholder": "No forecast entities configured.",
    "placeholderAction": "Open the card editor to get started.",
    "twoDayNote": "2-day forecast available",
    "labels": {
      "live": "Í BEINNI:",
      "exportRate": "ÚTFLUTNINGSGJALD:",
      "nextHour": "+1 KLST:",
      "left": "EFTIR:",
      "week": "VIKA:",
      "avg": "MEÐALT.:",
      "total": "Samtals",
      "p10": "P10",
      "forecast": "spá",
      "generated": "framleitt"
    },
    "days": {
      "today": "Today"
    },
    "popup": {
      "close": "Close",
      "noForecastData": "No forecast data",
      "noHourlyData": "No hourly data available for this day.",
      "integrationNoHourlyData": "The selected forecast entities do not provide hourly forecast data.",
      "chart": {
        "time": "Time",
        "power": "Power",
        "kwh": "kWh",
        "forecastShort": "Fcst",
        "actualShort": "Act."
      }
    },
    "history": {
      "title": "Last 7 days",
      "forecast": "Forecast",
      "actual": "Actual",
      "accuracy": "Accuracy",
      "averageMiss": "Average miss per day",
      "bias": "Actual vs forecast per day",
      "readout": "{day}: forecast {forecast}, actual {actual} kWh ({difference})",
      "noActual": "{day}: forecast {forecast} kWh, no recorded generation",
      "noForecast": "{day}: no recorded forecast",
      "loading": "Loading forecast history…",
      "noData": "No forecast history found. Home Assistant needs to have recorded the forecast sensor for at least one full day."
    },
    "aria": {
      "dayButton": "{day} {date}"
    },
    "errors": {
      "invalidConfig": "Invalid configuration"
    },
    "units": {
      "watts": "W",
      "kilowatts": "kW",
      "kilowattHours": "kWh",
      "kilowattHoursPerDay": "kWh/day"
    }
  },
  "editor": {
    "labels": {
      "title": "Title (optional)",
      "icon": "Header icon (optional, e.g. mdi:solar-power)",
      "show_header": "Show header",
      "display_estimate10": "Display Estimate10 Forecast Values",
      "device_id": "Forecast Device",
      "integration_type": "Integration Type",
      "forecast_entity_0": "Day 1 — Today",
      "forecast_entity_1": "Day 2 — Tomorrow",
      "forecast_entity_2": "Day 3",
      "forecast_entity_3": "Day 4",
      "forecast_entity_4": "Day 5",
      "forecast_entity_5": "Day 6",
      "forecast_entity_6": "Day 7",
      "export_rate_entity": "Current Export Rate Entity",
      "live_power_entity": "Live power (optional, kW sensor)",
      "today_actual_entity": "Today's actual generation (optional)",
      "next_hour_entity": "+1HR forecast (optional, overrides auto-derived value)",
      "remaining_today_entity": "LEFT / remaining today (optional, overrides auto-derived value)",
      "main_view": "Main View",
      "inverter_max_kw": "Inverter max output (kW)",
      "solar_max_kwp": "Solar array size (kWp)",
      "low_threshold": "Low threshold (kWh)",
      "high_threshold": "High threshold (kWh)",
      "low_threshold_entity": "Low threshold sensor (optional, kWh)",
      "high_threshold_entity": "High threshold sensor (optional, kWh)",
      "show_low_threshold_zone": "Tint bar track below low threshold",
      "show_high_threshold_zone": "Tint bar track above high threshold",
      "threshold_zone_opacity": "Threshold tint opacity (lower is more transparent)",
      "desktop_text_scale": "Desktop Text Scale",
      "font_size": "Font Size",
      "bar_width": "Bar Width"
    },
    "options": {
      "autoDetect": "Auto-detect",
      "solcast": "Solcast",
      "volcast": "Volcast",
      "forecastSolar": "Forecast.Solar",
      "openMeteo": "Open-Meteo Solar Forecast",
      "mainViewDaily": "Daily",
      "mainViewHourly": "Hourly",
      "mainViewHistory": "History"
    },
    "sections": {
      "integrationType": "Integration Type",
      "dailyForecastEntities": "Daily Forecast Entities",
      "liveData": "Live Data",
      "actualGenerationArrays": "Actual Generation Arrays",
      "systemParameters": "System Parameters",
      "energyProvider": "Energy Provider",
      "colourThresholds": "Colour Thresholds",
      "dateTimeDisplay": "Display"
    },
    "helpers": {
      "device": "Recommended: selecting a device will auto-configure the card",
      "estimate10": "Display Estimate10 is only applicable when the integration type is Solcast",
      "integrationType": "Automatically set when a forecast device is selected above. Override here only when configuring forecast entities manually without a device.",
      "liveData": "+1HR and LEFT are auto-detected or auto-derived where possible. Set these manually to override, or to use a custom sensor.",
      "actualArrays": "Optional: configure individual array sensors to display a stacked breakdown on today's bar. Each label is a single character shown inside its segment (e.g. N, S, E).",
      "desktopTextScale": "Desktop Text Scale: only applies on wider screens (≥ 768 px). Mobile sizing is unchanged.",
      "mainView": "Choose what the card shows. Hourly shows today's hourly forecast. History compares the last 7 days of forecast and actual generation.",
      "fontSize": "Optional daily bar text size in pixels. Leave blank to use CSS/default styling.",
      "barWidth": "Optional forecast bar width in pixels. Leave blank to use CSS/default styling."
    },
    "warnings": {
      "manualEntities": "Changing device will not overwrite manually configured entities."
    },
    "arrays": {
      "entity": "Array entity",
      "label": "Label (1 char)",
      "placeholder": "E",
      "hint": "bar & popup",
      "remove": "Remove",
      "add": "Add array"
    }
  },
  "customCard": {
    "name": "Solar Forecast Card",
    "description": "Daily solar energy forecast with hourly breakdown support."
  }
}
;

var ja = {
  "day": {
    "today": "今日",
    "tomorrow": "明日",
    "sunday_short": "日",
    "monday_short": "月",
    "tuesday_short": "火",
    "wednesday_short": "水",
    "thursday_short": "木",
    "friday_short": "金",
    "saturday_short": "土"
  },
  "card": {
    "defaultTitle": "太陽光予測",
    "placeholder": "No forecast entities configured.",
    "placeholderAction": "Open the card editor to get started.",
    "twoDayNote": "2-day forecast available",
    "labels": {
      "live": "ライブ:",
      "exportRate": "売電単価:",
      "nextHour": "+1時間:",
      "left": "残り:",
      "week": "週:",
      "avg": "平均:",
      "total": "合計",
      "p10": "P10",
      "forecast": "予測",
      "generated": "発電済み"
    },
    "days": {
      "today": "Today"
    },
    "popup": {
      "close": "Close",
      "noForecastData": "No forecast data",
      "noHourlyData": "No hourly data available for this day.",
      "integrationNoHourlyData": "The selected forecast entities do not provide hourly forecast data.",
      "chart": {
        "time": "Time",
        "power": "Power",
        "kwh": "kWh",
        "forecastShort": "Fcst",
        "actualShort": "Act."
      }
    },
    "history": {
      "title": "Last 7 days",
      "forecast": "Forecast",
      "actual": "Actual",
      "accuracy": "Accuracy",
      "averageMiss": "Average miss per day",
      "bias": "Actual vs forecast per day",
      "readout": "{day}: forecast {forecast}, actual {actual} kWh ({difference})",
      "noActual": "{day}: forecast {forecast} kWh, no recorded generation",
      "noForecast": "{day}: no recorded forecast",
      "loading": "Loading forecast history…",
      "noData": "No forecast history found. Home Assistant needs to have recorded the forecast sensor for at least one full day."
    },
    "aria": {
      "dayButton": "{day} {date}"
    },
    "errors": {
      "invalidConfig": "Invalid configuration"
    },
    "units": {
      "watts": "W",
      "kilowatts": "kW",
      "kilowattHours": "kWh",
      "kilowattHoursPerDay": "kWh/day"
    }
  },
  "editor": {
    "labels": {
      "title": "Title (optional)",
      "icon": "Header icon (optional, e.g. mdi:solar-power)",
      "show_header": "Show header",
      "display_estimate10": "Display Estimate10 Forecast Values",
      "device_id": "Forecast Device",
      "integration_type": "Integration Type",
      "forecast_entity_0": "Day 1 — Today",
      "forecast_entity_1": "Day 2 — Tomorrow",
      "forecast_entity_2": "Day 3",
      "forecast_entity_3": "Day 4",
      "forecast_entity_4": "Day 5",
      "forecast_entity_5": "Day 6",
      "forecast_entity_6": "Day 7",
      "export_rate_entity": "Current Export Rate Entity",
      "live_power_entity": "Live power (optional, kW sensor)",
      "today_actual_entity": "Today's actual generation (optional)",
      "next_hour_entity": "+1HR forecast (optional, overrides auto-derived value)",
      "remaining_today_entity": "LEFT / remaining today (optional, overrides auto-derived value)",
      "main_view": "Main View",
      "inverter_max_kw": "Inverter max output (kW)",
      "solar_max_kwp": "Solar array size (kWp)",
      "low_threshold": "Low threshold (kWh)",
      "high_threshold": "High threshold (kWh)",
      "low_threshold_entity": "Low threshold sensor (optional, kWh)",
      "high_threshold_entity": "High threshold sensor (optional, kWh)",
      "show_low_threshold_zone": "Tint bar track below low threshold",
      "show_high_threshold_zone": "Tint bar track above high threshold",
      "threshold_zone_opacity": "Threshold tint opacity (lower is more transparent)",
      "desktop_text_scale": "Desktop Text Scale",
      "font_size": "Font Size",
      "bar_width": "Bar Width"
    },
    "options": {
      "autoDetect": "Auto-detect",
      "solcast": "Solcast",
      "volcast": "Volcast",
      "forecastSolar": "Forecast.Solar",
      "openMeteo": "Open-Meteo Solar Forecast",
      "mainViewDaily": "Daily",
      "mainViewHourly": "Hourly",
      "mainViewHistory": "History"
    },
    "sections": {
      "integrationType": "Integration Type",
      "dailyForecastEntities": "Daily Forecast Entities",
      "liveData": "Live Data",
      "actualGenerationArrays": "Actual Generation Arrays",
      "systemParameters": "System Parameters",
      "energyProvider": "Energy Provider",
      "colourThresholds": "Colour Thresholds",
      "dateTimeDisplay": "Display"
    },
    "helpers": {
      "device": "Recommended: selecting a device will auto-configure the card",
      "estimate10": "Display Estimate10 is only applicable when the integration type is Solcast",
      "integrationType": "Automatically set when a forecast device is selected above. Override here only when configuring forecast entities manually without a device.",
      "liveData": "+1HR and LEFT are auto-detected or auto-derived where possible. Set these manually to override, or to use a custom sensor.",
      "actualArrays": "Optional: configure individual array sensors to display a stacked breakdown on today's bar. Each label is a single character shown inside its segment (e.g. N, S, E).",
      "desktopTextScale": "Desktop Text Scale: only applies on wider screens (≥ 768 px). Mobile sizing is unchanged.",
      "mainView": "Choose what the card shows. Hourly shows today's hourly forecast. History compares the last 7 days of forecast and actual generation.",
      "fontSize": "Optional daily bar text size in pixels. Leave blank to use CSS/default styling.",
      "barWidth": "Optional forecast bar width in pixels. Leave blank to use CSS/default styling."
    },
    "warnings": {
      "manualEntities": "Changing device will not overwrite manually configured entities."
    },
    "arrays": {
      "entity": "Array entity",
      "label": "Label (1 char)",
      "placeholder": "E",
      "hint": "bar & popup",
      "remove": "Remove",
      "add": "Add array"
    }
  },
  "customCard": {
    "name": "Solar Forecast Card",
    "description": "Daily solar energy forecast with hourly breakdown support."
  }
}
;

var ka = {
  "day": {
    "today": "დღეს",
    "tomorrow": "ხვალ",
    "sunday_short": "კვი",
    "monday_short": "ორშ",
    "tuesday_short": "სამ",
    "wednesday_short": "ოთხ",
    "thursday_short": "ხუთ",
    "friday_short": "პარ",
    "saturday_short": "შაბ"
  },
  "card": {
    "defaultTitle": "მზის პროგნოზი",
    "placeholder": "No forecast entities configured.",
    "placeholderAction": "Open the card editor to get started.",
    "twoDayNote": "2-day forecast available",
    "labels": {
      "live": "LIVE:",
      "exportRate": "ექსპორტის ტარიფი:",
      "nextHour": "+1 სთ:",
      "left": "დარჩა:",
      "week": "კვირა:",
      "avg": "საშ.:",
      "total": "სულ",
      "p10": "P10",
      "forecast": "პროგნოზი",
      "generated": "გამომუშავდა"
    },
    "days": {
      "today": "Today"
    },
    "popup": {
      "close": "Close",
      "noForecastData": "No forecast data",
      "noHourlyData": "No hourly data available for this day.",
      "integrationNoHourlyData": "The selected forecast entities do not provide hourly forecast data.",
      "chart": {
        "time": "Time",
        "power": "Power",
        "kwh": "kWh",
        "forecastShort": "Fcst",
        "actualShort": "Act."
      }
    },
    "history": {
      "title": "Last 7 days",
      "forecast": "Forecast",
      "actual": "Actual",
      "accuracy": "Accuracy",
      "averageMiss": "Average miss per day",
      "bias": "Actual vs forecast per day",
      "readout": "{day}: forecast {forecast}, actual {actual} kWh ({difference})",
      "noActual": "{day}: forecast {forecast} kWh, no recorded generation",
      "noForecast": "{day}: no recorded forecast",
      "loading": "Loading forecast history…",
      "noData": "No forecast history found. Home Assistant needs to have recorded the forecast sensor for at least one full day."
    },
    "aria": {
      "dayButton": "{day} {date}"
    },
    "errors": {
      "invalidConfig": "Invalid configuration"
    },
    "units": {
      "watts": "W",
      "kilowatts": "kW",
      "kilowattHours": "kWh",
      "kilowattHoursPerDay": "kWh/day"
    }
  },
  "editor": {
    "labels": {
      "title": "Title (optional)",
      "icon": "Header icon (optional, e.g. mdi:solar-power)",
      "show_header": "Show header",
      "display_estimate10": "Display Estimate10 Forecast Values",
      "device_id": "Forecast Device",
      "integration_type": "Integration Type",
      "forecast_entity_0": "Day 1 — Today",
      "forecast_entity_1": "Day 2 — Tomorrow",
      "forecast_entity_2": "Day 3",
      "forecast_entity_3": "Day 4",
      "forecast_entity_4": "Day 5",
      "forecast_entity_5": "Day 6",
      "forecast_entity_6": "Day 7",
      "export_rate_entity": "Current Export Rate Entity",
      "live_power_entity": "Live power (optional, kW sensor)",
      "today_actual_entity": "Today's actual generation (optional)",
      "next_hour_entity": "+1HR forecast (optional, overrides auto-derived value)",
      "remaining_today_entity": "LEFT / remaining today (optional, overrides auto-derived value)",
      "main_view": "Main View",
      "inverter_max_kw": "Inverter max output (kW)",
      "solar_max_kwp": "Solar array size (kWp)",
      "low_threshold": "Low threshold (kWh)",
      "high_threshold": "High threshold (kWh)",
      "low_threshold_entity": "Low threshold sensor (optional, kWh)",
      "high_threshold_entity": "High threshold sensor (optional, kWh)",
      "show_low_threshold_zone": "Tint bar track below low threshold",
      "show_high_threshold_zone": "Tint bar track above high threshold",
      "threshold_zone_opacity": "Threshold tint opacity (lower is more transparent)",
      "desktop_text_scale": "Desktop Text Scale",
      "font_size": "Font Size",
      "bar_width": "Bar Width"
    },
    "options": {
      "autoDetect": "Auto-detect",
      "solcast": "Solcast",
      "volcast": "Volcast",
      "forecastSolar": "Forecast.Solar",
      "openMeteo": "Open-Meteo Solar Forecast",
      "mainViewDaily": "Daily",
      "mainViewHourly": "Hourly",
      "mainViewHistory": "History"
    },
    "sections": {
      "integrationType": "Integration Type",
      "dailyForecastEntities": "Daily Forecast Entities",
      "liveData": "Live Data",
      "actualGenerationArrays": "Actual Generation Arrays",
      "systemParameters": "System Parameters",
      "energyProvider": "Energy Provider",
      "colourThresholds": "Colour Thresholds",
      "dateTimeDisplay": "Display"
    },
    "helpers": {
      "device": "Recommended: selecting a device will auto-configure the card",
      "estimate10": "Display Estimate10 is only applicable when the integration type is Solcast",
      "integrationType": "Automatically set when a forecast device is selected above. Override here only when configuring forecast entities manually without a device.",
      "liveData": "+1HR and LEFT are auto-detected or auto-derived where possible. Set these manually to override, or to use a custom sensor.",
      "actualArrays": "Optional: configure individual array sensors to display a stacked breakdown on today's bar. Each label is a single character shown inside its segment (e.g. N, S, E).",
      "desktopTextScale": "Desktop Text Scale: only applies on wider screens (≥ 768 px). Mobile sizing is unchanged.",
      "mainView": "Choose what the card shows. Hourly shows today's hourly forecast. History compares the last 7 days of forecast and actual generation.",
      "fontSize": "Optional daily bar text size in pixels. Leave blank to use CSS/default styling.",
      "barWidth": "Optional forecast bar width in pixels. Leave blank to use CSS/default styling."
    },
    "warnings": {
      "manualEntities": "Changing device will not overwrite manually configured entities."
    },
    "arrays": {
      "entity": "Array entity",
      "label": "Label (1 char)",
      "placeholder": "E",
      "hint": "bar & popup",
      "remove": "Remove",
      "add": "Add array"
    }
  },
  "customCard": {
    "name": "Solar Forecast Card",
    "description": "Daily solar energy forecast with hourly breakdown support."
  }
}
;

var ko = {
  "day": {
    "today": "오늘",
    "tomorrow": "내일",
    "sunday_short": "일",
    "monday_short": "월",
    "tuesday_short": "화",
    "wednesday_short": "수",
    "thursday_short": "목",
    "friday_short": "금",
    "saturday_short": "토"
  },
  "card": {
    "defaultTitle": "태양광 예보",
    "placeholder": "No forecast entities configured.",
    "placeholderAction": "Open the card editor to get started.",
    "twoDayNote": "2-day forecast available",
    "labels": {
      "live": "실시간:",
      "exportRate": "수출 요금:",
      "nextHour": "+1시간:",
      "left": "남음:",
      "week": "주:",
      "avg": "평균:",
      "total": "합계",
      "p10": "P10",
      "forecast": "예보",
      "generated": "발전됨"
    },
    "days": {
      "today": "Today"
    },
    "popup": {
      "close": "Close",
      "noForecastData": "No forecast data",
      "noHourlyData": "No hourly data available for this day.",
      "integrationNoHourlyData": "The selected forecast entities do not provide hourly forecast data.",
      "chart": {
        "time": "Time",
        "power": "Power",
        "kwh": "kWh",
        "forecastShort": "Fcst",
        "actualShort": "Act."
      }
    },
    "history": {
      "title": "Last 7 days",
      "forecast": "Forecast",
      "actual": "Actual",
      "accuracy": "Accuracy",
      "averageMiss": "Average miss per day",
      "bias": "Actual vs forecast per day",
      "readout": "{day}: forecast {forecast}, actual {actual} kWh ({difference})",
      "noActual": "{day}: forecast {forecast} kWh, no recorded generation",
      "noForecast": "{day}: no recorded forecast",
      "loading": "Loading forecast history…",
      "noData": "No forecast history found. Home Assistant needs to have recorded the forecast sensor for at least one full day."
    },
    "aria": {
      "dayButton": "{day} {date}"
    },
    "errors": {
      "invalidConfig": "Invalid configuration"
    },
    "units": {
      "watts": "W",
      "kilowatts": "kW",
      "kilowattHours": "kWh",
      "kilowattHoursPerDay": "kWh/day"
    }
  },
  "editor": {
    "labels": {
      "title": "Title (optional)",
      "icon": "Header icon (optional, e.g. mdi:solar-power)",
      "show_header": "Show header",
      "display_estimate10": "Display Estimate10 Forecast Values",
      "device_id": "Forecast Device",
      "integration_type": "Integration Type",
      "forecast_entity_0": "Day 1 — Today",
      "forecast_entity_1": "Day 2 — Tomorrow",
      "forecast_entity_2": "Day 3",
      "forecast_entity_3": "Day 4",
      "forecast_entity_4": "Day 5",
      "forecast_entity_5": "Day 6",
      "forecast_entity_6": "Day 7",
      "export_rate_entity": "Current Export Rate Entity",
      "live_power_entity": "Live power (optional, kW sensor)",
      "today_actual_entity": "Today's actual generation (optional)",
      "next_hour_entity": "+1HR forecast (optional, overrides auto-derived value)",
      "remaining_today_entity": "LEFT / remaining today (optional, overrides auto-derived value)",
      "main_view": "Main View",
      "inverter_max_kw": "Inverter max output (kW)",
      "solar_max_kwp": "Solar array size (kWp)",
      "low_threshold": "Low threshold (kWh)",
      "high_threshold": "High threshold (kWh)",
      "low_threshold_entity": "Low threshold sensor (optional, kWh)",
      "high_threshold_entity": "High threshold sensor (optional, kWh)",
      "show_low_threshold_zone": "Tint bar track below low threshold",
      "show_high_threshold_zone": "Tint bar track above high threshold",
      "threshold_zone_opacity": "Threshold tint opacity (lower is more transparent)",
      "desktop_text_scale": "Desktop Text Scale",
      "font_size": "Font Size",
      "bar_width": "Bar Width"
    },
    "options": {
      "autoDetect": "Auto-detect",
      "solcast": "Solcast",
      "volcast": "Volcast",
      "forecastSolar": "Forecast.Solar",
      "openMeteo": "Open-Meteo Solar Forecast",
      "mainViewDaily": "Daily",
      "mainViewHourly": "Hourly",
      "mainViewHistory": "History"
    },
    "sections": {
      "integrationType": "Integration Type",
      "dailyForecastEntities": "Daily Forecast Entities",
      "liveData": "Live Data",
      "actualGenerationArrays": "Actual Generation Arrays",
      "systemParameters": "System Parameters",
      "energyProvider": "Energy Provider",
      "colourThresholds": "Colour Thresholds",
      "dateTimeDisplay": "Display"
    },
    "helpers": {
      "device": "Recommended: selecting a device will auto-configure the card",
      "estimate10": "Display Estimate10 is only applicable when the integration type is Solcast",
      "integrationType": "Automatically set when a forecast device is selected above. Override here only when configuring forecast entities manually without a device.",
      "liveData": "+1HR and LEFT are auto-detected or auto-derived where possible. Set these manually to override, or to use a custom sensor.",
      "actualArrays": "Optional: configure individual array sensors to display a stacked breakdown on today's bar. Each label is a single character shown inside its segment (e.g. N, S, E).",
      "desktopTextScale": "Desktop Text Scale: only applies on wider screens (≥ 768 px). Mobile sizing is unchanged.",
      "mainView": "Choose what the card shows. Hourly shows today's hourly forecast. History compares the last 7 days of forecast and actual generation.",
      "fontSize": "Optional daily bar text size in pixels. Leave blank to use CSS/default styling.",
      "barWidth": "Optional forecast bar width in pixels. Leave blank to use CSS/default styling."
    },
    "warnings": {
      "manualEntities": "Changing device will not overwrite manually configured entities."
    },
    "arrays": {
      "entity": "Array entity",
      "label": "Label (1 char)",
      "placeholder": "E",
      "hint": "bar & popup",
      "remove": "Remove",
      "add": "Add array"
    }
  },
  "customCard": {
    "name": "Solar Forecast Card",
    "description": "Daily solar energy forecast with hourly breakdown support."
  }
}
;

var lb = {
  "day": {
    "today": "Haut",
    "tomorrow": "Muer",
    "sunday_short": "Son",
    "monday_short": "Méi",
    "tuesday_short": "Dën",
    "wednesday_short": "Mët",
    "thursday_short": "Don",
    "friday_short": "Fre",
    "saturday_short": "Sam"
  },
  "card": {
    "defaultTitle": "Solarprognos",
    "placeholder": "No forecast entities configured.",
    "placeholderAction": "Open the card editor to get started.",
    "twoDayNote": "2-day forecast available",
    "labels": {
      "live": "LIVE:",
      "exportRate": "EXPORTTARIF:",
      "nextHour": "+1 ST:",
      "left": "IWWREG:",
      "week": "WOCH:",
      "avg": "DUERCH.:",
      "total": "Total",
      "p10": "P10",
      "forecast": "Prognos",
      "generated": "produzéiert"
    },
    "days": {
      "today": "Today"
    },
    "popup": {
      "close": "Close",
      "noForecastData": "No forecast data",
      "noHourlyData": "No hourly data available for this day.",
      "integrationNoHourlyData": "The selected forecast entities do not provide hourly forecast data.",
      "chart": {
        "time": "Time",
        "power": "Power",
        "kwh": "kWh",
        "forecastShort": "Fcst",
        "actualShort": "Act."
      }
    },
    "history": {
      "title": "Last 7 days",
      "forecast": "Forecast",
      "actual": "Actual",
      "accuracy": "Accuracy",
      "averageMiss": "Average miss per day",
      "bias": "Actual vs forecast per day",
      "readout": "{day}: forecast {forecast}, actual {actual} kWh ({difference})",
      "noActual": "{day}: forecast {forecast} kWh, no recorded generation",
      "noForecast": "{day}: no recorded forecast",
      "loading": "Loading forecast history…",
      "noData": "No forecast history found. Home Assistant needs to have recorded the forecast sensor for at least one full day."
    },
    "aria": {
      "dayButton": "{day} {date}"
    },
    "errors": {
      "invalidConfig": "Invalid configuration"
    },
    "units": {
      "watts": "W",
      "kilowatts": "kW",
      "kilowattHours": "kWh",
      "kilowattHoursPerDay": "kWh/day"
    }
  },
  "editor": {
    "labels": {
      "title": "Title (optional)",
      "icon": "Header icon (optional, e.g. mdi:solar-power)",
      "show_header": "Show header",
      "display_estimate10": "Display Estimate10 Forecast Values",
      "device_id": "Forecast Device",
      "integration_type": "Integration Type",
      "forecast_entity_0": "Day 1 — Today",
      "forecast_entity_1": "Day 2 — Tomorrow",
      "forecast_entity_2": "Day 3",
      "forecast_entity_3": "Day 4",
      "forecast_entity_4": "Day 5",
      "forecast_entity_5": "Day 6",
      "forecast_entity_6": "Day 7",
      "export_rate_entity": "Current Export Rate Entity",
      "live_power_entity": "Live power (optional, kW sensor)",
      "today_actual_entity": "Today's actual generation (optional)",
      "next_hour_entity": "+1HR forecast (optional, overrides auto-derived value)",
      "remaining_today_entity": "LEFT / remaining today (optional, overrides auto-derived value)",
      "main_view": "Main View",
      "inverter_max_kw": "Inverter max output (kW)",
      "solar_max_kwp": "Solar array size (kWp)",
      "low_threshold": "Low threshold (kWh)",
      "high_threshold": "High threshold (kWh)",
      "low_threshold_entity": "Low threshold sensor (optional, kWh)",
      "high_threshold_entity": "High threshold sensor (optional, kWh)",
      "show_low_threshold_zone": "Tint bar track below low threshold",
      "show_high_threshold_zone": "Tint bar track above high threshold",
      "threshold_zone_opacity": "Threshold tint opacity (lower is more transparent)",
      "desktop_text_scale": "Desktop Text Scale",
      "font_size": "Font Size",
      "bar_width": "Bar Width"
    },
    "options": {
      "autoDetect": "Auto-detect",
      "solcast": "Solcast",
      "volcast": "Volcast",
      "forecastSolar": "Forecast.Solar",
      "openMeteo": "Open-Meteo Solar Forecast",
      "mainViewDaily": "Daily",
      "mainViewHourly": "Hourly",
      "mainViewHistory": "History"
    },
    "sections": {
      "integrationType": "Integration Type",
      "dailyForecastEntities": "Daily Forecast Entities",
      "liveData": "Live Data",
      "actualGenerationArrays": "Actual Generation Arrays",
      "systemParameters": "System Parameters",
      "energyProvider": "Energy Provider",
      "colourThresholds": "Colour Thresholds",
      "dateTimeDisplay": "Display"
    },
    "helpers": {
      "device": "Recommended: selecting a device will auto-configure the card",
      "estimate10": "Display Estimate10 is only applicable when the integration type is Solcast",
      "integrationType": "Automatically set when a forecast device is selected above. Override here only when configuring forecast entities manually without a device.",
      "liveData": "+1HR and LEFT are auto-detected or auto-derived where possible. Set these manually to override, or to use a custom sensor.",
      "actualArrays": "Optional: configure individual array sensors to display a stacked breakdown on today's bar. Each label is a single character shown inside its segment (e.g. N, S, E).",
      "desktopTextScale": "Desktop Text Scale: only applies on wider screens (≥ 768 px). Mobile sizing is unchanged.",
      "mainView": "Choose what the card shows. Hourly shows today's hourly forecast. History compares the last 7 days of forecast and actual generation.",
      "fontSize": "Optional daily bar text size in pixels. Leave blank to use CSS/default styling.",
      "barWidth": "Optional forecast bar width in pixels. Leave blank to use CSS/default styling."
    },
    "warnings": {
      "manualEntities": "Changing device will not overwrite manually configured entities."
    },
    "arrays": {
      "entity": "Array entity",
      "label": "Label (1 char)",
      "placeholder": "E",
      "hint": "bar & popup",
      "remove": "Remove",
      "add": "Add array"
    }
  },
  "customCard": {
    "name": "Solar Forecast Card",
    "description": "Daily solar energy forecast with hourly breakdown support."
  }
}
;

var lt = {
  "day": {
    "today": "Šiandien",
    "tomorrow": "Rytoj",
    "sunday_short": "sk",
    "monday_short": "pr",
    "tuesday_short": "an",
    "wednesday_short": "tr",
    "thursday_short": "kt",
    "friday_short": "pn",
    "saturday_short": "št"
  },
  "card": {
    "defaultTitle": "Saulės prognozė",
    "placeholder": "No forecast entities configured.",
    "placeholderAction": "Open the card editor to get started.",
    "twoDayNote": "2-day forecast available",
    "labels": {
      "live": "GYVAI:",
      "exportRate": "EKSPORTO TARIFAS:",
      "nextHour": "+1 VAL:",
      "left": "LIKO:",
      "week": "SAVAITĖ:",
      "avg": "VID.:",
      "total": "Iš viso",
      "p10": "P10",
      "forecast": "prognozė",
      "generated": "pagaminta"
    },
    "days": {
      "today": "Today"
    },
    "popup": {
      "close": "Close",
      "noForecastData": "No forecast data",
      "noHourlyData": "No hourly data available for this day.",
      "integrationNoHourlyData": "The selected forecast entities do not provide hourly forecast data.",
      "chart": {
        "time": "Time",
        "power": "Power",
        "kwh": "kWh",
        "forecastShort": "Fcst",
        "actualShort": "Act."
      }
    },
    "history": {
      "title": "Last 7 days",
      "forecast": "Forecast",
      "actual": "Actual",
      "accuracy": "Accuracy",
      "averageMiss": "Average miss per day",
      "bias": "Actual vs forecast per day",
      "readout": "{day}: forecast {forecast}, actual {actual} kWh ({difference})",
      "noActual": "{day}: forecast {forecast} kWh, no recorded generation",
      "noForecast": "{day}: no recorded forecast",
      "loading": "Loading forecast history…",
      "noData": "No forecast history found. Home Assistant needs to have recorded the forecast sensor for at least one full day."
    },
    "aria": {
      "dayButton": "{day} {date}"
    },
    "errors": {
      "invalidConfig": "Invalid configuration"
    },
    "units": {
      "watts": "W",
      "kilowatts": "kW",
      "kilowattHours": "kWh",
      "kilowattHoursPerDay": "kWh/day"
    }
  },
  "editor": {
    "labels": {
      "title": "Title (optional)",
      "icon": "Header icon (optional, e.g. mdi:solar-power)",
      "show_header": "Show header",
      "display_estimate10": "Display Estimate10 Forecast Values",
      "device_id": "Forecast Device",
      "integration_type": "Integration Type",
      "forecast_entity_0": "Day 1 — Today",
      "forecast_entity_1": "Day 2 — Tomorrow",
      "forecast_entity_2": "Day 3",
      "forecast_entity_3": "Day 4",
      "forecast_entity_4": "Day 5",
      "forecast_entity_5": "Day 6",
      "forecast_entity_6": "Day 7",
      "export_rate_entity": "Current Export Rate Entity",
      "live_power_entity": "Live power (optional, kW sensor)",
      "today_actual_entity": "Today's actual generation (optional)",
      "next_hour_entity": "+1HR forecast (optional, overrides auto-derived value)",
      "remaining_today_entity": "LEFT / remaining today (optional, overrides auto-derived value)",
      "main_view": "Main View",
      "inverter_max_kw": "Inverter max output (kW)",
      "solar_max_kwp": "Solar array size (kWp)",
      "low_threshold": "Low threshold (kWh)",
      "high_threshold": "High threshold (kWh)",
      "low_threshold_entity": "Low threshold sensor (optional, kWh)",
      "high_threshold_entity": "High threshold sensor (optional, kWh)",
      "show_low_threshold_zone": "Tint bar track below low threshold",
      "show_high_threshold_zone": "Tint bar track above high threshold",
      "threshold_zone_opacity": "Threshold tint opacity (lower is more transparent)",
      "desktop_text_scale": "Desktop Text Scale",
      "font_size": "Font Size",
      "bar_width": "Bar Width"
    },
    "options": {
      "autoDetect": "Auto-detect",
      "solcast": "Solcast",
      "volcast": "Volcast",
      "forecastSolar": "Forecast.Solar",
      "openMeteo": "Open-Meteo Solar Forecast",
      "mainViewDaily": "Daily",
      "mainViewHourly": "Hourly",
      "mainViewHistory": "History"
    },
    "sections": {
      "integrationType": "Integration Type",
      "dailyForecastEntities": "Daily Forecast Entities",
      "liveData": "Live Data",
      "actualGenerationArrays": "Actual Generation Arrays",
      "systemParameters": "System Parameters",
      "energyProvider": "Energy Provider",
      "colourThresholds": "Colour Thresholds",
      "dateTimeDisplay": "Display"
    },
    "helpers": {
      "device": "Recommended: selecting a device will auto-configure the card",
      "estimate10": "Display Estimate10 is only applicable when the integration type is Solcast",
      "integrationType": "Automatically set when a forecast device is selected above. Override here only when configuring forecast entities manually without a device.",
      "liveData": "+1HR and LEFT are auto-detected or auto-derived where possible. Set these manually to override, or to use a custom sensor.",
      "actualArrays": "Optional: configure individual array sensors to display a stacked breakdown on today's bar. Each label is a single character shown inside its segment (e.g. N, S, E).",
      "desktopTextScale": "Desktop Text Scale: only applies on wider screens (≥ 768 px). Mobile sizing is unchanged.",
      "mainView": "Choose what the card shows. Hourly shows today's hourly forecast. History compares the last 7 days of forecast and actual generation.",
      "fontSize": "Optional daily bar text size in pixels. Leave blank to use CSS/default styling.",
      "barWidth": "Optional forecast bar width in pixels. Leave blank to use CSS/default styling."
    },
    "warnings": {
      "manualEntities": "Changing device will not overwrite manually configured entities."
    },
    "arrays": {
      "entity": "Array entity",
      "label": "Label (1 char)",
      "placeholder": "E",
      "hint": "bar & popup",
      "remove": "Remove",
      "add": "Add array"
    }
  },
  "customCard": {
    "name": "Solar Forecast Card",
    "description": "Daily solar energy forecast with hourly breakdown support."
  }
}
;

var lv = {
  "day": {
    "today": "Šodien",
    "tomorrow": "Rīt",
    "sunday_short": "Svētd",
    "monday_short": "Pirmd",
    "tuesday_short": "Otrd",
    "wednesday_short": "Trešd",
    "thursday_short": "Ceturtd",
    "friday_short": "Piektd",
    "saturday_short": "Sestd"
  },
  "card": {
    "defaultTitle": "Saules prognoze",
    "placeholder": "No forecast entities configured.",
    "placeholderAction": "Open the card editor to get started.",
    "twoDayNote": "2-day forecast available",
    "labels": {
      "live": "TIEŠRAIDĒ:",
      "exportRate": "EKSPORTA TARIFS:",
      "nextHour": "+1 H:",
      "left": "ATLICIS:",
      "week": "NEDĒĻA:",
      "avg": "VID.:",
      "total": "Kopā",
      "p10": "P10",
      "forecast": "prognoze",
      "generated": "saražots"
    },
    "days": {
      "today": "Today"
    },
    "popup": {
      "close": "Close",
      "noForecastData": "No forecast data",
      "noHourlyData": "No hourly data available for this day.",
      "integrationNoHourlyData": "The selected forecast entities do not provide hourly forecast data.",
      "chart": {
        "time": "Time",
        "power": "Power",
        "kwh": "kWh",
        "forecastShort": "Fcst",
        "actualShort": "Act."
      }
    },
    "history": {
      "title": "Last 7 days",
      "forecast": "Forecast",
      "actual": "Actual",
      "accuracy": "Accuracy",
      "averageMiss": "Average miss per day",
      "bias": "Actual vs forecast per day",
      "readout": "{day}: forecast {forecast}, actual {actual} kWh ({difference})",
      "noActual": "{day}: forecast {forecast} kWh, no recorded generation",
      "noForecast": "{day}: no recorded forecast",
      "loading": "Loading forecast history…",
      "noData": "No forecast history found. Home Assistant needs to have recorded the forecast sensor for at least one full day."
    },
    "aria": {
      "dayButton": "{day} {date}"
    },
    "errors": {
      "invalidConfig": "Invalid configuration"
    },
    "units": {
      "watts": "W",
      "kilowatts": "kW",
      "kilowattHours": "kWh",
      "kilowattHoursPerDay": "kWh/day"
    }
  },
  "editor": {
    "labels": {
      "title": "Title (optional)",
      "icon": "Header icon (optional, e.g. mdi:solar-power)",
      "show_header": "Show header",
      "display_estimate10": "Display Estimate10 Forecast Values",
      "device_id": "Forecast Device",
      "integration_type": "Integration Type",
      "forecast_entity_0": "Day 1 — Today",
      "forecast_entity_1": "Day 2 — Tomorrow",
      "forecast_entity_2": "Day 3",
      "forecast_entity_3": "Day 4",
      "forecast_entity_4": "Day 5",
      "forecast_entity_5": "Day 6",
      "forecast_entity_6": "Day 7",
      "export_rate_entity": "Current Export Rate Entity",
      "live_power_entity": "Live power (optional, kW sensor)",
      "today_actual_entity": "Today's actual generation (optional)",
      "next_hour_entity": "+1HR forecast (optional, overrides auto-derived value)",
      "remaining_today_entity": "LEFT / remaining today (optional, overrides auto-derived value)",
      "main_view": "Main View",
      "inverter_max_kw": "Inverter max output (kW)",
      "solar_max_kwp": "Solar array size (kWp)",
      "low_threshold": "Low threshold (kWh)",
      "high_threshold": "High threshold (kWh)",
      "low_threshold_entity": "Low threshold sensor (optional, kWh)",
      "high_threshold_entity": "High threshold sensor (optional, kWh)",
      "show_low_threshold_zone": "Tint bar track below low threshold",
      "show_high_threshold_zone": "Tint bar track above high threshold",
      "threshold_zone_opacity": "Threshold tint opacity (lower is more transparent)",
      "desktop_text_scale": "Desktop Text Scale",
      "font_size": "Font Size",
      "bar_width": "Bar Width"
    },
    "options": {
      "autoDetect": "Auto-detect",
      "solcast": "Solcast",
      "volcast": "Volcast",
      "forecastSolar": "Forecast.Solar",
      "openMeteo": "Open-Meteo Solar Forecast",
      "mainViewDaily": "Daily",
      "mainViewHourly": "Hourly",
      "mainViewHistory": "History"
    },
    "sections": {
      "integrationType": "Integration Type",
      "dailyForecastEntities": "Daily Forecast Entities",
      "liveData": "Live Data",
      "actualGenerationArrays": "Actual Generation Arrays",
      "systemParameters": "System Parameters",
      "energyProvider": "Energy Provider",
      "colourThresholds": "Colour Thresholds",
      "dateTimeDisplay": "Display"
    },
    "helpers": {
      "device": "Recommended: selecting a device will auto-configure the card",
      "estimate10": "Display Estimate10 is only applicable when the integration type is Solcast",
      "integrationType": "Automatically set when a forecast device is selected above. Override here only when configuring forecast entities manually without a device.",
      "liveData": "+1HR and LEFT are auto-detected or auto-derived where possible. Set these manually to override, or to use a custom sensor.",
      "actualArrays": "Optional: configure individual array sensors to display a stacked breakdown on today's bar. Each label is a single character shown inside its segment (e.g. N, S, E).",
      "desktopTextScale": "Desktop Text Scale: only applies on wider screens (≥ 768 px). Mobile sizing is unchanged.",
      "mainView": "Choose what the card shows. Hourly shows today's hourly forecast. History compares the last 7 days of forecast and actual generation.",
      "fontSize": "Optional daily bar text size in pixels. Leave blank to use CSS/default styling.",
      "barWidth": "Optional forecast bar width in pixels. Leave blank to use CSS/default styling."
    },
    "warnings": {
      "manualEntities": "Changing device will not overwrite manually configured entities."
    },
    "arrays": {
      "entity": "Array entity",
      "label": "Label (1 char)",
      "placeholder": "E",
      "hint": "bar & popup",
      "remove": "Remove",
      "add": "Add array"
    }
  },
  "customCard": {
    "name": "Solar Forecast Card",
    "description": "Daily solar energy forecast with hourly breakdown support."
  }
}
;

var mk = {
  "day": {
    "today": "Денес",
    "tomorrow": "Утре",
    "sunday_short": "нед",
    "monday_short": "пон",
    "tuesday_short": "вто",
    "wednesday_short": "сре",
    "thursday_short": "чет",
    "friday_short": "пет",
    "saturday_short": "саб"
  },
  "card": {
    "defaultTitle": "Соларна прогноза",
    "placeholder": "No forecast entities configured.",
    "placeholderAction": "Open the card editor to get started.",
    "twoDayNote": "2-day forecast available",
    "labels": {
      "live": "ВО ЖИВО:",
      "exportRate": "ИЗВОЗНА ТАРИФА:",
      "nextHour": "+1 Ч:",
      "left": "ОСТАНАТО:",
      "week": "НЕДЕЛА:",
      "avg": "ПРОСЕК:",
      "total": "Вкупно",
      "p10": "P10",
      "forecast": "прогноза",
      "generated": "произведено"
    },
    "days": {
      "today": "Today"
    },
    "popup": {
      "close": "Close",
      "noForecastData": "No forecast data",
      "noHourlyData": "No hourly data available for this day.",
      "integrationNoHourlyData": "The selected forecast entities do not provide hourly forecast data.",
      "chart": {
        "time": "Time",
        "power": "Power",
        "kwh": "kWh",
        "forecastShort": "Fcst",
        "actualShort": "Act."
      }
    },
    "history": {
      "title": "Last 7 days",
      "forecast": "Forecast",
      "actual": "Actual",
      "accuracy": "Accuracy",
      "averageMiss": "Average miss per day",
      "bias": "Actual vs forecast per day",
      "readout": "{day}: forecast {forecast}, actual {actual} kWh ({difference})",
      "noActual": "{day}: forecast {forecast} kWh, no recorded generation",
      "noForecast": "{day}: no recorded forecast",
      "loading": "Loading forecast history…",
      "noData": "No forecast history found. Home Assistant needs to have recorded the forecast sensor for at least one full day."
    },
    "aria": {
      "dayButton": "{day} {date}"
    },
    "errors": {
      "invalidConfig": "Invalid configuration"
    },
    "units": {
      "watts": "W",
      "kilowatts": "kW",
      "kilowattHours": "kWh",
      "kilowattHoursPerDay": "kWh/day"
    }
  },
  "editor": {
    "labels": {
      "title": "Title (optional)",
      "icon": "Header icon (optional, e.g. mdi:solar-power)",
      "show_header": "Show header",
      "display_estimate10": "Display Estimate10 Forecast Values",
      "device_id": "Forecast Device",
      "integration_type": "Integration Type",
      "forecast_entity_0": "Day 1 — Today",
      "forecast_entity_1": "Day 2 — Tomorrow",
      "forecast_entity_2": "Day 3",
      "forecast_entity_3": "Day 4",
      "forecast_entity_4": "Day 5",
      "forecast_entity_5": "Day 6",
      "forecast_entity_6": "Day 7",
      "export_rate_entity": "Current Export Rate Entity",
      "live_power_entity": "Live power (optional, kW sensor)",
      "today_actual_entity": "Today's actual generation (optional)",
      "next_hour_entity": "+1HR forecast (optional, overrides auto-derived value)",
      "remaining_today_entity": "LEFT / remaining today (optional, overrides auto-derived value)",
      "main_view": "Main View",
      "inverter_max_kw": "Inverter max output (kW)",
      "solar_max_kwp": "Solar array size (kWp)",
      "low_threshold": "Low threshold (kWh)",
      "high_threshold": "High threshold (kWh)",
      "low_threshold_entity": "Low threshold sensor (optional, kWh)",
      "high_threshold_entity": "High threshold sensor (optional, kWh)",
      "show_low_threshold_zone": "Tint bar track below low threshold",
      "show_high_threshold_zone": "Tint bar track above high threshold",
      "threshold_zone_opacity": "Threshold tint opacity (lower is more transparent)",
      "desktop_text_scale": "Desktop Text Scale",
      "font_size": "Font Size",
      "bar_width": "Bar Width"
    },
    "options": {
      "autoDetect": "Auto-detect",
      "solcast": "Solcast",
      "volcast": "Volcast",
      "forecastSolar": "Forecast.Solar",
      "openMeteo": "Open-Meteo Solar Forecast",
      "mainViewDaily": "Daily",
      "mainViewHourly": "Hourly",
      "mainViewHistory": "History"
    },
    "sections": {
      "integrationType": "Integration Type",
      "dailyForecastEntities": "Daily Forecast Entities",
      "liveData": "Live Data",
      "actualGenerationArrays": "Actual Generation Arrays",
      "systemParameters": "System Parameters",
      "energyProvider": "Energy Provider",
      "colourThresholds": "Colour Thresholds",
      "dateTimeDisplay": "Display"
    },
    "helpers": {
      "device": "Recommended: selecting a device will auto-configure the card",
      "estimate10": "Display Estimate10 is only applicable when the integration type is Solcast",
      "integrationType": "Automatically set when a forecast device is selected above. Override here only when configuring forecast entities manually without a device.",
      "liveData": "+1HR and LEFT are auto-detected or auto-derived where possible. Set these manually to override, or to use a custom sensor.",
      "actualArrays": "Optional: configure individual array sensors to display a stacked breakdown on today's bar. Each label is a single character shown inside its segment (e.g. N, S, E).",
      "desktopTextScale": "Desktop Text Scale: only applies on wider screens (≥ 768 px). Mobile sizing is unchanged.",
      "mainView": "Choose what the card shows. Hourly shows today's hourly forecast. History compares the last 7 days of forecast and actual generation.",
      "fontSize": "Optional daily bar text size in pixels. Leave blank to use CSS/default styling.",
      "barWidth": "Optional forecast bar width in pixels. Leave blank to use CSS/default styling."
    },
    "warnings": {
      "manualEntities": "Changing device will not overwrite manually configured entities."
    },
    "arrays": {
      "entity": "Array entity",
      "label": "Label (1 char)",
      "placeholder": "E",
      "hint": "bar & popup",
      "remove": "Remove",
      "add": "Add array"
    }
  },
  "customCard": {
    "name": "Solar Forecast Card",
    "description": "Daily solar energy forecast with hourly breakdown support."
  }
}
;

var ml = {
  "day": {
    "today": "ഇന്ന്",
    "tomorrow": "നാളെ",
    "sunday_short": "ഞായർ",
    "monday_short": "തിങ്കൾ",
    "tuesday_short": "ചൊവ്വ",
    "wednesday_short": "ബുധൻ",
    "thursday_short": "വ്യാഴം",
    "friday_short": "വെള്ളി",
    "saturday_short": "ശനി"
  },
  "card": {
    "defaultTitle": "സൗര പ്രവചനം",
    "placeholder": "No forecast entities configured.",
    "placeholderAction": "Open the card editor to get started.",
    "twoDayNote": "2-day forecast available",
    "labels": {
      "live": "ലൈവ്:",
      "exportRate": "കയറ്റുമതി നിരക്ക്:",
      "nextHour": "+1 മ:",
      "left": "ബാക്കി:",
      "week": "ആഴ്ച:",
      "avg": "ശരാശരി:",
      "total": "ആകെ",
      "p10": "P10",
      "forecast": "പ്രവചനം",
      "generated": "ഉൽപ്പാദിപ്പിച്ചത്"
    },
    "days": {
      "today": "Today"
    },
    "popup": {
      "close": "Close",
      "noForecastData": "No forecast data",
      "noHourlyData": "No hourly data available for this day.",
      "integrationNoHourlyData": "The selected forecast entities do not provide hourly forecast data.",
      "chart": {
        "time": "Time",
        "power": "Power",
        "kwh": "kWh",
        "forecastShort": "Fcst",
        "actualShort": "Act."
      }
    },
    "history": {
      "title": "Last 7 days",
      "forecast": "Forecast",
      "actual": "Actual",
      "accuracy": "Accuracy",
      "averageMiss": "Average miss per day",
      "bias": "Actual vs forecast per day",
      "readout": "{day}: forecast {forecast}, actual {actual} kWh ({difference})",
      "noActual": "{day}: forecast {forecast} kWh, no recorded generation",
      "noForecast": "{day}: no recorded forecast",
      "loading": "Loading forecast history…",
      "noData": "No forecast history found. Home Assistant needs to have recorded the forecast sensor for at least one full day."
    },
    "aria": {
      "dayButton": "{day} {date}"
    },
    "errors": {
      "invalidConfig": "Invalid configuration"
    },
    "units": {
      "watts": "W",
      "kilowatts": "kW",
      "kilowattHours": "kWh",
      "kilowattHoursPerDay": "kWh/day"
    }
  },
  "editor": {
    "labels": {
      "title": "Title (optional)",
      "icon": "Header icon (optional, e.g. mdi:solar-power)",
      "show_header": "Show header",
      "display_estimate10": "Display Estimate10 Forecast Values",
      "device_id": "Forecast Device",
      "integration_type": "Integration Type",
      "forecast_entity_0": "Day 1 — Today",
      "forecast_entity_1": "Day 2 — Tomorrow",
      "forecast_entity_2": "Day 3",
      "forecast_entity_3": "Day 4",
      "forecast_entity_4": "Day 5",
      "forecast_entity_5": "Day 6",
      "forecast_entity_6": "Day 7",
      "export_rate_entity": "Current Export Rate Entity",
      "live_power_entity": "Live power (optional, kW sensor)",
      "today_actual_entity": "Today's actual generation (optional)",
      "next_hour_entity": "+1HR forecast (optional, overrides auto-derived value)",
      "remaining_today_entity": "LEFT / remaining today (optional, overrides auto-derived value)",
      "main_view": "Main View",
      "inverter_max_kw": "Inverter max output (kW)",
      "solar_max_kwp": "Solar array size (kWp)",
      "low_threshold": "Low threshold (kWh)",
      "high_threshold": "High threshold (kWh)",
      "low_threshold_entity": "Low threshold sensor (optional, kWh)",
      "high_threshold_entity": "High threshold sensor (optional, kWh)",
      "show_low_threshold_zone": "Tint bar track below low threshold",
      "show_high_threshold_zone": "Tint bar track above high threshold",
      "threshold_zone_opacity": "Threshold tint opacity (lower is more transparent)",
      "desktop_text_scale": "Desktop Text Scale",
      "font_size": "Font Size",
      "bar_width": "Bar Width"
    },
    "options": {
      "autoDetect": "Auto-detect",
      "solcast": "Solcast",
      "volcast": "Volcast",
      "forecastSolar": "Forecast.Solar",
      "openMeteo": "Open-Meteo Solar Forecast",
      "mainViewDaily": "Daily",
      "mainViewHourly": "Hourly",
      "mainViewHistory": "History"
    },
    "sections": {
      "integrationType": "Integration Type",
      "dailyForecastEntities": "Daily Forecast Entities",
      "liveData": "Live Data",
      "actualGenerationArrays": "Actual Generation Arrays",
      "systemParameters": "System Parameters",
      "energyProvider": "Energy Provider",
      "colourThresholds": "Colour Thresholds",
      "dateTimeDisplay": "Display"
    },
    "helpers": {
      "device": "Recommended: selecting a device will auto-configure the card",
      "estimate10": "Display Estimate10 is only applicable when the integration type is Solcast",
      "integrationType": "Automatically set when a forecast device is selected above. Override here only when configuring forecast entities manually without a device.",
      "liveData": "+1HR and LEFT are auto-detected or auto-derived where possible. Set these manually to override, or to use a custom sensor.",
      "actualArrays": "Optional: configure individual array sensors to display a stacked breakdown on today's bar. Each label is a single character shown inside its segment (e.g. N, S, E).",
      "desktopTextScale": "Desktop Text Scale: only applies on wider screens (≥ 768 px). Mobile sizing is unchanged.",
      "mainView": "Choose what the card shows. Hourly shows today's hourly forecast. History compares the last 7 days of forecast and actual generation.",
      "fontSize": "Optional daily bar text size in pixels. Leave blank to use CSS/default styling.",
      "barWidth": "Optional forecast bar width in pixels. Leave blank to use CSS/default styling."
    },
    "warnings": {
      "manualEntities": "Changing device will not overwrite manually configured entities."
    },
    "arrays": {
      "entity": "Array entity",
      "label": "Label (1 char)",
      "placeholder": "E",
      "hint": "bar & popup",
      "remove": "Remove",
      "add": "Add array"
    }
  },
  "customCard": {
    "name": "Solar Forecast Card",
    "description": "Daily solar energy forecast with hourly breakdown support."
  }
}
;

var nl = {
  "day": {
    "today": "Vandaag",
    "tomorrow": "Morgen",
    "sunday_short": "zo",
    "monday_short": "ma",
    "tuesday_short": "di",
    "wednesday_short": "wo",
    "thursday_short": "do",
    "friday_short": "vr",
    "saturday_short": "za"
  },
  "card": {
    "defaultTitle": "Zonneprognose",
    "placeholder": "No forecast entities configured.",
    "placeholderAction": "Open the card editor to get started.",
    "twoDayNote": "2-day forecast available",
    "labels": {
      "live": "LIVE:",
      "exportRate": "TERUGLEVERTARIEF:",
      "nextHour": "+1 U:",
      "left": "REST:",
      "week": "WEEK:",
      "avg": "GEM.:",
      "total": "Totaal",
      "p10": "P10",
      "forecast": "prognose",
      "generated": "opgewekt"
    },
    "days": {
      "today": "Today"
    },
    "popup": {
      "close": "Close",
      "noForecastData": "No forecast data",
      "noHourlyData": "No hourly data available for this day.",
      "integrationNoHourlyData": "The selected forecast entities do not provide hourly forecast data.",
      "chart": {
        "time": "Time",
        "power": "Power",
        "kwh": "kWh",
        "forecastShort": "Fcst",
        "actualShort": "Act."
      }
    },
    "history": {
      "title": "Last 7 days",
      "forecast": "Forecast",
      "actual": "Actual",
      "accuracy": "Accuracy",
      "averageMiss": "Average miss per day",
      "bias": "Actual vs forecast per day",
      "readout": "{day}: forecast {forecast}, actual {actual} kWh ({difference})",
      "noActual": "{day}: forecast {forecast} kWh, no recorded generation",
      "noForecast": "{day}: no recorded forecast",
      "loading": "Loading forecast history…",
      "noData": "No forecast history found. Home Assistant needs to have recorded the forecast sensor for at least one full day."
    },
    "aria": {
      "dayButton": "{day} {date}"
    },
    "errors": {
      "invalidConfig": "Invalid configuration"
    },
    "units": {
      "watts": "W",
      "kilowatts": "kW",
      "kilowattHours": "kWh",
      "kilowattHoursPerDay": "kWh/day"
    }
  },
  "editor": {
    "labels": {
      "title": "Title (optional)",
      "icon": "Header icon (optional, e.g. mdi:solar-power)",
      "show_header": "Show header",
      "display_estimate10": "Display Estimate10 Forecast Values",
      "device_id": "Forecast Device",
      "integration_type": "Integration Type",
      "forecast_entity_0": "Day 1 — Today",
      "forecast_entity_1": "Day 2 — Tomorrow",
      "forecast_entity_2": "Day 3",
      "forecast_entity_3": "Day 4",
      "forecast_entity_4": "Day 5",
      "forecast_entity_5": "Day 6",
      "forecast_entity_6": "Day 7",
      "export_rate_entity": "Current Export Rate Entity",
      "live_power_entity": "Live power (optional, kW sensor)",
      "today_actual_entity": "Today's actual generation (optional)",
      "next_hour_entity": "+1HR forecast (optional, overrides auto-derived value)",
      "remaining_today_entity": "LEFT / remaining today (optional, overrides auto-derived value)",
      "main_view": "Main View",
      "inverter_max_kw": "Inverter max output (kW)",
      "solar_max_kwp": "Solar array size (kWp)",
      "low_threshold": "Low threshold (kWh)",
      "high_threshold": "High threshold (kWh)",
      "low_threshold_entity": "Low threshold sensor (optional, kWh)",
      "high_threshold_entity": "High threshold sensor (optional, kWh)",
      "show_low_threshold_zone": "Tint bar track below low threshold",
      "show_high_threshold_zone": "Tint bar track above high threshold",
      "threshold_zone_opacity": "Threshold tint opacity (lower is more transparent)",
      "desktop_text_scale": "Desktop Text Scale",
      "font_size": "Font Size",
      "bar_width": "Bar Width"
    },
    "options": {
      "autoDetect": "Auto-detect",
      "solcast": "Solcast",
      "volcast": "Volcast",
      "forecastSolar": "Forecast.Solar",
      "openMeteo": "Open-Meteo Solar Forecast",
      "mainViewDaily": "Daily",
      "mainViewHourly": "Hourly",
      "mainViewHistory": "History"
    },
    "sections": {
      "integrationType": "Integration Type",
      "dailyForecastEntities": "Daily Forecast Entities",
      "liveData": "Live Data",
      "actualGenerationArrays": "Actual Generation Arrays",
      "systemParameters": "System Parameters",
      "energyProvider": "Energy Provider",
      "colourThresholds": "Colour Thresholds",
      "dateTimeDisplay": "Display"
    },
    "helpers": {
      "device": "Recommended: selecting a device will auto-configure the card",
      "estimate10": "Display Estimate10 is only applicable when the integration type is Solcast",
      "integrationType": "Automatically set when a forecast device is selected above. Override here only when configuring forecast entities manually without a device.",
      "liveData": "+1HR and LEFT are auto-detected or auto-derived where possible. Set these manually to override, or to use a custom sensor.",
      "actualArrays": "Optional: configure individual array sensors to display a stacked breakdown on today's bar. Each label is a single character shown inside its segment (e.g. N, S, E).",
      "desktopTextScale": "Desktop Text Scale: only applies on wider screens (≥ 768 px). Mobile sizing is unchanged.",
      "mainView": "Choose what the card shows. Hourly shows today's hourly forecast. History compares the last 7 days of forecast and actual generation.",
      "fontSize": "Optional daily bar text size in pixels. Leave blank to use CSS/default styling.",
      "barWidth": "Optional forecast bar width in pixels. Leave blank to use CSS/default styling."
    },
    "warnings": {
      "manualEntities": "Changing device will not overwrite manually configured entities."
    },
    "arrays": {
      "entity": "Array entity",
      "label": "Label (1 char)",
      "placeholder": "E",
      "hint": "bar & popup",
      "remove": "Remove",
      "add": "Add array"
    }
  },
  "customCard": {
    "name": "Solar Forecast Card",
    "description": "Daily solar energy forecast with hourly breakdown support."
  }
}
;

var nb = {
  "day": {
    "today": "I dag",
    "tomorrow": "I morgen",
    "sunday_short": "søn",
    "monday_short": "man",
    "tuesday_short": "tir",
    "wednesday_short": "ons",
    "thursday_short": "tor",
    "friday_short": "fre",
    "saturday_short": "lør"
  },
  "card": {
    "defaultTitle": "Solprognose",
    "placeholder": "No forecast entities configured.",
    "placeholderAction": "Open the card editor to get started.",
    "twoDayNote": "2-day forecast available",
    "labels": {
      "live": "LIVE:",
      "exportRate": "EKSPORTTARIFF:",
      "nextHour": "+1 T:",
      "left": "IGJEN:",
      "week": "UKE:",
      "avg": "SNITT:",
      "total": "Totalt",
      "p10": "P10",
      "forecast": "prognose",
      "generated": "produsert"
    },
    "days": {
      "today": "Today"
    },
    "popup": {
      "close": "Close",
      "noForecastData": "No forecast data",
      "noHourlyData": "No hourly data available for this day.",
      "integrationNoHourlyData": "The selected forecast entities do not provide hourly forecast data.",
      "chart": {
        "time": "Time",
        "power": "Power",
        "kwh": "kWh",
        "forecastShort": "Fcst",
        "actualShort": "Act."
      }
    },
    "history": {
      "title": "Last 7 days",
      "forecast": "Forecast",
      "actual": "Actual",
      "accuracy": "Accuracy",
      "averageMiss": "Average miss per day",
      "bias": "Actual vs forecast per day",
      "readout": "{day}: forecast {forecast}, actual {actual} kWh ({difference})",
      "noActual": "{day}: forecast {forecast} kWh, no recorded generation",
      "noForecast": "{day}: no recorded forecast",
      "loading": "Loading forecast history…",
      "noData": "No forecast history found. Home Assistant needs to have recorded the forecast sensor for at least one full day."
    },
    "aria": {
      "dayButton": "{day} {date}"
    },
    "errors": {
      "invalidConfig": "Invalid configuration"
    },
    "units": {
      "watts": "W",
      "kilowatts": "kW",
      "kilowattHours": "kWh",
      "kilowattHoursPerDay": "kWh/day"
    }
  },
  "editor": {
    "labels": {
      "title": "Title (optional)",
      "icon": "Header icon (optional, e.g. mdi:solar-power)",
      "show_header": "Show header",
      "display_estimate10": "Display Estimate10 Forecast Values",
      "device_id": "Forecast Device",
      "integration_type": "Integration Type",
      "forecast_entity_0": "Day 1 — Today",
      "forecast_entity_1": "Day 2 — Tomorrow",
      "forecast_entity_2": "Day 3",
      "forecast_entity_3": "Day 4",
      "forecast_entity_4": "Day 5",
      "forecast_entity_5": "Day 6",
      "forecast_entity_6": "Day 7",
      "export_rate_entity": "Current Export Rate Entity",
      "live_power_entity": "Live power (optional, kW sensor)",
      "today_actual_entity": "Today's actual generation (optional)",
      "next_hour_entity": "+1HR forecast (optional, overrides auto-derived value)",
      "remaining_today_entity": "LEFT / remaining today (optional, overrides auto-derived value)",
      "main_view": "Main View",
      "inverter_max_kw": "Inverter max output (kW)",
      "solar_max_kwp": "Solar array size (kWp)",
      "low_threshold": "Low threshold (kWh)",
      "high_threshold": "High threshold (kWh)",
      "low_threshold_entity": "Low threshold sensor (optional, kWh)",
      "high_threshold_entity": "High threshold sensor (optional, kWh)",
      "show_low_threshold_zone": "Tint bar track below low threshold",
      "show_high_threshold_zone": "Tint bar track above high threshold",
      "threshold_zone_opacity": "Threshold tint opacity (lower is more transparent)",
      "desktop_text_scale": "Desktop Text Scale",
      "font_size": "Font Size",
      "bar_width": "Bar Width"
    },
    "options": {
      "autoDetect": "Auto-detect",
      "solcast": "Solcast",
      "volcast": "Volcast",
      "forecastSolar": "Forecast.Solar",
      "openMeteo": "Open-Meteo Solar Forecast",
      "mainViewDaily": "Daily",
      "mainViewHourly": "Hourly",
      "mainViewHistory": "History"
    },
    "sections": {
      "integrationType": "Integration Type",
      "dailyForecastEntities": "Daily Forecast Entities",
      "liveData": "Live Data",
      "actualGenerationArrays": "Actual Generation Arrays",
      "systemParameters": "System Parameters",
      "energyProvider": "Energy Provider",
      "colourThresholds": "Colour Thresholds",
      "dateTimeDisplay": "Display"
    },
    "helpers": {
      "device": "Recommended: selecting a device will auto-configure the card",
      "estimate10": "Display Estimate10 is only applicable when the integration type is Solcast",
      "integrationType": "Automatically set when a forecast device is selected above. Override here only when configuring forecast entities manually without a device.",
      "liveData": "+1HR and LEFT are auto-detected or auto-derived where possible. Set these manually to override, or to use a custom sensor.",
      "actualArrays": "Optional: configure individual array sensors to display a stacked breakdown on today's bar. Each label is a single character shown inside its segment (e.g. N, S, E).",
      "desktopTextScale": "Desktop Text Scale: only applies on wider screens (≥ 768 px). Mobile sizing is unchanged.",
      "mainView": "Choose what the card shows. Hourly shows today's hourly forecast. History compares the last 7 days of forecast and actual generation.",
      "fontSize": "Optional daily bar text size in pixels. Leave blank to use CSS/default styling.",
      "barWidth": "Optional forecast bar width in pixels. Leave blank to use CSS/default styling."
    },
    "warnings": {
      "manualEntities": "Changing device will not overwrite manually configured entities."
    },
    "arrays": {
      "entity": "Array entity",
      "label": "Label (1 char)",
      "placeholder": "E",
      "hint": "bar & popup",
      "remove": "Remove",
      "add": "Add array"
    }
  },
  "customCard": {
    "name": "Solar Forecast Card",
    "description": "Daily solar energy forecast with hourly breakdown support."
  }
}
;

var nn = {
  "day": {
    "today": "I dag",
    "tomorrow": "I morgon",
    "sunday_short": "søn",
    "monday_short": "mån",
    "tuesday_short": "tys",
    "wednesday_short": "ons",
    "thursday_short": "tor",
    "friday_short": "fre",
    "saturday_short": "lau"
  },
  "card": {
    "defaultTitle": "Solprognose",
    "placeholder": "No forecast entities configured.",
    "placeholderAction": "Open the card editor to get started.",
    "twoDayNote": "2-day forecast available",
    "labels": {
      "live": "LIVE:",
      "exportRate": "EKSPORTTARIFF:",
      "nextHour": "+1 T:",
      "left": "IGJEN:",
      "week": "VEKE:",
      "avg": "SNITT:",
      "total": "Totalt",
      "p10": "P10",
      "forecast": "prognose",
      "generated": "produsert"
    },
    "days": {
      "today": "Today"
    },
    "popup": {
      "close": "Close",
      "noForecastData": "No forecast data",
      "noHourlyData": "No hourly data available for this day.",
      "integrationNoHourlyData": "The selected forecast entities do not provide hourly forecast data.",
      "chart": {
        "time": "Time",
        "power": "Power",
        "kwh": "kWh",
        "forecastShort": "Fcst",
        "actualShort": "Act."
      }
    },
    "history": {
      "title": "Last 7 days",
      "forecast": "Forecast",
      "actual": "Actual",
      "accuracy": "Accuracy",
      "averageMiss": "Average miss per day",
      "bias": "Actual vs forecast per day",
      "readout": "{day}: forecast {forecast}, actual {actual} kWh ({difference})",
      "noActual": "{day}: forecast {forecast} kWh, no recorded generation",
      "noForecast": "{day}: no recorded forecast",
      "loading": "Loading forecast history…",
      "noData": "No forecast history found. Home Assistant needs to have recorded the forecast sensor for at least one full day."
    },
    "aria": {
      "dayButton": "{day} {date}"
    },
    "errors": {
      "invalidConfig": "Invalid configuration"
    },
    "units": {
      "watts": "W",
      "kilowatts": "kW",
      "kilowattHours": "kWh",
      "kilowattHoursPerDay": "kWh/day"
    }
  },
  "editor": {
    "labels": {
      "title": "Title (optional)",
      "icon": "Header icon (optional, e.g. mdi:solar-power)",
      "show_header": "Show header",
      "display_estimate10": "Display Estimate10 Forecast Values",
      "device_id": "Forecast Device",
      "integration_type": "Integration Type",
      "forecast_entity_0": "Day 1 — Today",
      "forecast_entity_1": "Day 2 — Tomorrow",
      "forecast_entity_2": "Day 3",
      "forecast_entity_3": "Day 4",
      "forecast_entity_4": "Day 5",
      "forecast_entity_5": "Day 6",
      "forecast_entity_6": "Day 7",
      "export_rate_entity": "Current Export Rate Entity",
      "live_power_entity": "Live power (optional, kW sensor)",
      "today_actual_entity": "Today's actual generation (optional)",
      "next_hour_entity": "+1HR forecast (optional, overrides auto-derived value)",
      "remaining_today_entity": "LEFT / remaining today (optional, overrides auto-derived value)",
      "main_view": "Main View",
      "inverter_max_kw": "Inverter max output (kW)",
      "solar_max_kwp": "Solar array size (kWp)",
      "low_threshold": "Low threshold (kWh)",
      "high_threshold": "High threshold (kWh)",
      "low_threshold_entity": "Low threshold sensor (optional, kWh)",
      "high_threshold_entity": "High threshold sensor (optional, kWh)",
      "show_low_threshold_zone": "Tint bar track below low threshold",
      "show_high_threshold_zone": "Tint bar track above high threshold",
      "threshold_zone_opacity": "Threshold tint opacity (lower is more transparent)",
      "desktop_text_scale": "Desktop Text Scale",
      "font_size": "Font Size",
      "bar_width": "Bar Width"
    },
    "options": {
      "autoDetect": "Auto-detect",
      "solcast": "Solcast",
      "volcast": "Volcast",
      "forecastSolar": "Forecast.Solar",
      "openMeteo": "Open-Meteo Solar Forecast",
      "mainViewDaily": "Daily",
      "mainViewHourly": "Hourly",
      "mainViewHistory": "History"
    },
    "sections": {
      "integrationType": "Integration Type",
      "dailyForecastEntities": "Daily Forecast Entities",
      "liveData": "Live Data",
      "actualGenerationArrays": "Actual Generation Arrays",
      "systemParameters": "System Parameters",
      "energyProvider": "Energy Provider",
      "colourThresholds": "Colour Thresholds",
      "dateTimeDisplay": "Display"
    },
    "helpers": {
      "device": "Recommended: selecting a device will auto-configure the card",
      "estimate10": "Display Estimate10 is only applicable when the integration type is Solcast",
      "integrationType": "Automatically set when a forecast device is selected above. Override here only when configuring forecast entities manually without a device.",
      "liveData": "+1HR and LEFT are auto-detected or auto-derived where possible. Set these manually to override, or to use a custom sensor.",
      "actualArrays": "Optional: configure individual array sensors to display a stacked breakdown on today's bar. Each label is a single character shown inside its segment (e.g. N, S, E).",
      "desktopTextScale": "Desktop Text Scale: only applies on wider screens (≥ 768 px). Mobile sizing is unchanged.",
      "mainView": "Choose what the card shows. Hourly shows today's hourly forecast. History compares the last 7 days of forecast and actual generation.",
      "fontSize": "Optional daily bar text size in pixels. Leave blank to use CSS/default styling.",
      "barWidth": "Optional forecast bar width in pixels. Leave blank to use CSS/default styling."
    },
    "warnings": {
      "manualEntities": "Changing device will not overwrite manually configured entities."
    },
    "arrays": {
      "entity": "Array entity",
      "label": "Label (1 char)",
      "placeholder": "E",
      "hint": "bar & popup",
      "remove": "Remove",
      "add": "Add array"
    }
  },
  "customCard": {
    "name": "Solar Forecast Card",
    "description": "Daily solar energy forecast with hourly breakdown support."
  }
}
;

var pl = {
  "day": {
    "today": "Dzisiaj",
    "tomorrow": "Jutro",
    "sunday_short": "niedz",
    "monday_short": "pon",
    "tuesday_short": "wt",
    "wednesday_short": "śr",
    "thursday_short": "czw",
    "friday_short": "pt",
    "saturday_short": "sob"
  },
  "card": {
    "defaultTitle": "Prognoza solarna",
    "placeholder": "No forecast entities configured.",
    "placeholderAction": "Open the card editor to get started.",
    "twoDayNote": "2-day forecast available",
    "labels": {
      "live": "NA ŻYWO:",
      "exportRate": "STAWKA EKSPORTU:",
      "nextHour": "+1 H:",
      "left": "POZOSTAŁO:",
      "week": "TYDZIEŃ:",
      "avg": "ŚR.:",
      "total": "Razem",
      "p10": "P10",
      "forecast": "prognoza",
      "generated": "wygenerowano"
    },
    "days": {
      "today": "Today"
    },
    "popup": {
      "close": "Close",
      "noForecastData": "No forecast data",
      "noHourlyData": "No hourly data available for this day.",
      "integrationNoHourlyData": "The selected forecast entities do not provide hourly forecast data.",
      "chart": {
        "time": "Time",
        "power": "Power",
        "kwh": "kWh",
        "forecastShort": "Fcst",
        "actualShort": "Act."
      }
    },
    "history": {
      "title": "Last 7 days",
      "forecast": "Forecast",
      "actual": "Actual",
      "accuracy": "Accuracy",
      "averageMiss": "Average miss per day",
      "bias": "Actual vs forecast per day",
      "readout": "{day}: forecast {forecast}, actual {actual} kWh ({difference})",
      "noActual": "{day}: forecast {forecast} kWh, no recorded generation",
      "noForecast": "{day}: no recorded forecast",
      "loading": "Loading forecast history…",
      "noData": "No forecast history found. Home Assistant needs to have recorded the forecast sensor for at least one full day."
    },
    "aria": {
      "dayButton": "{day} {date}"
    },
    "errors": {
      "invalidConfig": "Invalid configuration"
    },
    "units": {
      "watts": "W",
      "kilowatts": "kW",
      "kilowattHours": "kWh",
      "kilowattHoursPerDay": "kWh/day"
    }
  },
  "editor": {
    "labels": {
      "title": "Title (optional)",
      "icon": "Header icon (optional, e.g. mdi:solar-power)",
      "show_header": "Show header",
      "display_estimate10": "Display Estimate10 Forecast Values",
      "device_id": "Forecast Device",
      "integration_type": "Integration Type",
      "forecast_entity_0": "Day 1 — Today",
      "forecast_entity_1": "Day 2 — Tomorrow",
      "forecast_entity_2": "Day 3",
      "forecast_entity_3": "Day 4",
      "forecast_entity_4": "Day 5",
      "forecast_entity_5": "Day 6",
      "forecast_entity_6": "Day 7",
      "export_rate_entity": "Current Export Rate Entity",
      "live_power_entity": "Live power (optional, kW sensor)",
      "today_actual_entity": "Today's actual generation (optional)",
      "next_hour_entity": "+1HR forecast (optional, overrides auto-derived value)",
      "remaining_today_entity": "LEFT / remaining today (optional, overrides auto-derived value)",
      "main_view": "Main View",
      "inverter_max_kw": "Inverter max output (kW)",
      "solar_max_kwp": "Solar array size (kWp)",
      "low_threshold": "Low threshold (kWh)",
      "high_threshold": "High threshold (kWh)",
      "low_threshold_entity": "Low threshold sensor (optional, kWh)",
      "high_threshold_entity": "High threshold sensor (optional, kWh)",
      "show_low_threshold_zone": "Tint bar track below low threshold",
      "show_high_threshold_zone": "Tint bar track above high threshold",
      "threshold_zone_opacity": "Threshold tint opacity (lower is more transparent)",
      "desktop_text_scale": "Desktop Text Scale",
      "font_size": "Font Size",
      "bar_width": "Bar Width"
    },
    "options": {
      "autoDetect": "Auto-detect",
      "solcast": "Solcast",
      "volcast": "Volcast",
      "forecastSolar": "Forecast.Solar",
      "openMeteo": "Open-Meteo Solar Forecast",
      "mainViewDaily": "Daily",
      "mainViewHourly": "Hourly",
      "mainViewHistory": "History"
    },
    "sections": {
      "integrationType": "Integration Type",
      "dailyForecastEntities": "Daily Forecast Entities",
      "liveData": "Live Data",
      "actualGenerationArrays": "Actual Generation Arrays",
      "systemParameters": "System Parameters",
      "energyProvider": "Energy Provider",
      "colourThresholds": "Colour Thresholds",
      "dateTimeDisplay": "Display"
    },
    "helpers": {
      "device": "Recommended: selecting a device will auto-configure the card",
      "estimate10": "Display Estimate10 is only applicable when the integration type is Solcast",
      "integrationType": "Automatically set when a forecast device is selected above. Override here only when configuring forecast entities manually without a device.",
      "liveData": "+1HR and LEFT are auto-detected or auto-derived where possible. Set these manually to override, or to use a custom sensor.",
      "actualArrays": "Optional: configure individual array sensors to display a stacked breakdown on today's bar. Each label is a single character shown inside its segment (e.g. N, S, E).",
      "desktopTextScale": "Desktop Text Scale: only applies on wider screens (≥ 768 px). Mobile sizing is unchanged.",
      "mainView": "Choose what the card shows. Hourly shows today's hourly forecast. History compares the last 7 days of forecast and actual generation.",
      "fontSize": "Optional daily bar text size in pixels. Leave blank to use CSS/default styling.",
      "barWidth": "Optional forecast bar width in pixels. Leave blank to use CSS/default styling."
    },
    "warnings": {
      "manualEntities": "Changing device will not overwrite manually configured entities."
    },
    "arrays": {
      "entity": "Array entity",
      "label": "Label (1 char)",
      "placeholder": "E",
      "hint": "bar & popup",
      "remove": "Remove",
      "add": "Add array"
    }
  },
  "customCard": {
    "name": "Solar Forecast Card",
    "description": "Daily solar energy forecast with hourly breakdown support."
  }
}
;

var pt = {
  "day": {
    "today": "Hoje",
    "tomorrow": "Amanhã",
    "sunday_short": "dom",
    "monday_short": "seg",
    "tuesday_short": "ter",
    "wednesday_short": "qua",
    "thursday_short": "qui",
    "friday_short": "sex",
    "saturday_short": "sáb"
  },
  "card": {
    "defaultTitle": "Previsão solar",
    "placeholder": "No forecast entities configured.",
    "placeholderAction": "Open the card editor to get started.",
    "twoDayNote": "2-day forecast available",
    "labels": {
      "live": "AO VIVO:",
      "exportRate": "TARIFA EXPORT.:",
      "nextHour": "+1 H:",
      "left": "RESTANTE:",
      "week": "SEMANA:",
      "avg": "MÉDIA:",
      "total": "Total",
      "p10": "P10",
      "forecast": "previsão",
      "generated": "gerado"
    },
    "days": {
      "today": "Today"
    },
    "popup": {
      "close": "Close",
      "noForecastData": "No forecast data",
      "noHourlyData": "No hourly data available for this day.",
      "integrationNoHourlyData": "The selected forecast entities do not provide hourly forecast data.",
      "chart": {
        "time": "Time",
        "power": "Power",
        "kwh": "kWh",
        "forecastShort": "Fcst",
        "actualShort": "Act."
      }
    },
    "history": {
      "title": "Last 7 days",
      "forecast": "Forecast",
      "actual": "Actual",
      "accuracy": "Accuracy",
      "averageMiss": "Average miss per day",
      "bias": "Actual vs forecast per day",
      "readout": "{day}: forecast {forecast}, actual {actual} kWh ({difference})",
      "noActual": "{day}: forecast {forecast} kWh, no recorded generation",
      "noForecast": "{day}: no recorded forecast",
      "loading": "Loading forecast history…",
      "noData": "No forecast history found. Home Assistant needs to have recorded the forecast sensor for at least one full day."
    },
    "aria": {
      "dayButton": "{day} {date}"
    },
    "errors": {
      "invalidConfig": "Invalid configuration"
    },
    "units": {
      "watts": "W",
      "kilowatts": "kW",
      "kilowattHours": "kWh",
      "kilowattHoursPerDay": "kWh/day"
    }
  },
  "editor": {
    "labels": {
      "title": "Title (optional)",
      "icon": "Header icon (optional, e.g. mdi:solar-power)",
      "show_header": "Show header",
      "display_estimate10": "Display Estimate10 Forecast Values",
      "device_id": "Forecast Device",
      "integration_type": "Integration Type",
      "forecast_entity_0": "Day 1 — Today",
      "forecast_entity_1": "Day 2 — Tomorrow",
      "forecast_entity_2": "Day 3",
      "forecast_entity_3": "Day 4",
      "forecast_entity_4": "Day 5",
      "forecast_entity_5": "Day 6",
      "forecast_entity_6": "Day 7",
      "export_rate_entity": "Current Export Rate Entity",
      "live_power_entity": "Live power (optional, kW sensor)",
      "today_actual_entity": "Today's actual generation (optional)",
      "next_hour_entity": "+1HR forecast (optional, overrides auto-derived value)",
      "remaining_today_entity": "LEFT / remaining today (optional, overrides auto-derived value)",
      "main_view": "Main View",
      "inverter_max_kw": "Inverter max output (kW)",
      "solar_max_kwp": "Solar array size (kWp)",
      "low_threshold": "Low threshold (kWh)",
      "high_threshold": "High threshold (kWh)",
      "low_threshold_entity": "Low threshold sensor (optional, kWh)",
      "high_threshold_entity": "High threshold sensor (optional, kWh)",
      "show_low_threshold_zone": "Tint bar track below low threshold",
      "show_high_threshold_zone": "Tint bar track above high threshold",
      "threshold_zone_opacity": "Threshold tint opacity (lower is more transparent)",
      "desktop_text_scale": "Desktop Text Scale",
      "font_size": "Font Size",
      "bar_width": "Bar Width"
    },
    "options": {
      "autoDetect": "Auto-detect",
      "solcast": "Solcast",
      "volcast": "Volcast",
      "forecastSolar": "Forecast.Solar",
      "openMeteo": "Open-Meteo Solar Forecast",
      "mainViewDaily": "Daily",
      "mainViewHourly": "Hourly",
      "mainViewHistory": "History"
    },
    "sections": {
      "integrationType": "Integration Type",
      "dailyForecastEntities": "Daily Forecast Entities",
      "liveData": "Live Data",
      "actualGenerationArrays": "Actual Generation Arrays",
      "systemParameters": "System Parameters",
      "energyProvider": "Energy Provider",
      "colourThresholds": "Colour Thresholds",
      "dateTimeDisplay": "Display"
    },
    "helpers": {
      "device": "Recommended: selecting a device will auto-configure the card",
      "estimate10": "Display Estimate10 is only applicable when the integration type is Solcast",
      "integrationType": "Automatically set when a forecast device is selected above. Override here only when configuring forecast entities manually without a device.",
      "liveData": "+1HR and LEFT are auto-detected or auto-derived where possible. Set these manually to override, or to use a custom sensor.",
      "actualArrays": "Optional: configure individual array sensors to display a stacked breakdown on today's bar. Each label is a single character shown inside its segment (e.g. N, S, E).",
      "desktopTextScale": "Desktop Text Scale: only applies on wider screens (≥ 768 px). Mobile sizing is unchanged.",
      "mainView": "Choose what the card shows. Hourly shows today's hourly forecast. History compares the last 7 days of forecast and actual generation.",
      "fontSize": "Optional daily bar text size in pixels. Leave blank to use CSS/default styling.",
      "barWidth": "Optional forecast bar width in pixels. Leave blank to use CSS/default styling."
    },
    "warnings": {
      "manualEntities": "Changing device will not overwrite manually configured entities."
    },
    "arrays": {
      "entity": "Array entity",
      "label": "Label (1 char)",
      "placeholder": "E",
      "hint": "bar & popup",
      "remove": "Remove",
      "add": "Add array"
    }
  },
  "customCard": {
    "name": "Solar Forecast Card",
    "description": "Daily solar energy forecast with hourly breakdown support."
  }
}
;

var pt_BR = {
  "day": {
    "today": "Hoje",
    "tomorrow": "Amanhã",
    "sunday_short": "dom",
    "monday_short": "seg",
    "tuesday_short": "ter",
    "wednesday_short": "qua",
    "thursday_short": "qui",
    "friday_short": "sex",
    "saturday_short": "sáb"
  },
  "card": {
    "defaultTitle": "Previsão solar",
    "placeholder": "No forecast entities configured.",
    "placeholderAction": "Open the card editor to get started.",
    "twoDayNote": "2-day forecast available",
    "labels": {
      "live": "AO VIVO:",
      "exportRate": "TARIFA EXPORT.:",
      "nextHour": "+1 H:",
      "left": "RESTANTE:",
      "week": "SEMANA:",
      "avg": "MÉDIA:",
      "total": "Total",
      "p10": "P10",
      "forecast": "previsão",
      "generated": "gerado"
    },
    "days": {
      "today": "Today"
    },
    "popup": {
      "close": "Close",
      "noForecastData": "No forecast data",
      "noHourlyData": "No hourly data available for this day.",
      "integrationNoHourlyData": "The selected forecast entities do not provide hourly forecast data.",
      "chart": {
        "time": "Time",
        "power": "Power",
        "kwh": "kWh",
        "forecastShort": "Fcst",
        "actualShort": "Act."
      }
    },
    "history": {
      "title": "Last 7 days",
      "forecast": "Forecast",
      "actual": "Actual",
      "accuracy": "Accuracy",
      "averageMiss": "Average miss per day",
      "bias": "Actual vs forecast per day",
      "readout": "{day}: forecast {forecast}, actual {actual} kWh ({difference})",
      "noActual": "{day}: forecast {forecast} kWh, no recorded generation",
      "noForecast": "{day}: no recorded forecast",
      "loading": "Loading forecast history…",
      "noData": "No forecast history found. Home Assistant needs to have recorded the forecast sensor for at least one full day."
    },
    "aria": {
      "dayButton": "{day} {date}"
    },
    "errors": {
      "invalidConfig": "Invalid configuration"
    },
    "units": {
      "watts": "W",
      "kilowatts": "kW",
      "kilowattHours": "kWh",
      "kilowattHoursPerDay": "kWh/day"
    }
  },
  "editor": {
    "labels": {
      "title": "Title (optional)",
      "icon": "Header icon (optional, e.g. mdi:solar-power)",
      "show_header": "Show header",
      "display_estimate10": "Display Estimate10 Forecast Values",
      "device_id": "Forecast Device",
      "integration_type": "Integration Type",
      "forecast_entity_0": "Day 1 — Today",
      "forecast_entity_1": "Day 2 — Tomorrow",
      "forecast_entity_2": "Day 3",
      "forecast_entity_3": "Day 4",
      "forecast_entity_4": "Day 5",
      "forecast_entity_5": "Day 6",
      "forecast_entity_6": "Day 7",
      "export_rate_entity": "Current Export Rate Entity",
      "live_power_entity": "Live power (optional, kW sensor)",
      "today_actual_entity": "Today's actual generation (optional)",
      "next_hour_entity": "+1HR forecast (optional, overrides auto-derived value)",
      "remaining_today_entity": "LEFT / remaining today (optional, overrides auto-derived value)",
      "main_view": "Main View",
      "inverter_max_kw": "Inverter max output (kW)",
      "solar_max_kwp": "Solar array size (kWp)",
      "low_threshold": "Low threshold (kWh)",
      "high_threshold": "High threshold (kWh)",
      "low_threshold_entity": "Low threshold sensor (optional, kWh)",
      "high_threshold_entity": "High threshold sensor (optional, kWh)",
      "show_low_threshold_zone": "Tint bar track below low threshold",
      "show_high_threshold_zone": "Tint bar track above high threshold",
      "threshold_zone_opacity": "Threshold tint opacity (lower is more transparent)",
      "desktop_text_scale": "Desktop Text Scale",
      "font_size": "Font Size",
      "bar_width": "Bar Width"
    },
    "options": {
      "autoDetect": "Auto-detect",
      "solcast": "Solcast",
      "volcast": "Volcast",
      "forecastSolar": "Forecast.Solar",
      "openMeteo": "Open-Meteo Solar Forecast",
      "mainViewDaily": "Daily",
      "mainViewHourly": "Hourly",
      "mainViewHistory": "History"
    },
    "sections": {
      "integrationType": "Integration Type",
      "dailyForecastEntities": "Daily Forecast Entities",
      "liveData": "Live Data",
      "actualGenerationArrays": "Actual Generation Arrays",
      "systemParameters": "System Parameters",
      "energyProvider": "Energy Provider",
      "colourThresholds": "Colour Thresholds",
      "dateTimeDisplay": "Display"
    },
    "helpers": {
      "device": "Recommended: selecting a device will auto-configure the card",
      "estimate10": "Display Estimate10 is only applicable when the integration type is Solcast",
      "integrationType": "Automatically set when a forecast device is selected above. Override here only when configuring forecast entities manually without a device.",
      "liveData": "+1HR and LEFT are auto-detected or auto-derived where possible. Set these manually to override, or to use a custom sensor.",
      "actualArrays": "Optional: configure individual array sensors to display a stacked breakdown on today's bar. Each label is a single character shown inside its segment (e.g. N, S, E).",
      "desktopTextScale": "Desktop Text Scale: only applies on wider screens (≥ 768 px). Mobile sizing is unchanged.",
      "mainView": "Choose what the card shows. Hourly shows today's hourly forecast. History compares the last 7 days of forecast and actual generation.",
      "fontSize": "Optional daily bar text size in pixels. Leave blank to use CSS/default styling.",
      "barWidth": "Optional forecast bar width in pixels. Leave blank to use CSS/default styling."
    },
    "warnings": {
      "manualEntities": "Changing device will not overwrite manually configured entities."
    },
    "arrays": {
      "entity": "Array entity",
      "label": "Label (1 char)",
      "placeholder": "E",
      "hint": "bar & popup",
      "remove": "Remove",
      "add": "Add array"
    }
  },
  "customCard": {
    "name": "Solar Forecast Card",
    "description": "Daily solar energy forecast with hourly breakdown support."
  }
}
;

var ro = {
  "day": {
    "today": "Azi",
    "tomorrow": "Mâine",
    "sunday_short": "dum",
    "monday_short": "lun",
    "tuesday_short": "mar",
    "wednesday_short": "mie",
    "thursday_short": "joi",
    "friday_short": "vin",
    "saturday_short": "sâm"
  },
  "card": {
    "defaultTitle": "Prognoză solară",
    "placeholder": "No forecast entities configured.",
    "placeholderAction": "Open the card editor to get started.",
    "twoDayNote": "2-day forecast available",
    "labels": {
      "live": "LIVE:",
      "exportRate": "TARIF EXPORT:",
      "nextHour": "+1 H:",
      "left": "RĂMAS:",
      "week": "SĂPT.:",
      "avg": "MEDIE:",
      "total": "Total",
      "p10": "P10",
      "forecast": "prognoză",
      "generated": "generat"
    },
    "days": {
      "today": "Today"
    },
    "popup": {
      "close": "Close",
      "noForecastData": "No forecast data",
      "noHourlyData": "No hourly data available for this day.",
      "integrationNoHourlyData": "The selected forecast entities do not provide hourly forecast data.",
      "chart": {
        "time": "Time",
        "power": "Power",
        "kwh": "kWh",
        "forecastShort": "Fcst",
        "actualShort": "Act."
      }
    },
    "history": {
      "title": "Last 7 days",
      "forecast": "Forecast",
      "actual": "Actual",
      "accuracy": "Accuracy",
      "averageMiss": "Average miss per day",
      "bias": "Actual vs forecast per day",
      "readout": "{day}: forecast {forecast}, actual {actual} kWh ({difference})",
      "noActual": "{day}: forecast {forecast} kWh, no recorded generation",
      "noForecast": "{day}: no recorded forecast",
      "loading": "Loading forecast history…",
      "noData": "No forecast history found. Home Assistant needs to have recorded the forecast sensor for at least one full day."
    },
    "aria": {
      "dayButton": "{day} {date}"
    },
    "errors": {
      "invalidConfig": "Invalid configuration"
    },
    "units": {
      "watts": "W",
      "kilowatts": "kW",
      "kilowattHours": "kWh",
      "kilowattHoursPerDay": "kWh/day"
    }
  },
  "editor": {
    "labels": {
      "title": "Title (optional)",
      "icon": "Header icon (optional, e.g. mdi:solar-power)",
      "show_header": "Show header",
      "display_estimate10": "Display Estimate10 Forecast Values",
      "device_id": "Forecast Device",
      "integration_type": "Integration Type",
      "forecast_entity_0": "Day 1 — Today",
      "forecast_entity_1": "Day 2 — Tomorrow",
      "forecast_entity_2": "Day 3",
      "forecast_entity_3": "Day 4",
      "forecast_entity_4": "Day 5",
      "forecast_entity_5": "Day 6",
      "forecast_entity_6": "Day 7",
      "export_rate_entity": "Current Export Rate Entity",
      "live_power_entity": "Live power (optional, kW sensor)",
      "today_actual_entity": "Today's actual generation (optional)",
      "next_hour_entity": "+1HR forecast (optional, overrides auto-derived value)",
      "remaining_today_entity": "LEFT / remaining today (optional, overrides auto-derived value)",
      "main_view": "Main View",
      "inverter_max_kw": "Inverter max output (kW)",
      "solar_max_kwp": "Solar array size (kWp)",
      "low_threshold": "Low threshold (kWh)",
      "high_threshold": "High threshold (kWh)",
      "low_threshold_entity": "Low threshold sensor (optional, kWh)",
      "high_threshold_entity": "High threshold sensor (optional, kWh)",
      "show_low_threshold_zone": "Tint bar track below low threshold",
      "show_high_threshold_zone": "Tint bar track above high threshold",
      "threshold_zone_opacity": "Threshold tint opacity (lower is more transparent)",
      "desktop_text_scale": "Desktop Text Scale",
      "font_size": "Font Size",
      "bar_width": "Bar Width"
    },
    "options": {
      "autoDetect": "Auto-detect",
      "solcast": "Solcast",
      "volcast": "Volcast",
      "forecastSolar": "Forecast.Solar",
      "openMeteo": "Open-Meteo Solar Forecast",
      "mainViewDaily": "Daily",
      "mainViewHourly": "Hourly",
      "mainViewHistory": "History"
    },
    "sections": {
      "integrationType": "Integration Type",
      "dailyForecastEntities": "Daily Forecast Entities",
      "liveData": "Live Data",
      "actualGenerationArrays": "Actual Generation Arrays",
      "systemParameters": "System Parameters",
      "energyProvider": "Energy Provider",
      "colourThresholds": "Colour Thresholds",
      "dateTimeDisplay": "Display"
    },
    "helpers": {
      "device": "Recommended: selecting a device will auto-configure the card",
      "estimate10": "Display Estimate10 is only applicable when the integration type is Solcast",
      "integrationType": "Automatically set when a forecast device is selected above. Override here only when configuring forecast entities manually without a device.",
      "liveData": "+1HR and LEFT are auto-detected or auto-derived where possible. Set these manually to override, or to use a custom sensor.",
      "actualArrays": "Optional: configure individual array sensors to display a stacked breakdown on today's bar. Each label is a single character shown inside its segment (e.g. N, S, E).",
      "desktopTextScale": "Desktop Text Scale: only applies on wider screens (≥ 768 px). Mobile sizing is unchanged.",
      "mainView": "Choose what the card shows. Hourly shows today's hourly forecast. History compares the last 7 days of forecast and actual generation.",
      "fontSize": "Optional daily bar text size in pixels. Leave blank to use CSS/default styling.",
      "barWidth": "Optional forecast bar width in pixels. Leave blank to use CSS/default styling."
    },
    "warnings": {
      "manualEntities": "Changing device will not overwrite manually configured entities."
    },
    "arrays": {
      "entity": "Array entity",
      "label": "Label (1 char)",
      "placeholder": "E",
      "hint": "bar & popup",
      "remove": "Remove",
      "add": "Add array"
    }
  },
  "customCard": {
    "name": "Solar Forecast Card",
    "description": "Daily solar energy forecast with hourly breakdown support."
  }
}
;

var ru = {
  "day": {
    "today": "Сегодня",
    "tomorrow": "Завтра",
    "sunday_short": "вс",
    "monday_short": "пн",
    "tuesday_short": "вт",
    "wednesday_short": "ср",
    "thursday_short": "чт",
    "friday_short": "пт",
    "saturday_short": "сб"
  },
  "card": {
    "defaultTitle": "Солнечный прогноз",
    "placeholder": "No forecast entities configured.",
    "placeholderAction": "Open the card editor to get started.",
    "twoDayNote": "2-day forecast available",
    "labels": {
      "live": "СЕЙЧАС:",
      "exportRate": "ТАРИФ ЭКСПОРТА:",
      "nextHour": "+1 Ч:",
      "left": "ОСТАЛОСЬ:",
      "week": "НЕДЕЛЯ:",
      "avg": "СРЕД.:",
      "total": "Итого",
      "p10": "P10",
      "forecast": "прогноз",
      "generated": "выработано"
    },
    "days": {
      "today": "Today"
    },
    "popup": {
      "close": "Close",
      "noForecastData": "No forecast data",
      "noHourlyData": "No hourly data available for this day.",
      "integrationNoHourlyData": "The selected forecast entities do not provide hourly forecast data.",
      "chart": {
        "time": "Time",
        "power": "Power",
        "kwh": "kWh",
        "forecastShort": "Fcst",
        "actualShort": "Act."
      }
    },
    "history": {
      "title": "Last 7 days",
      "forecast": "Forecast",
      "actual": "Actual",
      "accuracy": "Accuracy",
      "averageMiss": "Average miss per day",
      "bias": "Actual vs forecast per day",
      "readout": "{day}: forecast {forecast}, actual {actual} kWh ({difference})",
      "noActual": "{day}: forecast {forecast} kWh, no recorded generation",
      "noForecast": "{day}: no recorded forecast",
      "loading": "Loading forecast history…",
      "noData": "No forecast history found. Home Assistant needs to have recorded the forecast sensor for at least one full day."
    },
    "aria": {
      "dayButton": "{day} {date}"
    },
    "errors": {
      "invalidConfig": "Invalid configuration"
    },
    "units": {
      "watts": "W",
      "kilowatts": "kW",
      "kilowattHours": "kWh",
      "kilowattHoursPerDay": "kWh/day"
    }
  },
  "editor": {
    "labels": {
      "title": "Title (optional)",
      "icon": "Header icon (optional, e.g. mdi:solar-power)",
      "show_header": "Show header",
      "display_estimate10": "Display Estimate10 Forecast Values",
      "device_id": "Forecast Device",
      "integration_type": "Integration Type",
      "forecast_entity_0": "Day 1 — Today",
      "forecast_entity_1": "Day 2 — Tomorrow",
      "forecast_entity_2": "Day 3",
      "forecast_entity_3": "Day 4",
      "forecast_entity_4": "Day 5",
      "forecast_entity_5": "Day 6",
      "forecast_entity_6": "Day 7",
      "export_rate_entity": "Current Export Rate Entity",
      "live_power_entity": "Live power (optional, kW sensor)",
      "today_actual_entity": "Today's actual generation (optional)",
      "next_hour_entity": "+1HR forecast (optional, overrides auto-derived value)",
      "remaining_today_entity": "LEFT / remaining today (optional, overrides auto-derived value)",
      "main_view": "Main View",
      "inverter_max_kw": "Inverter max output (kW)",
      "solar_max_kwp": "Solar array size (kWp)",
      "low_threshold": "Low threshold (kWh)",
      "high_threshold": "High threshold (kWh)",
      "low_threshold_entity": "Low threshold sensor (optional, kWh)",
      "high_threshold_entity": "High threshold sensor (optional, kWh)",
      "show_low_threshold_zone": "Tint bar track below low threshold",
      "show_high_threshold_zone": "Tint bar track above high threshold",
      "threshold_zone_opacity": "Threshold tint opacity (lower is more transparent)",
      "desktop_text_scale": "Desktop Text Scale",
      "font_size": "Font Size",
      "bar_width": "Bar Width"
    },
    "options": {
      "autoDetect": "Auto-detect",
      "solcast": "Solcast",
      "volcast": "Volcast",
      "forecastSolar": "Forecast.Solar",
      "openMeteo": "Open-Meteo Solar Forecast",
      "mainViewDaily": "Daily",
      "mainViewHourly": "Hourly",
      "mainViewHistory": "History"
    },
    "sections": {
      "integrationType": "Integration Type",
      "dailyForecastEntities": "Daily Forecast Entities",
      "liveData": "Live Data",
      "actualGenerationArrays": "Actual Generation Arrays",
      "systemParameters": "System Parameters",
      "energyProvider": "Energy Provider",
      "colourThresholds": "Colour Thresholds",
      "dateTimeDisplay": "Display"
    },
    "helpers": {
      "device": "Recommended: selecting a device will auto-configure the card",
      "estimate10": "Display Estimate10 is only applicable when the integration type is Solcast",
      "integrationType": "Automatically set when a forecast device is selected above. Override here only when configuring forecast entities manually without a device.",
      "liveData": "+1HR and LEFT are auto-detected or auto-derived where possible. Set these manually to override, or to use a custom sensor.",
      "actualArrays": "Optional: configure individual array sensors to display a stacked breakdown on today's bar. Each label is a single character shown inside its segment (e.g. N, S, E).",
      "desktopTextScale": "Desktop Text Scale: only applies on wider screens (≥ 768 px). Mobile sizing is unchanged.",
      "mainView": "Choose what the card shows. Hourly shows today's hourly forecast. History compares the last 7 days of forecast and actual generation.",
      "fontSize": "Optional daily bar text size in pixels. Leave blank to use CSS/default styling.",
      "barWidth": "Optional forecast bar width in pixels. Leave blank to use CSS/default styling."
    },
    "warnings": {
      "manualEntities": "Changing device will not overwrite manually configured entities."
    },
    "arrays": {
      "entity": "Array entity",
      "label": "Label (1 char)",
      "placeholder": "E",
      "hint": "bar & popup",
      "remove": "Remove",
      "add": "Add array"
    }
  },
  "customCard": {
    "name": "Solar Forecast Card",
    "description": "Daily solar energy forecast with hourly breakdown support."
  }
}
;

var sk = {
  "day": {
    "today": "Dnes",
    "tomorrow": "Zajtra",
    "sunday_short": "ne",
    "monday_short": "po",
    "tuesday_short": "ut",
    "wednesday_short": "st",
    "thursday_short": "št",
    "friday_short": "pi",
    "saturday_short": "so"
  },
  "card": {
    "defaultTitle": "Solárna predpoveď",
    "placeholder": "No forecast entities configured.",
    "placeholderAction": "Open the card editor to get started.",
    "twoDayNote": "2-day forecast available",
    "labels": {
      "live": "NAŽIVO:",
      "exportRate": "VÝKUPNÝ TARIF:",
      "nextHour": "+1 H:",
      "left": "ZOSTÁVA:",
      "week": "TÝŽDEŇ:",
      "avg": "PRIEM.:",
      "total": "Celkom",
      "p10": "P10",
      "forecast": "predpoveď",
      "generated": "vyrobené"
    },
    "days": {
      "today": "Today"
    },
    "popup": {
      "close": "Close",
      "noForecastData": "No forecast data",
      "noHourlyData": "No hourly data available for this day.",
      "integrationNoHourlyData": "The selected forecast entities do not provide hourly forecast data.",
      "chart": {
        "time": "Time",
        "power": "Power",
        "kwh": "kWh",
        "forecastShort": "Fcst",
        "actualShort": "Act."
      }
    },
    "history": {
      "title": "Last 7 days",
      "forecast": "Forecast",
      "actual": "Actual",
      "accuracy": "Accuracy",
      "averageMiss": "Average miss per day",
      "bias": "Actual vs forecast per day",
      "readout": "{day}: forecast {forecast}, actual {actual} kWh ({difference})",
      "noActual": "{day}: forecast {forecast} kWh, no recorded generation",
      "noForecast": "{day}: no recorded forecast",
      "loading": "Loading forecast history…",
      "noData": "No forecast history found. Home Assistant needs to have recorded the forecast sensor for at least one full day."
    },
    "aria": {
      "dayButton": "{day} {date}"
    },
    "errors": {
      "invalidConfig": "Invalid configuration"
    },
    "units": {
      "watts": "W",
      "kilowatts": "kW",
      "kilowattHours": "kWh",
      "kilowattHoursPerDay": "kWh/day"
    }
  },
  "editor": {
    "labels": {
      "title": "Title (optional)",
      "icon": "Header icon (optional, e.g. mdi:solar-power)",
      "show_header": "Show header",
      "display_estimate10": "Display Estimate10 Forecast Values",
      "device_id": "Forecast Device",
      "integration_type": "Integration Type",
      "forecast_entity_0": "Day 1 — Today",
      "forecast_entity_1": "Day 2 — Tomorrow",
      "forecast_entity_2": "Day 3",
      "forecast_entity_3": "Day 4",
      "forecast_entity_4": "Day 5",
      "forecast_entity_5": "Day 6",
      "forecast_entity_6": "Day 7",
      "export_rate_entity": "Current Export Rate Entity",
      "live_power_entity": "Live power (optional, kW sensor)",
      "today_actual_entity": "Today's actual generation (optional)",
      "next_hour_entity": "+1HR forecast (optional, overrides auto-derived value)",
      "remaining_today_entity": "LEFT / remaining today (optional, overrides auto-derived value)",
      "main_view": "Main View",
      "inverter_max_kw": "Inverter max output (kW)",
      "solar_max_kwp": "Solar array size (kWp)",
      "low_threshold": "Low threshold (kWh)",
      "high_threshold": "High threshold (kWh)",
      "low_threshold_entity": "Low threshold sensor (optional, kWh)",
      "high_threshold_entity": "High threshold sensor (optional, kWh)",
      "show_low_threshold_zone": "Tint bar track below low threshold",
      "show_high_threshold_zone": "Tint bar track above high threshold",
      "threshold_zone_opacity": "Threshold tint opacity (lower is more transparent)",
      "desktop_text_scale": "Desktop Text Scale",
      "font_size": "Font Size",
      "bar_width": "Bar Width"
    },
    "options": {
      "autoDetect": "Auto-detect",
      "solcast": "Solcast",
      "volcast": "Volcast",
      "forecastSolar": "Forecast.Solar",
      "openMeteo": "Open-Meteo Solar Forecast",
      "mainViewDaily": "Daily",
      "mainViewHourly": "Hourly",
      "mainViewHistory": "History"
    },
    "sections": {
      "integrationType": "Integration Type",
      "dailyForecastEntities": "Daily Forecast Entities",
      "liveData": "Live Data",
      "actualGenerationArrays": "Actual Generation Arrays",
      "systemParameters": "System Parameters",
      "energyProvider": "Energy Provider",
      "colourThresholds": "Colour Thresholds",
      "dateTimeDisplay": "Display"
    },
    "helpers": {
      "device": "Recommended: selecting a device will auto-configure the card",
      "estimate10": "Display Estimate10 is only applicable when the integration type is Solcast",
      "integrationType": "Automatically set when a forecast device is selected above. Override here only when configuring forecast entities manually without a device.",
      "liveData": "+1HR and LEFT are auto-detected or auto-derived where possible. Set these manually to override, or to use a custom sensor.",
      "actualArrays": "Optional: configure individual array sensors to display a stacked breakdown on today's bar. Each label is a single character shown inside its segment (e.g. N, S, E).",
      "desktopTextScale": "Desktop Text Scale: only applies on wider screens (≥ 768 px). Mobile sizing is unchanged.",
      "mainView": "Choose what the card shows. Hourly shows today's hourly forecast. History compares the last 7 days of forecast and actual generation.",
      "fontSize": "Optional daily bar text size in pixels. Leave blank to use CSS/default styling.",
      "barWidth": "Optional forecast bar width in pixels. Leave blank to use CSS/default styling."
    },
    "warnings": {
      "manualEntities": "Changing device will not overwrite manually configured entities."
    },
    "arrays": {
      "entity": "Array entity",
      "label": "Label (1 char)",
      "placeholder": "E",
      "hint": "bar & popup",
      "remove": "Remove",
      "add": "Add array"
    }
  },
  "customCard": {
    "name": "Solar Forecast Card",
    "description": "Daily solar energy forecast with hourly breakdown support."
  }
}
;

var sl = {
  "day": {
    "today": "Danes",
    "tomorrow": "Jutri",
    "sunday_short": "ned",
    "monday_short": "pon",
    "tuesday_short": "tor",
    "wednesday_short": "sre",
    "thursday_short": "čet",
    "friday_short": "pet",
    "saturday_short": "sob"
  },
  "card": {
    "defaultTitle": "Sončna napoved",
    "placeholder": "No forecast entities configured.",
    "placeholderAction": "Open the card editor to get started.",
    "twoDayNote": "2-day forecast available",
    "labels": {
      "live": "V ŽIVO:",
      "exportRate": "IZVOZNA TARIFA:",
      "nextHour": "+1 H:",
      "left": "OSTALO:",
      "week": "TEDEN:",
      "avg": "POVP.:",
      "total": "Skupaj",
      "p10": "P10",
      "forecast": "napoved",
      "generated": "proizvedeno"
    },
    "days": {
      "today": "Today"
    },
    "popup": {
      "close": "Close",
      "noForecastData": "No forecast data",
      "noHourlyData": "No hourly data available for this day.",
      "integrationNoHourlyData": "The selected forecast entities do not provide hourly forecast data.",
      "chart": {
        "time": "Time",
        "power": "Power",
        "kwh": "kWh",
        "forecastShort": "Fcst",
        "actualShort": "Act."
      }
    },
    "history": {
      "title": "Last 7 days",
      "forecast": "Forecast",
      "actual": "Actual",
      "accuracy": "Accuracy",
      "averageMiss": "Average miss per day",
      "bias": "Actual vs forecast per day",
      "readout": "{day}: forecast {forecast}, actual {actual} kWh ({difference})",
      "noActual": "{day}: forecast {forecast} kWh, no recorded generation",
      "noForecast": "{day}: no recorded forecast",
      "loading": "Loading forecast history…",
      "noData": "No forecast history found. Home Assistant needs to have recorded the forecast sensor for at least one full day."
    },
    "aria": {
      "dayButton": "{day} {date}"
    },
    "errors": {
      "invalidConfig": "Invalid configuration"
    },
    "units": {
      "watts": "W",
      "kilowatts": "kW",
      "kilowattHours": "kWh",
      "kilowattHoursPerDay": "kWh/day"
    }
  },
  "editor": {
    "labels": {
      "title": "Title (optional)",
      "icon": "Header icon (optional, e.g. mdi:solar-power)",
      "show_header": "Show header",
      "display_estimate10": "Display Estimate10 Forecast Values",
      "device_id": "Forecast Device",
      "integration_type": "Integration Type",
      "forecast_entity_0": "Day 1 — Today",
      "forecast_entity_1": "Day 2 — Tomorrow",
      "forecast_entity_2": "Day 3",
      "forecast_entity_3": "Day 4",
      "forecast_entity_4": "Day 5",
      "forecast_entity_5": "Day 6",
      "forecast_entity_6": "Day 7",
      "export_rate_entity": "Current Export Rate Entity",
      "live_power_entity": "Live power (optional, kW sensor)",
      "today_actual_entity": "Today's actual generation (optional)",
      "next_hour_entity": "+1HR forecast (optional, overrides auto-derived value)",
      "remaining_today_entity": "LEFT / remaining today (optional, overrides auto-derived value)",
      "main_view": "Main View",
      "inverter_max_kw": "Inverter max output (kW)",
      "solar_max_kwp": "Solar array size (kWp)",
      "low_threshold": "Low threshold (kWh)",
      "high_threshold": "High threshold (kWh)",
      "low_threshold_entity": "Low threshold sensor (optional, kWh)",
      "high_threshold_entity": "High threshold sensor (optional, kWh)",
      "show_low_threshold_zone": "Tint bar track below low threshold",
      "show_high_threshold_zone": "Tint bar track above high threshold",
      "threshold_zone_opacity": "Threshold tint opacity (lower is more transparent)",
      "desktop_text_scale": "Desktop Text Scale",
      "font_size": "Font Size",
      "bar_width": "Bar Width"
    },
    "options": {
      "autoDetect": "Auto-detect",
      "solcast": "Solcast",
      "volcast": "Volcast",
      "forecastSolar": "Forecast.Solar",
      "openMeteo": "Open-Meteo Solar Forecast",
      "mainViewDaily": "Daily",
      "mainViewHourly": "Hourly",
      "mainViewHistory": "History"
    },
    "sections": {
      "integrationType": "Integration Type",
      "dailyForecastEntities": "Daily Forecast Entities",
      "liveData": "Live Data",
      "actualGenerationArrays": "Actual Generation Arrays",
      "systemParameters": "System Parameters",
      "energyProvider": "Energy Provider",
      "colourThresholds": "Colour Thresholds",
      "dateTimeDisplay": "Display"
    },
    "helpers": {
      "device": "Recommended: selecting a device will auto-configure the card",
      "estimate10": "Display Estimate10 is only applicable when the integration type is Solcast",
      "integrationType": "Automatically set when a forecast device is selected above. Override here only when configuring forecast entities manually without a device.",
      "liveData": "+1HR and LEFT are auto-detected or auto-derived where possible. Set these manually to override, or to use a custom sensor.",
      "actualArrays": "Optional: configure individual array sensors to display a stacked breakdown on today's bar. Each label is a single character shown inside its segment (e.g. N, S, E).",
      "desktopTextScale": "Desktop Text Scale: only applies on wider screens (≥ 768 px). Mobile sizing is unchanged.",
      "mainView": "Choose what the card shows. Hourly shows today's hourly forecast. History compares the last 7 days of forecast and actual generation.",
      "fontSize": "Optional daily bar text size in pixels. Leave blank to use CSS/default styling.",
      "barWidth": "Optional forecast bar width in pixels. Leave blank to use CSS/default styling."
    },
    "warnings": {
      "manualEntities": "Changing device will not overwrite manually configured entities."
    },
    "arrays": {
      "entity": "Array entity",
      "label": "Label (1 char)",
      "placeholder": "E",
      "hint": "bar & popup",
      "remove": "Remove",
      "add": "Add array"
    }
  },
  "customCard": {
    "name": "Solar Forecast Card",
    "description": "Daily solar energy forecast with hourly breakdown support."
  }
}
;

var sr = {
  "day": {
    "today": "Данас",
    "tomorrow": "Сутра",
    "sunday_short": "нед",
    "monday_short": "пон",
    "tuesday_short": "уто",
    "wednesday_short": "сре",
    "thursday_short": "чет",
    "friday_short": "пет",
    "saturday_short": "суб"
  },
  "card": {
    "defaultTitle": "Соларна прогноза",
    "placeholder": "No forecast entities configured.",
    "placeholderAction": "Open the card editor to get started.",
    "twoDayNote": "2-day forecast available",
    "labels": {
      "live": "УЖИВО:",
      "exportRate": "ИЗВОЗНА ТАРИФА:",
      "nextHour": "+1 Ч:",
      "left": "ПРЕОСТАЛО:",
      "week": "НЕДЕЉА:",
      "avg": "ПРОСЕК:",
      "total": "Укупно",
      "p10": "P10",
      "forecast": "прогноза",
      "generated": "произведено"
    },
    "days": {
      "today": "Today"
    },
    "popup": {
      "close": "Close",
      "noForecastData": "No forecast data",
      "noHourlyData": "No hourly data available for this day.",
      "integrationNoHourlyData": "The selected forecast entities do not provide hourly forecast data.",
      "chart": {
        "time": "Time",
        "power": "Power",
        "kwh": "kWh",
        "forecastShort": "Fcst",
        "actualShort": "Act."
      }
    },
    "history": {
      "title": "Last 7 days",
      "forecast": "Forecast",
      "actual": "Actual",
      "accuracy": "Accuracy",
      "averageMiss": "Average miss per day",
      "bias": "Actual vs forecast per day",
      "readout": "{day}: forecast {forecast}, actual {actual} kWh ({difference})",
      "noActual": "{day}: forecast {forecast} kWh, no recorded generation",
      "noForecast": "{day}: no recorded forecast",
      "loading": "Loading forecast history…",
      "noData": "No forecast history found. Home Assistant needs to have recorded the forecast sensor for at least one full day."
    },
    "aria": {
      "dayButton": "{day} {date}"
    },
    "errors": {
      "invalidConfig": "Invalid configuration"
    },
    "units": {
      "watts": "W",
      "kilowatts": "kW",
      "kilowattHours": "kWh",
      "kilowattHoursPerDay": "kWh/day"
    }
  },
  "editor": {
    "labels": {
      "title": "Title (optional)",
      "icon": "Header icon (optional, e.g. mdi:solar-power)",
      "show_header": "Show header",
      "display_estimate10": "Display Estimate10 Forecast Values",
      "device_id": "Forecast Device",
      "integration_type": "Integration Type",
      "forecast_entity_0": "Day 1 — Today",
      "forecast_entity_1": "Day 2 — Tomorrow",
      "forecast_entity_2": "Day 3",
      "forecast_entity_3": "Day 4",
      "forecast_entity_4": "Day 5",
      "forecast_entity_5": "Day 6",
      "forecast_entity_6": "Day 7",
      "export_rate_entity": "Current Export Rate Entity",
      "live_power_entity": "Live power (optional, kW sensor)",
      "today_actual_entity": "Today's actual generation (optional)",
      "next_hour_entity": "+1HR forecast (optional, overrides auto-derived value)",
      "remaining_today_entity": "LEFT / remaining today (optional, overrides auto-derived value)",
      "main_view": "Main View",
      "inverter_max_kw": "Inverter max output (kW)",
      "solar_max_kwp": "Solar array size (kWp)",
      "low_threshold": "Low threshold (kWh)",
      "high_threshold": "High threshold (kWh)",
      "low_threshold_entity": "Low threshold sensor (optional, kWh)",
      "high_threshold_entity": "High threshold sensor (optional, kWh)",
      "show_low_threshold_zone": "Tint bar track below low threshold",
      "show_high_threshold_zone": "Tint bar track above high threshold",
      "threshold_zone_opacity": "Threshold tint opacity (lower is more transparent)",
      "desktop_text_scale": "Desktop Text Scale",
      "font_size": "Font Size",
      "bar_width": "Bar Width"
    },
    "options": {
      "autoDetect": "Auto-detect",
      "solcast": "Solcast",
      "volcast": "Volcast",
      "forecastSolar": "Forecast.Solar",
      "openMeteo": "Open-Meteo Solar Forecast",
      "mainViewDaily": "Daily",
      "mainViewHourly": "Hourly",
      "mainViewHistory": "History"
    },
    "sections": {
      "integrationType": "Integration Type",
      "dailyForecastEntities": "Daily Forecast Entities",
      "liveData": "Live Data",
      "actualGenerationArrays": "Actual Generation Arrays",
      "systemParameters": "System Parameters",
      "energyProvider": "Energy Provider",
      "colourThresholds": "Colour Thresholds",
      "dateTimeDisplay": "Display"
    },
    "helpers": {
      "device": "Recommended: selecting a device will auto-configure the card",
      "estimate10": "Display Estimate10 is only applicable when the integration type is Solcast",
      "integrationType": "Automatically set when a forecast device is selected above. Override here only when configuring forecast entities manually without a device.",
      "liveData": "+1HR and LEFT are auto-detected or auto-derived where possible. Set these manually to override, or to use a custom sensor.",
      "actualArrays": "Optional: configure individual array sensors to display a stacked breakdown on today's bar. Each label is a single character shown inside its segment (e.g. N, S, E).",
      "desktopTextScale": "Desktop Text Scale: only applies on wider screens (≥ 768 px). Mobile sizing is unchanged.",
      "mainView": "Choose what the card shows. Hourly shows today's hourly forecast. History compares the last 7 days of forecast and actual generation.",
      "fontSize": "Optional daily bar text size in pixels. Leave blank to use CSS/default styling.",
      "barWidth": "Optional forecast bar width in pixels. Leave blank to use CSS/default styling."
    },
    "warnings": {
      "manualEntities": "Changing device will not overwrite manually configured entities."
    },
    "arrays": {
      "entity": "Array entity",
      "label": "Label (1 char)",
      "placeholder": "E",
      "hint": "bar & popup",
      "remove": "Remove",
      "add": "Add array"
    }
  },
  "customCard": {
    "name": "Solar Forecast Card",
    "description": "Daily solar energy forecast with hourly breakdown support."
  }
}
;

var sr_Latn = {
  "day": {
    "today": "Danas",
    "tomorrow": "Sutra",
    "sunday_short": "ned",
    "monday_short": "pon",
    "tuesday_short": "uto",
    "wednesday_short": "sre",
    "thursday_short": "čet",
    "friday_short": "pet",
    "saturday_short": "sub"
  },
  "card": {
    "defaultTitle": "Solarna prognoza",
    "placeholder": "No forecast entities configured.",
    "placeholderAction": "Open the card editor to get started.",
    "twoDayNote": "2-day forecast available",
    "labels": {
      "live": "UŽIVO:",
      "exportRate": "IZVOZNA TARIFA:",
      "nextHour": "+1 H:",
      "left": "PREOSTALO:",
      "week": "NEDELJA:",
      "avg": "PROSEK:",
      "total": "Ukupno",
      "p10": "P10",
      "forecast": "prognoza",
      "generated": "proizvedeno"
    },
    "days": {
      "today": "Today"
    },
    "popup": {
      "close": "Close",
      "noForecastData": "No forecast data",
      "noHourlyData": "No hourly data available for this day.",
      "integrationNoHourlyData": "The selected forecast entities do not provide hourly forecast data.",
      "chart": {
        "time": "Time",
        "power": "Power",
        "kwh": "kWh",
        "forecastShort": "Fcst",
        "actualShort": "Act."
      }
    },
    "history": {
      "title": "Last 7 days",
      "forecast": "Forecast",
      "actual": "Actual",
      "accuracy": "Accuracy",
      "averageMiss": "Average miss per day",
      "bias": "Actual vs forecast per day",
      "readout": "{day}: forecast {forecast}, actual {actual} kWh ({difference})",
      "noActual": "{day}: forecast {forecast} kWh, no recorded generation",
      "noForecast": "{day}: no recorded forecast",
      "loading": "Loading forecast history…",
      "noData": "No forecast history found. Home Assistant needs to have recorded the forecast sensor for at least one full day."
    },
    "aria": {
      "dayButton": "{day} {date}"
    },
    "errors": {
      "invalidConfig": "Invalid configuration"
    },
    "units": {
      "watts": "W",
      "kilowatts": "kW",
      "kilowattHours": "kWh",
      "kilowattHoursPerDay": "kWh/day"
    }
  },
  "editor": {
    "labels": {
      "title": "Title (optional)",
      "icon": "Header icon (optional, e.g. mdi:solar-power)",
      "show_header": "Show header",
      "display_estimate10": "Display Estimate10 Forecast Values",
      "device_id": "Forecast Device",
      "integration_type": "Integration Type",
      "forecast_entity_0": "Day 1 — Today",
      "forecast_entity_1": "Day 2 — Tomorrow",
      "forecast_entity_2": "Day 3",
      "forecast_entity_3": "Day 4",
      "forecast_entity_4": "Day 5",
      "forecast_entity_5": "Day 6",
      "forecast_entity_6": "Day 7",
      "export_rate_entity": "Current Export Rate Entity",
      "live_power_entity": "Live power (optional, kW sensor)",
      "today_actual_entity": "Today's actual generation (optional)",
      "next_hour_entity": "+1HR forecast (optional, overrides auto-derived value)",
      "remaining_today_entity": "LEFT / remaining today (optional, overrides auto-derived value)",
      "main_view": "Main View",
      "inverter_max_kw": "Inverter max output (kW)",
      "solar_max_kwp": "Solar array size (kWp)",
      "low_threshold": "Low threshold (kWh)",
      "high_threshold": "High threshold (kWh)",
      "low_threshold_entity": "Low threshold sensor (optional, kWh)",
      "high_threshold_entity": "High threshold sensor (optional, kWh)",
      "show_low_threshold_zone": "Tint bar track below low threshold",
      "show_high_threshold_zone": "Tint bar track above high threshold",
      "threshold_zone_opacity": "Threshold tint opacity (lower is more transparent)",
      "desktop_text_scale": "Desktop Text Scale",
      "font_size": "Font Size",
      "bar_width": "Bar Width"
    },
    "options": {
      "autoDetect": "Auto-detect",
      "solcast": "Solcast",
      "volcast": "Volcast",
      "forecastSolar": "Forecast.Solar",
      "openMeteo": "Open-Meteo Solar Forecast",
      "mainViewDaily": "Daily",
      "mainViewHourly": "Hourly",
      "mainViewHistory": "History"
    },
    "sections": {
      "integrationType": "Integration Type",
      "dailyForecastEntities": "Daily Forecast Entities",
      "liveData": "Live Data",
      "actualGenerationArrays": "Actual Generation Arrays",
      "systemParameters": "System Parameters",
      "energyProvider": "Energy Provider",
      "colourThresholds": "Colour Thresholds",
      "dateTimeDisplay": "Display"
    },
    "helpers": {
      "device": "Recommended: selecting a device will auto-configure the card",
      "estimate10": "Display Estimate10 is only applicable when the integration type is Solcast",
      "integrationType": "Automatically set when a forecast device is selected above. Override here only when configuring forecast entities manually without a device.",
      "liveData": "+1HR and LEFT are auto-detected or auto-derived where possible. Set these manually to override, or to use a custom sensor.",
      "actualArrays": "Optional: configure individual array sensors to display a stacked breakdown on today's bar. Each label is a single character shown inside its segment (e.g. N, S, E).",
      "desktopTextScale": "Desktop Text Scale: only applies on wider screens (≥ 768 px). Mobile sizing is unchanged.",
      "mainView": "Choose what the card shows. Hourly shows today's hourly forecast. History compares the last 7 days of forecast and actual generation.",
      "fontSize": "Optional daily bar text size in pixels. Leave blank to use CSS/default styling.",
      "barWidth": "Optional forecast bar width in pixels. Leave blank to use CSS/default styling."
    },
    "warnings": {
      "manualEntities": "Changing device will not overwrite manually configured entities."
    },
    "arrays": {
      "entity": "Array entity",
      "label": "Label (1 char)",
      "placeholder": "E",
      "hint": "bar & popup",
      "remove": "Remove",
      "add": "Add array"
    }
  },
  "customCard": {
    "name": "Solar Forecast Card",
    "description": "Daily solar energy forecast with hourly breakdown support."
  }
}
;

var sv = {
  "day": {
    "today": "Idag",
    "tomorrow": "Imorgon",
    "sunday_short": "sön",
    "monday_short": "mån",
    "tuesday_short": "tis",
    "wednesday_short": "ons",
    "thursday_short": "tors",
    "friday_short": "fre",
    "saturday_short": "lör"
  },
  "card": {
    "defaultTitle": "Solprognos",
    "placeholder": "No forecast entities configured.",
    "placeholderAction": "Open the card editor to get started.",
    "twoDayNote": "2-day forecast available",
    "labels": {
      "live": "LIVE:",
      "exportRate": "EXPORTTARIFF:",
      "nextHour": "+1 H:",
      "left": "KVAR:",
      "week": "VECKA:",
      "avg": "SNITT:",
      "total": "Totalt",
      "p10": "P10",
      "forecast": "prognos",
      "generated": "producerat"
    },
    "days": {
      "today": "Today"
    },
    "popup": {
      "close": "Close",
      "noForecastData": "No forecast data",
      "noHourlyData": "No hourly data available for this day.",
      "integrationNoHourlyData": "The selected forecast entities do not provide hourly forecast data.",
      "chart": {
        "time": "Time",
        "power": "Power",
        "kwh": "kWh",
        "forecastShort": "Fcst",
        "actualShort": "Act."
      }
    },
    "history": {
      "title": "Last 7 days",
      "forecast": "Forecast",
      "actual": "Actual",
      "accuracy": "Accuracy",
      "averageMiss": "Average miss per day",
      "bias": "Actual vs forecast per day",
      "readout": "{day}: forecast {forecast}, actual {actual} kWh ({difference})",
      "noActual": "{day}: forecast {forecast} kWh, no recorded generation",
      "noForecast": "{day}: no recorded forecast",
      "loading": "Loading forecast history…",
      "noData": "No forecast history found. Home Assistant needs to have recorded the forecast sensor for at least one full day."
    },
    "aria": {
      "dayButton": "{day} {date}"
    },
    "errors": {
      "invalidConfig": "Invalid configuration"
    },
    "units": {
      "watts": "W",
      "kilowatts": "kW",
      "kilowattHours": "kWh",
      "kilowattHoursPerDay": "kWh/day"
    }
  },
  "editor": {
    "labels": {
      "title": "Title (optional)",
      "icon": "Header icon (optional, e.g. mdi:solar-power)",
      "show_header": "Show header",
      "display_estimate10": "Display Estimate10 Forecast Values",
      "device_id": "Forecast Device",
      "integration_type": "Integration Type",
      "forecast_entity_0": "Day 1 — Today",
      "forecast_entity_1": "Day 2 — Tomorrow",
      "forecast_entity_2": "Day 3",
      "forecast_entity_3": "Day 4",
      "forecast_entity_4": "Day 5",
      "forecast_entity_5": "Day 6",
      "forecast_entity_6": "Day 7",
      "export_rate_entity": "Current Export Rate Entity",
      "live_power_entity": "Live power (optional, kW sensor)",
      "today_actual_entity": "Today's actual generation (optional)",
      "next_hour_entity": "+1HR forecast (optional, overrides auto-derived value)",
      "remaining_today_entity": "LEFT / remaining today (optional, overrides auto-derived value)",
      "main_view": "Main View",
      "inverter_max_kw": "Inverter max output (kW)",
      "solar_max_kwp": "Solar array size (kWp)",
      "low_threshold": "Low threshold (kWh)",
      "high_threshold": "High threshold (kWh)",
      "low_threshold_entity": "Low threshold sensor (optional, kWh)",
      "high_threshold_entity": "High threshold sensor (optional, kWh)",
      "show_low_threshold_zone": "Tint bar track below low threshold",
      "show_high_threshold_zone": "Tint bar track above high threshold",
      "threshold_zone_opacity": "Threshold tint opacity (lower is more transparent)",
      "desktop_text_scale": "Desktop Text Scale",
      "font_size": "Font Size",
      "bar_width": "Bar Width"
    },
    "options": {
      "autoDetect": "Auto-detect",
      "solcast": "Solcast",
      "volcast": "Volcast",
      "forecastSolar": "Forecast.Solar",
      "openMeteo": "Open-Meteo Solar Forecast",
      "mainViewDaily": "Daily",
      "mainViewHourly": "Hourly",
      "mainViewHistory": "History"
    },
    "sections": {
      "integrationType": "Integration Type",
      "dailyForecastEntities": "Daily Forecast Entities",
      "liveData": "Live Data",
      "actualGenerationArrays": "Actual Generation Arrays",
      "systemParameters": "System Parameters",
      "energyProvider": "Energy Provider",
      "colourThresholds": "Colour Thresholds",
      "dateTimeDisplay": "Display"
    },
    "helpers": {
      "device": "Recommended: selecting a device will auto-configure the card",
      "estimate10": "Display Estimate10 is only applicable when the integration type is Solcast",
      "integrationType": "Automatically set when a forecast device is selected above. Override here only when configuring forecast entities manually without a device.",
      "liveData": "+1HR and LEFT are auto-detected or auto-derived where possible. Set these manually to override, or to use a custom sensor.",
      "actualArrays": "Optional: configure individual array sensors to display a stacked breakdown on today's bar. Each label is a single character shown inside its segment (e.g. N, S, E).",
      "desktopTextScale": "Desktop Text Scale: only applies on wider screens (≥ 768 px). Mobile sizing is unchanged.",
      "mainView": "Choose what the card shows. Hourly shows today's hourly forecast. History compares the last 7 days of forecast and actual generation.",
      "fontSize": "Optional daily bar text size in pixels. Leave blank to use CSS/default styling.",
      "barWidth": "Optional forecast bar width in pixels. Leave blank to use CSS/default styling."
    },
    "warnings": {
      "manualEntities": "Changing device will not overwrite manually configured entities."
    },
    "arrays": {
      "entity": "Array entity",
      "label": "Label (1 char)",
      "placeholder": "E",
      "hint": "bar & popup",
      "remove": "Remove",
      "add": "Add array"
    }
  },
  "customCard": {
    "name": "Solar Forecast Card",
    "description": "Daily solar energy forecast with hourly breakdown support."
  }
}
;

var sq = {
  "day": {
    "today": "Sot",
    "tomorrow": "Nesër",
    "sunday_short": "die",
    "monday_short": "hën",
    "tuesday_short": "mar",
    "wednesday_short": "mër",
    "thursday_short": "enj",
    "friday_short": "pre",
    "saturday_short": "sht"
  },
  "card": {
    "defaultTitle": "Parashikimi diellor",
    "placeholder": "No forecast entities configured.",
    "placeholderAction": "Open the card editor to get started.",
    "twoDayNote": "2-day forecast available",
    "labels": {
      "live": "LIVE:",
      "exportRate": "TARIFA EKSPORTI:",
      "nextHour": "+1 O:",
      "left": "MBETUR:",
      "week": "JAVË:",
      "avg": "MES.:",
      "total": "Totali",
      "p10": "P10",
      "forecast": "parashikim",
      "generated": "prodhuar"
    },
    "days": {
      "today": "Today"
    },
    "popup": {
      "close": "Close",
      "noForecastData": "No forecast data",
      "noHourlyData": "No hourly data available for this day.",
      "integrationNoHourlyData": "The selected forecast entities do not provide hourly forecast data.",
      "chart": {
        "time": "Time",
        "power": "Power",
        "kwh": "kWh",
        "forecastShort": "Fcst",
        "actualShort": "Act."
      }
    },
    "history": {
      "title": "Last 7 days",
      "forecast": "Forecast",
      "actual": "Actual",
      "accuracy": "Accuracy",
      "averageMiss": "Average miss per day",
      "bias": "Actual vs forecast per day",
      "readout": "{day}: forecast {forecast}, actual {actual} kWh ({difference})",
      "noActual": "{day}: forecast {forecast} kWh, no recorded generation",
      "noForecast": "{day}: no recorded forecast",
      "loading": "Loading forecast history…",
      "noData": "No forecast history found. Home Assistant needs to have recorded the forecast sensor for at least one full day."
    },
    "aria": {
      "dayButton": "{day} {date}"
    },
    "errors": {
      "invalidConfig": "Invalid configuration"
    },
    "units": {
      "watts": "W",
      "kilowatts": "kW",
      "kilowattHours": "kWh",
      "kilowattHoursPerDay": "kWh/day"
    }
  },
  "editor": {
    "labels": {
      "title": "Title (optional)",
      "icon": "Header icon (optional, e.g. mdi:solar-power)",
      "show_header": "Show header",
      "display_estimate10": "Display Estimate10 Forecast Values",
      "device_id": "Forecast Device",
      "integration_type": "Integration Type",
      "forecast_entity_0": "Day 1 — Today",
      "forecast_entity_1": "Day 2 — Tomorrow",
      "forecast_entity_2": "Day 3",
      "forecast_entity_3": "Day 4",
      "forecast_entity_4": "Day 5",
      "forecast_entity_5": "Day 6",
      "forecast_entity_6": "Day 7",
      "export_rate_entity": "Current Export Rate Entity",
      "live_power_entity": "Live power (optional, kW sensor)",
      "today_actual_entity": "Today's actual generation (optional)",
      "next_hour_entity": "+1HR forecast (optional, overrides auto-derived value)",
      "remaining_today_entity": "LEFT / remaining today (optional, overrides auto-derived value)",
      "main_view": "Main View",
      "inverter_max_kw": "Inverter max output (kW)",
      "solar_max_kwp": "Solar array size (kWp)",
      "low_threshold": "Low threshold (kWh)",
      "high_threshold": "High threshold (kWh)",
      "low_threshold_entity": "Low threshold sensor (optional, kWh)",
      "high_threshold_entity": "High threshold sensor (optional, kWh)",
      "show_low_threshold_zone": "Tint bar track below low threshold",
      "show_high_threshold_zone": "Tint bar track above high threshold",
      "threshold_zone_opacity": "Threshold tint opacity (lower is more transparent)",
      "desktop_text_scale": "Desktop Text Scale",
      "font_size": "Font Size",
      "bar_width": "Bar Width"
    },
    "options": {
      "autoDetect": "Auto-detect",
      "solcast": "Solcast",
      "volcast": "Volcast",
      "forecastSolar": "Forecast.Solar",
      "openMeteo": "Open-Meteo Solar Forecast",
      "mainViewDaily": "Daily",
      "mainViewHourly": "Hourly",
      "mainViewHistory": "History"
    },
    "sections": {
      "integrationType": "Integration Type",
      "dailyForecastEntities": "Daily Forecast Entities",
      "liveData": "Live Data",
      "actualGenerationArrays": "Actual Generation Arrays",
      "systemParameters": "System Parameters",
      "energyProvider": "Energy Provider",
      "colourThresholds": "Colour Thresholds",
      "dateTimeDisplay": "Display"
    },
    "helpers": {
      "device": "Recommended: selecting a device will auto-configure the card",
      "estimate10": "Display Estimate10 is only applicable when the integration type is Solcast",
      "integrationType": "Automatically set when a forecast device is selected above. Override here only when configuring forecast entities manually without a device.",
      "liveData": "+1HR and LEFT are auto-detected or auto-derived where possible. Set these manually to override, or to use a custom sensor.",
      "actualArrays": "Optional: configure individual array sensors to display a stacked breakdown on today's bar. Each label is a single character shown inside its segment (e.g. N, S, E).",
      "desktopTextScale": "Desktop Text Scale: only applies on wider screens (≥ 768 px). Mobile sizing is unchanged.",
      "mainView": "Choose what the card shows. Hourly shows today's hourly forecast. History compares the last 7 days of forecast and actual generation.",
      "fontSize": "Optional daily bar text size in pixels. Leave blank to use CSS/default styling.",
      "barWidth": "Optional forecast bar width in pixels. Leave blank to use CSS/default styling."
    },
    "warnings": {
      "manualEntities": "Changing device will not overwrite manually configured entities."
    },
    "arrays": {
      "entity": "Array entity",
      "label": "Label (1 char)",
      "placeholder": "E",
      "hint": "bar & popup",
      "remove": "Remove",
      "add": "Add array"
    }
  },
  "customCard": {
    "name": "Solar Forecast Card",
    "description": "Daily solar energy forecast with hourly breakdown support."
  }
}
;

var ta = {
  "day": {
    "today": "இன்று",
    "tomorrow": "நாளை",
    "sunday_short": "ஞாயி",
    "monday_short": "திங்",
    "tuesday_short": "செவ்",
    "wednesday_short": "புத",
    "thursday_short": "வியா",
    "friday_short": "வெள்",
    "saturday_short": "சனி"
  },
  "card": {
    "defaultTitle": "சூரிய முன்னறிவிப்பு",
    "placeholder": "No forecast entities configured.",
    "placeholderAction": "Open the card editor to get started.",
    "twoDayNote": "2-day forecast available",
    "labels": {
      "live": "நேரலை:",
      "exportRate": "ஏற்றுமதி விகிதம்:",
      "nextHour": "+1 ம:",
      "left": "மீதம்:",
      "week": "வாரம்:",
      "avg": "சராசரி:",
      "total": "மொத்தம்",
      "p10": "P10",
      "forecast": "முன்னறிவிப்பு",
      "generated": "உற்பத்தி"
    },
    "days": {
      "today": "Today"
    },
    "popup": {
      "close": "Close",
      "noForecastData": "No forecast data",
      "noHourlyData": "No hourly data available for this day.",
      "integrationNoHourlyData": "The selected forecast entities do not provide hourly forecast data.",
      "chart": {
        "time": "Time",
        "power": "Power",
        "kwh": "kWh",
        "forecastShort": "Fcst",
        "actualShort": "Act."
      }
    },
    "history": {
      "title": "Last 7 days",
      "forecast": "Forecast",
      "actual": "Actual",
      "accuracy": "Accuracy",
      "averageMiss": "Average miss per day",
      "bias": "Actual vs forecast per day",
      "readout": "{day}: forecast {forecast}, actual {actual} kWh ({difference})",
      "noActual": "{day}: forecast {forecast} kWh, no recorded generation",
      "noForecast": "{day}: no recorded forecast",
      "loading": "Loading forecast history…",
      "noData": "No forecast history found. Home Assistant needs to have recorded the forecast sensor for at least one full day."
    },
    "aria": {
      "dayButton": "{day} {date}"
    },
    "errors": {
      "invalidConfig": "Invalid configuration"
    },
    "units": {
      "watts": "W",
      "kilowatts": "kW",
      "kilowattHours": "kWh",
      "kilowattHoursPerDay": "kWh/day"
    }
  },
  "editor": {
    "labels": {
      "title": "Title (optional)",
      "icon": "Header icon (optional, e.g. mdi:solar-power)",
      "show_header": "Show header",
      "display_estimate10": "Display Estimate10 Forecast Values",
      "device_id": "Forecast Device",
      "integration_type": "Integration Type",
      "forecast_entity_0": "Day 1 — Today",
      "forecast_entity_1": "Day 2 — Tomorrow",
      "forecast_entity_2": "Day 3",
      "forecast_entity_3": "Day 4",
      "forecast_entity_4": "Day 5",
      "forecast_entity_5": "Day 6",
      "forecast_entity_6": "Day 7",
      "export_rate_entity": "Current Export Rate Entity",
      "live_power_entity": "Live power (optional, kW sensor)",
      "today_actual_entity": "Today's actual generation (optional)",
      "next_hour_entity": "+1HR forecast (optional, overrides auto-derived value)",
      "remaining_today_entity": "LEFT / remaining today (optional, overrides auto-derived value)",
      "main_view": "Main View",
      "inverter_max_kw": "Inverter max output (kW)",
      "solar_max_kwp": "Solar array size (kWp)",
      "low_threshold": "Low threshold (kWh)",
      "high_threshold": "High threshold (kWh)",
      "low_threshold_entity": "Low threshold sensor (optional, kWh)",
      "high_threshold_entity": "High threshold sensor (optional, kWh)",
      "show_low_threshold_zone": "Tint bar track below low threshold",
      "show_high_threshold_zone": "Tint bar track above high threshold",
      "threshold_zone_opacity": "Threshold tint opacity (lower is more transparent)",
      "desktop_text_scale": "Desktop Text Scale",
      "font_size": "Font Size",
      "bar_width": "Bar Width"
    },
    "options": {
      "autoDetect": "Auto-detect",
      "solcast": "Solcast",
      "volcast": "Volcast",
      "forecastSolar": "Forecast.Solar",
      "openMeteo": "Open-Meteo Solar Forecast",
      "mainViewDaily": "Daily",
      "mainViewHourly": "Hourly",
      "mainViewHistory": "History"
    },
    "sections": {
      "integrationType": "Integration Type",
      "dailyForecastEntities": "Daily Forecast Entities",
      "liveData": "Live Data",
      "actualGenerationArrays": "Actual Generation Arrays",
      "systemParameters": "System Parameters",
      "energyProvider": "Energy Provider",
      "colourThresholds": "Colour Thresholds",
      "dateTimeDisplay": "Display"
    },
    "helpers": {
      "device": "Recommended: selecting a device will auto-configure the card",
      "estimate10": "Display Estimate10 is only applicable when the integration type is Solcast",
      "integrationType": "Automatically set when a forecast device is selected above. Override here only when configuring forecast entities manually without a device.",
      "liveData": "+1HR and LEFT are auto-detected or auto-derived where possible. Set these manually to override, or to use a custom sensor.",
      "actualArrays": "Optional: configure individual array sensors to display a stacked breakdown on today's bar. Each label is a single character shown inside its segment (e.g. N, S, E).",
      "desktopTextScale": "Desktop Text Scale: only applies on wider screens (≥ 768 px). Mobile sizing is unchanged.",
      "mainView": "Choose what the card shows. Hourly shows today's hourly forecast. History compares the last 7 days of forecast and actual generation.",
      "fontSize": "Optional daily bar text size in pixels. Leave blank to use CSS/default styling.",
      "barWidth": "Optional forecast bar width in pixels. Leave blank to use CSS/default styling."
    },
    "warnings": {
      "manualEntities": "Changing device will not overwrite manually configured entities."
    },
    "arrays": {
      "entity": "Array entity",
      "label": "Label (1 char)",
      "placeholder": "E",
      "hint": "bar & popup",
      "remove": "Remove",
      "add": "Add array"
    }
  },
  "customCard": {
    "name": "Solar Forecast Card",
    "description": "Daily solar energy forecast with hourly breakdown support."
  }
}
;

var te = {
  "day": {
    "today": "నేడు",
    "tomorrow": "రేపు",
    "sunday_short": "ఆది",
    "monday_short": "సోమ",
    "tuesday_short": "మంగళ",
    "wednesday_short": "బుధ",
    "thursday_short": "గురు",
    "friday_short": "శుక్ర",
    "saturday_short": "శని"
  },
  "card": {
    "defaultTitle": "సౌర అంచనా",
    "placeholder": "No forecast entities configured.",
    "placeholderAction": "Open the card editor to get started.",
    "twoDayNote": "2-day forecast available",
    "labels": {
      "live": "లైవ్:",
      "exportRate": "ఎగుమతి రేటు:",
      "nextHour": "+1 గం:",
      "left": "మిగిలింది:",
      "week": "వారం:",
      "avg": "సగటు:",
      "total": "మొత్తం",
      "p10": "P10",
      "forecast": "అంచనా",
      "generated": "ఉత్పత్తి"
    },
    "days": {
      "today": "Today"
    },
    "popup": {
      "close": "Close",
      "noForecastData": "No forecast data",
      "noHourlyData": "No hourly data available for this day.",
      "integrationNoHourlyData": "The selected forecast entities do not provide hourly forecast data.",
      "chart": {
        "time": "Time",
        "power": "Power",
        "kwh": "kWh",
        "forecastShort": "Fcst",
        "actualShort": "Act."
      }
    },
    "history": {
      "title": "Last 7 days",
      "forecast": "Forecast",
      "actual": "Actual",
      "accuracy": "Accuracy",
      "averageMiss": "Average miss per day",
      "bias": "Actual vs forecast per day",
      "readout": "{day}: forecast {forecast}, actual {actual} kWh ({difference})",
      "noActual": "{day}: forecast {forecast} kWh, no recorded generation",
      "noForecast": "{day}: no recorded forecast",
      "loading": "Loading forecast history…",
      "noData": "No forecast history found. Home Assistant needs to have recorded the forecast sensor for at least one full day."
    },
    "aria": {
      "dayButton": "{day} {date}"
    },
    "errors": {
      "invalidConfig": "Invalid configuration"
    },
    "units": {
      "watts": "W",
      "kilowatts": "kW",
      "kilowattHours": "kWh",
      "kilowattHoursPerDay": "kWh/day"
    }
  },
  "editor": {
    "labels": {
      "title": "Title (optional)",
      "icon": "Header icon (optional, e.g. mdi:solar-power)",
      "show_header": "Show header",
      "display_estimate10": "Display Estimate10 Forecast Values",
      "device_id": "Forecast Device",
      "integration_type": "Integration Type",
      "forecast_entity_0": "Day 1 — Today",
      "forecast_entity_1": "Day 2 — Tomorrow",
      "forecast_entity_2": "Day 3",
      "forecast_entity_3": "Day 4",
      "forecast_entity_4": "Day 5",
      "forecast_entity_5": "Day 6",
      "forecast_entity_6": "Day 7",
      "export_rate_entity": "Current Export Rate Entity",
      "live_power_entity": "Live power (optional, kW sensor)",
      "today_actual_entity": "Today's actual generation (optional)",
      "next_hour_entity": "+1HR forecast (optional, overrides auto-derived value)",
      "remaining_today_entity": "LEFT / remaining today (optional, overrides auto-derived value)",
      "main_view": "Main View",
      "inverter_max_kw": "Inverter max output (kW)",
      "solar_max_kwp": "Solar array size (kWp)",
      "low_threshold": "Low threshold (kWh)",
      "high_threshold": "High threshold (kWh)",
      "low_threshold_entity": "Low threshold sensor (optional, kWh)",
      "high_threshold_entity": "High threshold sensor (optional, kWh)",
      "show_low_threshold_zone": "Tint bar track below low threshold",
      "show_high_threshold_zone": "Tint bar track above high threshold",
      "threshold_zone_opacity": "Threshold tint opacity (lower is more transparent)",
      "desktop_text_scale": "Desktop Text Scale",
      "font_size": "Font Size",
      "bar_width": "Bar Width"
    },
    "options": {
      "autoDetect": "Auto-detect",
      "solcast": "Solcast",
      "volcast": "Volcast",
      "forecastSolar": "Forecast.Solar",
      "openMeteo": "Open-Meteo Solar Forecast",
      "mainViewDaily": "Daily",
      "mainViewHourly": "Hourly",
      "mainViewHistory": "History"
    },
    "sections": {
      "integrationType": "Integration Type",
      "dailyForecastEntities": "Daily Forecast Entities",
      "liveData": "Live Data",
      "actualGenerationArrays": "Actual Generation Arrays",
      "systemParameters": "System Parameters",
      "energyProvider": "Energy Provider",
      "colourThresholds": "Colour Thresholds",
      "dateTimeDisplay": "Display"
    },
    "helpers": {
      "device": "Recommended: selecting a device will auto-configure the card",
      "estimate10": "Display Estimate10 is only applicable when the integration type is Solcast",
      "integrationType": "Automatically set when a forecast device is selected above. Override here only when configuring forecast entities manually without a device.",
      "liveData": "+1HR and LEFT are auto-detected or auto-derived where possible. Set these manually to override, or to use a custom sensor.",
      "actualArrays": "Optional: configure individual array sensors to display a stacked breakdown on today's bar. Each label is a single character shown inside its segment (e.g. N, S, E).",
      "desktopTextScale": "Desktop Text Scale: only applies on wider screens (≥ 768 px). Mobile sizing is unchanged.",
      "mainView": "Choose what the card shows. Hourly shows today's hourly forecast. History compares the last 7 days of forecast and actual generation.",
      "fontSize": "Optional daily bar text size in pixels. Leave blank to use CSS/default styling.",
      "barWidth": "Optional forecast bar width in pixels. Leave blank to use CSS/default styling."
    },
    "warnings": {
      "manualEntities": "Changing device will not overwrite manually configured entities."
    },
    "arrays": {
      "entity": "Array entity",
      "label": "Label (1 char)",
      "placeholder": "E",
      "hint": "bar & popup",
      "remove": "Remove",
      "add": "Add array"
    }
  },
  "customCard": {
    "name": "Solar Forecast Card",
    "description": "Daily solar energy forecast with hourly breakdown support."
  }
}
;

var th = {
  "day": {
    "today": "วันนี้",
    "tomorrow": "พรุ่งนี้",
    "sunday_short": "อา",
    "monday_short": "จ",
    "tuesday_short": "อ",
    "wednesday_short": "พ",
    "thursday_short": "พฤ",
    "friday_short": "ศ",
    "saturday_short": "ส"
  },
  "card": {
    "defaultTitle": "พยากรณ์พลังงานแสงอาทิตย์",
    "placeholder": "No forecast entities configured.",
    "placeholderAction": "Open the card editor to get started.",
    "twoDayNote": "2-day forecast available",
    "labels": {
      "live": "สด:",
      "exportRate": "อัตราส่งออก:",
      "nextHour": "+1 ชม.:",
      "left": "เหลือ:",
      "week": "สัปดาห์:",
      "avg": "เฉลี่ย:",
      "total": "รวม",
      "p10": "P10",
      "forecast": "พยากรณ์",
      "generated": "ผลิตแล้ว"
    },
    "days": {
      "today": "Today"
    },
    "popup": {
      "close": "Close",
      "noForecastData": "No forecast data",
      "noHourlyData": "No hourly data available for this day.",
      "integrationNoHourlyData": "The selected forecast entities do not provide hourly forecast data.",
      "chart": {
        "time": "Time",
        "power": "Power",
        "kwh": "kWh",
        "forecastShort": "Fcst",
        "actualShort": "Act."
      }
    },
    "history": {
      "title": "Last 7 days",
      "forecast": "Forecast",
      "actual": "Actual",
      "accuracy": "Accuracy",
      "averageMiss": "Average miss per day",
      "bias": "Actual vs forecast per day",
      "readout": "{day}: forecast {forecast}, actual {actual} kWh ({difference})",
      "noActual": "{day}: forecast {forecast} kWh, no recorded generation",
      "noForecast": "{day}: no recorded forecast",
      "loading": "Loading forecast history…",
      "noData": "No forecast history found. Home Assistant needs to have recorded the forecast sensor for at least one full day."
    },
    "aria": {
      "dayButton": "{day} {date}"
    },
    "errors": {
      "invalidConfig": "Invalid configuration"
    },
    "units": {
      "watts": "W",
      "kilowatts": "kW",
      "kilowattHours": "kWh",
      "kilowattHoursPerDay": "kWh/day"
    }
  },
  "editor": {
    "labels": {
      "title": "Title (optional)",
      "icon": "Header icon (optional, e.g. mdi:solar-power)",
      "show_header": "Show header",
      "display_estimate10": "Display Estimate10 Forecast Values",
      "device_id": "Forecast Device",
      "integration_type": "Integration Type",
      "forecast_entity_0": "Day 1 — Today",
      "forecast_entity_1": "Day 2 — Tomorrow",
      "forecast_entity_2": "Day 3",
      "forecast_entity_3": "Day 4",
      "forecast_entity_4": "Day 5",
      "forecast_entity_5": "Day 6",
      "forecast_entity_6": "Day 7",
      "export_rate_entity": "Current Export Rate Entity",
      "live_power_entity": "Live power (optional, kW sensor)",
      "today_actual_entity": "Today's actual generation (optional)",
      "next_hour_entity": "+1HR forecast (optional, overrides auto-derived value)",
      "remaining_today_entity": "LEFT / remaining today (optional, overrides auto-derived value)",
      "main_view": "Main View",
      "inverter_max_kw": "Inverter max output (kW)",
      "solar_max_kwp": "Solar array size (kWp)",
      "low_threshold": "Low threshold (kWh)",
      "high_threshold": "High threshold (kWh)",
      "low_threshold_entity": "Low threshold sensor (optional, kWh)",
      "high_threshold_entity": "High threshold sensor (optional, kWh)",
      "show_low_threshold_zone": "Tint bar track below low threshold",
      "show_high_threshold_zone": "Tint bar track above high threshold",
      "threshold_zone_opacity": "Threshold tint opacity (lower is more transparent)",
      "desktop_text_scale": "Desktop Text Scale",
      "font_size": "Font Size",
      "bar_width": "Bar Width"
    },
    "options": {
      "autoDetect": "Auto-detect",
      "solcast": "Solcast",
      "volcast": "Volcast",
      "forecastSolar": "Forecast.Solar",
      "openMeteo": "Open-Meteo Solar Forecast",
      "mainViewDaily": "Daily",
      "mainViewHourly": "Hourly",
      "mainViewHistory": "History"
    },
    "sections": {
      "integrationType": "Integration Type",
      "dailyForecastEntities": "Daily Forecast Entities",
      "liveData": "Live Data",
      "actualGenerationArrays": "Actual Generation Arrays",
      "systemParameters": "System Parameters",
      "energyProvider": "Energy Provider",
      "colourThresholds": "Colour Thresholds",
      "dateTimeDisplay": "Display"
    },
    "helpers": {
      "device": "Recommended: selecting a device will auto-configure the card",
      "estimate10": "Display Estimate10 is only applicable when the integration type is Solcast",
      "integrationType": "Automatically set when a forecast device is selected above. Override here only when configuring forecast entities manually without a device.",
      "liveData": "+1HR and LEFT are auto-detected or auto-derived where possible. Set these manually to override, or to use a custom sensor.",
      "actualArrays": "Optional: configure individual array sensors to display a stacked breakdown on today's bar. Each label is a single character shown inside its segment (e.g. N, S, E).",
      "desktopTextScale": "Desktop Text Scale: only applies on wider screens (≥ 768 px). Mobile sizing is unchanged.",
      "mainView": "Choose what the card shows. Hourly shows today's hourly forecast. History compares the last 7 days of forecast and actual generation.",
      "fontSize": "Optional daily bar text size in pixels. Leave blank to use CSS/default styling.",
      "barWidth": "Optional forecast bar width in pixels. Leave blank to use CSS/default styling."
    },
    "warnings": {
      "manualEntities": "Changing device will not overwrite manually configured entities."
    },
    "arrays": {
      "entity": "Array entity",
      "label": "Label (1 char)",
      "placeholder": "E",
      "hint": "bar & popup",
      "remove": "Remove",
      "add": "Add array"
    }
  },
  "customCard": {
    "name": "Solar Forecast Card",
    "description": "Daily solar energy forecast with hourly breakdown support."
  }
}
;

var tr = {
  "day": {
    "today": "Bugün",
    "tomorrow": "Yarın",
    "sunday_short": "Paz",
    "monday_short": "Pzt",
    "tuesday_short": "Sal",
    "wednesday_short": "Çar",
    "thursday_short": "Per",
    "friday_short": "Cum",
    "saturday_short": "Cmt"
  },
  "card": {
    "defaultTitle": "Güneş tahmini",
    "placeholder": "No forecast entities configured.",
    "placeholderAction": "Open the card editor to get started.",
    "twoDayNote": "2-day forecast available",
    "labels": {
      "live": "CANLI:",
      "exportRate": "İHRACAT TARİFESİ:",
      "nextHour": "+1 SA:",
      "left": "KALAN:",
      "week": "HAFTA:",
      "avg": "ORT.:",
      "total": "Toplam",
      "p10": "P10",
      "forecast": "tahmin",
      "generated": "üretildi"
    },
    "days": {
      "today": "Today"
    },
    "popup": {
      "close": "Close",
      "noForecastData": "No forecast data",
      "noHourlyData": "No hourly data available for this day.",
      "integrationNoHourlyData": "The selected forecast entities do not provide hourly forecast data.",
      "chart": {
        "time": "Time",
        "power": "Power",
        "kwh": "kWh",
        "forecastShort": "Fcst",
        "actualShort": "Act."
      }
    },
    "history": {
      "title": "Last 7 days",
      "forecast": "Forecast",
      "actual": "Actual",
      "accuracy": "Accuracy",
      "averageMiss": "Average miss per day",
      "bias": "Actual vs forecast per day",
      "readout": "{day}: forecast {forecast}, actual {actual} kWh ({difference})",
      "noActual": "{day}: forecast {forecast} kWh, no recorded generation",
      "noForecast": "{day}: no recorded forecast",
      "loading": "Loading forecast history…",
      "noData": "No forecast history found. Home Assistant needs to have recorded the forecast sensor for at least one full day."
    },
    "aria": {
      "dayButton": "{day} {date}"
    },
    "errors": {
      "invalidConfig": "Invalid configuration"
    },
    "units": {
      "watts": "W",
      "kilowatts": "kW",
      "kilowattHours": "kWh",
      "kilowattHoursPerDay": "kWh/day"
    }
  },
  "editor": {
    "labels": {
      "title": "Title (optional)",
      "icon": "Header icon (optional, e.g. mdi:solar-power)",
      "show_header": "Show header",
      "display_estimate10": "Display Estimate10 Forecast Values",
      "device_id": "Forecast Device",
      "integration_type": "Integration Type",
      "forecast_entity_0": "Day 1 — Today",
      "forecast_entity_1": "Day 2 — Tomorrow",
      "forecast_entity_2": "Day 3",
      "forecast_entity_3": "Day 4",
      "forecast_entity_4": "Day 5",
      "forecast_entity_5": "Day 6",
      "forecast_entity_6": "Day 7",
      "export_rate_entity": "Current Export Rate Entity",
      "live_power_entity": "Live power (optional, kW sensor)",
      "today_actual_entity": "Today's actual generation (optional)",
      "next_hour_entity": "+1HR forecast (optional, overrides auto-derived value)",
      "remaining_today_entity": "LEFT / remaining today (optional, overrides auto-derived value)",
      "main_view": "Main View",
      "inverter_max_kw": "Inverter max output (kW)",
      "solar_max_kwp": "Solar array size (kWp)",
      "low_threshold": "Low threshold (kWh)",
      "high_threshold": "High threshold (kWh)",
      "low_threshold_entity": "Low threshold sensor (optional, kWh)",
      "high_threshold_entity": "High threshold sensor (optional, kWh)",
      "show_low_threshold_zone": "Tint bar track below low threshold",
      "show_high_threshold_zone": "Tint bar track above high threshold",
      "threshold_zone_opacity": "Threshold tint opacity (lower is more transparent)",
      "desktop_text_scale": "Desktop Text Scale",
      "font_size": "Font Size",
      "bar_width": "Bar Width"
    },
    "options": {
      "autoDetect": "Auto-detect",
      "solcast": "Solcast",
      "volcast": "Volcast",
      "forecastSolar": "Forecast.Solar",
      "openMeteo": "Open-Meteo Solar Forecast",
      "mainViewDaily": "Daily",
      "mainViewHourly": "Hourly",
      "mainViewHistory": "History"
    },
    "sections": {
      "integrationType": "Integration Type",
      "dailyForecastEntities": "Daily Forecast Entities",
      "liveData": "Live Data",
      "actualGenerationArrays": "Actual Generation Arrays",
      "systemParameters": "System Parameters",
      "energyProvider": "Energy Provider",
      "colourThresholds": "Colour Thresholds",
      "dateTimeDisplay": "Display"
    },
    "helpers": {
      "device": "Recommended: selecting a device will auto-configure the card",
      "estimate10": "Display Estimate10 is only applicable when the integration type is Solcast",
      "integrationType": "Automatically set when a forecast device is selected above. Override here only when configuring forecast entities manually without a device.",
      "liveData": "+1HR and LEFT are auto-detected or auto-derived where possible. Set these manually to override, or to use a custom sensor.",
      "actualArrays": "Optional: configure individual array sensors to display a stacked breakdown on today's bar. Each label is a single character shown inside its segment (e.g. N, S, E).",
      "desktopTextScale": "Desktop Text Scale: only applies on wider screens (≥ 768 px). Mobile sizing is unchanged.",
      "mainView": "Choose what the card shows. Hourly shows today's hourly forecast. History compares the last 7 days of forecast and actual generation.",
      "fontSize": "Optional daily bar text size in pixels. Leave blank to use CSS/default styling.",
      "barWidth": "Optional forecast bar width in pixels. Leave blank to use CSS/default styling."
    },
    "warnings": {
      "manualEntities": "Changing device will not overwrite manually configured entities."
    },
    "arrays": {
      "entity": "Array entity",
      "label": "Label (1 char)",
      "placeholder": "E",
      "hint": "bar & popup",
      "remove": "Remove",
      "add": "Add array"
    }
  },
  "customCard": {
    "name": "Solar Forecast Card",
    "description": "Daily solar energy forecast with hourly breakdown support."
  }
}
;

var uk = {
  "day": {
    "today": "Сьогодні",
    "tomorrow": "Завтра",
    "sunday_short": "нд",
    "monday_short": "пн",
    "tuesday_short": "вт",
    "wednesday_short": "ср",
    "thursday_short": "чт",
    "friday_short": "пт",
    "saturday_short": "сб"
  },
  "card": {
    "defaultTitle": "Сонячний прогноз",
    "placeholder": "No forecast entities configured.",
    "placeholderAction": "Open the card editor to get started.",
    "twoDayNote": "2-day forecast available",
    "labels": {
      "live": "НАЖИВО:",
      "exportRate": "ТАРИФ ЕКСПОРТУ:",
      "nextHour": "+1 Г:",
      "left": "ЗАЛИШОК:",
      "week": "ТИЖДЕНЬ:",
      "avg": "СЕР.:",
      "total": "Разом",
      "p10": "P10",
      "forecast": "прогноз",
      "generated": "вироблено"
    },
    "days": {
      "today": "Today"
    },
    "popup": {
      "close": "Close",
      "noForecastData": "No forecast data",
      "noHourlyData": "No hourly data available for this day.",
      "integrationNoHourlyData": "The selected forecast entities do not provide hourly forecast data.",
      "chart": {
        "time": "Time",
        "power": "Power",
        "kwh": "kWh",
        "forecastShort": "Fcst",
        "actualShort": "Act."
      }
    },
    "history": {
      "title": "Last 7 days",
      "forecast": "Forecast",
      "actual": "Actual",
      "accuracy": "Accuracy",
      "averageMiss": "Average miss per day",
      "bias": "Actual vs forecast per day",
      "readout": "{day}: forecast {forecast}, actual {actual} kWh ({difference})",
      "noActual": "{day}: forecast {forecast} kWh, no recorded generation",
      "noForecast": "{day}: no recorded forecast",
      "loading": "Loading forecast history…",
      "noData": "No forecast history found. Home Assistant needs to have recorded the forecast sensor for at least one full day."
    },
    "aria": {
      "dayButton": "{day} {date}"
    },
    "errors": {
      "invalidConfig": "Invalid configuration"
    },
    "units": {
      "watts": "W",
      "kilowatts": "kW",
      "kilowattHours": "kWh",
      "kilowattHoursPerDay": "kWh/day"
    }
  },
  "editor": {
    "labels": {
      "title": "Title (optional)",
      "icon": "Header icon (optional, e.g. mdi:solar-power)",
      "show_header": "Show header",
      "display_estimate10": "Display Estimate10 Forecast Values",
      "device_id": "Forecast Device",
      "integration_type": "Integration Type",
      "forecast_entity_0": "Day 1 — Today",
      "forecast_entity_1": "Day 2 — Tomorrow",
      "forecast_entity_2": "Day 3",
      "forecast_entity_3": "Day 4",
      "forecast_entity_4": "Day 5",
      "forecast_entity_5": "Day 6",
      "forecast_entity_6": "Day 7",
      "export_rate_entity": "Current Export Rate Entity",
      "live_power_entity": "Live power (optional, kW sensor)",
      "today_actual_entity": "Today's actual generation (optional)",
      "next_hour_entity": "+1HR forecast (optional, overrides auto-derived value)",
      "remaining_today_entity": "LEFT / remaining today (optional, overrides auto-derived value)",
      "main_view": "Main View",
      "inverter_max_kw": "Inverter max output (kW)",
      "solar_max_kwp": "Solar array size (kWp)",
      "low_threshold": "Low threshold (kWh)",
      "high_threshold": "High threshold (kWh)",
      "low_threshold_entity": "Low threshold sensor (optional, kWh)",
      "high_threshold_entity": "High threshold sensor (optional, kWh)",
      "show_low_threshold_zone": "Tint bar track below low threshold",
      "show_high_threshold_zone": "Tint bar track above high threshold",
      "threshold_zone_opacity": "Threshold tint opacity (lower is more transparent)",
      "desktop_text_scale": "Desktop Text Scale",
      "font_size": "Font Size",
      "bar_width": "Bar Width"
    },
    "options": {
      "autoDetect": "Auto-detect",
      "solcast": "Solcast",
      "volcast": "Volcast",
      "forecastSolar": "Forecast.Solar",
      "openMeteo": "Open-Meteo Solar Forecast",
      "mainViewDaily": "Daily",
      "mainViewHourly": "Hourly",
      "mainViewHistory": "History"
    },
    "sections": {
      "integrationType": "Integration Type",
      "dailyForecastEntities": "Daily Forecast Entities",
      "liveData": "Live Data",
      "actualGenerationArrays": "Actual Generation Arrays",
      "systemParameters": "System Parameters",
      "energyProvider": "Energy Provider",
      "colourThresholds": "Colour Thresholds",
      "dateTimeDisplay": "Display"
    },
    "helpers": {
      "device": "Recommended: selecting a device will auto-configure the card",
      "estimate10": "Display Estimate10 is only applicable when the integration type is Solcast",
      "integrationType": "Automatically set when a forecast device is selected above. Override here only when configuring forecast entities manually without a device.",
      "liveData": "+1HR and LEFT are auto-detected or auto-derived where possible. Set these manually to override, or to use a custom sensor.",
      "actualArrays": "Optional: configure individual array sensors to display a stacked breakdown on today's bar. Each label is a single character shown inside its segment (e.g. N, S, E).",
      "desktopTextScale": "Desktop Text Scale: only applies on wider screens (≥ 768 px). Mobile sizing is unchanged.",
      "mainView": "Choose what the card shows. Hourly shows today's hourly forecast. History compares the last 7 days of forecast and actual generation.",
      "fontSize": "Optional daily bar text size in pixels. Leave blank to use CSS/default styling.",
      "barWidth": "Optional forecast bar width in pixels. Leave blank to use CSS/default styling."
    },
    "warnings": {
      "manualEntities": "Changing device will not overwrite manually configured entities."
    },
    "arrays": {
      "entity": "Array entity",
      "label": "Label (1 char)",
      "placeholder": "E",
      "hint": "bar & popup",
      "remove": "Remove",
      "add": "Add array"
    }
  },
  "customCard": {
    "name": "Solar Forecast Card",
    "description": "Daily solar energy forecast with hourly breakdown support."
  }
}
;

var ur = {
  "day": {
    "today": "آج",
    "tomorrow": "کل",
    "sunday_short": "اتوار",
    "monday_short": "پیر",
    "tuesday_short": "منگل",
    "wednesday_short": "بدھ",
    "thursday_short": "جمعرات",
    "friday_short": "جمعہ",
    "saturday_short": "ہفتہ"
  },
  "card": {
    "defaultTitle": "شمسی پیش گوئی",
    "placeholder": "No forecast entities configured.",
    "placeholderAction": "Open the card editor to get started.",
    "twoDayNote": "2-day forecast available",
    "labels": {
      "live": "لائیو:",
      "exportRate": "برآمدی شرح:",
      "nextHour": "+1 گھنٹہ:",
      "left": "باقی:",
      "week": "ہفتہ:",
      "avg": "اوسط:",
      "total": "کل",
      "p10": "P10",
      "forecast": "پیش گوئی",
      "generated": "پیدا شدہ"
    },
    "days": {
      "today": "Today"
    },
    "popup": {
      "close": "Close",
      "noForecastData": "No forecast data",
      "noHourlyData": "No hourly data available for this day.",
      "integrationNoHourlyData": "The selected forecast entities do not provide hourly forecast data.",
      "chart": {
        "time": "Time",
        "power": "Power",
        "kwh": "kWh",
        "forecastShort": "Fcst",
        "actualShort": "Act."
      }
    },
    "history": {
      "title": "Last 7 days",
      "forecast": "Forecast",
      "actual": "Actual",
      "accuracy": "Accuracy",
      "averageMiss": "Average miss per day",
      "bias": "Actual vs forecast per day",
      "readout": "{day}: forecast {forecast}, actual {actual} kWh ({difference})",
      "noActual": "{day}: forecast {forecast} kWh, no recorded generation",
      "noForecast": "{day}: no recorded forecast",
      "loading": "Loading forecast history…",
      "noData": "No forecast history found. Home Assistant needs to have recorded the forecast sensor for at least one full day."
    },
    "aria": {
      "dayButton": "{day} {date}"
    },
    "errors": {
      "invalidConfig": "Invalid configuration"
    },
    "units": {
      "watts": "W",
      "kilowatts": "kW",
      "kilowattHours": "kWh",
      "kilowattHoursPerDay": "kWh/day"
    }
  },
  "editor": {
    "labels": {
      "title": "Title (optional)",
      "icon": "Header icon (optional, e.g. mdi:solar-power)",
      "show_header": "Show header",
      "display_estimate10": "Display Estimate10 Forecast Values",
      "device_id": "Forecast Device",
      "integration_type": "Integration Type",
      "forecast_entity_0": "Day 1 — Today",
      "forecast_entity_1": "Day 2 — Tomorrow",
      "forecast_entity_2": "Day 3",
      "forecast_entity_3": "Day 4",
      "forecast_entity_4": "Day 5",
      "forecast_entity_5": "Day 6",
      "forecast_entity_6": "Day 7",
      "export_rate_entity": "Current Export Rate Entity",
      "live_power_entity": "Live power (optional, kW sensor)",
      "today_actual_entity": "Today's actual generation (optional)",
      "next_hour_entity": "+1HR forecast (optional, overrides auto-derived value)",
      "remaining_today_entity": "LEFT / remaining today (optional, overrides auto-derived value)",
      "main_view": "Main View",
      "inverter_max_kw": "Inverter max output (kW)",
      "solar_max_kwp": "Solar array size (kWp)",
      "low_threshold": "Low threshold (kWh)",
      "high_threshold": "High threshold (kWh)",
      "low_threshold_entity": "Low threshold sensor (optional, kWh)",
      "high_threshold_entity": "High threshold sensor (optional, kWh)",
      "show_low_threshold_zone": "Tint bar track below low threshold",
      "show_high_threshold_zone": "Tint bar track above high threshold",
      "threshold_zone_opacity": "Threshold tint opacity (lower is more transparent)",
      "desktop_text_scale": "Desktop Text Scale",
      "font_size": "Font Size",
      "bar_width": "Bar Width"
    },
    "options": {
      "autoDetect": "Auto-detect",
      "solcast": "Solcast",
      "volcast": "Volcast",
      "forecastSolar": "Forecast.Solar",
      "openMeteo": "Open-Meteo Solar Forecast",
      "mainViewDaily": "Daily",
      "mainViewHourly": "Hourly",
      "mainViewHistory": "History"
    },
    "sections": {
      "integrationType": "Integration Type",
      "dailyForecastEntities": "Daily Forecast Entities",
      "liveData": "Live Data",
      "actualGenerationArrays": "Actual Generation Arrays",
      "systemParameters": "System Parameters",
      "energyProvider": "Energy Provider",
      "colourThresholds": "Colour Thresholds",
      "dateTimeDisplay": "Display"
    },
    "helpers": {
      "device": "Recommended: selecting a device will auto-configure the card",
      "estimate10": "Display Estimate10 is only applicable when the integration type is Solcast",
      "integrationType": "Automatically set when a forecast device is selected above. Override here only when configuring forecast entities manually without a device.",
      "liveData": "+1HR and LEFT are auto-detected or auto-derived where possible. Set these manually to override, or to use a custom sensor.",
      "actualArrays": "Optional: configure individual array sensors to display a stacked breakdown on today's bar. Each label is a single character shown inside its segment (e.g. N, S, E).",
      "desktopTextScale": "Desktop Text Scale: only applies on wider screens (≥ 768 px). Mobile sizing is unchanged.",
      "mainView": "Choose what the card shows. Hourly shows today's hourly forecast. History compares the last 7 days of forecast and actual generation.",
      "fontSize": "Optional daily bar text size in pixels. Leave blank to use CSS/default styling.",
      "barWidth": "Optional forecast bar width in pixels. Leave blank to use CSS/default styling."
    },
    "warnings": {
      "manualEntities": "Changing device will not overwrite manually configured entities."
    },
    "arrays": {
      "entity": "Array entity",
      "label": "Label (1 char)",
      "placeholder": "E",
      "hint": "bar & popup",
      "remove": "Remove",
      "add": "Add array"
    }
  },
  "customCard": {
    "name": "Solar Forecast Card",
    "description": "Daily solar energy forecast with hourly breakdown support."
  }
}
;

var vi = {
  "day": {
    "today": "Hôm nay",
    "tomorrow": "Ngày mai",
    "sunday_short": "CN",
    "monday_short": "Th 2",
    "tuesday_short": "Th 3",
    "wednesday_short": "Th 4",
    "thursday_short": "Th 5",
    "friday_short": "Th 6",
    "saturday_short": "Th 7"
  },
  "card": {
    "defaultTitle": "Dự báo năng lượng mặt trời",
    "placeholder": "No forecast entities configured.",
    "placeholderAction": "Open the card editor to get started.",
    "twoDayNote": "2-day forecast available",
    "labels": {
      "live": "TRỰC TIẾP:",
      "exportRate": "GIÁ BÁN ĐIỆN:",
      "nextHour": "+1 GIỜ:",
      "left": "CÒN LẠI:",
      "week": "TUẦN:",
      "avg": "TB:",
      "total": "Tổng",
      "p10": "P10",
      "forecast": "dự báo",
      "generated": "đã tạo"
    },
    "days": {
      "today": "Today"
    },
    "popup": {
      "close": "Close",
      "noForecastData": "No forecast data",
      "noHourlyData": "No hourly data available for this day.",
      "integrationNoHourlyData": "The selected forecast entities do not provide hourly forecast data.",
      "chart": {
        "time": "Time",
        "power": "Power",
        "kwh": "kWh",
        "forecastShort": "Fcst",
        "actualShort": "Act."
      }
    },
    "history": {
      "title": "Last 7 days",
      "forecast": "Forecast",
      "actual": "Actual",
      "accuracy": "Accuracy",
      "averageMiss": "Average miss per day",
      "bias": "Actual vs forecast per day",
      "readout": "{day}: forecast {forecast}, actual {actual} kWh ({difference})",
      "noActual": "{day}: forecast {forecast} kWh, no recorded generation",
      "noForecast": "{day}: no recorded forecast",
      "loading": "Loading forecast history…",
      "noData": "No forecast history found. Home Assistant needs to have recorded the forecast sensor for at least one full day."
    },
    "aria": {
      "dayButton": "{day} {date}"
    },
    "errors": {
      "invalidConfig": "Invalid configuration"
    },
    "units": {
      "watts": "W",
      "kilowatts": "kW",
      "kilowattHours": "kWh",
      "kilowattHoursPerDay": "kWh/day"
    }
  },
  "editor": {
    "labels": {
      "title": "Title (optional)",
      "icon": "Header icon (optional, e.g. mdi:solar-power)",
      "show_header": "Show header",
      "display_estimate10": "Display Estimate10 Forecast Values",
      "device_id": "Forecast Device",
      "integration_type": "Integration Type",
      "forecast_entity_0": "Day 1 — Today",
      "forecast_entity_1": "Day 2 — Tomorrow",
      "forecast_entity_2": "Day 3",
      "forecast_entity_3": "Day 4",
      "forecast_entity_4": "Day 5",
      "forecast_entity_5": "Day 6",
      "forecast_entity_6": "Day 7",
      "export_rate_entity": "Current Export Rate Entity",
      "live_power_entity": "Live power (optional, kW sensor)",
      "today_actual_entity": "Today's actual generation (optional)",
      "next_hour_entity": "+1HR forecast (optional, overrides auto-derived value)",
      "remaining_today_entity": "LEFT / remaining today (optional, overrides auto-derived value)",
      "main_view": "Main View",
      "inverter_max_kw": "Inverter max output (kW)",
      "solar_max_kwp": "Solar array size (kWp)",
      "low_threshold": "Low threshold (kWh)",
      "high_threshold": "High threshold (kWh)",
      "low_threshold_entity": "Low threshold sensor (optional, kWh)",
      "high_threshold_entity": "High threshold sensor (optional, kWh)",
      "show_low_threshold_zone": "Tint bar track below low threshold",
      "show_high_threshold_zone": "Tint bar track above high threshold",
      "threshold_zone_opacity": "Threshold tint opacity (lower is more transparent)",
      "desktop_text_scale": "Desktop Text Scale",
      "font_size": "Font Size",
      "bar_width": "Bar Width"
    },
    "options": {
      "autoDetect": "Auto-detect",
      "solcast": "Solcast",
      "volcast": "Volcast",
      "forecastSolar": "Forecast.Solar",
      "openMeteo": "Open-Meteo Solar Forecast",
      "mainViewDaily": "Daily",
      "mainViewHourly": "Hourly",
      "mainViewHistory": "History"
    },
    "sections": {
      "integrationType": "Integration Type",
      "dailyForecastEntities": "Daily Forecast Entities",
      "liveData": "Live Data",
      "actualGenerationArrays": "Actual Generation Arrays",
      "systemParameters": "System Parameters",
      "energyProvider": "Energy Provider",
      "colourThresholds": "Colour Thresholds",
      "dateTimeDisplay": "Display"
    },
    "helpers": {
      "device": "Recommended: selecting a device will auto-configure the card",
      "estimate10": "Display Estimate10 is only applicable when the integration type is Solcast",
      "integrationType": "Automatically set when a forecast device is selected above. Override here only when configuring forecast entities manually without a device.",
      "liveData": "+1HR and LEFT are auto-detected or auto-derived where possible. Set these manually to override, or to use a custom sensor.",
      "actualArrays": "Optional: configure individual array sensors to display a stacked breakdown on today's bar. Each label is a single character shown inside its segment (e.g. N, S, E).",
      "desktopTextScale": "Desktop Text Scale: only applies on wider screens (≥ 768 px). Mobile sizing is unchanged.",
      "mainView": "Choose what the card shows. Hourly shows today's hourly forecast. History compares the last 7 days of forecast and actual generation.",
      "fontSize": "Optional daily bar text size in pixels. Leave blank to use CSS/default styling.",
      "barWidth": "Optional forecast bar width in pixels. Leave blank to use CSS/default styling."
    },
    "warnings": {
      "manualEntities": "Changing device will not overwrite manually configured entities."
    },
    "arrays": {
      "entity": "Array entity",
      "label": "Label (1 char)",
      "placeholder": "E",
      "hint": "bar & popup",
      "remove": "Remove",
      "add": "Add array"
    }
  },
  "customCard": {
    "name": "Solar Forecast Card",
    "description": "Daily solar energy forecast with hourly breakdown support."
  }
}
;

var zh_Hans = {
  "day": {
    "today": "今天",
    "tomorrow": "明天",
    "sunday_short": "周日",
    "monday_short": "周一",
    "tuesday_short": "周二",
    "wednesday_short": "周三",
    "thursday_short": "周四",
    "friday_short": "周五",
    "saturday_short": "周六"
  },
  "card": {
    "defaultTitle": "太阳能预测",
    "placeholder": "No forecast entities configured.",
    "placeholderAction": "Open the card editor to get started.",
    "twoDayNote": "2-day forecast available",
    "labels": {
      "live": "实时:",
      "exportRate": "上网电价:",
      "nextHour": "+1小时:",
      "left": "剩余:",
      "week": "本周:",
      "avg": "平均:",
      "total": "总计",
      "p10": "P10",
      "forecast": "预测",
      "generated": "已发电"
    },
    "days": {
      "today": "Today"
    },
    "popup": {
      "close": "Close",
      "noForecastData": "No forecast data",
      "noHourlyData": "No hourly data available for this day.",
      "integrationNoHourlyData": "The selected forecast entities do not provide hourly forecast data.",
      "chart": {
        "time": "Time",
        "power": "Power",
        "kwh": "kWh",
        "forecastShort": "Fcst",
        "actualShort": "Act."
      }
    },
    "history": {
      "title": "Last 7 days",
      "forecast": "Forecast",
      "actual": "Actual",
      "accuracy": "Accuracy",
      "averageMiss": "Average miss per day",
      "bias": "Actual vs forecast per day",
      "readout": "{day}: forecast {forecast}, actual {actual} kWh ({difference})",
      "noActual": "{day}: forecast {forecast} kWh, no recorded generation",
      "noForecast": "{day}: no recorded forecast",
      "loading": "Loading forecast history…",
      "noData": "No forecast history found. Home Assistant needs to have recorded the forecast sensor for at least one full day."
    },
    "aria": {
      "dayButton": "{day} {date}"
    },
    "errors": {
      "invalidConfig": "Invalid configuration"
    },
    "units": {
      "watts": "W",
      "kilowatts": "kW",
      "kilowattHours": "kWh",
      "kilowattHoursPerDay": "kWh/day"
    }
  },
  "editor": {
    "labels": {
      "title": "Title (optional)",
      "icon": "Header icon (optional, e.g. mdi:solar-power)",
      "show_header": "Show header",
      "display_estimate10": "Display Estimate10 Forecast Values",
      "device_id": "Forecast Device",
      "integration_type": "Integration Type",
      "forecast_entity_0": "Day 1 — Today",
      "forecast_entity_1": "Day 2 — Tomorrow",
      "forecast_entity_2": "Day 3",
      "forecast_entity_3": "Day 4",
      "forecast_entity_4": "Day 5",
      "forecast_entity_5": "Day 6",
      "forecast_entity_6": "Day 7",
      "export_rate_entity": "Current Export Rate Entity",
      "live_power_entity": "Live power (optional, kW sensor)",
      "today_actual_entity": "Today's actual generation (optional)",
      "next_hour_entity": "+1HR forecast (optional, overrides auto-derived value)",
      "remaining_today_entity": "LEFT / remaining today (optional, overrides auto-derived value)",
      "main_view": "Main View",
      "inverter_max_kw": "Inverter max output (kW)",
      "solar_max_kwp": "Solar array size (kWp)",
      "low_threshold": "Low threshold (kWh)",
      "high_threshold": "High threshold (kWh)",
      "low_threshold_entity": "Low threshold sensor (optional, kWh)",
      "high_threshold_entity": "High threshold sensor (optional, kWh)",
      "show_low_threshold_zone": "Tint bar track below low threshold",
      "show_high_threshold_zone": "Tint bar track above high threshold",
      "threshold_zone_opacity": "Threshold tint opacity (lower is more transparent)",
      "desktop_text_scale": "Desktop Text Scale",
      "font_size": "Font Size",
      "bar_width": "Bar Width"
    },
    "options": {
      "autoDetect": "Auto-detect",
      "solcast": "Solcast",
      "volcast": "Volcast",
      "forecastSolar": "Forecast.Solar",
      "openMeteo": "Open-Meteo Solar Forecast",
      "mainViewDaily": "Daily",
      "mainViewHourly": "Hourly",
      "mainViewHistory": "History"
    },
    "sections": {
      "integrationType": "Integration Type",
      "dailyForecastEntities": "Daily Forecast Entities",
      "liveData": "Live Data",
      "actualGenerationArrays": "Actual Generation Arrays",
      "systemParameters": "System Parameters",
      "energyProvider": "Energy Provider",
      "colourThresholds": "Colour Thresholds",
      "dateTimeDisplay": "Display"
    },
    "helpers": {
      "device": "Recommended: selecting a device will auto-configure the card",
      "estimate10": "Display Estimate10 is only applicable when the integration type is Solcast",
      "integrationType": "Automatically set when a forecast device is selected above. Override here only when configuring forecast entities manually without a device.",
      "liveData": "+1HR and LEFT are auto-detected or auto-derived where possible. Set these manually to override, or to use a custom sensor.",
      "actualArrays": "Optional: configure individual array sensors to display a stacked breakdown on today's bar. Each label is a single character shown inside its segment (e.g. N, S, E).",
      "desktopTextScale": "Desktop Text Scale: only applies on wider screens (≥ 768 px). Mobile sizing is unchanged.",
      "mainView": "Choose what the card shows. Hourly shows today's hourly forecast. History compares the last 7 days of forecast and actual generation.",
      "fontSize": "Optional daily bar text size in pixels. Leave blank to use CSS/default styling.",
      "barWidth": "Optional forecast bar width in pixels. Leave blank to use CSS/default styling."
    },
    "warnings": {
      "manualEntities": "Changing device will not overwrite manually configured entities."
    },
    "arrays": {
      "entity": "Array entity",
      "label": "Label (1 char)",
      "placeholder": "E",
      "hint": "bar & popup",
      "remove": "Remove",
      "add": "Add array"
    }
  },
  "customCard": {
    "name": "Solar Forecast Card",
    "description": "Daily solar energy forecast with hourly breakdown support."
  }
}
;

var zh_Hant = {
  "day": {
    "today": "今天",
    "tomorrow": "明天",
    "sunday_short": "週日",
    "monday_short": "週一",
    "tuesday_short": "週二",
    "wednesday_short": "週三",
    "thursday_short": "週四",
    "friday_short": "週五",
    "saturday_short": "週六"
  },
  "card": {
    "defaultTitle": "太陽能預測",
    "placeholder": "No forecast entities configured.",
    "placeholderAction": "Open the card editor to get started.",
    "twoDayNote": "2-day forecast available",
    "labels": {
      "live": "即時:",
      "exportRate": "躉售電價:",
      "nextHour": "+1小時:",
      "left": "剩餘:",
      "week": "本週:",
      "avg": "平均:",
      "total": "總計",
      "p10": "P10",
      "forecast": "預測",
      "generated": "已發電"
    },
    "days": {
      "today": "Today"
    },
    "popup": {
      "close": "Close",
      "noForecastData": "No forecast data",
      "noHourlyData": "No hourly data available for this day.",
      "integrationNoHourlyData": "The selected forecast entities do not provide hourly forecast data.",
      "chart": {
        "time": "Time",
        "power": "Power",
        "kwh": "kWh",
        "forecastShort": "Fcst",
        "actualShort": "Act."
      }
    },
    "history": {
      "title": "Last 7 days",
      "forecast": "Forecast",
      "actual": "Actual",
      "accuracy": "Accuracy",
      "averageMiss": "Average miss per day",
      "bias": "Actual vs forecast per day",
      "readout": "{day}: forecast {forecast}, actual {actual} kWh ({difference})",
      "noActual": "{day}: forecast {forecast} kWh, no recorded generation",
      "noForecast": "{day}: no recorded forecast",
      "loading": "Loading forecast history…",
      "noData": "No forecast history found. Home Assistant needs to have recorded the forecast sensor for at least one full day."
    },
    "aria": {
      "dayButton": "{day} {date}"
    },
    "errors": {
      "invalidConfig": "Invalid configuration"
    },
    "units": {
      "watts": "W",
      "kilowatts": "kW",
      "kilowattHours": "kWh",
      "kilowattHoursPerDay": "kWh/day"
    }
  },
  "editor": {
    "labels": {
      "title": "Title (optional)",
      "icon": "Header icon (optional, e.g. mdi:solar-power)",
      "show_header": "Show header",
      "display_estimate10": "Display Estimate10 Forecast Values",
      "device_id": "Forecast Device",
      "integration_type": "Integration Type",
      "forecast_entity_0": "Day 1 — Today",
      "forecast_entity_1": "Day 2 — Tomorrow",
      "forecast_entity_2": "Day 3",
      "forecast_entity_3": "Day 4",
      "forecast_entity_4": "Day 5",
      "forecast_entity_5": "Day 6",
      "forecast_entity_6": "Day 7",
      "export_rate_entity": "Current Export Rate Entity",
      "live_power_entity": "Live power (optional, kW sensor)",
      "today_actual_entity": "Today's actual generation (optional)",
      "next_hour_entity": "+1HR forecast (optional, overrides auto-derived value)",
      "remaining_today_entity": "LEFT / remaining today (optional, overrides auto-derived value)",
      "main_view": "Main View",
      "inverter_max_kw": "Inverter max output (kW)",
      "solar_max_kwp": "Solar array size (kWp)",
      "low_threshold": "Low threshold (kWh)",
      "high_threshold": "High threshold (kWh)",
      "low_threshold_entity": "Low threshold sensor (optional, kWh)",
      "high_threshold_entity": "High threshold sensor (optional, kWh)",
      "show_low_threshold_zone": "Tint bar track below low threshold",
      "show_high_threshold_zone": "Tint bar track above high threshold",
      "threshold_zone_opacity": "Threshold tint opacity (lower is more transparent)",
      "desktop_text_scale": "Desktop Text Scale",
      "font_size": "Font Size",
      "bar_width": "Bar Width"
    },
    "options": {
      "autoDetect": "Auto-detect",
      "solcast": "Solcast",
      "volcast": "Volcast",
      "forecastSolar": "Forecast.Solar",
      "openMeteo": "Open-Meteo Solar Forecast",
      "mainViewDaily": "Daily",
      "mainViewHourly": "Hourly",
      "mainViewHistory": "History"
    },
    "sections": {
      "integrationType": "Integration Type",
      "dailyForecastEntities": "Daily Forecast Entities",
      "liveData": "Live Data",
      "actualGenerationArrays": "Actual Generation Arrays",
      "systemParameters": "System Parameters",
      "energyProvider": "Energy Provider",
      "colourThresholds": "Colour Thresholds",
      "dateTimeDisplay": "Display"
    },
    "helpers": {
      "device": "Recommended: selecting a device will auto-configure the card",
      "estimate10": "Display Estimate10 is only applicable when the integration type is Solcast",
      "integrationType": "Automatically set when a forecast device is selected above. Override here only when configuring forecast entities manually without a device.",
      "liveData": "+1HR and LEFT are auto-detected or auto-derived where possible. Set these manually to override, or to use a custom sensor.",
      "actualArrays": "Optional: configure individual array sensors to display a stacked breakdown on today's bar. Each label is a single character shown inside its segment (e.g. N, S, E).",
      "desktopTextScale": "Desktop Text Scale: only applies on wider screens (≥ 768 px). Mobile sizing is unchanged.",
      "mainView": "Choose what the card shows. Hourly shows today's hourly forecast. History compares the last 7 days of forecast and actual generation.",
      "fontSize": "Optional daily bar text size in pixels. Leave blank to use CSS/default styling.",
      "barWidth": "Optional forecast bar width in pixels. Leave blank to use CSS/default styling."
    },
    "warnings": {
      "manualEntities": "Changing device will not overwrite manually configured entities."
    },
    "arrays": {
      "entity": "Array entity",
      "label": "Label (1 char)",
      "placeholder": "E",
      "hint": "bar & popup",
      "remove": "Remove",
      "add": "Add array"
    }
  },
  "customCard": {
    "name": "Solar Forecast Card",
    "description": "Daily solar energy forecast with hourly breakdown support."
  }
}
;

const LOCALES = {
    "af": af,
    "ar": ar,
    "bg": bg,
    "bn": bn,
    "bs": bs,
    "ca": ca,
    "cs": cs,
    "cy": cy,
    "da": da,
    "de": de,
    "el": el,
    "en": en,
    "en-GB": en_GB,
    "eo": eo,
    "es": es,
    "es-419": es_419,
    "et": et,
    "eu": eu,
    "fa": fa,
    "fi": fi,
    "fy": fy,
    "fr": fr,
    "ga": ga,
    "gl": gl,
    "gsw": gsw,
    "he": he,
    "hi": hi,
    "hr": hr,
    "hu": hu,
    "hy": hy,
    "id": id,
    "it": it,
    "is": is,
    "ja": ja,
    "ka": ka,
    "ko": ko,
    "lb": lb,
    "lt": lt,
    "lv": lv,
    "mk": mk,
    "ml": ml,
    "nl": nl,
    "nb": nb,
    "nn": nn,
    "pl": pl,
    "pt": pt,
    "pt-BR": pt_BR,
    "ro": ro,
    "ru": ru,
    "sk": sk,
    "sl": sl,
    "sr": sr,
    "sr-Latn": sr_Latn,
    "sv": sv,
    "sq": sq,
    "ta": ta,
    "te": te,
    "th": th,
    "tr": tr,
    "uk": uk,
    "ur": ur,
    "vi": vi,
    "zh-Hans": zh_Hans,
    "zh-Hant": zh_Hant,
};
const LANGUAGE_OPTIONS = Object.keys(LOCALES);

function normaliseLanguage(value) {
    if (typeof value !== "string" || value.trim() === "")
        return "en";
    const requested = value.toLowerCase().replace("_", "-");
    const exact = LANGUAGE_OPTIONS.find((language) => language.toLowerCase() === requested);
    if (exact)
        return exact;
    const base = requested.split("-")[0];
    return LANGUAGE_OPTIONS.find((language) => language.toLowerCase() === base) ?? "en";
}
function resolveLanguage(hass) {
    const localeLanguage = hass?.locale && typeof hass.locale === "object" && "language" in hass.locale
        ? hass.locale.language
        : undefined;
    return normaliseLanguage(localeLanguage ?? hass?.language);
}
function readPath(tree, key) {
    return key.split(".").reduce((node, part) => {
        if (node && typeof node === "object" && part in node) {
            return node[part];
        }
        return undefined;
    }, tree);
}
function localize(language, key, vars) {
    const tree = LOCALES[language] ?? en;
    const translated = readPath(tree, key);
    const fallback = readPath(en, key);
    const raw = typeof translated === "string"
        ? translated
        : typeof fallback === "string"
            ? fallback
            : key;
    return vars
        ? raw.replace(/\{(\w+)\}/g, (_, name) => String(vars[name] ?? `{${name}}`))
        : raw;
}

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise, SuppressedError, Symbol, Iterator */


function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
    var e = new Error(message);
    return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};

/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t$2=globalThis,e$2=t$2.ShadowRoot&&(void 0===t$2.ShadyCSS||t$2.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,s$2=Symbol(),o$4=new WeakMap;let n$3 = class n{constructor(t,e,o){if(this._$cssResult$=true,o!==s$2)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e;}get styleSheet(){let t=this.o;const s=this.t;if(e$2&&void 0===t){const e=void 0!==s&&1===s.length;e&&(t=o$4.get(s)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),e&&o$4.set(s,t));}return t}toString(){return this.cssText}};const r$4=t=>new n$3("string"==typeof t?t:t+"",void 0,s$2),i$3=(t,...e)=>{const o=1===t.length?t[0]:e.reduce((e,s,o)=>e+(t=>{if(true===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+t[o+1],t[0]);return new n$3(o,t,s$2)},S$1=(s,o)=>{if(e$2)s.adoptedStyleSheets=o.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const e of o){const o=document.createElement("style"),n=t$2.litNonce;void 0!==n&&o.setAttribute("nonce",n),o.textContent=e.cssText,s.appendChild(o);}},c$2=e$2?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const s of t.cssRules)e+=s.cssText;return r$4(e)})(t):t;

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:i$2,defineProperty:e$1,getOwnPropertyDescriptor:h$1,getOwnPropertyNames:r$3,getOwnPropertySymbols:o$3,getPrototypeOf:n$2}=Object,a$1=globalThis,c$1=a$1.trustedTypes,l$1=c$1?c$1.emptyScript:"",p$1=a$1.reactiveElementPolyfillSupport,d$1=(t,s)=>t,u$1={toAttribute(t,s){switch(s){case Boolean:t=t?l$1:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t);}return t},fromAttribute(t,s){let i=t;switch(s){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t);}catch(t){i=null;}}return i}},f$1=(t,s)=>!i$2(t,s),b$1={attribute:true,type:String,converter:u$1,reflect:false,useDefault:false,hasChanged:f$1};Symbol.metadata??=Symbol("metadata"),a$1.litPropertyMetadata??=new WeakMap;let y$1 = class y extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t);}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,s=b$1){if(s.state&&(s.attribute=false),this._$Ei(),this.prototype.hasOwnProperty(t)&&((s=Object.create(s)).wrapped=true),this.elementProperties.set(t,s),!s.noAccessor){const i=Symbol(),h=this.getPropertyDescriptor(t,i,s);void 0!==h&&e$1(this.prototype,t,h);}}static getPropertyDescriptor(t,s,i){const{get:e,set:r}=h$1(this.prototype,t)??{get(){return this[s]},set(t){this[s]=t;}};return {get:e,set(s){const h=e?.call(this);r?.call(this,s),this.requestUpdate(t,h,i);},configurable:true,enumerable:true}}static getPropertyOptions(t){return this.elementProperties.get(t)??b$1}static _$Ei(){if(this.hasOwnProperty(d$1("elementProperties")))return;const t=n$2(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties);}static finalize(){if(this.hasOwnProperty(d$1("finalized")))return;if(this.finalized=true,this._$Ei(),this.hasOwnProperty(d$1("properties"))){const t=this.properties,s=[...r$3(t),...o$3(t)];for(const i of s)this.createProperty(i,t[i]);}const t=this[Symbol.metadata];if(null!==t){const s=litPropertyMetadata.get(t);if(void 0!==s)for(const[t,i]of s)this.elementProperties.set(t,i);}this._$Eh=new Map;for(const[t,s]of this.elementProperties){const i=this._$Eu(t,s);void 0!==i&&this._$Eh.set(i,t);}this.elementStyles=this.finalizeStyles(this.styles);}static finalizeStyles(s){const i=[];if(Array.isArray(s)){const e=new Set(s.flat(1/0).reverse());for(const s of e)i.unshift(c$2(s));}else void 0!==s&&i.push(c$2(s));return i}static _$Eu(t,s){const i=s.attribute;return  false===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=false,this.hasUpdated=false,this._$Em=null,this._$Ev();}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this));}addController(t){(this._$EO??=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.();}removeController(t){this._$EO?.delete(t);}_$E_(){const t=new Map,s=this.constructor.elementProperties;for(const i of s.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t);}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return S$1(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(true),this._$EO?.forEach(t=>t.hostConnected?.());}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.());}attributeChangedCallback(t,s,i){this._$AK(t,i);}_$ET(t,s){const i=this.constructor.elementProperties.get(t),e=this.constructor._$Eu(t,i);if(void 0!==e&&true===i.reflect){const h=(void 0!==i.converter?.toAttribute?i.converter:u$1).toAttribute(s,i.type);this._$Em=t,null==h?this.removeAttribute(e):this.setAttribute(e,h),this._$Em=null;}}_$AK(t,s){const i=this.constructor,e=i._$Eh.get(t);if(void 0!==e&&this._$Em!==e){const t=i.getPropertyOptions(e),h="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:u$1;this._$Em=e;const r=h.fromAttribute(s,t.type);this[e]=r??this._$Ej?.get(e)??r,this._$Em=null;}}requestUpdate(t,s,i,e=false,h){if(void 0!==t){const r=this.constructor;if(false===e&&(h=this[t]),i??=r.getPropertyOptions(t),!((i.hasChanged??f$1)(h,s)||i.useDefault&&i.reflect&&h===this._$Ej?.get(t)&&!this.hasAttribute(r._$Eu(t,i))))return;this.C(t,s,i);} false===this.isUpdatePending&&(this._$ES=this._$EP());}C(t,s,{useDefault:i,reflect:e,wrapped:h},r){i&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,r??s??this[t]),true!==h||void 0!==r)||(this._$AL.has(t)||(this.hasUpdated||i||(s=void 0),this._$AL.set(t,s)),true===e&&this._$Em!==t&&(this._$Eq??=new Set).add(t));}async _$EP(){this.isUpdatePending=true;try{await this._$ES;}catch(t){Promise.reject(t);}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[t,s]of this._$Ep)this[t]=s;this._$Ep=void 0;}const t=this.constructor.elementProperties;if(t.size>0)for(const[s,i]of t){const{wrapped:t}=i,e=this[s];true!==t||this._$AL.has(s)||void 0===e||this.C(s,void 0,i,e);}}let t=false;const s=this._$AL;try{t=this.shouldUpdate(s),t?(this.willUpdate(s),this._$EO?.forEach(t=>t.hostUpdate?.()),this.update(s)):this._$EM();}catch(s){throw t=false,this._$EM(),s}t&&this._$AE(s);}willUpdate(t){}_$AE(t){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=true,this.firstUpdated(t)),this.updated(t);}_$EM(){this._$AL=new Map,this.isUpdatePending=false;}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return  true}update(t){this._$Eq&&=this._$Eq.forEach(t=>this._$ET(t,this[t])),this._$EM();}updated(t){}firstUpdated(t){}};y$1.elementStyles=[],y$1.shadowRootOptions={mode:"open"},y$1[d$1("elementProperties")]=new Map,y$1[d$1("finalized")]=new Map,p$1?.({ReactiveElement:y$1}),(a$1.reactiveElementVersions??=[]).push("2.1.2");

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t$1=globalThis,i$1=t=>t,s$1=t$1.trustedTypes,e=s$1?s$1.createPolicy("lit-html",{createHTML:t=>t}):void 0,h="$lit$",o$2=`lit$${Math.random().toFixed(9).slice(2)}$`,n$1="?"+o$2,r$2=`<${n$1}>`,l=document,c=()=>l.createComment(""),a=t=>null===t||"object"!=typeof t&&"function"!=typeof t,u=Array.isArray,d=t=>u(t)||"function"==typeof t?.[Symbol.iterator],f="[ \t\n\f\r]",v=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,_=/-->/g,m=/>/g,p=RegExp(`>|${f}(?:([^\\s"'>=/]+)(${f}*=${f}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),g=/'/g,$=/"/g,y=/^(?:script|style|textarea|title)$/i,x=t=>(i,...s)=>({_$litType$:t,strings:i,values:s}),b=x(1),w=x(2),E=Symbol.for("lit-noChange"),A=Symbol.for("lit-nothing"),C=new WeakMap,P=l.createTreeWalker(l,129);function V(t,i){if(!u(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==e?e.createHTML(i):i}const N=(t,i)=>{const s=t.length-1,e=[];let n,l=2===i?"<svg>":3===i?"<math>":"",c=v;for(let i=0;i<s;i++){const s=t[i];let a,u,d=-1,f=0;for(;f<s.length&&(c.lastIndex=f,u=c.exec(s),null!==u);)f=c.lastIndex,c===v?"!--"===u[1]?c=_:void 0!==u[1]?c=m:void 0!==u[2]?(y.test(u[2])&&(n=RegExp("</"+u[2],"g")),c=p):void 0!==u[3]&&(c=p):c===p?">"===u[0]?(c=n??v,d=-1):void 0===u[1]?d=-2:(d=c.lastIndex-u[2].length,a=u[1],c=void 0===u[3]?p:'"'===u[3]?$:g):c===$||c===g?c=p:c===_||c===m?c=v:(c=p,n=void 0);const x=c===p&&t[i+1].startsWith("/>")?" ":"";l+=c===v?s+r$2:d>=0?(e.push(a),s.slice(0,d)+h+s.slice(d)+o$2+x):s+o$2+(-2===d?i:x);}return [V(t,l+(t[s]||"<?>")+(2===i?"</svg>":3===i?"</math>":"")),e]};class S{constructor({strings:t,_$litType$:i},e){let r;this.parts=[];let l=0,a=0;const u=t.length-1,d=this.parts,[f,v]=N(t,i);if(this.el=S.createElement(f,e),P.currentNode=this.el.content,2===i||3===i){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes);}for(;null!==(r=P.nextNode())&&d.length<u;){if(1===r.nodeType){if(r.hasAttributes())for(const t of r.getAttributeNames())if(t.endsWith(h)){const i=v[a++],s=r.getAttribute(t).split(o$2),e=/([.?@])?(.*)/.exec(i);d.push({type:1,index:l,name:e[2],strings:s,ctor:"."===e[1]?I:"?"===e[1]?L:"@"===e[1]?z:H}),r.removeAttribute(t);}else t.startsWith(o$2)&&(d.push({type:6,index:l}),r.removeAttribute(t));if(y.test(r.tagName)){const t=r.textContent.split(o$2),i=t.length-1;if(i>0){r.textContent=s$1?s$1.emptyScript:"";for(let s=0;s<i;s++)r.append(t[s],c()),P.nextNode(),d.push({type:2,index:++l});r.append(t[i],c());}}}else if(8===r.nodeType)if(r.data===n$1)d.push({type:2,index:l});else {let t=-1;for(;-1!==(t=r.data.indexOf(o$2,t+1));)d.push({type:7,index:l}),t+=o$2.length-1;}l++;}}static createElement(t,i){const s=l.createElement("template");return s.innerHTML=t,s}}function M(t,i,s=t,e){if(i===E)return i;let h=void 0!==e?s._$Co?.[e]:s._$Cl;const o=a(i)?void 0:i._$litDirective$;return h?.constructor!==o&&(h?._$AO?.(false),void 0===o?h=void 0:(h=new o(t),h._$AT(t,s,e)),void 0!==e?(s._$Co??=[])[e]=h:s._$Cl=h),void 0!==h&&(i=M(t,h._$AS(t,i.values),h,e)),i}class R{constructor(t,i){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=i;}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:i},parts:s}=this._$AD,e=(t?.creationScope??l).importNode(i,true);P.currentNode=e;let h=P.nextNode(),o=0,n=0,r=s[0];for(;void 0!==r;){if(o===r.index){let i;2===r.type?i=new k(h,h.nextSibling,this,t):1===r.type?i=new r.ctor(h,r.name,r.strings,this,t):6===r.type&&(i=new Z(h,this,t)),this._$AV.push(i),r=s[++n];}o!==r?.index&&(h=P.nextNode(),o++);}return P.currentNode=l,e}p(t){let i=0;for(const s of this._$AV) void 0!==s&&(void 0!==s.strings?(s._$AI(t,s,i),i+=s.strings.length-2):s._$AI(t[i])),i++;}}class k{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,i,s,e){this.type=2,this._$AH=A,this._$AN=void 0,this._$AA=t,this._$AB=i,this._$AM=s,this.options=e,this._$Cv=e?.isConnected??true;}get parentNode(){let t=this._$AA.parentNode;const i=this._$AM;return void 0!==i&&11===t?.nodeType&&(t=i.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,i=this){t=M(this,t,i),a(t)?t===A||null==t||""===t?(this._$AH!==A&&this._$AR(),this._$AH=A):t!==this._$AH&&t!==E&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):d(t)?this.k(t):this._(t);}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t));}_(t){this._$AH!==A&&a(this._$AH)?this._$AA.nextSibling.data=t:this.T(l.createTextNode(t)),this._$AH=t;}$(t){const{values:i,_$litType$:s}=t,e="number"==typeof s?this._$AC(t):(void 0===s.el&&(s.el=S.createElement(V(s.h,s.h[0]),this.options)),s);if(this._$AH?._$AD===e)this._$AH.p(i);else {const t=new R(e,this),s=t.u(this.options);t.p(i),this.T(s),this._$AH=t;}}_$AC(t){let i=C.get(t.strings);return void 0===i&&C.set(t.strings,i=new S(t)),i}k(t){u(this._$AH)||(this._$AH=[],this._$AR());const i=this._$AH;let s,e=0;for(const h of t)e===i.length?i.push(s=new k(this.O(c()),this.O(c()),this,this.options)):s=i[e],s._$AI(h),e++;e<i.length&&(this._$AR(s&&s._$AB.nextSibling,e),i.length=e);}_$AR(t=this._$AA.nextSibling,s){for(this._$AP?.(false,true,s);t!==this._$AB;){const s=i$1(t).nextSibling;i$1(t).remove(),t=s;}}setConnected(t){ void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t));}}class H{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,i,s,e,h){this.type=1,this._$AH=A,this._$AN=void 0,this.element=t,this.name=i,this._$AM=e,this.options=h,s.length>2||""!==s[0]||""!==s[1]?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=A;}_$AI(t,i=this,s,e){const h=this.strings;let o=false;if(void 0===h)t=M(this,t,i,0),o=!a(t)||t!==this._$AH&&t!==E,o&&(this._$AH=t);else {const e=t;let n,r;for(t=h[0],n=0;n<h.length-1;n++)r=M(this,e[s+n],i,n),r===E&&(r=this._$AH[n]),o||=!a(r)||r!==this._$AH[n],r===A?t=A:t!==A&&(t+=(r??"")+h[n+1]),this._$AH[n]=r;}o&&!e&&this.j(t);}j(t){t===A?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"");}}class I extends H{constructor(){super(...arguments),this.type=3;}j(t){this.element[this.name]=t===A?void 0:t;}}class L extends H{constructor(){super(...arguments),this.type=4;}j(t){this.element.toggleAttribute(this.name,!!t&&t!==A);}}class z extends H{constructor(t,i,s,e,h){super(t,i,s,e,h),this.type=5;}_$AI(t,i=this){if((t=M(this,t,i,0)??A)===E)return;const s=this._$AH,e=t===A&&s!==A||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,h=t!==A&&(s===A||e);e&&this.element.removeEventListener(this.name,this,s),h&&this.element.addEventListener(this.name,this,t),this._$AH=t;}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t);}}class Z{constructor(t,i,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=i,this.options=s;}get _$AU(){return this._$AM._$AU}_$AI(t){M(this,t);}}const B=t$1.litHtmlPolyfillSupport;B?.(S,k),(t$1.litHtmlVersions??=[]).push("3.3.2");const D=(t,i,s)=>{const e=s?.renderBefore??i;let h=e._$litPart$;if(void 0===h){const t=s?.renderBefore??null;e._$litPart$=h=new k(i.insertBefore(c(),t),t,void 0,s??{});}return h._$AI(t),h};

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const s=globalThis;class i extends y$1{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0;}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const r=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=D(r,this.renderRoot,this.renderOptions);}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(true);}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(false);}render(){return E}}i._$litElement$=true,i["finalized"]=true,s.litElementHydrateSupport?.({LitElement:i});const o$1=s.litElementPolyfillSupport;o$1?.({LitElement:i});(s.litElementVersions??=[]).push("4.2.2");

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t=t=>(e,o)=>{ void 0!==o?o.addInitializer(()=>{customElements.define(t,e);}):customElements.define(t,e);};

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const o={attribute:true,type:String,converter:u$1,reflect:false,hasChanged:f$1},r$1=(t=o,e,r)=>{const{kind:n,metadata:i}=r;let s=globalThis.litPropertyMetadata.get(i);if(void 0===s&&globalThis.litPropertyMetadata.set(i,s=new Map),"setter"===n&&((t=Object.create(t)).wrapped=true),s.set(r.name,t),"accessor"===n){const{name:o}=r;return {set(r){const n=e.get.call(this);e.set.call(this,r),this.requestUpdate(o,n,t,true,r);},init(e){return void 0!==e&&this.C(o,void 0,t,e),e}}}if("setter"===n){const{name:o}=r;return function(r){const n=this[o];e.call(this,r),this.requestUpdate(o,n,t,true,r);}}throw Error("Unsupported decorator location: "+n)};function n(t){return (e,o)=>"object"==typeof o?r$1(t,e,o):((t,e,o)=>{const r=e.hasOwnProperty(o);return e.constructor.createProperty(o,t),r?Object.getOwnPropertyDescriptor(e,o):void 0})(t,e,o)}

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function r(r){return n({...r,state:true,attribute:false})}

/** Keep in step with the fallback alpha on .bar-bg in card/styles/day-column.ts. */
const DEFAULT_THRESHOLD_ZONE_OPACITY = 15;
function normalizeConfig(raw) {
    const incoming = Array.isArray(raw.forecast_entities)
        ? raw.forecast_entities.slice(0, 7)
        : [];
    while (incoming.length < 7)
        incoming.push("");
    return {
        type: raw.type ?? "custom:solar-forecast-card",
        title: raw.title,
        icon: raw.icon,
        show_header: raw.show_header !== false,
        display_estimate10: raw.display_estimate10 ?? false,
        device_id: raw.device_id,
        integration_type: raw.integration_type ?? "manual",
        forecast_entities: incoming,
        export_rate_entity: raw.export_rate_entity,
        live_power_entity: raw.live_power_entity,
        today_actual_entity: raw.today_actual_entity,
        next_hour_entity: raw.next_hour_entity,
        remaining_today_entity: raw.remaining_today_entity,
        actual_arrays: Array.isArray(raw.actual_arrays)
            ? raw.actual_arrays.filter((e) => typeof e === "object" && e !== null && typeof e.entity === "string")
            : undefined,
        date_format: raw.date_format,
        time_format: raw.time_format,
        main_view: raw.main_view ?? (raw.show_hourly_as_main ? "hourly" : "daily"),
        inverter_max_kw: raw.inverter_max_kw,
        solar_max_kwp: raw.solar_max_kwp,
        low_threshold: raw.low_threshold,
        low_threshold_entity: raw.low_threshold_entity,
        high_threshold: raw.high_threshold,
        high_threshold_entity: raw.high_threshold_entity,
        show_low_threshold_zone: raw.show_low_threshold_zone ?? false,
        show_high_threshold_zone: raw.show_high_threshold_zone ?? false,
        threshold_zone_opacity: raw.threshold_zone_opacity,
        desktop_text_scale: raw.desktop_text_scale,
        font_size: raw.font_size,
        bar_width: raw.bar_width,
    };
}

/** Read an energy sensor, normalising Wh to kWh. Null when absent or non-numeric. */
function readKwh(hass, entityId) {
    const st = entityId ? hass?.states[entityId] : undefined;
    const raw = parseFloat(st?.state ?? "");
    if (!isFinite(raw))
        return null;
    const unit = st?.attributes?.unit_of_measurement?.toLowerCase();
    return unit === "wh" ? raw / 1000 : raw;
}
/** Read a power sensor, normalising kW to W. Null when absent or non-numeric. */
function readPowerW(hass, entityId) {
    const st = entityId ? hass?.states[entityId] : undefined;
    const raw = parseFloat(st?.state ?? "");
    if (!isFinite(raw))
        return null;
    const unit = st?.attributes?.unit_of_measurement ?? "W";
    return unit.toLowerCase() === "kw" ? raw * 1000 : raw;
}
/** Per-array actuals from actual_arrays. Null when none are configured. */
function readArrayActuals(hass, cfg) {
    if (!cfg.actual_arrays?.length)
        return null;
    return cfg.actual_arrays.map((a) => ({
        label: a.label || "?",
        kwh: readKwh(hass, a.entity) ?? 0,
    }));
}
/**
 * Today's actual generation.
 *
 * Arrays are an optional visual enhancement layer. When they are producing
 * (sum > 0) their sum is the canonical total, used for bar height, the dotted
 * remainder, isComplete and the header. When they sum to 0 (pre-sunrise, all
 * entities unavailable, incomplete config, etc.) this falls back to
 * today_actual_entity. The bars and the header both use this function, so
 * they always agree.
 */
function resolveActualKwh(hass, cfg, arrays) {
    const sumKwh = arrays?.reduce((s, a) => s + a.kwh, 0) ?? 0;
    return sumKwh > 0 ? sumKwh : readKwh(hass, cfg.today_actual_entity);
}

const KEY_PREFIX = "solar_forecast_card_history:";
/** The 7 full days shown, plus today while it is being recorded. */
const KEEP_DAYS = 8;
/** Before this local hour, daily sensors may still hold yesterday's values. */
const FIRST_RELIABLE_HOUR = 1;
/** Used as the end of the generating day when sun.sun isn't available. */
const FALLBACK_EVENING_HOUR = 20;
function dayKey(date) {
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${date.getFullYear()}-${month}-${day}`;
}
function generationFinished(hass, now) {
    const sun = hass.states["sun.sun"];
    if (!sun)
        return now.getHours() >= FALLBACK_EVENING_HOUR;
    return now.getHours() >= 12 && sun.state === "below_horizon";
}
/**
 * Add today's readings to the log. The earliest forecast is kept, matching
 * what recorder history uses, and the highest actual, because daily sensors
 * only count up. Entries older than KEEP_DAYS are dropped.
 */
function addToLog(log, now, forecastKwh, actualKwh, finished) {
    const key = dayKey(now);
    const previous = log[key];
    const oldest = dayKey(new Date(now.getFullYear(), now.getMonth(), now.getDate() - KEEP_DAYS));
    const kept = Object.fromEntries(Object.entries(log).filter(([date]) => date >= oldest));
    const actuals = [previous?.actualKwh ?? null, actualKwh].filter((v) => v !== null);
    return {
        ...kept,
        [key]: {
            forecastKwh: previous?.forecastKwh ?? forecastKwh,
            actualKwh: actuals.length > 0 ? Math.max(...actuals) : null,
            complete: (previous?.complete ?? false) || finished,
        },
    };
}
/** Read the saved log. Returns null if Home Assistant's user storage can't be read. */
async function loadHistoryLog(hass, forecastId) {
    if (!hass.callWS)
        return null;
    try {
        const result = await hass.callWS({
            type: "frontend/get_user_data",
            key: KEY_PREFIX + forecastId,
        });
        return result?.value ?? {};
    }
    catch (err) {
        console.debug("[solar-forecast-card] history log read failed:", err);
        return null;
    }
}
/** Save today's forecast and actual to Home Assistant's per-user storage. */
async function recordToday(hass, cfg) {
    const forecastId = cfg.forecast_entities[0];
    const now = new Date();
    if (!forecastId || !hass.callWS || now.getHours() < FIRST_RELIABLE_HOUR)
        return;
    const forecastKwh = readKwh(hass, forecastId);
    const actualKwh = resolveActualKwh(hass, cfg, readArrayActuals(hass, cfg));
    if (forecastKwh === null && actualKwh === null)
        return;
    const log = await loadHistoryLog(hass, forecastId);
    if (!log)
        return;
    const updated = addToLog(log, now, forecastKwh, actualKwh, generationFinished(hass, now));
    if (JSON.stringify(updated) === JSON.stringify(log))
        return;
    try {
        await hass.callWS({
            type: "frontend/set_user_data",
            key: KEY_PREFIX + forecastId,
            value: updated,
        });
    }
    catch (err) {
        console.debug("[solar-forecast-card] history log write failed:", err);
    }
}

/**
 * Read recorder history for the given entities, keyed by entity_id.
 * Returns null when the history API is unavailable or the request fails.
 */
async function queryHistory(hass, entityIds, start, end) {
    if (!hass.callApi)
        return null;
    try {
        // significant_changes_only=false: return every recorded state change,
        // not just those that cross a threshold — essential for cumulative sensors.
        const path = `history/period/${start.toISOString()}` +
            `?filter_entity_id=${encodeURIComponent(entityIds.join(","))}` +
            `&end_time=${encodeURIComponent(end.toISOString())}` +
            `&minimal_response=true&no_attributes=true&significant_changes_only=false`;
        // HA history API returns: Array<Array<{state, last_changed}>>
        // Outer array is per-entity; inner array is chronological state entries.
        // Only the first entry of each inner array carries the entity_id, and
        // entities with no history are left out, so position can't be relied on.
        const result = await hass.callApi("GET", path);
        if (!Array.isArray(result))
            return null;
        const history = new Map();
        for (const entries of result) {
            if (!Array.isArray(entries) || entries.length === 0)
                continue;
            const entityId = entries[0]?.entity_id ?? (entityIds.length === 1 ? entityIds[0] : undefined);
            if (entityId)
                history.set(entityId, entries);
        }
        return history;
    }
    catch (err) {
        console.debug("[solar-forecast-card] history fetch failed:", err);
        return null;
    }
}
/**
 * Fetch hourly actual-generation values for today from the HA history API.
 *
 * today_actual_entity is a cumulative energy sensor (kWh or Wh) whose value
 * rises monotonically through the day. Per-hour generation is the difference
 * between the sensor's value at the end and start of each hour boundary.
 *
 * Returns a Map<localHour (0–23), kWh> containing only hours with positive
 * generation (> 0).  Pre-sunrise and future hours are not included so the
 * popup table stays clean — a missing key means "no data / future", not zero.
 *
 * Returns an empty Map (never rejects) if the history API is unavailable,
 * the entity has no recorded history for today, or any other error occurs.
 */
async function fetchActualHourly(hass, entityId) {
    if (!hass?.callApi)
        return new Map();
    const now = new Date();
    const startOfDay = new Date(now);
    startOfDay.setHours(0, 0, 0, 0);
    // Detect Wh vs kWh from the live entity state so history values are
    // normalised to kWh consistently with the rest of the card.
    const unit = hass.states[entityId]?.attributes?.unit_of_measurement?.toLowerCase();
    const isWh = unit === "wh";
    const history = await queryHistory(hass, [entityId], startOfDay, now);
    const recorded = history?.get(entityId);
    if (!recorded)
        return new Map();
    try {
        // Normalise: keep only entries with finite numeric state, sorted ascending.
        const entries = recorded
            .filter((e) => e && typeof e.last_changed === "string" && isFinite(parseFloat(e.state)))
            .sort((a, b) => (a.last_changed < b.last_changed ? -1 : a.last_changed > b.last_changed ? 1 : 0));
        if (entries.length === 0)
            return new Map();
        /**
         * Returns the most-recent finite numeric state value recorded at or
         * before the given UTC ISO timestamp.  Entries are sorted ascending so
         * iteration stops as soon as we pass the target timestamp.
         */
        const valueAt = (isoTs) => {
            let val = null;
            for (const e of entries) {
                if (e.last_changed <= isoTs) {
                    const v = parseFloat(e.state);
                    if (isFinite(v))
                        val = v;
                }
                else {
                    break;
                }
            }
            return val;
        };
        const map = new Map();
        const currentHour = now.getHours();
        for (let h = 0; h <= currentHour; h++) {
            const hourStart = new Date(now);
            hourStart.setHours(h, 0, 0, 0);
            const hourEnd = new Date(now);
            hourEnd.setHours(h + 1, 0, 0, 0);
            const startVal = valueAt(hourStart.toISOString());
            const endVal = valueAt(hourEnd.toISOString());
            if (startVal === null || endVal === null)
                continue;
            let delta = endVal - startVal;
            if (delta < 0)
                continue; // sensor reset or stale data — skip
            if (isWh)
                delta /= 1000; // Wh → kWh
            // Only record hours that actually generated something.
            // This keeps the popup table free of zero rows for pre-sunrise hours.
            if (delta > 0)
                map.set(h, delta);
        }
        console.debug(`[solar-forecast-card] actual history: ${map.size} generating hour(s) found for ${entityId}`);
        return map;
    }
    catch (err) {
        console.debug("[solar-forecast-card] actual history fetch failed:", err);
        return new Map();
    }
}

const HISTORY_DAYS = 7;
/** A day's forecast is the reading in place at this local hour. */
const FORECAST_READ_HOUR = 6;
function toReadings(entries, isWh) {
    return (entries ?? [])
        .map((e) => ({ time: Date.parse(e.last_changed), value: parseFloat(e.state) }))
        .filter((r) => isFinite(r.time) && isFinite(r.value))
        .map((r) => ({ time: r.time, value: isWh ? r.value / 1000 : r.value }))
        .sort((a, b) => a.time - b.time);
}
function localDay(now, daysAgo, hour = 0) {
    return new Date(now.getFullYear(), now.getMonth(), now.getDate() - daysAgo, hour).getTime();
}
/** The reading in place at FORECAST_READ_HOUR, or else the day's first reading. */
function forecastForDay(readings, now, daysAgo) {
    const start = localDay(now, daysAgo);
    const cutoff = localDay(now, daysAgo, FORECAST_READ_HOUR);
    const end = localDay(now, daysAgo - 1);
    const day = readings.filter((r) => r.time >= start && r.time < end);
    const morning = day.filter((r) => r.time <= cutoff);
    const reading = morning.length > 0 ? morning[morning.length - 1] : day[0];
    return reading?.value ?? null;
}
/** today_actual_entity and array sensors reset daily, so a day's total is its peak. */
function actualForDay(readings, now, daysAgo) {
    const start = localDay(now, daysAgo, FIRST_RELIABLE_HOUR);
    const end = localDay(now, daysAgo - 1);
    const day = readings.filter((r) => r.time >= start && r.time < end);
    return day.length > 0 ? Math.max(...day.map((r) => r.value)) : null;
}
/** The last HISTORY_DAYS full days, oldest first. Today is left out because it isn't finished. */
function buildHistoryDays(forecast, actuals, now) {
    const days = [];
    for (let daysAgo = HISTORY_DAYS; daysAgo >= 1; daysAgo--) {
        const totals = actuals
            .map((readings) => actualForDay(readings, now, daysAgo))
            .filter((v) => v !== null);
        days.push({
            date: new Date(localDay(now, daysAgo)),
            forecastKwh: forecastForDay(forecast, now, daysAgo),
            actualKwh: totals.length > 0 ? totals.reduce((s, v) => s + v, 0) : null,
        });
    }
    return days;
}
/**
 * Fill gaps in recorder data from the card's own log. Logged actuals only count
 * once they were seen after sunset, because an earlier one is a partial day.
 */
function fillFromLog(days, log) {
    return days.map((day) => {
        const logged = log[dayKey(day.date)];
        return {
            ...day,
            forecastKwh: day.forecastKwh ?? logged?.forecastKwh ?? null,
            actualKwh: day.actualKwh ?? (logged?.complete ? logged.actualKwh : null),
        };
    });
}
/** Array sensors take precedence over today_actual_entity, as they do for the live total. */
function actualEntities(cfg) {
    const arrays = cfg.actual_arrays?.map((a) => a.entity).filter(Boolean) ?? [];
    if (arrays.length > 0)
        return arrays;
    return cfg.today_actual_entity ? [cfg.today_actual_entity] : [];
}
function reportsWh(hass, entityId) {
    const unit = hass.states[entityId]?.attributes?.unit_of_measurement;
    return unit?.toLowerCase() === "wh";
}
/**
 * Load the last week of forecast and actual totals from recorder history,
 * filling any gaps from the card's own log.
 * Returns null if neither source is readable, so the caller can retry.
 */
async function fetchForecastHistory(hass, cfg) {
    const forecastId = cfg.forecast_entities[0];
    if (!hass || !forecastId)
        return [];
    const now = new Date();
    const actualIds = actualEntities(cfg);
    const [history, log] = await Promise.all([
        queryHistory(hass, [forecastId, ...actualIds], new Date(localDay(now, HISTORY_DAYS)), new Date(localDay(now, 0))),
        loadHistoryLog(hass, forecastId),
    ]);
    if (!history && !log)
        return null;
    const days = buildHistoryDays(toReadings(history?.get(forecastId), reportsWh(hass, forecastId)), actualIds.map((id) => toReadings(history?.get(id), reportsWh(hass, id))), now);
    return log ? fillFromLog(days, log) : days;
}
function scoreHistory(days) {
    const paired = days.flatMap((d) => d.forecastKwh !== null && d.forecastKwh > 0 && d.actualKwh !== null
        ? [{ forecast: d.forecastKwh, actual: d.actualKwh }]
        : []);
    if (paired.length === 0)
        return null;
    const average = (values) => values.reduce((s, v) => s + v, 0) / values.length;
    const averagePctMiss = average(paired.map((d) => (Math.abs(d.actual - d.forecast) / d.forecast) * 100));
    return {
        accuracyPct: Math.max(100 - averagePctMiss, 0),
        averageMissKwh: average(paired.map((d) => Math.abs(d.actual - d.forecast))),
        biasKwh: average(paired.map((d) => d.actual - d.forecast)),
    };
}
/** A round axis with at most four intervals that fits maxKwh. */
function historyScale(maxKwh) {
    for (let magnitude = 1;; magnitude *= 10) {
        for (const base of [1, 2, 5]) {
            const step = base * magnitude;
            const intervals = Math.max(Math.ceil(maxKwh / step), 1);
            if (intervals <= 4)
                return { step, top: intervals * step };
        }
    }
}

const SLOT_NAMES = ["Today", "Tomorrow", "Day 3", "Day 4", "Day 5", "Day 6", "Day 7"];
function emptySlots() {
    return ["", "", "", "", "", "", ""];
}
function slotLabel(slot) {
    return `Day ${slot} (${SLOT_NAMES[slot]})`;
}
function hasPlatform(sensors, platform) {
    return sensors.some((e) => e.platform === platform);
}
function sensorUnit(hass, entityId) {
    return hass.states[entityId]?.attributes?.unit_of_measurement;
}
function logDetectedSlots(name, slots, ...extra) {
    console.debug(`[solar-forecast-card] ${name} auto-detect mapping:`, slots.map((id, i) => ({
        slot: slotLabel(i),
        entity: id ? id.replace(/^sensor\./, "") : "(empty)",
    })), ...extra);
}
/** Drop leading and trailing zero-generation hours. */
function trimZeroHours(points) {
    let first = -1, last = -1;
    for (let i = 0; i < points.length; i++) {
        if (points[i].kwh > 0) {
            if (first === -1)
                first = i;
            last = i;
        }
    }
    return first === -1 ? [] : points.slice(first, last + 1);
}
function bucketsToPoints(buckets) {
    return Array.from(buckets.entries())
        .map(([hour, kwh]) => ({ hour, kwh }))
        .sort((a, b) => a.hour - b.hour);
}
/** Resolve an energy value, trying all known key names in priority order. */
function readEnergyValue(obj) {
    const rawV = obj.value ?? obj.energy ?? obj.kwh ??
        obj.wh ?? obj.power_kw ?? obj.pv_estimate ??
        obj.forecast ?? obj.solar ?? 0;
    const kwh = typeof rawV === "number" ? rawV
        : typeof rawV === "string" ? parseFloat(rawV)
            : 0;
    return isFinite(kwh) ? kwh : 0;
}
/** Parse a plain object keyed by hour: {"6": 0.5, "7": 1.2, …}. */
function parseKeyedHours(raw) {
    if (typeof raw !== "object" || raw === null)
        return [];
    const points = Object.entries(raw)
        .map(([k, v]) => {
        const hour = parseInt(k, 10);
        const kwh = typeof v === "number" ? v
            : typeof v === "string" ? parseFloat(v)
                : 0;
        return {
            hour: isFinite(hour) ? hour : 0,
            kwh: isFinite(kwh) ? kwh : 0,
        };
    })
        .sort((a, b) => a.hour - b.hour);
    return trimZeroHours(points);
}

/**
 * The integration exposes two daily energy sensors per device:
 *   energy_production_today     → slot 0
 *   energy_production_tomorrow  → slot 1
 *
 * Slots 2–6 are left empty; forecast.solar doesn't provide day 3+ totals.
 * today_actual_entity is left undefined — actual generation comes from the
 * inverter, not from this integration.
 *
 * The native unit is Wh but HA displays it as kWh; both are accepted.
 * "energy_production_today_remaining" is excluded from slot 0 by requiring
 * the keyword is not followed by "_remaining".
 */
function detect$2(sensors, hass) {
    if (!hasPlatform(sensors, "forecast_solar"))
        return null;
    const slots = emptySlots();
    let remainingTodayEntity;
    for (const sensor of sensors) {
        const unit = sensorUnit(hass, sensor.entity_id);
        if (unit !== "kWh" && unit !== "Wh")
            continue;
        const id = sensor.entity_id;
        if (id.includes("energy_production_today_remaining")) {
            // Capture as remaining_today_entity — provides the LEFT header value
            // directly for forecast.solar (which has no hourly attribute data).
            remainingTodayEntity = id;
        }
        else if (id.includes("energy_production_today")) {
            slots[0] = id;
        }
        else if (id.includes("energy_production_tomorrow")) {
            slots[1] = id;
        }
    }
    logDetectedSlots("forecast.solar", slots, "remaining_today_entity:", remainingTodayEntity ?? "(none)");
    return {
        forecast_entities: slots,
        integration_type: "forecast_solar",
        remaining_today_entity: remainingTodayEntity,
    };
}
/** forecast.solar carries no hourly attribute, so there is nothing to parse. */
const forecastSolar = {
    hoursAttr: () => undefined,
    parseHours: () => [],
    detect: detect$2,
};

const DAY_KEYWORDS = [
    ["forecast_today", 0],
    ["forecast_tomorrow", 1],
    ["forecast_day_3", 2],
    ["forecast_day_4", 3],
    ["forecast_day_5", 4],
    ["forecast_day_6", 5],
    ["forecast_day_7", 6],
];
/** Parse detailedForecast: [{period_start: ISO, pv_estimate: kW}, …], 30-min periods. */
function parseSolcastPeriods(entries) {
    const buckets = new Map();
    for (const entry of entries) {
        const periodStart = entry.period_start;
        if (typeof periodStart !== "string")
            continue;
        const d = new Date(periodStart);
        if (isNaN(d.getTime()))
            continue;
        const hour = d.getHours();
        const estimate = typeof entry.pv_estimate === "number" ? entry.pv_estimate : 0;
        const kwh = estimate * 0.5; // 30-min period in kW → kWh
        buckets.set(hour, (buckets.get(hour) ?? 0) + kwh);
    }
    return trimZeroHours(bucketsToPoints(buckets));
}
/**
 * Sum the pv_estimate10 values from a Solcast detailedForecast attribute.
 *
 * detailedForecast is an array of 30-min period objects:
 *   { period_start: ISO, pv_estimate: kW, pv_estimate10: kW, pv_estimate90: kW }
 *
 * pv_estimate10 is the 10th-percentile kW output for each 30-min slot.
 * Multiplying by 0.5 converts the half-hourly kW figure to kWh.
 *
 * Returns null when the attribute is absent, not an array, or every entry
 * lacks a finite pv_estimate10 value — so the caller can cleanly skip
 * rendering rather than showing 0.00 kWh.
 */
function sumEstimate10(raw) {
    if (!Array.isArray(raw) || raw.length === 0)
        return null;
    let total = 0;
    let hasAny = false;
    for (const entry of raw) {
        const val = entry.pv_estimate10;
        if (typeof val === "number" && isFinite(val)) {
            total += val * 0.5; // 30-min period kW → kWh
            hasAny = true;
        }
    }
    return hasAny ? total : null;
}
/**
 * Solcast entities don't carry an `hours` array attribute so the generic
 * detector won't find them. Instead we match against the well-known keywords
 * the integration embeds in every entity_id:
 *
 *   forecast_today → slot 0  (today)
 *   forecast_tomorrow → slot 1  (tomorrow)
 *   forecast_day_3 … forecast_day_7 → slots 2–6
 *
 * Only kWh sensors are considered to avoid picking up power/API sensors.
 * today_actual_entity is left undefined — Solcast doesn't expose actual
 * generation; that sensor typically comes from the inverter integration.
 */
function detect$1(sensors, hass) {
    if (!hasPlatform(sensors, "solcast_solar"))
        return null;
    const slots = emptySlots();
    for (const sensor of sensors) {
        if (sensorUnit(hass, sensor.entity_id) !== "kWh")
            continue;
        for (const [keyword, slot] of DAY_KEYWORDS) {
            if (sensor.entity_id.includes(keyword)) {
                slots[slot] = sensor.entity_id;
                break;
            }
        }
    }
    logDetectedSlots("Solcast", slots);
    return {
        forecast_entities: slots,
        integration_type: "solcast",
    };
}
const solcast = {
    // Prefer detailedForecast (standard Solcast attribute); fall back to
    // hours so manually-configured cards work with alternate attribute names.
    hoursAttr: (state) => state.attributes?.detailedForecast ?? state.attributes?.hours,
    parseHours: (raw) => Array.isArray(raw)
        ? parseSolcastPeriods(raw)
        : parseKeyedHours(raw),
    detect: detect$1,
};

function isSolcastPeriods(raw) {
    const first = raw[0];
    return typeof first?.period_start === "string" && "pv_estimate" in first;
}
/** Parse an array of bare numbers (index = hour) or of {hour, value} objects. */
function parseArrayHours(raw) {
    const points = raw.map((v, i) => {
        // 1 — bare number, index = hour
        if (typeof v === "number") {
            return { hour: i, kwh: isFinite(v) ? v : 0 };
        }
        // 2 — object with hour + value fields
        if (typeof v === "object" && v !== null) {
            const obj = v;
            // Resolve hour index — try "hour", "time", "h" keys
            const rawH = obj.hour ?? obj.time ?? obj.h;
            const hour = typeof rawH === "number" ? rawH
                : typeof rawH === "string" ? parseInt(rawH, 10)
                    : i;
            return {
                hour: isFinite(hour) ? hour : i,
                kwh: readEnergyValue(obj),
            };
        }
        return { hour: i, kwh: 0 };
    });
    return trimZeroHours(points);
}
/** No integration selected: try both common attribute names and detect the format. */
const manual = {
    hoursAttr: (state) => state.attributes?.hours ?? state.attributes?.detailedForecast,
    parseHours(raw) {
        if (!Array.isArray(raw))
            return parseKeyedHours(raw);
        return isSolcastPeriods(raw) ? parseSolcastPeriods(raw) : parseArrayHours(raw);
    },
};

// Key suffix → slot index.  Order matters: "today" must be listed before
// any d-number so the endsWith check doesn't need extra guards.
const KEY_SLOTS = [
    ["energy_production_today", 0],
    ["energy_production_tomorrow", 1],
    ["energy_production_d2", 2],
    ["energy_production_d3", 3],
    ["energy_production_d4", 4],
    ["energy_production_d5", 5],
    ["energy_production_d6", 6],
    // energy_production_d7 → no slot, intentionally omitted
];
/**
 * Parse Open-Meteo's `wh_period` attribute into HourPoint[].
 *
 * The attribute is a plain object keyed by ISO datetime strings
 * (e.g. "2024-04-22T06:00:00") with numeric Wh energy values for each
 * period. Multiple sub-hourly periods with the same hour are summed.
 * Values are converted from Wh to kWh.
 */
function parseWhPeriod(raw) {
    if (typeof raw !== "object" || raw === null || Array.isArray(raw))
        return [];
    const buckets = new Map();
    for (const [isoKey, val] of Object.entries(raw)) {
        // Extract the hour directly from the ISO string (the T-portion is the
        // local hour in HA's timezone). Using new Date().getHours() would shift
        // the hour to the browser's local timezone, which may differ from HA's.
        const hourMatch = isoKey.match(/T(\d{2}):/);
        if (!hourMatch)
            continue;
        const hour = parseInt(hourMatch[1], 10);
        if (!isFinite(hour) || hour < 0 || hour > 23)
            continue;
        const wh = typeof val === "number" ? val
            : typeof val === "string" ? parseFloat(val)
                : NaN;
        if (!isFinite(wh))
            continue;
        buckets.set(hour, (buckets.get(hour) ?? 0) + wh / 1000); // Wh → kWh
    }
    // Filter out hours with zero generation — Open-Meteo includes all 24 hours
    // in wh_period (including night/cloudy hours with 0 Wh). The other parsers
    // trim only leading/trailing zeros; for Open-Meteo we remove ALL zero-value
    // hours so the popup shows only generating periods.
    return bucketsToPoints(buckets).filter((p) => p.kwh > 0);
}
/**
 * The integration (platform: "open_meteo_solar_forecast") exposes daily
 * energy sensors whose entity_id follows the pattern:
 *   sensor.{service_slug}_{key}
 *
 * Keys mapped to card slots:
 *   energy_production_today     → slot 0  (today)
 *   energy_production_tomorrow  → slot 1  (tomorrow)
 *   energy_production_d2        → slot 2
 *   energy_production_d3        → slot 3
 *   energy_production_d4        → slot 4
 *   energy_production_d5        → slot 5
 *   energy_production_d6        → slot 6
 *   energy_production_d7        → skipped (card only has 7 slots, 0–6)
 *
 * "energy_production_today_remaining" is excluded.
 * Native unit is Wh; HA auto-converts to kWh via suggested_unit_of_measurement.
 * Both "kWh" and "Wh" are accepted to be safe.
 *
 * Each daily sensor carries a `wh_period` attribute (ISO datetime → Wh)
 * that the card uses for the hourly popup chart.
 */
function detect(sensors, hass) {
    if (!hasPlatform(sensors, "open_meteo_solar_forecast"))
        return null;
    const slots = emptySlots();
    let remainingTodayEntity;
    for (const sensor of sensors) {
        const id = sensor.entity_id;
        const unit = sensorUnit(hass, id);
        // "remaining" sensors are not daily totals and must not go into a forecast slot,
        // but energy_production_today_remaining maps to remaining_today_entity.
        if (id.includes("_remaining")) {
            if (id.includes("energy_production_today_remaining")) {
                if (unit === "kWh" || unit === "Wh")
                    remainingTodayEntity = id;
            }
            continue;
        }
        if (unit !== "kWh" && unit !== "Wh")
            continue;
        for (const [key, slot] of KEY_SLOTS) {
            // entity_id format is sensor.{slug}_{key}, so the key is always the suffix
            if (id.endsWith("_" + key)) {
                slots[slot] = id;
                break;
            }
        }
    }
    logDetectedSlots("Open-Meteo", slots, "remaining_today_entity:", remainingTodayEntity ?? "(none)");
    return {
        forecast_entities: slots,
        integration_type: "open_meteo_solar_forecast",
        remaining_today_entity: remainingTodayEntity,
    };
}
const openMeteo = {
    hoursAttr: (state) => state.attributes?.wh_period,
    parseHours: parseWhPeriod,
    detect,
};

/**
 * Parse Volcast's `hours` attribute into HourPoint[].
 *
 * The attribute can take two forms:
 *
 *   a) Array of numbers — treated as a midnight-indexed 24-element array
 *      where index = clock hour. This is the standard Volcast format for
 *      full-day forecasts. If Volcast returns a shorter array (past hours
 *      removed during the day), left-over indices still map to clock hours
 *      0-N; the LEFT filter in computeHeaderStats then applies the same
 *      clock-hour comparison, so hours are still excluded correctly.
 *
 *   b) Array of objects — clock hour is resolved in priority order:
 *        1. Numeric "hour", "time", or "h" field
 *        2. ISO datetime string in "period_start", "datetime", or "start"
 *           — the T-component is extracted directly (avoids UTC offset shift)
 *        3. Array index (last resort)
 *      Multiple sub-hourly periods for the same clock hour are summed.
 *
 * Output is sorted ascending by clock hour with leading/trailing zeros
 * trimmed, consistent with all other integration parsers.
 */
function parseVolcastHours(raw) {
    if (!Array.isArray(raw))
        return [];
    const buckets = new Map();
    for (let i = 0; i < raw.length; i++) {
        const v = raw[i];
        let hour;
        let kwh;
        if (typeof v === "number") {
            // Bare number: index = clock hour (standard 24-element midnight array)
            hour = i;
            kwh = isFinite(v) ? v : 0;
        }
        else if (typeof v === "object" && v !== null) {
            const obj = v;
            // ── Resolve clock hour ────────────────────────────────────────────
            const rawH = obj.hour ?? obj.time ?? obj.h;
            if (typeof rawH === "number" && isFinite(rawH)) {
                hour = rawH;
            }
            else if (typeof rawH === "string") {
                const parsed = parseInt(rawH, 10);
                hour = isFinite(parsed) ? parsed : i;
            }
            else {
                // Fallback: ISO datetime field — extract T-component as local hour.
                // Matches "2024-04-26T14:00:00" → 14.  Avoids new Date() UTC shift.
                const dtField = obj.period_start ?? obj.datetime ?? obj.start;
                if (typeof dtField === "string") {
                    const m = dtField.match(/T(\d{2}):/);
                    hour = m ? parseInt(m[1], 10) : i;
                }
                else {
                    hour = i;
                }
            }
            kwh = readEnergyValue(obj);
        }
        else {
            continue; // skip null / unexpected types
        }
        if (!isFinite(hour) || hour < 0 || hour > 23)
            continue;
        buckets.set(hour, (buckets.get(hour) ?? 0) + kwh);
    }
    return trimZeroHours(bucketsToPoints(buckets));
}
/** Parse "YYYY-MM-DD" as a local-timezone Date (avoids UTC midnight offset). */
function parseLocalDate(value) {
    const m = value.match(/^(\d{4})-(\d{2})-(\d{2})/);
    if (!m)
        return null;
    const d = new Date(+m[1], +m[2] - 1, +m[3]);
    return isNaN(d.getTime()) ? null : d;
}
/** Return a new Date set to local midnight of the given date. */
function localMidnight(d) {
    const out = new Date(d);
    out.setHours(0, 0, 0, 0);
    return out;
}
/**
 * Extract the forecast date from an entity, trying in priority order:
 *   1. `datetime` state attribute  (ISO datetime string)
 *   2. `date`     state attribute  (ISO date string  YYYY-MM-DD)
 *   3. ISO date pattern inside the entity_id  (YYYY_MM_DD or YYYY-MM-DD)
 *
 * Returns null when no reliable date can be found.
 */
function extractForecastDate(entityId, state) {
    // 1. datetime attribute
    const dtAttr = state?.attributes?.datetime;
    if (typeof dtAttr === "string") {
        const d = new Date(dtAttr);
        if (!isNaN(d.getTime()))
            return d;
    }
    // 2. date attribute (parse as local to avoid UTC-offset day shift)
    const dateAttr = state?.attributes?.date;
    if (typeof dateAttr === "string") {
        const d = parseLocalDate(dateAttr);
        if (d)
            return d;
    }
    // 3. ISO date embedded in entity_id:  sensor.foo_2024_04_15_bar
    //                                  or sensor.foo_2024-04-15_bar
    const m = entityId.match(/(\d{4})[_-](\d{2})[_-](\d{2})/);
    if (m) {
        const d = new Date(+m[1], +m[2] - 1, +m[3]);
        if (!isNaN(d.getTime()))
            return d;
    }
    return null;
}
/**
 * Volcast has no identifying platform, so this is the fallback detector: it
 * looks for sensors carrying an `hours` array and always returns a result.
 */
function detectVolcast(sensors, hass) {
    // ── Split into forecast sensors (have "hours") and actual candidates ──────
    const forecastSensors = sensors.filter((e) => Array.isArray(hass.states[e.entity_id]?.attributes?.hours));
    // ── Map each forecast sensor to a day-offset from today ───────────────────
    const todayMidnight = localMidnight(new Date());
    const candidates = forecastSensors.map((e) => {
        const state = hass.states[e.entity_id];
        const date = extractForecastDate(e.entity_id, state);
        let offset = null;
        if (date !== null) {
            const diff = localMidnight(date).getTime() - todayMidnight.getTime();
            offset = Math.round(diff / 86400000);
        }
        return { entityId: e.entity_id, offset };
    });
    // ── Build the 7-slot array ────────────────────────────────────────────────
    const slots = emptySlots();
    const hasDates = candidates.some((c) => c.offset !== null);
    if (hasDates) {
        // Place entities whose offset falls within [0, 6]
        for (const c of candidates) {
            if (c.offset !== null && c.offset >= 0 && c.offset < 7) {
                slots[c.offset] = c.entityId;
            }
        }
        // Any leftover entities (past, or no date info) fill the first empty slots
        const unplaced = candidates
            .filter((c) => c.offset === null || c.offset < 0 || c.offset >= 7)
            .sort((a, b) => a.entityId.localeCompare(b.entityId));
        let si = 0;
        for (const c of unplaced) {
            while (si < 7 && slots[si])
                si++;
            if (si < 7)
                slots[si++] = c.entityId;
        }
    }
    else {
        // No date metadata at all — stable alphabetical fallback
        const sorted = [...forecastSensors]
            .sort((a, b) => a.entity_id.localeCompare(b.entity_id))
            .map((e) => e.entity_id);
        for (let i = 0; i < 7; i++)
            slots[i] = sorted[i] ?? "";
    }
    // ── Debug log ─────────────────────────────────────────────────────────────
    console.debug("[solar-forecast-card] auto-detect mapping:", candidates
        .slice()
        .sort((a, b) => (a.offset ?? 999) - (b.offset ?? 999))
        .map((c) => ({
        entity: c.entityId.replace(/^sensor\./, ""),
        offset: c.offset ?? "no-date",
        slot: c.offset !== null && c.offset >= 0 && c.offset < 7
            ? slotLabel(c.offset)
            : "unplaced",
    })));
    return {
        forecast_entities: slots,
        integration_type: "volcast",
    };
}
const volcast = {
    hoursAttr: (state) => state.attributes?.hours,
    parseHours: parseVolcastHours,
};

const ADAPTERS = {
    solcast,
    volcast,
    forecast_solar: forecastSolar,
    open_meteo_solar_forecast: openMeteo,
    manual,
};
const PLATFORM_ADAPTERS = [solcast, forecastSolar, openMeteo];
function adapterFor(type) {
    return (type && ADAPTERS[type]) || manual;
}
function readHoursAttr(type, state) {
    return state ? adapterFor(type).hoursAttr(state) : undefined;
}
/** Parse a raw hourly attribute. Returns [] rather than throwing on bad data. */
function parseHours(type, raw) {
    if (raw === null || raw === undefined)
        return [];
    try {
        return adapterFor(type).parseHours(raw);
    }
    catch (err) {
        console.debug("[solar-forecast-card] hours: parse failed →", err, "\nraw value:", raw);
        return [];
    }
}
function autoDetect(sensors, hass) {
    for (const adapter of PLATFORM_ADAPTERS) {
        const result = adapter.detect?.(sensors, hass);
        if (result)
            return result;
    }
    return detectVolcast(sensors, hass);
}

const COMPLETE_THRESHOLD = 1.0;
function buildRows(hass, cfg) {
    const today = new Date();
    const todayArrays = readArrayActuals(hass, cfg);
    const todayActualKwh = resolveActualKwh(hass, cfg, todayArrays);
    const showEstimate10 = cfg.integration_type === "solcast" && cfg.display_estimate10;
    const raw = cfg.forecast_entities.map((entityId, i) => {
        const date = new Date(today);
        date.setDate(today.getDate() + i);
        const s = entityId ? hass.states[entityId] : undefined;
        return {
            dayIndex: i + 1,
            date,
            isToday: i === 0,
            entityId,
            forecastKwh: readKwh(hass, entityId),
            actualKwh: i === 0 ? todayActualKwh : null,
            actualArrays: i === 0 ? todayArrays : null,
            estimate10Kwh: showEstimate10
                ? sumEstimate10(s?.attributes?.detailedForecast)
                : null,
            rawHoursAttr: readHoursAttr(cfg.integration_type, s),
        };
    });
    const maxKwh = Math.max(...raw.map((r) => r.forecastKwh ?? 0), 0.001);
    const { lowKwh, highKwh } = resolveThresholds(hass, cfg);
    const lowThresholdPct = cfg.show_low_threshold_zone ? thresholdPct(lowKwh, maxKwh) : null;
    const highThresholdPct = cfg.show_high_threshold_zone ? thresholdPct(highKwh, maxKwh) : null;
    return raw.map((r) => {
        const forecastPct = r.forecastKwh !== null
            ? Math.round((r.forecastKwh / maxKwh) * 100) : 0;
        const rawActualPct = r.actualKwh !== null
            ? Math.round((r.actualKwh / maxKwh) * 100) : 0;
        const actualPct = Math.min(rawActualPct, forecastPct);
        const dottedPct = forecastPct - actualPct;
        const isComplete = r.isToday
            && r.forecastKwh !== null && r.forecastKwh > 0
            && r.actualKwh !== null
            && r.actualKwh / r.forecastKwh >= COMPLETE_THRESHOLD;
        return { ...r, lowThresholdPct, highThresholdPct, forecastPct, actualPct, dottedPct, isComplete };
    });
}
function resolveThreshold(hass, entityId, fallback) {
    if (entityId && entityId.startsWith("sensor.")) {
        const entity = hass?.states[entityId];
        if (entity && entity.state !== "unknown" &&
            entity.state !== "unavailable" &&
            entity.state.trim() !== "") {
            const value = Number(entity.state);
            if (Number.isFinite(value) && value >= 0) {
                const unit = entity.attributes?.unit_of_measurement?.toLowerCase();
                return unit === "wh" ? value / 1000 : value;
            }
        }
    }
    return typeof fallback === "number" &&
        Number.isFinite(fallback) && fallback >= 0
        ? fallback
        : undefined;
}
function resolveThresholds(hass, cfg) {
    return {
        lowKwh: resolveThreshold(hass, cfg.low_threshold_entity, cfg.low_threshold),
        highKwh: resolveThreshold(hass, cfg.high_threshold_entity, cfg.high_threshold),
    };
}
/** Bars scale to the week's peak, so a threshold above it has no place on the chart. */
function thresholdPct(kwh, maxKwh) {
    if (kwh === undefined)
        return null;
    const pct = (kwh / maxKwh) * 100;
    return pct <= 100 ? pct : null;
}
function forecastTier(hass, cfg, kwh) {
    if (kwh === null)
        return "average";
    const { lowKwh, highKwh } = resolveThresholds(hass, cfg);
    if (lowKwh !== undefined && kwh < lowKwh)
        return "low";
    if (highKwh !== undefined && kwh > highKwh)
        return "high";
    return "average";
}

const POPUP_CLOSE_MS = 260;
const MAIN_ACTUAL_REFRESH_MS = 60000;
const HISTORY_RETRY_MS = 5 * 60000;
const HISTORY_RECORD_INTERVAL_MS = 15 * 60000;

const DAY_KEYS = [
    "sunday_short",
    "monday_short",
    "tuesday_short",
    "wednesday_short",
    "thursday_short",
    "friday_short",
    "saturday_short",
];
/** Translation and locale-aware formatting for one render pass. */
class Formatter {
    constructor(hass) {
        this._hass = hass;
        this._language = resolveLanguage(hass);
    }
    t(key, vars) {
        return localize(this._language, key, vars);
    }
    number(value, minimumFractionDigits, maximumFractionDigits = minimumFractionDigits) {
        return new Intl.NumberFormat(this._language, {
            minimumFractionDigits,
            maximumFractionDigits,
        }).format(value);
    }
    power(watts) {
        if (watts < 10)
            return `0 ${this.t("card.units.watts")}`;
        if (watts < 1000)
            return `${Math.round(watts)} ${this.t("card.units.watts")}`;
        return `${this.number(watts / 1000, 1)} ${this.t("card.units.kilowatts")}`;
    }
    /**
     * Format an energy value compactly: 2 dp below 1 kWh, 1 dp above.
     * Guards against non-finite input — should never occur in normal use, but
     * prevents "NaN kWh" / "Infinity kWh" from appearing in the header.
     */
    kwh(kwh) {
        if (!isFinite(kwh) || kwh < 0)
            return `0.00 ${this.t("card.units.kilowattHours")}`;
        return `${kwh < 1 ? this.number(kwh, 2) : this.number(kwh, 1)} ${this.t("card.units.kilowattHours")}`;
    }
    dayLabel(row) {
        if (row.dayIndex === 1)
            return this.t("day.today");
        if (row.dayIndex === 2)
            return this.t("day.tomorrow");
        return this.t(`day.${DAY_KEYS[row.date.getDay()]}`);
    }
    dateLabel(date) {
        try {
            return new Intl.DateTimeFormat(this._dateLocale(), {
                day: "2-digit",
                month: "2-digit",
            }).format(date);
        }
        catch {
            const d = String(date.getDate()).padStart(2, "0");
            const m = String(date.getMonth() + 1).padStart(2, "0");
            return `${d}/${m}`;
        }
    }
    fullDateLabel(date, isToday) {
        const weekday = isToday ? this.t("card.days.today") : date.toLocaleDateString(this._language, { weekday: "long" });
        const dt = date.toLocaleDateString(this._language, { day: "numeric", month: "long" });
        return `${weekday} · ${dt}`;
    }
    hourLabel(hour) {
        const date = new Date(2000, 0, 1, hour, 0, 0, 0);
        const hour12 = this._hour12();
        try {
            return new Intl.DateTimeFormat(this._dateLocale(), {
                hour: "numeric",
                minute: "2-digit",
                ...(hour12 === undefined ? {} : { hour12 }),
            }).format(date);
        }
        catch {
            return String(hour).padStart(2, "0") + ":00";
        }
    }
    _dateLocale() {
        const hass = this._hass;
        const localeLanguage = hass?.locale && typeof hass.locale === "object" && "language" in hass.locale
            ? hass.locale.language
            : undefined;
        if (typeof localeLanguage === "string" && localeLanguage.trim() !== "") {
            return localeLanguage.replace("_", "-");
        }
        if (typeof hass?.language === "string" && hass.language.trim() !== "") {
            return hass.language.replace("_", "-");
        }
        return "en-GB";
    }
    _hour12() {
        const timeFormat = this._hass?.locale?.time_format;
        if (typeof timeFormat !== "string")
            return undefined;
        const normalized = timeFormat.toLowerCase().replace(/[-_\s]/g, "");
        if (normalized === "12" || normalized === "12h" || normalized === "ampm")
            return true;
        if (normalized === "24" || normalized === "24h" || normalized === "twentyfour")
            return false;
        return undefined;
    }
}

function renderBars(row, tier) {
    const { forecastPct, actualPct, dottedPct, isComplete, isToday } = row;
    if (!isToday || row.actualKwh === null || row.forecastKwh === null) {
        return b `<div part="daily-bar" class="bar-forecast ${tier}" style="height:${forecastPct}%"></div>`;
    }
    // Completion indicator — solid forecast bar regardless of arrays
    if (isComplete) {
        return b `<div part="daily-bar" class="bar-forecast complete ${tier}" style="height:${forecastPct}%"></div>`;
    }
    // Arrays that are currently producing (kwh > 0).
    const visibleArrays = row.actualArrays?.filter((a) => a.kwh > 0) ?? [];
    const hasDotted = dottedPct > 1;
    const dotted = hasDotted ? b `
    <div part="daily-bar" class="bar-dotted ${tier} ${actualPct > 0 ? "partial" : "full"}"
         style="height:${dottedPct}%;bottom:${actualPct}%"></div>
  ` : A;
    // Only enter stacked mode when at least 2 arrays are producing —
    // a single active source stays on the existing single-colour bar path.
    if (visibleArrays.length >= 2) {
        // ── Stacked per-array segments ──────────────────────────────────────
        // Segments use flex-grow proportional to each array's kWh so they
        // automatically fill the container correctly without pixel maths.
        //
        // Label visibility: estimate the segment's pixel height from the
        // mid-range bar height (120 px ≈ clamp(100 px, 20 vw, 160 px)).
        // Only render the label when the estimated height is ≥ 16 px.
        const sumKwh = visibleArrays.reduce((s, a) => s + a.kwh, 0);
        const stackPx = (actualPct / 100) * 120; // estimated total stack height
        return b `
      <div part="daily-bar" class="bar-arrays-stack" style="height:${actualPct}%">
        ${visibleArrays.map((arr, i) => {
            const segPx = sumKwh > 0 ? (arr.kwh / sumKwh) * stackPx : 0;
            const showLabel = arr.label && segPx >= 16;
            return b `
            <div part="daily-bar" class="bar-array-segment seg-color-${i % 8}" style="flex:${arr.kwh}">
              ${showLabel ? b `<span class="array-label">${arr.label}</span>` : A}
            </div>
          `;
        })}
      </div>
      ${dotted}
    `;
    }
    // ── Single-colour actual bar — default and single-source fallback ───
    return b `
    <div part="daily-bar" class="bar-actual ${hasDotted ? "below-dotted" : ""}"
         style="height:${actualPct}%"></div>
    ${dotted}
  `;
}
/** Zone edges for the track's background, consumed by .bar-bg in the styles. */
function thresholdZoneStyle(row) {
    const edges = [
        row.lowThresholdPct === null ? "" : `--sfc-low-zone-top:${row.lowThresholdPct.toFixed(1)}%;`,
        row.highThresholdPct === null ? "" : `--sfc-high-zone-bottom:${row.highThresholdPct.toFixed(1)}%;`,
    ];
    return edges.join("");
}
function renderDayColumn(row, tier, fmt, onOpen) {
    const valueLabel = row.forecastKwh !== null
        ? b `<span class="value-num">${fmt.number(row.forecastKwh, 1)}</span><span class="value-unit">${fmt.t("card.units.kilowattHours")}</span>`
        : b `<span class="value-empty">—</span>`;
    const estimate10Label = row.estimate10Kwh !== null
        ? b `<span class="value-estimate10">${fmt.t("card.labels.p10")} ${fmt.number(row.estimate10Kwh, 1)}</span>`
        : A;
    return b `
    <div
      class="col ${row.isToday ? "today" : ""} ${row.dayIndex <= 2 ? "primary-day-label" : ""}"
      role="button"
      tabindex="0"
      aria-label=${fmt.t("card.aria.dayButton", { day: fmt.dayLabel(row), date: fmt.dateLabel(row.date) })}
      @click=${() => onOpen(row)}
      @keydown=${(e) => (e.key === "Enter" || e.key === " ") && onOpen(row)}
    >
      <div part="daily-value" class="col-value">${valueLabel}${estimate10Label}</div>
      <div class="col-bar-wrap">
        <div part="daily-bar" class="bar-bg" style=${thresholdZoneStyle(row)}></div>
        ${renderBars(row, tier)}
      </div>
      <div part="daily-label" class="col-label">
        <span class="day-name">${fmt.dayLabel(row)}</span>
        <span class="day-date">${fmt.dateLabel(row.date)}</span>
      </div>
    </div>
  `;
}

/**
 * Forecast summary: +1HR and LEFT. Both values are derived purely from the
 * integration's own hourly forecast data — they are independent of actual
 * generation sensors.
 *
 * +1HR — forecast kWh for the next full hour (currentHour + 1).
 * LEFT — sum of all forecast kWh for every hour still remaining today
 *        (i.e. all hours > currentHour, which includes +1HR itself).
 *
 * The gate is data-driven, not integration-name-driven: integrations that
 * carry no hourly attribute (forecast.solar being the current example) parse
 * to no points, so both values stay null and the line is not rendered.
 */
function deriveForecastSummary(hass, cfg) {
    const todayEntityId = cfg.forecast_entities[0];
    const todayState = todayEntityId ? hass?.states[todayEntityId] : undefined;
    const type = cfg.integration_type;
    const points = parseHours(type, readHoursAttr(type, todayState));
    // nextForecastHour is the next FULL hour slot after whatever the clock
    // currently shows.  At 13:15 → 14; at 13:00 → 14; at 23:50 → 24.
    // Hour 24 won't match any slot so both values stay null after midnight.
    const nextForecastHour = new Date().getHours() + 1; // browser/local time
    // isFinite guards: a bad attribute can never produce "NaN kWh".
    const nextHourPt = points.find((p) => p.hour === nextForecastHour);
    const nextHourKwh = nextHourPt && isFinite(nextHourPt.kwh) ? nextHourPt.kwh : null;
    // Tomorrow is automatically excluded: only today's entity is parsed.
    const futurePoints = points.filter((p) => p.hour >= nextForecastHour);
    const sum = futurePoints.reduce((s, p) => s + p.kwh, 0);
    const forecastLeftKwh = futurePoints.length > 0 && isFinite(sum) ? sum : null;
    return { nextHourKwh, forecastLeftKwh };
}
function computeHeaderStats(hass, cfg) {
    const derived = deriveForecastSummary(hass, cfg);
    const validForecasts = cfg.forecast_entities
        .map((id) => readKwh(hass, id))
        .filter((v) => v !== null);
    const totalKwh = validForecasts.reduce((s, v) => s + v, 0);
    return {
        powerW: readPowerW(hass, cfg.live_power_entity),
        actualKwh: resolveActualKwh(hass, cfg, readArrayActuals(hass, cfg)),
        // next_hour_entity / remaining_today_entity take precedence over the
        // auto-derived values. This lets users point to any sensor (e.g. a helper
        // or a custom integration attribute) regardless of integration type.
        nextHourKwh: readKwh(hass, cfg.next_hour_entity) ?? derived.nextHourKwh,
        forecastLeftKwh: readKwh(hass, cfg.remaining_today_entity) ?? derived.forecastLeftKwh,
        week: validForecasts.length > 0
            ? { totalKwh, avgKwh: totalKwh / validForecasts.length }
            : null,
    };
}

function renderExportRate(hass, cfg, fmt) {
    if (!cfg.export_rate_entity)
        return A;
    const st = hass?.states[cfg.export_rate_entity];
    if (!st)
        return A;
    // Treat unavailable / unknown / non-numeric states as absent — hide cleanly
    const num = parseFloat(st.state);
    if (!isFinite(num))
        return A;
    const unit = st.attributes?.unit_of_measurement ?? "";
    return b `
    <div class="export-rate-row">
      <span class="live-label">${fmt.t("card.labels.exportRate")}</span>
      <span>${st.state}${unit ? ` ${unit}` : ""}</span>
    </div>
  `;
}
function renderLive(hass, cfg, fmt) {
    const { powerW, actualKwh, nextHourKwh, forecastLeftKwh, week } = computeHeaderStats(hass, cfg);
    const hasPower = powerW !== null;
    const hasActual = actualKwh !== null;
    const hasForecastSummary = nextHourKwh !== null || forecastLeftKwh !== null;
    if (!hasPower && !hasActual && !week && !hasForecastSummary)
        return A;
    const liveParts = [];
    if (hasPower)
        liveParts.push(fmt.power(powerW));
    if (hasActual)
        liveParts.push(`${fmt.number(actualKwh, 1)} ${fmt.t("card.units.kilowattHours")}`);
    return b `
    <div class="header-live">
      ${hasPower || hasActual ? b `
        <div class="live-row">
          <span class="live-label">${fmt.t("card.labels.live")}</span>
          <span>${liveParts.join(" | ")}</span>
        </div>
      ` : A}
      ${hasForecastSummary ? b `
        <div class="live-row">
          ${nextHourKwh !== null ? b `
            <span class="live-label">${fmt.t("card.labels.nextHour")}</span>
            <span>${fmt.kwh(nextHourKwh)}</span>
          ` : A}
          ${nextHourKwh !== null && forecastLeftKwh !== null ? b `
            <span style="opacity:0.35">|</span>
          ` : A}
          ${forecastLeftKwh !== null ? b `
            <span class="live-label">${fmt.t("card.labels.left")}</span>
            <span>${fmt.kwh(forecastLeftKwh)}</span>
          ` : A}
        </div>
      ` : A}
      ${week ? b `
        <div class="live-week">
          <span class="week-label">${fmt.t("card.labels.week")}</span>
          ${fmt.number(week.totalKwh, 1)} ${fmt.t("card.units.kilowattHours")} | <span class="week-label">${fmt.t("card.labels.avg")}</span> ${fmt.number(week.avgKwh, 1)} ${fmt.t("card.units.kilowattHoursPerDay")}
        </div>
      ` : A}
    </div>
  `;
}
function renderHeader(hass, cfg, fmt) {
    const title = cfg.title ?? fmt.t("card.defaultTitle");
    const icon = cfg.icon ?? "mdi:solar-power";
    return b `
    <div part="header" class="card-header">
      <div class="header-left">
        <div part="title" class="header-title">
          <ha-icon icon=${icon}></ha-icon>
          ${title}
        </div>
        ${renderExportRate(hass, cfg, fmt)}
      </div>
      ${renderLive(hass, cfg, fmt)}
    </div>
  `;
}

// Chart geometry, in viewBox units.
const WIDTH = 340;
const HEIGHT = 176;
const LEFT = 26;
const RIGHT = 332;
const TOP = 8;
const BOTTOM = 150;
const signed = (value, fmt) => `${value >= 0 ? "+" : "−"}${fmt.number(Math.abs(value), 1)}`;
function linePath(values, xOf, yOf) {
    let path = "";
    let drawing = false;
    values.forEach((value, i) => {
        if (value === null) {
            drawing = false;
            return;
        }
        path += `${drawing ? "L" : "M"}${xOf(i).toFixed(1)} ${yOf(value).toFixed(1)} `;
        drawing = true;
    });
    return path;
}
function polygon(points, gain) {
    const list = points.map(([x, y]) => `${x.toFixed(1)},${y.toFixed(1)}`).join(" ");
    return w `<polygon class=${gain ? "history-gain" : "history-loss"} points=${list}></polygon>`;
}
/** Fill the space between the lines, splitting a segment where the lines cross. */
function gapShading(days, xOf, yOf) {
    const shapes = [];
    for (let i = 0; i < days.length - 1; i++) {
        const { forecastKwh: f0, actualKwh: a0 } = days[i];
        const { forecastKwh: f1, actualKwh: a1 } = days[i + 1];
        if (f0 === null || a0 === null || f1 === null || a1 === null)
            continue;
        const d0 = a0 - f0;
        const d1 = a1 - f1;
        const forecastStart = [xOf(i), yOf(f0)];
        const forecastEnd = [xOf(i + 1), yOf(f1)];
        const actualStart = [xOf(i), yOf(a0)];
        const actualEnd = [xOf(i + 1), yOf(a1)];
        if (d0 * d1 >= 0) {
            shapes.push(polygon([forecastStart, forecastEnd, actualEnd, actualStart], d0 + d1 > 0));
        }
        else {
            const t = d0 / (d0 - d1);
            const cross = [
                forecastStart[0] + (forecastEnd[0] - forecastStart[0]) * t,
                forecastStart[1] + (forecastEnd[1] - forecastStart[1]) * t,
            ];
            shapes.push(polygon([forecastStart, cross, actualStart], d0 > 0));
            shapes.push(polygon([cross, forecastEnd, actualEnd], d1 > 0));
        }
    }
    return shapes;
}
function renderChart(days, selected, fmt, onSelect) {
    const peak = Math.max(...days.flatMap((d) => [d.forecastKwh ?? 0, d.actualKwh ?? 0]));
    const { step, top } = historyScale(peak);
    const spacing = (RIGHT - LEFT) / (days.length - 1);
    const xOf = (i) => LEFT + i * spacing;
    const yOf = (value) => BOTTOM - (value / top) * (BOTTOM - TOP);
    const ticks = Array.from({ length: top / step + 1 }, (_, i) => i * step);
    return b `
    <svg class="history-chart" viewBox="0 0 ${WIDTH} ${HEIGHT}" role="img"
         aria-label=${fmt.t("card.history.title")}>
      ${ticks.map((value) => w `
        <line class="history-grid" x1=${LEFT} x2=${RIGHT} y1=${yOf(value)} y2=${yOf(value)}></line>
        <text class="history-axis" x=${LEFT - 6} y=${yOf(value) + 3.5} text-anchor="end">${fmt.number(value, 0)}</text>
      `)}
      ${gapShading(days, xOf, yOf)}
      <path class="history-forecast" d=${linePath(days.map((d) => d.forecastKwh), xOf, yOf)}></path>
      <path class="history-actual" d=${linePath(days.map((d) => d.actualKwh), xOf, yOf)}></path>
      ${days.map((day, i) => w `
        ${day.forecastKwh === null ? A : w `<circle class="history-dot-forecast" cx=${xOf(i)} cy=${yOf(day.forecastKwh)} r="2.8"></circle>`}
        ${day.actualKwh === null ? A : w `<circle class="history-dot-actual" cx=${xOf(i)} cy=${yOf(day.actualKwh)} r="3.4"></circle>`}
        <text class="history-axis ${i === selected ? "selected" : ""}" x=${xOf(i)} y=${HEIGHT - 8} text-anchor="middle">${fmt.dayLabel({ dayIndex: 3, date: day.date })}</text>
        <rect
          class="history-hit ${i === selected ? "selected" : ""}"
          x=${xOf(i) - spacing / 2} y="0" width=${spacing} height=${HEIGHT - 4} rx="6"
          tabindex="0" role="button"
          aria-label=${fmt.dayLabel({ dayIndex: 3, date: day.date })}
          @click=${() => onSelect(i)}
          @keydown=${(e) => (e.key === "Enter" || e.key === " ") && onSelect(i)}
        ></rect>
      `)}
    </svg>
  `;
}
function renderScore(score, fmt) {
    const unit = fmt.t("card.units.kilowattHours");
    return b `
    <div class="history-stats">
      <div class="history-stat">
        <strong>${fmt.number(score.accuracyPct, 0)}%</strong>
        <span>${fmt.t("card.history.accuracy")}</span>
      </div>
      <div class="history-stat">
        <strong>${fmt.number(score.averageMissKwh, 1)} ${unit}</strong>
        <span>${fmt.t("card.history.averageMiss")}</span>
      </div>
      <div class="history-stat">
        <strong class=${score.biasKwh >= 0 ? "over" : "under"}>${signed(score.biasKwh, fmt)} ${unit}</strong>
        <span>${fmt.t("card.history.bias")}</span>
      </div>
    </div>
  `;
}
function readout(day, fmt) {
    const name = fmt.dayLabel({ dayIndex: 3, date: day.date });
    if (day.forecastKwh === null)
        return fmt.t("card.history.noForecast", { day: name });
    const forecast = fmt.number(day.forecastKwh, 1);
    if (day.actualKwh === null)
        return fmt.t("card.history.noActual", { day: name, forecast });
    return fmt.t("card.history.readout", {
        day: name,
        forecast,
        actual: fmt.number(day.actualKwh, 1),
        difference: signed(day.actualKwh - day.forecastKwh, fmt),
    });
}
function renderHistory(days, selected, fmt, onSelect) {
    if (days === null) {
        return b `<div class="chart-no-data"><p>${fmt.t("card.history.loading")}</p></div>`;
    }
    if (!days.some((d) => d.forecastKwh !== null || d.actualKwh !== null)) {
        return b `<div class="chart-no-data"><p>${fmt.t("card.history.noData")}</p></div>`;
    }
    const score = scoreHistory(days);
    return b `
    <div part="history" class="history">
      <div class="history-head">
        <span class="history-title">${fmt.t("card.history.title")}</span>
        <span class="history-legend">
          <span class="history-key forecast">${fmt.t("card.history.forecast")}</span>
          <span class="history-key actual">${fmt.t("card.history.actual")}</span>
        </span>
      </div>
      ${score ? renderScore(score, fmt) : A}
      ${renderChart(days, selected, fmt, onSelect)}
      <div class="history-readout">${readout(days[selected], fmt)}</div>
    </div>
  `;
}

/**
 * Render the hourly forecast chart rows.
 *
 * @param points       Parsed hourly forecast points (trimmed, sorted by hour).
 * @param peakKwh      Highest forecast kWh value — used to highlight peak row.
 * @param maxRef       Bar-scale ceiling (inverter / array / day peak).
 * @param actualHourly Optional: Map<localHour, kWh> from HA history.
 *   undefined  → not today; render forecast-only (3-column, unchanged layout).
 *   null       → today but fetch still in progress; render forecast-only until ready.
 *   Map        → today, fetch complete; render 4-column with Forecast + Actual.
 * @param isToday      True when the chart is showing today's forecast. Used to
 *   enable current-hour row highlighting; false = no highlight.
 */
function renderHourlyChart(points, peakKwh, maxRef, actualHourly, isToday, fmt) {
    if (points.length === 0) {
        return b `
      <div class="chart-no-data">
        <p>${fmt.t("card.popup.noHourlyData")}</p>
      </div>
    `;
    }
    // Only show the Actual column when the fetch has completed (Map, not null/undefined)
    const showActualCol = actualHourly instanceof Map;
    // Current local hour — used to highlight the matching row.
    // Set to -1 for future days so no row ever matches.
    const currentHour = isToday ? new Date().getHours() : -1;
    return [
        b `
      <div class="chart-header ${showActualCol ? "with-actuals" : ""}">
        <span class="col-time">${fmt.t("card.popup.chart.time")}</span>
        <span class="col-power">${fmt.t("card.popup.chart.power")}</span>
        <span class="col-kwh">${showActualCol ? fmt.t("card.popup.chart.forecastShort") : fmt.t("card.popup.chart.kwh")}</span>
        ${showActualCol ? b `<span class="col-actual">${fmt.t("card.popup.chart.actualShort")}</span>` : A}
      </div>
    `,
        ...points.map((pt, i) => {
            const pct = maxRef > 0 ? Math.min((pt.kwh / maxRef) * 100, 100) : 0;
            const isPeak = pt.kwh === peakKwh && peakKwh > 0;
            const isCurrentHour = pt.hour === currentHour;
            // Stagger: 20ms base + 18ms per row, capped at 300ms
            const delay = Math.min(20 + i * 18, 300);
            // Look up actual kWh for this hour.
            // null  = no entry in map → future hour or pre-sunrise → show dash
            // number = real measured value (> 0 since map only stores positives)
            const actualKwh = showActualCol
                ? (actualHourly.has(pt.hour) ? actualHourly.get(pt.hour) : null)
                : null;
            const actualPct = actualKwh !== null && maxRef > 0
                ? Math.min((actualKwh / maxRef) * 100, 100)
                : 0;
            const compareClass = actualKwh === null
                ? ""
                : actualKwh > pt.kwh + 0.005
                    ? "actual-over"
                    : actualKwh < pt.kwh - 0.005
                        ? "actual-under"
                        : "actual-match";
            return b `
        <div part="popup-row" class="chart-row
          ${showActualCol ? "with-actuals" : ""}
          ${isCurrentHour ? "current-hour" : ""}">
          <span class="chart-hour">${fmt.hourLabel(pt.hour)}</span>
          <div class="chart-bar-track ${actualKwh !== null ? "with-actual" : ""}">
            <div
              class="chart-bar-fill ${isPeak ? "peak" : ""}"
              style="width:${pct.toFixed(1)}%;--delay:${delay}ms"
            ></div>
            ${actualKwh !== null ? b `
              <div
                class="chart-actual-fill ${compareClass}"
                style="width:${actualPct.toFixed(1)}%;--delay:${delay}ms"
              ></div>
            ` : A}
          </div>
          <span class="chart-val ${isPeak ? "peak" : ""}">
            ${fmt.number(pt.kwh, 2)}
          </span>
          ${showActualCol ? b `
            <span class="chart-val-actual ${actualKwh !== null ? compareClass : "empty"}">
              ${actualKwh !== null ? fmt.number(actualKwh, 2) : "—"}
            </span>
          ` : A}
        </div>
      `;
        }),
    ];
}
function renderHourlyChartContent(cfg, row, actualHourly, fmt) {
    if (cfg.integration_type === "forecast_solar") {
        return b `
      <div class="chart-no-data">
        <p>${fmt.t("card.popup.integrationNoHourlyData")}</p>
      </div>
    `;
    }
    const points = parseHours(cfg.integration_type, row.rawHoursAttr);
    const peakKwh = points.length ? Math.max(...points.map((p) => p.kwh)) : 0;
    const { inverter_max_kw, solar_max_kwp } = cfg;
    let maxRef;
    if (inverter_max_kw !== undefined && solar_max_kwp !== undefined) {
        maxRef = solar_max_kwp >= inverter_max_kw ? inverter_max_kw : solar_max_kwp;
    }
    else if (inverter_max_kw !== undefined) {
        maxRef = inverter_max_kw;
    }
    else if (solar_max_kwp !== undefined) {
        maxRef = solar_max_kwp;
    }
    else {
        maxRef = peakKwh;
    }
    return renderHourlyChart(points, peakKwh, maxRef, row.isToday ? actualHourly : undefined, row.isToday, fmt);
}
function renderMainHourly(cfg, row, actualHourly, fmt) {
    if (!row || !row.entityId) {
        return b `
      <div class="main-hourly">
        <div class="chart-no-data">
          <p>${fmt.t("card.popup.noHourlyData")}</p>
        </div>
      </div>
    `;
    }
    return b `
    <div class="main-hourly">
      <div class="main-hourly-summary">
        <span class="main-hourly-day">${fmt.fullDateLabel(row.date, row.isToday)}</span>
        <span class="main-hourly-total">
          ${row.forecastKwh !== null
        ? `${fmt.number(row.forecastKwh, 2)} ${fmt.t("card.units.kilowattHours")} ${fmt.t("card.labels.forecast")}`
        : fmt.t("card.popup.noForecastData")}
        </span>
      </div>
      <div class="chart-scroll main-hourly-chart">
        ${renderHourlyChartContent(cfg, row, actualHourly, fmt)}
      </div>
    </div>
  `;
}

/**
 * Returns the actual-generation subtitle for the popup header.
 * Only shown for today's row; format depends on whether arrays are configured.
 *
 * - No arrays:  "<X.XX> kWh generated"
 * - Arrays:     "E: 4.2 kWh | W: 3.8 kWh | Total: 8.0 kWh"
 */
function renderActualSubtitle(row, fmt) {
    if (!row.isToday)
        return A;
    const sum = row.actualArrays?.reduce((s, a) => s + a.kwh, 0) ?? 0;
    if (row.actualArrays && sum > 0) {
        // Arrays are producing — show per-array breakdown with total.
        const arrayText = row.actualArrays
            .map((a) => `${a.label}: ${fmt.number(a.kwh, 1)} ${fmt.t("card.units.kilowattHours")}`)
            .join(" | ");
        return b `
      <span class="popup-subtitle">
        ${arrayText} | <span class="popup-total-kwh">${fmt.t("card.labels.total")}: ${fmt.number(sum, 1)} ${fmt.t("card.units.kilowattHours")}</span>
      </span>
    `;
    }
    // No arrays configured, or arrays configured but not yet producing.
    // Show the single actual total when available rather than an all-zeros
    // breakdown (row.actualKwh is the today_actual_entity value here).
    if (row.actualKwh !== null) {
        return b `
      <span class="popup-subtitle">
        <span class="popup-total-kwh">${fmt.number(row.actualKwh, 2)}</span> ${fmt.t("card.units.kilowattHours")} ${fmt.t("card.labels.generated")}
      </span>
    `;
    }
    return A;
}
function renderPopup(cfg, { row, visible, actualHourly, onClose }, fmt) {
    return b `
    <div
      class="popup-overlay ${visible ? "visible" : ""}"
      @click=${onClose}
    >
      <div part="popup" class="popup-panel" @click=${(e) => e.stopPropagation()}>

        <div class="popup-header">
          <div class="popup-title">
            <span class="popup-day-name">
              ${fmt.fullDateLabel(row.date, row.isToday)}
            </span>
            <span class="popup-subtitle">
              ${row.forecastKwh !== null
        ? b `<span class="popup-total-kwh">${fmt.number(row.forecastKwh, 2)}</span> ${fmt.t("card.units.kilowattHours")} ${fmt.t("card.labels.forecast")}`
        : b `${fmt.t("card.popup.noForecastData")}`}
            </span>
            ${renderActualSubtitle(row, fmt)}
          </div>
          <button
            class="popup-close"
            aria-label=${fmt.t("card.popup.close")}
            @click=${onClose}
          >
            <ha-icon icon="mdi:close"></ha-icon>
          </button>
        </div>

        <div class="chart-scroll">
          ${renderHourlyChartContent(cfg, row, actualHourly, fmt)}
        </div>

      </div>
    </div>
  `;
}

const baseStyles = i$3 `
  :host {
    display: block;
    --sfc-card-padding-default: 16px 12px 14px;
    --sfc-value-font-size-default: 0.75rem;
    --sfc-value-unit-font-size-default: 0.60rem;
    --sfc-value-estimate-font-size-default: 0.58rem;
    --sfc-value-empty-font-size-default: 0.78rem;
    --sfc-day-name-font-size-default: 0.75rem;
    --sfc-day-date-font-size-default: 0.65rem;
    --sfc-two-day-note-font-size-default: 0.65rem;
    --sfc-array-label-font-size-default: 0.5rem;
  }

  ha-card {
    background: var(--sfc-card-background, var(--ha-card-background, var(--card-background-color, var(--primary-background-color, #fff))));
    border-radius: var(--sfc-card-border-radius, var(--ha-card-border-radius, 12px));
    box-shadow: var(--sfc-card-box-shadow, var(--ha-card-box-shadow, none));
    padding: var(--sfc-card-padding, var(--sfc-card-padding-default));
    overflow: hidden;
    box-sizing: border-box;
  }
`;
const placeholderStyles = i$3 `
  /* ── Placeholder ─────────────────────────────────────── */

  .placeholder {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 28px 0;
    gap: 10px;
    color: var(--secondary-text-color);
    text-align: center;
  }

  .placeholder ha-icon {
    --mdc-icon-size: 40px;
    color: var(--state-active-color, #fbbf24);
    opacity: 0.65;
  }

  .placeholder p {
    margin: 0;
    font-size: 0.88rem;
    line-height: 1.5;
  }
`;

const dayColumnStyles = i$3 `
  /* ── 7-column grid ───────────────────────────────────── */

  .forecast-grid {
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    gap: 2px;
    min-width: 0;
  }

  /* ── 2-column grid (forecast.solar) ──────────────────── */

  .forecast-grid.two-day {
    grid-template-columns: repeat(2, minmax(0, 140px));
    justify-content: center;
    gap: 8px;
  }

  .forecast-grid.two-day .bar-bg,
  .forecast-grid.two-day .bar-forecast,
  .forecast-grid.two-day .bar-actual,
  .forecast-grid.two-day .bar-dotted {
    width: min(var(--sfc-bar-width, 72px), 72%);
  }

  .two-day-note {
    text-align: center;
    font-size: var(--sfc-two-day-note-font-size-default);
    color: var(--secondary-text-color);
    opacity: 0.45;
    margin-top: 10px;
    padding: 0 4px 2px;
  }

  /* ── Column ──────────────────────────────────────────── */

  .col {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 6px 3px 5px;
    border-radius: 12px;
    gap: 3px;
    min-width: 0;
    cursor: pointer;
    user-select: none;
    -webkit-tap-highlight-color: transparent;
    transition: background 0.2s ease, transform 0.1s ease;
    outline: none;
  }

  .col:hover {
    background: rgba(251, 191, 36, 0.08);
  }

  .col:active {
    transform: scale(0.94);
  }

  .col.today {
    background: rgba(251, 191, 36, 0.10);
  }

  .col.today:hover {
    background: rgba(251, 191, 36, 0.16);
  }

  .col.primary-day-label {
    padding-inline: 2px;
  }

  /* ── Value label ─────────────────────────────────────── */

  .col-value {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
    min-height: 30px;
    width: 100%;
    text-align: center;
    pointer-events: none;
  }

  .value-num {
    font-size: var(--sfc-font-size, var(--sfc-value-font-size-default));
    font-weight: 600;
    font-variant-numeric: tabular-nums;
    color: var(--primary-text-color);
    line-height: 1.15;
    white-space: nowrap;
  }

  .value-unit {
    font-size: var(--sfc-font-size, var(--sfc-value-unit-font-size-default));
    color: var(--secondary-text-color);
    line-height: 1.2;
  }

  .value-estimate10 {
    font-size: var(--sfc-font-size, var(--sfc-value-estimate-font-size-default));
    font-variant-numeric: tabular-nums;
    color: var(--secondary-text-color);
    opacity: 0.60;
    line-height: 1.3;
    white-space: nowrap;
  }


  .value-empty {
    font-size: var(--sfc-font-size, var(--sfc-value-empty-font-size-default));
    color: var(--secondary-text-color);
    opacity: 0.4;
    line-height: 30px;
  }

  /* ── Bar area ────────────────────────────────────────── */

  .col-bar-wrap {
    position: relative;
    width: 100%;
    height: clamp(100px, 20vw, 160px);
    display: flex;
    align-items: flex-end;
    justify-content: center;
    pointer-events: none;
  }

  .bar-bg {
    position: absolute;
    bottom: 0;
    left: 50%;
    translate: -50% 0;
    width: min(var(--sfc-bar-width, 24px), 72%);
    height: 100%;
    border-radius: var(--sfc-bar-radius, 8px);
    background-color: var(--secondary-background-color, rgba(128, 128, 128, 0.07));
    /* Threshold zones. With the zone edges unset, both tints have zero height. */
    background-image: linear-gradient(
      to top,
      var(--sfc-low-threshold-zone-color, rgba(220, 80, 80, var(--sfc-threshold-zone-opacity, 0.15))) var(--sfc-low-zone-top, 0%),
      transparent var(--sfc-low-zone-top, 0%),
      transparent var(--sfc-high-zone-bottom, 100%),
      var(--sfc-high-threshold-zone-color, rgba(22, 163, 74, var(--sfc-threshold-zone-opacity, 0.15))) var(--sfc-high-zone-bottom, 100%)
    );
  }

  .bar-forecast,
  .bar-actual,
  .bar-dotted {
    position: absolute;
    bottom: 0;
    left: 50%;
    translate: -50% 0;
    width: min(var(--sfc-bar-width, 24px), 72%);
    transition:
      height 0.55s cubic-bezier(0.34, 1.15, 0.64, 1),
      bottom 0.55s cubic-bezier(0.34, 1.15, 0.64, 1);
  }

  /* ── Forecast bar — average (default, yellow/amber) ──────── */

  .bar-forecast {
    border-radius: var(--sfc-bar-radius, 6px 6px 3px 3px);
    background: var(--sfc-average-color, linear-gradient(
      to top,
      rgba(245, 158, 11, 0.92),
      rgba(254, 215, 86, 0.78)
    ));
    box-shadow:
      0 0 0 1px rgba(251, 191, 36, 0.15),
      0 2px 10px 0 rgba(245, 158, 11, 0.28),
      0 0 16px 2px rgba(251, 191, 36, 0.18);
  }

  .bar-forecast.complete {
    background: var(--sfc-average-color, linear-gradient(
      to top,
      rgba(245, 158, 11, 0.98),
      rgba(254, 215, 86, 0.88)
    ));
    box-shadow:
      0 0 0 1px rgba(251, 191, 36, 0.25),
      0 2px 12px 0 rgba(245, 158, 11, 0.42),
      0 0 22px 4px rgba(251, 191, 36, 0.28);
  }

  /* ── Forecast bar — low (soft coral/rose) ────────────────── */

  .bar-forecast.low {
    background: var(--sfc-low-color, linear-gradient(
      to top,
      rgba(220, 80, 80, 0.88),
      rgba(252, 160, 155, 0.74)
    ));
    box-shadow:
      0 0 0 1px rgba(239, 68, 68, 0.14),
      0 2px 10px 0 rgba(220, 80, 80, 0.24),
      0 0 16px 2px rgba(239, 68, 68, 0.15);
  }

  .bar-forecast.complete.low {
    background: var(--sfc-low-color, linear-gradient(
      to top,
      rgba(220, 80, 80, 0.98),
      rgba(252, 160, 155, 0.88)
    ));
    box-shadow:
      0 0 0 1px rgba(239, 68, 68, 0.25),
      0 2px 12px 0 rgba(220, 80, 80, 0.40),
      0 0 22px 4px rgba(239, 68, 68, 0.26);
  }

  /* ── Forecast bar — high (green) ─────────────────────────── */

  .bar-forecast.high {
    background: var(--sfc-high-color, linear-gradient(
      to top,
      rgba(22, 163, 74, 0.92),
      rgba(74, 222, 128, 0.78)
    ));
    box-shadow:
      0 0 0 1px rgba(34, 197, 94, 0.15),
      0 2px 10px 0 rgba(22, 163, 74, 0.28),
      0 0 16px 2px rgba(34, 197, 94, 0.18);
  }

  .bar-forecast.complete.high {
    background: var(--sfc-high-color, linear-gradient(
      to top,
      rgba(22, 163, 74, 0.98),
      rgba(74, 222, 128, 0.90)
    ));
    box-shadow:
      0 0 0 1px rgba(34, 197, 94, 0.25),
      0 2px 12px 0 rgba(22, 163, 74, 0.42),
      0 0 22px 4px rgba(34, 197, 94, 0.28);
  }

  /* ── Actual generation bar — purple ──────────────────────── */

  .bar-actual {
    border-radius: var(--sfc-bar-radius, 6px 6px 3px 3px);
    background: var(--sfc-actual-color, linear-gradient(
      to top,
      rgba(124, 58, 237, 0.90),
      rgba(196, 136, 255, 0.76)
    ));
    box-shadow:
      0 0 0 1px rgba(139, 92, 246, 0.15),
      0 2px 10px 0 rgba(124, 58, 237, 0.28),
      0 0 16px 2px rgba(139, 92, 246, 0.18);
  }

  .bar-actual.below-dotted {
    border-radius: 0 0 3px 3px;
  }

  /* ── Stacked actual-arrays bar ───────────────────────────── */

  .bar-arrays-stack {
    position: absolute;
    bottom: 0;
    left: 50%;
    translate: -50% 0;
    width: min(var(--sfc-bar-width, 24px), 72%);
    display: flex;
    flex-direction: column-reverse; /* first array sits at the bottom */
    border-radius: var(--sfc-bar-radius, 6px 6px 3px 3px);
    overflow: hidden;
    transition:
      height 0.55s cubic-bezier(0.34, 1.15, 0.64, 1);
  }

  .forecast-grid.two-day .bar-arrays-stack {
    width: min(var(--sfc-bar-width, 72px), 72%);
  }

  .bar-array-segment {
    min-height: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
  }

  .array-label {
    font-size: var(--sfc-font-size, var(--sfc-array-label-font-size-default));
    font-weight: 800;
    color: rgba(255, 255, 255, 0.90);
    line-height: 1;
    pointer-events: none;
    user-select: none;
  }

  /*
   * Segment colour palette — 8 slots, cycles every 8 arrays.
   *
   * Base group (indices 0–3):
   *   0  purple      primary actual colour, matches existing bar-actual
   *   1  blue        cornflower / sky-blue
   *   2  indigo      deep blue-purple
   *   3  slate-blue  muted steel blue
   *
   * Extended group (indices 4–7) — lighter / shifted variations:
   *   4  violet      lighter purple
   *   5  emerald     deeper teal
   *   6  periwinkle  lighter indigo
   *   7  steel       darker slate
   */
  .seg-color-0 {
    background: linear-gradient(
      to top, rgba(124, 58, 237, 0.90), rgba(196, 136, 255, 0.76)
    );
  }
  .seg-color-1 {
    background: linear-gradient(
      to top, rgba(59, 130, 246, 0.90), rgba(147, 197, 253, 0.76)
    );
  }
  .seg-color-2 {
    background: linear-gradient(
      to top, rgba(79, 70, 229, 0.90), rgba(129, 140, 248, 0.76)
    );
  }
  .seg-color-3 {
    background: linear-gradient(
      to top, rgba(71, 107, 167, 0.90), rgba(119, 159, 207, 0.76)
    );
  }
  .seg-color-4 {
    background: linear-gradient(
      to top, rgba(139, 92, 246, 0.90), rgba(196, 180, 254, 0.76)
    );
  }
  .seg-color-5 {
    background: linear-gradient(
      to top, rgba(4, 120, 87, 0.90), rgba(52, 211, 153, 0.76)
    );
  }
  .seg-color-6 {
    background: linear-gradient(
      to top, rgba(99, 102, 241, 0.90), rgba(165, 180, 252, 0.76)
    );
  }
  .seg-color-7 {
    background: linear-gradient(
      to top, rgba(71, 85, 105, 0.90), rgba(100, 116, 139, 0.76)
    );
  }

  /* ── Dotted forecast remainder — tier-aware ──────────────── */

  .bar-dotted {
    border: 2px dashed rgba(245, 158, 11, 0.65);
    background: rgba(251, 191, 36, 0.07);
    box-sizing: border-box;
  }

  .bar-dotted.low {
    border-color: rgba(239, 68, 68, 0.58);
    background: rgba(239, 68, 68, 0.06);
  }

  .bar-dotted.high {
    border-color: rgba(34, 197, 94, 0.58);
    background: rgba(34, 197, 94, 0.06);
  }

  .bar-dotted.full    { border-radius: var(--sfc-bar-radius, 6px); }
  .bar-dotted.partial { border-bottom: none; border-radius: var(--sfc-bar-radius, 6px 6px 0 0); }

  /* ── Day label ───────────────────────────────────────── */

  .col-label {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1px;
    text-align: center;
    width: 100%;
    min-width: 0;
    pointer-events: none;
  }

  .day-name {
    font-size: var(--sfc-font-size, var(--sfc-day-name-font-size-default));
    font-weight: 500;
    color: var(--primary-text-color);
    line-height: 1.25;
    white-space: nowrap;
    text-align: center;
  }

  .col.today .day-name {
    font-weight: 700;
    color: var(--warning-color, #f59e0b);
  }

  .col.primary-day-label .day-name {
    max-width: 100%;
    white-space: normal;
    overflow-wrap: anywhere;
    line-height: 1.1;
  }

  .day-date {
    font-size: var(--sfc-font-size, var(--sfc-day-date-font-size-default));
    color: var(--secondary-text-color);
    font-variant-numeric: tabular-nums;
    line-height: 1.25;
    white-space: nowrap;
  }
`;

const desktopScaleStyles = i$3 `
  /* ══════════════════════════════════════════════════════════
     DESKTOP TEXT SCALING
     ══════════════════════════════════════════════════════════
     --dts-factor is set by setConfig() from desktop_text_scale
     (config value / 100, default 1.0).

     Applied ONLY on viewports >= 768 px so mobile sizing is
     always left untouched.  At the default factor of 1.0 the
     calc() values are numerically identical to the base sizes,
     so there is zero visual change for users who haven't set
     the option.

     Scope: header, daily value labels, day labels, bar segment
     labels, and summary values in the live header.
     Popup text is intentionally excluded — it is a modal panel
     that already displays at comfortable reading size.
     ══════════════════════════════════════════════════════════ */

  @media (min-width: 768px) {
    :host {
      --sfc-value-font-size-default: calc(0.75rem * var(--dts-factor, 1));
      --sfc-value-unit-font-size-default: calc(0.60rem * var(--dts-factor, 1));
      --sfc-value-estimate-font-size-default: calc(0.58rem * var(--dts-factor, 1));
      --sfc-value-empty-font-size-default: calc(0.78rem * var(--dts-factor, 1));
      --sfc-day-name-font-size-default: calc(0.75rem * var(--dts-factor, 1));
      --sfc-day-date-font-size-default: calc(0.65rem * var(--dts-factor, 1));
      --sfc-two-day-note-font-size-default: calc(0.65rem * var(--dts-factor, 1));
      --sfc-array-label-font-size-default: calc(0.5rem * var(--dts-factor, 1));
    }

    /* Header */
    .header-title    { font-size: calc(1.05rem * var(--dts-factor, 1)); }
    .export-rate-row { font-size: calc(0.75rem * var(--dts-factor, 1)); }
    .live-row        { font-size: calc(0.75rem * var(--dts-factor, 1)); }
    .live-week       { font-size: calc(0.68rem * var(--dts-factor, 1)); }

    /* Inline hourly summary */
    .main-hourly-day   { font-size: calc(0.82rem * var(--dts-factor, 1)); }
    .main-hourly-total { font-size: calc(0.74rem * var(--dts-factor, 1)); }
  }
`;

const headerStyles = i$3 `
  /* ── Header ──────────────────────────────────────────── */

  .card-header {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 12px;
    margin-bottom: 18px;
    padding: 0 4px;
  }

  /* Left column: stacks title + export rate row vertically */
  .header-left {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 4px;
    flex: 1;
    min-width: 0;
  }

  .header-title {
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: var(--sfc-title-font-size, 1.05rem);
    font-weight: 500;
    color: var(--sfc-title-color, var(--primary-text-color));
    flex-wrap: wrap;
  }

  .header-title ha-icon {
    color: var(--state-active-color, #fbbf24);
    flex-shrink: 0;
  }

  .export-rate-row {
    display: flex;
    align-items: center;
    gap: 4px;
    font-size: 0.75rem;
    font-variant-numeric: tabular-nums;
    color: var(--sfc-header-value-color, var(--secondary-text-color));
    white-space: nowrap;
  }

  .header-live {
    flex-shrink: 0;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 2px;
    padding-top: 3px;
    white-space: nowrap;
  }

  .live-row {
    display: flex;
    align-items: center;
    gap: 4px;
    font-size: 0.75rem;
    font-variant-numeric: tabular-nums;
    color: var(--sfc-header-value-color, var(--secondary-text-color));
  }

  .live-label {
    font-weight: 700;
    color: var(--sfc-header-label-color, var(--state-active-color, #fbbf24));
  }

  .live-week {
    font-size: 0.68rem;
    font-variant-numeric: tabular-nums;
    color: var(--sfc-header-value-color, var(--secondary-text-color));
    opacity: 0.72;
  }

  .week-label {
    font-weight: 600;
    color: var(--sfc-header-label-color, var(--sfc-header-value-color, var(--secondary-text-color)));
  }
`;

const historyStyles = i$3 `
  /* ── Forecast history view ───────────────────────────── */

  .history {
    --sfc-history-forecast: var(--sfc-history-forecast-color, var(--warning-color, #f59e0b));
    --sfc-history-actual: var(--sfc-history-actual-color, #8b5cf6);
    --sfc-history-over: var(--sfc-history-over-color, var(--success-color, #4caf50));
    --sfc-history-under: var(--sfc-history-under-color, #dc5050);
    --sfc-history-surface: var(--ha-card-background, var(--card-background-color, #fff));
    display: flex;
    flex-direction: column;
    gap: 8px;
    padding: 0 4px 2px;
  }

  .history-head {
    display: flex;
    flex-wrap: wrap;
    align-items: baseline;
    justify-content: space-between;
    gap: 4px 10px;
  }

  .history-title {
    font-size: 0.82rem;
    font-weight: 600;
    color: var(--primary-text-color);
  }

  .history-legend {
    display: flex;
    gap: 12px;
    font-size: 0.7rem;
    color: var(--secondary-text-color);
  }

  .history-key {
    display: inline-flex;
    align-items: center;
    gap: 5px;
  }

  .history-key::before {
    content: "";
    width: 18px;
    border-top: 2px solid var(--sfc-history-actual);
  }

  .history-key.forecast::before {
    border-top: 2px dashed var(--sfc-history-forecast);
  }

  .history-stats {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 8px;
    padding: 8px 0;
    border-top: 1px solid var(--divider-color, rgba(128, 128, 128, 0.15));
    border-bottom: 1px solid var(--divider-color, rgba(128, 128, 128, 0.15));
  }

  .history-stat {
    display: flex;
    flex-direction: column;
    min-width: 0;
  }

  .history-stat strong {
    font-size: 1.05rem;
    font-weight: 700;
    line-height: 1.2;
    font-variant-numeric: tabular-nums;
    color: var(--primary-text-color);
  }

  .history-stat strong.over {
    color: var(--sfc-history-over);
  }

  .history-stat strong.under {
    color: var(--sfc-history-under);
  }

  .history-stat span {
    font-size: 0.66rem;
    line-height: 1.25;
    color: var(--secondary-text-color);
  }

  .history-chart {
    display: block;
    width: 100%;
    max-width: 520px;
    height: auto;
    margin: 0 auto;
  }

  .history-grid {
    stroke: var(--divider-color, rgba(128, 128, 128, 0.2));
    stroke-width: 1;
  }

  .history-axis {
    fill: var(--secondary-text-color);
    font-size: 10px;
    font-variant-numeric: tabular-nums;
  }

  .history-axis.selected {
    fill: var(--primary-text-color);
    font-weight: 700;
  }

  .history-forecast,
  .history-actual {
    fill: none;
    stroke-linecap: round;
    stroke-linejoin: round;
  }

  .history-forecast {
    stroke: var(--sfc-history-forecast);
    stroke-width: 2;
    stroke-dasharray: 5 4;
  }

  .history-actual {
    stroke: var(--sfc-history-actual);
    stroke-width: 2.5;
  }

  .history-gain {
    fill: var(--sfc-history-over);
    fill-opacity: 0.24;
  }

  .history-loss {
    fill: var(--sfc-history-under);
    fill-opacity: 0.24;
  }

  .history-dot-forecast {
    fill: var(--sfc-history-surface);
    stroke: var(--sfc-history-forecast);
    stroke-width: 1.5;
  }

  .history-dot-actual {
    fill: var(--sfc-history-actual);
    stroke: var(--sfc-history-surface);
    stroke-width: 1.5;
  }

  .history-hit {
    fill: transparent;
    cursor: pointer;
    outline: none;
    -webkit-tap-highlight-color: transparent;
  }

  .history-hit:hover,
  .history-hit:focus-visible,
  .history-hit.selected {
    fill: rgba(128, 128, 128, 0.1);
  }

  .history-readout {
    min-height: 1.4em;
    font-size: 0.78rem;
    font-variant-numeric: tabular-nums;
    color: var(--primary-text-color);
  }
`;

const hourlyChartStyles = i$3 `
  /* ── Chart ───────────────────────────────────────────── */

  .chart-scroll {
    overflow-y: auto;
    overflow-x: hidden;
    padding: 14px 20px 20px;
    display: flex;
    flex-direction: column;
    gap: 5px;
    /* Custom scrollbar — subtle */
    scrollbar-width: thin;
    scrollbar-color: rgba(128, 128, 128, 0.25) transparent;
  }

  .chart-scroll::-webkit-scrollbar { width: 4px; }
  .chart-scroll::-webkit-scrollbar-thumb {
    background: rgba(128, 128, 128, 0.25);
    border-radius: 2px;
  }

  .chart-no-data {
    text-align: center;
    padding: 32px 0;
    color: var(--secondary-text-color);
    font-size: 0.88rem;
    line-height: 1.5;
  }

  /* ── Inline hourly main-card view ─────────────────────── */

  .main-hourly {
    padding: 0 4px 2px;
  }

  .main-hourly-summary {
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    gap: 10px;
    padding: 0 4px 8px;
    border-bottom: 1px solid var(--divider-color, rgba(128, 128, 128, 0.15));
    color: var(--secondary-text-color);
  }

  .main-hourly-day {
    min-width: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size: 0.82rem;
    font-weight: 600;
    color: var(--sfc-popup-text-color, var(--primary-text-color));
  }

  .main-hourly-total {
    flex-shrink: 0;
    font-size: 0.74rem;
    font-variant-numeric: tabular-nums;
    color: var(--sfc-popup-accent-color, var(--warning-color, #f59e0b));
  }

  .main-hourly-chart {
    max-height: min(360px, 55vh);
    padding: 10px 4px 2px;
  }

  .main-hourly .chart-no-data {
    padding: 26px 8px 24px;
  }

  /* Grid: [hour label] [bar track] [value] */
  .chart-header,
  .chart-row {
    display: grid;
    grid-template-columns: 2.8rem 1fr 2.6rem;
    gap: 8px;
  }

  .chart-header {
    align-items: center;
    padding-bottom: 6px;
    margin-bottom: 2px;
    border-bottom: 1px solid var(--divider-color, rgba(128, 128, 128, 0.15));
  }

  .chart-header span {
    font-size: 0.65rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    color: var(--secondary-text-color);
    opacity: 0.7;
  }

  .chart-header .col-time  { text-align: right; }
  .chart-header .col-power { text-align: left; padding-left: 0; }
  .chart-header .col-kwh   { text-align: left; }

  .chart-row {
    align-items: center;
    height: 24px;
  }

  .chart-hour {
    font-size: 0.70rem;
    color: var(--secondary-text-color);
    font-variant-numeric: tabular-nums;
    text-align: right;
    line-height: 1;
    opacity: 0.75;
  }

  .chart-bar-track {
    position: relative;
    height: 9px;
    border-radius: 5px;
    background: var(--secondary-background-color, rgba(128, 128, 128, 0.08));
    overflow: hidden;
  }

  .chart-bar-track.with-actual {
    height: 14px;
  }

  .chart-bar-fill {
    position: absolute;
    inset: 0 auto 0 0;
    border-radius: 5px;
    background: var(--sfc-average-color, linear-gradient(
      to right,
      rgba(245, 158, 11, 0.88),
      rgba(254, 215, 86, 0.76)
    ));
    /* Bars animate in staggered via --delay set inline */
    animation: bar-in 0.45s cubic-bezier(0.34, 1.1, 0.64, 1) both;
    animation-delay: var(--delay, 0ms);
  }

  .chart-bar-track.with-actual .chart-bar-fill {
    bottom: 5px;
    height: 8px;
  }

  .chart-bar-fill.peak {
    background: var(--sfc-average-color, linear-gradient(
      to right,
      rgba(245, 158, 11, 1.0),
      rgba(254, 215, 86, 0.92)
    ));
    box-shadow: 0 0 7px 1px rgba(245, 158, 11, 0.38);
  }

  .chart-actual-fill {
    position: absolute;
    left: 0;
    bottom: 1px;
    height: 3px;
    border-radius: 3px;
    background: linear-gradient(
      to right,
      rgba(220, 80, 80, 0.78),
      rgba(252, 160, 155, 0.68)
    );
    animation: bar-in 0.45s cubic-bezier(0.34, 1.1, 0.64, 1) both;
    animation-delay: var(--delay, 0ms);
  }

  .chart-actual-fill.actual-match {
    background: linear-gradient(
      to right,
      rgba(245, 158, 11, 0.82),
      rgba(254, 215, 86, 0.70)
    );
  }

  .chart-actual-fill.actual-over {
    background: linear-gradient(
      to right,
      rgba(22, 163, 74, 0.82),
      rgba(74, 222, 128, 0.70)
    );
    box-shadow: 0 0 6px 1px rgba(34, 197, 94, 0.24);
  }

  @keyframes bar-in {
    from { width: 0 !important; }
  }

  .chart-val {
    font-size: 0.70rem;
    font-weight: 500;
    font-variant-numeric: tabular-nums;
    color: var(--secondary-text-color);
    line-height: 1;
    text-align: left;
  }

  .chart-val.peak {
    color: var(--sfc-popup-accent-color, var(--warning-color, #f59e0b));
    font-weight: 600;
  }

  /* ── Popup chart — 4-column layout (today + actual) ────── */

  /* Extend the grid when actual history data is available */
  .chart-header.with-actuals,
  .chart-row.with-actuals {
    grid-template-columns: 2.8rem 1fr 2.6rem 2.8rem;
  }

  /* Align the "Fcst" header label left (matches bar-value column) */
  /* Align the "Act." header label right (matches actual-value column) */
  .chart-header.with-actuals .col-actual {
    text-align: right;
  }

  /* Actual-generation value cell */
  .chart-val-actual {
    font-size: 0.70rem;
    font-variant-numeric: tabular-nums;
    color: var(--secondary-text-color);
    font-weight: 500;
    line-height: 1;
    text-align: right;
  }

  .chart-val-actual.actual-under {
    color: rgba(220, 80, 80, 0.92);
  }

  .chart-val-actual.actual-match {
    color: var(--sfc-popup-accent-color, var(--warning-color, #f59e0b));
  }

  .chart-val-actual.actual-over {
    color: var(--success-color, #4caf50);
  }

  /* Placeholder dash for hours with no actual data (future / pre-sunrise) */
  .chart-val-actual.empty {
    color: var(--secondary-text-color);
    opacity: 0.35;
    font-weight: 400;
  }

  /* ── Current-hour highlight (today only) ─────────────────── */

  /* Subtle amber-tinted row with a 2 px left accent line.
     Inset box-shadow is used for the accent so it doesn't affect layout.
     The amber values match the forecast bar / today column palette so the
     highlight feels at home in both light and dark HA themes. */
  .chart-row.current-hour {
    position: relative;
    border-radius: 4px;
  }

  .chart-row.current-hour::before {
    content: "";
    position: absolute;
    inset: -2px -2px;
    pointer-events: none;
    border-radius: 4px;
    background: rgba(251, 191, 36, 0.07);
    box-shadow: inset 2px 0 0 0 var(--sfc-popup-accent-color, rgba(245, 158, 11, 0.50));
    z-index: 0;
  }

  .chart-row.current-hour > * {
    position: relative;
    z-index: 1;
  }

  /* Amber time label so the current hour is easy to find at a glance */
  .chart-row.current-hour .chart-hour {
    color: var(--sfc-popup-accent-color, var(--warning-color, #f59e0b));
    opacity: 1;
  }
`;

const popupStyles = i$3 `
  /* ════════════════════════════════════════════════════════
     POPUP
     ════════════════════════════════════════════════════════ */

  .popup-overlay {
    position: fixed;
    inset: 0;
    z-index: 9999;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 16px;
    background: rgba(0, 0, 0, 0.42);
    backdrop-filter: blur(4px);
    -webkit-backdrop-filter: blur(4px);
    box-sizing: border-box;
    /* enter / exit */
    opacity: 0;
    pointer-events: none;
    transition: opacity ${POPUP_CLOSE_MS}ms ease;
  }

  .popup-overlay.visible {
    opacity: 1;
    pointer-events: auto;
  }

  /* ── Panel ───────────────────────────────────────────── */

  .popup-panel {
    position: relative;
    background: var(--sfc-popup-background, var(--ha-card-background, var(--card-background-color, #1c1c1e)));
    border-radius: var(--sfc-popup-border-radius, 20px);
    color: var(--sfc-popup-text-color, var(--primary-text-color));
    width: 100%;
    max-width: 400px;
    max-height: min(520px, calc(100dvh - 32px));
    overflow: hidden;
    display: flex;
    flex-direction: column;
    box-shadow:
      0 32px 72px rgba(0, 0, 0, 0.32),
      0 8px 24px rgba(0, 0, 0, 0.18);
    /* enter: slide up + scale in */
    transform: translateY(32px) scale(0.95);
    opacity: 0;
    transition:
      transform ${POPUP_CLOSE_MS + 40}ms cubic-bezier(0.34, 1.28, 0.64, 1),
      opacity ${POPUP_CLOSE_MS}ms ease;
    will-change: transform, opacity;
  }

  .popup-overlay.visible .popup-panel {
    transform: translateY(0) scale(1);
    opacity: 1;
  }

  /* ── Header ──────────────────────────────────────────── */

  .popup-header {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    padding: 18px 16px 14px 20px;
    gap: 8px;
    border-bottom: 1px solid var(--divider-color, rgba(128, 128, 128, 0.15));
    flex-shrink: 0;
  }

  .popup-title {
    display: flex;
    flex-direction: column;
    gap: 3px;
    min-width: 0;
  }

  .popup-day-name {
    font-size: 1.05rem;
    font-weight: 600;
    color: var(--sfc-popup-text-color, var(--primary-text-color));
    line-height: 1.2;
  }

  .popup-subtitle {
    font-size: 0.82rem;
    color: var(--secondary-text-color);
    display: flex;
    align-items: baseline;
    gap: 4px;
    flex-wrap: wrap;
  }

  .popup-total-kwh {
    font-size: 0.95rem;
    font-weight: 600;
    font-variant-numeric: tabular-nums;
    color: var(--sfc-popup-accent-color, var(--warning-color, #f59e0b));
  }

  .popup-close {
    flex-shrink: 0;
    background: var(--secondary-background-color, rgba(128, 128, 128, 0.10));
    border: none;
    cursor: pointer;
    padding: 0;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    color: var(--secondary-text-color);
    display: flex;
    align-items: center;
    justify-content: center;
    transition: background 0.15s, color 0.15s;
    margin-top: -2px;
  }

  .popup-close:hover {
    background: var(--divider-color, rgba(128, 128, 128, 0.18));
    color: var(--sfc-popup-text-color, var(--primary-text-color));
  }

  .popup-close ha-icon {
    --mdc-icon-size: 18px;
  }
`;

// Order matters: desktopScaleStyles overrides base sizes at equal specificity,
// so it must stay last.
const cardStyles = [
    baseStyles,
    headerStyles,
    placeholderStyles,
    dayColumnStyles,
    popupStyles,
    hourlyChartStyles,
    historyStyles,
    desktopScaleStyles,
];

let SolarForecastCard = class SolarForecastCard extends i {
    constructor() {
        super(...arguments);
        /** Currently open popup row (null = closed). */
        this._popup = null;
        /** True once the popup is in-DOM and should animate in. */
        this._popupVisible = false;
        /**
         * Hourly actual-generation data (local hour → kWh) fetched asynchronously
         * from the HA history API when today's popup opens.
         * null  = not yet fetched or not applicable (not today / no entity).
         * Map   = fetch completed; map may be empty if no generating hours found.
         */
        this._popupActualHourly = null;
        /**
         * Same actual-history data as the popup uses, but for the optional main-card
         * hourly view. Kept separate so opening/closing the popup never resets the
         * inline chart's Actual column.
         */
        this._mainActualHourly = null;
        this._mainActualRefreshInFlight = false;
        this._mainActualNextRefreshAt = 0;
        /** Last 7 days for the history view. null = not loaded yet. */
        this._historyDays = null;
        /** Index into _historyDays of the day shown in the readout. */
        this._historySelected = 6;
        this._historyRetryAt = 0;
        this._historyRecordAt = 0;
        this._onDocKey = (e) => {
            if (e.key === "Escape" && this._popup)
                this._closePopup();
        };
        // ── Popup ─────────────────────────────────────────────────────────────────
        this._openPopup = (row) => {
            clearTimeout(this._closeTimer);
            // Re-read the entity state fresh at click time so we always get the latest hours
            const freshState = row.entityId ? this.hass?.states[row.entityId] : undefined;
            const freshHours = readHoursAttr(this._config?.integration_type, freshState);
            // Log which entity is being used and what the hours attribute looks like
            const hoursType = freshHours === undefined ? "missing"
                : freshHours === null ? "null"
                    : Array.isArray(freshHours) ? `array[${freshHours.length}]`
                        : `${typeof freshHours}`;
            console.debug("[solar-forecast-card] popup →", row.entityId || "(no entity)", "| state:", freshState?.state ?? "n/a", "| hours:", hoursType);
            this._popup = { ...row, rawHoursAttr: freshHours ?? row.rawHoursAttr };
            this._popupVisible = false;
            // Fetch per-hour actual-generation history for today's popup.
            // Reset to null first so the popup renders forecast-only until the fetch
            // completes, then re-renders cleanly when the Map arrives.
            this._popupActualHourly = null;
            if (row.isToday && this._config?.today_actual_entity) {
                fetchActualHourly(this.hass, this._config.today_actual_entity).then((map) => {
                    // Only apply if the popup is still open (user may have closed it while fetching)
                    if (this._popup)
                        this._popupActualHourly = map;
                });
            }
            // Single rAF lets Lit stamp the overlay into the DOM before we add .visible
            requestAnimationFrame(() => { this._popupVisible = true; });
        };
        this._closePopup = () => {
            this._popupVisible = false;
            this._popupActualHourly = null;
            this._closeTimer = setTimeout(() => { this._popup = null; }, POPUP_CLOSE_MS);
        };
        this._selectHistoryDay = (index) => {
            this._historySelected = index;
        };
    }
    // ── Lovelace lifecycle ────────────────────────────────────────────────────
    static getConfigElement() {
        return document.createElement("solar-forecast-card-editor");
    }
    static getStubConfig() {
        return {
            forecast_entities: ["", "", "", "", "", "", ""],
            show_header: true,
        };
    }
    setConfig(config) {
        if (!config)
            throw new Error(localize("en", "card.errors.invalidConfig"));
        this._config = normalizeConfig(config);
        this._resetMainActual();
        this._historyDays = null;
        this._historySelected = 6;
        this._historyFetchKey = undefined;
        this._historyRetryAt = 0;
        // Apply the desktop text scale as a CSS custom property on the host element.
        // The static stylesheet uses calc(base * var(--dts-factor, 1)) inside a
        // @media (min-width: 768px) block so mobile sizing is never affected.
        const factor = (this._config.desktop_text_scale ?? 100) / 100;
        this.style.setProperty("--dts-factor", String(factor));
        this._setOptionalCssPx("--sfc-font-size", this._config.font_size);
        this._setOptionalCssPx("--sfc-bar-width", this._config.bar_width);
        const zoneOpacity = this._config.threshold_zone_opacity;
        if (typeof zoneOpacity === "number" && Number.isFinite(zoneOpacity)) {
            this.style.setProperty("--sfc-threshold-zone-opacity", String(zoneOpacity / 100));
        }
        else {
            this.style.removeProperty("--sfc-threshold-zone-opacity");
        }
    }
    getCardSize() {
        return 4;
    }
    _setOptionalCssPx(name, value) {
        if (typeof value === "number" && Number.isFinite(value)) {
            this.style.setProperty(name, `${value}px`);
        }
        else {
            this.style.removeProperty(name);
        }
    }
    connectedCallback() {
        super.connectedCallback();
        document.addEventListener("keydown", this._onDocKey);
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        document.removeEventListener("keydown", this._onDocKey);
        clearTimeout(this._closeTimer);
    }
    // ── Update optimisation ───────────────────────────────────────────────────
    shouldUpdate(changedProps) {
        if (changedProps.has("_config") || changedProps.has("_popup") || changedProps.has("_popupVisible") || changedProps.has("_popupActualHourly") || changedProps.has("_mainActualHourly") || changedProps.has("_historyDays") || changedProps.has("_historySelected"))
            return true;
        if (!this._config || !this.hass)
            return false;
        const oldHass = changedProps.get("hass");
        if (!oldHass)
            return true;
        if (resolveLanguage(oldHass) !== resolveLanguage(this.hass))
            return true;
        const watchIds = [
            ...this._config.forecast_entities,
            this._config.live_power_entity,
            this._config.today_actual_entity,
            this._config.next_hour_entity,
            this._config.remaining_today_entity,
            this._config.export_rate_entity,
            this._config.low_threshold_entity,
            this._config.high_threshold_entity,
            "sun.sun", // A day's recorded actual counts once the sun has set
            ...(this._config.actual_arrays?.map((a) => a.entity) ?? []),
        ].filter(Boolean);
        return watchIds.some((id) => oldHass.states[id] !== this.hass.states[id]);
    }
    willUpdate() {
        if (!this.hass || !this._config)
            return;
        if (Date.now() >= this._historyRecordAt) {
            this._historyRecordAt = Date.now() + HISTORY_RECORD_INTERVAL_MS;
            recordToday(this.hass, this._config);
        }
        if (this._config.main_view === "history") {
            this._ensureForecastHistory();
        }
        else if (this._config.main_view === "hourly" && this._config.forecast_entities[0]) {
            this._ensureMainActualHourly();
        }
    }
    // ── Main-card hourly data ─────────────────────────────────────────────────
    _resetMainActual() {
        this._mainActualFetchKey = undefined;
        this._mainActualDataScope = undefined;
        this._mainActualRefreshInFlight = false;
        this._mainActualNextRefreshAt = 0;
        this._mainActualHourly = null;
    }
    _ensureMainActualHourly() {
        const entityId = this._config?.today_actual_entity;
        if (!entityId) {
            this._resetMainActual();
            return;
        }
        const todayKey = new Date().toDateString();
        const scopeKey = `${entityId}|${todayKey}`;
        if (this._mainActualDataScope !== scopeKey) {
            this._resetMainActual();
            this._mainActualDataScope = scopeKey;
        }
        const refreshKey = `${scopeKey}|${new Date().getHours()}`;
        const now = Date.now();
        const hasActualData = this._mainActualHourly instanceof Map;
        if (this._mainActualRefreshInFlight ||
            (hasActualData && this._mainActualFetchKey === refreshKey && now < this._mainActualNextRefreshAt)) {
            return;
        }
        this._mainActualFetchKey = refreshKey;
        this._mainActualRefreshInFlight = true;
        fetchActualHourly(this.hass, entityId).then((map) => {
            if (this._mainActualFetchKey === refreshKey &&
                this._mainActualDataScope === scopeKey &&
                this._config?.main_view === "hourly") {
                // Keep the last known non-empty dataset visible if HA briefly returns an
                // empty history response during a refresh. This prevents the inline
                // hourly Actual column from disappearing on frequent sensor updates.
                const hasExistingData = this._mainActualHourly instanceof Map && this._mainActualHourly.size > 0;
                if (map.size > 0 || !hasExistingData) {
                    this._mainActualHourly = map;
                }
                this._mainActualNextRefreshAt = Date.now() + MAIN_ACTUAL_REFRESH_MS;
            }
        }).finally(() => {
            if (this._mainActualFetchKey === refreshKey && this._mainActualDataScope === scopeKey) {
                this._mainActualRefreshInFlight = false;
            }
        });
    }
    // ── Forecast history data ─────────────────────────────────────────────────
    /** Past days don't change, so this loads once a day plus retries after a failure. */
    _ensureForecastHistory() {
        const key = new Date().toDateString();
        if (this._historyFetchKey === key && Date.now() < this._historyRetryAt)
            return;
        if (this._historyFetchKey === key && this._historyRetryAt === 0)
            return;
        this._historyFetchKey = key;
        this._historyRetryAt = 0;
        fetchForecastHistory(this.hass, this._config).then((days) => {
            if (this._historyFetchKey !== key)
                return;
            if (days) {
                this._historyDays = days;
            }
            else {
                this._historyDays ?? (this._historyDays = []);
                this._historyRetryAt = Date.now() + HISTORY_RETRY_MS;
            }
        });
    }
    // ── Render ────────────────────────────────────────────────────────────────
    render() {
        if (!this._config)
            return A;
        const cfg = this._config;
        const fmt = new Formatter(this.hass);
        const header = cfg.show_header ? renderHeader(this.hass, cfg, fmt) : A;
        const rows = this.hass ? buildRows(this.hass, cfg) : [];
        if (cfg.main_view === "history") {
            return b `
        <ha-card part="card">
          ${header}
          ${renderHistory(this._historyDays, this._historySelected, fmt, this._selectHistoryDay)}
        </ha-card>
      `;
        }
        if (cfg.main_view === "hourly") {
            return b `
        <ha-card part="card">
          ${header}
          ${renderMainHourly(cfg, rows[0], this._mainActualHourly, fmt)}
        </ha-card>
      `;
        }
        if (!cfg.forecast_entities.some(Boolean)) {
            return b `
        <ha-card part="card">
          ${header}
          <div class="placeholder">
            <ha-icon icon="mdi:weather-sunny"></ha-icon>
            <p>${fmt.t("card.placeholder")}<br />${fmt.t("card.placeholderAction")}</p>
          </div>
        </ha-card>
      `;
        }
        const validRows = rows.filter((r) => r.entityId);
        const isTwoDay = cfg.integration_type === "forecast_solar" && validRows.length <= 2;
        const displayRows = isTwoDay ? validRows : rows;
        return b `
      <ha-card part="card">
        ${header}
        <div class="forecast-grid ${isTwoDay ? "two-day" : ""}">
          ${displayRows.map((row) => renderDayColumn(row, forecastTier(this.hass, cfg, row.forecastKwh), fmt, this._openPopup))}
        </div>
        ${isTwoDay ? b `<div class="two-day-note">${fmt.t("card.twoDayNote")}</div>` : A}
      </ha-card>
      ${this._popup ? renderPopup(cfg, {
            row: this._popup,
            visible: this._popupVisible,
            actualHourly: this._popupActualHourly,
            onClose: this._closePopup,
        }, fmt) : A}
    `;
    }
};
SolarForecastCard.styles = cardStyles;
__decorate([
    n({ attribute: false })
], SolarForecastCard.prototype, "hass", void 0);
__decorate([
    r()
], SolarForecastCard.prototype, "_config", void 0);
__decorate([
    r()
], SolarForecastCard.prototype, "_popup", void 0);
__decorate([
    r()
], SolarForecastCard.prototype, "_popupVisible", void 0);
__decorate([
    r()
], SolarForecastCard.prototype, "_popupActualHourly", void 0);
__decorate([
    r()
], SolarForecastCard.prototype, "_mainActualHourly", void 0);
__decorate([
    r()
], SolarForecastCard.prototype, "_historyDays", void 0);
__decorate([
    r()
], SolarForecastCard.prototype, "_historySelected", void 0);
SolarForecastCard = __decorate([
    t("solar-forecast-card")
], SolarForecastCard);

/** Entity FormData keys that count as "manually edited" when changed by the user. */
const ENTITY_FIELDS = [
    "forecast_entity_0", "forecast_entity_1", "forecast_entity_2",
    "forecast_entity_3", "forecast_entity_4", "forecast_entity_5",
    "forecast_entity_6", "today_actual_entity", "live_power_entity",
    "next_hour_entity", "remaining_today_entity",
];
function optionalNumber(value) {
    return typeof value === "number" && Number.isFinite(value) ? value : undefined;
}
function toFormData(cfg) {
    return {
        title: cfg.title ?? "",
        icon: cfg.icon ?? "",
        show_header: cfg.show_header,
        display_estimate10: cfg.display_estimate10 ?? false,
        device_id: cfg.device_id ?? "",
        integration_type: cfg.integration_type ?? "manual",
        export_rate_entity: cfg.export_rate_entity ?? "",
        live_power_entity: cfg.live_power_entity ?? "",
        today_actual_entity: cfg.today_actual_entity ?? "",
        next_hour_entity: cfg.next_hour_entity ?? "",
        remaining_today_entity: cfg.remaining_today_entity ?? "",
        main_view: cfg.main_view ?? "daily",
        inverter_max_kw: cfg.inverter_max_kw,
        solar_max_kwp: cfg.solar_max_kwp,
        low_threshold: cfg.low_threshold,
        low_threshold_entity: cfg.low_threshold_entity ?? "",
        high_threshold: cfg.high_threshold,
        high_threshold_entity: cfg.high_threshold_entity ?? "",
        show_low_threshold_zone: cfg.show_low_threshold_zone ?? false,
        show_high_threshold_zone: cfg.show_high_threshold_zone ?? false,
        threshold_zone_opacity: cfg.threshold_zone_opacity ?? DEFAULT_THRESHOLD_ZONE_OPACITY,
        desktop_text_scale: cfg.desktop_text_scale ?? 100,
        font_size: cfg.font_size,
        bar_width: cfg.bar_width,
        forecast_entity_0: cfg.forecast_entities[0] ?? "",
        forecast_entity_1: cfg.forecast_entities[1] ?? "",
        forecast_entity_2: cfg.forecast_entities[2] ?? "",
        forecast_entity_3: cfg.forecast_entities[3] ?? "",
        forecast_entity_4: cfg.forecast_entities[4] ?? "",
        forecast_entity_5: cfg.forecast_entities[5] ?? "",
        forecast_entity_6: cfg.forecast_entities[6] ?? "",
    };
}
/**
 * @param current  Config being edited; supplies the fields ha-form doesn't manage.
 */
function fromFormData(data, current) {
    return {
        type: current?.type ?? "custom:solar-forecast-card",
        title: data.title || undefined,
        icon: data.icon || undefined,
        show_header: data.show_header,
        display_estimate10: data.display_estimate10,
        device_id: data.device_id || undefined,
        integration_type: data.integration_type || "manual",
        forecast_entities: [
            data.forecast_entity_0,
            data.forecast_entity_1,
            data.forecast_entity_2,
            data.forecast_entity_3,
            data.forecast_entity_4,
            data.forecast_entity_5,
            data.forecast_entity_6,
        ],
        export_rate_entity: data.export_rate_entity || undefined,
        live_power_entity: data.live_power_entity || undefined,
        today_actual_entity: data.today_actual_entity || undefined,
        next_hour_entity: data.next_hour_entity || undefined,
        remaining_today_entity: data.remaining_today_entity || undefined,
        actual_arrays: current?.actual_arrays,
        date_format: current?.date_format,
        time_format: current?.time_format,
        main_view: data.main_view || "daily",
        inverter_max_kw: typeof data.inverter_max_kw === "number" ? data.inverter_max_kw : undefined,
        solar_max_kwp: typeof data.solar_max_kwp === "number" ? data.solar_max_kwp : undefined,
        low_threshold: typeof data.low_threshold === "number" ? data.low_threshold : undefined,
        high_threshold: typeof data.high_threshold === "number" ? data.high_threshold : undefined,
        low_threshold_entity: data.low_threshold_entity || undefined,
        high_threshold_entity: data.high_threshold_entity || undefined,
        show_low_threshold_zone: data.show_low_threshold_zone,
        show_high_threshold_zone: data.show_high_threshold_zone,
        // Only persist when non-default, as for desktop_text_scale.
        threshold_zone_opacity: typeof data.threshold_zone_opacity === "number" &&
            data.threshold_zone_opacity !== DEFAULT_THRESHOLD_ZONE_OPACITY
            ? data.threshold_zone_opacity
            : undefined,
        // Only persist when non-default (100) so YAML stays clean for most users.
        desktop_text_scale: typeof data.desktop_text_scale === "number" && data.desktop_text_scale !== 100
            ? data.desktop_text_scale
            : undefined,
        font_size: optionalNumber(data.font_size),
        bar_width: optionalNumber(data.bar_width),
    };
}

// ── ha-form schema (minimal typings — HA provides the element at runtime) ────
// ── Schema segments (rendered with section headers between them) ──────────────
// Device field — rendered first as the primary entry point
const SCHEMA_DEVICE = [
    { name: "device_id", selector: { device: {} } },
];
// Integration type — auto-set by device detection; exposed here as a manual
// override for users who configure forecast_entities without a device.
// Remaining top-level fields — always visible
const SCHEMA_TOP = [
    { name: "title", selector: { text: {} } },
    { name: "icon", selector: { icon: {} } },
    { name: "show_header", selector: { boolean: {} } },
    { name: "display_estimate10", selector: { boolean: {} } },
];
const SCHEMA_FORECAST = [0, 1, 2, 3, 4, 5, 6].map((i) => ({
    name: `forecast_entity_${i}`,
    selector: { entity: { domain: "sensor" } },
}));
// All Live Data entity pickers in one schema so a single ha-form instance
// handles them — matching the same pattern used by SCHEMA_FORECAST (all 7
// forecast entities in one ha-form), which is what makes them correctly
// reflect auto-detected values in the editor.
const SCHEMA_LIVE = [
    { name: "live_power_entity", selector: { entity: { domain: "sensor" } } },
    { name: "today_actual_entity", selector: { entity: { domain: "sensor" } } },
    { name: "next_hour_entity", selector: { entity: { domain: "sensor" } } },
    { name: "remaining_today_entity", selector: { entity: { domain: "sensor" } } },
];
const SCHEMA_DISPLAY_TEXT_SCALE = [
    {
        name: "desktop_text_scale",
        selector: {
            number: { min: 100, max: 150, step: 5, mode: "slider", unit_of_measurement: "%" },
        },
    },
];
const SCHEMA_DISPLAY_FONT_SIZE = [
    {
        name: "font_size",
        selector: {
            number: { min: 10, max: 24, step: 1, mode: "box", unit_of_measurement: "px" },
        },
    },
];
const SCHEMA_DISPLAY_BAR_WIDTH = [
    {
        name: "bar_width",
        selector: {
            number: { min: 8, max: 40, step: 1, mode: "box", unit_of_measurement: "px" },
        },
    },
];
function mainViewSchema(t) {
    return [
        {
            name: "main_view",
            selector: {
                select: {
                    options: [
                        { value: "daily", label: t("editor.options.mainViewDaily") },
                        { value: "hourly", label: t("editor.options.mainViewHourly") },
                        { value: "history", label: t("editor.options.mainViewHistory") },
                    ],
                },
            },
        },
    ];
}
const SCHEMA_ENERGY_PROVIDER = [
    { name: "export_rate_entity", selector: { entity: {} } },
];
const SCHEMA_SYSTEM = [
    { name: "inverter_max_kw", selector: { number: { min: 0, step: 0.1, mode: "box", unit_of_measurement: "kW" } } },
    { name: "solar_max_kwp", selector: { number: { min: 0, step: 0.1, mode: "box", unit_of_measurement: "kWp" } } },
];
const SCHEMA_THRESHOLDS = [
    { name: "low_threshold", selector: { number: { min: 0, step: 0.1, mode: "box", unit_of_measurement: "kWh" } } },
    { name: "low_threshold_entity", selector: { entity: { domain: "sensor" } } },
    { name: "show_low_threshold_zone", selector: { boolean: {} } },
    { name: "high_threshold", selector: { number: { min: 0, step: 0.1, mode: "box", unit_of_measurement: "kWh" } } },
    { name: "high_threshold_entity", selector: { entity: { domain: "sensor" } } },
    { name: "show_high_threshold_zone", selector: { boolean: {} } },
    {
        name: "threshold_zone_opacity",
        selector: {
            number: { min: 5, max: 100, step: 5, mode: "slider", unit_of_measurement: "%" },
        },
    },
];
function integrationSchema(t) {
    return [
        {
            name: "integration_type",
            selector: {
                select: {
                    options: [
                        { value: "manual", label: t("editor.options.autoDetect") },
                        { value: "solcast", label: t("editor.options.solcast") },
                        { value: "volcast", label: t("editor.options.volcast") },
                        { value: "forecast_solar", label: t("editor.options.forecastSolar") },
                        { value: "open_meteo_solar_forecast", label: t("editor.options.openMeteo") },
                    ],
                },
            },
        },
    ];
}

const editorStyles = i$3 `
  :host {
    display: block;
  }

  .device-helper {
    display: flex;
    align-items: center;
    gap: 4px;
    margin: 4px 0 8px;
    padding: 0 4px;
    font-size: 0.75rem;
    color: var(--secondary-text-color);
    opacity: 0.75;
  }

  .device-helper ha-icon {
    --mdc-icon-size: 14px;
    flex-shrink: 0;
  }

  ha-expansion-panel {
    display: block;
    margin-top: 8px;
    --expansion-panel-summary-padding: 0 8px;
    --expansion-panel-content-padding: 0 8px 8px;
  }

  /* ── Actual-array list ─────────────────────────────────── */

  .array-row {
    display: flex;
    align-items: flex-start;
    gap: 8px;
    padding: 4px 0;
  }

  .array-row ha-selector {
    flex: 1;
    min-width: 0;
  }

  /* Nudge the delete button down so it sits beside the input,
     not the label heading above it. */
  .array-row > ha-icon-button {
    margin-top: 20px;
    flex-shrink: 0;
  }

  /* Wrapper: stacks the heading, input, and hint vertically */
  .array-label-wrap {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3px;
    flex-shrink: 0;
  }

  .array-field-label {
    font-size: 0.63rem;
    font-weight: 500;
    color: var(--secondary-text-color);
    white-space: nowrap;
    line-height: 1.2;
  }

  .array-label-hint {
    font-size: 0.58rem;
    color: var(--secondary-text-color);
    opacity: 0.65;
    white-space: nowrap;
    text-align: center;
    line-height: 1.2;
  }

  .array-label-input {
    width: 3.2rem;
    border: 1px solid var(--divider-color, rgba(128, 128, 128, 0.3));
    border-radius: 4px;
    padding: 6px 6px;
    font-size: 0.9rem;
    text-align: center;
    background: var(--secondary-background-color, transparent);
    color: var(--primary-text-color);
    outline: none;
    box-sizing: border-box;
  }

  .array-label-input:focus {
    border-color: var(--primary-color);
  }

  .add-array-btn {
    display: flex;
    align-items: center;
    gap: 6px;
    padding: 8px 4px 2px;
    cursor: pointer;
    color: var(--primary-color);
    font-size: 0.85rem;
    font-weight: 500;
    user-select: none;
    -webkit-tap-highlight-color: transparent;
  }

  .add-array-btn:hover { opacity: 0.8; }

  .add-array-btn ha-icon {
    --mdc-icon-size: 18px;
  }
`;

let SolarForecastCardEditor = class SolarForecastCardEditor extends i {
    constructor() {
        super(...arguments);
        /**
         * True when the current entity values were populated by auto-detection.
         * Set to true after any auto-detect run; reset to false if the user
         * manually edits any entity field. Used to decide whether a device switch
         * should overwrite all mapped entities or leave them alone.
         */
        this._autoPopulated = false;
        /**
         * True when the user changed the device while entities were manually
         * configured. Cleared once auto-population takes over or device is removed.
         */
        this._showManualWarning = false;
    }
    setConfig(config) {
        this._config = normalizeConfig(config);
    }
    _language() {
        return resolveLanguage(this.hass);
    }
    _t(key, vars) {
        return localize(this._language(), key, vars);
    }
    // ── Actual-array management ─────────────────────────────────────────────────
    _addArray() {
        const arrays = [...(this._config?.actual_arrays ?? []), { entity: "", label: "" }];
        this._dispatchArrayChange(arrays);
    }
    _removeArray(idx) {
        const arrays = (this._config?.actual_arrays ?? []).filter((_, i) => i !== idx);
        this._dispatchArrayChange(arrays);
    }
    _updateArrayEntity(idx, entity) {
        const arrays = [...(this._config?.actual_arrays ?? [])];
        arrays[idx] = { ...arrays[idx], entity: entity ?? "" };
        this._dispatchArrayChange(arrays);
    }
    _updateArrayLabel(idx, raw) {
        const arrays = [...(this._config?.actual_arrays ?? [])];
        arrays[idx] = { ...arrays[idx], label: raw.slice(0, 1) };
        this._dispatchArrayChange(arrays);
    }
    _dispatchArrayChange(arrays) {
        if (!this._config)
            return;
        const newConfig = {
            ...this._config,
            actual_arrays: arrays.length > 0 ? arrays : undefined,
        };
        this._config = newConfig;
        this.dispatchEvent(new CustomEvent("config-changed", {
            detail: { config: newConfig },
            bubbles: true,
            composed: true,
        }));
    }
    // ── Entity auto-detection ───────────────────────────────────────────────────
    _deviceSensors(deviceId) {
        if (!this.hass?.entities)
            return [];
        return Object.values(this.hass.entities).filter((e) => e.device_id === deviceId &&
            !e.disabled_by &&
            !e.hidden_by &&
            e.entity_id.startsWith("sensor."));
    }
    // ── Event handling ──────────────────────────────────────────────────────────
    /**
     * Shared handler for all ha-form value-changed events.
     * Each form instance fires only its own field subset; we merge with the
     * current full FormData before converting back to SolarForecastCardConfig.
     */
    _valueChanged(ev) {
        if (!this._config)
            return;
        ev.stopPropagation(); // don't let ha-form's value-changed bubble further
        const partial = ev.detail.value;
        const current = toFormData(this._config);
        const merged = { ...current, ...partial };
        let newConfig = fromFormData(merged, this._config);
        const deviceChanged = !!(newConfig.device_id && newConfig.device_id !== this._config.device_id);
        const deviceCleared = !newConfig.device_id && !!this._config.device_id;
        const isFirstDevice = deviceChanged && !this._config.device_id;
        if (deviceChanged) {
            const detected = autoDetect(this._deviceSensors(newConfig.device_id), this.hass);
            if (isFirstDevice || this._autoPopulated) {
                // First-ever device selection, or entities were previously auto-filled:
                // replace forecast_entities, integration_type, and any detected
                // summary entities. today_actual_entity is always preserved — it
                // typically comes from the inverter, not the forecast device, so
                // device changes must never clear it.
                //
                // remaining_today_entity and next_hour_entity are set to the detected
                // value (may be undefined = clear) so that switching between integrations
                // never leaves stale auto-populated values from a previous device.
                newConfig = {
                    ...newConfig,
                    forecast_entities: detected.forecast_entities,
                    integration_type: detected.integration_type,
                    remaining_today_entity: detected.remaining_today_entity,
                    next_hour_entity: detected.next_hour_entity,
                };
                this._autoPopulated = true;
                this._showManualWarning = false;
            }
            else {
                // User has manually edited entities — leave them alone, but still
                // update integration_type so parsing logic stays correct.
                newConfig = { ...newConfig, integration_type: detected.integration_type };
                this._showManualWarning = true;
            }
        }
        else if (deviceCleared) {
            newConfig = {
                ...newConfig,
                integration_type: "manual",
                remaining_today_entity: undefined,
                next_hour_entity: undefined,
            };
            this._autoPopulated = false;
            this._showManualWarning = false;
        }
        else if (ENTITY_FIELDS.some((f) => f in partial)) {
            // User manually edited an entity field — mark as no longer auto-populated.
            this._autoPopulated = false;
        }
        this._config = newConfig;
        // composed: true is required so the event crosses the shadow DOM boundary
        // back to HA's dialog and the config is actually saved.
        this.dispatchEvent(new CustomEvent("config-changed", {
            detail: { config: newConfig },
            bubbles: true,
            composed: true,
        }));
    }
    render() {
        if (!this.hass || !this._config)
            return A;
        const data = toFormData(this._config);
        const label = (s) => this._t(`editor.labels.${s.name}`);
        const onChange = this._valueChanged.bind(this);
        return b `
      <ha-form
        .hass=${this.hass}
        .data=${data}
        .schema=${SCHEMA_DEVICE}
        .computeLabel=${label}
        @value-changed=${onChange}
      ></ha-form>
      <p class="device-helper">
        <ha-icon icon="mdi:information-outline"></ha-icon>
        ${this._t("editor.helpers.device")}
      </p>

      ${this._showManualWarning ? b `
        <ha-alert alert-type="warning">
          ${this._t("editor.warnings.manualEntities")}
        </ha-alert>
      ` : A}

      <ha-form
        .hass=${this.hass}
        .data=${data}
        .schema=${SCHEMA_TOP}
        .computeLabel=${label}
        @value-changed=${onChange}
      ></ha-form>
      <p class="device-helper" style="margin:0 0 4px">
        <ha-icon icon="mdi:information-outline"></ha-icon>
        ${this._t("editor.helpers.estimate10")}
      </p>

      <ha-expansion-panel header=${this._t("editor.sections.integrationType")} outlined leftChevron>
        <p class="device-helper" style="margin:8px 0 6px">
          <ha-icon icon="mdi:information-outline"></ha-icon>
          ${this._t("editor.helpers.integrationType")}
        </p>
        <ha-form
          .hass=${this.hass}
          .data=${data}
          .schema=${integrationSchema((key) => this._t(key))}
          .computeLabel=${label}
          @value-changed=${onChange}
        ></ha-form>
      </ha-expansion-panel>

      <ha-expansion-panel header=${this._t("editor.sections.dailyForecastEntities")} outlined leftChevron>
        <ha-form
          .hass=${this.hass}
          .data=${data}
          .schema=${SCHEMA_FORECAST}
          .computeLabel=${label}
          @value-changed=${onChange}
        ></ha-form>
      </ha-expansion-panel>

      <ha-expansion-panel header=${this._t("editor.sections.liveData")} outlined leftChevron>
        <ha-form
          .hass=${this.hass}
          .data=${data}
          .schema=${SCHEMA_LIVE}
          .computeLabel=${label}
          @value-changed=${onChange}
        ></ha-form>
        <p class="device-helper" style="margin:4px 0 6px">
          <ha-icon icon="mdi:information-outline"></ha-icon>
          ${this._t("editor.helpers.liveData")}
        </p>
      </ha-expansion-panel>

      <ha-expansion-panel header=${this._t("editor.sections.actualGenerationArrays")} outlined leftChevron>
        <p class="device-helper" style="margin:8px 0 10px">
          <ha-icon icon="mdi:information-outline"></ha-icon>
          ${this._t("editor.helpers.actualArrays")}
        </p>
        ${(this._config.actual_arrays ?? []).map((entry, idx) => b `
          <div class="array-row">
            <ha-selector
              .hass=${this.hass}
              .selector=${{ entity: { domain: ["sensor"] } }}
              .value=${entry.entity || ""}
              .label=${this._t("editor.arrays.entity")}
              @value-changed=${(e) => this._updateArrayEntity(idx, e.detail.value)}
            ></ha-selector>
            <div class="array-label-wrap">
              <span class="array-field-label">${this._t("editor.arrays.label")}</span>
              <input
                type="text"
                class="array-label-input"
                placeholder=${this._t("editor.arrays.placeholder")}
                maxlength="1"
                .value=${entry.label || ""}
                @input=${(e) => this._updateArrayLabel(idx, e.target.value)}
              />
              <span class="array-label-hint">${this._t("editor.arrays.hint")}</span>
            </div>
            <ha-icon-button
              .label=${this._t("editor.arrays.remove")}
              .path=${"M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z"}
              @click=${() => this._removeArray(idx)}
            ></ha-icon-button>
          </div>
        `)}
        <div
          class="add-array-btn"
          role="button"
          tabindex="0"
          @click=${this._addArray.bind(this)}
          @keydown=${(e) => (e.key === "Enter" || e.key === " ") && this._addArray()}
        >
          <ha-icon icon="mdi:plus-circle-outline"></ha-icon>
          ${this._t("editor.arrays.add")}
        </div>
      </ha-expansion-panel>

      <ha-expansion-panel header=${this._t("editor.sections.systemParameters")} outlined leftChevron>
        <ha-form
          .hass=${this.hass}
          .data=${data}
          .schema=${SCHEMA_SYSTEM}
          .computeLabel=${label}
          @value-changed=${onChange}
        ></ha-form>
      </ha-expansion-panel>

      <ha-expansion-panel header=${this._t("editor.sections.energyProvider")} outlined leftChevron>
        <ha-form
          .hass=${this.hass}
          .data=${data}
          .schema=${SCHEMA_ENERGY_PROVIDER}
          .computeLabel=${label}
          @value-changed=${onChange}
        ></ha-form>
      </ha-expansion-panel>

      <ha-expansion-panel header=${this._t("editor.sections.colourThresholds")} outlined leftChevron>
        <ha-form
          .hass=${this.hass}
          .data=${data}
          .schema=${SCHEMA_THRESHOLDS}
          .computeLabel=${label}
          @value-changed=${onChange}
        ></ha-form>
      </ha-expansion-panel>

      <ha-expansion-panel header=${this._t("editor.sections.dateTimeDisplay")} outlined leftChevron>
        <ha-form
          .hass=${this.hass}
          .data=${data}
          .schema=${SCHEMA_DISPLAY_TEXT_SCALE}
          .computeLabel=${label}
          @value-changed=${onChange}
        ></ha-form>
        <p class="device-helper" style="margin:2px 0 6px">
          <ha-icon icon="mdi:information-outline"></ha-icon>
          ${this._t("editor.helpers.desktopTextScale")}
        </p>
        <ha-form
          .hass=${this.hass}
          .data=${data}
          .schema=${SCHEMA_DISPLAY_FONT_SIZE}
          .computeLabel=${label}
          @value-changed=${onChange}
        ></ha-form>
        <p class="device-helper" style="margin:2px 0 6px">
          <ha-icon icon="mdi:information-outline"></ha-icon>
          ${this._t("editor.helpers.fontSize")}
        </p>
        <ha-form
          .hass=${this.hass}
          .data=${data}
          .schema=${SCHEMA_DISPLAY_BAR_WIDTH}
          .computeLabel=${label}
          @value-changed=${onChange}
        ></ha-form>
        <p class="device-helper" style="margin:2px 0 6px">
          <ha-icon icon="mdi:information-outline"></ha-icon>
          ${this._t("editor.helpers.barWidth")}
        </p>
        <ha-form
          .hass=${this.hass}
          .data=${data}
          .schema=${mainViewSchema((key) => this._t(key))}
          .computeLabel=${label}
          @value-changed=${onChange}
        ></ha-form>
        <p class="device-helper" style="margin:2px 0 6px">
          <ha-icon icon="mdi:information-outline"></ha-icon>
          ${this._t("editor.helpers.mainView")}
        </p>
      </ha-expansion-panel>
    `;
    }
};
SolarForecastCardEditor.styles = editorStyles;
__decorate([
    n({ attribute: false })
], SolarForecastCardEditor.prototype, "hass", void 0);
__decorate([
    r()
], SolarForecastCardEditor.prototype, "_config", void 0);
__decorate([
    r()
], SolarForecastCardEditor.prototype, "_autoPopulated", void 0);
__decorate([
    r()
], SolarForecastCardEditor.prototype, "_showManualWarning", void 0);
SolarForecastCardEditor = __decorate([
    t("solar-forecast-card-editor")
], SolarForecastCardEditor);

window.customCards = window.customCards ?? [];
window.customCards.push({
    type: "solar-forecast-card",
    name: localize("en", "customCard.name"),
    description: localize("en", "customCard.description"),
    preview: false,
});
