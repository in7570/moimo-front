import type { LoginFormValues } from "@/pages/user/Login";
import { apiClient } from "./client";
import type { JoinFormValues } from "@/pages/user/Join";

export interface UserResponse {
    user: {
        id: string;
        email: string;
        username: string;
    };
    token: string;
}

export const login = async (data: LoginFormValues): Promise<UserResponse> => {
    const response = await apiClient.post("/users/login", data);
    return response.data;
};

export const join = async (data: JoinFormValues): Promise<{ message: string }> => {
    const response = await apiClient.post("/users/register", data);
    return response.data;
};

export const checkEmail = async (data: { email: string }) => {
    const response = await apiClient.post("/users/check-email", data);
    return response.data;
};

export const checkNickname = async (data: { nickname: string }) => {
    const response = await apiClient.post("/users/check-nickname", data);
    return response.data;
};

export const findPassword = async (data: { email: string }): Promise<{ message: string }> => {
    const response = await apiClient.post("/users/find-password", data);
    return response.data;
};

export const resetPassword = async (data: any): Promise<{ message: string }> => {
    const response = await apiClient.post("/users/reset-password", data);
    return response.data;
};

export const googleLogin = async (token: string): Promise<UserResponse> => {
    const response = await apiClient.post("/users/login/google", { token });
    return response.data;
};
