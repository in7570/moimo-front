import { apiClient } from "@/api/client";
import type { MeetingListResponse } from "@/models/meeting.model";

export interface GetMeetingsParams {
  page?: number;
  limit?: number;
  // TODO: 필터링 조건 추가하기
  // interestName?: string;
}

export const getMeetings = async (
  params?: GetMeetingsParams
): Promise<MeetingListResponse> => {
  try {
    const response = await apiClient.get<MeetingListResponse>("/meetings", {
      params: {
        page: params?.page ?? 1,
        limit: params?.limit ?? 10,
        ...params, // 나머지 필터 조건들 포함
      },
    });
    return response.data;
  } catch (error) {
    console.error("getMeetings error:", error);
    throw error;
  }
};
