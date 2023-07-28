import { useState, useEffect } from "react";

export const useUserLanguage = () => {
  const [userLanguage, setUserLanguage] = useState("en");

  useEffect(() => {
    let userLang = navigator.language || navigator.userLanguage;
    let userLangShort = userLang.split("-")[0];

    if (userLangShort !== "es" && userLangShort !== "en") {
      userLangShort = "en";
    }

    setUserLanguage(userLangShort);
  }, []);

  return [userLanguage, setUserLanguage];
};
