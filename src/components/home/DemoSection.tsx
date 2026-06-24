import {useState} from "react";
import {Play} from "lucide-react";

const DemoSection = () => {
	const [playVideo, setPlayVideo] = useState(false);

	return (
		<section className="py-16 lg:py-24">
			<div className="max-w-6xl mx-auto px-5">

				<h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium text-center mb-10">
					See why 27M WordPress sites trust Jetpack
				</h2>

				<div className="relative overflow-hidden rounded-3xl shadow-2xl">

					{
					!playVideo ? (
						<>
							<img src="/images/demo.jpg" alt="Video Preview" className="w-full"/>

							<button onClick={
									() => setPlayVideo(true)
								}
								className="
									                  absolute inset-0
									                  flex items-center justify-center
									                ">
								<div className="bg-white/95 rounded-full p-6 shadow-xl hover:scale-110 transition">
									<Play size={60}
										fill="currentColor"
										className="text-black"/>
								</div>
							</button>
						</>
					) : (
						<iframe src="https://videopress.com/embed/bEKlywPj?autoplay=1" className="w-full aspect-video" allowFullScreen allow="autoplay; clipboard-write" title="Jetpack Video"/>
					)
				} </div>

			</div>
		</section>
	);
};

export default DemoSection;
