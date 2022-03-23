import React from "react";
import { Box } from "@mui/material";
import { ShowsPage } from "./ShowsPage";
import { Show } from "../react-app-env";

export const ShowsList: React.FC<{
  showsData: Show[];
}> = ({ showsData }) => {
  return (
    <Box m={2} sx={{ display: "flex", flexWrap: "wrap ", p: 1, m: 1 }}>
      <>
        {showsData.map((result: Show) => {
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
      </>
    </Box>
  );
};
