import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Profile from "./components/Profile";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

function App() {
  return (
    <div className="App">
      <Header />
      <Skills />
      <Profile />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
