import React from "react";
import { DashBoardStackParamList } from "../types/navigation";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "@screens/dashboard/home";
import Profile from "@screens/dashboard/profile";
import History from "@screens/dashboard/history";
import Favorite from "@screens/dashboard/favorite";
import StationInfo from "@screens/dashboard/home/StationInfoScreen";
import CountryList from "@screens/dashboard/home/CountryList";

const DashboardNavigator =
  createNativeStackNavigator<DashBoardStackParamList>();

const DashboardNavigation = () => {
  return (
        <DashboardNavigator.Navigator
          initialRouteName="AppHome"
          screenOptions={{ headerShown: false }}
        >
          <DashboardNavigator.Screen name="AppHome" component={Home}/>
          <DashboardNavigator.Screen name="Profile" component={Profile}/>
          <DashboardNavigator.Screen name="History" component={History}/>
          <DashboardNavigator.Screen name="Favorite" component={Favorite}/>
          <DashboardNavigator.Screen name="StationInfo" component={StationInfo}/>
          <DashboardNavigator.Screen name="CountryList" component={CountryList}/>

        </DashboardNavigator.Navigator>
  );
};

export default DashboardNavigation;
