import { http, HttpResponse, delay } from 'msw';
import { httpUrl } from './mockData';

// 데이터 유지를 위한 Mock 상태 관리
let mockUserInfo = {
    id: 3,
    email: "user@example.com",
    nickname: "userNickname",
    bio: "나야 나",
    interests: [
        { id: 1, name: "인간관계(친목)" },
        { id: 2, name: "술" },
        { id: 3, name: "자기계발/공부" }
    ],
    image: "https://picsum.photos/id/111/300/300"
};

const getUserInfo = http.get(`${httpUrl}/users/me`, async ({ request }) => {
    try {
        const authHeader = request.headers.get('Authorization');
        if (!authHeader) {
            return new HttpResponse(null, { status: 401 });
        }

        console.log("User Info (Token Based):", {
            token: authHeader
        });

        await delay(1000);
        return HttpResponse.json(mockUserInfo);
    } catch (error) {
        console.error("getUserInfo handler error:", error);
        return new HttpResponse(null, { status: 500 });
    }
})

const userUpdate = http.put(`${httpUrl}/users/user-update`, async ({ request }) => {
    try {
        const authHeader = request.headers.get('Authorization');
        if (!authHeader) {
            return new HttpResponse(null, { status: 401 });
        }

        const formData = await request.formData();
        const bio = formData.get("bio") as string;
        const interestsString = formData.get("interests") as string;
        const interests = interestsString ? JSON.parse(interestsString) : [];
        const file = formData.get("image"); // ProfileModal에서 "image"로 보내고 있음

        console.log("Joined User Extra Info (Token Based):", {
            bio,
            interests,
            file,
            token: authHeader
        });

        // Mock 상태 업데이트
        mockUserInfo = {
            ...mockUserInfo,
            bio: bio || mockUserInfo.bio,
            interests: interests.map((name: string, index: number) => ({ id: index + 100, name })),
        };

        // 이미지 파일이 있는 경우 (Mock에서는 URL 처리 생략 또는 가짜 URL)
        if (file && file instanceof File) {
            mockUserInfo.image = URL.createObjectURL(file);
        }

        await delay(1000);
        return HttpResponse.json(mockUserInfo);
    } catch (error) {
        console.error("userUpdate handler error:", error);
        return new HttpResponse(null, { status: 500 });
    }
});

export const userInfoHandler = [
    getUserInfo,
    userUpdate
];