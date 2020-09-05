import React, { useState } from "react";
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity } from "react-native";
import {
  CustomButton,
  FirstStep,
  SecondStep,
  ThirdStep,
  FourthStep
} from "./../../components";
import Icon from "react-native-vector-icons/AntDesign";
export default function Login(props) {
  const [active, setactive] = useState(1);
  function ToHome(params) {
    props.navigation.navigate("Home");
  }

  const nextScreen = () => {
    setactive(active + 1);
  };
  const publish =()=>{
    props.navigation.navigate("Home")
  }
  console.log(active);
  return (
    <SafeAreaView style={styles._safearea}>
      <View style={styles._container}>
        <View style={styles._header}>
          <View>
            <TouchableOpacity onPress={()=> publish()}>
            <Icon name="arrowleft" color="#fff" size={30} />
            </TouchableOpacity>
          </View>
          <View style={{ flex: 1, marginHorizontal: 10 }}>
            <Text style={styles._title}>Post an item</Text>
          </View>
          <View>
            <Icon name="questioncircle" color="#fff" size={25} />
          </View>
        </View>

        <View style={{ flex: 1, backgroundColor: "#fbfbfb", paddingTop: 10}}>
          {active == 1 ? <FirstStep /> : null}
          {active == 2 ? <SecondStep /> : null}
          {active == 3 ? <ThirdStep /> : null}
          {active == 4 ? <FourthStep /> : null}
        </View>

        <View style={styles._footer}>
          {
            active <= 3 ? <CustomButton buttonText="Next" onPress={() => nextScreen()} />:
            <CustomButton buttonText="Publish" onPress={() => publish()} />
          }
          <View style={styles.steper}>
            <View>
              <View
                style={[active >= 1 ? styles._active_step : styles._step_num]}
              >
                <Text>1</Text>
              </View>
              <Text>Photo</Text>
            </View>
            <View style={styles._block}>
              <Text
                style={[active >= 2 ? styles._activeDot : styles._dotted]}
              ></Text>
              <Text
                style={[active >= 2 ? styles._activeDot : styles._dotted]}
              ></Text>
              <Text
                style={[active >= 2 ? styles._activeDot : styles._dotted]}
              ></Text>
            </View>

            <View>
              <View
                style={[active >= 2 ? styles._active_step : styles._step_num]}
              >
                <Text>2</Text>
              </View>
              <Text>Photo</Text>
            </View>
            <View style={styles._block}>
              <Text
                style={[active >= 3 ? styles._activeDot : styles._dotted]}
              ></Text>
              <Text
                style={[active >= 3 ? styles._activeDot : styles._dotted]}
              ></Text>
              <Text
                style={[active >= 3 ? styles._activeDot : styles._dotted]}
              ></Text>
            </View>

            <View>
              <View
                style={[active >= 3 ? styles._active_step : styles._step_num]}
              >
                <Text>3</Text>
              </View>
              <Text>Photo</Text>
            </View>
            <View style={styles._block}>
              <Text
                style={[active >= 4 ? styles._activeDot : styles._dotted]}
              ></Text>
              <Text
                style={[active >= 4 ? styles._activeDot : styles._dotted]}
              ></Text>
              <Text
                style={[active >= 4 ? styles._activeDot : styles._dotted]}
              ></Text>
            </View>
            <View>
              <View
                style={[active >= 4 ? styles._active_step : styles._step_num]}
              >
                <Text>4</Text>
              </View>
              <Text>Photo</Text>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  _safearea: {
    flex: 1,
    paddingTop: 30,
    justifyContent: "center",
    alignItems: "center",
    // padding: 10
  },
  _container: {
    flex: 1,
    backgroundColor: "#f5f2f2",
  },
  _header: {
    backgroundColor: "#1c797a",
    flexDirection: "row",
    padding: 10,
    paddingVertical: 15,
  },
  _title: {
    fontSize: 20,
    color: "#fff",
  },
  _footer: {
    borderWidth: 1,
    padding: 15,
    paddingBottom: 20,
    backgroundColor: "#FFF",
    borderColor: "#f3f3f3",
  },
  steper: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    alignItems: "center",
    flexWrap: "nowrap",
    marginTop: 20,
  },
  _block: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    width: 50,
    marginBottom: 15,
  },
  _dotted: {
    borderRadius: 100,
    backgroundColor: "#dcdcdc",
    height: 8,
    width: 8,
  },
  _step_num: {
    height: 30,
    width: 30,
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#dcdcdc",
  },
  _activeDot: {
    borderRadius: 100,
    backgroundColor: "#2cb288",
    height: 8,
    width: 8,
    color: "#fff",
  },
  _active_step: {
    height: 30,
    width: 30,
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#2cb288",
  },
});
