import { useState, useEffect } from "react";
import { navigation } from "../../data/navigation";
import { Link } from "react-router-dom";
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
		<header className={
			`
    fixed top-0 left-0 w-full z-50
    transition-all duration-300
    ${scrolled || isOpen ? "bg-white border-b border-gray-200 shadow-sm" : "bg-transparent border-b border-transparent"
			}
  `
		}>
			<div className="relative z-20 max-w-7xl mx-auto my-2 md:my-4 px-4 xl:px-6">
				<div className="flex items-center justify-between h-14 sm:h-16 md:h-20">

					{/* Logo */}
					<Link to="/">
					<div className="flex items-center gap-2 cursor-pointer">
    <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-green-600 flex items-center justify-center">
        <Zap
            size={14}
            fill="currentColor"
            strokeWidth={1.5}
            className="text-white"
        />
    </div>

    <span className="text-base sm:text-lg lg:text-xl xl:text-2xl font-semibold tracking-tight font-mono whitespace-nowrap">
        Jetpack
    </span>
</div>

					</Link>

					{/* Desktop Navigation */}
					<nav className="hidden lg:block">
						<ul className="flex items-center gap-4 lg:gap-5 xl:gap-8">
							{
								navigation.map((item) => (
									<li key={
										item.name
									}>
										<a href={
											item.href
										}
											className="group inline-flex items-center gap-1 text-sm lg:text-[15px] xl:text-lg text-gray-900 transition-colors whitespace-nowrap">
											<span className="relative">
												{
													item.name
												}

												<span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-current transition-all duration-300 group-hover:w-full"></span>
											</span>

											{
												item.hasDropdown && (
													<ChevronDown size={16}
														strokeWidth={1.85} />
												)
											} </a>
									</li>
								))
							} </ul>
					</nav>

					{/* Desktop Right Side */}
					<div className="hidden lg:flex items-center gap-3 xl:gap-6">
						<button className="p-2 lg:p-3 xl:p-4 rounded-sm transition-colors text-gray-900 hover:text-white hover:bg-black">
							<Search size={15}
								strokeWidth={1.85} />
						</button>

						<Link
							to="/login"
							className="group text-sm lg:text-base xl:text-lg text-gray-900 transition-colors whitespace-nowrap"
						>
							<span className="relative">
								Log in
								<span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-current transition-all duration-300 group-hover:w-full"></span>
							</span>
						</Link>

						<button className="px-3 lg:px-4 py-1.5 border border-gray-900 rounded-sm bg-white text-sm lg:text-base font-medium hover:bg-black hover:text-white transition whitespace-nowrap">
							Get started
						</button>
					</div>

					{/* Mobile Menu Button */}
					<button
    onClick={() => setIsOpen(!isOpen)}
    className={`lg:hidden flex items-center gap-1.5 px-3 py-2 rounded-sm text-sm sm:text-base font-medium transition-all duration-300 ease-out

    ${
        isOpen
            ? "border border-black"
            : "border border-transparent hover:bg-black hover:text-white hover:scale-105"
    }`}
>
    <span
        className={`transition-transform duration-300 ${
            isOpen ? "rotate-90" : "rotate-0"
        }`}
    >
        {isOpen ? <X size={18} /> : <Menu size={18} />}
    </span>

    <span>MENU</span>
</button>
				</div>

				{/* Mobile Menu */}
				{
					isOpen && (
						<div className="lg:hidden pb-4 md:pb-6">
							<ul className="flex flex-col gap-1">
								{
									navigation.map((item) => (
										<li key={
											item.name
										}>
											<a href={
												item.href
											}
												className="group flex items-center gap-1 text-lg sm:text-xl ml-2 sm:ml-4 text-gray-900 py-1">
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
															className="transition-transform duration-300 group-hover:translate-x-1" />
													)
												} </a>
										</li>
									))
								}

								{/* Search */}
								<li>
									<button className="group flex items-center gap-2 text-lg sm:text-xl py-1 px-3 rounded-sm transition-colors text-gray-900 hover:text-white hover:bg-black">
										<Search size={16} />

										<span>Search</span>
									</button>
								</li>
							</ul>

							<div className="flex flex-col gap-2 ml-2 sm:ml-4 mt-2">
								<Link
									to="/login"
									className="group text-lg sm:text-xl text-gray-900 py-1"
								>
									<span className="relative">
										Log in
										<span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-current transition-all duration-300 group-hover:w-full"></span>
									</span>
								</Link>

								<button className="px-4 py-2 w-36 text-base border border-gray-900 rounded-sm bg-white font-medium hover:bg-black hover:text-white transition">
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
