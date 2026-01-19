import MeetingList from "@/components/features/home/MeetingList";
import { useMeQuery } from "@/hooks/useMeQuery";
import LoadingSpinner from "@/components/common/LoadingSpinner";
import { Link } from "react-router-dom";

function HostedMeetingsList() {
  const { meetings, isLoading, isError, error } = useMeQuery(
    "hosted",
    "all",
    1,
    4,
  );

  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (isError) {
    return (
      <p className="text-center text-red-500">
        모임을 불러오는 중 에러가 발생했습니다: {error?.message}
      </p>
    );
  }

  if (!isLoading && (!meetings || meetings.length === 0)) {
    return null;
  }

  return (
    <div className="w-full max-w-6xl mx-auto py-8 pt-12">
      <div className="flex justify-between w-full mb-4">
        <div className="text-xl font-bold ">내 모임 한눈에 보기</div>
        <Link to="/mypage/meetings/hosting" className="text-sm cursor-pointer">
          전체보기
        </Link>
      </div>
      <MeetingList meetings={meetings} />
    </div>
  );
}

export default HostedMeetingsList;
