function Team() {
  return (
    <section>
      <div className="team-section w-auto bg-yellow-400 h-96 flex items-center">
        <div className="team-text flex flex-col gap-5">
          <h2 className="text-center text-fuchsia-700 text-2xl">Notre mission</h2>
          <p className="text-justify">
            Wommate accélère la transition vers le numérique. Notre mission est
            d'accompagner toute personne souhaitant acquérir des compétences
            dans les métiers du numérique afin d'être apte a affronter le monde
            professionnel, ou digitaliser son entreprise, que ce soit au stade
            de l'idéation ou déjà en cours de développement.
          </p>
        </div>
        <div className="team-photo flex flex-col gap-5">
            <h2 className="text-center text-fuchsia-700 text-2xl">Notre équipe</h2>
            <div className="team-membre flex gap-10">
                <div className="membre w-44 flex flex-col items-center text-sm">
                    <img src="images/oumar.jpg" alt="Oumar DIAGNE" className="w-20 h-20 rounded-full"/>
                    <span>Oumar DIAGNE</span>
                    <p className="text-center font-light text-blue-950">Développeur web IOT, ingénieur SI</p>
                </div>
                <div className="membre w-44 flex flex-col items-center text-sm">
                    <img src="images/bella.png" alt="Maimouna DIALLO" className="w-20 h-20 rounded-full"/>
                    <span>Maimouna DIALLO</span>
                    <p className="text-center font-light text-blue-950">Développeur web, coach formatrice</p>
                </div>
                <div className="membre w-44 flex flex-col items-center text-sm">
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
