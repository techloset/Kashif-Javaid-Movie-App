import PopularMovies from "../../components/popularmovies/PopularMovies";
export default function Home() {
  return (
    <>
      <div className="flex py-5 justify-between">
        <div className="text-black text-xl font-medium  xx:py-3 sm:py-3 ">
          <h5 className=" py-3 ml-20 xx:py-3 sm:py-3 md:py-2 ">
            Popular Movies
          </h5>
        </div>

        <div className="md:py-5 ml-10">
          <h5 className=" text-black text-xl font-medium  xx:hidden sm:hidden md:hidden lg:block">
            Trending
          </h5>
        </div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <PopularMovies />
    </>
  );
}
