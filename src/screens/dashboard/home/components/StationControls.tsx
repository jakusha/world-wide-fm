import { SVGIcon } from "@shared/SVGIcon";
import theme from "@themes/index";
import { hp, wp } from "@utils/responsive-design";
import { Pressable, StyleSheet, View , Text} from "react-native";

const StationControls = () => {
  return (
    <View style={styles.container}>
      <Pressable style={styles.controlBtn}>
        <SVGIcon name="previousBtn" />
      </Pressable>

      <Pressable style={styles.controlBtn2}>
        <Text style={{color: theme.colors.WHITE}}>pause</Text>
      </Pressable>

      <Pressable style={styles.controlBtn}>
        <SVGIcon name="nextBtn" />
      </Pressable>
    </View>
  );
};

export default StationControls;

const styles = StyleSheet.create({
  container: {
    height: hp(80),
    flexDirection: "row",
    gap: 8,
    marginTop: 16
  },
  controlBtn: {
    backgroundColor: theme.colors.GREY_300,
    width: wp(80),
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  controlBtn2: {
    backgroundColor: theme.colors.BLACK,
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    borderRadius: 16,

  }
});
