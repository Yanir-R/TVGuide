import { Box, Card, CardContent, CardHeader, CardMedia, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { Show } from "../react-app-env";

export const ShowsPage: React.FC<Show> = ({ name, image, language, genres, id, ended, premiered }) => {
  return (
    <Box m={5} p={1} sx={{ display: "flex", width: 250 }}>
      <Card>
        <CardHeader title={name} subheader={`premiered- ${premiered}`}></CardHeader>
        <Link to={`/show-details/${id}`}>
          <CardMedia
            component="img"
            height="350"
            image={image ? image : ("https://via.placeholder.com/210x295.png?text=No+Image" as any)}
            loading="lazy"
          />
        </Link>
        <CardContent>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            Language: {language}
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            Genres: {genres} <br></br>
            End: {ended}
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
};
