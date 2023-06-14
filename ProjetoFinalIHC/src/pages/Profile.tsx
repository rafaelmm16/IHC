import React, { useState } from 'react';
import { StyleSheet, View, Dimensions } from 'react-native';
import { Feather } from '@expo/vector-icons';

import { useNavigation, useFocusEffect } from '@react-navigation/native';
import { RectButton } from 'react-native-gesture-handler';
import { IconButton, Text } from '@react-native-material/core';
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
interface Point {
    id: number;
    name: string;
    latitude: number;
    longitude: number;
}

export default function Profile() {
    const [points, setPoints] = useState<Point[]>([]);
    const navigation = useNavigation();

    function handleNavigateToHours(){
      navigation.navigate('Hours');
    }
      function handleNavigateToMap(){
        navigation.navigate('Map');
      }
      function handleNavigateToProfile(){
        navigation.navigate('Profile');
      }
      function handleNavigateToProfileData(){
        navigation.navigate('ProfileData');
      }
      function handleNavigateToRecharge(){
        navigation.navigate('Recharge');
      }
      function handleNavigateToExtract(){
        navigation.navigate('Extract');
      }
      function handleNavigateToLogin(){
        navigation.navigate('Login');
      }

    return (
        <View style={styles.container} >
          <Text style={styles.ProfileTextHeader}> Olá, Joana! </Text>

          <View style={styles.container2} >
            <Text style={styles.ProfileText}> Meus dados </Text>
            <RectButton style={styles.createStyle} onPress={handleNavigateToProfileData}>
              <Icon name="card-account-details" size={20} color="#F5AB35"/>
              {/* //<Feather name="user" size={20} color="#F5AB35" /> */}
            </RectButton>

            <Text style={styles.ProfileText}> Configurações </Text>
            <RectButton style={styles.createStyle} onPress={ () => {} }>
              <Icon name="cog" size={20} color="#F5AB35"/>
            </RectButton>

            <Text style={styles.ProfileText}> Notificações </Text>
            <RectButton style={styles.createStyle} onPress={() => {}}>
              <Icon name="bell" size={20} color="#F5AB35"/>
            </RectButton>

            <Text style={styles.ProfileText}> Ajuda </Text>
            <RectButton style={styles.createStyle} onPress={() => {}}>
              <Icon name="help-circle" size={20} color="#F5AB35"/>
            </RectButton>

            <Text style={styles.ProfileText}> Sair </Text>
            <RectButton style={styles.createStyle} onPress={handleNavigateToLogin}>
              <Icon name="logout-variant" size={20} color="#F5AB35"/>
            </RectButton>
          </View>


          <View style={styles.footer}>
            <IconButton icon={props => <Icon name="google-maps" {...props} onPress={handleNavigateToMap} />} />
            <Text variant="button">Mapa</Text>
            {/* <Button variant="text" title="Mapa" onPress={handleNavigateToMap}/> */}

            <IconButton icon={props => <Icon name="home-group" {...props} />} />
            <Text variant="button">BUTTON TEXT</Text>

            <IconButton icon={props => <Icon name="account-details" {...props} />} onPress={handleNavigateToProfile} />
            <Text variant="button">Perfil</Text>
            {/* <Button variant="text" title="Perfil" onPress={handleNavigateToProfile}/> */}
            
        </View>
      </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    container2: {
      flex: 2,
  },
    footer: {
      flex: 3,
      position: 'absolute',
      width: '100%',
      height: '9%',
      top: '88%',
      backgroundColor: '#499c6f',
      //elevation: 4,
      //justifyContent: 'space-around',
      //alignContent: 'space-around',
      //justifyContent: 'center',
      alignItems: 'center',
      alignContent: 'stretch',
      flexWrap: 'wrap',
      //flexDirection: 'row'
    },
    footerText: {
        color: '#F5AB35',
        fontFamily: 'Roboto_700Bold',
        position: 'relative',
        //width: 80,
        //height: 15,
        left: 60,
        top: 22,
    },
    createPointButton: {
        position: 'relative',
        left: 3.5,
        right: 3.9,
        //top:12.6,
        //bottom:13,
        height: 36,
        justifyContent: 'space-between',
        //width: 56,
    },
    ProfileText: {
        color: '#606060',
        fontFamily: 'Roboto_700Bold',
        position: 'relative',
        //width: 80,
        //height: 15,
        left: 70,
        top: 87,
        alignItems: 'baseline',
        borderBottomWidth: 1,
        borderColor: '#DDE3F0',
        flexDirection: 'column',
        justifyContent: 'space-between',
        //padding: 24,
        paddingTop: 24,
    },
    createStyle:{ 
        position: 'relative',
        justifyContent: 'space-between',
        left: 30,
        //right: 3.9,
        height: 30,
        top: 67,
    },
    ProfileTextHeader:{
      position: 'relative',
      width: 155,
      height: 34,
      left: 148,
      top: 19,
      fontFamily: 'Roboto_700Bold',
      color: '#606060',
    },
});