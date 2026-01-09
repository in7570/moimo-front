import type { ExtraInfoFormValues } from "@/pages/user/ExtraInfo"
import { apiClient } from "./client"

export const extraInfo = async (data: ExtraInfoFormValues) => {
    try {
        return apiClient.put("/users/extraInfo", data)
    } catch (error) {
        console.error("extraInfo error:", error)
        throw error
    }
}