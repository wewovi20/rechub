"use client"
import {Header} from "./components/header";
import {Hero} from "./components/hero";
import {About} from "./components/about";
import { Programs } from "./components/programs";
import { Community } from "./components/community";
import { Events } from "./components/events";
import { Partners } from "./components/partners";
import { Contact } from "./components/contact";
import { Footer } from "./components/footer";
export default function Home() {
  return (
    <div>
    <Header/>
    <Hero/>
    <About/>
    <Programs/>
    <Community/>
    <Events/>
    <Partners/>
    <Contact/>
    <Footer/>
    </div>
  );
}
