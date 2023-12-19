import React from "react";
import 'react-native-gesture-handler';
import { createDrawerNavigator } from "@react-navigation/drawer";
import { HomeScreen } from "../screens/home";
import { BioScreen } from "../screens/bio";
import { PerfilScreen } from "../screens/perfil";
import { Button } from "@rneui/base";
import { getAuth } from "firebase/auth";
import { LoginScreen } from "../screens/login";
import { useNavigation } from "@react-navigation/native";
import { ItensScreen } from "../screens/itens";
import { CadItemScreen } from "../screens/cadIten";
import { CadPersoScreen } from "../screens/cadPerso";

const Drawer = createDrawerNavigator();
const navigation = useNavigation();

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
            <Drawer.Screen name="item" component={ItensScreen}
                options={{ drawerLabel: 'Itens' }}
            />
            <Drawer.Screen name="cadItem" component={CadItemScreen}
                options={{ drawerLabel: 'Cadastro de items' }}
            />
            <Drawer.Screen name="cadPerso" component={CadPersoScreen}
                options={{ drawerLabel: 'Cadastro de personagens' }}
            />
        </Drawer.Navigator>
) 