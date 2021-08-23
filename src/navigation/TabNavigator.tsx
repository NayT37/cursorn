import React from 'react';
// Components
import {HistoryScreen, HomeScreen} from '../screens';
// Resources
// import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'; // This breaks the precommit hook
const {createBottomTabNavigator} = require('@react-navigation/bottom-tabs'); // This is the workaround to solve it
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import {colors} from '../utils/theme';
import {RouteProp} from '@react-navigation/native';

const Tab = createBottomTabNavigator();

type Route = RouteProp<Record<string, object | undefined>, string>; // THis was taken from documentation, just like that

// Max 5 tabs, if there are 5 tabs you should reconsider naming icons and just keep the icons
const getIconName = (routeName: string) => {
    let iconName = '';
    switch (routeName) {
        case 'HomeTab':
            iconName = 'home-filled';
            break;
        case 'HistoryTab':
            iconName = 'history';
            break;
        default:
            iconName = 'help-outline';
            break;
    }
    return iconName;
};

const navigatorScreenOptions = ({route}: {route: Route}) => ({
    tabBarIcon: ({focused, color, size}: {focused: boolean; color: string; size: number}) => {
        const iconSize = focused ? size * 1.2 : size;
        const iconName = getIconName(route.name);
        return <MaterialIcon name={iconName} size={iconSize} color={color} />;
    },
    headerShown: false,
    allowFontScalink: false,
    tabBarActiveTintColor: colors.primary,
    tabBarInactiveTintColor: colors.secondary,
    tabBarLabelStyle: {
        fontSize: 12,
    },
});

const TabNavigator = () => {
    return (
        <Tab.Navigator screenOptions={navigatorScreenOptions}>
            <Tab.Screen name="HomeTab" component={HomeScreen} options={{title: 'Home'}} />
            <Tab.Screen name="HistoryTab" component={HistoryScreen} options={{title: 'History'}} />
        </Tab.Navigator>
    );
};

export default TabNavigator;
