import React, { useState } from "react";
import { LoginScreen, HomeScreen, DetailScreen, PostScreen } from "./../screens";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
const Stack = createStackNavigator();

function MainNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator> 
 
      <Stack.Screen
          name="Post Item"
          options={{
            headerShown: null,
          }}
          component={PostScreen}
        />
      <Stack.Screen
            name="Product Detail"
            options={{
              headerTitle: null,
              headerShown: null
            }}
            component={DetailScreen}
          /> 
      <Stack.Screen
          name="Login"
          options={{
            headerShown: null,
          }}
          component={LoginScreen}
        />
  
        <Stack.Screen
          name="Home"
          options={{
            headerShown: null,
          }}
          component={HomeScreen}
        />
  
      </Stack.Navigator>
    </NavigationContainer>
  );
}


export default MainNavigator;
