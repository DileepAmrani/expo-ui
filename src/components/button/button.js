import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export default function CustomButton(props) {
  return <TouchableOpacity onPress={props.onPress}>
      <View style={styles._button}>
          <Text style={styles._buttonText}>
              {props.buttonText} 
          </Text>
      </View>
  </TouchableOpacity>;
}

const styles = StyleSheet.create({
    _button:{
        backgroundColor: "#2AAA80",
        paddingVertical: 10,
        borderRadius: 5,
        marginTop: 8
    },
    _buttonText:{
        color: "#fff",
        alignSelf: "center",
        fontSize: 20,
        fontWeight: "600"
    }
});
