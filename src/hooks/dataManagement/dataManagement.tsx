import { usePRouter } from "@/config/provider";
import { TAuth } from "@/src/lib/types/auth.type";
import { STORAGE_KEY } from "@/src/lib/types/constant";
import Service from "@/src/services";
import { useMutation } from "@tanstack/react-query";

import { toast } from "sonner";

export const useStoreDataMutation = () => {
  return useMutation({
    mutationFn: (data: { file: File; secret: string }) => {
      return Service.DataManagementService.storeData(data);
    },
    onSuccess: (data, variables, context) => {
      // toast.success("File uploaded successfully");
    },
  });
};

export const useUpdateDataMutation = () => {
  return useMutation({
    mutationFn: (data: {
      file: File;
      secret: string;
      username: string;
      cid: string;
    }) => {
      return Service.DataManagementService.updateData(data);
    },
    onSuccess: (data, variables, context) => {
      // toast.success("File uploaded successfully");
    },
  });
};

export const useDeleteDataMutation = () => {
  return useMutation({
    mutationFn: (data: { cid: string }) => {
      return Service.DataManagementService.deleteData(data);
    },
    onSuccess: (data, variables, context) => {
      // toast.success("File uploaded successfully");
    },
  });
};

export const useViewDataMutation = () => {
  return useMutation({
    mutationFn: (data: { file: any; secret: string }) => {
      return Service.DataManagementService.viewData(data);
    },
    onSuccess: (data, variables, context) => {
      // toast.success("File uploaded successfully");
    },
  });
};

// export const useSignInMutation = () => {
//   const router = usePRouter();

//   return useMutation({
//     mutationFn: (data: TAuth) => {
//       return Service.AuthService.signIn(data);
//     },
//     onSuccess: (data, variables, context) => {
//       console.log("successful signup", data, variables, context);
//       toast.success("Logged in successfully");
//       localStorage.setItem(
//         `${STORAGE_KEY}_details`,
//         JSON.stringify(data.token)
//       );
//       router.push("/dashboard/data-management");
//     },
//     mutationKey: ["signin"],
//   });
// };
