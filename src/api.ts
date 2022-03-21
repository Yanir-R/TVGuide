import { ShowService } from "./services/ShowService";

export const api = {
  searchTvShows: async (query: string) => {
    try {
      const response = await ShowService.searchTvShows(query);
      const searchShows = await response.data;
      //   console.log("shows search data->", searchShows);
      return searchShows;
    } catch (err) {
      console.log("error in api->", err);
    }
  },

  showById: async (id: string) => {
    try {
      const response = await ShowService.showById(id);
      const showById = await response.data;
      console.log("show by id data->", showById);
      return showById;
    } catch (err) {
      console.log("error in api->", err);
    }
  },
  getAllShows: async (pageNumber: number) => {
    try {
      const response = await ShowService.getAllShows(pageNumber + 1 || 1);
      const allShows = await response.data;
      // console.log("all shows data->", allShows);
      return allShows;
    } catch (err) {
      console.log("error in api->", err);
    }
  },
};
