export interface FeatureItem {
  id: number;
  text: string;
  highlight: string;
}

export interface FeatureThreeData {
  badge: string;
  title: string;
  description: string;
  image: string;
  buttonText: string;
  features: FeatureItem[];
}


export const featureThreeData: FeatureThreeData = {
  badge: "Jetpack Security",
  title: "Secure your site without hassle",
  description: "You don't need to worry about your WordPress site's security because we got that covered.",
  image: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=600&q=80", // Apni image asset ka path laga lein
  buttonText: "Secure your site",
  features: [
    {
      id: 1,
      text: "If you make mistakes, we got your back (up) with",
      highlight: "VaultPress Backup"
    },
    {
      id: 2,
      text: "Life is too short to moderate spam, solve it with",
      highlight: "Akismet Anti-spam"
    },
    {
      id: 3,
      text: "Stop worrying about security threats and fix problems with a single click – you can, with",
      highlight: "Jetpack Scan"
    }
  ]
};