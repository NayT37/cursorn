import React from 'react';
// Components
import {HomeScreen, ExperimentalScreen} from '../screens';
// Resources
const {createNativeStackNavigator} = require('@react-navigation/native-stack'); // This is the workaround to solve husky issue

const Stack = createNativeStackNavigator();

const HomeStack = () => (
    <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{headerShown: false}} />
        <Stack.Screen name="Experimental" component={ExperimentalScreen} options={{headerShown: false}} />
    </Stack.Navigator>
);

export default HomeStack;
