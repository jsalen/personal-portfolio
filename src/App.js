import { Layout } from './components/Layout'
import { About } from './containers/About'
import { Header } from './containers/Header'
import { Intro } from './containers/Intro'

function App() {
  return (
    <>
      <Header />
      <Layout>
        <Intro />
        <About />
      </Layout>
    </>
  )
}

export default App
