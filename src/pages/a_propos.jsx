import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function Apropos() {
  useEffect(() => {
    AOS.init({
      disable: "phone",
      duration: 700,
      easing: "ease-out-cubic",
    });
  }, []);
  return (
    <section>
      <div id="section3" className="apropos-section flex flex-col items-center">
        <h1 className=" text-blue-900 text-4xl mt-14" data-aos="zoom-in">À propos</h1>
        <div className="flex justify-between items-center h-[519px]">
          <div className="text-content flex flex-col gap-10 w-1/2" data-aos="fade-up" data-aos-duration="1000">
            <h1 className="text-fuchsia-700 text-2xl w-[700px]">
              Découvrez Wommate, votre partenaire idéal pour la réussite
              professionnelle !
            </h1>
            <p className="text-gray-500 text-[18px] text-justify w-[580px]">
              Nous sommes une entreprise spécialisée dans la formation et
              l'accompagnement sur mesure des{" "}
              <span className="text-black">chercheurs d'emploi</span>, des
              <span className="text-black">
                {" "}
                entrepreneurs et futurs entrepreneurs
              </span>
              , ainsi que des{" "}
              <span className="text-black">
                petites et moyennes entreprises
              </span>
              . Explorez nos offres variées, comprenant une vaste gamme de
              ressources, de conseils et de formations adaptées à vos besoins.
              N'hésitez pas à nous contacter dès maintenant pour bénéficier de
              nos services. Faites un pas vers l'excellence et laissez-nous vous
              aider à réaliser vos objectifs professionnels.
            </p>
            <div className="boutons flex gap-10">
              <a href="#" class="rounded-full border-fuchsia-700 border-2 shadow-[0_0_8px_1px_rgba(0,0,0,0.1)] shadow-fuchsia-600 text-lg text-black px-10 py-2 hover:bg-pink-700 hover:text-white">
                Nos services
              </a>
            </div>
          </div>
          <img
            src="images/apropos_img.png"
            alt="Image hero section"
            className="h-96 w-[419px]"
            data-aos="fade-up"
            data-aos-duration="2000"
          />
        </div>
      </div>
    </section>
  );
}
export default Apropos;
