import { Link } from "@/navigarion";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <section className="flex w-full">
      <nav className="absolute top-0 h-full w-[10%] border-e-2 bg-white">
        <ul>
          <li>
            <Link href="/dashboard/users">users</Link>
          </li>
        </ul>
      </nav>
      <div className="container rounded-md bg-white px-8 py-4 shadow-md">
        {children}
      </div>
      ;
    </section>
  );
}
