import * as React from 'react';
import { View, Text, ImageBackground, StyleSheet, Image, ScrollView} from 'react-native';
import { Input} from '@rneui/themed/dist/Input';
import { Button} from '@rneui/themed/dist/Button';
import { useNavigation } from '@react-navigation/core';
import { styles } from './style';
import { Avatar } from '@rneui/themed';

export interface BioScreenProps {
    navigation:any
}

export function BioScreen (props: BioScreenProps) {

    const nav = useNavigation<any>()

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
                <ImageBackground source={require('./../../../assets/img/bgPerso.png')} style={styles.bgPerso}>
                    <Image source={require('./../../../assets/img/perso.png')} style={styles.perso}/>
                </ImageBackground>
                <View style={styles.content}>
                    <View style={styles.txt}>
                        <Text style={styles.tlt} >Biografia</Text>
                        <Text style={styles.summary}>Sebastian é um rebelde solitário que mora no porão dos seus pais. Ele é o meio-irmão mais velho da Maru, e sente que sua irmã ganha toda a atenção e adoração, enquanto ele é largado para apodrecer na escuridão.</Text>
                        <Text style={styles.summary}>Ele tende a ficar muito vidrado em jogos de computador, quadrinhos, e livros de ficção científica, e ás vezes passa muito tempo atrás desses hobbies sozinho em seu quarto.</Text>
                        <Text style={styles.summary}>Ele pode ser um pouco hostil com pessoas que ele não conhece. Poderia um(a) encantador(a) novo(a) fazendeiro(a) cultivar a terra infértil do seu coração? Quem sabe?</Text>
                    </View>
                    <View>
                        <View style={styles.back}>
                            <Text style={styles.title}>Melhores presentes</Text>
                            <View style={styles.bgItens}>
                                <Image source={require('./../../../assets/img/teardrop.png')} style={styles.itens}/>
                                <Text style={styles.tltItens}> Lágrima congelada</Text>
                            </View>
                            <View style={styles.bgItens}>
                                <Image source={require('./../../../assets/img/obsidian.png')} style={styles.itens}/>
                                <Text style={styles.tltItens}> Obsidiana</Text>
                            </View>
                            <View style={styles.bgItens}>
                                <Image source={require('./../../../assets/img/soup.png')} style={styles.itens}/>
                                <Text style={styles.tltItens}> Sopa de abóbora</Text>
                            </View>
                            <View style={styles.bgItens}>
                                <Image source={require('./../../../assets/img/sashimi.png')} style={styles.itens}/>
                                <Text style={styles.tltItens}> Sashimi</Text>
                            </View>
                            <View style={styles.bgItens}>
                                <Image source={require('./../../../assets/img/nullEgg.png')} style={styles.itens}/>
                                <Text style={styles.tltItens}> Ovo nulo</Text>
                            </View>
                        </View>
                        <View style={styles.back}>
                            <Text style={styles.title}>Odeia</Text>
                            <View style={styles.bgItens}>
                                <Image source={require('./../../../assets/img/clay.png')} style={styles.itens}/>
                                <Text style={styles.tltItens}> Argila</Text>
                            </View>
                            <View style={styles.bgItens}>
                                <Image source={require('./../../../assets/img/breackfast.png')} style={styles.itens}/>
                                <Text style={styles.tltItens}> Café da manhã completo</Text>
                            </View>
                            <View style={styles.bgItens}>
                                <Image source={require('./../../../assets/img/lunch.png')} style={styles.itens}/>
                                <Text style={styles.tltItens}> Almoço de    fazendeiro</Text>
                            </View>
                            <View style={styles.bgItens}>
                                <Image source={require('./../../../assets/img/nullEgg.png')} style={styles.itens}/>
                                <Text style={styles.tltItens}> Omelete</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        </ScrollView>
    );
}
