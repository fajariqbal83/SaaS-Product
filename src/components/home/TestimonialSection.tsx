import {useState} from "react";
import {ChevronLeft, ChevronRight, Quote} from "lucide-react";
import {testimonials} from "../../data/testimonials";

const TestimonialSection = () => {
	const [current, setCurrent] = useState(0);

	const nextSlide = () => {
		setCurrent((prev) => (prev + 1) % testimonials.length);
	};

	const prevSlide = () => {
		setCurrent((prev) => prev === 0 ? testimonials.length - 1 : prev - 1);
	};

	return (
		<section className="py-12 lg:py-20">
			<div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-10">

				<div className="relative bg-[#efefea] rounded-sm overflow-hidden">

					{/* Left Arrow */}
					<button onClick={prevSlide}
						className="
							              absolute left-4 lg:left-8 top-1/2 -translate-y-1/2 z-20
							              w-12 h-12 flex items-center justify-center
							              text-gray-500 hover:text-black
							              transition-all duration-300 hover:-translate-x-1
							            ">
						<ChevronLeft size={34}
							strokeWidth={1.5}/>
					</button>

					{/* Right Arrow */}
					<button onClick={nextSlide}
						className="
							              absolute right-4 lg:right-8 top-1/2 -translate-y-1/2 z-20
							              w-12 h-12 flex items-center justify-center
							              text-gray-500 hover:text-black
							              transition-all duration-300 hover:translate-x-1
							            ">
						<ChevronRight size={34}
							strokeWidth={1.5}/>
					</button>

					<div className="grid lg:grid-cols-2 items-center min-h-137.5">

						{/* Image */}
						<div className="flex justify-center lg:justify-end self-end">
							<img src={
									testimonials[current].image
								}
								alt={
									testimonials[current].name
								}
								className="
									                  w-full
									                  max-w-130
									                  object-contain
									                  transition-all duration-700 ease-in-out
									                "/>
						</div>

						{/* Content */}
						<div key={
								testimonials[current].id
							}
							className="px-8 py-10 sm:px-12 lg:px-16 animate-[fadeIn_0.5s_ease]">


							<Quote size={44}
								className="text-black mb-6 fill-black"/>

							<p className="
									                text-md
									                md:text-lg
									                lg:text-[1.5rem]
									                leading-relaxed
									                text-gray-900
									                max-w-xl
									              ">
								{
								testimonials[current].quote
							} </p>

							<h3 className="
									                mt-10
									                text-3xl
									                md:text-4xl
									                font-medium
									                tracking-tight
									                text-black
									              ">
								{
								testimonials[current].name
							} </h3>

							<p className="
									                mt-3
									                text-md
									                md:text-lg
									                text-green-700
									              ">
								{
								testimonials[current].role
							} </p>

						</div>
					</div>

				</div>
			</div>
		</section>
	);
};

export default TestimonialSection;
