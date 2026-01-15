import { useQuery } from "@tanstack/react-query";
import { getUserInfo } from "@/api/userInfo.api";

export const useUserInfoQuery = () => {

    return useQuery({
        queryKey: ["user-info"],
        queryFn: getUserInfo,
        staleTime: 1000 * 60 * 60, // 1시간 동안 데이터를 '신선한(fresh)' 상태로 간주
        gcTime: 1000 * 60 * 60 * 24, // 가비지 컬렉션 타임을 24시간으로 설정하여 캐시 유지
        retry: 2, // 실패 시 재시도 횟수 제한
    });
}