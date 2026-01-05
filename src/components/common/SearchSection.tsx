import { Button } from "../ui/button";
import { Input } from "../ui/input";

function SearchSection() {
  return (
    <div className="h-[300px]">
      <div className="text-center mt-12 mb-12">
        <p className="text-xl font-bold">
          당신의 관심사로 시작하는 새로운 만남, 어떤 모임을 찾으시나요?
        </p>
      </div>
      <div className="relative w-full max-w-lg bg-card">
        <Input
          type="text"
          placeholder="관심있는 모임 주제를 검색해 보세요"
          className="pl-4 pr-20"
        />
        <Button type="submit" className="absolute top-0 right-0 h-full">
          {/* <Search className="h-4 w-4 mr-2" /> */}
          찾기
        </Button>
      </div>
    </div>
  );
}

export default SearchSection;
