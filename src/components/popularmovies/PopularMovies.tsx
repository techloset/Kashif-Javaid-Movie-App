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
      <div className="flex">
        <div className="flex xx:gap-4 gap-4 ml-20   ">
          {popular.slice(0, 2).map((movie) => (
            <div key={movie.id}>
              {movie.poster_path && (
                <Link to={`/movie/${movie.id}`}>
                  <img
                    src={`https://image.tmdb.org/t/p/w185/${movie.poster_path}`}
                    alt={`${movie.title} poster`}
                    className="rounded-3xl md:min-w-[177px]"
                  />
                </Link>
              )}
            </div>
          ))}
        </div>
        <div className="md:min-w-[70%] xx:hidden sm:hidden md:flex lg:flex ">
          <TrendingMovie />
        </div>
      </div>
      <div className="py-4">
        <h1 className="ml-20 text-2xl font-medium text-black ">
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
