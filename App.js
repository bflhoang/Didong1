import React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { 
  WelcomeScreen,
  Login, 
  Register, 
  ClothesList,
  HomePage,
  ProductInfo,
  MyCart,
  Settings,
  Profile,
  EditProfile
} from './screens';
import ClothesItem from './screens/ClothesList/ClothesItem';
function App() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        {/* <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} /> */}
        <Stack.Screen name="Login" component={Login} />
        {/* <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="ClothesList" component={ClothesList} /> */}
        <Stack.Screen name="HomePage" component={HomePage} />
        {/* <Stack.Screen name="ProductInfo" component={ProductInfo} />
        <Stack.Screen name="MyCart" component={MyCart} />
        <Stack.Screen name="Settings" component={Settings} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="EditProfile" component={EditProfile} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;