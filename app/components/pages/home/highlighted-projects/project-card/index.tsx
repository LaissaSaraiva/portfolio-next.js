import { Link } from "@/app/components/ui/link";
import Image from "next/image";
import { HiArrowNarrowRight } from "react-icons/hi";
import { TechBagde } from "../../../../tech-bagde/index";

export const ProjectCard = () => {
  return (
    <div className="flex gap-6 lg:gap-12 flex-col lg:flex-row">
      <div className="w-full h-full">
        <Image
          src="https://www.placeholder.com/420x304"
          width={420}
          height={304}
          alt="Thumb Nail do Projeto"
          className="w-full h-[200px] sm:h-[300px] lg:min-h-full lg:w-[420px] object-cover rounded-lg"
        />
      </div>

      <div>
        <h3 className="flex items-center gap-3 font-medium text-lg text-gray-50">
          <Image
            width={20}
            height={20}
            src="/images/icons/project-title-icon.svg"
            alt=""
          />
          Título do Projeto
        </h3>

        <p className="text-gray-400 my-6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
          eligendi quidem, accusantium quo a ipsa voluptate assumenda, velit ut
          illo tenetur quae nesciunt magnam molestias atque nulla officiis
          beatae facere non.
        </p>

        <div className="flex gap-x-2 gap-y-3 flex-wrap mb-8 lg:max-w-[350px]">
          <TechBagde name="Next.js" />
          <TechBagde name="Next.js" />
          <TechBagde name="Next.js" />
          <TechBagde name="Next.js" />
          <TechBagde name="Next.js" />
          <TechBagde name="Next.js" />
        </div>

        <Link href={"/projects/1"}>
          Ver projeto
          <HiArrowNarrowRight />
        </Link>
      </div>
    </div>
  );
};
