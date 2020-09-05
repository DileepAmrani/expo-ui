import React, { useState } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import Entypo from "react-native-vector-icons/Entypo";
import AntDesign from "react-native-vector-icons/AntDesign";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
export default function CustomCard(props) {
 
  return (
    <View style={styles._card} key={props.key}>
      <View style={styles._image_side}>
        <Image
          source={{
            uri: props.image
          }}
          style={{ width: "100%", height: 160,}}
        />
      </View>
      <View style={styles._detail_side}>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <View>
        <Text style={styles._name}>{props.name}</Text>
          </View>
          <View>
            <Entypo name="heart-outlined" size={25} />
          </View>
        </View>

        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <View style={{ paddingVertical: 5 }}>
            <Text style={styles._detail}>Toyota redesigned the Corolla</Text>

            <Text style={styles._detail}>sedan 2020 169-horsepower</Text>
            <Text style={styles._detail}>
              2.0-litter engine is newly optional.
            </Text>
          </View>
          <View style={{ paddingVertical: 10 }}>
            <AntDesign name="sharealt" size={25} />
          </View>
        </View>

        <View style={{ flexDirection: "row", paddingVertical: 8 }}>
          <View style={styles._icons}>
            <TouchableOpacity>
            <Entypo name="location-pin" size={20} />
            </TouchableOpacity>
          </View>
          <View style={styles._icons}>
            <TouchableOpacity>
            <AntDesign name="tool" size={20} />
            </TouchableOpacity>
          </View>
          <View style={styles._icons}>
            <TouchableOpacity>
            <MaterialCommunityIcons name="fuel" size={20} />
            </TouchableOpacity>
          </View>
        </View>

        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <View>
            <Text style={styles._stratingFrom}>Starting from</Text>
          </View>
          <View>
            <Text style={styles._startingPrice}>${props.starting}</Text>
          </View>
          <View>
            <TouchableOpacity onPress={props.onPress}>
              <View style={styles._button}>
                <Text style={styles._buttonText}>CONTACT</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  _card: {
    flexDirection: "row",
    elevation: 5,
    maxHeight: 160,
    backgroundColor: "#fff",
    shadowColor: "#000000",
    shadowOpacity: 0.8,
    shadowRadius: 2,
    shadowOffset: {
      height: 1,
      width: 1,
    },
    marginVertical: 2,
  },
  _image_side: {
    width: "40%",
  },
  _detail_side: {
    flex: 1,
    padding: 5,
    paddingVertical: 10,
  },
  _name: {
    fontSize: 16,
    color: "#E21F26",
    fontWeight: "700",
  },
  _detail: {
    fontSize: 12,
  },
  _icons: {
    marginRight: 5
  },
  _stratingFrom: {
    color: "red",
    fontSize: 12,
  },
  _startingPrice: {
    fontSize: 12,
  },
  _button: {
    backgroundColor: "red",
  paddingVertical: 8,
    paddingHorizontal: 5,
    borderRadius: 5,
    top: -8
  },
  _buttonText: {
    color: "#fff",
    fontSize: 12,
  },
});
