import { usePRouter } from "@/config/provider";
import { TAuth } from "@/src/lib/types/auth.type";
import { STORAGE_KEY } from "@/src/lib/types/constant";
import Service from "@/src/services";
import { useMutation } from "@tanstack/react-query";

import { toast } from "sonner";

export const useSignUpMutation = () => {
  return useMutation({
    mutationFn: (data: TAuth) => {
      return Service.AuthService.signUp(data);
    },
    onSuccess: (data, variables, context) => {
      toast.success(
        "User registered successfully, please login with your details"
      );
    },
  });
};

export const useSignInMutation = () => {
  const router = usePRouter();

  return useMutation({
    mutationFn: (data: TAuth) => {
      return Service.AuthService.signIn(data);
    },
    onSuccess: (data, variables, context) => {
      if (!data) return;
      toast.success("Logged in successfully");
      localStorage.setItem(
        `${STORAGE_KEY}_details`,
        JSON.stringify(data.token)
      );
      router.push("/dashboard/overview");
    },
    mutationKey: ["signin"],
  });
};
