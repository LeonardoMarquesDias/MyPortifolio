import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Aos from 'aos';
import Home from './pages/Home';
import GlobalProjects from './pages/GlobalProjects';
import ProjectDetail from './pages/ProjectDetail';

export default function App() {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/globalProjects" element={<GlobalProjects />} />
      <Route path="/globalProjects/:slug" element={<ProjectDetail />} />
    </Routes>
  );
}
