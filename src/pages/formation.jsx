import { FaLongArrowAltDown } from "react-icons/fa";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function Formation() {
  useEffect(() => {
    AOS.init({
      disable: "phone",
      duration: 700,
      easing: "ease-out-cubic",
    });
  }, []);

  return (
    <section>
      <div className="formation-section flex flex-col justify-center items-center">
        <h1 className="text-blue-900 text-4xl mt-14" data-aos="zoom-in">Formations disponibles</h1>
        <div className="all-cartes my-20 flex gap-10">
          <div className="carte w-72 flex flex-col gap-3 p-2 shadow-lg shadow-gray-300 rounded-t-xl">
            <img src="images/dev.png" alt="dev" className="h-52 rounded-t-xl" />
            <div className="text px-2">
              <span className="text-lg text-blue-900">
                Développement
              </span>
              <p className="text-justify font-light text-sm">
                Créer votre propre site web, trouver votre premier emploie , ou
                bien développer votre propre bussiness en ligne.
              </p>
            </div>
            <div className="all-boutons flex justify-between px-2 mt-5">
              <a href="#" className="text-fuchsia-700 flex items-center">
                Brochure
                <FaLongArrowAltDown />
              </a>
              <a
                href="#"
                className="text-white bg-fuchsia-700 px-5 py-2 rounded-md"
              >
                S'inscrire
              </a>
            </div>
          </div>
          <div className="carte w-72 flex flex-col gap-3 p-2 shadow-lg shadow-gray-300 rounded-t-xl">
            <img
              src="images/marketing.png"
              alt="dev"
              className="h-52 rounded-t-xl"
            />
            <div className="text px-2">
              <span className="text-lg text-blue-900">
                Marketing digitale
              </span>
              <p className="text-justify font-light text-sm">
                Devenez autonome en marketing digitale, apprenez à créer des
                campagnes publicitaires, et à gérer vos réseaux sociaux.
              </p>
            </div>
            <div className="all-boutons flex justify-between px-2 mt-5">
              <a href="#" className="text-fuchsia-700 flex items-center">
                Brochure
                <FaLongArrowAltDown />
              </a>
              <a
                href="#"
                className="text-white bg-fuchsia-700 px-5 py-2 rounded-md"
              >
                S'inscrire
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Formation;
