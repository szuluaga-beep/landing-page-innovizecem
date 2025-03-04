import About from "../../container/About Us/About";
import Hero from "../../container/Hero/Hero";
import Solution from "../../container/Solution Us/Solution";
import Contact from "../../container/contact/Contact";
import Portfolio from "../../container/portfolio/Portfolio";
import 'bootstrap/dist/css/bootstrap.min.css';


export default function Home() {
  return (
    <>
      <div>
        <Hero/>
        <About/>
        <Solution/>
        <Portfolio/>
        <Contact/>
      </div>
    </>
  );
}
