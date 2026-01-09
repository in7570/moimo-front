import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { type ExtraInfoFormValues } from "@/pages/user/ExtraInfo";
import { extraInfo } from "@/api/userInfo.api";

export const useExtraInfoMutation = () => {
    return useMutation({
        mutationFn: async (data: ExtraInfoFormValues) => {
            return await extraInfo(data);
        },
        onError: (error: AxiosError<{ message: string }>) => {
            console.error(error);
        }
    })
}