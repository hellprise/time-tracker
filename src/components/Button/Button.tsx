import clsx from "clsx";
import React, { DetailedHTMLProps, FC, PropsWithChildren } from "react";

import st from "./Button.module.scss";

type size = "s" | "m" | "l";
type color = "primary" | "secondary" | "transparent";

interface IButtonProps
  extends DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  size?: size;
  color?: color;
  isActive?: boolean;
}

export const Button: FC<PropsWithChildren<IButtonProps>> = ({
  children,
  size = "s",
  color = "primary",
  isActive = "false",
  className,
  ...props
}) => {
  return (
    <button
      {...props}
      className={clsx([st.Button], className, {
        [st.s]: size === "s",
        [st.m]: size === "m",
        [st.l]: size === "l",
        [st.primary]: color === "primary",
        [st.secondary]: color === "secondary",
        [st.transparent]: color === "transparent",
        [st.active]: isActive,
      })}
    >
      {children}
    </button>
  );
};
