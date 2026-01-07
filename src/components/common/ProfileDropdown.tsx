import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { AiOutlineUser, AiOutlineTeam } from "react-icons/ai";
import { LuLogOut } from "react-icons/lu";
import { useAuthStore } from "@/store/authStore";

export const ProfileDropdown = () => {
  const { username } = useAuthStore();
  const userAvatarUrl = "";
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 rounded-full">
          <Avatar>
            <AvatarImage src={userAvatarUrl} alt="User Avatar" />
            <AvatarFallback>USER</AvatarFallback>
          </Avatar>
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="end">
        <DropdownMenuLabel>{username} 님</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="flex gap-1">
          <AiOutlineUser />
          마이페이지
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="flex gap-1">
          <AiOutlineTeam />내 모임
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="flex gap-1">
          <LuLogOut />
          로그아웃
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
