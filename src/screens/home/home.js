import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TextInput,
  ScrollView,
} from "react-native";
import Icon from "react-native-vector-icons/AntDesign";
import Entypo from "react-native-vector-icons/Entypo";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { CustomCard } from "./../../components";
export default function Home(props) {
  const [items, setItems] = useState([
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSRUXSRnstROQ_Zq8FhXw0TjBMs-Bw-cx2KCQ&usqp=CAU",
      name: "Toyota Corolla",
      starting: "19,600",
      detail: "",
    },
    {
      image: "https://www.freepngimg.com/thumb/car/4-2-car-png-hd-thumb.png",
      name: "Mercedes S Class",
      starting: "94,250",
      detail: "",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTfz4dimiyG5x5v5FShm6kKyhjAcGzIIwa-bQ&usqp=CAU",
      name: "Audi A8",
      starting: "85,200",
      detail: "",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSAQwDqxopsWB-TQTUF0NIF6QrkOwslMDbPJA&usqp=CAU",
      name: "BMW7-Series",
      starting: "86,450",
      detail: "",
    },
  ]);

  const goToDetail = () =>{
    props.navigation.navigate("Product Detail");
  }

  return (
    <SafeAreaView style={styles._safearea}>
      <View style={styles.container}>
        <View style={styles._header}>
          <View>
            <Icon name="arrowleft" size={30} />
          </View>
          <View style={{ flex: 1, marginHorizontal: 5 }}>
            <TextInput placeholder="Tap here to search" />
          </View>
          <View>
            <Entypo name="mic" size={30} />
          </View>
        </View>

        <View style={styles._sub_header}>
          <View style={{ flex: 1, marginHorizontal: 5 }}>
            <Text style={styles._title}>Products</Text>
          </View>
          <View>
            <MaterialCommunityIcons name="filter-variant" size={30} />
          </View>
          <View>
            <Entypo name="grid" size={30} />
          </View>
        </View>

        <ScrollView>
          <View style={{ margin: 5 }}>
            {items.map((v, i) => {
              return (
                <CustomCard
                  image={v.image}
                  name={v.name}
                  starting={v.starting}
                  key={i}
                  onPress={()=> goToDetail()}
                />
              );
            })}
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  _safearea: {
    flex: 1,
    paddingTop: 30,
  },
  container: {
    // flex: 1,
    backgroundColor: "#fff",
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  _header: {
    backgroundColor: "#898888",
    margin: 5,
    borderRadius: 5,
    flexDirection: "row",
    padding: 5,
  },
  _sub_header: {
    borderRadius: 5,
    flexDirection: "row",
    paddingHorizontal: 5,
  },
  _title: {
    fontSize: 20,
    fontWeight: "700",
  },
});
