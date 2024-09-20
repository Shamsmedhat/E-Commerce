import { ColumnDef } from "@tanstack/react-table";
import { UserUiTable } from "@/lib/types/user";
import { useTranslations } from "next-intl";
import { Badge } from "@/components/ui/badge";

export const StatusHeader = () => {
  const t = useTranslations();

  return <>{t("PvV9Xjpo6iOWdCXdus06R")},</>;
};

const StatusColumn: ColumnDef<UserUiTable> = {
  id: "blocked",
  accessorKey: "blocked",
  header: () => <StatusHeader />,
  cell: ({ row }) => (
    <div className="capitalize">
      {row.getValue("blocked") ? (
        <Badge className="bg-red-500">blocked</Badge>
      ) : (
        <Badge className="bg-green-500 text-white hover:bg-green-400">
          not blocked
        </Badge>
      )}
    </div>
  ),
};
export default StatusColumn;
