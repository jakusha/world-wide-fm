import theme from "@themes/index";
import React from "react";
import { View } from "react-native";

interface Props {
  height?: number;
  backgroundColor?: string;
}

const LineSeperator = ({
  height = 2,
  backgroundColor = theme.colors.GREY_500,
}: Props) => {
  return <View style={{ height, backgroundColor }}></View>;
};

export default LineSeperator;
