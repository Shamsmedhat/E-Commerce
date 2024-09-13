"use client";
import { useSession } from "next-auth/react";
import { useEffect } from "react";
import { toast } from "react-toastify";

export default function useAuthToast() {
  const { data: session, status } = useSession();

  useEffect(() => {
    if (status === "loading") return; // Do nothing while loading

    // Check the flag from local storage
    const shouldShowToast = localStorage.getItem("showToast");
    const toastId = "authToast"; // Unique ID for the toast

    if (shouldShowToast) {
      // Show a loading toast initially
      toast.loading("Please wait...", { toastId });

      // Update the toast based on the flag
      if (shouldShowToast === "signIn") {
        setTimeout(() => {
          toast.update(toastId, {
            render: "Logged In Successfully!",
            type: "success",
            isLoading: false, // Remove loading state
            autoClose: 2000,
          });
        }, 1000); // Adjust delay as needed
      } else if (shouldShowToast === "signOut") {
        setTimeout(() => {
          toast.update(toastId, {
            render: "Signed out successfully!",
            type: "info",
            isLoading: false, // Remove loading state
            autoClose: 2000,
          });
        }, 1000); // Adjust delay as needed
      }

      localStorage.removeItem("showToast"); // Clear the flag after showing the toast
    }
  }, [session, status]);
}
