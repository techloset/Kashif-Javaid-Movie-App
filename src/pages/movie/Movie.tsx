import { useAppDispatch, useAppSelector } from "../../store/slice/hooks/hooks";
import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import image1 from "../../assets/img1.jpg";
import image2 from "../../assets/img2.jpg";
import image3 from "../../assets/img3.png";
import image4 from "../../assets/img4.jpg";
import image5 from "../../assets/logo.png";
import { movieData } from "../../store/slice/movieslice";
const Movie: React.FC = () => {
  const dispatch = useAppDispatch();
  const { movieId } = useParams<{ movieId: string }>();
  const movie = useAppSelector((state) => state.movie.data);
  useEffect(() => {
    dispatch(
      movieData({
        movieId: movieId || "",
      })
    );
  }, [movieId]);
  return (
    <>
      <div className="w-[100%]">
        <div className="flex justify-between py-2  ">
          <div className="font-bold text-black text-[40px] py-4 ml-16">
            <h1>{movie && movie.original_title}</h1>
          </div>
          <div className="hidden lg:block ">
            <button className="text-black flex font-medium text-center mr-32 rounded-full bg-gray-200 border border-gray-100 mx-5 py-2 m-3 p-5 hover:bg-gray-400">
              <img src={image5} alt="Logo" />
              <p className="ml-2">Add to watchlist</p>
            </button>
          </div>
        </div>
        <div className="py-[-5px]">
          <div className="flex flex-col lg:flex-row ">
            {movie && (
              <img
                src={`https://image.tmdb.org/t/p/w200/${movie?.poster_path}`}
                alt={`Poster for ${movie?.original_title}`}
                className="rounded-2xl py-1 md:ml-16 xx:w-[191px] xx:pb-36 sm:w-[191px] md:w-[191px]  sm:h-[325px] h-[325px]"
              />
            )}
            <div className="md:ml-16 lg:ml-0">
              <div className=" xx:ml-30  xx:text-2xl">
                <button className="p-1  border ml-2  border-black rounded-full">
                  Action
                </button>
                <button className="m-2 p-1 px-2 border ml-2 border-black rounded-full">
                  Sci-Fi
                </button>
                <div className="ml-3 text-balance text-justify cursor-text">
                  {movie && <div>{movie?.overview}</div>}
                </div>
                <div className="ml-3 mt-auto">
                  <h1 className="text-sm md:text-base">IMDB</h1>
                  <p className="ml-4 text-xs md:text-sm">8k Reviews</p>
                  <p className="text-xs md:text-sm">⭐ 9.1/10</p>
                </div>
              </div>
            </div>

            <div className="min-w-[47%] xx:absolute  xl:ml-8 md:ml-16 lg:ml-0 md:flex ">
              {movie && (
                <img
                  src={`https://image.tmdb.org/t/p/w200/${movie?.backdrop_path}`}
                  alt={`Backdrop for ${movie?.original_title}`}
                  className=" w-[591px] h-[325px] rounded-2xl py-1  cursor-pointer md:mb-0 mb-36 "
                />
              )}
            </div>
          </div>
        </div>
        <div className="md:flex md:py-10 md:ml-20 hidden">
          <div>
            <h1 className="text-4xl font-medium">Seasons</h1>
          </div>
          <div className="py-1 ml-4 ">
            <Link to="/">
              <button className="mr-2 w-[43.27px] h-[43.27px] rounded-md border border-gray-400 bg-gray-300">
                1
              </button>
            </Link>
            <Link to="#">
              <button className="mr-2 w-[43.27px] h-[43.27px] rounded-md border border-gray-400 bg-gray-300">
                2
              </button>
            </Link>
            <Link to="/search/query">
              <button className="mr-2 w-[43.27px] h-[43.27px] rounded-md border border-gray-400 bg-gray-300">
                3
              </button>
            </Link>
            <Link to="/">
              <button className="mr-2 w-[43.27px] h-[43.27px] rounded-md border border-gray-400 bg-gray-300">
                4
              </button>
            </Link>
          </div>
        </div>
        <div className="cursor-pointer pb-5 xx:hidden md:hidden lg:block">
          <div className="flex gap-4  w-[90%] ml-20">
            <img src={image1} alt="image1" />
            <img src={image2} alt="image2" />
            <img src={image3} alt="image3" />
            <img src={image4} alt="image4" />
          </div>
        </div>
      </div>
    </>
  );
};
export default Movie;
