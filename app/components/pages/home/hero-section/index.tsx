import { TechBagde } from "@/app/components/tech-bagde";
import Image from "next/image";

const TECH_BAGDES_ITEMS = [
  {
    name: "HTML",
  },
  {
    name: "CSS",
  },
  {
    name: "JavaScript",
  },
  {
    name: "TailwindCss",
  },
  {
    name: "React",
  },
  {
    name: "Vtex Io",
  },
];

export const HeroSection = () => {
  return (
    <section className="w-full h-[755px] bg-hero-image bg-cover bg-center bg-no-repeat flex flex-col justify-end pb-10 sm:pb-32 pt-32 lg:pb-[110px]">
      <div className="container flex items-start justify-between flex-col-reverse lg:flex-row">
        <div className="w-full lg:max-w-[530px]">
          <p className="font-mono text-emerald-400">Olá, meu nome é </p>
          <h2 className="text-4xl font-medium mt-2">Laíssa Saraiva</h2>

          <p className="text-gray-400 my-6 text-sm sm:text-base">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia
            iure et nisi nobis! Optio itaque qui nisi obcaecati, repellat
            aperiam soluta doloribus facere accusantium? Dignissimos!
          </p>

          <div className="flex flex-wrap gap-x-2 gap-y-3 lg:max-w-[340px]">
            {TECH_BAGDES_ITEMS.map((item) => (
              <TechBagde name={item.name} key={item.name} />
            ))}
          </div>

          <div>contato</div>
        </div>

        <Image
          width={420}
          height={404}
          src="/images/profile-pic.jpeg"
          alt="Foto de Perfil"
          className="rounded-lg"
        />
      </div>
    </section>
  );
};
