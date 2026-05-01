import af from "./af.json";
import ar from "./ar.json";
import bg from "./bg.json";
import bn from "./bn.json";
import bs from "./bs.json";
import ca from "./ca.json";
import cs from "./cs.json";
import cy from "./cy.json";
import da from "./da.json";
import de from "./de.json";
import el from "./el.json";
import en from "./en.json";
import en_GB from "./en-GB.json";
import eo from "./eo.json";
import es from "./es.json";
import es_419 from "./es-419.json";
import et from "./et.json";
import eu from "./eu.json";
import fa from "./fa.json";
import fi from "./fi.json";
import fy from "./fy.json";
import fr from "./fr.json";
import ga from "./ga.json";
import gl from "./gl.json";
import gsw from "./gsw.json";
import he from "./he.json";
import hi from "./hi.json";
import hr from "./hr.json";
import hu from "./hu.json";
import hy from "./hy.json";
import id from "./id.json";
import it from "./it.json";
import is from "./is.json";
import ja from "./ja.json";
import ka from "./ka.json";
import ko from "./ko.json";
import lb from "./lb.json";
import lt from "./lt.json";
import lv from "./lv.json";
import mk from "./mk.json";
import ml from "./ml.json";
import nl from "./nl.json";
import nb from "./nb.json";
import nn from "./nn.json";
import pl from "./pl.json";
import pt from "./pt.json";
import pt_BR from "./pt-BR.json";
import ro from "./ro.json";
import ru from "./ru.json";
import sk from "./sk.json";
import sl from "./sl.json";
import sr from "./sr.json";
import sr_Latn from "./sr-Latn.json";
import sv from "./sv.json";
import sq from "./sq.json";
import ta from "./ta.json";
import te from "./te.json";
import th from "./th.json";
import tr from "./tr.json";
import uk from "./uk.json";
import ur from "./ur.json";
import vi from "./vi.json";
import zh_Hans from "./zh-Hans.json";
import zh_Hant from "./zh-Hant.json";

export type LocaleKey = "af" | "ar" | "bg" | "bn" | "bs" | "ca" | "cs" | "cy" | "da" | "de" | "el" | "en" | "en-GB" | "eo" | "es" | "es-419" | "et" | "eu" | "fa" | "fi" | "fy" | "fr" | "ga" | "gl" | "gsw" | "he" | "hi" | "hr" | "hu" | "hy" | "id" | "it" | "is" | "ja" | "ka" | "ko" | "lb" | "lt" | "lv" | "mk" | "ml" | "nl" | "nb" | "nn" | "pl" | "pt" | "pt-BR" | "ro" | "ru" | "sk" | "sl" | "sr" | "sr-Latn" | "sv" | "sq" | "ta" | "te" | "th" | "tr" | "uk" | "ur" | "vi" | "zh-Hans" | "zh-Hant";
export type LocaleTree = Record<string, unknown>;

export const LOCALES: Record<LocaleKey, LocaleTree> = {
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


export const LANGUAGE_OPTIONS: LocaleKey[] = ["af", "ar", "bg", "bn", "bs", "ca", "cs", "cy", "da", "de", "el", "en", "en-GB", "eo", "es", "es-419", "et", "eu", "fa", "fi", "fy", "fr", "ga", "gl", "gsw", "he", "hi", "hr", "hu", "hy", "id", "it", "is", "ja", "ka", "ko", "lb", "lt", "lv", "mk", "ml", "nl", "nb", "nn", "pl", "pt", "pt-BR", "ro", "ru", "sk", "sl", "sr", "sr-Latn", "sv", "sq", "ta", "te", "th", "tr", "uk", "ur", "vi", "zh-Hans", "zh-Hant"];
