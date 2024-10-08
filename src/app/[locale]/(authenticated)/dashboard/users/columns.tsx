// "use client";

// import { Badge } from "@/components/ui/badge";
// import { Button } from "@/components/ui/button";
// import { Checkbox } from "@/components/ui/checkbox";
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuLabel,
//   DropdownMenuSeparator,
//   DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu";
// import { UserUiTable } from "@/lib/types/user";
// import { ColumnDef } from "@tanstack/react-table";
// import { LuArrowUpDown, LuMoreHorizontal } from "react-icons/lu";

// export const columns: ColumnDef<UserUiTable>[] = [
//   //TODO photo's need implement

//   // checkbox for select
//   {
//     id: "select",
//     header: ({ table }) => (
//       <Checkbox
//         checked={
//           table.getIsAllPageRowsSelected() ||
//           (table.getIsSomePageRowsSelected() && "indeterminate")
//         }
//         onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
//         className="border-primary-foreground/50 focus-visible:ring-primary"
//         aria-label="Select all"
//       />
//     ),
//     cell: ({ row }) => (
//       <Checkbox
//         checked={row.getIsSelected()}
//         onCheckedChange={(value) => row.toggleSelected(!!value)}
//         aria-label="Select row"
//         className="border-primary-foreground/50 focus-visible:ring-primary"
//       />
//     ),
//     enableSorting: false,
//     enableHiding: false,
//   },

//   // Username head cell
//   {
//     accessorKey: "username",
//     header: ({ column }) => {
//       return (
//         <Button
//           variant="ghost"
//           onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
//           className="font-bold focus-visible:ring-primary"
//         >
//           Username / Email
//           <LuArrowUpDown className="mr-2 h-4 w-4" />
//         </Button>
//       );
//     },
//     cell: ({ row }) => (
//       <div className="font-semibold lowercase focus-visible:ring-primary">
//         <p>{row.getValue("username")}</p>
//         <div className="text-sm text-muted-foreground/70">
//           {row.original.email}
//         </div>
//       </div>
//     ),
//   },

//   // First name head cell
//   {
//     accessorKey: "firstName",
//     header: "First name",
//     cell: ({ row }) => (
//       <div className="capitalize">{row.getValue("firstName")}</div>
//     ),
//   },

//   // Last name
//   {
//     accessorKey: "lastName",
//     header: "Last name",
//     cell: ({ row }) => (
//       <div className="capitalize">{row.getValue("lastName")}</div>
//     ),
//   },

//   // User role
//   {
//     accessorKey: "role",
//     header: ({ column }) => {
//       return (
//         <Button
//           variant="ghost"
//           onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
//           className="font-bold focus-visible:ring-primary"
//         >
//           User role
//           <LuArrowUpDown className="mr-2 h-4 w-4" />
//         </Button>
//       );
//     },
//     cell: ({ row }) => (
//       <div className="font-bold uppercase">{row.getValue("role")}</div>
//     ),
//   },

//   // Status
//   {
//     accessorKey: "blocked",
//     header: "Status",
//     cell: ({ row }) => (
//       <div className="capitalize">
//         {row.getValue("blocked") ? (
//           <Badge className="bg-red-500">blocked</Badge>
//         ) : (
//           <Badge className="bg-green-500 text-white hover:bg-green-400">
//             not blocked
//           </Badge>
//         )}
//       </div>
//     ),
//   },

//   // Ceated date
//   {
//     accessorKey: "createdAt",
//     header: "Ceated date",
//     cell: ({ row }) => (
//       <div className="text-backup capitalize">{row.getValue("createdAt")}</div>
//     ),
//   },
//   // menu
//   {
//     id: "actions",
//     enableHiding: false,
//     cell: ({ row }) => {
//       const payment = row.original;

//       return (
//         <DropdownMenu>
//           <DropdownMenuTrigger asChild>
//             <Button
//               variant="ghost"
//               className="h-8 w-8 p-0 focus-visible:ring-primary"
//             >
//               <span className="sr-only">Open menu</span>
//               <LuMoreHorizontal className="h-4 w-4" />
//             </Button>
//           </DropdownMenuTrigger>
//           <DropdownMenuContent align="end">
//             <DropdownMenuLabel>Actions</DropdownMenuLabel>
//             <DropdownMenuItem
//               onClick={() => navigator.clipboard.writeText(payment.id)}
//             >
//               Copy payment ID
//             </DropdownMenuItem>
//             <DropdownMenuSeparator />
//             <DropdownMenuItem>View customer</DropdownMenuItem>
//             <DropdownMenuItem>View payment details</DropdownMenuItem>
//           </DropdownMenuContent>
//         </DropdownMenu>
//       );
//     },
//   },
// ];
