import { VscLoading } from "react-icons/vsc";
import { cn } from "../../lib/utils";

const LoadingScreen = ({
  displayedText = "Memuat Halaman...",
  className,
}: {
  displayedText?: string;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "w-full min-h-screen rounded-lg bg-slate-300 animate-pulse flex gap-2 flex-wrap items-center justify-center",
        className
      )}
    >
      <VscLoading className={"animate-spin"} />
      <span className="text-sm font-semibold text-slate-900 bg-clip-text animate-pulse">
        {displayedText}
      </span>
    </div>
  );
};

export { LoadingScreen };
