import { useMutation, useQueryClient } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { userInfoUpdate } from "@/api/userInfo.api";


export const useUserUpdateMutation = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: async (data: FormData) => {
            return await userInfoUpdate(data);
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["user-info"] });
        },
        onError: (error: AxiosError<{ message: string }>) => {
            console.error(error);
        }
    })
}