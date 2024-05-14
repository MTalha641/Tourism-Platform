import Blog from "../components/Blog";
import Contact from "../components/Contact";
import Hero from "../components/Hero";
import Travel from "../components/Travel";

export default function Home() {
  console.log('came second')
  return (
    <>
        <Hero />
        <Travel />
        <Blog />
        <Contact />

    </>
  )
}
