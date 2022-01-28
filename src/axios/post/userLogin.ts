import instance from "../axiosInstance";

// instance.interceptors.request.use((req) => console.log('hi from postUser'), (err) => console.log('smthng went wrong in postUser', err));
export type UserLoginData = {
  email: string;
  password: string;
  error?: {
    errCode: unknown; // ???? нужно ли это?
    errMessage: string;
  };
  isLoaded?: boolean;
};

export const userLogin = async (data: UserLoginData) =>
  await instance.post("/login", { data });

instance.interceptors.response.use(
  (res) => {
    console.log(res.data);
  },
  (err) => {
    console.log(err);
  }
);
