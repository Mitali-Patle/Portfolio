import HeaderLeft from "./components/HeaderLeft";
import Home from "./components/Home";
import Education from "./components/Education";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="flex h-screen w-screen overflow-hidden">
      <HeaderLeft />
      <main className="flex-1 overflow-y-scroll h-full px-6 py-4">
        <section id="home">
          <Home />
        </section>
        <section id="education">
          <Education />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </main>
    </div>
  );
}

export default App;
