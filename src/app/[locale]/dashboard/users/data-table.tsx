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
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { BsChevronDown } from "react-icons/bs";
import { UserUiTable } from "@/lib/types/user";
import { useTranslations } from "next-intl";

// columns import ===========================

import { CheckboxColumn } from "./components/table/columns/CheckboxColumn";
import UsernameColumn from "./components/table/columns/UsernameColumn";
import FirstNameColumn from "./components/table/columns/FirstNameColumn";
import LastNameColumn from "./components/table/columns/LastNameColumn";
import RoleColumn from "./components/table/columns/RoleColumn";
import StatusColumn from "./components/table/columns/StatusColumn";
import CreatedAtColumn from "./components/table/columns/CreatedAtColumn";
import EditColumn from "./components/table/columns/EditColumn";
import DeleteBtn from "./components/table/DeleteBtn";

export type error = {
  status: string;
  message: string;
};

const arColums = [
  "اسم المستخدم / البريد الالكتروني",
  "الاسم الاول",
  "الاسم الاخير",
  "صلاحية المستخدم",
  "حالة المستخدم",
  "تاريخ الانشاء",
];

export function DataTable({ data }: { data: UserUiTable[] }) {
  const t = useTranslations();
  const [deleteErr, setDeleteErr] = useState<error | undefined>(undefined);

  //? columns here from siprated file to use transalations feature
  const columns: ColumnDef<UserUiTable>[] = [
    //TODO photo's need implement
    CheckboxColumn,
    UsernameColumn,
    FirstNameColumn,
    LastNameColumn,
    RoleColumn,
    StatusColumn,
    CreatedAtColumn,
    EditColumn,
    // menu
    {
      id: "actions",
      enableHiding: false,
      cell: ({ row }) => {
        const userId = row.original.id;
        return <DeleteBtn setDeleteErr={setDeleteErr} userId={userId} />;
      },
    },
  ];

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
      {deleteErr && (
        <div>
          <p>{deleteErr.message} </p>
        </div>
      )}
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

      {/* Table footer */}
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
