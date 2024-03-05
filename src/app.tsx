import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Sidebar from '@/components/ui/sidebar';
import AboutMe from '@/components/sections/about-me';
import Stacks from '@/components/sections/stacks';
import Projects from '@/components/sections/projects';
import { ThemeProvider } from '@/components/ui/theme-provider';



export function App() {
  return (
    <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
      <Router>
        <div className="flex">
            <Sidebar />
            <div className="flex-grow p-8">
              <Routes>
                <Route path="/" element={<Navigate to="/about-me" />} />
                <Route path="/about-me" element={<AboutMe />} />
                <Route path="/stacks" element={<Stacks />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/experiences" element={<Stacks />} />
              </Routes>

          </div>
        </div>
      </Router>
    </ThemeProvider>
  );
}


