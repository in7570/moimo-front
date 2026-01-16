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
import { useNavigate } from "react-router-dom";

interface LoginRequiredDialogProps {
  open: boolean;
  onOpenChange?: (open: boolean) => void;
  title?: string;
  description?: string;
  showCancel?: boolean;
  onCancel?: () => void;
}

/**
 * 로그인이 필요한 경우 표시하는 공통 다이얼로그
 * 
 * @example
 * // ProtectedRoute에서 사용
 * <LoginRequiredDialog open={true} showCancel={true} onCancel={() => navigate("/")} />
 * 
 * // 일반 컴포넌트에서 사용
 * <LoginRequiredDialog open={showPrompt} onOpenChange={setShowPrompt} />
 */
function LoginRequiredDialog({
  open,
  onOpenChange,
  title = "로그인이 필요해요",
  description = "해당 기능은 로그인 후 이용할 수 있어요.\n로그인 페이지로 이동하시겠습니까?",
  showCancel = true,
  onCancel,
}: LoginRequiredDialogProps) {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/login");
    onOpenChange?.(false);
  };

  const handleCancel = () => {
    if (onCancel) {
      onCancel();
    } else {
      onOpenChange?.(false);
    }
  };

  return (
    <AlertDialog open={open} onOpenChange={onOpenChange}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>{title}</AlertDialogTitle>
          <AlertDialogDescription className="whitespace-pre-line">
            {description}
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          {showCancel && (
            <AlertDialogCancel onClick={handleCancel}>취소</AlertDialogCancel>
          )}
          <AlertDialogAction onClick={handleLogin}>로그인하기</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}

export default LoginRequiredDialog;
