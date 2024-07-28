import NextLink from "next/link";
import { ComponentProps } from "react";
import { cn } from "../../lib/utils";

type LinkProps = ComponentProps<typeof NextLink>;

export const Link = ({ className, children, href, ...props }: LinkProps) => {
  return (
    <NextLink
      href={href}
      className={cn(
        "flex items-center gap-2 text-gray-300 text-sm hover:text-emerald-500 transition-colors",
        className
      )}
    >
      {children}
    </NextLink>
  );
};
