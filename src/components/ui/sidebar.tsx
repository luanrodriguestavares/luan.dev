import { useState, useEffect } from 'react';
import { Rocket, User, FolderDot, Computer, Briefcase } from 'lucide-react';
import { ModeToggle } from './mode-toggle';
import { LanguageToggle } from './language-toogle';
import { Link, useLocation } from 'react-router-dom';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isResponsive, setIsResponsive] = useState(window.innerWidth < 768);
  const location = useLocation();

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsResponsive(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);


  return (
    <>
      <nav className="fixed top-0 z-50 w-full bg-zinc-50 border border-zinc-300 dark:bg-zinc-950 dark:border-zinc-800">
        <div className="px-3 py-3 lg:px-5 lg:pl-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center justify-start rtl:justify-end">
              <button
                data-drawer-target="logo-sidebar"
                data-drawer-toggle="logo-sidebar"
                aria-controls="logo-sidebar"
                type="button"
                onClick={toggleSidebar}
                className="cursor-default inline-flex items-center p-2 text-sm text-zinc-900 dark:text-zinc-50 rounded-lg"
              >
                <span className="sr-only"></span>
                <Rocket className="w-6 h-6 mr-2" strokeWidth="2" />
              </button>
            </div>
            <div className="group">
              <LanguageToggle />
              <ModeToggle />
            </div>
          </div>
        </div>
      </nav>

      {isOpen && isResponsive && (
        <div
          onClick={toggleSidebar}
          className="fixed inset-0 z-40 bg-black bg-opacity-50"
        />
      )}

      <aside
        id="logo-sidebar"
        className={`fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }  bg-zinc-50 dark:bg-zinc-950 sm:translate-x-0 border-r border-zinc-300 dark:border-zinc-800`}
        aria-label="Sidebar"
      >

        <div className="h-full px-3 pb-4 overflow-y-auto bg-zinc-50 dark:bg-zinc-950 dark:text-zinc-50">
          <ul className="space-y-2 font-medium">
            <li className={`group ${location.pathname === '/about-me' ? 'bg-zinc-200 dark:bg-zinc-900 rounded-lg' : ''}`}>
              <Link to="/about-me" className="flex items-center p-2 text-zinc-900 dark:text-zinc-50 rounded-lg hover:bg-zinc-200 dark:hover:bg-zinc-900 cursor-default group">
                <User className="w-5 h-5"/>
                <span className="ml-2 text-sm font-normal">About me</span>
              </Link>
            </li>
            <li className={`group ${location.pathname === '/stacks' ? 'bg-zinc-200 dark:bg-zinc-900 rounded-lg' : ''}`}>
              <Link to="/stacks" className="flex items-center p-2 text-zinc-900 dark:text-zinc-50 rounded-lg hover:bg-zinc-200 dark:hover:bg-zinc-900 cursor-default group">
                <Computer className="w-5 h-5"/>
                <span className="ml-2 text-sm font-normal">Stacks and uses</span>
              </Link>
            </li>
            <li className={`group ${location.pathname === '/projects' ? 'bg-zinc-200 dark:bg-zinc-900 rounded-lg' : ''}`}>
              <Link to="/projects" className="flex items-center p-2 text-zinc-900 dark:text-zinc-50 rounded-lg hover:bg-zinc-200 dark:hover:bg-zinc-900 cursor-default group">
                <FolderDot className="w-5 h-5"/>
                <span className="ml-2 text-sm font-normal">Projects</span>
              </Link>
            </li>
            {/*<li className={`group ${location.pathname === '/experiences' ? 'bg-zinc-200 dark:bg-zinc-900 rounded-lg' : ''}`}>
              <Link to="/experiences" className="flex items-center p-2 text-zinc-900 dark:text-zinc-50 rounded-lg hover:bg-zinc-200 dark:hover:bg-zinc-900 cursor-default group">
                <Briefcase className="w-5 h-5"/>
                <span className="ml-2 text-sm font-normal">Experiences</span>
              </Link>
            </li>*/}
          </ul>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
