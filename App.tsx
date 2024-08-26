import "./gesture-handler";
import React, { useEffect } from "react";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { StyleSheet } from "react-native";
import RootNavigation from "./src/navigation";
import { AuthProvider } from "./src/contexts/AuthContext";

export default function App() {
  const [loaded, error] = useFonts({
    "Helvetica-Regular": require("./src/assets/fonts/HelveticaNeueBlack.otf"),
    "Helvetica-Medium": require("./src/assets/fonts/HelveticaNeueMedium.otf"),
    "Helvetica-Bold": require("./src/assets/fonts/HelveticaNeueBold.otf"),
    "Helvetica-Light": require("./src/assets/fonts/HelveticaNeueLight.otf"),
    "Helvetica-Thin": require("./src/assets/fonts/HelveticaNeueThin.otf"),
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }

  return (
    <AuthProvider>
      <RootNavigation />
    </AuthProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
