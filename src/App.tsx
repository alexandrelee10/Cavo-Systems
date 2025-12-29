import { useState } from "react"
import { Navigation } from "./components/Navigation";
import Hero from "./components/Hero";
import { TrustedBy } from "./components/TrustedBy";
import { Services } from "./components/services";
import { Work } from "./components/Work";
import { TheTeam } from "./components/TheTeam";
import { Contact } from "./components/Contact";
import { Footer } from "./Footer";

const App = () => {

  const [theme, setTheme] = useState(localStorage.getItem('theme') ? localStorage.getItem('theme') : 'light');

  return (
    <div className="relative min-h-screen bg-white text-gray-900 dark:bg-black dark:text-white">
      <Navigation theme={theme} setTheme={setTheme}/>
      <Hero />
      <TrustedBy />
      <Services />
      <Work />
      <TheTeam />
      <Contact />
      <Footer theme={theme}/>
    </div>
  )
}

export default App

