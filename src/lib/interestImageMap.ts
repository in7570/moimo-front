// src/lib/interestImageMap.ts
import interest_1 from "@/assets/images/interests/interest_1.webp"; // 인간관계(친목)
import interest_2 from "@/assets/images/interests/interest_2.webp"; // 술
import interest_3 from "@/assets/images/interests/interest_3.webp"; // 자기계발/공부
import interest_4 from "@/assets/images/interests/interest_4.webp"; // 예술
import interest_5 from "@/assets/images/interests/interest_5.webp"; // 스포츠/운동
import interest_6 from "@/assets/images/interests/interest_6.webp"; // 음식
import interest_7 from "@/assets/images/interests/interest_7.webp"; // 라이프
import interest_8 from "@/assets/images/interests/interest_8.webp"; // 공예/만들기
import interest_9 from "@/assets/images/interests/interest_9.webp"; // 책/글쓰기/독서
import interest_10 from "@/assets/images/interests/interest_10.webp"; // 차/음료
import interest_11 from "@/assets/images/interests/interest_11.webp"; // 커리어/직장
import interest_12 from "@/assets/images/interests/interest_12.webp"; // 재테크
import interest_13 from "@/assets/images/interests/interest_13.webp"; // 반려동물
import interest_14 from "@/assets/images/interests/interest_14.webp"; // 게임/액티비티
import interest_15 from "@/assets/images/interests/interest_15.webp"; // 여행
import interest_16 from "@/assets/images/interests/interest_16.webp"; // 심리/상담
import interest_17 from "@/assets/images/interests/interest_17.webp"; // 인테리어/가구
import interest_18 from "@/assets/images/interests/interest_18.webp"; // 건강
import interest_19 from "@/assets/images/interests/interest_19.webp"; // 환경
import interest_20 from "@/assets/images/interests/interest_20.webp"; // 엔터
import interest_21 from "@/assets/images/interests/interest_21.webp"; // 미용
import interest_22 from "@/assets/images/interests/interest_22.webp"; // 트렌드
import interest_23 from "@/assets/images/interests/interest_23.webp"; // 연애/이성관계
import interest_24 from "@/assets/images/interests/interest_24.webp"; // 식물/자연

// API에서 넘어오는 interestName과 실제 이미지 경로를 매핑
// 키 값은 API에서 받을 interestName과 정확히 일치
export const interestImageMap: { [key: string]: string } = {
  "인간관계(친목)": interest_1,
  술: interest_2,
  "자기계발/공부": interest_3,
  예술: interest_4,
  "스포츠/운동": interest_5,
  음식: interest_6,
  라이프: interest_7,
  "공예/만들기": interest_8,
  "책/글쓰기/독서": interest_9,
  "차/음료": interest_10,
  "커리어/직장": interest_11,
  재테크: interest_12,
  반려동물: interest_13,
  "게임/액티비티": interest_14,
  여행: interest_15,
  "심리/상담": interest_16,
  "인테리어/가구": interest_17,
  건강: interest_18,
  환경: interest_19,
  엔터: interest_20,
  미용: interest_21,
  트렌드: interest_22,
  "연애/이성관계": interest_23,
  "식물/자연": interest_24,
};

export const getInterestImageUrl = (interestName: string): string => {
  return interestImageMap[interestName];
};
