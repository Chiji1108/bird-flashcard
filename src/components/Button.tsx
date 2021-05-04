import { ComponentProps } from "react";
import cn from "classnames";

export interface ButtonProps extends ComponentProps<"button"> {}

export default function Button({ className, ...props }: ButtonProps) {
  return (
    <button
      className={cn(
        "rounded-full h-12 w-12 flex items-center justify-center backdrop-filter backdrop-blur bg-black bg-opacity-50 hover:bg-opacity-75",
        className
      )}
      {...props}
    />
  );
}
