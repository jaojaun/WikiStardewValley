import * as React from 'react';
import { View, Text,Alert, Modal, ImageBackground, Image, Pressable,  StyleSheet} from 'react-native';
import { Input} from '@rneui/themed/dist/Input';
import { Button} from '@rneui/themed/dist/Button';
import { useNavigation } from '@react-navigation/core';
import * as yup from 'yup';
import { styles } from './style';
import { ImageBackgroundComponent } from 'react-native';
import { ToastAndroid } from 'react-native';
import { Platform } from 'react-native';
import { InputRound } from './components';
import { Formik, validateYupSchema } from 'formik';

export interface LoginScreenProps {
    navigation:any 
}

export const LoginScreen   = () => {
    
    const [modalVisibleLogin, setModalVisibleLogin] = React.useState(false);
    const [modalVisibleCad, setModalVisibleCad] = React.useState(false);
    const nav = useNavigation<any>();
    const [ erro, setErro ] = React.useState('')

    const logar = async ({email, senha}: any) => {
        setErro(""); //Limpa o erro

        //Espera 1sec
        await new Promise(resolve => setTimeout(resolve, 1000));

        if (email.trim() == 'teste@teste.com' && senha == '123456')
           nav.navigate('drawer');
        else 
            console.log('Email ou senha incorreta!')
    }

    function setEmail(texto: string): void {
        throw new Error('Function not implemented.');
    }

    return (
        <ImageBackground source={require('./../../../assets/img/background.png')} style={styles.background}>
            <Image source={require('./../../../assets/img/logo.png')} style={styles.logo}/>
            <Image source={require('./../../../assets/img/Wiki.png')} style={styles.wiki}/>

            <Formik
                initialValues={{ email:'', senha:'' }}
                validationSchema={yup.object().shape({
                    email: yup.string().required('O campo E-mail é obrigatório!')
                                .email('O campo precisa ser um E-mail Válido!'),
                    senha: yup.string().required('O campo Senha é obrigatório!')
                                .min(6, 'A senha deve ter no minimo 6 caracteres!')
                })}
                onSubmit={logar}
            >
                {({handleChange, handleSubmit, handleBlur,isSubmitting,touched, errors}) => (
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
                                            onBlur={() => {
                                                handleBlur('email')
                                                if (errors.email) {
                                                    ToastAndroid.show(errors.email, 2000);
                                                }
                                            }}
                                            onChangeText={handleChange('email')}
                                        />
                                        <InputRound
                                            icon='lock' 
                                            placeholder='Digite sua senha'
                                            onBlur={() => {
                                                handleBlur('senha')
                                                if (errors.senha) {
                                                    ToastAndroid.show(errors.senha, 2000);
                                                }
                                            }}
                                            onChangeText={handleChange('senha')}
                                            senha={true}
                                        />
                                        { !isSubmitting &&
                                            <Pressable
                                                style={[styles.button, styles.buttonModal]}
                                                    onPress={() => handleSubmit()}>
                                                <Text style={styles.textStyle}>Logar</Text> 
                                            </Pressable>
                                        }
                                        <Pressable
                                            style={[styles.button, styles.buttonModal]}
                                            onPress={() => setModalVisibleLogin(!modalVisibleLogin)}>
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
                                                onChangeText={handleChange => ('email')}
                                            />
                                            <InputRound
                                                icon='lock' 
                                                placeholder='Digite sua senha'
                                                onChangeText={handleChange => ('senha')}
                                                senha
                                            />
                                            <InputRound
                                                icon='lock' 
                                                placeholder='Confirme sua senha'
                                                onChangeText={handleChange => ('senha')}
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
                )}
            </Formik>
        </ImageBackground>
    );
  };


