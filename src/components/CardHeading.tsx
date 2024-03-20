import { cn } from "@/lib/utils";
import React from "react";
export function Header({className, children}:{className?:string, children: Iterable<headingType>|headingType}) {
  return (
    <div className={cn("flex flex-col justify-center items-center text-center textHeading font-extrabold mb-5", className)}>
      {children}
    </div>
  );
}

export const Heading =({children, className}:{children?:React.ReactNode, className?:string}) => {
  return (
    <h2 className={cn("gradient-text", className)}>{children}</h2>
  )
}
type headingType = React.ReactElement<typeof Heading>