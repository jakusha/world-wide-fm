import { getMarkup } from "@assets/svgs/markup";
import React from "react";
import { SvgXml } from "react-native-svg";

type Props = {
  name: string;
  color?: string;
};

export const SVGIcon = ({ name, color }: Props) => {
  return <SvgXml xml={getMarkup(color)[name]} />;
};
