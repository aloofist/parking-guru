import { ChevronDown } from "lucide-react";
import {
  useEffect,
  useRef,
  useState,
  type PointerEvent as ReactPointerEvent,
} from "react";
import arrowPattern from "../assets/arrowPattern.svg";

interface ButtonSliderProps {
  onComplete?: () => void;
}

export default function ButtonSlider({ onComplete }: ButtonSliderProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [offsetY, setOffsetY] = useState(8);
  const [isLocked, setIsLocked] = useState(false);
  const [hasCompleted, setHasCompleted] = useState(false);

  const maxOffset = 128;

  const updateOffset = (clientY: number) => {
    const rect = trackRef.current?.getBoundingClientRect();

    if (!rect) {
      return;
    }

    const nextOffset = Math.min(Math.max(clientY - rect.top, 8), maxOffset);
    setOffsetY(nextOffset);
    setIsLocked(nextOffset >= maxOffset - 8);
  };

  const handlePointerDown = (event: ReactPointerEvent<HTMLDivElement>) => {
    event.currentTarget.setPointerCapture(event.pointerId);
    updateOffset(event.clientY);
  };

  const handlePointerMove = (event: ReactPointerEvent<HTMLDivElement>) => {
    if (event.buttons === 0) {
      return;
    }

    updateOffset(event.clientY);
  };

  const handlePointerUp = (event: ReactPointerEvent<HTMLDivElement>) => {
    if (offsetY < maxOffset - 8) {
      setOffsetY(8);
      setIsLocked(false);
      setHasCompleted(false);
    } else {
      setOffsetY(maxOffset);
      setIsLocked(true);
    }

    event.currentTarget.releasePointerCapture(event.pointerId);
  };

  useEffect(() => {
    if (!isLocked) {
      setHasCompleted(false);
      return;
    }

    if (hasCompleted) {
      return;
    }

    const timer = window.setTimeout(() => {
      setHasCompleted(true);
      onComplete?.();
    }, 1000);

    return () => window.clearTimeout(timer);
  }, [hasCompleted, isLocked, onComplete]);

  return (
    <div className="flex flex-col items-center relative">
      <div className="w-4 h-4 rounded-full shrink-0 bg-primary100 top-0 mb-2"></div>
      <div className="w-4 h-4 rounded-full shrink-0 bg-primary100 animate-ping top-0 absolute"></div>

      <div className="absolute bg-primary100 w-0.5 h-full"></div>

      <div
        ref={trackRef}
        className="rounded-full border-2 border-primary100 bg-black100 h-50 p-2 mt-5 relative overflow-hidden"
      >
        <div className="rounded-full p-4 cursor-grab z-10 relative">
          <ChevronDown className="size-6" color="#2A2D2A" />
        </div>

        <div
          className="absolute left-1/2 z-10 cursor-grab transition-[top] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]"
          style={{
            top: `${offsetY}px`,
            transform: "translateX(-50%)",
            touchAction: "none",
          }}
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onPointerLeave={handlePointerUp}
        >
          <div
            className={`rounded-full p-4 ${isLocked ? "bg-primary100" : "bg-white"}`}
          >
            <ChevronDown className="size-6" color="#2A2D2A" />
          </div>
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
