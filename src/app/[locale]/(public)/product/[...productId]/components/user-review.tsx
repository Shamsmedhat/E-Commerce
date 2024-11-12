"use client";

import RatingStars from "@/components/common/RatingStars";
import { cn } from "@/lib/utils";
import { Session } from "next-auth";
import React from "react";
import { LuUserCircle } from "react-icons/lu";
import RemoveReview from "./remove-review";

type UserReviewProps = {
  review: SingleReview;
  session: UserSession;
  key: string;
  myReview: boolean;
};

export default function UserReview({
  review: r,
  session,
  key,
  myReview,
}: UserReviewProps) {
  return (
    <div
      key={key}
      className="border-b-2 border-primary-foreground/5 px-2 pb-4 md:w-[70%] md:px-0"
    >
      <div className="mt-5 flex items-center justify-between">
        {/* User info */}
        <div className="flex items-center gap-2 align-middle">
          {/* User icon */}
          <span>
            <LuUserCircle strokeWidth={1} size={18} />
          </span>

          {/* User name */}
          <span
            className={cn(
              session.data?.user.email === r.user.email
                ? "font-bold text-backup"
                : "font-semibold",
            )}
          >
            {r.user.username}
          </span>
        </div>

        {/* User review options */}
        {myReview && <RemoveReview reviewId={r._id} productId={r.product} />}
      </div>

      {/* User rating */}
      <p className="mb-3 mt-1">
        <RatingStars rate={r.rating} />
      </p>

      {/* User comment */}
      <p className="text-primary-foreground dark:text-white/80">{r.comment}</p>
    </div>
  );
}
