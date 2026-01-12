import type { UserInfoFormValues } from "@/pages/user/UserInfo"
import { apiClient } from "./client"

export const userInfoUpdate = async (data: UserInfoFormValues) => {
    try {
        return apiClient.put("/users/user-update", data);
    } catch (error) {
        console.error("userInfoUpdate error:", error);
        throw error;
    }
}