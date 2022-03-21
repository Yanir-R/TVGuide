import React from "react";
import { Link } from "react-router-dom";

export const ShowsPage: React.FC<any> = ({ name, image, language, genres, id }) => {
  function imageErrorHandler(e: React.SyntheticEvent<HTMLImageElement, Event>) {
    const el = e.target as HTMLImageElement;
    // el.src = "https://via.placeholder.com/210x295.png?text=No+Image"
    el.onerror = null;
    el.src = "https://t4.ftcdn.net/jpg/04/00/24/31/360_F_400243185_BOxON3h9avMUX10RsDkt3pJ8iQx72kS3.jpg";
  }

  return (
    <div>
      <h1>Shows Page</h1>
      <ul key={id}>
        <li>name: {name}</li>
        <li>{<img src={image} alt="" onError={imageErrorHandler} />}</li>
        <li>language: {language}</li>
        <li>genres: {genres}</li>
        <Link to={`/show-details/${id}`}>more info</Link>
      </ul>
    </div>
  );
};
