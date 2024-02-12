import React, { useState, FormEvent } from "react";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    navigate(`/search/${searchQuery}`);
  };

  return (
    <>
      <div className="flex">
        <div className="py-[40px] flex ">
          <h1 className="md:text-4xl text-black text-4xl font-semibold  pl-20">
            The
            <br />
            Movie
            <br />
            Tracker
          </h1>
          <div className="py-10 flex md:hidden ml-24">
            <input
              type="text"
              placeholder="🔍"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="rounded-full outline-none w-10  placeholder:text-center mx-2  flex justify-center items-center"
            />
            <button
              type="button"
              className="rounded-full outline-none bg-white placeholder:text-center text-4xl pb-1 w-10 mx-2  flex justify-center items-center"
              onClick={() => handleSearch}
            >
              +
            </button>
          </div>
        </div>

        <div className="hidden md:flex mx-auto py-[46px] ">
          <form onSubmit={handleSearch}>
            <input
              type="search"
              id="search"
              className="md:w-[550px] lg:w-[630px] h-[57px] bg-gray-300 outline-none text-center rounded-full"
              value={searchQuery}
              placeholder="🔍 Search a movie or a series"
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </form>
        </div>
      </div>
    </>
  );
}
