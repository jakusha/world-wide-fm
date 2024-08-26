import React from "react";
import {
  View,
  Pressable,
  ViewStyle,
  Text,
  StyleSheet,
  ButtonProps,
} from "react-native";
import theme from "@themes/index";
import { deviceWidth, getBottomSpace, hp, wp } from "@utils/responsive-design";
import { SVGIcon } from "@shared/SVGIcon";

interface Props extends ButtonProps {
  title: string;
  disabled?: boolean;
  textColor?: string;
  textVariant?: "body" | "bodySemiBold" | "bodyBold";
  backgroundColor?: string;
  buttonContainerStyle?: ViewStyle;
  isBottom: boolean;
  bottomValue?: number;
  icon?: string;
  ButtonIcon?: React.ComponentType;
}

const Button = ({
  title,
  disabled,
  textColor = theme.colors.BLACK,
  textVariant = "bodySemiBold",
  backgroundColor,
  buttonContainerStyle,
  isBottom,
  bottomValue,
  icon,
  ButtonIcon,
  ...props
}: Props) => {
  return (
    <View
      style={[
        isBottom && styles.buttonContainerPositionStyle,
        { bottom: bottomValue && hp(bottomValue) + getBottomSpace() },
      ]}
    >
      <Pressable
        disabled={disabled}
        style={[
          styles.buttonStyle,
          { backgroundColor },
          { ...buttonContainerStyle },
          { opacity: disabled ? 0.5 : 1 },
        ]}
        {...props}
      >
        {icon && <SVGIcon name={icon} />}
        <Text style={[{ color: textColor }, theme.typography[textVariant]]}>
          {title}
        </Text>
      </Pressable>
    </View>
  );
};

export default Button;

const styles = StyleSheet.create({
  buttonStyle: {
    width: deviceWidth - wp(32),
    backgroundColor: theme.colors.PRIMARY,
    height: hp(50),
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 12,
    gap: 8,
    flexDirection: "row",
  },
  buttonContainerPositionStyle: {
    position: "absolute",
    bottom: hp(50) + getBottomSpace(),
    alignSelf: "center",
  },
});
