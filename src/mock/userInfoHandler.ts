import { http, HttpResponse, delay } from 'msw';
import { httpUrl } from './mockData';

// 추가 정보 핸들러
export const extraInfo = http.put(`${httpUrl}/users/extraInfo`, async ({ request }) => {
    const { bio, interests } = (await request.json()) as any;
    await delay(1000);
    return HttpResponse.json(
        {
            "id": 3,
            "email": "[test5@1example.com](mailto:test5@1example.com)",
            "nickname": "youngjae_dev",
            "bio": bio,
            "interests": interests
        }
    );
});