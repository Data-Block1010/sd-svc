import { TAuth } from "@/src/lib/types/auth.type";
import { CLIENT } from "../api";
import { handleRequestError } from "../helper";
import DataManagement from "@/app/dashboard/data-management/page";
import { Iwaitlist } from "@/src/lib/types/waitlist.type";

class WaitlistServices {
  async joinWaitlist(data: Iwaitlist) {
    try {
      const response = await CLIENT.post("/api/waitlist/join", data);
      return response.data;
    } catch (error) {
      handleRequestError(error);
    }
  }
}

export default new WaitlistServices();
