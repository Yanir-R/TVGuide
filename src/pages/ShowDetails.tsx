import { Card, CardActionArea, CardActions, CardContent, CardMedia, Typography, Stack, Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { api } from "../api";

interface ShowDetailsProps {
  name: string;
  image: { medium: string };
  summary: string;
}

export const ShowDetails: React.FC = () => {
  const [showDetails, setShowDetails] = useState<ShowDetailsProps>({ name: "", summary: "", image: { medium: "" } });
  const { id } = useParams();

  let fetchShowById = (id: any) => {
    api.showById(id).then((data) => {
      setShowDetails(data);
    });
  };

  useEffect(() => {
    fetchShowById(id);
  }, [id]);

  return (
    <>
      <Stack spacing={2} justifyContent="center" alignItems="center">
        <Box sx={{ display: "flex" }} m={2} p={2}>
          <Card sx={{ maxWidth: 350 }}>
            <CardActionArea>
              <CardMedia component="img" height="450" image={showDetails.image.medium} alt={showDetails.name} />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {showDetails.name}
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  dangerouslySetInnerHTML={{ __html: showDetails.summary }}
                ></Typography>
              </CardContent>
            </CardActionArea>
            <CardActions sx={{ m: 1 }}>
              <Link to="/">👉 🏠</Link>
            </CardActions>
          </Card>
        </Box>
      </Stack>
    </>
  );
};
