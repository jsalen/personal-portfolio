import React from "react";
import { FaAlgolia, FaCss3Alt, FaHtml5, FaReact } from "react-icons/fa";
import experienceContent from "../../content/experience.json";
import { Container } from "./styles";
import { DiJavascript } from "react-icons/di";
import { TbBrandNextjs } from "react-icons/tb";
import {
  SiContentful,
  SiJest,
  SiStyledcomponents,
  SiTypescript,
} from "react-icons/si";

export const Experience = ({ locale }) => {
  return (
    <Container>
      <h2>{experienceContent[locale].heading}</h2>
      <div>
        <ul>
          {experienceContent[locale].experienceList.map((item, index) => {
            const {
              companyNameCopy,
              companyLink,
              companyName,
              titleCopy,
              title,
              datesCopy,
              dates,
              responsabilitiesCopy,
              responsabilities,
            } = item;

            return (
              <React.Fragment key={`${index}-${companyName}`}>
                <li>
                  <span>{companyNameCopy}</span>
                  <a href={companyLink} target="_blank" rel="noreferrer">
                    {companyName}
                  </a>
                </li>
                <li>
                  <span>{titleCopy}</span> {title}
                </li>
                <li>
                  <span>{datesCopy}</span> {dates}
                </li>
                <li>
                  <span>{responsabilitiesCopy}</span>
                  <ul>
                    {responsabilities.map(({ description }, index) => (
                      <li key={`${index}-${description}`}>{description}</li>
                    ))}
                  </ul>
                </li>
              </React.Fragment>
            );
          })}
          <li>
            <span>{experienceContent[locale].technologiesSubheading}</span>
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
              <li>
                <SiJest /> Jest
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </Container>
  );
};
