import { LuArrowUpDown } from "react-icons/lu";
import { ColumnDef } from "@tanstack/react-table";
import { UserUiTable } from "@/lib/types/user";
import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";

export const UsernameHeader: React.FC<{ column: any }> = ({ column }) => {
  const t = useTranslations();

  return (
    <Button
      variant="ghost"
      onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      className="font-bold focus-visible:ring-primary"
    >
      {t("sNhWYabdsE4VJbZ8GYhHF")}
      <LuArrowUpDown className="mr-2 h-4 w-4" />
    </Button>
  );
};

const UsernameColumn: ColumnDef<UserUiTable> = {
  id: "username", // Define the id
  accessorKey: "username",
  header: (props) => <UsernameHeader column={props.column} />,
  cell: ({ row }) => (
    <div className="font-semibold focus-visible:ring-primary">
      <p>{row.getValue("username")}</p>
      <div className="text-sm text-muted-foreground/70">
        {row.original.email}
      </div>
    </div>
  ),
};
export default UsernameColumn;
