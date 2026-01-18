import TopicCard from "@features/topics/TopicCard";
import { useInterestQuery } from "@/hooks/useInterestQuery";
import interest_all from '@/assets/images/interests/interest_all.png';

import { Skeleton } from "@/components/ui/skeleton";

function TopicSection() {
  const { data: interests, isLoading, error } = useInterestQuery();

  if (isLoading) {
    return (
      <div className="py-4 pb-8">
        <div className="grid grid-cols-5 gap-2">
          {Array.from({ length: 10 }).map((_, index) => (
            <div key={index} className="flex flex-col items-center justify-center w-full px-12">
              <Skeleton className="w-full aspect-square rounded-full bg-secondary mb-3 border border-gray-200/10" />
              <Skeleton className="h-7 w-full rounded-md bg-secondary/50" />
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (error) return <div>Error loading interests: {error.message}</div>;

  return (
    <div className=" px-4 md:px-8">
      <div className="grid grid-cols-5 gap-10">
        {interests?.slice(0, 9).map((interest) => (
          <TopicCard
            key={interest.id}
            topicName={interest.name}
            to={`/meetings?interestFilter=${interest.id}`}
          />
        ))}
        <TopicCard
          topicName="전체보기"
          to="/interests"
          imageUrl={interest_all}
        />
      </div>
    </div>
  );
}

export default TopicSection;
