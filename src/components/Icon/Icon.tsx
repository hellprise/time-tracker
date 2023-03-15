import clsx from "clsx";
import React, { DetailedHTMLProps, HTMLAttributes } from "react";

import { newGuid } from "../../utils/guid";
import { ReactComponent as Bulk } from "../assets/icons/bulk-edit.svg";
import { ReactComponent as Tag } from "../assets/icons/tag-gray.svg";
import st from "./Icon.module.scss";

export type IconType = "Bulk" | "Tag";

const iconTypes = new Map([
  ["Tag", <Tag key={newGuid()} />],
  ["Bulk", <Bulk key={newGuid()} />],
]);

interface IIconProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  type: IconType;
}

const getIcon = (type: IconType): JSX.Element => iconTypes.get(type) as JSX.Element;

export const Icon: React.FC<IIconProps> = ({ className, type, ...props }) => {
  return (
    <div {...props} className={clsx([st.Icon], className)}>
      {getIcon(type)}
    </div>
  );
};
