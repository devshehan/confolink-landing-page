import { useState } from "react";
import { navItems } from "../constants";

// Import Icons
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMobileDrawerOpen, setIsMobileDrawerOpen] = useState(false);

  const toggleNavBar = () => {
    setIsMobileDrawerOpen(!isMobileDrawerOpen);
  };

  return (
    <nav className="sticky top-0 z-500 py-3 backdrop-blur-lg border-b border-neutral-700/80">
      <div className="container px-4 mx-auto relative text-sm">
        <div className="flex justify-between items-center">
          {/* Left Part */}
          <div className="flex items-center flex-shrink-0">
            <a href="hero">
              <span className="text-xl tracking-tighter">ConfoLink</span>
            </a>
          </div>

          {/* Middle Part */}
          <ul className="hidden lg:flex ml-14 space-x-12">
            {navItems.map((item, index) => (
              <li key={index}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>

          {/* Right side */}
          <div className="hidden lg:flex justify-center space-x-12 items-center">
            {/* <a href="#" className="py-2 px-3 border rounded-md">
              Sign up
            </a> */}
            <a
              href="#"
              className="bg-gradient-to-r from-blue-500 to-blue-800 py-2 px-3 rounded-md"
            >
              Contact Team
            </a>
          </div>
          <div className="lg:hidden md:flex flex-col justify-end">
            <button onClick={toggleNavBar}>
              {isMobileDrawerOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
        {isMobileDrawerOpen && (
          <div className="fixed right-0 z-20 bg-neutral-900 w-full p-12 flex flex-col justify-center items-center lg:hidden">
            <ul>
              {navItems.map((item, index) => (
                <li key={index} className="py-4">
                  <a href={item.href}>{item.label}</a>
                </li>
              ))}
            </ul>
            <div className="flex space-x-6 pt-4">
              <a
                href="#"
                className="bg-gradient-to-r from-blue-500 to-blue-800 py-2 px-3 rounded-md"
              >
                Contact Team
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
