import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const Option1 = props =>
{
  return(
    <View style={styles.screen}>
      <Text>Option1</Text>
      <Button title="Screen 2" onPress={()=>{props.navigation.navigate("Screen2")}}/>
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

export default Option1;