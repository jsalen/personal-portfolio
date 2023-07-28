import { useEffect, useState } from "react";
import {
  MdOutlineKeyboardArrowDown,
  MdOutlineKeyboardArrowUp,
} from "react-icons/md";
import USFlag from "../../statics/assets/us-flag.png";
import SpainFlag from "../../statics/assets/spain-flag.png";
import { useWindowWidth } from "../../hooks/useWindowWidth";
import { Button, Dropdown, StyledLanguageSelector } from "./styles";
import locales from "./locales.json";

export const LanguageSelector = ({ locale, onChangeUserLanguage }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { windowWidth } = useWindowWidth();
  const isDesktop = windowWidth > 1024;

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isOpen && !event.target.closest(".language-selector")) {
        setIsOpen(false);
      }
    };
    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isOpen]);

  const handleToggle = () => {
    setIsOpen((prevState) => !prevState);
  };

  const parseFlag = (locale) => {
    switch (locale) {
      case "en":
        return USFlag;
      case "es":
        return SpainFlag;
      default:
        return USFlag;
    }
  };

  const parseUnselectedFlag = (locale) => {
    switch (locale) {
      case "en":
        return SpainFlag;
      case "es":
        return USFlag;
      default:
        return USFlag;
    }
  };

  const unselectedLocale = locale === "en" ? "es" : "en";

  const handleLocaleSelection = (value) => {
    onChangeUserLanguage(value);
    setIsOpen(false);
  };

  return (
    <StyledLanguageSelector>
      <Button onClick={() => handleToggle()} className="language-selector">
        <img src={parseFlag(locale)} alt="Language selector" />
        {isDesktop && <span>{locales[locale].language}</span>}
        {isOpen ? <MdOutlineKeyboardArrowUp /> : <MdOutlineKeyboardArrowDown />}
      </Button>
      {isOpen && (
        <Dropdown>
          <Button onClick={() => handleLocaleSelection(unselectedLocale)}>
            <img src={parseUnselectedFlag(locale)} alt="Language Selector" />{" "}
            <span>{locales[unselectedLocale].language}</span>
          </Button>
        </Dropdown>
      )}
    </StyledLanguageSelector>
  );
};
