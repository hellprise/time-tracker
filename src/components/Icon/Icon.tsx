import clsx from "clsx";
import React, { DetailedHTMLProps, HTMLAttributes } from "react";

import { newGuid } from "../../utils/guid";
import { ReactComponent as Bulk } from "../assets/icons/bulk-edit.svg";
import { ReactComponent as Close } from "../assets/icons/close.svg";
import { ReactComponent as Tag } from "../assets/icons/tag-gray.svg";
import st from "./Icon.module.scss";

export type IconType = "Bulk" | "Tag" | "Close";

const iconTypes = new Map([
  ["Tag", <Tag key={newGuid()} />],
  ["Bulk", <Bulk key={newGuid()} />],
  ["Close", <Close key={newGuid()} />],
]);

interface IIconProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  type: IconType;
  hover?: boolean;
}

const getIcon = (type: IconType): JSX.Element => iconTypes.get(type) as JSX.Element;

export const Icon: React.FC<IIconProps> = ({ className, type, hover = true, ...props }) => {
  return (
    <div {...props} className={clsx([st.Icon], className, { [st.Hover]: hover })}>
      {getIcon(type)}
    </div>
  );
};
