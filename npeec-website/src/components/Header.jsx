import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import HeaderButton from "./HeaderButton";

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

  const handleAboutClick = () => {
    console.log("About clicked");
  };

  const handleContactClick = () => {
    console.log("Contact clicked");
  };

  const handleProductClick = () => {
    console.log("Product clicked");
  };

  return (
    <header className="h-20 bg-gray-200  flex items-center">
      <h1 className="m-8 font-bold text-3xl lg:text-5xl ">NPEEC</h1>
      <HeaderButton text="header.products" onClick={handleProductClick} />
      <HeaderButton text="header.aboutUs" onClick={handleAboutClick} />
      <HeaderButton text="header.contactUs" onClick={handleContactClick} />
      <div className="ml-auto"></div>
      <HeaderButton text="header.language" onClick={handleLanguageChange} />
    </header>
  );
}

export default Header;
