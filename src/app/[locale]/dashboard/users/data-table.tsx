"use client";
import {
  ColumnDef,
  ColumnFiltersState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  SortingState,
  useReactTable,
  VisibilityState,
} from "@tanstack/react-table";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { BsChevronDown } from "react-icons/bs";
import { UserUiTable } from "@/lib/types/user";
import { useTranslations } from "next-intl";

// columns import ===========================

import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { LuArrowUpDown, LuMoreHorizontal } from "react-icons/lu";
import { deleteUserAction } from "@/actions/usersActions";

export function DataTable({
  // columns,
  data,
}: {
  // columns: ColumnDef<UserUiTable>[];
  data: UserUiTable[];
}) {
  const t = useTranslations();
  const arColums = [
    "اسم المستخدم / البريد الالكتروني",
    "الاسم الاول",
    "الاسم الاخير",
    "صلاحية المستخدم",
    "حالة المستخدم",
    "تاريخ الانشاء",
  ];
  //? columns here from siprated file to use transalations feature
  const columns: ColumnDef<UserUiTable>[] = [
    //TODO photo's need implement

    // checkbox for select
    {
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
    },

    // Username head cell
    {
      accessorKey: "username",
      header: ({ column }) => {
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
      },
      cell: ({ row }) => (
        <div className="font-semibold lowercase focus-visible:ring-primary">
          <p>{row.getValue("username")}</p>
          <div className="text-sm text-muted-foreground/70">
            {row.original.email}
          </div>
        </div>
      ),
    },

    // First name head cell
    {
      accessorKey: "firstName",
      header: t("fNL0aiq1UQFPkSx2ft_qt"),
      cell: ({ row }) => (
        <div className="capitalize">{row.getValue("firstName")}</div>
      ),
    },

    // Last name
    {
      accessorKey: "lastName",
      header: t("AfngYmc6KeE0VCRMa9WSx"),
      cell: ({ row }) => (
        <div className="capitalize">{row.getValue("lastName")}</div>
      ),
    },

    // User role
    {
      accessorKey: "role",
      header: ({ column }) => {
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
      },
      cell: ({ row }) => (
        <div className="font-bold uppercase">{row.getValue("role")}</div>
      ),
    },

    // Status
    {
      accessorKey: "blocked",
      header: t("PvV9Xjpo6iOWdCXdus06R"),
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
    },

    // Ceated date
    {
      accessorKey: "createdAt",
      header: t("lZuM-420_phIHFSADFJ1h"),
      cell: ({ row }) => (
        <div className="capitalize text-backup">
          {row.getValue("createdAt")}
        </div>
      ),
    },
    // menu
    {
      id: "actions",
      enableHiding: false,
      cell: ({ row }) => {
        const userId = row.original.id;
        return (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                className="h-8 w-8 p-0 focus-visible:ring-primary"
              >
                <span className="sr-only">Open menu</span>
                <LuMoreHorizontal className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="center">
              {/* <DropdownMenuLabel>Actions</DropdownMenuLabel> */}
              <DropdownMenuItem
                onClick={() => deleteUserAction(userId)}
                className="justify-center !bg-red-600 text-white hover:!bg-red-600/80 hover:!text-white"
              >
                {t("yLEF3hzqko_51K4vr4AOA")}
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>View customer</DropdownMenuItem>
              <DropdownMenuItem>View payment details</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        );
      },
    },
  ];
  //? end of colums ==============================================

  //? shadcn setup ===============================================
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    [],
  );
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = React.useState({});

  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
  });

  //? Table return ===============================================
  return (
    <div className="w-full">
      <div className="flex items-center gap-8 py-4">
        <Input
          placeholder={t("b9h78JY1ypkVfw1Nb9rPC")}
          value={
            (table.getColumn("username")?.getFilterValue() as string) ?? ""
          }
          onChange={(event) =>
            table.getColumn("username")?.setFilterValue(event.target.value)
          }
          className="max-w-sm focus-visible:ring-primary"
        />
        <DropdownMenu>
          <DropdownMenuTrigger asChild className="focus-visible:ring-primary">
            <Button variant="outline" className="ml-auto">
              {t("2HaxRpQ8hafC9weryon5H")}
              <BsChevronDown className="mr-2 h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            {arColums.map((c, index) => {
              return table
                .getAllColumns()
                .filter((column) => column.getCanHide())
                .map((column, colIndex) => {
                  // Assuming you want to map the Arabic column based on its index to the corresponding English column
                  if (index === colIndex) {
                    return (
                      <DropdownMenuCheckboxItem
                        key={column.id}
                        className="capitalize"
                        checked={column.getIsVisible()}
                        onCheckedChange={(value) =>
                          column.toggleVisibility(!!value)
                        }
                      >
                        {column.id} - {c}
                      </DropdownMenuCheckboxItem>
                    );
                  }
                  return null;
                });
            })}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <div className="rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead
                      key={header.id}
                      className="bg-primary-foreground/20 !pr-4 text-center font-bold"
                    >
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext(),
                          )}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody className="text-center">
            {table?.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id} className="!pr-4">
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext(),
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>

      <div className="flex items-center justify-end space-x-2 py-4">
        <div className="flex-1 text-sm font-bold text-muted-foreground">
          {t("-x5TXuxf7TKv7W49OIwWK")}{" "}
          {table.getFilteredSelectedRowModel().rows.length}{" "}
          {t("Ej96yqfR0vNxVwXencTJW")} {table.getFilteredRowModel().rows.length}{" "}
          {t("NUWAzt5x-CwsJC0gdzBhd")}.
        </div>
        <div className="flex gap-5">
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
            className="focus-visible:ring-primary"
          >
            Previous
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
            className="focus-visible:ring-primary"
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  );
}
