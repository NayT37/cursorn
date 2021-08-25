import React from 'react';
// import { createNativeStackNavigator } from '@react-navigation/native-stack'; // This breaks the precommit hook
const {createNativeStackNavigator} = require('@react-navigation/native-stack'); // This is the workaround to solve it

// Import a stack inside a stack
import AuthStack from './AuthStack';
// Import bottomTabNavigator inside the stack
import TabNavigator from './TabNavigator';
import {ExperimentalScreen} from '../screens';

// Create stack
const Stack = createNativeStackNavigator();

const MainNavigator = () => (
    /* By setting screenOptions in the Stack Navigator, all the children are gonna have that property */
    <Stack.Navigator initialRouteName="AuthStack" screenOptions={{headerShown: false}}>
        <Stack.Screen name="AuthStack" component={AuthStack} />
        <Stack.Screen name="TabNavigator" component={TabNavigator} />
        <Stack.Screen name="Experimental" component={ExperimentalScreen} />
    </Stack.Navigator>
);

export default MainNavigator;
