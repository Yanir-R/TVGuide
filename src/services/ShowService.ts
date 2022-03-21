import { http } from "../http-common";

const getAllShows = (pageNumber: number) => {
  return http.get(`/shows?page=` + pageNumber);
};

const searchTvShows = (query: string) => {
  return http.get(`/search/shows?q=${query}`);
};

const showById = (id: string) => {
  return http.get(`/shows/${id}`);
};

export const ShowService = {
  getAllShows,
  searchTvShows,
  showById,
};
