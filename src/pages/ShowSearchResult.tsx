import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { api } from "../api";
import { ShowsPage } from "../components/ShowsPage";
import { Show } from "../react-app-env";
import { ShowService } from "../services/ShowService";

export const ShowSearchResults: React.FC = () => {
  const { search } = useParams();
  const [searchData, setSearchData] = useState<Show[]>([]);

  useEffect(() => {
    searchShow(search);
  }, [search]);

  let searchShow = (search: any) => {
    api.searchTvShows(search).then((data) => {
      setSearchData(data.map(ShowService.normalizeShowData));
    });
  };

  return (
    <>
      <Box m={2} sx={{ display: "flex", flexWrap: "wrap ", p: 1, m: 1 }}>
        {searchData.map((result: Show) => {
          return (
            <ShowsPage
              key={result.id}
              name={result.name}
              image={result.image}
              language={result.language}
              genres={result.genres}
              id={result.id}
              premiered={result.premiered}
              ended={result.ended}
            />
          );
        })}
      </Box>
    </>
  );
};
