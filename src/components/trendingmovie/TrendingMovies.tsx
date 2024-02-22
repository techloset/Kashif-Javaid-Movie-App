import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../store/slice/hooks/hooks";
import { useEffect } from "react";
import { trendingData } from "../../store/slice/trendingslice";
export default function TrendingMovie() {
  const dispatch = useAppDispatch();
  const trending = useAppSelector((state) => state.trending.data);
  useEffect(() => {
    dispatch(trendingData());
  }, [dispatch]);
  return (
    <>
      <div className="md:ms-28 xl:mx-0 md:gap-4 md:flex md:pl-32">
        {trending.slice(0, 4).map((movie) => (
          <div key={movie.id} className="">
            {movie.poster_path && (
              <Link to={`/movie/${movie.id}`}>
                <img
                  src={`https://image.tmdb.org/t/p/w185/${movie.poster_path}`}
                  alt={`${movie.title} poster`}
                  className="rounded-3xl lg:min-w-[177px] sm:hidden lg:flex"
                />
              </Link>
            )}
          </div>
        ))}
      </div>
    </>
  );
}
