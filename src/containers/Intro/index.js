import { Button } from "../../components/Button";
import intro from "../../content/intro.json";
import { Container, Description, Figure } from "./styles";

const profilePic =
  "https://salen-portfolio.s3.us-east-2.amazonaws.com/profile.png";

export const Intro = ({ locale }) => {
  return (
    <Container>
      <Description>
        <h1>{intro[locale].heading}</h1>
        <p>{intro[locale].description}</p>
        <Button>{intro[locale].button}</Button>
      </Description>
      <Figure>
        <img src={profilePic} alt={intro[locale].imageDescription} />
      </Figure>
    </Container>
  );
};
