import Axios from "axios";

const api = Axios.create({
  baseURL: "http://localhost:4000",
});

api.interceptors.request.use(async (url: any) => {
  const token = localStorage.getItem("token");

  if (token) {
    url.headers.common.Authorization = `Bearer ${token}`;
  } else {
    url.headers.common.Authorization = '';
  }

  return url;
});

api.interceptors.response.use(
  (response) => response,
  async (error) => {
    // const isErrorStatus = error.response?.status === 400; // обработка должна быть здесь, но я дебил
    // диспатчить валидационную ошибку)))
    return error.response
  }
);

export default api;
