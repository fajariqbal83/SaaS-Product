export interface DeviceShowcaseData {
	image: string;
	title: string;
	description: string;
	logo: string;
}

import devicesImage from "../../public/logos/devices-showcase.png";
import storeLogos from "../../public/logos/logos store.png";


export const deviceShowcaseData: DeviceShowcaseData = {
	image: devicesImage,

	title: "Put your site in your pocket",

	description: "Get notifications, watch your stats, restore your site, and more with the Jetpack mobile app.",

	logo: storeLogos

};
