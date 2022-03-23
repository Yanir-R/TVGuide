import { TextField, Stack } from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";

export const SearchBar: React.FC<{}> = () => {
  const [search, setSearch] = useState("");

  const searchHandler = (e: any) => {
    setSearch(e.target.value);
  };

  return (
    <Stack spacing={2} direction="row" justifyContent="center" alignItems="center">
      <TextField
        size="small"
        type="text"
        value={search}
        onChange={searchHandler}
        label="Search For A Show here 👇"
        color="info"
        focused
      />
      <Link to={`/search-results/${search}`}>🔎</Link>
    </Stack>
  );
};
