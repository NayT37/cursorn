import React from 'react';
// Components
import {HistoryScreen, HomeScreen} from '../screens';
// Resources
// import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'; // This breaks the precommit hook
const {createBottomTabNavigator} = require('@react-navigation/bottom-tabs'); // This is the workaround to solve it

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
    return (
        <Tab.Navigator screenOptions={{headerShown: false}}>
            <Tab.Screen name="HomeTab" component={HomeScreen} />
            <Tab.Screen name="HistoryTab" component={HistoryScreen} />
        </Tab.Navigator>
    );
};

export default TabNavigator;
