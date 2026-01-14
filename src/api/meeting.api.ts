import { apiClient } from "@/api/client";
import type { CreateMeetingRequest, CreateMeetingResponse } from "@/models/meeting.model";

// 이미지 업로드 API (클라우드 업로드)
export const uploadImage = async (file: File): Promise<string> => {
  try {
    const formData = new FormData();
    formData.append("image", file);

    const response = await apiClient.post<{ imageUrl: string }>(
      "/upload/image", // 클라우드 업로드 API라고 가정
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );

    return response.data.imageUrl;
  } catch (error) {
    console.error("uploadImage error:", error);
    throw error;
  }
};

// 모임 생성 API (JSON 형식)
export const createMeeting = async (data: CreateMeetingRequest): Promise<CreateMeetingResponse> => {
  try {
    const response = await apiClient.post<CreateMeetingResponse>(
      "/meetings",
      {
        title: data.title,
        description: data.description,
        interestIds: data.interestIds, // 배열 그대로
        maxParticipants: data.maxParticipants, // 숫자 그대로
        meetingDate: data.meetingDate,
        address: data.address,
        imageUrl: data.imageUrl, // 클라우드 URL
      }
    );

    return response.data;
  } catch (error) {
    console.error("createMeeting error:", error);
    throw error;
  }
};
