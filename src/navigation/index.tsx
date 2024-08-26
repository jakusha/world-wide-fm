import React, { useContext, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import AuthNavigation from "./auth";
import { RootStackParamList } from "../types/navigation";
import { Linking, Platform } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { navigationRef } from "@utils/navigation";
import useLogin from "@utils/hooks/useLogin";
import DrawerNavigation from "./drawer";

const PERSISTENCE_KEY = "NAVIGATION_STATE_V2";

const MainNavigator = createStackNavigator<RootStackParamList>();

const RootNavigation = () => {
  const [isReady, setIsReady] = React.useState(false);
  const [initialState, setInitialState] = React.useState();
  const {isSignedIn} = useLogin();

  React.useEffect(() => {
    const restoreState = async () => {
      try {
        const initialUrl = await Linking.getInitialURL();

        if (Platform.OS !== "web" && initialUrl == null) {
          // Only restore state if there's no deep link and we're not on web
          const savedStateString = await AsyncStorage.getItem(PERSISTENCE_KEY);
          const state = savedStateString
            ? JSON.parse(savedStateString)
            : undefined;

          if (state !== undefined) {
            setInitialState(state);
          }
        }
      } finally {
        setIsReady(true);
      }
    };

    if (!isReady) {
      restoreState();
    }
  }, [isReady]);

  if (!isReady) {
    return null;
  }
  return (
    <NavigationContainer
      ref={navigationRef}
      initialState={initialState}
      onStateChange={(state) => {
        AsyncStorage.setItem(PERSISTENCE_KEY, JSON.stringify(state));
      }}
    >
      <MainNavigator.Navigator
        initialRouteName="Auth"
        screenOptions={{ headerShown: false }}
      >
        {!isSignedIn ? (
          <MainNavigator.Screen name="Auth" component={AuthNavigation} />
        ) : (
          <MainNavigator.Screen
            name="AppDashBoard"
            component={DrawerNavigation}
          />
        )}
      </MainNavigator.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigation;
