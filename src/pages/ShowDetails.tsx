import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { api } from "../api";

export const ShowDetails: React.FC = () => {
  interface ShowDetailsProps {
    name: string;
    image: { medium: string };
    summary: string;
  }

  const [showDetails, setShowDetails] = useState<ShowDetailsProps>({ name: "", summary: "", image: { medium: "" } });
  const { id } = useParams();

  let fetchShowById = (id: any) => {
    api.showById(id).then((data) => {
      console.log("showid data", data);
      setShowDetails(data);
    });
  };

  useEffect(() => {
    fetchShowById(id);
  }, [id]);

  return (
    <>
      <h1>Show Details</h1>
      <h2>Show name - {showDetails.name}</h2>
      <div dangerouslySetInnerHTML={{ __html: showDetails.summary }}></div>
      <img src={showDetails.image.medium} alt="" />
      <Link to="/">Back to home</Link>
    </>
  );
};
