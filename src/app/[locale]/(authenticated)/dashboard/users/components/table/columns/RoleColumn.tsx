import { LuArrowUpDown } from "react-icons/lu";
import { ColumnDef } from "@tanstack/react-table";
import { UserUiTable } from "@/lib/types/user";
import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";

export const RoleHeader: React.FC<{ column: any }> = ({ column }) => {
  const t = useTranslations();

  return (
    <Button
      variant="ghost"
      onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      className="font-bold focus-visible:ring-primary"
    >
      {t("gy445cnOtdKUAsDwEcUhB")}
      <LuArrowUpDown className="mr-2 h-4 w-4" />
    </Button>
  );
};

const RoleColumn: ColumnDef<UserUiTable> = {
  id: "role",
  accessorKey: "role",
  header: (props) => <RoleHeader column={props.column} />,
  cell: ({ row }) => (
    <div className="font-bold uppercase">{row.getValue("role")}</div>
  ),
};
export default RoleColumn;
