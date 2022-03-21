import React, { useEffect, useState } from "react";
import { api } from "../api";
import { ShowsList } from "../components/ShowsList";
import { SearchBar } from "../components/SearchBar";
import { ShowsSearch } from "../components/showsSearch";

export const Main: React.FC = () => {
  const [searchData, setSearchData] = useState<any[]>([]);
  const [showsData, setShowsData] = useState<any[]>([]);
  const [search, setSearch] = useState("");
  const [pageNumber, setPageNumber] = useState(1);

  useEffect(() => {
    fetchShowsData();
  }, [pageNumber]);

  const fetchShowsData = async () => {
    await api.getAllShows(pageNumber).then((data) => {
      setShowsData(
        data.map((result: any) => {
          return {
            name: result.name,
            image: result.image ? (result.image = result.image.medium) : (result.image = ""),
            language: result.language,
            genres: result.genres.slice(0, 3).join(", "),
            id: result.id,
            url: result.url,
          };
        })
      );
    });
  };

  let searchShow = () => {
    api.searchTvShows(search).then((data) => {
      setSearchData(
        data.map((result: any) => {
          return {
            name: result.show.name,
            image: result.show.image ? (result.image = result.show.image.medium) : (result.image = ""),
            language: result.show.language,
            genres: result.show.genres.slice(0, 3).join(", "),
            id: result.show.id,
          };
        })
      );
    });
  };

  return (
    <>
      <h1>Main Page</h1>
      <SearchBar search={search} setSearch={setSearch} searchShow={searchShow} />
      {searchData.length === 0 ? (
        <ShowsList data={showsData} setPageNumber={setPageNumber} pageNumber={pageNumber} />
      ) : (
        <ShowsSearch data={searchData} />
      )}
    </>
  );
};
