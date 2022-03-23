import { TextField, Stack } from "@mui/material";
import React, { ChangeEvent, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

export const SearchBar: React.FC<{}> = () => {
  const [search, setSearch] = useState("");
  const { pathname } = useLocation();
  const searchHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const clearSearch = () => {
    setSearch("");
  };
  useEffect(() => {
    clearSearch();
  }, [pathname]);

  return (
    <Stack spacing={2} direction="row" justifyContent="center" alignItems="center">
      <TextField
        size="small"
        type="text"
        value={search}
        onChange={searchHandler}
        label="Search For A Show Here 👇"
        color="info"
        focused
      />
      <Link to={`/search-results/${search}`}>🔎</Link>
    </Stack>
  );
};
