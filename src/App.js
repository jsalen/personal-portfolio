import { Layout } from "./components/Layout";
import { About } from "./containers/About";
import { Contact } from "./containers/Contact";
import { Experience } from "./containers/Experience";
import { Header } from "./containers/Header";
import { Intro } from "./containers/Intro";
import { Work } from "./containers/Work";
import { useUserLanguage } from "./hooks/useUserLanguage";

function App() {
  const [userLanguage, setUserLanguage] = useUserLanguage();

  const onChangeUserLanguage = (value) => {
    setUserLanguage(value);
  };

  return (
    <>
      <Header
        locale={userLanguage}
        onChangeUserLanguage={onChangeUserLanguage}
      />
      <Layout>
        <Intro locale={userLanguage} />
        <About locale={userLanguage} />
        <Experience locale={userLanguage} />
        <Work locale={userLanguage} />
        <Contact locale={userLanguage} />
      </Layout>
    </>
  );
}

export default App;
