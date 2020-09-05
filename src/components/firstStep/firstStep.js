import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView } from "react-native";
import Entypo from "react-native-vector-icons/Entypo";
import CustomInput from "./../input/input";
export default function FirstStep(props) {
  return (
    <View style={styles._container} >
      <SafeAreaView >

      <View >
        <TouchableOpacity onPress={props.onPress}>
          <View style={styles._button}>
            <View style={styles._column}>
              <Entypo name="camera" color="#1c797a" size={25} />
            </View>
            <View style={styles._column}>
              <Text style={styles._buttonText}>Take Photo</Text>
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={props.onPress}>
          <View style={styles._button}>
            <View style={styles._column}>
              <Entypo name="images" color="#1c797a" size={25} />
            </View>
            <View style={styles._column}>
              <Text style={styles._buttonText}>Select Photo</Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>

      <View >
        <CustomInput label="TITLE" placeholder="Name, brand, model, etc" />
      </View>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  _container: {
    flexDirection:"column", 
    flex: 1, 
    justifyContent: "center",
    padding: 10
  },
  _button: {
    paddingVertical: 10,
    borderRadius: 5,
    marginTop: 8,
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    borderColor: "#1c797a",
  },
  _buttonText: {
    alignSelf: "center",
    fontSize: 18,
    fontWeight: "700",
    color: "#1c797a",
  },
  _column: {
    marginHorizontal: 5,
  },
});
