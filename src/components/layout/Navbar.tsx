import { useState } from "react";
import { navigation } from "../../data/navigation";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="border-b border-gray-200 bg-white">
      <div className="max-w-7xl mx-auto px-4 lg:px-6">
        <div className="flex items-center justify-between h-20">

          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-green-600 flex items-center justify-center text-white font-bold">
              J
            </div>
            <span className="text-2xl lg:text-3xl font-bold">
              Jetpack
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:block">
            <ul className="flex items-center gap-8 xl:gap-12">
              {navigation.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-lg text-gray-900 hover:text-green-600 transition-colors"
                  >
                    {item.name}
                    {item.hasDropdown && (
                      <span className="ml-2 text-xs">▼</span>
                    )}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Desktop Right Side */}
          <div className="hidden lg:flex items-center gap-6">
            <button className="text-xl">🔍</button>

            <a
              href="/login"
              className="text-lg text-gray-900 hover:text-green-600"
            >
              Log in
            </a>

            <button className="px-6 py-3 border border-gray-900 rounded-md text-lg font-medium hover:bg-gray-100 transition">
              Get started
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-3xl"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? "✕" : "☰"}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden pb-6">
            <ul className="flex flex-col gap-4">
              {navigation.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="block text-lg text-gray-900 hover:text-green-600"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>

            <div className="flex flex-col gap-4 mt-6">
              <a
                href="/login"
                className="text-lg text-gray-900 hover:text-green-600"
              >
                Log in
              </a>

              <button className="w-full py-3 border border-gray-900 rounded-md text-lg font-medium">
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