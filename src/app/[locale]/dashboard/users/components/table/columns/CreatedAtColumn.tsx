import { ColumnDef } from "@tanstack/react-table";
import { UserUiTable } from "@/lib/types/user";
import { useTranslations } from "next-intl";

export const CreatedAtHeader = () => {
  const t = useTranslations();

  return <>{t("lZuM-420_phIHFSADFJ1h")}</>;
};

const CreatedAtColumn: ColumnDef<UserUiTable> = {
  id: "createdAt",
  accessorKey: "createdAt",
  header: () => <CreatedAtHeader />,
  cell: ({ row }) => (
    <div className="capitalize text-backup">{row.getValue("createdAt")}</div>
  ),
};
export default CreatedAtColumn;
