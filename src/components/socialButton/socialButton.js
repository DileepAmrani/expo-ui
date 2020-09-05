import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';

export default function CustomSocialButton(props) {
  return <TouchableOpacity>
      <View style={styles._button}>
          <View style={{paddingHorizontal: 5}}>
          <Icon name={props.icon} size={30} color="#fff" />
          </View>
          <Text style={styles._buttonText}>
            {props.name}
          </Text>
      </View>
  </TouchableOpacity>;
}

const styles = StyleSheet.create({
    _button:{
        backgroundColor: "#1878F2",
        paddingVertical: 10,
        borderRadius: 5,
        marginTop: 8,
        flexDirection: "row",
        justifyContent: "center"
    },
    _buttonText:{
        color: "#fff",
        alignSelf: "center",
        fontSize: 20,
        fontWeight: "600"
    }
});
