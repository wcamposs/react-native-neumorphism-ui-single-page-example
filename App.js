// libraries
import React from 'react';
import { SafeAreaView, StyleSheet, Text, View, Image, Slider } from 'react-native';
import { AntDesign, Entypo } from '@expo/vector-icons';
// Neuromorphism library
import { NeuButton, NeuBorderView } from 'react-native-neu-element';

// image
import songImage from './src/Assets/Images/spiritbox-eternal-blue.png';

const gray = '#8a9ab5';
const darkGray = '#657387';

export default function App() {
    return (
        <View style={styles.container}>
            <SafeAreaView style={{ alignSelf: 'stretch' }}>
                <View style={{ marginHorizontal: 32, marginTop: 64 }}>
                    <View style={styles.topContainer}>
                        <NeuButton
                            color='#eef2f9'
                            height={40}
                            width={40}
                            borderRadius={20}
                            onPress={() => {}}
                        >
                            <AntDesign name='arrowleft' size={20} color={gray} />
                        </NeuButton>
                        
                        <View>
                            <Text style={styles.playing}>PLAYING NOW</Text>
                        </View>

                        <NeuButton
                            color='#eef2f9'
                            height={40}
                            width={40}
                            borderRadius={20}
                            onPress={() => {}}
                        >
                            <Entypo name='menu' size={24} color={gray} />
                        </NeuButton>
                    </View>
                    
                    <View style={styles.musicImageContainer}>
                        <NeuBorderView
                            containerStyle={styles.musicImageBorder}
                            color='#eef2f9'
                            height={300}
                            width={300}
                            borderRadius={150}
                            borderWidth={20}
                        >
                            <Image source={songImage} style={styles.songImage} />
                        </NeuBorderView>

                        <View style={styles.songDescriptionContainer}>
                            <Text style={styles.songTitle}>Secret Garden</Text>
                            <Text style={styles.artistName}>Spiritbox</Text>
                        </View>
                    </View>

                    <View style={styles.songProgressContainer}>
                        <View style={styles.songStartAndEndRow}>
                            <Text style={styles.time}>2:21</Text>
                            <Text style={styles.time}>3:39</Text>
                        </View>

                        <Slider
                            minimumValue={0}
                            maximumValue={1}
                            minimumTrackTintColor="#8aaaff"
                            maximumTrackTintColor="#7b9bff"
                            thumbTintColor="#8aaaff"
                            value={0.64}
                            style={styles.slider}
                        /> 
                    </View>

                    <View style={styles.controlButtonsContainer}>
                        <NeuButton
                            color='#eef2f9'
                            height={80}
                            width={80}
                            borderRadius={40}
                            onPress={() => {}}
                        >
                            <Entypo name='controller-fast-backward' size={24} color={gray} />
                        </NeuButton>

                        <NeuButton
                            color='#8aaaff'
                            height={80}
                            width={80}
                            borderRadius={40}
                            onPress={() => {}}
                        >
                            <Entypo name='controller-paus' size={24} color='white' />
                        </NeuButton>
                            
                        <NeuButton
                            color='#eef2f9'
                            height={80}
                            width={80}
                            borderRadius={40}
                            onPress={() => {}}
                        >
                            <Entypo name='controller-fast-forward' size={24} color={gray} />
                        </NeuButton>
                    </View>
                </View>
            </SafeAreaView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#dee9fd',
        alignItems: 'center',
    },
    topContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    playing: {
        color: gray,
        fontWeight: 'bold',
    },
    musicImageContainer: {
        marginTop: 20,
        marginBottom: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    musicImageBorder: {
        backgroundColor: '#dee9fd'
    },
    songImage: {
    width: 280,
    height: 280,
    borderRadius: 140,
    },
    songDescriptionContainer: {
        marginTop: 15,
        marginBottom: 5,
        alignItems: 'center',
        justifyContent: 'center',
    },
    songTitle: {
        color: darkGray,
        marginVertical: 10,
        fontWeight: 'bold',
        fontSize: 30,
    },
    artistName: {
        color: gray,
        fontWeight: 'bold',
        fontSize: 18,
    },
    songProgressContainer: {
        marginVertical: 10,
    },
    time: {
        fontSize: 12,
        fontWeight: 'bold',
        color: darkGray,
        marginBottom: 10,
        marginHorizontal: 14,
    },
    slider:{
        marginVertical: 5,
        width: '100%',
    },
    songStartAndEndRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    controlButtonsContainer: {
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
});
