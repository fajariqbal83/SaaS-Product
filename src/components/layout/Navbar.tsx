import {useState, useEffect} from "react";
import {navigation} from "../../data/navigation";
import {
	Search,
	ChevronDown,
	X,
	Menu,
	Zap,
	ChevronRight
} from "lucide-react";

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [scrolled, setScrolled] = useState(false);

	useEffect(() => {
  const handleScroll = () => {
    if (window.scrollY > 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  window.addEventListener("scroll", handleScroll);

  return () => {
    window.removeEventListener("scroll", handleScroll);
  };
}, []);


	return (
		<header className={`
    fixed top-0 left-0 w-full z-50
    transition-all duration-300
    ${
      scrolled
        ? "bg-white border-b border-gray-200 shadow-sm"
        : "bg-transparent border-b border-transparent"
    }
  `}>
			<div className="relative z-20 max-w-7xl mx-auto my-5 px-4 xl:px-6">
				<div className="flex items-center justify-between h-20">

					{/* Logo */}
					<div className="flex items-center gap-3 cursor-pointer">
						<div className="w-9 h-9 rounded-full bg-green-600 flex items-center justify-center">
							<Zap size={18}
								fill="currentColor"
								strokeWidth={1.5}
								className="text-white"/>
						</div>
						<span className="text-xl xl:text-2xl font-semibold tracking-tight font-mono">
							Jetpack
						</span>
					</div>

					{/* Desktop Navigation */}
					<nav className="hidden xl:block">
						<ul className="flex items-center gap-8 xl:gap-12">
							{
							navigation.map((item) => (
								<li key={
									item.name
								}>
									<a href={
											item.href
										}
										className="group inline-flex items-center gap-1 text-lg text-gray-900 transition-colors">
										<span className="relative">
											{
											item.name
										}

											<span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-current transition-all duration-300 group-hover:w-full"></span>
										</span>

										{
										item.hasDropdown && (
											<ChevronDown size={16}
												strokeWidth={1.85}/>
										)
									} </a>
								</li>
							))
						} </ul>
					</nav>

					{/* Desktop Right Side */}
					<div className="hidden xl:flex items-center gap-6">
						<button className="p-4 rounded-sm transition-colors text-gray-900 hover:text-white hover:bg-black">
							<Search size={15}
								strokeWidth={1.85}/>
						</button>

						<a href="/login" className="group text-lg text-gray-900 transition-colors">
							<span className="relative">
								Log in
								<span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-current transition-all duration-300 group-hover:w-full"></span>
							</span>
						</a>

						<button className="px-4.5 py-1.5 border border-gray-900 rounded-sm bg-white text-md font-medium hover:bg-black hover:text-white transition">
							Get started
						</button>
					</div>

					{/* Mobile Menu Button */}
					<button onClick={
							() => setIsOpen(!isOpen)
						}
						className={
							`xl:hidden flex items-center gap-2 px-4 py-2 rounded-sm text-lg font-medium transition-all duration-300 ease-out

    ${
								isOpen ? "border border-black" : "border border-transparent hover:bg-black hover:text-white hover:scale-105"
							}`
					}>
						<span className={
							`transition-transform duration-300 ${
								isOpen ? "rotate-90" : "rotate-0"
							}`
						}>
							{
							isOpen ? <X size={20}/> : <Menu size={20}/>
						} </span>

						<span>MENU</span>
					</button>
				</div>

				{/* Mobile Menu */}
				{
				isOpen && (
					<div className="xl:hidden pb-6">
						<ul className="flex flex-col gap-2">
							{
							navigation.map((item) => (
								<li key={
									item.name
								}>
									<a href={
											item.href
										}
										className="group flex items-center gap-1 text-xl ml-4.5 text-gray-900 py-2">
										<span className="relative">
											{
											item.name
										}

											<span className=" absolute left-0 -bottom-1 h-0.5 w-0 bg-current transition-all duration-300 group-hover:w-full
																																												                  "/>
										</span>

										{
										item.name === "Products" && (
											<ChevronRight size={18}
												className="transition-transform duration-300 group-hover:translate-x-1"/>
										)
									} </a>
								</li>
							))
						}

							{/* Search */}
							<li>
								<button className="group flex items-center gap-3 text-xl py-2 p-4 rounded-sm transition-colors text-gray-900 hover:text-white hover:bg-black">
									<Search size={18}/>

									<span>Search</span>
								</button>
							</li>
						</ul>

						<div className="flex flex-col gap-4 ml-4.5 mt-2">
							<a href="/login" className="group text-xl text-gray-900 py-2">
								<span className="relative">
									Log in

									<span className="
																																				                absolute left-0 -bottom-1 h-0.5 w-0 bg-current transition-all duration-300 group-hover:w-full
																																				              "/>
								</span>
							</a>

							<button className="px-5 py-2 w-34 border border-gray-900 rounded-sm bg-white text-lg font-medium hover:bg-black hover:text-white transition">
								Get started
							</button>
						</div>
					</div>
				)
			} </div>
		</header>
	);
};

export default Navbar;
