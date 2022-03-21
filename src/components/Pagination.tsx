import React from "react";

export const Pagination = React.memo(({ pageNumber, setPageNumber }: any) => {

  const onNextPage = (): void => {
    setPageNumber(pageNumber + 1);
  };

  const onPreviousPage = (): void => {
    if (pageNumber === 1) return;
    setPageNumber(pageNumber - 1);
  };

  // const totalPages = Math.ceil(totalShows / showPerPage);

  return (
    <div>
      <button onClick={() => onPreviousPage()}>Previous</button>
      <button onClick={() => onNextPage()}>Next</button>
      <p>Page {pageNumber}</p>
      {/* <p>Total pages {totalPages}</p> */}
    </div>
  );
});
