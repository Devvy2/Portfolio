import "./about.css";
import { useTranslation } from "react-i18next";

export function About() {
  const { t } = useTranslation("global");
  return (
    <div className="about-section">
      <div className="about-content">
        <h1 className="about-title">{t("About")}</h1>
        <p className="about-p">{t("Description")}</p>
      </div>
    </div>
  );
}
