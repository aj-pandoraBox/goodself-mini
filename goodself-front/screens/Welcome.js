import { View, Text, StyleSheet, ImageBackground, Pressable, TouchableOpacity, SafeAreaView, Platform } from 'react-native'
import React, { useEffect } from 'react'
import { StatusBar } from 'expo-status-bar';
import { useNavigation } from '@react-navigation/native';
import axios from "axios"
import { HOSTURL } from "@env"
const image = { uri: 'https://legacy.reactjs.org/logo-og.png' };

const Welcome = () => {


    const naviagtion = useNavigation()
    useEffect(() => {

        const test = async () => {
            try {
                const data = await axios.get(`${HOSTURL}`)

                console.log(data.data)
            } catch (err) {
                console.log(err)
            }

        }

        test()

    }, []);

    const SignInTabPressed = () => {
        naviagtion.removeListener()

        naviagtion.navigate('SignIn')
    }

    const goToCreateAccount = (type) => {
        naviagtion.removeListener()

        naviagtion.navigate('CreateAccount', { type: type })
    }


    return (
        <View style={styles.container}>
            <ImageBackground source={require('../assets/back.png')} resizeMode="cover" style={styles.image}>
                <SafeAreaView style={styles.insideContainer}>
                    <Text style={styles.insideText}>goodself</Text>

                    <View style={styles.centerBox}>
                        <TouchableOpacity onPress={() => goToCreateAccount("user")} style={styles.insideBoxOne}>
                            <Text style={styles.insideBoxOneTextOne}>Goodself Users</Text>
                            <Text style={styles.insideBoxOneTextTwo}>I want to find helpful information and join a strong community around Health, Wellness & Lifestyle</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.insideBoxTwo}
                            onPress={() => goToCreateAccount('expert')}
                        >
                            <Text style={styles.insideBoxTwoTextOne}>Goodself Experts</Text>
                            <Text style={styles.insideBoxTwoTextTwo}>I am a credentialed Health, Wellness and/or Lifestyle professional and want to apply to become an Expert</Text>
                        </TouchableOpacity>

                    </View>

                    <TouchableOpacity onPress={SignInTabPressed}><Text style={styles.signInText}>Already have an account? <Text style={styles.signInTextBold}>Sign in</Text> </Text></TouchableOpacity>

                    <Text style={styles.masthead}>Made by Ajay Mandani</Text>
                </SafeAreaView>


            </ImageBackground>
        </View>
    )
}

export default Welcome


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    image: {
        flex: 1
    },
    insideContainer: {
        marginTop: Platform.OS === 'android' ? 30 : 0,
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',

    },
    centerBox: {
        flex: 1,
        justifyContent: 'center',
    },
    insideText: {
        color: '#ffffff',
        fontSize: 25,
        fontWeight: 'bold'
    },
    insideBoxOne: {
        backgroundColor: '#dedddd',
        borderRadius: 10,
        paddingHorizontal: 20,
        paddingVertical: 25,
        alignItems: 'center', // Center horizontally
        justifyContent: 'center', // Center vertically
        textAlign: 'center',
        marginTop: 40, // Add margin as needed

    },
    insideBoxOneTextOne: {
        color: '#000000',
        fontSize: 25,
        fontWeight: '700',
        marginBottom: 10
    },
    insideBoxOneTextTwo: {
        color: '#000000',
        fontSize: 16,
        textAlign: 'center',
        fontWeight: '600',
        marginBottom: 10,
        maxWidth: '90%',
        lineHeight: 19
    },

    insideBoxTwo: {
        backgroundColor: '#2e2a28',
        borderRadius: 10,
        paddingHorizontal: 20,
        paddingVertical: 25,
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        marginTop: 40,

    },
    insideBoxTwoTextOne: {
        color: '#ffffff',
        fontSize: 25,
        fontWeight: '700',
        marginBottom: 10
    },
    insideBoxTwoTextTwo: {
        color: '#ffffff',
        fontSize: 16,
        textAlign: 'center',
        fontWeight: '600',
        marginBottom: 10,
        maxWidth: '90%',
        lineHeight: 19
    },
    signInText: {
        color: '#ffffff',
        fontSize: 18,
        marginBottom: 10
    },
    signInTextBold: {
        fontWeight: 'bold'
    },
    masthead: {
        color: '#ffffff',
        fontSize: 12
    }


})