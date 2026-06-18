import type { ReactNode } from "react";
import {
  ChartColumn,
  ChevronRight,
  Cloud,
  ShieldAlert,
} from "lucide-react";

export type HeroImage = {
  src: string;
  alt: string;
};

export type HeroCard = {
  title: string;
  icon: ReactNode;
};


export type HeroSectionData = {
  heroTitleLines: string[];
  heroSubtitle: string;
  ctaLabel: string;
  heroImage: HeroImage;
  cards: {
    analytics: HeroCard;
    boost: HeroCard & { value: string };
    akismet: HeroCard & { value: string, subtitle: string };
    backup: HeroCard;
  };
};

export const heroData: HeroSectionData = {
  heroTitleLines: ["Let's elevate", "your site"],
  heroSubtitle: "Boost your site growth, speed and security.\nNo hassle, we got you!",
  ctaLabel: "Get started",
  heroImage: {
    src: "/images/hero.jpg",
    alt: "hero",
  },
  cards: {
    analytics: {
      title: "Analytics",
      icon: <ChartColumn size={20} />,
    },
    boost: {
      title: "Boost",
      icon: <ChevronRight size={20} />,
      value: "94",
    },
    akismet: {
      title: "Akismet Anti-spam",
      icon: <ShieldAlert size={14} />,
      value: "192,521",
      subtitle: "spam comments blocked",
    },

    backup: {
      title: "Backup",
      icon: <Cloud size={20} />,
    },
  },
};

