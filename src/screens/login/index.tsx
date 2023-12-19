import * as React from 'react';
import { View, Text,Alert, Modal, ImageBackground, Image, Pressable,  Platform} from 'react-native';
import { useNavigation } from '@react-navigation/core';
import * as yup from 'yup';
import { styles } from './style';
import { ToastAndroid } from 'react-native';
import { InputRound } from './components';
import { Formik } from 'formik';
import "firebase/firestore";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "@firebase/auth";
import { getFirestore, setDoc, doc } from '@firebase/firestore';
import { getDoc } from 'firebase/firestore';
import { useEffect } from 'react';

export interface LoginScreenProps {
    navigation:any 
}

export const LoginScreen   = (setUser: any) => {
    
    const [modalVisibleLogin, setModalVisibleLogin] = React.useState(false);
    const [modalVisibleCad, setModalVisibleCad] = React.useState(false);
    const nav = useNavigation<any>();
    const [ erro, setErro ] = React.useState('');
    const auth = getAuth();
    const db = getFirestore();

    //const [name, setName] = React.useState();
    const [email, setEmail] = React.useState();
    const [password, setPassword] = React.useState();

    const logar = async (dados: { email: string; senha: string; }) => {
        setErro(""); //Limpa o erro

        signInWithEmailAndPassword(auth, dados.email, dados.senha)
            .then(usuario => nav.navigate('drawer'))
            .catch(erro => {
                if (Platform.OS == "android")
                    ToastAndroid.show("E-mail ou senha incorreta", 3000);
                else 
                    setErro('Email ou senha incorreta!');
            })
    };

    const [ usuario, setUsuario ] = useState<Usuario>({email: '', senha: '', nome: ''});
    useEffect(() => {
        if (auth.currentUser) {getDoc(doc(db, 'usuarios', auth.currentUser.uid))
                .then(dados => setUsuario(dados.data()))
        }
    }, []);

    const Handlecadastrar = async ({name, email, senha}: any) => {
        await createUserWithEmailAndPassword(auth, email, senha)
            .then((usuario) => {
                        setDoc(doc(db, 'users', usuario.user.uid), {
                            email, name
                        })
            })
            .catch(erro => {
                let msg = 'Não foi possivel cadastar usuário';
                if (erro.code == 'auth/email-already-in-use') msg = 'Este E-mail ja esta cadastrado'
                ToastAndroid.show( msg, ToastAndroid.LONG);
            })
        setModalVisibleCad(false);
        }

    return (
        <ImageBackground source={require('./../../../assets/img/background.png')} style={styles.background}>
            <Image source={require('./../../../assets/img/logo.png')} style={styles.logo}/>
            <Image source={require('./../../../assets/img/Wiki.png')} style={styles.wiki}/>

            <Formik
                initialValues={usuario}
                validationSchema={yup.object({
                    email: yup.string().required('O campo E-mail é obrigatório!')
                                .email('O campo precisa ser um E-mail Válido!'),
                    nome: yup.string().required('O campo nome precisa existir'),
                    senha: yup.string().required('O campo Senha é obrigatório!')
                                .min(6, 'A senha deve ter no minimo 6 caracteres!')
                })}
                onSubmit={logar}
            >
                {({handleChange, handleSubmit, handleBlur,isSubmitting,errors}) => (
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
                                        setModalVisibleCad(!modalVisibleCad);
                                    }}>
                                    <View style={styles.centeredView}>
                                        <View style={styles.modalView}>
                                            <Text style={styles.modalText}>Cadastro</Text>
                                            <InputRound 
                                                icon='user' 
                                                placeholder='Digite seu E-mail'
                                                onBlur={handleBlur("email")}
                                                onChangeText={handleChange('email')}
                                            />
                                            <InputRound
                                                icon='lock' 
                                                placeholder='Digite sua senha'
                                                onBlur={handleBlur("senha")}
                                                onChangeText={handleChange('senha')}
                                                senha
                                            />
                                            <Pressable
                                                style={[styles.button, styles.buttonModal]}
                                                onPress={Handlecadastrar}>
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


function useState(): [any, any] {
    throw new Error('Function not implemented.');
}

function setModalVisibleCad(arg0: boolean) {
    throw new Error('Function not implemented.');
}

