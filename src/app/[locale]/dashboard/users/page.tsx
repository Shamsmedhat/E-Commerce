// import { columns } from "./columns";
// import { DataTable } from "./data-table";

// import { useEffect, useState } from "react";
// import { getAllUsersAction } from "@/actions/usersActions";
// import { UsersList, UserUiTable } from "@/lib/types/user";
// import { ROLE } from "@/lib/constants/roles";
// import { getUserRole } from "@/lib/utils/helpers";
// import { Table, TableBody, TableHeader, TableRow } from "@/components/ui/table";
// import { Skeleton } from "@/components/ui/skeleton";

// const initialState = {
//   status: "",
//   data: {
//     users: [
//       {
//         _id: "",
//         username: "",
//         email: "",
//         firstName: "",
//         lastName: "",
//         role: "",
//         photo: "",
//         active: true,
//         blocked: false,
//         createdAt: "",
//         updatedAt: "",
//       },
//     ],
//   },
// };
// function Page() {
//   const [usersData, setUsersData] = useState<UsersList>(initialState);
//   const [loading, setLoading] = useState(true);

//   const usersTable = usersData?.data?.users.map((user) => {
//     return {
//       id: user._id,
//       username: user.username,
//       firstName: user.firstName,
//       lastName: user.lastName,
//       role: getUserRole(user.role),
//       photo: user.photo,
//       blocked: user.blocked,
//       createdAt: "",
//     };
//   });

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const data: UsersList = await getAllUsersAction();
//         setUsersData(data);
//       } catch (error) {
//         console.error("Error fetching users data:", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, []);

//   if (loading) {
//     return (
// <section>
//   <h2>users</h2>
//   <div className="container mx-auto py-10">
//     <Table>
//       <TableHeader>
//         <TableRow>
//           <Skeleton className="h-20 w-full" />
//         </TableRow>
//       </TableHeader>
//       <TableBody>
//         <TableRow>
//           <Skeleton className="w-full" />
//         </TableRow>
//       </TableBody>
//     </Table>
//   </div>
// </section>
//     );
//   } else {
//     return (
//       <section>
//         <h2>users</h2>
//         <div className="container mx-auto py-10">
//           <DataTable columns={columns} data={usersTable} />
//         </div>
//       </section>
//     );
//   }
// }

// export default Page;

import { columns } from "./columns";
import { DataTable } from "./data-table";

import { useEffect, useState } from "react";
import { getAllUsersAction } from "@/actions/usersActions";
import { UsersList, UserUiTable } from "@/lib/types/user";
import { ROLE } from "@/lib/constants/roles";
import { getUserRole } from "@/lib/utils/helpers";
import { Table, TableBody, TableHeader, TableRow } from "@/components/ui/table";
import { Skeleton } from "@/components/ui/skeleton";

async function Page() {
  const data: UsersList = await getAllUsersAction();

  const usersTable = data?.data?.users.map((user) => {
    return {
      id: user._id,
      username: user.username,
      firstName: user.firstName,
      lastName: user.lastName,
      role: getUserRole(user.role),
      photo: user.photo,
      blocked: user.blocked,
      createdAt: "",
    };
  });

  return (
    <section>
      <h2>users</h2>
      <div className="container mx-auto py-10">
        <DataTable columns={columns} data={usersTable} />
      </div>
    </section>
  );
}

export default Page;
