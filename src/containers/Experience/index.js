import { FaAlgolia, FaCss3Alt, FaHtml5, FaReact } from "react-icons/fa";
import { Container } from "./styles";
import { DiJavascript } from "react-icons/di";
import { TbBrandNextjs } from "react-icons/tb";
import { SiContentful, SiStyledcomponents, SiTypescript } from "react-icons/si";

export const Experience = () => {
  return (
    <Container>
      <h2>Work Experience</h2>
      <div>
        <ul>
          <li>
            <span>Company name:</span>{" "}
            <a href="https://www.applydigital.com/" taget="_blank">
              Apply Digital
            </a>
          </li>
          <li>
            <span>Title:</span> Frontend Engineer
          </li>
          <li>
            <span>Dates:</span> Mar 2022 - Jul 2023
          </li>
          <li>
            <span>Responsabilities:</span>
            <ul>
              <li>
                Developed and maintained web applications using HTML, CSS and
                React
              </li>
              <li>
                Implemented UIs given by Design team, ensuring that it met all
                requirements (visually and functionally)
              </li>
              <li>
                Worked with a headless CMS and a backend team to integrate UI
                components with APIs and databases
              </li>
            </ul>
          </li>
          <li>
            <span>Technologies Used:</span>
            <ul className="row">
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
                <SiContentful /> Contentful CMS
              </li>
              <li>
                <FaAlgolia /> Algolia
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </Container>
  );
};
