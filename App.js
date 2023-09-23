import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/MaterialIcons';
import LoginScreen from './app/screens/LoginScreen'; // Import the LoginScreen component
import CommunityScreen from './app/screens/CommunityScreen';
import MapScreen from './app/screens/MapScreen';
import SOSSCreen from './app/screens/SOSScreen';
import ProfileScreen from './app/screens/ProfileScreen';
import AddPostScreen from './app/screens/AddPostScreen';
import colors from './app/config/colors';

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
                        <Icon name="pin-drop" size={30} color={colors.primary} />
                    ),
                    headerShown:false
                }}
            />

            <Tab.Screen
                name="Community"
                component={CommunityScreen}
                options={{
                    tabBarLabel: 'Community',
                    tabBarIcon: ({ color, size }) => (
                        <Icon name="group-work" size={30} color={colors.primary} />
                    ),
                }}
            />
            <Tab.Screen
                name="SOS"
                component={SOSSCreen}
                options={{
                    tabBarLabel: 'SOS',
                    tabBarIcon: ({ color, size }) => (
                        <Icon name="sos" size={30} color={colors.red} />
                    ),
                    headerShown: false,
                }}
            />
            <Tab.Screen
                name="Add Post"
                component={AddPostScreen}
                options={{
                    tabBarLabel: 'Add Post',
                    tabBarIcon: ({ color, size }) => (
                        <Icon name="add" size={30} color={colors.primary} />
                    ),
                }}
            />
            <Tab.Screen
                name="Profile"
                component={ProfileScreen}
                options={{
                    tabBarLabel: 'Profile',
                    tabBarIcon: ({ color, size }) => (
                        <Icon name="person" size={30} color={colors.primary} />
                    ),
                    headerShown: false,
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
            cardStyle: { flex: 1, backgroundColor: colors.white},
          }}>
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Main" component={MainTabNavigator} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  };


export default App;