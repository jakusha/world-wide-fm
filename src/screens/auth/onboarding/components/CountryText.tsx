import { StyleSheet, Text } from "react-native";
import theme from "@themes/index";

interface CountryText {
  items: string[];
  isLeftAligned: boolean;
  randomIndexes: number[];
}

const CountryText = ({ items, isLeftAligned, randomIndexes }: CountryText) => {
  return items.map((item, idx) => {
    const isHighlighted = randomIndexes.includes(idx);
    return (
      <Text
        key={idx}
        style={[
          styles.countryTxt,
          {
            position: "absolute",
            [isLeftAligned ? "left" : "right"]: idx % 2 === 0 ? 32 : 64,
            top: idx * (isLeftAligned ? 80 : 70) + (isLeftAligned ? 54 : 24),
            color: isHighlighted ? theme.colors.BLACK : theme.colors.GREY_100,
          },
        ]}
      >
        {item}
      </Text>
    );
  });
};

export default CountryText;

const styles = StyleSheet.create({
    countryTxt: {
        ...theme.typography.bodySemiBold,
      },
})
