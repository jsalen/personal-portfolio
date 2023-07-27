import { Layout } from "./components/Layout";
import { About } from "./containers/About";
import { Contact } from "./containers/Contact";
import { Experience } from "./containers/Experience";
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
        <Experience />
        <Work />
        <Contact />
      </Layout>
    </>
  );
}

export default App;
