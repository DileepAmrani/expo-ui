import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity } from "react-native";
import { CustomInput, CustomButton, CustomSocialButton } from "./../../components";
export default function Login(props) {
   function ToHome(params) {
    props.navigation.navigate("Home")
  }
  return (
    <SafeAreaView style={styles._safearea}>
      <View style={styles.container}>
        <StatusBar style="auto" />
        <View style={styles._box}>
          <Text style={styles._heading}>Sign up</Text>
          <CustomSocialButton icon="facebook-square" name="Continue with Facebook"/>
          <CustomSocialButton icon="google" name="Continue with Google"/>
          <View>
            <Text style={styles._seprator}>OR</Text>
          </View>
          {/* Inputs */}
          <CustomInput label="EMAIL" placeholder="Ex. johndoe@mail.com" />
          <CustomInput label="Name" placeholder="John Doe" />
          <CustomInput label="PASSWORD" isPassword={true} />
          <View>
            <Text style={styles._privicy_policy}>
              This site is protected by reCAPTCHA and the Google{" "}
              <Text style={styles._link}> Privincy Policy</Text> and{" "}
              <Text style={styles._link}>Terms of Service</Text> apply.
            </Text>
          </View>
          {/* Button */}
          <CustomButton buttonText="Sign up" onPress={()=> ToHome()}/>

          <View>
            <Text style={styles._have_account}>
              Already have an account?<Text style={styles._link}> Log in</Text>
            </Text>
          </View>

          <View>
            <Text style={styles._privicy_policy1}>
              By signing up or logging in, you agree to the OfferUp
              <Text style={styles._link}> Privincy Policy</Text> and
              <Text style={styles._link}>Terms of Service</Text>.
            </Text>
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
  },
  container: {
    flex: 1,
    backgroundColor: "#C8DCD7",
  },
  _box: {
    flex: 1,
    backgroundColor: "#fff",
    margin: 5,
    borderRadius: 10,
    paddingHorizontal: 10,
  },
  _heading: {
    alignSelf: "center",
    fontWeight: "bold",
    fontSize: 30,
    paddingVertical: 30,
  },
  _seprator: {
    alignSelf: "center",
    padding: 10,
    fontSize: 18,
    fontWeight: "700",
    color: "#565656",
    letterSpacing: 0.5,
    paddingTop: 20,
  },
  _privicy_policy: {
    fontSize: 13,
    paddingVertical: 5,
    color: "#C4C4C4",
  },
  _link: {
    color: "#57C2A2",
  },
  _have_account: {
    fontSize: 20,
    alignSelf: "center",
    paddingVertical: 10,
    color: "#959595",
    fontWeight: "bold",
  },
  _privicy_policy1: {
    paddingTop: 10,
    fontSize: 16,
    textAlign: "center",
    color: "#AEAEAE",
    lineHeight: 24,
  },
});
