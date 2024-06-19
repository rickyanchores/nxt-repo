import Image from "next/image";
import Nav from "./Components/Nav/Nav";
import Hero from "./Pages/Hero/Hero";
import About from "./Pages/About/About";
import Gallery from "./Pages/Gallery/Gallery";
import Faq from "./Pages/Faq/Faq";
import Test from "./Pages/Test/Test";

const Home = () => {
  return (
    <main className="Home">
      <h1>Sample</h1>
      <Nav />
      <Hero />
      <About />
      <Gallery />
      <Faq />
    </main>
  );
}

export default Home;