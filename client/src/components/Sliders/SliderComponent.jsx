import { Navigation, Pagination, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";

const SliderComponent = ({ slides }) => {
  return (
    <Swiper
      // spaceBetween={6}
      slidesPerView={3}
      modules={[Navigation, Pagination, A11y]}
      navigation
      pagination={{ clickable: true }}
      style={{
        width: "100%",
      }}
    >
      {slides.map((slide) => (
        <SwiperSlide key={slide.id}>
          <img
            style={{
              width: "80%",
            }}
            src={slide.URL}
            alt={slide.title}
          />
          <Box>
            <Typography variant="body1" color="initial">
              The Tread-Bare Sneaker
            </Typography>
            <span> 322$ </span>
          </Box>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SliderComponent;
