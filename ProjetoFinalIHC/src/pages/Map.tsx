import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Dimensions, useWindowDimensions } from 'react-native';
import MapView, { Marker, Callout, PROVIDER_GOOGLE } from 'react-native-maps';

import MapMarker from '../images/map-marker.png';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import { RectButton } from 'react-native-gesture-handler';
import MapViewDirections from 'react-native-maps-directions';
import { Stack, IconButton, Button, Text } from "@react-native-material/core";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
interface Point {
  id: number;
  name: string;
  latitude: number;
  longitude: number;
}
const windowDimensions = Dimensions.get('window');
const screenDimensions = Dimensions.get('screen');

export default function Map() {
  const [points, setPoints] = useState<Point[]>([]);
  const navigation = useNavigation();

  const [dimensions, setDimensions] = useState({
    window: windowDimensions,
    screen: screenDimensions,
  });

  useEffect(() => {
    const subscription = Dimensions.addEventListener(
      'change',
      ({window, screen}) => {
        setDimensions({window, screen});
      },
    );
    return () => subscription?.remove();
  });
  
  function handleNavigateToPointDetails()/* (id: number) */{
    navigation.navigate('PointDetails');
  }
  function handleNavigateToCreatePoint(){
    navigation.navigate('SelectMapPosition');
  }
  function handleNavigateToProfile(){
    navigation.navigate('Profile');
  }
  function handleNavigateToMap(){
    navigation.navigate('Map');
  }
  function handleNavigateToHours(){
    navigation.navigate('Hours');
  }
  

  return (
    <View style={styles.container}>
      <MapView
      provider={PROVIDER_GOOGLE}
      style={
        styles.map}
      initialRegion={
        { 
          latitude: -18.7207707,
          longitude: -39.85614,
          latitudeDelta: 0.008,
          longitudeDelta: 0.008,
          }}
      >
            <Marker
              icon={MapMarker}
              calloutAnchor={{
                x: 2.5,
                y: 0.7,
              }}
              coordinate={{
                latitude: -18.7207707,
                longitude: -39.85614,
              }}
            >
              <Callout tooltip onPress={() => handleNavigateToPointDetails/* (points.id) */}>
                <View style={styles.calloutContainer}>
                  <Text style={styles.calloutText}>{/* {points.name} */}</Text>
                </View>
              </Callout>
            </Marker>
      </MapView>

      <View style={styles.footer}>
        
      <IconButton icon={props => <Icon name="google-maps" {...props} onPress={handleNavigateToMap} />} />
            <Text variant="button">Mapa</Text>
            {/* <Button variant="text" title="Mapa" onPress={handleNavigateToMap}/> */}

            <IconButton icon={props => <Icon name="home-group" {...props} onPress={handleNavigateToPointDetails} />} />
            <Text variant="button">Casas</Text>

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
  map: {
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width,
  },
  calloutContainer: {
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    borderRadius: 16,
    height: 46,
    justifyContent: 'center',
    paddingHorizontal: 16,
    width: 160,
  },
  calloutText: {
    color: '#0089A5',
    fontFamily: 'Roboto_700Bold',
    fontSize: 14,
  },
  footer: {
    flex: 2,
    position: 'absolute',
    width: '100%',
    height: '9%',
    top: '88%',
    backgroundColor: '#54b2cac7',
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
    //alignSelf: 'flex-end',
    justifyContent: 'center',
    left: 35,
    top: 23,
    fontWeight: 'bold',
    //padding: 4,
  },
  icon: {
    //alignItems: 'stretch',
    //justifyContent: 'space-evenly',
    //alignItems: 'center',
    alignSelf: 'center',
    //alignContent: 'stretch',
    //right: 40,
    //bottom: 5,
  }
});