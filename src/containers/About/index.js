import { FaCss3Alt, FaHtml5, FaReact, FaNodeJs } from "react-icons/fa";
import { DiJavascript } from "react-icons/di";
import { TbBrandNextjs } from "react-icons/tb";
import {
  SiContentful,
  SiMongodb,
  SiStyledcomponents,
  SiTypescript,
} from "react-icons/si";
import { PiFileSqlBold } from "react-icons/pi";
import { Container, Content } from "./styles";

export const About = () => {
  return (
    <Container>
      <h2>About Me</h2>
      <Content>
        <p>
          I am a dedicated Frontend Engineer with 3 years of experience. My most
          recent company was Apply Digital, where I worked for over a year. I
          specialize in Frontend development with React using the NextJS
          framework. I have a background as IT Technician since 2016. In March
          2020, I made a seamless transition into the world of Frontend
          development. This ignited my passion for creating exceptional user
          experiences.
        </p>
        <p>
          My expertise lies in crafting robust and intuitive frontend solutions
          using Next.js. I excel in building reusable components and
          implementing the principles of atomic design. I have a strong command
          over integrating headless CMS, with Contentful being my go-to choice.
          I am continuously seeking growth and consistently explore new tools
          and frameworks to enhance my development prowess. What sets me apart
          in my field is my unwavering dedication to delivering top-notch
          products to my clients
        </p>
        <p>
          I bring a high level of enthusiasm and a customer-centric approach to
          every project, ensuring that the end result not only meets but exceeds
          expectations. I take pride in my ability to collaborate effectively
          with cross-functional teams and assist others whenever needed. Looking
          ahead, I have ambitious aspirations to evolve into a Full Stack
          Developer. While my current focus lies in mastering Frontend
          Development.
        </p>
        <p>Here are some of the technologies I've been working recently:</p>
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
            <SiStyledcomponents /> Style-Components
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
        </ul>
      </Content>
    </Container>
  );
};
