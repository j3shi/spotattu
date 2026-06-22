import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import * as Location from 'expo-location';
import MapView, { Marker } from 'react-native-maps';
import { lightColors, darkColors } from '../theme/colors';
import BackToLocationButton from '../../components/button';
import { Ionicons } from '@expo/vector-icons';
import { useRef } from 'react';

export default function MapScreen() {
    const [status, requestPermission] = Location.useForegroundPermissions();
    const mapRef = useRef<MapView>(null);

    if(!status) {
        return (
        <View style={styles.container}>
            <Text>Loading...</Text>
        </View>);
    }

    if(!status.granted) {
        return (
            <View style={styles.container}>
                <Text style={styles.notGranted}>
                    Spotattu needs your location to show what's trending around you!
                </Text>
                <Button title="Enable Location" onPress={requestPermission}></Button>
            </View>
        )
    }

    return (
        <View style={styles.container}>
            
            <MapView
            style={styles.map}
            showsUserLocation={true}
            followsUserLocation={false}
            initialRegion={{
                latitude: 61.4978,
                longitude: 23.7610,
                latitudeDelta: 0.05,
                longitudeDelta: 0.05,
            }}
            ref={mapRef}
            />
            <BackToLocationButton
            border={2}
            borderColor={lightColors.accent}
            color={lightColors.background}
            radius={100}
            height={50}
            width={50}
            onPress={async () => {
                const location = await Location.getCurrentPositionAsync();
                mapRef.current?.animateToRegion({
                    latitude: location.coords.latitude,
                    longitude: location.coords.longitude,
                    latitudeDelta: 0.05,
                    longitudeDelta: 0.05,
                }, 1000);
            }}
            position={'absolute'}
            bottom={20}
            right={20}
            justifyContent={'center'}
            alignItems={'center'}
            >
            <Ionicons name="location" size={30} color={lightColors.accent} />
            </BackToLocationButton>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: lightColors.background,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 0,
        textDecorationColor: lightColors.text,
    },
    notGranted: {
        textAlign: 'center',
        marginBottom: 20,
    },
    map: {
        width: '100%',
        height: '100%',
    },
})