import { countryOnboard } from "@data/index";
import { Screen } from "@shared/Screen";
import theme from "@themes/index";
import { getRandomIndexes } from "@utils/helpers";
import { wp } from "@utils/responsive-design";
import { View, Text, StyleSheet, Dimensions, Pressable } from "react-native";
import CountryText from "./components/CountryText";
import { SVGIcon } from "@shared/SVGIcon";
import { StackScreenProps } from "@react-navigation/stack";
import { AuthStackParamList } from "src/types";
import { navigation } from "@utils/navigation";

type ScreenProps = StackScreenProps<AuthStackParamList, "Onboarding">;

const Onboarding = ({ navigation }: ScreenProps) => {
  const randomIndexes = getRandomIndexes(countryOnboard.length, 3);

  return (
    <Screen>
      <View style={{ flex: 1, marginHorizontal: -16 }}>
        <View style={styles.container1}>
          <CountryText
            items={countryOnboard.slice(0, 4)}
            isLeftAligned={false}
            randomIndexes={randomIndexes}
          />

          <CountryText
            items={countryOnboard.slice(4)}
            isLeftAligned={true}
            randomIndexes={randomIndexes}
          />
        </View>
        <View style={styles.container2}>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <View>
              <Text style={[styles.txtTitle, styles.txtTitle1]}>Listen</Text>
              <Text style={[styles.txtTitle, styles.txtTitle2]}>Online</Text>
            </View>

            <Pressable
              style={{
                borderWidth: 2,
                width: 60,
                height: 60,
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: theme.colors.WHITE,
              }}
              onPress={() => navigation.navigate("Signup")}
            >
              <SVGIcon name="rightIcon" />
            </Pressable>
          </View>

          <View style={{ marginTop: "auto", position: "relative" }}>
            <Text style={[styles.txtTitle, styles.txtTitle3]}>WWFM</Text>
            <View style={styles.ball1}></View>
            <View style={styles.ball2}></View>
          </View>
        </View>
      </View>
    </Screen>
  );
};

export default Onboarding;

const styles = StyleSheet.create({
  container1: {
    height: "40%",
    backgroundColor: theme.colors.WHITE,
    position: "relative",
  },
  container2: {
    height: "60%",
    backgroundColor: theme.colors.BLACK,
    padding: 16,
  },
  txtTitle: {
    ...theme.typography.h1,
    fontSize: wp(40),
  },
  txtTitle1: {
    color: theme.colors.WHITE,
  },
  txtTitle2: {
    color: theme.colors.GREY_100,
  },
  txtTitle3: {
    color: theme.colors.WHITE,
    fontSize: wp(72),
  },
  countryTxt: {
    ...theme.typography.bodySemiBold,
  },
  ball1: {
    width: 30,
    height: 30,
    borderRadius: 100,
    backgroundColor: theme.colors.RED_100,
    position: "absolute",
    right: 64,
    bottom: 16,
  },
  ball2: {
    width: 60,
    height: 60,
    borderRadius: 100,
    backgroundColor: theme.colors.BROWN_100,
    position: "absolute",
    top: -64,
  },
});
