export interface Meeting {
  meetingId: number;
  title: string;
  interestName: string;
  maxParticipants: number;
  currentParticipants: number;
  address: string;
  meetingDate: string;
}

export interface MeetingMeta {
  totalCount: number;
  totalPages: number;
  currentPage: number;
}

export interface MeetingListResponse {
  data: Meeting[];
  meta: MeetingMeta;
}
