import React, { useState } from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import MapView, { Marker, Callout, PROVIDER_GOOGLE } from 'react-native-maps';

import MapMarker from '../images/map-marker.png';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import { RectButton } from 'react-native-gesture-handler';
import MapViewDirections from 'react-native-maps-directions';
import { Stack, IconButton, Button } from "@react-native-material/core";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
interface Point {
  id: number;
  name: string;
  latitude: number;
  longitude: number;
}

export default function Map() {
  const [points, setPoints] = useState<Point[]>([]);
  const navigation = useNavigation();
  
  function handleNavigateToPointDetails(id: number){
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
        {points.map(points => {
          return (
            <Marker
              key={points.id}
              icon={MapMarker}
              calloutAnchor={{
                x: 2.5,
                y: 0.7,
              }}
              coordinate={{
                latitude: points.latitude,
                longitude: points.longitude,
              }}
            >
              <Callout tooltip onPress={() => handleNavigateToPointDetails(points.id)}>
                <View style={styles.calloutContainer}>
                  <Text style={styles.calloutText}>{points.name}</Text>
                </View>
              </Callout>
            </Marker>
          )
        })}
      </MapView>

      <View style={styles.footer}>
        
        <IconButton icon={props => <Icon name="map" {...props} />} />
        <Button variant="text" title="Mapa" onPress={handleNavigateToMap}/>

        <IconButton icon={props => <Icon name="clock" {...props} />} />
        <Button variant="text" title="Horarios" />

        <IconButton icon={props => <Icon name="account" {...props} />} />
        <Button variant="text" title="Perfil" onPress={handleNavigateToProfile}/>
        
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
    position: 'absolute',
    width: 491,
    height: 76,
    top: 1015,
    backgroundColor: '#499c6f',
    elevation: 4,
    justifyContent: 'space-around',
    alignContent: 'space-around',
    //alignItems: 'center',
    flexDirection: 'row'
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