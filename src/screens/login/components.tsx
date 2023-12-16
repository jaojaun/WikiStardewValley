import { Input } from '@rneui/base';
import * as React from 'react';
import { View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import { styles } from './style';

export interface InputRoundProps {
    placeholder: string;
    senha?: boolean;
    icon: string;
    onChangeText(texto: string): void;
}

export function InputRound (props: InputRoundProps) {

    return (
      <View>
        <Input placeholder={props.placeholder} 
            inputContainerStyle={styles.inputCont} 
            leftIcon={{ name:props.icon, type:'font-awesome', color:'black' }}
            onChangeText={(texto) => props.onChangeText(texto)}
            secureTextEntry={props.senha}
        />
      </View>
    );
}
