import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function Team() {
  useEffect(() => {
    AOS.init({
      disable: "phone",
      duration: 700,
      easing: "ease-out-cubic",
    });
  }, []);

  return (
    <section>
      <div className="team-section w-auto h-96 flex justify-around items-center">
        <div className="team-text w-[600px] flex flex-col gap-5" data-aos="zoom-in" data-aos-duration="500">
          <h2 className="text-center text-fuchsia-700 text-2xl">Notre mission</h2>
          <p className="text-justify w-[100%] h-[100px] font-light">
            Wommate accélère la transition vers le numérique. Notre mission est
            d'accompagner toute personne souhaitant acquérir des compétences
            dans les métiers du numérique afin d'être apte a affronter le monde
            professionnel, ou digitaliser son entreprise, que ce soit au stade
            de l'idéation ou déjà en cours de développement.
          </p>
        </div>
        <div className="team-photo flex flex-col gap-5">
            <h2 className="text-center text-fuchsia-700 text-2xl" data-aos="fade-up" data-aos-duration="100">Notre équipe</h2>
            <div className="team-membre flex gap-5">
                <div className="membre w-44 flex flex-col items-center text-sm" data-aos="fade-right">
                    <img src="images/oumar.jpg" alt="Oumar DIAGNE" className="w-20 h-20 rounded-full"/>
                    <span>Oumar DIAGNE</span>
                    <p className="text-center font-light text-blue-950">Développeur web IOT, ingénieur SI</p>
                </div>
                <div className="membre w-44 flex flex-col items-center text-sm" data-aos="fade-left">
                    <img src="images/bella.png" alt="Maimouna DIALLO" className="w-20 h-20 rounded-full"/>
                    <span>Maimouna DIALLO</span>
                    <p className="text-center font-light text-blue-950">Développeur web, coach formatrice</p>
                </div>
                <div className="membre w-44 flex flex-col items-center text-sm" data-aos="fade-up">
                    <img src="images/libscode.png" alt="Libasse THIAM" className="w-20 h-20 rounded-full"/>
                    <span>Libasse THIAM</span>
                    <p className="text-center font-light text-blue-950">Développeur web, ingénieur SI</p>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
}
export default Team;
