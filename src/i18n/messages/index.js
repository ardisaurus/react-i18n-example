import en from "./en-US.json";
import de from "./de-DE.json";
import fr from "./fr-CA.json";
import { LOCALES } from "../locales";
export default {
  [LOCALES.ENGLISH]: { ...en },
  [LOCALES.FRENCH]: { ...fr },
  [LOCALES.GERMAN]: { ...de },
};
