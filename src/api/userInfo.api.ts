import { apiClient } from "./client"
import type { UserInfo } from "@/models/user.model";

// 프로필 조회
export const getUserInfo = async () => {
    try {
        const response = await apiClient.get<UserInfo>("/users/me");
        return response.data;
    } catch (error) {
        console.error("getUserInfo error:", error);
        throw error;
    }
}

// 프로필 등록/수정
export const userInfoUpdate = async (data: FormData) => {
    try {
        return apiClient.put("/users/user-update", data);
    } catch (error) {
        console.error("userInfoUpdate error:", error);
        throw error;
    }
}