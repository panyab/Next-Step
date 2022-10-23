import React from "react";
import { Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
  
const ResourceScreen = () => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center", backgroundColor: "DEE7DC" }}>
      <Text style={{ color: "#97B689", fontSize: 40, fontFamily: "Jost_400Regular" }}>Resource Screen!</Text>
      <Ionicons name="md-images-outline" size={80} color="#97B689" />
    </View>
  );
};
  
export default ResourceScreen;