import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { userInfoUpdate } from "@/api/userInfo.api";
import type { UserInfoFormValues } from "@/pages/user/UserInfo";

export const useUserUpdateMutation = () => {
    return useMutation({
        mutationFn: async (data: UserInfoFormValues) => {
            return await userInfoUpdate(data);
        },
        onError: (error: AxiosError<{ message: string }>) => {
            console.error(error);
        }
    })
}