
import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Categories from './pages/Categories';
import Detail from './pages/Detail';
import Meals from './pages/Meals';
const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Categories" component={Categories} options={{
          headerTitleStyle:{
            color: "#FFA707",
          },
        }}/>
        <Stack.Screen name="Meals" component={Meals} options={{
          headerTitleStyle:{
            color: "#FFA707",
          },
          headerTintColor:"#FFA707",
        }}/>
        <Stack.Screen name="Details" component={Detail} options={{
          headerTitleStyle:{
            color: "#FFA707",
          },
          headerTintColor:"#FFA707",
        }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
