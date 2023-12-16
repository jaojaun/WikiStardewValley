import * as React from 'react';
import { View, Text,Alert, Modal, ImageBackground, Image, Pressable,  StyleSheet} from 'react-native';
import { Input} from '@rneui/themed/dist/Input';
import { Button} from '@rneui/themed/dist/Button';
import { useNavigation } from '@react-navigation/core';
import { styles } from './style';
import { ImageBackgroundComponent } from 'react-native';
import { ToastAndroid } from 'react-native';
import { Platform } from 'react-native';
import { InputRound } from './components';

export interface LoginScreenProps {
    navigation:any 
}

export const LoginScreen   = () => {
    
    const [modalVisibleLogin, setModalVisibleLogin] = React.useState(false);
    const [modalVisibleCad, setModalVisibleCad] = React.useState(false);
    const nav = useNavigation<any>();

    const [ email, setEmail ] = React.useState('')
    const [ senha, setSenha ] = React.useState('')
    const [ erro, setErro ] = React.useState('')

    const logar = async () => {
        setErro(""); //Limpa o erro

        //Espera 1sec
        await new Promise(resolve => setTimeout(resolve, 1000));

        if (email.trim() == 'teste@teste.com' && senha == '123456')
           nav.navigate('drawer');
        else 
            console.log('Email ou senha incorreta!')
    }

    return (
        <ImageBackground source={require('./../../../assets/img/background.png')} style={styles.background}>
            <Image source={require('./../../../assets/img/logo.png')} style={styles.logo}/>
            <Image source={require('./../../../assets/img/Wiki.png')} style={styles.wiki}/>
            <View style={styles.mainView}>
                <View style={styles.centeredView}>
                    <Modal
                        animationType="slide"
                        transparent={true}
                        visible={modalVisibleLogin}
                        onRequestClose={() => {
                            Alert.alert('Modal has been closed.');
                            setModalVisibleLogin(!modalVisibleLogin);
                        }}>
                        <View style={styles.centeredView}>
                            <View style={styles.modalView}>
                                <Text style={styles.modalText}>Login</Text>
                                <InputRound 
                                    icon='user' 
                                    placeholder='Digite seu E-mail'
                                    onChangeText={setEmail}
                                />
                                <InputRound
                                    icon='lock' 
                                    placeholder='Digite sua senha'
                                    onChangeText={setSenha}
                                    senha={true}
                                />
                                <Pressable
                                    style={[styles.button, styles.buttonModal]}
                                        onPress={() => {
                                            nav.navigate('drawer')
                                    }}>
                                    <Text style={styles.textStyle}>Logar</Text> 
                                </Pressable>
                                <Pressable
                                    style={[styles.button, styles.buttonModal]}
                                        onPress={logar}>
                                    <Text style={styles.textStyle}>Fechar</Text>
                                </Pressable>
                            </View>
                        </View>
                    </Modal>
                    <Pressable
                        style={[styles.button, styles.buttonOpen]}
                        onPress={() => setModalVisibleLogin(true)}>
                            <Text style={styles.textStyle}>Logar</Text>
                    </Pressable>
                </View>
                <View style={styles.centeredView}>
                    <Modal
                            animationType="slide"
                            transparent={true}
                            visible={modalVisibleCad}
                            onRequestClose={() => {
                                Alert.alert('Modal has been closed.');
                                setModalVisibleCad(!modalVisibleCad);
                            }}>
                            <View style={styles.centeredView}>
                                <View style={styles.modalView}>
                                    <Text style={styles.modalText}>Cadastro</Text>
                                    <InputRound 
                                        icon='user' 
                                        placeholder='Digite seu nome'
                                        onChangeText={(texto) => console.log(texto)}
                                    />
                                    <InputRound 
                                        icon='user' 
                                        placeholder='Digite seu E-mail'
                                        onChangeText={setEmail}
                                    />
                                    <InputRound
                                        icon='lock' 
                                        placeholder='Digite sua senha'
                                        onChangeText={setSenha}
                                        senha
                                    />
                                    <InputRound
                                        icon='lock' 
                                        placeholder='Confirme sua senha'
                                        onChangeText={setSenha}
                                        senha
                                    />
                                    <Pressable
                                        style={[styles.button, styles.buttonModal]}
                                        onPress={() => {
                                        nav.navigate('drawer')
                                        }}>
                                        <Text style={styles.textStyle}>Cadastrar</Text>
                                    </Pressable>
                                    <Pressable
                                        style={[styles.button, styles.buttonModal]}
                                        onPress={() => setModalVisibleCad(!modalVisibleCad)}>
                                        <Text style={styles.textStyle}>Fechar</Text>
                                    </Pressable>
                                </View>
                            </View>
                        </Modal>
                    <Pressable
                        style={[styles.button, styles.buttonOpen]}
                        onPress={() => setModalVisibleCad(true)}>
                            <Text style={styles.textStyle}>Cadastrar</Text>
                    </Pressable>
                </View>
            </View>
        </ImageBackground>
    );
  };


