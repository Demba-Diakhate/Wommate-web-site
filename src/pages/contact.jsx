function Contact() {
  return (
    <section>
      <div id="section5" className="contact-section">
        <h1 className="text-blue-900 text-4xl mt-14 text-center mb-24">
          Contact
        </h1>
        <div className="contact-content flex justify-around">
          <div className="contactez-nous flex flex-col gap-5 w-1/2">
            <h2 className="text-2xl text-fuchsia-700 text-center">
              Contactez-nous
            </h2>
            <p>
              Vous avez des questions ? Vous souhaitez en savoir plus sur nos
              formations ? Vous avez besoin d'un devis ? N'hésitez pas à nous
              contacter, nous vous répondrons dans les plus brefs délais !
            </p>
            <p className="flex gap-3">
              <img src="images/phone.png" alt="phone" className="w-8 h-8" />
              +221 77 777 77 77
            </p>
            <p className="flex gap-3">
              <img src="images/mail.png" alt="mail" className="w-8 h-8" />
              contact@womatte.com
            </p>
            <p className="flex gap-3">
              <img src="images/map.png" alt="map" className="w-8 h-8" />
              Thiés, Sénégal rue 10
            </p>
          </div>
          <div className="formulaire-contact flex flex-col gap-5">
            <h2 className="text-2xl text-fuchsia-700 text-center">
              Nous envoyer un message
            </h2>
            <form className="form-contact flex flex-col gap-5">
              <input
                type="text"
                id="name"
                placeholder="Prenom & nom"
                className="border-2 border-gray-100 rounded-xl"
              />
              <input
                type="email"
                id="email"
                placeholder="contact@wommate.com"
                className="border-2 border-gray-100 rounded-xl"
              />
              <textarea
                name="text"
                id="message"
                placeholder="Message"
                className="border-2 border-gray-100 rounded-xl"
              ></textarea>
              <button
                id="submit"
                className="bg-fuchsia-700 text-white w-1/3 h-9 rounded-lg"
              >
                Envoyer
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="map mt-10">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1928.8241380296517!2d-16.93131707931966!3d14.78883067108396!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xec1bf88998dbaaf%3A0x2e2826f1ab3e4d4!2sCDEPS%20DE%20THI%C3%88S!5e0!3m2!1sfr!2ssn!4v1727763456084!5m2!1sfr!2ssn"
          width="100%"
          height="400"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
  );
}
export default Contact;
