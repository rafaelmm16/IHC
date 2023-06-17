import React, { useEffect, useState } from 'react';
import { View, StyleSheet, LogBox, TouchableOpacity, ImageBackground, InteractionManager, Animated } from 'react-native';

import { useFocusEffect, useNavigation } from '@react-navigation/native';
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
    const [points, setPoints] = useState<Point[]>([]);
    const navigation = useNavigation();

    useFocusEffect(
        React.useCallback(() => {
          const task = InteractionManager.runAfterInteractions(() => {
            // Expensive task
          });
      
          return () => task.cancel();
        }, [])
      );

    function handleNavigateToMap() {
        navigation.navigate('Map');
    }
  
    return (
        
        <View style={styles.container}>
            
            <ImageBackground source={require('../../images/login.jpg')} style={styles.image}/>

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

                <Surface
                    elevation={4}
                    category="medium"
                    style={{
                        justifyContent: "center",
                        alignItems: "center",
                        width: 100,
                        height: 40,
                        marginStart: 15,
                        backgroundColor: '#b84d4d'
                    }}
                >
                    <Text variant="caption">Login</Text>
                </Surface>

                <Surface
                    elevation={4}
                    category="medium"
                    style={styles.GuessButton}
                    >
                    <IconButton icon={props => <Icon name="account-arrow-right" {...props} onPress={handleNavigateToMap} />} />
                   
                    <Text variant="caption">Entrar como convidado</Text>
                </Surface>
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
        alignItems: 'center',
    },
})