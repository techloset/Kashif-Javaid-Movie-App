import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../store/slice/hooks/hooks";
import TrendingMovie from "../trendingmovie/TrendingMovies";
import { popularData } from "../../store/slice/popularSlice";
import ReleaseMovie from "../releasemovie/ReleaseMovie";
import { Movies } from "../../types/types";
const PopularMovies: React.FC = () => {
  const dispatch = useAppDispatch();

  const popular: Movies[] = useAppSelector((state) => state.popular.data);
  useEffect(() => {
    dispatch(popularData());
  }, [dispatch]);

  return (
    <>
      <div className="mx-3 md:ml-16 ">
        <div className="flex gap-3">
          {popular.slice(0, 2).map((movie) => (
            <div key={movie.id}>
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
          ))}
          <div className="sm:hidden xx:hidden md:block">
            <TrendingMovie />
          </div>
        </div>
      </div>
      <div className="py-4">
        <h1 className=" xx:ml-8 text-2xl font-medium text-black xl:ml-16  ">
          Popular Release
        </h1>
      </div>
      <div className="min-w-[177px] max-h-[263px] py-6 ">
        <ReleaseMovie />
      </div>
    </>
  );
};
export default PopularMovies;
