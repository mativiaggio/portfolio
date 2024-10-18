import { Project } from "@/app/_components/Project";
import { projects } from "@/constants";

export default function page() {
  return (
    <>
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-4">
          {projects.map((p) => (
            <Project key={p.id} {...p} />
          ))}
        </div>
      </div>
    </>
  );
}
