import PopularMeetingList from "@/components/common/PopularMeetingList";
import SearchSection from "@/components/common/SearchSection";
import TopicSection from "@/components/common/TopicSection";
// import { Search } from "lucide-react";

function Home() {
  return (
    <div className="flex flex-col justify-center items-center">
      <SearchSection />
      <div className="flex flex-col pt-8 items-center w-full bg-card h-[1100px]">
        <TopicSection />
        <PopularMeetingList />
      </div>
    </div>
  );
}

export default Home;
