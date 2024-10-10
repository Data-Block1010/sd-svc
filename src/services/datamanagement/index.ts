import { TAuth } from "@/src/lib/types/auth.type";
import { CLIENT } from "../api";
import { handleRequestError } from "../helper";
import DataManagement from "@/app/dashboard/data-management/page";

class DataManagementService {
  async storeData(data: any) {
    try {
      const response = await CLIENT.post("/store-data", data, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      return response.data;
    } catch (error) {
      handleRequestError(error);
    }
  }

  async updateData(data: any) {
    try {
      const response = await CLIENT.post("/update-data", data, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      return response.data;
    } catch (error) {
      handleRequestError(error);
    }
  }

  async deleteData(data: any) {
    try {
      const response = await CLIENT.post("/delete-data", data);
      return response.data;
    } catch (error) {
      handleRequestError(error);
    }
  }

  async viewData(data: any) {
    try {
      const response = await CLIENT.post("/view-data", data);
      return response.data;
    } catch (error) {
      handleRequestError(error);
    }
  }
}

export default new DataManagementService();
