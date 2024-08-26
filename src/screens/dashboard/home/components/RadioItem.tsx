import { SVGIcon } from "@shared/SVGIcon";
import theme from "@themes/index";
import { hp, wp } from "@utils/responsive-design";
import React, { useState } from "react";
import { Text, StyleSheet, Pressable } from "react-native";

interface ItemProps {
  item: {
    id: number;
    radioNum: string;
    isLiked: boolean;
  };
  navigation: any;
}

const RadioItem = ({ item, navigation }: ItemProps) => {
  const [radioItem, setRadioItem] = useState(() => {
    return { ...item };
  });

  function toggleHeart() {
    setRadioItem((radioItem) => {
      return { ...radioItem, isLiked: !radioItem.isLiked };
    });
  }

  return (
    <Pressable style={styles.radioCont} onPress={()=> navigation.navigate('StationInfo', {id: radioItem.id})}>
      <Pressable
        onPress={toggleHeart}
        style={{
          width: 25,
          height: 25,
          position: "absolute",
          right: 24,
          top: 8,
        }}
      >
        {radioItem.isLiked ? (
          <SVGIcon name="active-heart" />
        ) : (
          <SVGIcon name="heart" />
        )}
      </Pressable>
      <Text style={styles.radioTxt}>{item.radioNum}</Text>
    </Pressable>
  );
};

export default RadioItem;

const styles = StyleSheet.create({
  radioCont: {
    padding: 24,
    borderRadius: 8,
    width: "49%",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    height: hp(150),
    backgroundColor: theme.colors.GREY_300
  },
  radioTxt: {
    ...theme.typography.bodySemiBold,
    fontSize: wp(32),
    color: theme.colors.BLACK,
  },
});
