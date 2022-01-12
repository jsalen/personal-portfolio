import { FaLinkedin, FaGithub } from 'react-icons/fa'
import { Button } from '../Button'
import { Container, Nav } from './styles'

export const Header = () => {
  return (
    <Container>
      <p>icon</p>
      <Nav>
        <a
          href='https://www.linkedin.com/in/salenjs/'
          target='_blank'
          rel='noreferrer'
        >
          <FaLinkedin />
        </a>
        <a href='https://github.com/jsalen' target='_blank' rel='noreferrer'>
          <FaGithub />
        </a>
        <Button>Contact me!</Button>
      </Nav>
    </Container>
  )
}
