import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Entypo from "react-native-vector-icons/Entypo";
import { CustomButton, Slider } from "./../../components";
import Icon from "react-native-vector-icons/AntDesign";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
export default function Detail(props) {
  return (
    <View style={{ backgroundColor: "#ebebeb" }}>
      <View style={styles._header}>
        <View>
          <TouchableOpacity onPress={() => props.navigation.goBack()}>
            <Icon name="arrowleft" color="#fff" size={30} />
          </TouchableOpacity>
        </View>
        <View>
          <Text style={styles._header_heading}>Product Detail</Text>
        </View>
        <View>
          <TouchableOpacity>
            <MaterialIcons name="notifications-none" color="#fff" size={30} />
          </TouchableOpacity>
        </View>
      </View>

      <View style={{ height: "30%" }}>
        <Slider />
      </View>
      <View style={styles._details}>
        <Text style={styles._name}>Mercedes S Class</Text>
        <View style={{ flexDirection: "row" }}>
          <View style={styles._column}>
            <Text style={styles._stratingFrom}>$19,600</Text>
          </View>
          <View style={styles._column}>
            <Text style={styles._price}>$17,500</Text>
          </View>
          <View style={styles._column}>
            <Entypo name="star" color="#c41d41" size={18} />
          </View>
        </View>
        <View>
          <Text>DHA, Karachi</Text>
        </View>

        <View style={styles._detail_section}>
          <Text>Car Information</Text>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-evenly",
              marginVertical: 10,
            }}
          >
            <View style={{ borderRightWidth: 1, paddingRight: 30 }}>
              <Text style={styles._value}>58,67Km</Text>
              <Text style={styles._property}>Mileage</Text>
            </View>
            <View>
              <Text style={styles._value}>2020</Text>
              <Text style={styles._property}>Model</Text>
            </View>
          </View>
        </View>

        <View style={styles._car_detail}>
          <Text style={styles._detailsText}>
            Take the Corolla LE's fuss-less ride and handling, drop the power
            slightly and shoot the fuel-economy number into another realm, and
            you have the new Corolla Hybrid. The first gas-electric. Corolla
            ever solid in the US.
          </Text>
        </View>
        <View style={styles._buttonBox}>
          <CustomButton buttonText="Place Bid" />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  _header: {
    backgroundColor: "#2AAA80",
    marginTop: 30,
    padding: 5,
    flexDirection: "row",
    paddingVertical: 15,
    justifyContent: "space-between",
  },
  _header_heading: {
    fontSize: 20,
    color: "#fff"
  },
  _details: {
    height: "70%",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    backgroundColor: "#fff",
    padding: 20,
  },
  _column: {
    marginRight: 5,
  },
  _name: {
    fontSize: 25,
    color: "#080808",
    fontWeight: "700",
  },
  _stratingFrom: {
    color: "#c41d41",
    fontSize: 16,
    fontWeight: "700",
  },
  _price: {
    backgroundColor: "#dddddd",
    paddingHorizontal: 5,
    color: "#878787",
    fontSize: 16,
  },
  _detail_section: {
    marginTop: 20,
  },
  _value: {
    fontSize: 25,
    alignSelf: "center",
    fontWeight: "700",
  },
  _property: {
    fontSize: 18,
    alignSelf: "center",
    color: "#9c9c9c",
  },

  _car_detail: {
    marginTop: 30,
  },
  _detailsText: {
    fontSize: 14,
  },
  _buttonBox: {
    marginTop: 10,
  },
});
