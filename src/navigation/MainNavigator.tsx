import React from 'react';
// import { createNativeStackNavigator } from '@react-navigation/native-stack'; // This breaks the precommit hook
const {createNativeStackNavigator} = require('@react-navigation/native-stack'); // This is the workaround to solve it
import {ExperimentalScreen, WelcomeScreen} from '../screens';

const Stack = createNativeStackNavigator();

const MainNavigator = () => (
    <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen name="Experimental" component={ExperimentalScreen} options={{headerShown: false}} />
        <Stack.Screen name="Welcome" component={WelcomeScreen} options={{headerShown: false}} />
    </Stack.Navigator>
);

export default MainNavigator;
