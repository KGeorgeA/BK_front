import instance from "../axiosInstance";

export type UserLoginData = {
  email: string;
  password: string;
  error?: {
    errCode: unknown; // ???? нужно ли это?
    errMessage: string;
  };
  isLoaded?: boolean;
};

export const userLogin = async (data: UserLoginData) => {
  try {
    await instance.post("/api/login", { data });

    // instance.interceptors.response.use(
    //   (res) => {
    //     console.log("RESPONSE userLogin interceptors response", res);
    //   },
    //   (err) => {
    //     console.log("ERROR userLogin interceptors response", err);
    //   }
    // );
  } catch (error) {
    console.error(error);
  }
};
