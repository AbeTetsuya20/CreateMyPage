import "../../stylesheet/styles.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

import "swiper/css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const Create = () => {
  return (
    <div className="create_body">
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        <SwiperSlide>
          <div className="swipelist">
            <h1> 1. このポートフォリオサイト </h1>
            <h4> 使用言語: HTML, CSS, React, Javascript </h4>
            <h4> ああああああああ </h4>
            <h2> 1/3 </h2>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swipelist">
            <h1> 2. Mattermost BOT </h1>
            <h4> 使用言語: Go 言語 </h4>
            <h4> ああああああああ </h4>
            <h2> 2/3 </h2>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swipelist">
            <h1> 3. Python で自然言語処理 </h1>
            <h4> 使用言語: Python </h4>
            <h4> ああああああああ </h4>
            <h2> 3/3 </h2>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Create;
