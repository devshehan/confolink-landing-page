import { navItems } from "../constants";

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80">
      <div className="container px-4 mx-auto relative text-sm">
        <div className="flex justify-between items-center">
          {/* Left Part */}
          <div className="flex items-center flex-shrink-0">
            <span className="text-xl tracking-tighter">ConfoLink</span>
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
          <div className="lg-flex justify-center space-x-12 items-center">
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
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
