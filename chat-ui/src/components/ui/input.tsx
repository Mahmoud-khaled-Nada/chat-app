import * as React from "react";
import { cn } from "@/lib/utils";

const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<"input">>( // No changes needed here
  ({ className, type = "text", placeholder = "Enter text", ...props }, ref) => {
    return (
      <input
        type={type}
        placeholder={placeholder}
        className={cn(
          "flex h-12 w-full rounded-md border border-[#e5e5e5] bg-transparent px-3 py-2 text-base shadow-sm transition-colors focus-visible:outline-none focus-visible:border focus-visible:ring-2 focus-visible:ring focus-visible:ring-opacity-50 disabled:cursor-not-allowed disabled:opacity-50 placeholder:text-muted-foreground placeholder:text-sm md:text-sm",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);

Input.displayName = "Input";

export { Input };
