import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Projects", path: "/projects" },
  { label: "Gallery", path: "/gallery" },
  { label: "Contact", path: "/contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  return (
<header className="fixed top-0 left-0 right-0 z-50 bg-[#131313]/95 backdrop-blur-md">
      <div className="mx-auto flex h-[70px] w-full max-w-[1190px] items-center justify-between px-4 sm:px-6 md:h-[80px] lg:h-[100px] xl:px-0">

        <Link to="/" className="font-dmSans text-lg font-bold text-[#D5FF3F] md:hidden" >
          Rahul
        </Link>

        <ul className="hidden md:flex items-center justify-center gap-10 lg:gap-16 xl:gap-[89px] w-full">
          {navLinks.map((link) => (
            <li key={link.path}>
              <Link to={link.path} 
              className={`font-dmSans text-[15px] font-bold leading-[100%] capitalize transition-colors duration-300 ${location.pathname === link.path
                    ? "text-[#D5FF3F]"
                    : "text-white hover:text-[#D5FF3F]"
                }`}> {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <button onClick={() => setMenuOpen(!menuOpen)} className="flex flex-col gap-1.5 md:hidden" >
          <span className={`h-0.5 w-6 bg-white transition-all duration-300 ${menuOpen ? "translate-y-2 rotate-45" : ""}`}/>
          <span className={`h-0.5 w-6 bg-white transition-all duration-300 ${menuOpen ? "opacity-0" : "" }`} />
          <span className={`h-0.5 w-6 bg-white transition-all duration-300 ${ menuOpen ? "-translate-y-2 -rotate-45" : "" }`} />
        </button>
      </div>

      <div className={`overflow-hidden transition-all duration-300 md:hidden ${ menuOpen ? "max-h-80" : "max-h-0" }`} >
        <ul className="space-y-6 border-t border-white/10 bg-[#131313] px-6 py-6">
          {navLinks.map((link) => (
            <li key={link.path}>
              <Link to={link.path} onClick={() => setMenuOpen(false)} 
                className={`block font-dmSans text-[15px] font-bold capitalize transition-colors duration-300 ${ location.pathname === link.path
                    ? "text-[#D5FF3F]"
                    : "text-white hover:text-[#D5FF3F]" }`}>
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}