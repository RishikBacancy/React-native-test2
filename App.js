import React from "react";
import { View, Text, StyleSheet } from "react-native";
import TabNavigators from "./navigation/TabNavigation";

const App = () =>
{
  return(
    <TabNavigators/>
  );
};

const styles = StyleSheet.create({
  screen:{
    flex:1,
    justifyContent:"center",
    alignItems:"center",
  }
});

export default App;