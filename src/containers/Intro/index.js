import { Container, Description, Figure } from './styles'
import profilePic from '../../statics/images/profile.png'

export const Intro = () => {
  return (
    <Container>
      <Figure>
        <img src={profilePic} alt='Foto de perfil' />
      </Figure>

      <Description>
        <h1>React.js Front-end Developer</h1>
        <p>I build beautiful interfaces with the help of React.js</p>
      </Description>
    </Container>
  )
}
