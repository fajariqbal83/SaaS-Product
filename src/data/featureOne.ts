export interface FeatureItem {
	id: number;
	text: string;
	highlight: string;
}

export interface FeatureSectionOneData {
	badge: string;
	title: string;
	description: string;
	buttonText: string;
	image: string;
	contacts: number;
	transactions: number;
	features: FeatureItem[];
}

export const featureOneData: FeatureSectionOneData = {
	badge: "Growth Features",

	title: "Grow your site, without the grind",

	description: "Growing your audience shouldn’t be rocket science. We're here to simplify it.",

	buttonText: "Grow your site",

	image: "/images/growth.jpg",

	contacts: 231,

	transactions: 823,

	features: [
		{
			id: 1,
			text: "Understand your audience without a PhD with",
			highlight: "Jetpack Stats"
		}, {
			id: 2,
			text: "Publish once, share everywhere with",
			highlight: "Jetpack Social"
		}, {
			id: 3,
			text: "Manage your customers without headache with",
			highlight: "Jetpack CRM"
		},
	]
};
