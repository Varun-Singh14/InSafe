import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/MaterialIcons';
import LoginScreen from './app/screens/LoginScreen'; // Import the LoginScreen component
import CommunityScreen from './app/screens/CommunityScreen';
import MapScreen from './app/screens/MapScreen';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const MainTabNavigator  = () => {
    return (
        <Tab.Navigator
        initialRouteName="Community">
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
                        <Icon name="rocket" size={30} color="#900" />
                    ),
                }}
            />

        </Tab.Navigator>

    );
};

const App = () => {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login"
        screenOptions={{
            headerShown: false,
            cardStyle: { flex: 1},
          }}>
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Main" component={MainTabNavigator} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  };


export default App;