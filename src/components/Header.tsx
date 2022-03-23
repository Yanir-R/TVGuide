import { Breadcrumbs, Stack, Typography } from "@mui/material";
import React from "react";
import { SearchBar } from "./SearchBar";
import { emphasize, styled } from "@mui/material/styles";
import Chip from "@mui/material/Chip";

export const Header: React.FC = () => {
  const StyledBreadcrumb = styled(Chip)(({ theme }) => {
    const backgroundColor = theme.palette.mode === "light" ? theme.palette.grey[100] : theme.palette.grey[800];
    return {
      backgroundColor,
      height: theme.spacing(3),
      color: theme.palette.text.primary,
      fontWeight: theme.typography.fontWeightRegular,
      fontSize: theme.typography.pxToRem(20),
      "&:hover, &:focus": {
        backgroundColor: emphasize(backgroundColor, 0.1),
      },
      "&:active": {
        boxShadow: theme.shadows[1],
        backgroundColor: emphasize(backgroundColor, 0.12),
      },
    };
  }) as typeof Chip;

  return (
    <>
      <Breadcrumbs aria-label="breadcrumb">
        <StyledBreadcrumb component="a" href="/" label="Home" />
        <StyledBreadcrumb component="a" href="/search=results" label="Search" />
      </Breadcrumbs>
      <Stack spacing={2} justifyContent="center" alignItems="center">
        <Typography variant="h1" component="h1" gutterBottom mt={2} color="primary">
          TV Guild
        </Typography>
        <SearchBar />
      </Stack>
    </>
  );
};
