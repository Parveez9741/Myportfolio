// src/App.jsx
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Resume from "./components/Resume";
import Skills from "./components/Skills";
import Home from "./pages/Home";

export default function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Skills/>
      <Resume/>
     <Footer/>
    </>
  );
}
