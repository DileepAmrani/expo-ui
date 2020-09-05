import React, {useState} from "react";
import { View, Text, StyleSheet, TextInput, CheckBox } from "react-native";
export default function FourthStep(props) {

  return (
    <View style={styles._container} >

        <Text style={styles._text}>
         Ready to Publish!
        </Text>


    </View>
  );
}

const styles = StyleSheet.create({
  _container: {
    flex: 1,
    padding: 10,
    justifyContent:"center"
  },
  _input: {
    borderWidth: 2,
    width: "60%",
    fontSize: 40,
    borderRadius: 5,
    borderColor: "#86CDC0",
    padding: 5,
    margin: 5
  },
  
  _text:{
    fontSize: 25,
    color: "#444242",
    alignSelf: "center",
  }
});
