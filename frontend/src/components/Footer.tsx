import { Link } from "react-router-dom";
import GmailIcon from "../assets/gmail-icon.svg";
import FacebookIcon from "../assets/facebook-icon.svg";
import InstagramIcon from "../assets/instagram-icon.svg";
import LinkedInIcon from "../assets/linkedIn-icon.svg";
import XIcon from "../assets/x-icon.svg";
import ThinkLogo from "../assets/black-logomark.png";
import CallToAction from "./CallToAction";

export default function Footer() {
  return (
    <div className=" bg-primary">
      <footer className="pt-8 pb-4 w-[90%] sm:w-[90%] md:w-[90%] lg:w-[70%] xl:w-[60%] mx-auto">
        <div className="my-4">
          <div className="flex gap-2 mb-6 items-center">
            <img src={ThinkLogo} className="w-8 h-8" />
            <h3 className="text-2xl text-gray-900">Thinkledger</h3>
          </div>

          <h2 className="text-2xl text-gray-900 mb-2">Make Financial Decisions Faster and Smarter</h2>
          <p className="mb-4  text-gray-700">Join the waitlist to get early access today!</p>
          <CallToAction />

          <div className="flex items-center gap-4 mb-8">
            <Link to="#">
              <img src={GmailIcon} alt="gmail icon" loading="lazy" className="h-6" />
            </Link>
            <Link to="#">
              <img src={FacebookIcon} alt="facebook icon" loading="lazy" className="h-6" />
            </Link>
            <Link to="#">
              <img src={InstagramIcon} alt="instagram icon" className="h-6" />
            </Link>
            <Link to="#">
              <img src={LinkedInIcon} alt="linkedIn icon" className="h-6" />
            </Link>
            <Link to="#">
              <img src={XIcon} alt="x icon" loading="lazy" className="h-6" />
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-10">
            <div>
              <h3 className="text-gray-900 font-medium mb-2">Legal</h3>
              <ul className="space-y-2 text-gray-700">
                <li>
                  <Link to="/privacy_policy" className="hover:underline">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link to="/terms_of_service" className="hover:underline">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <a href="/privacy_policy#cookie-policy" className="hover:underline">
                    Cookie Policy
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-gray-900 mb-2 font-medium">Resources</h3>
              <ul className="space-y-2 text-gray-700">
                <li>
                  <Link to="/support" className="hover:underline">
                    Support
                  </Link>
                </li>
                <li>
                  <Link to="/blog" className="hover:underline">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link to="/docs" className="hover:underline">
                    Documentation
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-8 text-center">
            <p className="text-sm md:text-md text-gray-700">2025 Copyright &copy; ThinkLedger</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
