
import React from 'react';

import Home from './src/Home';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Details from './src/Details';

type rating = {
  rate: number,
  count: number
}
type prodData = {
  id:number,
  title: string,
  price: number,
  description: string,
  category: string,
  image: string,
  rating: rating
}

export type RootStackParamList = {
  Home: undefined;
  Details: { product: prodData }; 
};


const Stack = createNativeStackNavigator<RootStackParamList>()

function App(): React.JSX.Element {
 
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen 
          name='Home'
          component={Home}
          options={{
            title:"Home"
          }}
         />
         <Stack.Screen 
         name='Details'
         component={Details}
         options={{
          title:"Product Details"
        }}
         />
      </Stack.Navigator>
    </NavigationContainer>
  );
}



export default App;
