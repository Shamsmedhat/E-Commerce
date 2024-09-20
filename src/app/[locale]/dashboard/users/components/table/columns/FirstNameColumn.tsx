import { ColumnDef } from "@tanstack/react-table";
import { UserUiTable } from "@/lib/types/user";
import { useTranslations } from "next-intl";

export const FirstNameHeader = () => {
  const t = useTranslations();

  return <>{t("fNL0aiq1UQFPkSx2ft_qt")}</>;
};

const FirstNameColumn: ColumnDef<UserUiTable> = {
  id: "firstName",
  accessorKey: "firstName",
  header: () => <FirstNameHeader />,
  cell: ({ row }) => (
    <div className="capitalize">{row.getValue("firstName")}</div>
  ),
};
export default FirstNameColumn;
