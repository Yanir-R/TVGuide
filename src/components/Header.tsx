import { CardMedia, Box } from "@mui/material";
import React from "react";
import { SearchBar } from "./SearchBar";
import { emphasize, styled } from "@mui/material/styles";
import Chip from "@mui/material/Chip";
import { Link } from "react-router-dom";

export const Header: React.FC = () => {
  return (
    <>
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        m={2}
      
      >
      <Link to={"/"}>
        <Box sx={{ width: "100%",m:2 ,p:2 }}>
          <CardMedia
            component="img"
            image="https://image.winudf.com/v2/image1/dXNhLmplcnNleS50dmxpc3RpbmdzX2ljb25fMTU2NjQzOTI2NV8wMTY/icon.png?w=170&fakeurl=1"
          />
        </Box>
      </Link>
      <SearchBar />
      </Box>
    </>
  );
};
