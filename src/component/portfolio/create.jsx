import "../../stylesheet/styles.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Autoplay, Swiper as RealSwiper } from "swiper";
import Footer from "../parts/footer";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const Create = () => {
  RealSwiper.use([Autoplay]);
  return (
    <div className="create_body">
      <div>
        <h1>作成したプログラム一覧</h1>
      </div>

      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={10}
        slidesPerView={1}
        navigation={true}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
        autoHeight={true}
        centerInsufficientSlides={true}
        // loop={true}
      >
        <SwiperSlide>
          <div className="swipelist">
            <h1> 1. このポートフォリオサイト </h1>
            <ul>
              <li>
                <div> 使用言語</div>
              </li>
              <p>Go 言語</p>
              <li>
                <div> 機能概要 </div>
              </li>
              <p> mattermost で出席管理ができる bot を作成しました。 </p>
              <li>
                <div>使い方</div>
              </li>
              <p> mattermost のチャット欄で「/attend」 </p>
            </ul>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swipelist">
            <h1> 2. Mattermost BOT </h1>
            <ul>
              <li>
                <div> 使用言語</div>
              </li>
              <p>Go 言語</p>
              <li>
                <div> 機能概要 </div>
              </li>
              <p> mattermost で出席管理ができる bot を作成しました。 </p>
              <li>
                <div>使い方</div>
              </li>
              <p> mattermost のチャット欄で「/attend」 </p>
            </ul>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swipelist">
            <h1> 3. Python で自然言語処理 </h1>
            <ul>
              <li>
                <div> 使用言語</div>
              </li>
              <p>Go 言語</p>
              <li>
                <div> 機能概要 </div>
              </li>
              <p> mattermost で出席管理ができる bot を作成しました。 </p>
              <li>
                <div>使い方</div>
              </li>
              <p> mattermost のチャット欄で「/attend」 </p>
            </ul>
          </div>
        </SwiperSlide>
      </Swiper>
      <Footer />
    </div>
  );
};

export default Create;
