import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './src/screens/Home';
import Index from './src/screens/Index';
import BreedList from './src/screens/BreedList';

const App = () => {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Bienvenido" component={Index} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Lista de Razas" component={BreedList} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
