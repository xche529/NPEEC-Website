import React, { useState } from "react";
import { useTranslation } from "react-i18next";

function Header() {
  const { t, i18n } = useTranslation();

  const [lang, setlang] = useState("zh");

  const handleLanguageChange = () => {
    if (lang === "zh") {
      setlang("en");
    } else {
      setlang("zh");
    }
    i18n.changeLanguage(lang);
  };

  return (
    <header className="p-4 bg-gray-200 flex" data-testid="header">
      <div className="flex space-x-4 items-center mt-4 lg:mt-0">
        <h1 className="font-bold text-3xl lg:text-5xl">NPEEC</h1>
        <button className="m-{5px}">{t("header.aboutUs")}</button>
        <button>{t("header.contactUs")}</button>
        <button onClick={() => handleLanguageChange()}>
          {t("header.language")}
        </button>
      </div>
    </header>
  );
}

export default Header;
