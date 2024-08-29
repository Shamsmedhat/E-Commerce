import * as React from "react";

import { cn } from "@/lib/utils";
import { SearchIcon } from "lucide-react";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Search = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, ...props }, ref) => {
    return (
      <div className="flex h-10 items-center overflow-hidden rounded-full border border-input bg-background text-sm ring-offset-background has-[input:disabled]:cursor-not-allowed has-[input:disabled]:opacity-50 has-[input:focus-visible]:outline-none has-[input:focus-visible]:ring-2 has-[input:focus-visible]:ring-ring has-[input:focus-visible]:ring-offset-2">
        <span className="ms-1 flex h-8 w-8 items-center justify-center rounded-full bg-primary">
          <SearchIcon className="w-5 text-white" />
        </span>
        <input
          type="search"
          className={cn(
            "w-36 bg-background px-3 py-2 outline-none transition-all duration-500 ease-out placeholder:text-muted-foreground md:w-64 md:focus:w-96",
            className,
          )}
          ref={ref}
          {...props}
        />
      </div>
    );
  },
);
Search.displayName = "Search";

export { Search };
