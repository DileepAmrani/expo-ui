import React, {useState} from "react";
import { View, Text, StyleSheet, TextInput, CheckBox } from "react-native";
export default function ThirdStep(props) {
  const [isSelected, setSelection] = useState(false);

  return (
    <View style={styles._container} >
      <TextInput style={styles._input} placeholder="Enter price"/>

      <View style={styles._checkBoxArea}>
        <Text style={styles._text}>
          Frim on price?
        </Text>
      <CheckBox
          value={isSelected}
          onValueChange={setSelection}
          style={styles._checkbox}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  _container: {
    flex: 1,
    // justifyContent: "center"
  },
  _input: {
    borderWidth: 2,
    width: "60%",
    alignSelf: "center",
    fontSize: 40,
    borderRadius: 5,
    borderColor: "#86CDC0",
    padding: 5,
    margin: 5
  },
  _checkBoxArea: {
    borderWidth: 1,
    marginTop: 10,
    flexDirection: "row",
    padding: 10,
    borderColor:"#E4E4E4"
  },
  _text:{
    fontSize: 20,
    flex: 1,
    color: "#444242"
  }
});
