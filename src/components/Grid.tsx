import { ComponentPropsWithoutRef } from "react";

export default function Grid({
  children,
  ...props
}: ComponentPropsWithoutRef<"ul">) {
  return (
    <ul
      {...props}
      role="list"
      className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8"
    >
      {children}
    </ul>
  );
}
