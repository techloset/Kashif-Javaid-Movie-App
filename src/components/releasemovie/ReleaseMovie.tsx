import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../store/slice/hooks/hooks";
import { ReleasData } from "../../store/slice/releaseSlice";
import { Movies } from "../../types/types";
export default function ReleaseMovie() {
  const dispatch = useAppDispatch();
  const release: Movies[] = useAppSelector((state) => state.release.data);
  useEffect(() => {
    dispatch(ReleasData());
  }, [dispatch]);
  // slider
  return (
    <div className="w-[86%] xx:ml-5 sm:ml-0 md:ml-16 ">
      <Swiper
        slidesPerView={3}
        spaceBetween={20}
        breakpoints={{
          370: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 80,
          },
          992: {
            slidesPerView: 5,
            spaceBetween: 14,
          },
          1200: {
            slidesPerView: 7,
            spaceBetween: 14,
          },
        }}
      >
        {release.map((movie) => (
          <SwiperSlide key={movie.id}>
            <div>
              {movie.poster_path && (
                <Link to={`/movie/${movie.id}`}>
                  <img
                    src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`}
                    alt={`${movie.title} poster`}
                    className="rounded-3xl xx:min-w-[170px] xx:max-h-[254px] lg:w-[177px] lg:h-[263px]"
                  />
                </Link>
              )}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
