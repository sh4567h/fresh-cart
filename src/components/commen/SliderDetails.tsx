"use client";

import { useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Thumbs } from "swiper/modules";


export default function SliderDetails({ images, slidesPerView }: { images: string[], slidesPerView: number }) {
  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);

  return (
    <div className="w-65 max-w-xl mx-auto">
      {/* Main Image Swiper */}
      <Swiper
        modules={[Thumbs]}
        thumbs={{ swiper: thumbsSwiper }}
        className="mb-4 rounded-xl overflow-hidden "
      >
        {images.map((img, idx) => (
          <SwiperSlide key={idx}>
            <div className="relative w-full aspect-square">
              <Image
                src={img}
                alt={`product image ${idx + 1}`}
                fill
                className="object-cover h-90"
                sizes="(max-width: 768px) 100vw, 600px"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Thumbnails Swiper */}
      <Swiper
        modules={[Thumbs]}
        onSwiper={setThumbsSwiper}
        watchSlidesProgress
        slidesPerView={Math.min(slidesPerView, images.length)}
        spaceBetween={12}
        className="thumbnails-swiper"
      >
        {images.map((img, idx) => (
          <SwiperSlide key={idx}>
            <div className="relative w-full h-25  aspect-square cursor-pointer rounded-lg overflow-hidden border-2 border-gray-200 hover:border-blue-400 transition-all duration-200">
              <Image
                src={img}
                alt={`thumbnail ${idx + 1}`}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 80px, 10px"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}