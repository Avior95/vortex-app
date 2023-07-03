import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const SliderComponent = ({ slides }) => {
  return (
    <Swiper spaceBetween={6} slidesPerView={3}>
      {slides.map((slide) => (
        <SwiperSlide key={slide.id}>
          <img
            style={{ backgroundColor: "yellow", width: "100%" }}
            src={slide.URL}
            alt={slide.title}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SliderComponent;
