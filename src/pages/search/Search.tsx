import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { AnyAction, ThunkDispatch } from "@reduxjs/toolkit";
import { Movies } from "../../types/types";
import { useAppSelector } from "../../store/slice/hooks/hooks";
import { searchData } from "../../store/slice/searchslice";
export default function Search() {
  const { query } = useParams<{ query: string }>();
  console.log(query);
  const dispatch: ThunkDispatch<Movies[], any, AnyAction> = useDispatch();
  const search = useAppSelector((state) => state.search.data);
  useEffect(() => {
    if (query) {
      dispatch(searchData({ query }));
    }
  }, [dispatch, query]);
  return (
    <>
      <div className="py-10 ml-20 font-medium ">
        <h1>Showing search results for: {query} </h1>
      </div>
      <Link to="/">
        <div className="flex flex-wrap gap-4 justify-center">
          {search.map((item) => (
            <div key={item.id}>
              <div className="flex">
                <img
                  src={`https://image.tmdb.org/t/p/w185/${item.poster_path}`}
                  alt={item.title}
                  className="rounded-2xl w-[197px] h-[287px] top-[20px] left-[947px]"
                />
              </div>
            </div>
          ))}
        </div>
      </Link>
    </>
  );
}
