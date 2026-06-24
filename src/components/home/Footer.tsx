import { ChevronDown, Zap} from "lucide-react";

import { footerData } from "../../data/footer";

const Footer = () => {
  return (
    <footer className="bg-[#ebefec] py-20">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-10">

        {/* Top */}
        <div className="flex flex-col lg:flex-row justify-between gap-10 mb-20">

         	<div className="flex items-center gap-3 cursor-pointer">
						<div className="w-9 h-9 rounded-full bg-green-600 flex items-center justify-center">
							<Zap size={18}
								fill="currentColor"
								strokeWidth={1.5}
								className="text-white"/>
						</div>
						<span className="text-xl xl:text-2xl font-semibold tracking-tight font-mono">
							Jetpack
						</span>
					</div>

          <button className="flex items-center gap-1 text-sm">
            EN
            <ChevronDown size={14} className="text-green-600" />
          </button>
        </div>

        {/* Footer Links */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-12">

          {footerData.columns.map((column) => (
            <div key={column.id}>
              <h3 className="font-semibold text-black mb-5">
                {column.title}
              </h3>

              <ul className="space-y-3">
                {column.links.map((link) => (
                  <li key={link.id}>
                    <a
                      href={link.url}
                      className="text-sm text-green-700 hover:text-green-800"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="mt-20 flex flex-col md:flex-row justify-between gap-10">

          {/* Social */}
          <div>
            <h3 className="font-semibold text-black mb-5">
              Social
            </h3>

            <div className="flex items-center gap-5">
           <img className="h-auto w-6" src="logos/twitter.png" alt="" />
            <img className="h-auto w-6" src="logos/facebook.png" alt="" />
             <img className="h-auto w-6" src="logos/linkedin.png" alt="" />
              <img className="h-auto w-6" src="logos/youtube.png" alt="" />
            </div>
          </div>

          {/* Mobile Apps */}
          <div>
            <h3 className="font-semibold text-black mb-5">
              Mobile Apps
            </h3>

            <img
              src={footerData.logo}
              alt="Store Logos"
              className="h-12 md:h-14 w-auto object-contain"
            />
          </div>

        </div>

      </div>
    </footer>
  );
};

export default Footer;