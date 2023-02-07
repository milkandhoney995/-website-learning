import Image from 'next/image'
import Link from "next/link";
import classes from "./slider.module.scss";
import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper";
// Import Swiper styles
import 'swiper/scss';
import "swiper/css/effect-fade";
const images = [
  {id: 1, src: '/top_mobile_02.jpg',},
  {id: 2, src: '/top_mobile_03.jpg',},
  {id: 3, src: '/top_mobile_05.jpg',},
]

export default function Slider() {
  return (
    <>
      <Swiper
        className={classes.slide}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        effect={"fade"}
        modules={[Autoplay, EffectFade]}
      >
      {images.map((image) => (
        <SwiperSlide
          key={image.id}
        >
          <div
            className={classes.slider__backgroundImg}
            style={{backgroundImage: `url('/images${image.src}')`}}
          >
          </div>
        </SwiperSlide>
      ))}
      </Swiper>
      <div className={classes.slider__overlay}></div>
    <style jsx>
      {`
        .swiper {
          height: 100vh;
        }
      `}
    </style>
    </>
  )
}