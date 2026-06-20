export interface FeatureItem {
	id: number;
	text: string;
	highlight: string;
}

export interface FeatureTwo {
	badge: string;
	title: string;
	description: string;
	buttonText: string;
	image: string;
	mobileScore: number;
	desktopScore: number;
	overallGrade: string;
	features: FeatureItem[];
}

export const featureTwoData: FeatureTwo = {
	badge: "Performance Features",

	title: "Speed and SEO\nwith one click",

	description:
		"Make your WordPress site faster and user-friendly to stop testing your visitors’ patience.",

	buttonText: "Accelerate your site",

	image: "/images/performance.jpg",

	overallGrade: "B",

	mobileScore: 74,

	desktopScore: 94,

	features: [
		{
			id: 1,
			text: "Boost your speed and SEO in minutes with",
			highlight: "Jetpack Boost",
		},
		{
			id: 2,
			text: "Your videos, without their ads with",
			highlight: "VideoPress",
		},
		{
			id: 3,
			text: "Lost visitors? Found solution. Help them find what they are looking for with",
			highlight: "Jetpack Search",
		},
	],
};