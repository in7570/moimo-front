import type { LoginFormValues } from "@/pages/user/Login";
import axios from "axios";

export interface UserResponse {
    user: {
        id: string;
        email: string;
        username: string;
    };
    token: string;
}

const api = axios.create({
    baseURL: "/",
});

export const login = async (data: LoginFormValues): Promise<UserResponse> => {
    const response = await api.post("/users/login", data);
    return response.data;
};

export const join = async (data: any): Promise<{ message: string }> => {
    const response = await api.post("/users/join", data);
    return response.data;
};

export const checkEmail = async (data: { email: string }): Promise<{ available: boolean }> => {
    const response = await api.post("/users/check-email", data);
    return response.data;
};

export const checkNickname = async (data: { nickname: string }): Promise<{ available: boolean }> => {
    const response = await api.post("/users/check-nickname", data);
    return response.data;
};

export const findPassword = async (data: { email: string }): Promise<{ message: string }> => {
    const response = await api.post("/users/passwordFind", data);
    return response.data;
};

export const resetPassword = async (data: any): Promise<{ message: string }> => {
    const response = await api.post("/users/passwordReset", data);
    return response.data;
};

export const googleLogin = async (token: string): Promise<UserResponse> => {
    const response = await api.post("/users/login/google", { token });
    return response.data;
};
