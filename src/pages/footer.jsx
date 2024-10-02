import { BsFacebook } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";

function Footer() {
  return (
    <footer>
      <div className="content-footer flex gap-14 bg-[#f0f0f0] pt-14 pl-16 pb-14 text-sm">
        <div className="newsletter w-1/5">
          <img src="images/logo_wommate.png" alt="logo wommate" className="w-44"/>
          <p>
            Ne manquez plus aucune mise à jour ! Inscrivez-vous à notre
            newsletter dès maintenant.
          </p>
          <form className="form-letter flex gap-3 mt-5">
            <input type="text" id="text" placeholder="Votre email" className="shadow-md bg-white w-2/3 h-10 rounded-xl pl-2"/>
            <button id="submit" className="bg-fuchsia-700 h-10 w-1/3 rounded-xl shadow-md text-white">S'inscrire</button>
          </form>
        </div>
        <div className="offres w-1/5">
          <h2>OFFRES</h2>
          <div className="flex flex-col gap-5 mt-3">
          <p>Porpositions de solutions numérique pour entreprise</p>
          <p>Formation personnalisées selon vos beosins</p>
          <p>Conseils et accompagnement</p>
          <p>Formations et accompagnement pour jeunes chercheurs d'emploie</p>
          <p>Formation et accompagnement pour jeunes entrepreuneurs</p>

          </div>
        </div>
        <div className="contacts w-1/5">
            <h2>CONTACTS</h2>
            <div className="text-contact flex flex-col gap-6 mt-3">
            <a href="wommateTech@example.com" target="_blank">wommateTech@example.com</a>
            <p>+221 77 628 96 74</p>
            <p>+221 78 290 25 12</p>
            </div>
        </div>
        <div className="reseaux-sociaux">
            <h2>RESEAUX</h2>
            <ul className="flex gap-4 text-blue-900 text-3xl mt-3">
          <li className="text-fuchsia-700">
            <a href="#">
              <BsFacebook />
            </a>
          </li>
          <li className="text-fuchsia-700">
            <a href="#">
              <BsInstagram />
            </a>
          </li>
          <li className="text-fuchsia-700">
            <a href="#">
              <BsLinkedin />
            </a>
          </li>
        </ul>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
