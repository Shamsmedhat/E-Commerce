"use client";

import { cn } from "@/lib/utils";
import { handleSignOutToaster } from "@/lib/utils/helpers";
import { useRouter } from "@/navigarion";
import { signOut } from "next-auth/react";
import { useState } from "react";

export default function LogoutBtn({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const [isLoggingOut, setIsLoggingOut] = useState(false);
  const router = useRouter();

  async function handleSignOut() {
    await signOut({ redirect: true, callbackUrl: "/" }).then(
      handleSignOutToaster,
    );
    setIsLoggingOut(true);
  }
  return (
    <button
      onClick={handleSignOut}
      className={cn(className, "text-backup")}
      disabled={isLoggingOut}
    >
      {children}
    </button>
  );
}
