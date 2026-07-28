import { useNavigate } from "react-router";
import { type LucideIcon } from "lucide-react";

type ButtonProps = {
  text?: string;
  route?: string;
  lucide_icon?: LucideIcon;
};

export default function Button({ text, route, lucide_icon: LucideIcon }: ButtonProps) {
  const navigate = useNavigate();

  const handleNavigation = () => {
    if (route) {
      navigate(route);
    }
  };
  return (
    <button
      onClick={handleNavigation}
      className="bg-primary200 text-textBlack py-2 rounded-lg shadow-[0_0_5px_0] shadow-primary80 cursor-pointer w-full text-base z-10 flex items-center justify-center gap-2"
    >
      {text}
      {LucideIcon && <LucideIcon/>}
    </button>
  );
}
