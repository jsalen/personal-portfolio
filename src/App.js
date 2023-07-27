import { Layout } from "./components/Layout";
import { About } from "./containers/About";
import { Contact } from "./containers/Contact";
import { Header } from "./containers/Header";
import { Intro } from "./containers/Intro";
import { Work } from "./containers/Work";

function App() {
  return (
    <>
      <Header />
      <Layout>
        <Intro />
        <About />
        <Work />
        <Contact />
      </Layout>
    </>
  );
}

export default App;
