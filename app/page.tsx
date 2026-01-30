"use client"
import {Header} from "./components/header";
import {Hero} from "./components/hero";
import {About} from "./components/about";
import { Team } from "./components/team";
import { Programs } from "./components/programs";
import { Community } from "./components/community";
import { Events } from "./components/events";
import { Gallery } from "./components/gallery";
import { Partners } from "./components/partners";
import { Contact } from "./components/contact";
import { Footer } from "./components/footer";
export default function Home() {
  return (
    <div>
    <Header/>
    <Hero/>
    <About/>
    <Team/>
    <Programs/>
    <Community/>
    <Events/>
    <Gallery/>
    <Partners/>
    <Contact/>
    <Footer/>
    </div>
  );
}
