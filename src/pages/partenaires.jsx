// import Swiper core and required modules
import { Navigation, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

function Partenaires() {
  return (
    <section>
      <h1 id="section2" className="text-blue-900 text-4xl text-center mt-20">Partenaires</h1>
      <div className="slide mt-20 mb-20 w- mx-auto">
        <Swiper
          // install Swiper modules
          modules={[Navigation, A11y]}
          spaceBetween={10}
          slidesPerView={3}
          navigation
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
          loop={true} //Navigation infini
          className="w-2/3 overflow-visible"
        >
          <SwiperSlide className="flex justify-center items-center">
            <a href="#">
              <img
                className="w-28 h-28 rounded-full"
                src="images/logo_wommate.png"
                alt="logo wommate"
              />
            </a>
          </SwiperSlide>
          <SwiperSlide className="flex justify-center items-center">
            <a href="#">
              <img
                className="w-28 h-28 rounded-full"
                src="images/apropos_img.png"
                alt="apropos img"
              />
            </a>
          </SwiperSlide>
          <SwiperSlide className="flex justify-center items-center">
            <a href="#">
              <img
                className="w-28 h-28 rounded-full"
                src="images/odia_corp.jpeg"
                alt="logo odia corp"
              />
            </a>
          </SwiperSlide>
          <SwiperSlide className="flex justify-center items-center">
            <a href="#">
              <img
                className="w-28 h-28 rounded-full"
                src="images/logo-bella.jpg"
                alt="logo bella"
              />
            </a>
          </SwiperSlide>
          <SwiperSlide className="flex justify-center items-center">
            <a href="#">
              <img
                className="w-28 h-28 rounded-full"
                src="images/logo-minamemontre.jpg"
                alt="logo miname montre"
              />
            </a>
          </SwiperSlide>
          <SwiperSlide className="flex justify-center items-center">
            <a href="#">
              <img
                className="w-28 h-28 rounded-full"
                src="images/active-solution-logo.png"
                alt="logo active solution"
              />
            </a>
          </SwiperSlide>
          <SwiperSlide className="flex justify-center items-center">
            <a href="#">
              <img
                className="w-28 h-28 rounded-full"
                src="images/logo"
                alt=""
              />
            </a>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
}
export default Partenaires;
