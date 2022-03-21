import React from "react";

import { ShowsPage } from "../pages/ShowsPage";
import { Pagination } from "./Pagination";

export const ShowsList: React.FC<any> = ({ data, pageNumber, setPageNumber }) => {
  return (
    <div>
      <h1>Shows List</h1>
      <Pagination pageNumber={pageNumber} setPageNumber={setPageNumber} />
      {data.map((result: any) => {
        // console.log("result from show list ->", result);
        return (
          <>
            <ShowsPage
              key={result.url}
              name={result.name}
              image={result.image}
              language={result.language}
              genres={result.genres}
              id={result.id}
            />
          </>
        );
      })}
    </div>
  );
};
