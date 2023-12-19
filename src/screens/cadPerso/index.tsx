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

export interface CadPersoScreenProps {
    navigation:any 
}

export const CadPersoScreen   = (setUser: any) => {
    
    const [modalVisibleCad, setModalVisibleCad] = React.useState(false);
    const nav = useNavigation<any>();
    const [ erro, setErro ] = React.useState('');
    const auth = getAuth();
    const db = getFirestore();

    const [ Perso, setPerso ] = useState<Perso>({nome: '', descricao: ''});
    useEffect(() => {
        if (auth.currentUser) {getDoc(doc(db, 'usuarios', auth.currentUser.uid))
                .then(dados => setPerso(dados.data()))
        }
    }, []);

    const Handlecadastrar = async ({nome, descricao}: any) => {
        await createUserWithEmailAndPassword(auth, nome, descricao)
            .then((usuario) => {
                        setDoc(doc(db, 'users', usuario.user.uid), {
                            nome, descricao
                        })
            })
            .catch(erro => {
                let msg = 'Não foi possivel cadastar esse personagem';
                ToastAndroid.show( msg, ToastAndroid.LONG);
            })
        setModalVisibleCad(false);
        }

    function handleBlur(arg0: string): any {
        throw new Error('Function not implemented.');
    }

    function handleChange(arg0: string): (texto: string) => void {
        throw new Error('Function not implemented.');
    }

    return (
        <ImageBackground source={require('./../../../assets/img/background.png')} style={styles.background}>
                    <View style={styles.mainView}>
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
                                            <Text style={styles.modalText}>Cadastro de Item</Text>
                                            <InputRound 
                                                icon='user' 
                                                placeholder='Digite nome do item'
                                                onBlur={handleBlur("nome")}
                                                onChangeText={handleChange('nome')}
                                            />
                                            <InputRound
                                                icon='user' 
                                                placeholder='Descrição'
                                                onBlur={handleBlur("descricao")}
                                                onChangeText={handleChange('descricao')}
                                                senha
                                            />
                                            <InputRound
                                                icon='user' 
                                                placeholder='Local'
                                                onBlur={handleBlur("local")}
                                                onChangeText={handleChange('local')}
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
        </ImageBackground>
    );
  };


function useState(): [any, any] {
    throw new Error('Function not implemented.');
}

function setModalVisibleCad(arg0: boolean) {
    throw new Error('Function not implemented.');
}

