import PopularMovies from "../../components/popularmovies/PopularMovies";
export default function Home() {
  return (
    <>
      <div className="flex py-5">
        <div className="text-black text-xl font-medium  xx:py-3 sm:py-3 ">
          <h5 className=" py-3 ml-20 xx:py-3 sm:py-3 md:py-2 ">
            Popular Movies
          </h5>
        </div>

        <div className="md:py-5 lg:mx-auto xl:mx-auto ">
          <h5 className="lg:mr-28 xl:mr-[500px] text-black text-xl font-medium  xx:hidden sm:hidden md:hidden lg:block">
            Trending
          </h5>
        </div>
      </div>
      <PopularMovies />
    </>
  );
}
