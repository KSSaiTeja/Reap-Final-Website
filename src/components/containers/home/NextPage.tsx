import React from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/swiper-bundle.css";

interface NextPageProps {
  title: string;
  href: string;
  linkText: string;
}

const NextPage: React.FC<NextPageProps> = ({ title, href, linkText }) => {
  return (
    <section className="section next-page">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-8">
            <div className="text-center section__header">
              <Link href={href} className="mb-0 sub-title">
                {linkText}
                <i className="fa-solid fa-arrow-right"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="next__text-slider-w">
        <Swiper
          slidesPerView="auto"
          spaceBetween={40}
          speed={5000}
          loop={true}
          centeredSlides={true}
          modules={[Autoplay]}
          autoplay={{
            delay: 1,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
            reverseDirection: false,
          }}
          className="next__text-slider"
        >
          {[...Array(12)].map((_, index) => (
            <SwiperSlide key={index}>
              <div className="next__text-slider-single">
                <h2 className={`h1 ${index % 2 === 1 ? "str" : ""}`}>
                  <Link href={href}>
                    {title}
                    <i className="fa-sharp fa-solid fa-arrow-down-right"></i>
                  </Link>
                </h2>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="lines d-none d-lg-flex">
        {[...Array(5)].map((_, index) => (
          <div key={index} className="line"></div>
        ))}
      </div>
    </section>
  );
};

export default NextPage;
