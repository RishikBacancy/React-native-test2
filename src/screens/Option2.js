import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Option2 = () =>
{
  return(
    <View style={styles.screen}>
      <Text>Option2</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  screen:{
    flex:1,
    justifyContent:"center",
    alignItems:"center",
  }
});

export default Option2;