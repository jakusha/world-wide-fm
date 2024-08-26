import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import SideDrawer from "./component/SideDrawer";
import DashboardNavigation from "./dashboard";

const DrawerNavigator = createDrawerNavigator();

const DrawerNavigation = () => {
  return (
    <DrawerNavigator.Navigator
      screenOptions={{ headerShown: false }}
      drawerContent={(props) => <SideDrawer {...props} />}
      initialRouteName="Home"
    >
      <DrawerNavigator.Screen name="Home" component={DashboardNavigation} />
    </DrawerNavigator.Navigator>
  );
};

export default DrawerNavigation;
