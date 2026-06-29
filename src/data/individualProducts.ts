import aiIcon from "../../public/Icons/ai.png";
import boostIcon from "../../public/Icons/double right.png"
import socialIcon from "../../public/Icons/megaphone.png"
import videoPressIcon from "../../public/Icons/v-and-dot.png";
import searchIcon from "../../public/Icons/magnifying-glass.png";
import backupIcon from "../../public/Icons/v-and-dot.png";
import scanIcon from "../../public/Icons/shield.png";
import akismetIcon from "../../public/Icons/font.png";
import crmIcon from "../../public/Icons/people.png";
import statsIcon from "../../public/Icons/chart.png";

export interface IndividualProduct {
  id: number;
  title: string;
  icon: string;
  price: string;
  oldPrice: string;
  billing: string;
  description: string;
  link: string;
}

export const individualProducts = {
  heading: "Individual products",

  items: [
    {
      id: 1,
      title: "AI",
      icon: aiIcon,
      price: "US$4.95",
      oldPrice: "US$9.95",
      billing: "per month, billed yearly. 50% off the first year.",
      description:
        "Experience the ease of crafting content with intuitive and powerful AI.",
      link: "More about AI",
    },
    {
      id: 2,
      title: "VaultPress Backup",
      icon: backupIcon,
      price: "US$4.95",
      oldPrice: "US$9.95",
      billing: "per month, billed yearly. 50% off the first year.",
      description:
        "Real-time cloud backups with one-click restores. Starts with 10GB.",
      link: "More about VaultPress Backup",
    },
    {
      id: 3,
      title: "Boost",
      icon: boostIcon,
      price: "US$9.95",
      oldPrice: "US$19.95",
      billing: "per month, billed yearly. 50% off the first year.",
      description:
        "Speed up your site and improve SEO - no developer required.",
      link: "More about Boost",
    },
    {
      id: 4,
      title: "Scan",
      icon: scanIcon,
      price: "US$4.95",
      oldPrice: "US$9.95",
      billing: "per month, billed yearly. 50% off the first year.",
      description:
        "24/7 protection: WAF and automatic malware scanning.",
      link: "More about Scan",
    },
    {
      id: 5,
      title: "Social",
      icon: socialIcon,
      price: "US$4.95",
      oldPrice: "US$9.95",
      billing: "per month, billed yearly. 50% off the first year.",
      description:
        "Write once, post everywhere.",
      link: "More about Social",
    },
    {
      id: 6,
      title: "Akismet Anti-spam",
      icon: akismetIcon,
      price: "US$4.95",
      oldPrice: "US$9.95",
      billing: "per month, billed yearly. 50% off the first year.",
      description:
        "Automatically clear spam from your comments and forms.",
      link: "More about Akismet Anti-spam",
    },
    {
      id: 7,
      title: "VideoPress",
      icon: videoPressIcon,
      price: "US$4.95",
      oldPrice: "US$9.95",
      billing: "per month, billed yearly. 50% off the first year.",
      description:
        "High-quality, ad-free video built specifically for WordPress.",
      link: "More about VideoPress",
    },
    {
      id: 8,
      title: "CRM Entrepreneur",
      icon: crmIcon,
      price: "US$17",
      oldPrice: "",
      billing: "per month, billed yearly",
      description:
        "Build better relationships with your customers and grow your business.",
      link: "More about CRM",
    },
    {
      id: 9,
      title: "Search",
      icon: searchIcon,
      price: "US$8.33",
      oldPrice: "",
      billing: "per month, billed yearly",
      description:
        "Help your site visitors find answers instantly.",
      link: "More about Search",
    },
    {
      id: 10,
      title: "Stats",
      icon: statsIcon,
      price: "US$8.33",
      oldPrice: "",
      billing: "per month, billed yearly",
      description:
        "The most advanced stats Jetpack has to offer.",
      link: "More about Stats",
    },
  ],
};