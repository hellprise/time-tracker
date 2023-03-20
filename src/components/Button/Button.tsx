import clsx from "clsx";
import React, { DetailedHTMLProps, FC, PropsWithChildren } from "react";

import { Icon } from "../Icon/Icon";
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
        [st.primary]: !isActive && color === "primary",
        [st.secondary]: !isActive && color === "secondary",
        [st.transparent]: !isActive && color === "transparent",
        [st.active]: isActive,
      })}
    >
      <span>{children}</span>

      {isActive && <Icon type="Close" hover={false} className={st.Icon} />}
    </button>
  );
};
