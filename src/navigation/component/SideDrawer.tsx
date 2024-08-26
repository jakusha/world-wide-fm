import React from "react";
import { DrawerContentScrollView } from "@react-navigation/drawer";
import { wp } from "@utils/responsive-design";
import { View, Text, StyleSheet, Pressable } from "react-native";
import theme from "@themes/index";
import { SVGIcon } from "@shared/SVGIcon";
import { DrawerActions } from "@react-navigation/native";
import useLogin from "@utils/hooks/useLogin";

const user = { name: "elliot" };

const SideDrawer = (props: any) => {
  const { setIsSignedIn } = useLogin();
  const navigation = props.navigation;

  function handleDrawerItem(url: string) {
    console.log('hahaha!!!')
    navigation.navigate(url);
    navigation.dispatch(DrawerActions.closeDrawer());
  }

  function logout() {
    navigation.dispatch(DrawerActions.closeDrawer());
    setIsSignedIn(false);
  }

  return (
    <DrawerContentScrollView {...props}>
      <View
        style={{
          flexDirection: "row",
          padding: 16,
          gap: 12,
          alignItems: "center",
        }}
      >
        <View>
          <Text style={[styles.usernameTxt]}>{user.name}</Text>
        </View>
      </View>

      <Pressable
        onPress={() => handleDrawerItem("AppHome")}
        style={styles.drawerItem}
      >
        <View style={styles.iconTxt}>
          <SVGIcon name="home" color={theme.colors.GREY_100} />
        </View>
        <Text style={styles.drawerItemTxt}>Home</Text>
      </Pressable>


      <Pressable
        onPress={() => handleDrawerItem("Profile")}
        style={styles.drawerItem}
      >
        <View style={styles.iconTxt}>
          <SVGIcon name="user" color={theme.colors.GREY_100} />
        </View>
        <Text style={styles.drawerItemTxt}>Profile</Text>
      </Pressable>
      <Pressable
        onPress={() => handleDrawerItem("Favorite")}
        style={styles.drawerItem}
      >
         <View style={styles.iconTxt}>
          <SVGIcon name="favorite" color={theme.colors.GREY_100} />
        </View>
        <Text style={styles.drawerItemTxt}>Favorite</Text>
      </Pressable>

      <Pressable
        onPress={() => handleDrawerItem("History")}
        style={styles.drawerItem}
      >
         <View style={styles.iconTxt}>
          <SVGIcon name="time" color={theme.colors.GREY_100} />
        </View>
        <Text style={styles.drawerItemTxt}>History</Text>
      </Pressable>
    </DrawerContentScrollView>
  );
};

export default SideDrawer;

const styles = StyleSheet.create({
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 100,
  },
  usernameTxt: {
    ...theme.typography.bodySemiBold,
    fontSize: wp(18),
    textTransform: "capitalize",
  },
  handleTxt: {
    color: theme.colors.BLACK,
  },
  drawerItem: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    padding: 8,
    paddingHorizontal: 16,
    marginVertical: 8,
    position: "relative",
    alignSelf: "flex-start",
  },
  drawerItemTxt: {
    color: theme.colors.BLACK,
    ...theme.typography.bodySemiBold,
    fontSize: wp(32),
    lineHeight: 40
  },
  cryptoIcon: {
    width: 20,
    height: 20,
    marginLeft: 4,
  },
  iconTxt: { position: "absolute", top: -4, right: -4 },
});

type DrawerIconProps = {
  name: string;
  focused: boolean;
  indexIcon?: boolean;
};

const DrawerIcon = ({ name, focused, indexIcon = false }: DrawerIconProps) => {
  return (
    <SVGIcon
      name={focused ? `active-profile` : name}
      color={theme.colors.BLACK}
    />
  );
};
