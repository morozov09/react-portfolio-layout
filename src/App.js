import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import Home from './components/pages/Home';
import Projects from './components/pages/Projects';
import Contacts from './components/pages/Contacts';
import ProjectPage from './components/pages/ProjectPage';
import ScrollToTop from './utils/ScrollToTop';

function App() {
  return (
    <div className="App">
      <Router>
      <ScrollToTop />
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/project-page/:id" element={<ProjectPage />}/>
          <Route path="/contacts" element={<Contacts />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
