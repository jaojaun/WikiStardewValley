import * as React from 'react';
import { View, Text, ImageBackground, StyleSheet, Image, ScrollView} from 'react-native';
import { useNavigation, DrawerActions, useRoute} from '@react-navigation/core';
import { styles } from './style';
import { Avatar } from '@rneui/themed';
import { HeaderScreen } from '../header';
import { Icon } from '@rneui/base';

export interface HomeScreenProps {
    navigation:any
}

export function HomeScreen (props: HomeScreenProps) {

    const nav = useNavigation<any>()
    const route = useRoute<any>()

    return (
        <ScrollView>
            <View style={styles.background}>
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
                <View style={styles.img}>
                    <Image source={require('./../../../assets/img/village.png')} style={styles.village}/>
                </View>
                <View style={styles.content}>
                    <View style={styles.txt}>
                        <View >
                            <Text style={styles.tlt} >Mapas</Text>
                        </View>
                        <Text style={styles.summary} >Vila Pelicanos é para onde o jogador se move no início do jogo, localizado em Stardew Valley. Vila Pelicanos é onde a maioria dos moradores vive, trabalha e socializa.</Text>
                        <Text style={styles.summary}>Lewis é o prefeito da Vila Pelicanos e tem sido por muitos anos; Ele comenta que ele não teve concorrência para o papel desde que se tornou prefeito.</Text>
                        <Text style={styles.summary}>A entrada noroeste da cidade liga-se ao Ponto de Ônibus e à Fazenda. A passagem do sudoeste conecta-se à Floresta Cinzaseiva, que contem o Rancho da Marnie, a Cabana da Leah, e a Torre do mago. Diretamente ao sul da cidade é A Praia. O norte da cidade conecta-se A Montanha, com a Carpintaria da Robin, As Minas, a Guilda dos Aventureiros, a Ferrovia, e a Pedreira.</Text>
                    </View>
                    <View>
                        <View style={styles.back}>
                            <Text style={styles.title}>Localização</Text>
                            <Text style={styles.text}>Bosque • Bosque Secreto • Carrinho da Mina • Caverna da Caveira • Caverna da Fazenda • Caverna do Vulcão • Cemitério • Covil dos Insetos Mutantes • Cume • Deserto Calico • Esgotos • Fazenda • Ferrovia • Floresta Cinzaseiva • Ilha Gengibre • Lagoa da Fazenda • Mina da pedreira • Minas • Montanha • Pântano da bruxa • Pedreira • Ponto de Ônibus • Praia • Túnel • Vila Pelicanos</Text>
                        </View>
                        <View style={styles.back}>
                            <Text style={styles.title}>Aldeões</Text>
                            <Text style={styles.text}>Solteiros: Alex • Elliott • Harvey • Sam • Sebastian • Shane 
                                Solteiras: Abigail • Emily • Haley • Leah • Maru • Penny
                                Cidadões: Caroline • Clint • Demetrius • Evelyn • George • Gil • Gunther • Gus • Jas • Jodi • Kent • Lewis • Linus • Marlon • Marnie • Morris • Pam • Pierre • Robin • Vincent • Willy
                                Outros:	Ajudante • Anão • Avô • Feiticeiro • Governador • Junimos • Krobus • Leo • Passarinha • Professor Caracol • Sandy • Segurança • Sr. Qi • Velho marinheiro</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.lineCntt}>
                    <View style={styles.rowCntt}>
                        <Image source={require('./../../../assets/img/clinic.png')} style={styles.clinic}/>
                        <Text style={styles.titles}>Cliníca do Harvey</Text>
                    </View>
                    <View style={styles.rowCntt}>
                    <Image source={require('./../../../assets/img/community.png')} style={styles.community}/>
                        <Text style={styles.titles}>Centro Comunitário</Text>
                    </View>
                    <View style={styles.rowCntt}>
                        <Image source={require('./../../../assets/img/store.png')} style={styles.store}/>
                        <Text style={styles.titles}>Armazém Pierre</Text>
                    </View>
                </View>
                <View style={styles.lineCntt}>
                    <View style={styles.rowCntt}>
                        <Image source={require('./../../../assets/img/musseun.png')} style={styles.musseun}/>
                        <Text style={styles.titles}>Museu</Text>
                    </View>
                    <View style={styles.rowCntt}>
                    <Image source={require('./../../../assets/img/saloon.png')} style={styles.saloon}/>
                        <Text style={styles.titles}>Saloon Fruta Estrelar</Text>
                    </View>
                    <View style={styles.rowCntt}>
                        <Image source={require('./../../../assets/img/smith.png')} style={styles.smith}/>
                        <Text style={styles.titles}>Ferreiro</Text>
                    </View>
                </View>
                <View style={styles.lineCntt}>
                    <View style={styles.rowCntt}>
                        <Image source={require('./../../../assets/img/storeJoja.png')} style={styles.storeJoja}/>
                        <Text style={styles.titles}>Mercado Joja</Text>
                    </View>
                </View>

            </View>
        </ScrollView>
    );
}
