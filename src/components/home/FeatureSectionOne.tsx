import {Check, TrendingUp, ShoppingBag} from "lucide-react";

import {featureOneData} from "../../data/featureOne";

const FeatureSectionOne = () => {
	return (
		<section className="relative overflow-hidden py-8 lg:py-10">
			<div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-10">

				<div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">

					{/* LEFT SIDE */}
					<div className="relative flex justify-center lg:justify-start mr-5">

						<div className="relative w-full max-w-130 min-h-80 sm:min-h-0">

							{/* Main Image */}
							<div className=" hidden sm:block bg-white shadow-xl rounded-3xl overflow-hidden w-full">
								<div className="relative w-full max-w-175">

									<div className="bg-white shadow-xl rounded-3xl overflow-hidden h-105 sm:h-150 md:h-140 lg:h-155">
										<div className="flex h-full">


											<div className="w-[78%]">
												<img src={
														featureOneData.image
													}
													alt="Growth"
													className="w-full h-full object-cover"/>
											</div>


											<div className="w-[22%] bg-white"/>

										</div>
									</div>
								</div>
							</div>

							{/* Top Icon Card */}
							<div className="hidden sm:block absolute top-6 right-4  bg-white rounded-xl shadow-lg p-4 z-20">
								<ShoppingBag size={24}
									className="text-green-600"/>
							</div>

							{/* Analytics Card */}
							<div className="flex sm:block items-center justify-center mt-8 sm:mt-0 sm:absolute top-24 sm:top-28 md:top-32 left-0 sm:left-[80%] sm:-translate-x-1/2  bg-white rounded-2xl shadow-xl  p-4 sm:p-6 md:p-8  w-full sm:w-70 md:w-85  z-10">
								<div className="grid grid-cols-2 gap-4 md:gap-6">

									<div>
										<h3 className="text-2xl sm:text-3xl md:text-4xl font-semibold">
											{
											featureOneData.contacts
										} </h3>

										<p className="text-gray-500 text-sm sm:text-base mt-1">
											Contacts
										</p>

										<h3 className="text-2xl sm:text-3xl md:text-4xl font-semibold mt-6 md:mt-10">
											{
											featureOneData.transactions
										} </h3>

										<p className="text-gray-500 text-sm sm:text-base mt-1">
											Transactions
										</p>
									</div>

									<div className="flex items-end gap-2 justify-center">

										<div className="w-4 sm:w-5 md:w-6 h-10 rounded bg-slate-200"/>
										<div className="w-4 sm:w-5 md:w-6 h-7 rounded bg-slate-200"/>
										<div className="w-4 sm:w-5 md:w-6 h-12 rounded bg-slate-200"/>
										<div className="w-4 sm:w-5 md:w-6 h-16 rounded bg-slate-200"/>
										<div className="w-4 sm:w-5 md:w-6 h-20 rounded bg-slate-200"/>
										<div className="w-4 sm:w-5 md:w-6 h-24 rounded bg-[#9CD36D]"/>

									</div>

								</div>
							</div>

						</div>

					</div>

					{/* RIGHT SIDE */}
					<div>

						<div className="flex items-center gap-3 text-green-700 mb-4">
							<TrendingUp size={18}/>

							<span className="text-base md:text-lg font-medium">
								{
								featureOneData.badge
							} </span>
						</div>

						<h2 className="text-4xl sm:text-5xl lg:text-6xl font-medium leading-tight lg:leading-18 tracking-tight text-black">
							{
							featureOneData.title
						} </h2>

						<p className="mt-5 text-base md:text-lg lg:text-xl text-gray-700 leading-7 md:leading-8 max-w-xl">
							{
							featureOneData.description
						} </p>

						<div className="mt-8 md:mt-10 space-y-5 md:space-y-6">

							{
							featureOneData.features.map((feature) => (
								<div key={
										feature.id
									}
									className="flex gap-4">
									<Check size={24}
										className="text-green-600 shrink-0 mt-1"/>

									<p className="text-base md:text-lg lg:text-xl text-gray-800 leading-7 md:leading-8">
										{
										feature.text
									}
										{" "}
										<span className="text-green-600">
											{
											feature.highlight
										} </span>
									</p>
								</div>
							))
						} </div>

						<button className=" mt-10 md:mt-12 bg-green-700 hover:bg-green-800 transition-all text-white w-full sm:w-auto px-8 py-4 rounded-md text-base md:text-lg font-medium">
							{
							featureOneData.buttonText
						} </button>

					</div>

				</div>

			</div>
		</section>
	);
};

export default FeatureSectionOne;
