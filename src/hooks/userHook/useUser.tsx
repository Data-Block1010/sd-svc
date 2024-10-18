import { STORAGE_KEY } from "@/src/lib/types/constant";
import Service from "@/src/services";
import { useQuery } from "@tanstack/react-query";

export const useGetUserDetails = (enabled = false) => {
  return useQuery({
    queryKey: ["useGetUserDetails"],
    refetchOnMount: false,
    queryFn: async () => {
      const response = await Service.UserServices.getUserDetails();
      return response;
    },
  });
};

export const useGetUserDataHashes = (enabled = false) => {
  return useQuery({
    queryKey: ["getUserDataHashes"],
    refetchOnMount: false,
    queryFn: async () => {
      try {
        const response = await Service.UserServices.getUserDataHashes();
        return response.reverse();
      } catch (error) {
        console.log(error);
      }
    },
  });
};
