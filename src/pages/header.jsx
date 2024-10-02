import { BsFacebook } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { Link } from "react-scroll";
import { GiHamburgerMenu } from "react-icons/gi";

function Header() {
  return (
    <div className="flex justify-between items-center px-5 bg-white">
      <img
        src="images/logo_wommate.png"
        alt="Logo_wommate"
        className="w-24 h-24"
      />
      <nav>
        <ul className="flex gap-4 text-lg font-extralight">
          <li className="cursor-pointer hover:text-fuchsia-700 hover:font-medium">
            <Link to="section1" smooth={true} offset={-100} duration={500}>
              Acceuil
            </Link>
          </li>
          <li className="cursor-pointer hover:text-fuchsia-700 hover:font-medium">
            <Link to="section2" smooth={true} offset={-100} duration={500}>
              Partenaires
            </Link>
          </li>
          <li className="cursor-pointer hover:text-fuchsia-700 hover:font-medium">
            <Link to="section3" smooth={true} offset={-100} duration={500}>
              À propos
            </Link>
          </li>
          <li className="cursor-pointer hover:text-fuchsia-700 hover:font-medium">
            <Link to="section4" smooth={true} offset={-100} duration={500}>
              Services
            </Link>
          </li>
          <li className="cursor-pointer hover:text-fuchsia-700 hover:font-medium">
            <Link to="section5" smooth={true} offset={-100} duration={500}>
              Contact
            </Link>
          </li>
        </ul>
      </nav>
      <div className="icon-media">
        <ul className="flex gap-4 text-blue-900 text-3xl">
          <li className="hover:rotate-12 hover:text-fuchsia-600">
            <a href="#">
              <BsFacebook />
            </a>
          </li>
          <li className="hover:rotate-12 hover:text-fuchsia-600">
            <a href="#">
              <BsInstagram />
            </a>
          </li>
          <li className="hover:rotate-12 hover:text-fuchsia-600">
            <a href="#">
              <BsLinkedin />
            </a>
          </li>
        </ul>
      </div>
      <GiHamburgerMenu className="hamburgerMenu w-10 h-10" />
    </div>
  );
}
export default Header;
