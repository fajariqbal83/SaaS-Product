import vIcon from "../../public/Icons/v-and-dot.png";
import aIcon from "../../public/Icons/font.png";
import shield from "../../public/Icons/shield.png"
import search from "../../public/Icons/magnifying-glass.png"
import megaphone from "../../public/Icons/megaphone.png"
import expert from "../../public/Icons/expert.png"
import people from "../../public/Icons/people.png"
import arrow from "../../public/Icons/double right.png"
import chart from "../../public/Icons/chart.png"
import mail from "../../public/Icons/mail.png"


export interface BundleFeature {
	id: number;
	text: string;
}

export interface BundleCard {
	id: number;
	title: string;
	price: string;
	oldPrice: string;
	off: string;
	save: string;
	description: string;
	features: BundleFeature[];
	link: string;
	icons: string[];
}

export const pricingBundles = {
	heading: "Security, performance, and marketing tools by the WordPress experts",

	cards: [
		{
			id: 1,
			title: "Security",
			price: "US$9.95",
			oldPrice: "US$19.95",
			off: "per month, billed yearly. 50% off the first year.",
			save: "Save US$19.90/mo vs buying individually",

			description: "Comprehensive site security made simple.",

			features: [
				{
					id: 1,
					text: "VaultPress Backup (10GB)"
				}, {
					id: 2,
					text: "Scan"
				}, {
					id: 3,
					text: "Akismet Anti-spam (10k API calls/mo)"
				},
			],

			link: "More about Security",

			icons: [vIcon, aIcon, shield]
		}, {
			id: 2,
			title: "Growth",
			price: "US$9.95",
			oldPrice: "US$19.95",
            off: "per month, billed yearly. 50% off the first year.",
			save: "Save US$8.33/mo vs buying individually",

			description: "Grow your audience effortlessly.",

			features: [
				{
					id: 1,
					text: "Stats (10k site views - upgradeable)"
				}, {
					id: 2,
					text: "Social"
				}, {
					id: 3,
					text: "Newsletter and monetization tools"
				},
			],

			link: "More about Growth",

			icons: [chart, megaphone, mail]
		}, {
			id: 3,
			title: "Complete",
			price: "US$24.95",
			oldPrice: "US$49.95",
            off: "per month, billed yearly. 50% off the first year.",
			save: "Save US$108.37/mo vs buying individually",

			description: "Get the full Jetpack suite with real-time security tools, improved site performance, and tools to grow your business.",

			features: [],

			link: "More about Complete",

			icons: [
				vIcon,
				aIcon,
				shield,
				search,
				megaphone,
				expert,
				people,
				arrow
			]
		},
	]
};
