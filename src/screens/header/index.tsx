import * as React from 'react';
import { View, Text, ImageBackground, StyleSheet, Image} from 'react-native';
import { Input} from '@rneui/themed/dist/Input';
import { Button} from '@rneui/themed/dist/Button';
import { useNavigation, DrawerActions, useRoute } from '@react-navigation/core';
import { styles } from './style';
import { Avatar } from '@rneui/themed';

export interface HeaderScreenProps {
    navigation:any
}

export function HeaderScreen (props: HeaderScreenProps) {

    const nav = useNavigation<any>()
    const route = useRoute<any>()

    return (
        <View style={styles.background}>
            <View style={styles.header}>
                <Avatar
                    size={64}
                    rounded
                    containerStyle={{ backgroundColor: '#B6F16C' }}
                />
                <View style={styles.right}>
                    <Text style={styles.textCont}>Whtlice</Text>
                    <Text style={styles.textCont}>Fazenda: Cafofo</Text>
                </View>
                <View style={styles.right}>
                    <Image source={require('./../../../assets/img/galinha.png')} style={styles.hen}/>
                </View>
            </View>
        </View>
    );
}
