import { Layout } from './components/Layout'
import { Header } from './containers/Header'
import { Intro } from './containers/Intro'

function App() {
  return (
    <>
      <Header />
      <Layout>
        <Intro />
      </Layout>
    </>
  )
}

export default App
