import { Container, Content } from './styles'

export const About = () => {
  return (
    <Container>
      <h1>About Me</h1>
      <Content>
        <p>
          Hi there! 👋 my name is <span>Joseph Salen</span>, I'm a React.js
          Front-end Developer currently living in Venezuela. For the last two
          years I've been learning how to create beautiful and powerful websites
          to bring to life awesome products to the Internet. My goal is to
          translate your idea into a Website that not only looks pretty but also
          becomes easy to use for your user.
        </p>
        <p>
          Every day I try to learn something new to add to my skillset, I'm
          capable of working with' something related to frontend or backend
          development, but my specialty is Front-End Development.
        </p>
        <p>
          I've been using awesome platforms like{' '}
          <a href='https://www.platzi.com/' target='_blank' rel='noreferrer'>
            Platzi
          </a>{' '}
          among others to grind my road into learning Frontend Development with
          ReactJS.
        </p>
        <p>Here are some of the technologies I've been working recently:</p>
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>SASS</li>
          <li>JavaScript</li>
          <li>React.js</li>
          <li>Node.js</li>
          <li>Express</li>
          <li>Style-Components</li>
        </ul>
      </Content>
    </Container>
  )
}
