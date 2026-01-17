
export interface ChatSender {
  id: number;
  email: string;
  nickname: string | undefined;
  profile_image: string | undefined;
}

export interface ChatMessage {
  id: number;
  content: string;
  senderId: number;
  meetingId: number;
  createdAt: string;

  sender: ChatSender;
}