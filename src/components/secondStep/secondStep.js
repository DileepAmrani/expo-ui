import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Picker,
  ScrollView,
} from "react-native";
import Entypo from "react-native-vector-icons/Entypo";
import Slider from "@react-native-community/slider";
export default function FirstStep(props) {
  const [value, setValue] = useState("Clean");
  const [color, setColor] = useState();

  return (
    <View style={styles._container}>
      <ScrollView>
        <View style={styles._input_box}>
          <View>
            <Text style={styles._label}>TITLE STATUS</Text>
          </View>
          <View style={styles._picker}>
            <Picker
              selectedValue={value}
              onValueChange={(lang) => setValue(lang)}
            >
              <Picker.Item label="Clean" value="Clean" />
              <Picker.Item label="Bad" value="Bad" />
              <Picker.Item label="Good" value="Good" />
              <Picker.Item label="New" value="New" />
            </Picker>
          </View>
        </View>

        <View style={styles._input_box}>
          <View>
            <Text style={styles._label}>VEHICALE COLOR</Text>
          </View>
          <View style={styles._picker}>
            <Picker
              selectedValue={color}
              onValueChange={(color) => setColor(color)}
            >
              <Picker.Item label="Red" value="Red" />
              <Picker.Item label="Green" value="Green" />
              <Picker.Item label="Blue" value="Blue" />
              <Picker.Item label="Gray" value="Gray" />
            </Picker>
          </View>
        </View>

        <View style={styles._input_box}>
          <View>
            <Text style={styles._label}>VIN</Text>
          </View>
          <View style={styles._input}>
            <TextInput style={{ flex: 1 }} />
            <Entypo name="camera" size={24} color="#0aa47d" />
          </View>
        </View>

        <View style={styles._input_box}>
          <View>
            <Text style={styles._label}>MILEAGE</Text>
          </View>
          <View style={styles._input}>
            <TextInput style={{ flex: 1 }} />
            <Text style={{ fontSize: 16 }}>miles</Text>
          </View>
        </View>

        <View style={styles._input_box}>
          <View>
            <Text style={styles._label}>TITLE STATUS</Text>
          </View>
          <View style={styles._picker}>
            <Picker
              selectedValue={value}
              onValueChange={(lang) => setValue(lang)}
            >
              <Picker.Item label="Clean" value="Clean" />
              <Picker.Item label="Bad" value="Bad" />
              <Picker.Item label="Good" value="Good" />
              <Picker.Item label="New" value="New" />
            </Picker>
          </View>
        </View>

        <View style={styles._slider}>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Text style={styles._label}>CONDITION</Text>
            <Text style={styles._label}>GOOD</Text>
          </View>
          <Slider maximumValue={100} value={30} />
        </View>


        <View style={styles._input_box}>
          <View>
            <Text style={styles._label}>DESCRIPTION</Text>
          </View>
          <View style={styles._input}>
            <TextInput style={styles._textArea} placeholder="Type Something...."/>
          </View>
        </View>

      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  _container: {
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  _picker: {
    borderWidth: 1,
    fontSize: 14,
    borderRadius: 4,
    borderColor: "#D9D9D8",
  },
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
    flexDirection: "row",
  },
  _textArea: {
    // minHeight: 50,
  },
  _slider: {},
});
