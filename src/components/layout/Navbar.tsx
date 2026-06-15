import { useState } from "react";
import { navigation } from "../../data/navigation";
import { Search, ChevronDown, X, Menu, Zap } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="border-b border-gray-200 bg-white">
      <div className="max-w-7xl mx-auto px-4 xl:px-6">
        <div className="flex items-center justify-between h-20">

          {/* Logo */}
          <div className="flex items-center gap-3 cursor-pointer">
            <div className="w-10 h-10 rounded-full bg-green-600 flex items-center justify-center">
              <Zap
                size={20}
                fill="currentColor"
                strokeWidth={1.5}
                className="text-white"
              />
            </div>
            <span className="text-2xl xl:text-3xl font-semibold tracking-tight font-mono">
              Jetpack
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden xl:block">
            <ul className="flex items-center gap-8 xl:gap-12">
              {navigation.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="group inline-flex items-center gap-1 text-xl text-gray-900 transition-colors"
                  >
                    <span className="relative">
                      {item.name}

                      <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-current transition-all duration-300 group-hover:w-full"></span>
                    </span>

                    {item.hasDropdown && (
                      <ChevronDown size={16} strokeWidth={1.85} />
                    )}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Desktop Right Side */}
          <div className="hidden xl:flex items-center gap-6">
            <button className="text-xl"><Search size={16} strokeWidth={1.85} /></button>

            <a
              href="/login"
              className="group text-xl text-gray-900 hover:text-green-600 transition-colors"
            >
              <span className="relative">
                Log in

                <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-current transition-all duration-300 group-hover:w-full"></span>
              </span>
            </a>

            <button className="px-5 py-2 border border-gray-900 rounded-sm bg-white text-lg font-medium hover:bg-gray-100 transition">
              Get started
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="xl:hidden text-3xl"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="xl:hidden pb-6">
            <ul className="flex flex-col gap-4">
              {navigation.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="block text-xl text-gray-900 hover:text-green-600"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>

            <div className="flex flex-col gap-4 mt-6">
              <a
                href="/login"
                className="text-xl text-gray-900 hover:text-green-600"
              >
                Log in
              </a>

              <button className="w-full py-3 border border-gray-900 rounded-md text-xl font-medium">
                Get started
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;