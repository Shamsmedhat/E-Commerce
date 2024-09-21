import { CgSpinnerAlt } from "react-icons/cg";

export default function Page() {
  return (
    <section className="flex flex-1 items-center justify-center">
      <div>
        <CgSpinnerAlt className="animate-spin" size={50} color="#febf31" />
        {/* primary color */}
      </div>
    </section>
  );
}
