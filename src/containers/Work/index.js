import { WorkCard } from '../../components/WorkCard'

import { works } from '../../db'
import { CardContainer, Container } from './styles'

export const Work = () => {
  return (
    <Container>
      <h1>My Recent Work</h1>
      <CardContainer>
        {works.map((work) => (
          <WorkCard
            key={work.id}
            name={work.name}
            description={work.description}
            tools={work.tools}
            links={work.links}
            image={work.image}
          />
        ))}
      </CardContainer>
    </Container>
  )
}
