import MeetingListSection from "@/components/features/home/MeetingListSection";
import { useIsMobile } from "@/hooks/use-mobile";

function NewMeetingList() {
  const isMobile = useIsMobile();
  const limit = isMobile ? 9 : 8;

  return (
    <MeetingListSection
      title="최근에 생긴 모임"
      queryOptions={{ sort: "NEW", limit }}
      seeMoreHref="/meetings?sort=NEW"
    />
  );
}

export default NewMeetingList;
