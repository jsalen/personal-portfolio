import { Navigation } from "../../components/Navigation";

import { Container } from "./styles";

export const Header = ({ locale, onChangeUserLanguage }) => {
  return (
    <Container>
      <p>salen.js</p>
      <div>
        {/* TODO: Create Language Selector */}
        <button onClick={() => onChangeUserLanguage("en")}>English</button>
        <button onClick={() => onChangeUserLanguage("es")}>Spanish</button>
        <Navigation locale={locale} />
      </div>
    </Container>
  );
};
