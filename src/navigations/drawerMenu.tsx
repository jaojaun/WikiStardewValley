import React from "react";
import 'react-native-gesture-handler';
import { createDrawerNavigator } from "@react-navigation/drawer";
import { HomeScreen } from "../screens/home";
import { BioScreen } from "../screens/bio";
import { PerfilScreen } from "../screens/perfil";

const Drawer = createDrawerNavigator();

export const DrawerManu = () => (

        <Drawer.Navigator>
            <Drawer.Screen name="home" component={HomeScreen}
                options={{ drawerLabel: 'Home' }} 
            />
            <Drawer.Screen name="bio" component={BioScreen}
                options={{ drawerLabel: 'Biografia' }}
            />
            <Drawer.Screen name="perfil" component={PerfilScreen}
                options={{ drawerLabel: 'Perfil' }}
            />
        </Drawer.Navigator>
) 