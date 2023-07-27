import { Container, Description, Figure } from './styles'
import { Button } from '../../components/Button'

const profilePic =
  'https://salen-portfolio.s3.us-east-2.amazonaws.com/profile.png'

export const Intro = () => {
  return (
    <Container>
      <Description>
        <h1>React.js Front-end Developer</h1>
        <p>I build beautiful interfaces with the help of React.js/Next.js/Typescript</p>
        <Button>Contact me!</Button>
      </Description>
      <Figure>
        <img src={profilePic} alt='Foto de perfil' />
      </Figure>
    </Container>
  )
}
