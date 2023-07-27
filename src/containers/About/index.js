import {
  FaAlgolia,
  FaCss3Alt,
  FaHtml5,
  FaReact,
  FaNodeJs,
} from "react-icons/fa";
import { DiJavascript } from "react-icons/di";
import { TbBrandNextjs } from "react-icons/tb";
import {
  SiContentful,
  SiJest,
  SiMongodb,
  SiStyledcomponents,
  SiTypescript,
} from "react-icons/si";
import { PiFileSqlBold } from "react-icons/pi";
import content from "../../content/about.json";
import { Container, Content } from "./styles";

export const About = ({ locale }) => {
  return (
    <Container>
      <h2>{content[locale].heading}</h2>
      <Content>
        {content[locale].body.map((paragraph, index) => (
          <p key={index}>{paragraph.content}</p>
        ))}
        <p>{content[locale].listHeading}</p>
        <ul>
          <li>
            <FaHtml5 /> HTML
          </li>
          <li>
            <FaCss3Alt /> CSS
          </li>
          <li>
            <DiJavascript /> JavaScript
          </li>
          <li>
            <FaReact /> React.js
          </li>
          <li>
            <TbBrandNextjs /> Next.js
          </li>
          <li>
            <SiTypescript /> TypeScript
          </li>
          <li>
            <SiStyledcomponents /> Styled-Components
          </li>
          <li>
            <FaNodeJs /> Node.js
          </li>
          <li>
            <FaNodeJs /> Express
          </li>
          <li>
            <SiMongodb /> MongoDB
          </li>
          <li>
            <PiFileSqlBold /> PosgreSQL
          </li>
          <li>
            <SiContentful /> Contentful CMS
          </li>
          <li>
            <FaAlgolia /> Algolia
          </li>
          <li>
            <SiJest /> Jest
          </li>
        </ul>
      </Content>
    </Container>
  );
};
