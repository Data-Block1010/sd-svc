import CONFIG from "@/config/config";
import axios, { AxiosRequestConfig } from "axios";
import { toast } from "sonner";

import parseError from "../lib/parseErrorr";
import { STORAGE_KEY } from "../lib/types/constant";

export const CLIENT = axios.create({
  baseURL: CONFIG.API_BASE_URL,
  headers: {
    "content-type": "application/json",
  },
});
// @ts-ignore
CLIENT.interceptors.request.use(async (config: AxiosRequestConfig) => {
  if (typeof window === "undefined") return;
  const localStoreString = localStorage.getItem(STORAGE_KEY + "_details");
  if (localStoreString === undefined || localStoreString === null)
    return config;

  const localStore = JSON.parse(localStoreString);

  const accessToken = localStore;

  const newConfig: AxiosRequestConfig = {
    ...config,
    headers: {
      ...config.headers,
      Authorization: `Bearer ${accessToken}`,
    },
  };

  return newConfig;
});
// // Add a response interceptor
CLIENT.interceptors.response.use(
  function (response) {
    // Do something with response data
    return response;
  },
  async function (error) {
    // Do something with response error
    const { errorMessage, id } = parseError(error);
    toast.error(errorMessage);
    if (
      error?.response?.request?.status === 401 &&
      errorMessage === "Unauthorized"
    ) {
      // console.log('error 401', error?.response?.request?.status)
      localStorage.removeItem(`${STORAGE_KEY}_details`);
      // toast.error("Logged out!");
      window.location.href = "/login";
    }

    return Promise.reject(error);
  }
);
