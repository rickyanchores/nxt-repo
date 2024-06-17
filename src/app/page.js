import Image from "next/image";
import Link from "next/link";
import Nav from "./Components/Nav/Nav";
import Hero from "./Components/Hero/Hero";
import Gallery from "./Components/Gallery/Gallery";
import About from "./Components/About/About";
import Faq from "./Components/Faq/Faq";


const Home = () => {
  return (
    <main className="Home p-4">
      <h1>Sample</h1>
      <Link href="/user">User</Link>
      <Nav />
      <Hero />
      <Gallery />
      <About />
      <Faq />
    </main>
  );
}

export default Home;