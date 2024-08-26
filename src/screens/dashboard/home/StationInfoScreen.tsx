import { StackScreenProps } from "@react-navigation/stack";
import Header from "@shared/Header";
import { Screen } from "@shared/Screen";
import { DashBoardStackParamList } from "src/types";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { SVGIcon } from "@shared/SVGIcon";
import theme from "@themes/index";
import { wp } from "@utils/responsive-design";
import StationControls from "./components/StationControls";

type ScreenProps = StackScreenProps<DashBoardStackParamList, "StationInfo">;

const StationInfo = ({ navigation }: ScreenProps) => {
  return (
    <Screen>
      <View style={styles.header}>
        <Pressable onPress={() => navigation.goBack()}>
          <SVGIcon name="backBtn" />
        </Pressable>

        <View style={styles.countryCont}>
          <Text style={styles.countryTxt}>Nigeria</Text>
        </View>

        <View style={styles.fmCont}>
          <Text style={styles.fmTxt}>FM</Text>
        </View>
      </View>
      <View style={{ marginTop: 32 }}>
        <Text style={styles.stationTxt}>
          <Text style={{ color: theme.colors.GREY_300 }}>0</Text>94.4
        </Text>
        <Text style={styles.stationName}>{"Albarka Radio"}</Text>
      </View>
 
      <View style={{marginTop: 64}}>
        <StationControls />
      </View>
    </Screen>
  );
};

export default StationInfo;

const styles = StyleSheet.create({
  header: { flexDirection: "row", alignItems: "center", gap: 8 },
  countryCont: {
    padding: 12,
    backgroundColor: theme.colors.GREY_300,
    borderRadius: 16,
  },
  countryTxt: {
    color: theme.colors.BLACK,
    ...theme.typography.bodySemiBold,
  },
  fmCont: {
    marginLeft: "auto",
    backgroundColor: theme.colors.BLACK,
    padding: 12,
    borderRadius: 16,
  },
  fmTxt: { color: theme.colors.WHITE },
  stationTxt: {
    fontFamily: "Helvetica-Medium",
    fontSize: wp(88),
    textAlign: "center",
  },
  stationName: {
    color: theme.colors.GREY_400,
    textAlign: "center",
    fontSize: wp(16),
  },
});
