"use client";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

export default function useAuthToast() {
  const { data: session, status } = useSession();
  const [shouldShowToast, setShouldShowToast] = useState<string | null>(null);

  // grap localStorage every 1 second to detect changes
  //! this approach to avoid to run localstorage in server
  useEffect(() => {
    const intervalId = setInterval(() => {
      const storedToast = localStorage.getItem("showToast");
      if (storedToast !== shouldShowToast) {
        setShouldShowToast(storedToast); // Update state if localStorage changes
      }
    }, 1000);

    return () => clearInterval(intervalId);
  }, [shouldShowToast]);

  useEffect(() => {
    if (status === "loading" || !shouldShowToast) return;

    const toastId = "authToast";
    toast.loading("Please wait...", { toastId });

    if (shouldShowToast === "signIn") {
      setTimeout(() => {
        toast.update(toastId, {
          render: "Logged In Successfully!",
          type: "success",
          isLoading: false,
          autoClose: 2000,
        });
      }, 500);
    } else if (shouldShowToast === "signOut") {
      setTimeout(() => {
        toast.update(toastId, {
          render: "Signed out successfully!",
          type: "info",
          isLoading: false,
          autoClose: 2000,
        });
      }, 500);
    } else if (shouldShowToast === "deleteUser") {
      toast.update(toastId, {
        render: "User Deleted Successfully!",
        type: "success",
        isLoading: false,
        autoClose: 2000,
      });
    } else if (shouldShowToast === "createUser") {
      setTimeout(() => {
        toast.update(toastId, {
          render: "User created successfully!",
          type: "info",
          isLoading: false,
          autoClose: 2000,
        });
      }, 500);
    }

    // Clear localStorage and state after showing the toast
    localStorage.removeItem("showToast");
    setShouldShowToast(null);
  }, [status, shouldShowToast]);
}
