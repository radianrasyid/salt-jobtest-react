import { VariantProps, cva } from "class-variance-authority";
import { LoaderCircleIcon } from "lucide-react";
import { forwardRef } from "react";
import { cn } from "../../lib/utils";

const buttonVariants = cva(
  `font-semibold flex flex-row items-center justify-center px-10 rounded-lg transition-all ease-in-out active:scale-90`,
  {
    variants: {
      variant: {
        default:
          "bg-primary text-white hover:bg-primary-foreground disabled:bg-slate-200 disabled:text-slate-400",
        outline:
          "border border-input border-secondary border-[1px] border-solid text-secondary bg-background text-base leading-[1rem] hover:border-primary disabled:border-slate-300 disabled:text-slate-300 disabled:bg-slate-200",
      },
      size: {
        default: "h-12 px-10 py-3",
        sm: "h-10 rounded-full px-3 text-xs",
        lg: "h-14 rounded-full px-8",
        icon: "h-9 w-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  loading?: boolean;
  loadingText?: React.ReactNode;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { className, variant, size, loading, loadingText = "Loading", ...props },
    ref
  ) => (
    <button
      className={cn(
        `${buttonVariants({ variant, size, className })}`,
        `${loading ? "animate-pulse" : ""}`
      )}
      ref={ref}
      disabled={props.disabled || loading}
      {...props}
    >
      {loading ? (
        <div className="flex items-center justify-center gap-x-2">
          <LoaderCircleIcon className="animate-spin" /> {loadingText}
        </div>
      ) : (
        props.children
      )}
    </button>
  )
);

Button.displayName = "Button";

export { Button, buttonVariants };
