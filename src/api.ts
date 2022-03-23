import { ShowService } from "./services/ShowService";

export const api = {
  searchTvShows: async (query: string) => {
    try {
      const response = await ShowService.searchTvShows(query);
      const searchShows = await response.data;
      return searchShows;
    } catch (err) {
      console.log("error in api->", err);
    }
  },
  showById: async (id: string) => {
    try {
      const response = await ShowService.showById(id);
      const showById = await response.data;
      return showById;
    } catch (err) {
      console.log("error in api->", err);
    }
  },
  getAllShows: async (pageNumber: number) => {
    try {
      const response = await ShowService.getAllShows(pageNumber + 1 || 1);
      const allShows = await response.data;
      return allShows;
    } catch (err) {
      console.log("error in api->", err);
    }
  },
};
