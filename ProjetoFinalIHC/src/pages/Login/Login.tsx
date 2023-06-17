import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';

import { useNavigation, useFocusEffect } from '@react-navigation/native';
import { RectButton } from 'react-native-gesture-handler';
import { Text, Stack, TextInput, IconButton, Surface } from "@react-native-material/core";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
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
            <ImageBackground source={require('../../images/login.jpg')} style={styles.image}>

                <Surface
                    elevation={4}
                    category="medium"
                    style={{
                        justifyContent: "center",
                        alignItems: "center",
                        width: 100,
                        height: 40,
                        top: 75,
                        marginTop: '50%',
                        marginStart: 15,
                        backgroundColor: '#eb7a7ac7'
                    }}
                >
                    <Text variant="caption">Login</Text>
                </Surface>

            </ImageBackground>
            <View style={styles.Form}>
                <Stack spacing={2} style={{ margin: 16 }}>
                    <TextInput
                        label="Usuario"
                        leading={props => <Icon name="account" {...props} />}
                    />
                    <TextInput
                        label="Senha"
                        variant="outlined"
                        trailing={props => (
                            <IconButton icon={props => <Icon name="eye" {...props} />} {...props} />
                        )}
                    />
                </Stack>

                <TouchableOpacity style={styles.GuessButton} onPress={handleNavigateToMap}>
                    <Text style={styles.GuessText}>Entrar como convidado</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    image: {
        flex: 2,
        resizeMode: 'cover'
    },
    Form: {
        backgroundColor: '#004cbe8f',
        flex: 3,
    },
    GuessText: {
        color: '#FFFFFF',
        fontWeight: '700',
        width: 200,
        height: 20,
        textAlign: 'center'
    },
    GuessButton: {
        marginTop: 20,
        alignSelf: 'center',
        borderBottomWidth: 2,
        borderColor: '#acb971',
        backgroundColor: '#6eb2b4',
        padding: 10,

    },
})