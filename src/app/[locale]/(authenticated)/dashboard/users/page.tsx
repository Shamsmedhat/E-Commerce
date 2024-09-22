// import { columns } from "./columns";
import { DataTable } from "./data-table";
import { getAllUsersAction } from "@/lib/actions/users-actions";
import { UsersList } from "@/lib/types/user";
import { getUserRole } from "@/lib/utils/helpers";
import { getTranslations } from "next-intl/server";

async function Page() {
  const t = await getTranslations();

  // get all users data
  const data: UsersList = await getAllUsersAction();

  // return the data that will be displayed in the user table
  //! after any change needs to be applied in UI, must add it in colums variable in data-table file
  const usersTable = data?.data?.users.map((user) => {
    const date = new Date(user.createdAt).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });

    const time = new Date(user.createdAt).toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    });
    return {
      id: user._id,
      username: user.username,
      email: user.email,
      firstName: user.firstName,
      lastName: user.lastName,
      role: getUserRole(user.role),
      photo: user.photo,
      blocked: user.blocked,
      createdAt: `${date} - ${time}`,
    };
  });

  return (
    <section className="container">
      <h2 className="py-2 text-3xl font-bold text-primary-foreground/90">
        {t("CpQmdnnSTadNa9eAOznLu")}
      </h2>
      <div className="mx-auto py-3">
        <DataTable data={usersTable} />
      </div>
    </section>
  );
}

export default Page;
