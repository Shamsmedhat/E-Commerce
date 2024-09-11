"use client";

import { cn } from "@/lib/utils";
import { useRouter } from "@/navigarion";
import { signOut } from "next-auth/react";
import { useState } from "react";
import { toast } from "react-toastify";

export default function LogoutBtn({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const [isLoggingOut, setIsLoggingOut] = useState(false);
  const router = useRouter();
  const loggedOutSuccessfully = () => {
    toast.info("Logged out Successfully!", {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      onClose: () => {
        router.refresh();
      },
    });
    setIsLoggingOut(true);
  };

  async function handleSignOut() {
    await signOut({ redirect: false });
    loggedOutSuccessfully();
  }
  return (
    <button
      onClick={handleSignOut}
      className={cn(className, "text-[#007185]")}
      disabled={isLoggingOut}
    >
      {children}
    </button>
  );
}
