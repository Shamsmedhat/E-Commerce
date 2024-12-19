"use client";
import * as React from "react";

import { cn } from "@/lib/utils";
import { LuSearchCode } from "react-icons/lu";
import SearchResult from "./search-result";
import {
  useProductByQueryData,
  useProductsByCategoryId,
} from "@/lib/utils/data/products-data";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Search = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, ...props }, ref) => {
    const [query, setQuery] = React.useState("");
    const { productByQuery, isFetching, isError } =
      useProductByQueryData(query);

    return (
      <>
        <div className="flex h-10 items-center overflow-hidden rounded-full border border-input bg-background text-sm ring-offset-background has-[input:disabled]:cursor-not-allowed has-[input:focus-visible]:border-primary/40 has-[input:disabled]:opacity-50 has-[input:focus-visible]:outline-none has-[input:focus-visible]:ring-2 has-[input:focus-visible]:ring-primary/40 has-[input:focus-visible]:ring-offset-2 dark:border-white/70">
          <span className="ms-1 flex h-8 w-8 items-center justify-center rounded-full bg-primary">
            <LuSearchCode className="w-5 text-white dark:text-background" />
          </span>
          <input
            type="search"
            className={cn(
              "w-36 bg-background px-3 py-2 outline-none transition-all duration-300 ease-out placeholder:text-muted-foreground md:w-64 md:focus:w-96",
              className,
            )}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            ref={ref}
            {...props}
          />
        </div>
        <SearchResult
          query={query}
          productByQuery={productByQuery}
          isFetching={isFetching}
          isError={isError}
          setQuery={setQuery}
          className="custom-scrollbar absolute z-[999] ms-3 h-fit max-h-[530px] w-[90%] overflow-y-auto scroll-auto border-x border-b border-primary/50 bg-white bg-scroll px-3 py-2 shadow-sm"
        />
      </>
    );
  },
);
Search.displayName = "Search";

export { Search };
