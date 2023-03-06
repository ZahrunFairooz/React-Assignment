import React, { useEffect } from "react";
import "./App.css";
import Education from "./screens/Education";
import ExpAwards from "./screens/ExpAwards";
import Footer from "./screens/Footer";
import HeroNavBar from "./screens/HeroNavBar";
import MySkills from "./screens/MySkills";
import Aos from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <>
      <HeroNavBar />
      <Education />
      <ExpAwards />
      <MySkills />
      <Footer />
    </>
  );
}

export default App;
