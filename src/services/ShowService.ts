import { http } from "../http-common";
import { Show } from "../react-app-env";

const getAllShows = (pageNumber: number) => {
  return http.get(`/shows?page=${pageNumber - 1}`);
};

const searchTvShows = (query: string) => {
  return http.get(`/search/shows?q=${query}`);
};

const showById = (id: string) => {
  return http.get(`/shows/${id}`);
};

const normalizeShowData = (data: Show) => {
  return {
    name: data.name || data.show?.name,
    image: data.image ? data.image.medium : "" || data.show?.image?.medium ? data.show?.image?.medium : "",
    genres: data?.genres?.slice(0, 3).join(", ") || data?.show?.genres?.slice(0, 3).join(", ") || "No Genres Found",
    language: data.language || data.show?.language,
    id: data.id || data.show?.id,
    premiered: data.premiered || data?.show?.premiered || "No Premiered Found",
    ended: data.ended || data?.show?.ended || "No End Date Found",
  };
};

export const ShowService = {
  getAllShows,
  searchTvShows,
  showById,
  normalizeShowData,
};
