import { Navigation } from "../../components/Navigation";

import { Container } from "./styles";
import { LanguageSelector } from "../../components/LanguageSelector";

export const Header = ({ locale, onChangeUserLanguage }) => {
  return (
    <Container>
      <p>salen.js</p>
      <div>
        <LanguageSelector locale={locale} onChangeUserLanguage={onChangeUserLanguage} />
        <Navigation locale={locale} />
      </div>
    </Container>
  );
};
