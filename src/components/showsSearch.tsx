import React from "react";

import { ShowsPage } from "../pages/ShowsPage";

export const ShowsSearch: React.FC<any> = ({ data }) => {
  return (
    <div>
      <h1>Shows List</h1>

      {data.map((result: any) => {
        // console.log("result from show list ->", result);
        return (
          <ShowsPage
            key={result.id}
            name={result.name}
            image={result.image}
            language={result.language}
            genres={result.genres}
            id={result.id}
          />
        );
      })}
    </div>
  );
};
