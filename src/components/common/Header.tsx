import { Button } from "../ui/button";
import { useAuthStore } from "@/store/authStore";
import { NotificationDropdown } from "./NotificationDropdown";
import { ProfileDropdown } from "./ProfileDropdown";

function Header() {
  const { isLoggedIn } = useAuthStore();
  return (
    <div className="flex items-center w-full h-[67px] bg-card sticky top-0 z-50 shrink-0">
      <Button
        size="lg"
        variant="ghost"
        className="cursor-pointer hover:bg-transparent font-bold text-xl"
      >
        MoiMo
      </Button>
      <div className="flex gap-2 ml-8">
        <Button
          size="default"
          variant="ghost"
          className="cursor-pointer hover:bg-transparent"
        >
          모이머란?
        </Button>
        <Button
          size="default"
          variant="ghost"
          className="cursor-pointer hover:bg-transparent"
        >
          원하는 모임 찾기
        </Button>
      </div>
      {!isLoggedIn ? (
        <div className="ml-auto flex items-center gap-8">
          <NotificationDropdown />
          <ProfileDropdown />
        </div>
      ) : (
        <div className="login ml-auto">
          <Button
            size="default"
            variant="ghost"
            className="cursor-pointer hover:bg-transparent text-sm"
          >
            로그인
          </Button>
        </div>
      )}
    </div>
  );
}

export default Header;
