import { useQuery } from "@tanstack/react-query";
import { verifyUser } from "@/api/auth.api";
import { useAuthStore } from "@/store/authStore";

export const useAuthQuery = () => {
    return useQuery({
        queryKey: ["authUser"],
        queryFn: async () => {
            const { accessToken: currentToken, storeLogin, storeLogout, isLoggedIn } = useAuthStore.getState();
            console.log("[useAuthQuery] Starting verification. Current token exists:", !!currentToken, "isLoggedIn:", isLoggedIn);

            try {
                const verifyUserInfo = await verifyUser();
                console.log("[useAuthQuery] Verification response:", verifyUserInfo);

                if (verifyUserInfo.authenticated) {
                    // 중요: 인터셉터가 토큰을 갱신했을 수 있으므로 최신 상태를 확인합니다.
                    const latestToken = useAuthStore.getState().accessToken;
                    const tokenToStore = verifyUserInfo.accessToken || latestToken || currentToken;

                    if (!tokenToStore) {
                        console.warn("[useAuthQuery] Verification succeeded but no token found everywhere.");
                    }

                    console.log("[useAuthQuery] Updating session. Nickname:", verifyUserInfo.user.nickname);
                    storeLogin(verifyUserInfo.user.nickname, tokenToStore!);
                    return verifyUserInfo;
                }

                console.log("[useAuthQuery] Verification failed. Logged in state:", isLoggedIn);
                if (isLoggedIn) {
                    console.log("[useAuthQuery] Performing storeLogout due to verification failure");
                    storeLogout();
                }
                return null;
            } catch (error) {
                console.error("[useAuthQuery] Error during verification:", error);
                if (isLoggedIn) {
                    storeLogout();
                }
                return null;
            }
        },
        // 사용자가 앱을 사용하는 동안 인증 상태를 유지하기 위해 staleTime 설정
        staleTime: 1000 * 60 * 30, // 30분
        retry: false, // 인증 실패 시 반복 요청 방지
    });
};
