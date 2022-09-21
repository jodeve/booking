import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
//import { Provider } from "react-native-paper";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './home/Home';

export const Stack = createNativeStackNavigator();

const App = () => {

    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false
                }}
            >
                <Stack.Screen
                    name="Home"
                    component={Home}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );

};

export default App;
