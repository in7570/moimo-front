import { useNavigate } from "react-router-dom";
import { useAuthStore } from "@/store/authStore";
import { useAuthQuery } from "@/hooks/useAuthQuery";
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import LoadingSpinner from "../common/LoadingSpinner";

interface ProtectedRouteProps {
    children: React.ReactNode;
}

const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
    const { isLoggedIn } = useAuthStore();
    const { isLoading, isFetching } = useAuthQuery();
    const navigate = useNavigate();

    // 1. 인증 정보 확인 중일 때 (최초 로딩 또는 페이지 새로고침 시 검증 중)
    if (isLoading || isFetching) {
        return (
            <LoadingSpinner />
        );
    }

    if (!isLoggedIn) {
        return (
            <div className="flex items-center justify-center min-h-[400px]">
                <AlertDialog open={true}>
                    <AlertDialogContent>
                        <AlertDialogHeader>
                            <AlertDialogTitle>로그인이 필요한 서비스입니다</AlertDialogTitle>
                            <AlertDialogDescription>
                                이 콘텐츠를 이용하시려면 먼저 로그인해 주세요.
                                로그인 페이지로 이동하시겠습니까?
                            </AlertDialogDescription>
                        </AlertDialogHeader>
                        <AlertDialogFooter>
                            <AlertDialogCancel onClick={() => navigate("/")}>취소</AlertDialogCancel>
                            <AlertDialogAction onClick={() => navigate("/login")}>확인</AlertDialogAction>
                        </AlertDialogFooter>
                    </AlertDialogContent>
                </AlertDialog>
            </div>
        );
    }

    return <>{children}</>;
};

export default ProtectedRoute;
