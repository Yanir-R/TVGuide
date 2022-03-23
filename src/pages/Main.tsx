import React, { useEffect, useState } from "react";
import { api } from "../api";
import { ShowsList } from "../components/ShowsList";
import { ShowService } from "../services/ShowService";
import { Show } from "../react-app-env";
import { Paginate } from "../components/Paginate";
import { Grid, LinearProgress } from "@mui/material";

export const Main: React.FC = () => {
  const [showsData, setShowsData] = useState<Show[]>([]);
  const [pageNumber, setPageNumber] = useState(1);

  const fetchShowsData = async (pageNumber: number) => {
    await api.getAllShows(pageNumber).then((data) => {
      setShowsData(data.map(ShowService.normalizeShowData));
    });
  };

  useEffect(() => {
    fetchShowsData(pageNumber);
  }, [pageNumber]);

  return (
    <>
      <Grid container justifyContent="center" alignItems="center">
        <Grid item xs={12}>
          {showsData.length > 0 ? (
            <>
              <Paginate setPageNumber={setPageNumber} />
              <ShowsList showsData={showsData} />
            </>
          ) : (
            <Grid
              sx={{
                margin: "auto",
                padding: "5rem",
                maxWidth: 500,
              }}
            >
              <LinearProgress />
            </Grid>
          )}
        </Grid>
      </Grid>
    </>
  );
};
