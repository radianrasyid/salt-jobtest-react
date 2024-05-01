import { InputHTMLAttributes, ReactNode, forwardRef } from "react";
import { cn } from "../../lib/utils";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: boolean;
  icon?: ReactNode;
  inputClassName?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, type = "text", error, ...props }, ref) => {
    switch (type) {
      case "checkbox":
        return (
          <input
            {...props}
            type={type}
            ref={ref}
            className={cn(
              "accent-primary text-secondary max-sm:accent-secondary",
              props.inputClassName
            )}
          />
        );
      default:
        return (
          <div
            className={cn(
              `flex h-[3.688rem] items-center gap-x-2 w-full text-secondary rounded-lg border border-accent bg-transparent px-4  py-4 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 ${
                error && "border-red-500 outline-red-500 ring-red-500"
              }`,
              className
            )}
          >
            <input
              type={type}
              ref={ref}
              {...props}
              className={cn(
                "w-full h-full focus:outline-none active:outline-none text-secondary font-normal text-base",
                props.inputClassName
              )}
            />

            {props.icon}
          </div>
        );
    }
  }
);
