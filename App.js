import React from 'react';
import Home from './screens/home';
import EditHome from './screens/editHome';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { PracticeProvider,PracticeContext  } from './Global/PracticeContext';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <PracticeProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={Home} options={{ headerShown: false }}/>
          <Stack.Screen name="EditHome" component={EditHome} options={{ headerShown: false }}/>
        </Stack.Navigator>
    </NavigationContainer>
  </PracticeProvider>
  );
}
