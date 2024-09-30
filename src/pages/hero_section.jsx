function HeroSection() {
  return (
    <section>
      <div id="section1" className="hero-section flex justify-around items-center h-[519px] mt-24">
        <div className="text-content flex flex-col gap-10 w-1/2">
          <h1 className="text-white text-6xl">Assure ton<br></br> <span className="text-fuchsia-700">devenir</span> professionelle</h1>
          <p className="text-white">
            Découvrez notre service unique avec deux offres exceptionnelles !
            Avec Wommate, vous avez le choix entre une offre complète de
            formation et d'accompagnement, ou bien la possibilité de trouver des
            experts pour vous aider à digitaliser votre entreprise.
          </p>
          <div className="boutons flex gap-10">
            <a class="rounded-full bg-fuchsia-700 text-2xl text-blue-950 px-10 py-2">
              Contacter
            </a>

            <a class="rounded-full bg-blue-950 text-2xl font-light text-white border-2 border-fuchsia-700 px-6 py-2">
              Programmes
            </a>
          </div>
        </div>
        <img src="images\heros_img.png" alt="Image hero section" className="h-96 w-[400px]"/>
      </div>
    </section>
  );
}
export default HeroSection;
