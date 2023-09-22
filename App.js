import React from "react";
import CommunityScreen from "./app/screens/CommunityScreen";
import MapScreen from "./app/screens/MapScreen";
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { SvgUri } from 'react-native-svg';
import colors from "./app/config/colors";
// import Icon from 'react-native-vector-icons/FontAwesome';

const Tab = createBottomTabNavigator();

const App = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen
                name="Map"
                component={MapScreen}
                options={{
                    tabBarLabel: 'Map',
                    tabBarIcon: ({ color, size }) => (
                        <Icon name="home" size={30} color="#900" />
                    ),
                }}
            />

            <Tab.Screen
                name="Community"
                component={CommunityScreen}
                options={{
                    tabBarLabel: 'Community',
                    tabBarIcon: ({ color, size }) => (
                        <Icon name="rocket" size={30} color="#900" />
                    ),
                }}
            />
            <Tab.Screen
                name="sos"
                component={CommunityScreen}
                options={{
                    tabBarLabel: 'SOS',
                    tabBarIcon: ({ color, size }) => (
                        <Icon name="rocket" size={30} color="#900" />
                    ),
                }}
            />
            <Tab.Screen
                name="Add Post"
                component={CommunityScreen}
                options={{
                    tabBarLabel: 'Add Post',
                    tabBarIcon: ({ color, size }) => (
                        <Icon name="rocket" size={30} color="#900" />
                    ),
                }}
            />
            <Tab.Screen
                name="Profile"
                component={CommunityScreen}
                options={{
                    tabBarLabel: 'Profile',
                    tabBarIcon: ({ color, size }) => (
                        <SvgUri
                            width={50}
                            height={50}
                            source={require('./assets/icons/community.svg')}
                            fill={colors.blue} // Customize the fill color if needed
                        />
                    ),
                }}
            />

        </Tab.Navigator>

    );
};


export default () => {
    return (
        <NavigationContainer>
            <App />
        </NavigationContainer>
    )
}