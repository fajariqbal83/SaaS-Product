import storeLogos from "../../public/logos/logos store.png";

export interface FooterLink {
  id: number;
  label: string;
  url: string;
}

export interface FooterColumn {
  id: number;
  title: string;
  links: FooterLink[];
}

export const footerData = {
  logo: storeLogos,

  columns: [
    {
      id: 1,
      title: "WordPress Plugins",
      links: [
        { id: 1, label: "Akismet Anti-spam", url: "#" },
        { id: 2, label: "Jetpack", url: "#" },
        { id: 3, label: "Jetpack Boost", url: "#" },
        { id: 4, label: "Jetpack CRM", url: "#" },
        { id: 5, label: "Jetpack Protect", url: "#" },
        { id: 6, label: "Jetpack Search", url: "#" },
        { id: 7, label: "Jetpack Social", url: "#" },
        { id: 8, label: "Jetpack VideoPress", url: "#" },
        { id: 9, label: "VaultPress Backup", url: "#" },
        { id: 10, label: "WP Super Cache", url: "#" },
        { id: 11, label: "Download", url: "#" },
      ],
    },
    {
      id: 2,
      title: "Partners",
      links: [
        { id: 1, label: "Recommended Hosts", url: "#" },
        { id: 2, label: "For Hosts", url: "#" },
        { id: 3, label: "For Agencies", url: "#" },
        { id: 4, label: "For Affiliates", url: "#" },
      ],
    },
    {
      id: 3,
      title: "Developers",
      links: [
        { id: 1, label: "Documentation", url: "#" },
        { id: 2, label: "Beta Program", url: "#" },
        { id: 3, label: "Contribute to Jetpack", url: "#" },
        { id: 4, label: "Jetpack on GitHub", url: "#" },
      ],
    },
    {
      id: 4,
      title: "Legal",
      links: [
        { id: 1, label: "Terms of Service", url: "#" },
        { id: 2, label: "Privacy Policy", url: "#" },
        { id: 3, label: "GDPR", url: "#" },
      ],
    },
    {
      id: 5,
      title: "Help",
      links: [
        { id: 1, label: "Knowledge Base", url: "#" },
        { id: 2, label: "Forums", url: "#" },
        { id: 3, label: "Webinars", url: "#" },
        { id: 4, label: "Reviews and Testimonials", url: "#" },
        { id: 5, label: "Security Library", url: "#" },
        { id: 6, label: "Contact Us", url: "#" },
        { id: 7, label: "Press", url: "#" },
      ],
    },
  ],
};