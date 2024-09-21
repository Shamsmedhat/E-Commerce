import { ColumnDef } from "@tanstack/react-table";
import { UserUiTable } from "@/lib/types/user";
import { useTranslations } from "next-intl";

export const LastNameHeader = () => {
  const t = useTranslations();

  return <>{t("AfngYmc6KeE0VCRMa9WSx")}</>;
};

const LastNameColumn: ColumnDef<UserUiTable> = {
  id: "lastName",
  accessorKey: "lastName",
  header: () => <LastNameHeader />,
  cell: ({ row }) => (
    <div className="capitalize">{row.getValue("lastName")}</div>
  ),
};
export default LastNameColumn;
