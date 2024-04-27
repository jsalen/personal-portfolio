import { WorkCard } from "../../components/WorkCard";

import workContent from "../../content/work.json";
import { CardContainer, Container } from "./styles";

export const Work = ({ locale }) => {
  return (
    <Container>
      <h2>{workContent[locale].heading}</h2>
      <CardContainer>
        {workContent[locale].works
          .map((work) => {
            if (work.status === "archived") return null;

            return (
              <WorkCard
              key={work.id}
              name={work.name}
              description={work.description}
              tools={work.tools}
              links={work.links}
              image={work.image}
            />
            )
          })
          .reverse()}
      </CardContainer>
    </Container>
  );
};
