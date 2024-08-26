import { StyleSheet, SafeAreaView, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { isAndroid } from "../../utils/platform";
import React from "react";


interface ScreenProps {
    children: React.ReactNode | React.ReactNode[],
    backgroundColor?: string;
}

export const Screen = ({ children, backgroundColor="#ffffff" }: ScreenProps) => {
  return (
    <SafeAreaView style={{...styles.container, backgroundColor}}>
      <View style={styles.wrapper}>
        <StatusBar backgroundColor="white" translucent />
        {children}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: isAndroid ? 60 : 0,
  },
  wrapper: {
    paddingHorizontal: 16,
    flex: 1,
    position: 'relative'
  }
});
