import TopicCard from "@features/topics/TopicCard";
import { useInterestQuery } from "@/hooks/useInterestQuery";

function TopicSection() {
  const { data: interests, isLoading, error } = useInterestQuery();

  if (isLoading) return <div>Loading interests...</div>;
  if (error) return <div>Error loading interests: {error.message}</div>;

  return (
    <div className="py-4">
      <div className="grid grid-cols-5 gap-3">
        {interests?.slice(0, 9).map((interest) => (
          <TopicCard
            key={interest.id}
            topicName={interest.name}
            to={`/meetings?interestFilter=${interest.id}`}
            imageUrl={""} // TODO: 추후에 이미지 링크 추가
          />
        ))}
        <TopicCard topicName="전체보기" to="/interests" />
      </div>
    </div>
  );
}

export default TopicSection;
