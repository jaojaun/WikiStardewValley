import * as React from 'react';
import { View, Text, ImageBackground, StyleSheet, Image, ScrollView, Pressable} from 'react-native';
import { useNavigation, DrawerActions, useRoute} from '@react-navigation/core';
import { Button} from '@rneui/themed/dist/Button';
import { styles } from './style';
import { Avatar } from '@rneui/themed';
import { HeaderScreen } from '../header';
import { Icon } from '@rneui/base';

export interface PerfilScreenProps {
    navigation:any
}

export function PerfilScreen (props: PerfilScreenProps) {

    const nav = useNavigation<any>()
    const route = useRoute<any>()

    return (
        <View style={styles.background}>
            <ScrollView>
                <View style={styles.header}>
                    <Avatar
                        size={64}
                        rounded
                        containerStyle={{ backgroundColor: '#B6F16C' }}
                    />
                    <View>
                        <Text style={styles.textCont}>Whtlice</Text>
                        <Text style={styles.textCont}>Fazenda: Cafofo</Text>
                    </View>
                    <View style={styles.right}>
                        <Image source={require('./../../../assets/img/galinha.png')} style={styles.hen}/>
                    </View>
                </View>
                <View style={styles.perfilCntt}>
                    <Pressable style={styles.perfilBtn}>
                        <Text style={styles.perfilTlt}>Editar Perfil</Text>
                    </Pressable>
                    <Pressable style={styles.perfilBtn}>
                        <Text style={styles.perfilTlt}>Compartilhar Perfil</Text>
                    </Pressable>
                </View>
                <View style={styles.dados}>
                    <View style={styles.itemCntt}>
                        <Image source={require('./../../../assets/img/between.png')} style={styles.farm}/>
                        <Text style={styles.tltItem}>Fazenda entre riachos</Text>
                    </View>
                    <View style={styles.itemCntt}>
                        <Image source={require('./../../../assets/img/dog.png')} style={styles.pet}/>
                        <Text style={styles.tltItem}>Beluca</Text>
                    </View>
                    <View style={styles.itemCntt}>
                        <Image source={require('./../../../assets/img/coin.png')} style={styles.farm}/>
                        <Text style={styles.tltItem}>Ganhos Totais: 21.016</Text>
                    </View>
                </View>
                <View style={styles.dados}>
                    <View style={styles.backItens}>
                        <Image source={require('./../../../assets/img/heart.png')} style={styles.heart}/>
                    </View>
                </View>
                <View style={styles.dados}>
                    <View style={styles.backItens}>
                        <Image source={require('./../../../assets/img/x.png')} style={styles.heart}/>
                    </View>
                </View>
                <Text style={styles.title}>Personagens</Text>
                <View style={styles.persosCntt}>
                    <Image source={require('./../../../assets/img/leah.png')} style={styles.persos}/>
                    <Image source={require('./../../../assets/img/abigail.png')} style={styles.persos}/>
                </View>
                <Text style={styles.title}>Mídias</Text>
            </ScrollView>
        </View>
    );
}
