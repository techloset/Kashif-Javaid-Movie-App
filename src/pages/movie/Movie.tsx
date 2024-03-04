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
          <div className="font-bold text-black text-[40px] py-4 xx:ml-5 xl:ml-16">
            <h1 className="font-roboto font-bold  text-5xl ">
              {movie && movie.original_title}
            </h1>
          </div>
          <div className="hidden lg:block ">
            <button className="text-black flex font-medium text-center  rounded-full bg-custom-background border border-gray-200 mx-5 py-2 m-3 p-5 xl:mr-20">
              <img src={image5} alt="Logo" />
              <p className="ml-2 font-roboto font-medium  text-lg ">
                Add to watchlist
              </p>
            </button>
          </div>
        </div>
        <div className="py-[-5px]">
          <div className="flex flex-col lg:flex-row  xx:rounded-full ">
            {movie && (
              <img
                src={`https://image.tmdb.org/t/p/w200/${movie?.poster_path}`}
                alt={`Poster for ${movie?.original_title}`}
                className="lg:rounded-2xl py-1 md:ml-16 xx:w-[98px] xx:h-[146px] xx:ml-10 "
              />
            )}
            <div className="md:ml-16 lg:ml-3 lg:mt-5 xx:mt-10 xx:ml-2">
              <div className=" xx:ml-30  sm:ml-0 xx:text-2xl xx:mt-32">
                <button className="px-3  border ml-2 xx:ml-3  border-black rounded-full font-roboto font-medium  text-lg text-black">
                  Action
                </button>
                <button className=" px-3  border ml-[20px] border-black rounded-full font-roboto font-medium  text-lg text-black">
                  Sci-Fi
                </button>
                <div className="mr-5 mt-[25px] xx:mx-4 sm:mx-0  text-justify cursor-text xl:ml-2 ">
                  {movie && (
                    <div className=" font-roboto font-medium text-lg leading-5">
                      {movie?.overview}
                    </div>
                  )}
                </div>
                <div className="flex ml-4 mt-[40px]">
                  <div>
                    <h1 className="text-xl font-roboto  font-normal ">
                      IMDB Rating
                    </h1>
                    <p className="text-xs md:text-sm ml-1">⭐ 9.1/10</p>
                  </div>
                  <p className="ml-4 text-sm md:text-sm mt-3 font-roboto font-normal  text-color">
                    8k Reviews
                  </p>
                </div>
              </div>
            </div>

            <div className="xx:absolute sm:ml-20  md:flex justify-end mx-3 ">
              {movie && (
                <img
                  src={`https://image.tmdb.org/t/p/w200/${movie?.backdrop_path}`}
                  alt={`Backdrop for ${movie?.original_title}`}
                  className=" w-[591px] h-[291px] xl:min-w-[591px] xl:min-h-[291px] rounded-2xl py-1 mr-20 cursor-pointer md:mb-0  "
                />
              )}
            </div>
          </div>
        </div>
        <div className="md:flex md:py-10 md:ml-20 hidden">
          <div>
            <h1 className="text-3xl font-roboto font-bold  ">Seasons</h1>
          </div>
          <div className="py-1 ml-4 ">
            <Link to="/">
              <button className="mr-2 w-[43.27px] h-[43.27px] font-roboto font-bold text-xl rounded-md border border-gray-400 bg-custom-background">
                1
              </button>
            </Link>
            <Link to="#">
              <button className="mr-2 w-[43.27px] h-[43.27px] font-roboto font-bold text-xl rounded-md border border-gray-400 bg-custom-background">
                2
              </button>
            </Link>
            <Link to="/search/query">
              <button className="mr-2 w-[43.27px] h-[43.27px] font-roboto font-bold text-xl  rounded-md border border-gray-400 bg-custom-background">
                3
              </button>
            </Link>
            <Link to="/">
              <button className="mr-2 w-[43.27px] h-[43.27px] font-roboto font-bold text-xl  rounded-md border border-gray-400 bg-custom-background">
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
