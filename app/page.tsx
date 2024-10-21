import Image from "next/image";
import { About } from "./compoents/About";
import { Navbar } from "./compoents/Navbar";
import { Hero } from "./compoents/Hero";
import { Portfolio } from "./compoents/Portfolio";
import { Skills } from "./compoents/Skills";
import { Contact } from "./compoents/Contact";
import { Footer } from "./compoents/Footer";

export default function Home() {
  return (
   
    <>
     <Navbar/>
   <Hero/>
   <About/>
   <Portfolio/>
   <Skills/>
   <Contact/>
   <Footer/>
    </>  
  );
}
