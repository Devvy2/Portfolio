import { useTranslation } from "react-i18next";
import "./Languagetoggler.css";

export function LanguageToggler() {
  const { i18n } = useTranslation();

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  return (
    <div>
      <button className="Language-btn" onClick={() => changeLanguage("en")}>
        <img src="/images/GB.png" alt="" />
      </button>
      <button className="Language-btn" onClick={() => changeLanguage("no")}>
        <img src="/images/NO.png" alt="" />
      </button>
    </div>
  );
}
