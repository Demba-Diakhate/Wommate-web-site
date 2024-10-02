import "./App.css";
import Header from "./pages/header";
import HeroSection from "./pages/hero_section";
import Partenaires from "./pages/partenaires";
import Apropos from "./pages/a_propos";
import Services from "./pages/services";
import Formation from "./pages/formation";
import Team from "./pages/team";
import Contact from "./pages/contact";
import Footer from "./pages/footer";

function App() {
  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        <HeroSection />
        <Partenaires />
        <Apropos />
        <Services />
        <Formation />
        <Team/>
        <Contact />
        <Footer />
      </main>
      <footer></footer>
    </>
  );
}

export default App;
