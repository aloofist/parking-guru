import { ChevronDown } from "lucide-react";
import arrowPattern from "../assets/arrowPattern.svg";
import { useRef } from "react";

export default function ButtonSlider() {
  return (
    <div className="flex flex-col items-center relative">
      {/* dot */}
      <div className="w-4 h-4 rounded-full shrink-0 bg-primary100 top-0 mb-2"></div>
      <div className="w-4 h-4 rounded-full shrink-0 bg-primary100 animate-ping top-0 absolute"></div>

      {/* line */}
      <div className="absolute bg-primary100 w-0.5 h-full"></div>

      {/* pill */}
      <div className="rounded-full border-2 border-primary100 bg-black100 h-50 p-2 mt-5 relative overflow-hidden">
        <div className="bg-white rounded-full p-4 cursor-grab z-10 relative">
          <ChevronDown className="size-6" color="#2A2D2A" />
        </div>
        <img
          src={arrowPattern}
          alt="arrowPattern"
          className="rounded-full z-0 pointer-events-none select-none absolute left-1/2 -translate-x-1/2 -translate-y-1/6"
        />
      </div>
    </div>
  );
}
