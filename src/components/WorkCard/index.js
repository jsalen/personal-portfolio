import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { Card, Footer } from "./styles";

export const WorkCard = ({ name, description, tools, links, image }) => {
  return (
    <Card image={image}>
      <h3>{name}</h3>
      <p>{description}</p>
      <Footer>
        <ul>
          {tools.map((tool, index) => (
            <li key={index}>{tool}</li>
          ))}
        </ul>
        <div>
          <a href={links.github} target="_blank" rel="noreferrer">
            <FaGithub />
          </a>
          <a href={links.demo} target="_blank" rel="noreferrer">
            <FaExternalLinkAlt />
          </a>
        </div>
      </Footer>
    </Card>
  );
};
