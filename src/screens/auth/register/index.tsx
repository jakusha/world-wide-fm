import { Screen } from "@shared/Screen";
import { View, Text, StyleSheet } from "react-native";
import theme from "@themes/index";
import { hp, wp } from "@utils/responsive-design";
import Header from "@shared/Header";
import { StackScreenProps } from "@react-navigation/stack";
import { AuthStackParamList } from "src/types";
import Button from "@design-system/Button";
import { LoginInfo } from "@contexts/AuthContext";
import { useContext } from "react";

type ScreenProps = StackScreenProps<AuthStackParamList, "Signup">;

const Register = ({ navigation }: ScreenProps) => {
  const { setIsSignedIn } = useContext(LoginInfo);

  function handleSignIn() {
    setIsSignedIn(true);
  }

  return (
    <Screen>
      <Header backBtnFn={() => navigation.goBack()} />

      <View style={styles.buttonGroup}>
        <Button
          title="Sign in with google"
          icon="googleIcon"
          isBottom={false}
          disabled={false}
          backgroundColor={theme.colors.WHITE}
          textColor={theme.colors.GREY_200}
          buttonContainerStyle={{
            borderWidth: 1,
            borderColor: theme.colors.GREY_200,
          }}
          onPress={handleSignIn}
        />
        <Button
          title="Sign in with apple"
          icon="appleIcon"
          isBottom={false}
          disabled={false}
          backgroundColor={theme.colors.BLACK}
          textColor={theme.colors.WHITE}
        />
        <Button
          title="Sign in with email"
          icon="emailIcon"
          isBottom={false}
          disabled={false}
          backgroundColor={theme.colors.WHITE}
          textColor={theme.colors.GREY_200}
          buttonContainerStyle={{
            borderWidth: 1,
            borderColor: theme.colors.GREY_200,
          }}
        />
      </View>

      <View style={{ marginTop: "auto", position: "relative" }}>
        <Text style={[styles.txtTitle, styles.txtTitle3]}>WWFM</Text>
        <View style={styles.ball1}></View>
        <View style={styles.ball2}></View>
      </View>
    </Screen>
  );
};

export default Register;

const styles = StyleSheet.create({
  txtTitle: {
    ...theme.typography.h1,
    fontSize: wp(40),
  },
  txtTitle3: {
    color: theme.colors.BLACK,
    fontSize: wp(72),
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
  buttonGroup: {
    gap: 16,
    marginTop: hp(150),
  },
});
