import { Pagination, Stack } from "@mui/material";
import React from "react";

export const Paginate = React.memo<{
  setPageNumber: React.Dispatch<React.SetStateAction<number>>;
}>(({ setPageNumber }) => {
  
  const handlePageChange = (event: React.ChangeEvent<unknown>, value: number): void => {
    setPageNumber(value);
  };

  return (
    <Stack m={2} p={2} direction="row" justifyContent="center" alignItems="center">
      <Pagination onChange={handlePageChange} count={99} variant="outlined" color="primary" />
    </Stack>
  );
});
