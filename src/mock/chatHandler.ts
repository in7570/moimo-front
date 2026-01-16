import { http, HttpResponse, delay } from "msw";
import { httpUrl } from "./mockData";

const getMessages = http.get(
  `${httpUrl}/chats/:meetingId/messages`,
  async () => {
    await delay(300);
    return HttpResponse.json([
      {
        id: 1,
        content: "안녕하세요! 모임 관련해서 궁금한 게 있습니다.",
        senderId: 101,
        meetingId: 201,
        createdAt: new Date(Date.now() - 1000 * 60 * 60).toISOString(), // 1시간 전
        sender: {
          id: 101,
          email: "opponent1@example.com",
          nickname: "상대방1",
          image: "https://github.com/shadcn.png", // 백엔드는 image로 줌
        },
      },
      {
        id: 2,
        content: "반갑습니다! 어떤 점이 궁금하신가요?",
        senderId: 3, // 내 ID (테스터)
        meetingId: 201,
        createdAt: new Date().toISOString(),
        sender: {
          id: 3,
          email: "moimo@email.com",
          nickname: "테스터",
          image: "https://picsum.photos/id/111/300/300",
        },
      },
    ]);
  }
);

// 채팅방 목록 (참여 중인 모임) Mock
const getChatRooms = http.get(
  `${httpUrl}/users/me/participations`,
  async () => {
    await delay(300);
    return HttpResponse.json([
      {
        meeting: {
          id: 201,
          title: "주말 하이킹 모임",
          image: "https://picsum.photos/id/10/200/200",
        },
      },
      {
        meeting: {
          id: 202,
          title: "코딩 스터디",
          image: "https://picsum.photos/id/20/200/200",
        },
      },
    ]);
  }
);

export const chatHandler = [getMessages, getChatRooms];
