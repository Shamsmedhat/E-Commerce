"use client";
import { deleteUserAction } from "@/lib/actions/users-actions";
import { handleDeleteUserToaster } from "@/lib/utils/helpers";
import { useTranslations } from "next-intl";
import React from "react";
import { error as ErrorType } from "../../data-table"; // Adjust import as needed
import { BsTrash } from "react-icons/bs";

//TODO need to make a confirmation modal before confirm delete
export default function DeleteBtn({
  userId,
  setDeleteErr,
}: {
  userId: string;
  setDeleteErr: React.Dispatch<React.SetStateAction<ErrorType | undefined>>;
}) {
  const t = useTranslations();

  async function onDelete(userId: string) {
    try {
      await deleteUserAction(userId).then(handleDeleteUserToaster);
    } catch (error) {
      setDeleteErr(error as ErrorType);
    }
  }
  return (
    <button
      onClick={() => onDelete(userId)}
      className="cursor-pointer justify-center rounded-full border-[1px] border-white !bg-red-500 p-2 text-white transition-colors duration-300 hover:border-red-500 hover:!bg-white hover:!text-red-500"
    >
      <BsTrash size={15} />
    </button>
  );
}
