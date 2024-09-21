import { ColumnDef } from "@tanstack/react-table";
import { UserUiTable } from "@/lib/types/user";
import { useTranslations } from "next-intl";
import { UpdateUserForm } from "../../UpdateUserForm";

export const EditHeader = () => {
  const t = useTranslations();

  return <>{t("yK3O_Bc80n20t9RhQjOo7")}</>;
};

const EditColumn: ColumnDef<UserUiTable> = {
  id: "edit",
  accessorKey: "edit",
  header: () => <EditHeader />,
  cell: ({ row }) => (
    <div className="capitalize text-backup">
      <UpdateUserForm row={row.original} />
    </div>
  ),
};
export default EditColumn;
