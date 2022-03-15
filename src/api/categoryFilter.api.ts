import api from "./axios";

export const getCategoryFiltersApi = async () => {
  const response = await api.get("/filter/getfilterdata");

  return response;
};
