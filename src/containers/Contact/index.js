import { Button } from "../../components/Button";
import contactContent from "../../content/contact.json";
import { Container } from "./styles";

export const Contact = ({ locale }) => {
  return (
    <Container>
      <h2>{contactContent[locale].heading}</h2>
      <p>{contactContent[locale].description}</p>
      <Button>{contactContent[locale].button}</Button>
    </Container>
  );
};
