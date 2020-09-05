import React from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";

export default function CustomInput(props) {
  return (
    <View>
      <View>
        <Text style={styles._label}>{props.label}</Text>
      </View>
      <TextInput style={styles._input} placeholder={props.placeholder} secureTextEntry={props.isPassword} />
    </View>
  );
}

const styles = StyleSheet.create({
  _label: {
    paddingVertical: 5,
    fontSize: 16,
    fontWeight: "700",
    color: "#565656",
  },
  _input: {
    borderWidth: 1,
    fontSize: 14,
    padding: 8,
    borderRadius: 4,
    borderColor: "#D9D9D8",
  },
});
