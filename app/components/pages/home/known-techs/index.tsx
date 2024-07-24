import { SectionTitle } from "@/app/components/section-title";
import { TbBrandNextjs } from "react-icons/tb";
import { KnowTech } from "./known-tech";

type KnownTechsProps = {};

export const KnownTechs = () => {
  return (
    <section className="container py-16">
      <SectionTitle subtitle="competências" title="Conhecimentos" />

      <div className="grid grid-cols-[repeat(auto-fit,minmax(264px,1fr))] gap-3">
        {Array.from({ length: 8 }).map((_, index) => (
          <KnowTech
            key={index}
            tech={{
              icon: <TbBrandNextjs />,
              name: "Next.js",
              startDate: "2021-11-01",
            }}
          />
        ))}
      </div>
    </section>
  );
};
