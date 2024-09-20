import { Checkbox } from "@/components/ui/checkbox";
import { UserUiTable } from "@/lib/types/user";
import { ColumnDef } from "@tanstack/react-table";

export const CheckboxColumn: ColumnDef<UserUiTable> = {
  id: "select",
  header: ({ table }) => (
    <Checkbox
      checked={
        table.getIsAllPageRowsSelected() ||
        (table.getIsSomePageRowsSelected() && "indeterminate")
      }
      onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
      className="border-primary-foreground/50 focus-visible:ring-primary"
      aria-label="Select all"
    />
  ),
  cell: ({ row }) => (
    <Checkbox
      checked={row.getIsSelected()}
      onCheckedChange={(value) => row.toggleSelected(!!value)}
      aria-label="Select row"
      className="border-primary-foreground/50 focus-visible:ring-primary"
    />
  ),
  enableSorting: false,
  enableHiding: false,
};
