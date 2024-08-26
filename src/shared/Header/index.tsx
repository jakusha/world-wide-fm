import React from "react";
import { StyleSheet, View, Pressable, Text } from "react-native";
import { SVGIcon } from "@shared/SVGIcon";
import { wp } from "@utils/responsive-design";
import theme from "@themes/index";
interface Prop {
  backBtnFn: () => void;
  title?: string;
}
const Header = ({ backBtnFn, title }: Prop) => {
  return (
    <View style={styles.headerContainer}>
      <Pressable onPress={backBtnFn}>
        <SVGIcon name="backBtn" />
      </Pressable>

      <Text
        style={{
          ...theme.typography.h3,
          fontSize: wp(16),
          textTransform: "capitalize",
        }}
      >
        {title}
      </Text>

      <View style={{width: 30}}></View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: wp(8),
  },
});
