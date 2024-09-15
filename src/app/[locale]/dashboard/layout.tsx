import { Link } from "@/navigarion";

export default async function layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="flex w-full justify-start">
      <nav className="w-[250px] border-e-2 bg-white">
        <ul>
          <li>
            <Link href="/dashboard/users">users</Link>
          </li>
        </ul>
      </nav>
      <div className="container mb-10 mt-6 min-h-[80dvh] flex-grow">
        <div className="rounded-md bg-white px-8 py-4 shadow-md">
          {children}
        </div>
      </div>
    </section>
  );
}
