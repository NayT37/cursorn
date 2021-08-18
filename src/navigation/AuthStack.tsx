import React from 'react';
// Components
import {ExperimentalScreen, WelcomeScreen} from '../screens';
// Resources
const {createNativeStackNavigator} = require('@react-navigation/native-stack'); // This is the workaround to solve husky issue

const Stack = createNativeStackNavigator();

const AuthStack = () => (
    <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen name="Experimental" component={ExperimentalScreen} options={{headerShown: false}} />
        <Stack.Screen name="Welcome" component={WelcomeScreen} options={{headerShown: false}} />
    </Stack.Navigator>
);

export default AuthStack;
