import "./styles/App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Profile from "./components/Profile";
import Projects from "./components/Projects";
import SettingsBar from "./components/SettingsBar";
import Skills from "./components/Skills";

function App() {
  return (
    <div className="App">
      <SettingsBar />
      <Navbar />
      <Header />
      <Skills />
      <Profile />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
