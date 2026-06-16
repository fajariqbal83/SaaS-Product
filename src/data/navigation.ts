type NavigationItem = {
  name: string;
  href: string;
  hasDropdown?: boolean;
};

export const navigation: NavigationItem[] = [
  {
    name: "Products",
    href: "/products",
    hasDropdown: true,
  },
  {
    name: "Pricing",
    href: "/pricing",
  },
  {
    name: "Partners",
    href: "/partners",
  },
  {
    name: "Support",
    href: "/support",
  },
  {
    name: "Resources",
    href: "/resources",
  },
  {
    name: "GDPR",
    href: "/gdpr",
  },
];

