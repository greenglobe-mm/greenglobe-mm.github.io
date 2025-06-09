import React, { useEffect, useState, Suspense } from "react";
import { Link } from "react-router-dom";
import categories from "../resources/categories";
import Loading from "./Loading";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Parallax,
  Autoplay,
  Pagination,
  EffectCoverflow,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/parallax";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";

export default function Articles() {
  const [testValue, setTestValue] = useState("");

  useEffect(() => {
    if (sessionStorage.getItem("someTestValue")) {
      setTestValue(sessionStorage.getItem("someTestValue"));
    }
  }, [testValue]);

  return (
    <main className="flex flex-col items-center min-h-screen p-3 bg-green-800 lg:p-24">
      <div className="z-10 w-full mb-3 font-mono lg:flex">
        <div className="relative flex place-items-center">
          <Link to="/">
            <img
              className="relative rounded-full cursor-pointer"
              src={process.env.PUBLIC_URL + "/gg.png"}
              alt=""
              width={50}
              height={50}
              style={{ borderRadius: "50%" }}
            />
          </Link>
        </div>
      </div>
      <Suspense fallback={<Loading />}>
        <div className="flex justify-center items-center w-full h-full min-h-[65vh]">
          <Swiper
            modules={[Parallax, Autoplay, Pagination, EffectCoverflow]}
            effect="coverflow"
            coverflowEffect={{
              rotate: 30,
              stretch: 0,
              depth: 200,
              modifier: 1,
              slideShadows: true,
            }}
            spaceBetween={30}
            slidesPerView={"auto"}
            centeredSlides={true}
            loop={true}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            parallax={true}
            pagination={{ clickable: true }}
            style={{
              width: "75vw",
              height: "65vh",
              maxWidth: "1200px",
              padding: "40px 0",
            }}
          >
            {categories.map((item, index) => (
              <SwiperSlide
                key={index}
                className="category-slide"
                style={{
                  width: "300px",
                  height: "350px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Link
                  to="/detail"
                  className="flex flex-col items-center w-full h-full"
                >
                  <div
                    className="flex justify-center w-full h-full"
                    data-swiper-parallax="-50"
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      className="object-contain shadow-lg rounded-xl"
                      style={{
                        width: "100%",
                        height: "100%",
                        maxWidth: "600px",
                        maxHeight: "400px",
                      }}
                    />
                  </div>
                  <div className="flex mt-8" data-swiper-parallax="-100">
                    <p className="w-full px-5 text-xl text-center rounded text-slate-100">
                      {item.title}
                    </p>
                  </div>
                  <div className="flex mt-2" data-swiper-parallax="-100">
                    <p className="w-full px-5 text-center rounded text-slate-300">
                      {item.shortDescription}
                    </p>
                  </div>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </Suspense>
    </main>
  );
}
