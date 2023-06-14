import React, { useState } from 'react';
import { View, StyleSheet, TextInput, TouchableOpacity, ImageBackground } from 'react-native';

import { useNavigation, useFocusEffect } from '@react-navigation/native';
import { RectButton } from 'react-native-gesture-handler';
import { Text, Stack } from "@react-native-material/core";
interface Point {
    id: number;
    name: string;
    latitude: number;
    longitude: number;
}

export default function Login() {
    //const [points, setPoints] = useState<Point[]>([]);
    const navigation = useNavigation();

    function handleNavigateToMap() {
        navigation.navigate('Map');
    }
    function handleNavigateToCreatUser() {
        navigation.navigate('CreatUser');
    }

    return (
        <View style={styles.container}>
            <ImageBackground source={require('../../images/login.png')} style={styles.image}>
                <Text style={styles.Text} variant="h6">Login</Text>
            </ImageBackground>
            <View style={styles.Form}>
                <Text style={styles.title}>Email</Text>
                <TextInput
                    placeholder="Digite um email..."
                    style={styles.input}
                />

                <Text style={styles.title}>Senha</Text>
                <TextInput
                    placeholder="Digite sua senha..."
                    style={styles.input}
                />

                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Entrar</Text>
                </TouchableOpacity>

                {/* <TouchableOpacity style={styles.buttonRegister} onPress={handleNavigateToCreatUser}>
                    <Text style={styles.registerText}>Quero me cadastrar</Text>
                </TouchableOpacity> */}

                <TouchableOpacity style={styles.buttonBlank} onPress={handleNavigateToMap}>
                    <Text style={styles.registerText}>Entrar como convidado</Text>
                </TouchableOpacity>
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    Text: {
        //width: 300,
        //height: 350,
        //left: 0,
        //top: 300,
        fontSize: 36,
        color: '#7aafeb',
        marginTop: '55%',
        //marginBottom: '8%',
        paddingStart: '5%',
        fontWeight: 'bold',
        lineHeight: 84,
    },
    image: {
        height: "100%",
        flex: 2,
        justifyContent: 'space-evenly'
    },
    Form: {
        fontSize: 28,
        backgroundColor: '#000000',
        flex: 3,
        paddingStart: '5%',
        paddingEnd: '5%',
    },
    title: {
        color: '#D9D9D9',
        fontSize: 12,
        marginTop: 28,
        width: 38,
        height: 20,
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
    },
    input: {
        borderBottomWidth: 1,
        height: 40,
        marginBottom: 12,
        fontSize: 16,
        backgroundColor: '#D9D9D9',
        borderRadius: 27.4,
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingLeft: 24,
    },
    button: {
        backgroundColor: '#F5AB35',
        width: '100%',
        borderRadius: 27.4,
        paddingVertical: 8,
        marginTop: 14,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        color: '#FFFFFF',
        fontWeight: '700',
    },
    buttonRegister: {
        borderColor: '#F5AB35',
        borderWidth: 1,
        width: '100%',
        borderRadius: 27.4,
        paddingVertical: 8,
        marginTop: 14,
        justifyContent: 'center',
        alignItems: 'center',
    },
    registerText: {
        color: '#FFFFFF',
        fontWeight: '700',
    },
    buttonBlank: {
        top: 20,
        marginTop: 14,
        alignSelf: 'center',
        borderBottomWidth: 1,
        borderColor: '#F5AB35',
    },
})