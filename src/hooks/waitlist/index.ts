import { Iwaitlist } from "@/src/lib/types/waitlist.type";
import Service from "@/src/services";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";

export const useJoinWaitlistMutation = () => {
  return useMutation({
    mutationFn: (data: Iwaitlist) => {
      return Service.WaitlistServices.joinWaitlist(data);
    },
    onSuccess: (data, variables, context) => {
      toast.success("Joined waitlist successfully");
    },
  });
};
