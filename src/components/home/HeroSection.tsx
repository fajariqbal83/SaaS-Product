import { useMemo } from "react";
import { heroData } from "../../data/hero";

const HeroSection = () => {
	const randomImage = useMemo(() => {
		return heroData.heroImage.images[
			Math.floor(Math.random() * heroData.heroImage.images.length)
		];
	}, []);

	return (
		<section className="relative overflow-hidden bg-transparent min-h-[90vh] pt-20 mb-20">

			<div className="relative z-10 max-w-7xl mx-auto px-20 my-25">

				<div className="grid lg:grid-cols-2 items-start min-h-[90vh] gap-16">

					{/* LEFT SIDE */}
					<div>

						<h1 className="text-[46px] sm:text-[76px] lg:text-[86px] font-medium leading-[0.95] tracking-[-3px] text-black">
							{
								heroData.heroTitleLines[0]
							}
							<br /> {
								heroData.heroTitleLines[1]
							} </h1>

						<p className="mt-8 text-md md:text-xl text-gray-700 max-w-lg leading-relaxed">
							{
								heroData.heroSubtitle.split("\n").map((line, idx) => (
									<span key={idx}>
										{line}
										{
											idx === 0 ? <br /> : null
										} </span>
								))
							} </p>

						<button className="mt-5 bg-green-600 hover:bg-green-700 transition-all text-white px-8 py-4 rounded-md text-xl font-normal">
							{
								heroData.ctaLabel
							} </button>

					</div>

					{/* RIGHT SIDE */}
					<div className="relative flex justify-center">

						{/* Phone Mockup */}
						<div className="relative w-66 md:w-76 ">

							<div className="rounded-[34px] border-10 border-white shadow-2xl overflow-hidden">
								<img
									src={randomImage}
									alt={heroData.heroImage.alt}
									className="w-full h-142 object-cover"
								/>
							</div>

							{/* Analytics Card */}
							<div className="absolute -left-32 top-36 bg-white/90 backdrop-blur-lg w-47.5 h-39.5 rounded-md shadow-[0_10px_30px_rgba(0,0,0,0.08)] p-3.5">

								<div className="flex items-center justify-between mb-6">
									<span className="text-[15px] text-gray-600 font-normal">
										Analytics
									</span>

									<span className="text-gray-400">
										{heroData.cards.analytics.icon}
									</span>
								</div>

								<svg viewBox="0 0 200 80" className="w-full h-20">
									<path
										d="M0 65 C20 70 40 10 60 35 C80 60 100 15 120 40 C140 70 170 20 200 5"
										fill="none"
										stroke="#08a61a"
										strokeWidth="4"
										strokeLinecap="round"
									/>
								</svg>

							</div>

							{/* Boost Card */}
							<div className="absolute -right-25 top-16 bg-white/90 backdrop-blur-lg w-40.5 h-37 rounded-md shadow-[0_10px_30px_rgba(0,0,0,0.08)] p-3 flex flex-col">

								<div className="flex items-center justify-between">
									<span className="text-[15px] text-gray-600">
										Boost
									</span>

									<span className="text-gray-400">
										{heroData.cards.boost.icon}
									</span>
								</div>

								<div className="flex-1 flex items-center justify-center">

									<div className="relative w-22 h-22">

										<svg
											className="w-full h-full -rotate-90"
											viewBox="0 0 100 100"
										>
											<circle
												cx="50"
												cy="50"
												r="42"
												stroke="#e5e7eb"
												strokeWidth="4"
												fill="none"
											/>

											<circle
												cx="50"
												cy="50"
												r="42"
												stroke="#08a61a"
												strokeWidth="4"
												fill="none"
												strokeLinecap="round"
												strokeDasharray="263.89"
												strokeDashoffset="15.83"
											/>
										</svg>

										<div className="absolute inset-0 flex items-center justify-center">
											<span className="text-[22px] font-medium text-gray-600">
												94
											</span>
										</div>

									</div>

								</div>

							</div>
							{/* Akismet Anti-spam Card */}
							<div className="absolute -left-26 bottom-22 bg-white/90 backdrop-blur-lg w-49.5 h-37 rounded-md shadow-[0_10px_30px_rgba(0,0,0,0.08)] p-3.5">

								<div className="flex justify-between">

									<span className="text-[14px] text-gray-600 leading-4">
										Akismet Anti-
										<br />
										spam
									</span>

									<span className="text-gray-400">
										{heroData.cards.akismet.icon}
									</span>

								</div>

								<div className="mt-2">

									<h3 className="text-[24px] font-medium text-center text-[#08a61a]">
										192,521
									</h3>

									<p className="text-sm text-gray-500 text-center leading-5">
										spam comments
										<br />
										blocked
									</p>

								</div>

							</div>

							{/* Backup Card */}
							<div className="absolute -right-18 bottom-35 bg-white/90 backdrop-blur-lg w-42.5 h-38.5 rounded-md shadow-[0_10px_30px_rgba(0,0,0,0.08)] p-3.5 flex flex-col">

								<div className="flex justify-between">
									<span className="text-[15px] text-gray-600">
										Backup
									</span>

									<span className="text-gray-400">
										{heroData.cards.backup.icon}
									</span>
								</div>

								<div className="flex-1 flex items-center justify-center">
									<svg
										width="64"
										height="64"
										viewBox="0 0 64 64"
										fill="none"
									>
										<path
											d="M47.5 27.5C46.5 20 40.5 14 33 14C26.5 14 21 18 19 24C12 24.5 7 30 7 37C7 44.5 13 50 20.5 50H46C53 50 58 45 58 38C58 31.5 53.5 27.5 47.5 27.5Z"
											fill="#08a61a"
										/>

										<path
											d="M24 34L30 40L41 29"
											stroke="white"
											strokeWidth="4"
											strokeLinecap="round"
											strokeLinejoin="round"
										/>
									</svg>
								</div>

							</div>

						</div>

					</div>

				</div>

			</div>
		</section>
	);
};

export default HeroSection;
