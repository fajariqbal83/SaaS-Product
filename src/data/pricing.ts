export interface PricingFeature {
	id: number;
	text: string;
}

export interface PricingPlan {
	id: number;
	title: string;
	discount: string;
	price: string;
	originalPrice: string;
	buttonText: string;
	description: string;
	features: PricingFeature[];
	recommended?: boolean;
}

export interface PricingSectionData {
	badge: string;
	title: string;
	description: string;
	plans: PricingPlan[];
}

export const pricingData: PricingSectionData = {
	badge: "Pricing",
	title: "Choose the plan that's right for your business",
	description: "Protect your website with real-time backups, security monitoring, and performance tools designed to help your business grow.",

	plans: [
		{
			id: 1,
			title: "VaultPress Backup",
			discount: "50% off",
			price: "IDR53,855.95",
			originalPrice: "IDR108,255.95",
			buttonText: "Get Backup",
			description: "Save every change with real-time backups and get back online quickly with one-click restores.",
			features: [
				{
					id: 1,
					text: "Real-time cloud backups"
				}, {
					id: 2,
					text: "Starts with 10GB backup storage"
				}, {
					id: 3,
					text: "30-day archive & activity log"
				}, {
					id: 4,
					text: "One-click restores"
				},
			]
		}, {
			id: 2,
			title: "Security",
			discount: "50% off",
			price: "IDR108,255.95",
			originalPrice: "IDR217,054.95",
			buttonText: "Get Security",
			description: "Easy-to-use, comprehensive site security tools.",
			recommended: true,
			features: [
				{
					id: 1,
					text: "Starts with 10GB backup storage"
				},
				{
					id: 2,
					text: "Comment & form spam protection"
				},
				{
					id: 3,
					text: "30-day activity log"
				},
				{
					id: 4,
					text: "Real-time cloud backups"
				}, {
					id: 5,
					text: "Unlimited restores"
				}, {
					id: 6,
					text: "Website firewall (WAF)"
				}, {
					id: 7,
					text: "Real-time malware scanning"
				}, {
					id: 8,
					text: "One-click fixes"
				},
			]
		}, {
			id: 3,
			title: "Complete",
			discount: "50% off",
			price: "IDR271,454.95",
			originalPrice: "IDR543,453.95",
			buttonText: "Get Complete",
			description: "The full Jetpack suite with real-time security tools, improved site performance, and tools to grow your business.",
			features: [
				{
					id: 1,
					text: "VaultPress Backup w/ 1TB storage"
				},
				{
					id: 2,
					text: "Scan w/ WAF"
				},
				{
					id: 3,
					text: "Akismet Anti-spam"
				},
				{
					id: 4,
					text: "Stats w/ 100k views/mo"
				}, {
					id: 5,
					text: "VideoPress w/ 1TB storage"
				}, {
					id: 6,
					text: "Boost w/ Auto CSS Generation"
				}, {
					id: 7,
					text: "Social Advanced"
				}, {
					id: 8,
					text: "Site Search"
				}, {
					id: 9,
					text: "AI Assistant"
				}, {
					id: 10,
					text: "Newsletter & monetization tools"
				},
			]
		},
	]
};
