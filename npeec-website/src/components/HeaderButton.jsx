import React from "react";
import { useTranslation } from "react-i18next";

function HeaderButton({ text, onClick }) {
  const { t } = useTranslation();

  return (
    <button
      className="h-full py-2 px-8 transition transition-colors transition-transform duration-200 ease-in hover:bg-blue-600 hover:text-white"
      onClick={() => onClick()}
    >
      {t(text)}
    </button>
  );
}

export default HeaderButton;
