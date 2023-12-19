import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { LoginScreen } from '../screens/login';
import { HomeScreen } from '../screens/home';
import { BioScreen } from '../screens/bio';
import { DrawerManu } from './drawerMenu';

const Stack = createStackNavigator();

export const MainNavigation = () => (
    <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="drawer" component={DrawerManu}/>
            <Stack.Screen name="login" component={LoginScreen}/>
        </Stack.Navigator>
    </NavigationContainer>
)