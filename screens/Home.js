import React from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback
} from "react-native";
import { globalStyles } from "../styles/globalStyle";
import COLORS from "../styles/colors";
import { Ionicons } from "@expo/vector-icons";

const Home = ({ navigation }) => {
  return (
    <>
    
      <View
        style={{
          height: 220,
          backgroundColor: COLORS.main,
          borderBottomRightRadius: 36,
        }}
      >
        <View style={styles.upper}>
          <View style={{ position: "relative", flexDirection: "row" }}>
            <Text style={globalStyles.txt}>Hello, Bishal</Text>
            <TouchableOpacity
              style={{ position: "absolute", right: 0, top: -9 }}
              onPress={() => navigation.openDrawer()}
            >
              <Ionicons name="menu" size={34} color="white" />
            </TouchableOpacity>
          </View>
          <View>
            <Text style={{ marginTop: 10, ...globalStyles.txt }}>
              It's lovely day right ?
            </Text>
          </View>
          <View style={{ position: "relative", ...styles.lower }}>
            <Ionicons
              style={{
                position: "absolute",
                zIndex: 10,
                marginTop: 12,
                marginLeft: 10,
              }}
              name="search"
              size={24}
              color="#777"
            />
            <TextInput style={styles.searchbar} placeholder="Search" />
          </View>
        </View>
      </View>
      <View style={globalStyles.container}>
        <Text style={globalStyles.boldText}>Home</Text>
        {/* dummy button to navigate between screens */}
        <Button
          title="Go to Chat"
          onPress={() => {
            navigation.navigate("Chat", {
              screen: "Chat",
            });
          }}
        />
      </View>
      
    </>
  );
};

export default Home;

const styles = StyleSheet.create({
  upper: {
    padding: 40,
    marginVertical: 10,
  },
  lower: {
    marginTop: 50,
  },
  searchbar: {
    height: 50,
    paddingLeft: 40,
    fontSize: 18,
    backgroundColor: "white",
    color: "#444",
    borderRadius: 24,
    paddingRight:16
  },
});
