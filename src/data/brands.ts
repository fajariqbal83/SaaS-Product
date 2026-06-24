import wordpressLogo from "../../public/logos/wordpress.png";
import bluehostLogo from "../../public/logos/bluehost.png";
import hostgatorLogo from "../../public/logos/hostgator.png";
import dreamhostLogo from "../../public/logos/dreamhost.png";

export interface Brand {
  id: number;
  name: string;
  logo: string;
}

export const brandsData = {
  title: "Recommended by the biggest names in WordPress",
  brands: [
    {
      id: 1,
      name: "WordPress.com",
      logo: wordpressLogo,
    },
    {
      id: 2,
      name: "Bluehost",
      logo: bluehostLogo,
    },
    {
      id: 3,
      name: "HostGator",
      logo: hostgatorLogo,
    },
    {
      id: 4,
      name: "DreamHost",
      logo: dreamhostLogo,
    },
  ] as Brand[],
};