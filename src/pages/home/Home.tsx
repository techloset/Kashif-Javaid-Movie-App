import PopularMovies from "../../components/popularmovies/PopularMovies";
export default function Home() {
  return (
    <>
      <div className="flex py-5">
        <div className="text-black text-xl font-medium xx:w-10 sm:w-10 xx:py-3 sm:py-3 md:w-auto ">
          <h5 className="ml-20 py-3 xx:py-3 sm:py-3 md:py-2">Popular Movies</h5>
        </div>
        <div className="md:py-5 md:ml-24 lg:-ml-32 xl:ml-0 ">
          <h5 className="lg:ml-[430px] xl:ml-[330px] text-black text-xl font-medium  xx:hidden sm:hidden md:hidden lg:block">
            Trending
          </h5>
        </div>
      </div>
      <PopularMovies />
    </>
  );
}
