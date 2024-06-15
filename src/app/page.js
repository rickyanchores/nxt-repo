import Image from "next/image";
import Nav from "./Components/Nav/Nav";
import Hero from "./Components/Hero/Hero";
import Banner from "./Components/Banner/Banner";
import Social from "./Components/Social/Social";

const Home = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Nav />
      <Hero />
      <Banner />
      <Social />
    </main>
  );
}

export default Home;