export interface InfoButton {
  id: number;
  text: string;
  link: string;
}

export interface InfoSectionData {
  topHeading: string;
  buttons: InfoButton[];
  bottomHeading: string;
  description: string;
  ctaButton: string;
}

export const infoSectionData: InfoSectionData = {
  topHeading: "Need more info?",

  buttons: [
    {
      id: 1,
      text: "Compare all product bundles",
      link: "#",
    },
    {
      id: 2,
      text: "Jetpack for Agencies",
      link: "#",
    },
  ],

  bottomHeading: "Still not sure?",

  description:
    "Start with the free version and try out our premium products later.",

  ctaButton: "Start with Jetpack Free",
};