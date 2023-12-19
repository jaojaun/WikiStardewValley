import * as React from 'react';
import { View, Text, ImageBackground, StyleSheet, Image, ScrollView, Pressable} from 'react-native';
import { useNavigation, DrawerActions, useRoute} from '@react-navigation/core';
import { Button} from '@rneui/themed/dist/Button';
import { styles } from './style';
import { Avatar } from '@rneui/themed';
import { HeaderScreen } from '../header';
import { Icon } from '@rneui/base';

export interface ItensDescScreenProps {
    navigation:any
}

export function ItensDescScreen (props: ItensDescScreenProps) {

    const nav = useNavigation<any>()
    const route = useRoute<any>()

    return (
        <View style={styles.background}>
            <ScrollView>
                <View style={styles.dados}>
                    <View style={styles.backItens}>
                        <Image source={require('./../../../assets/img/galinha.png')} style={styles.heart}/>
                    </View>
                    <Text>Galinha</Text>
                    <Text>Descrição:</Text>
                    <Text>A Galinha é um animal da fazenda que vive em um Galinheiro. Até os limites de capacidade do galinheiro já construído na fazenda, as galinhas podem ser compradas a partir do Rancho da Marnie por Gold.png800 ouros ou chocadas de Ovos em uma Chocadeira. Após a compra ou a incubação, as galinhas devem ser atribuídas a um galinheiro e nomeadas, e o jogo fornece um nome padrão se você não quiser escolher você mesmo.</Text>
                </View>
                <View style={styles.dados}>
                    <View style={styles.backItens}>
                        <Image source={require('./../../../assets/img/dog.png')} style={styles.heart}/>
                    </View>
                    <Text>Cachorro</Text>
                    <Text>Descrição:</Text>
                    <Text>O jogador tem permissão para adotar um gato ou um cão. O animal que você adota depende de qual você escolhe como seu preferido no menu da criação do personagem</Text>
                </View>
            </ScrollView>
        </View>
    );
}
