import JoinedMeetingsList from "@/components/features/meetings/JoinedMeetingsList";
import PendingMeetingsList from "@/components/features/meetings/PendingMeetingsList";
import PopularMeetingList from "@/components/features/meetings/PopularMeetingList";
import SearchSection from "@/components/features/search/SearchSection";
import TopicSection from "@/components/features/topics/TopicSection";
import { useAuthStore } from "@/store/authStore";

function Home() {
  const { isLoggedIn } = useAuthStore();
  return (
    <div className="flex flex-col justify-center items-center">
      <SearchSection />
      <div className="flex flex-col pt-8 items-center w-full bg-card">
        <TopicSection />
        {isLoggedIn && (
          <>
            <JoinedMeetingsList />
            <PendingMeetingsList />
          </>
        )}
        <PopularMeetingList />
      </div>
    </div>
  );
}

export default Home;
