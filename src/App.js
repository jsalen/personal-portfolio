import { Layout } from './components/Layout'
import { About } from './containers/About'
import { Header } from './containers/Header'
import { Intro } from './containers/Intro'
import { Work } from './containers/Work'

function App() {
  return (
    <>
      <Header />
      <Layout>
        <Intro />
        <About />
        <Work />
      </Layout>
    </>
  )
}

export default App
