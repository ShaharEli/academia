import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import Auth from "./navigation/Auth";
import Main from "./navigation/Main";
import DrawerTab from "./navigation/Drawer";
import { useUserContext } from "./providers/user";

export default function App() {
  const { user } = useUserContext();
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <NavigationContainer>
        {user ? <DrawerTab /> : <Auth />}
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // alignItems: 'center',
    // justifyContent: 'center',
    // paddingTop:34,
  },
});
