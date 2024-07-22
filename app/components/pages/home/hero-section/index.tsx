import { TechBagde } from "@/app/components/tech-bagde";
import { Button } from "@/app/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { HiArrowNarrowRight } from "react-icons/hi";
import { TbBrandGithub, TbBrandLinkedin } from "react-icons/tb";

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

const MOCK_CONTACTS = [
  {
    url: "https://github.com/",
    icon: <TbBrandGithub />,
  },
  {
    url: "https://github.com/",
    icon: <TbBrandLinkedin />,
  },
];

export const HeroSection = () => {
  return (
    <section className="w-full lg:h-[755px] bg-hero-image bg-cover bg-center bg-no-repeat flex flex-col justify-end pb-10 sm:pb-32 pt-32 lg:pb-[110px]">
      <div className="container flex items-start justify-between flex-col-reverse lg:flex-row">
        <div className="w-full lg:max-w-[530px]">
          <p className="font-mono text-emerald-400 pt-2 md:pt-0">
            Olá, meu nome é{" "}
          </p>
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

          <div className="mt-6 lg:mt-10 flex sm:items-center sm:gap-5 flex-col sm:flex-row">
            <Button className="shadow-button w-max">
              Entre em contato
              <HiArrowNarrowRight size={18} />
            </Button>

            <div className="text-2xl text-gray-600 flex items-center h-20 gap-3">
              {MOCK_CONTACTS.map((contact, index) => (
                <Link
                  href={contact.url}
                  key={index}
                  className="hover:text-gray-100 transition-colors"
                >
                  {contact.icon}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <Image
          width={420}
          height={404}
          src="/images/profile-pic.jpeg"
          alt="Foto de Perfil"
          className="rounded-lg w-[300px] h-[300px] lg:w-[420px] lg:h-[404px] mb-6 lg:mb-0 shadow-2xl object-cover"
        />
      </div>
    </section>
  );
};
