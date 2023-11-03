import { Alert, Platform, Pressable, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { Ionicons } from '@expo/vector-icons';
import { TextInput } from 'react-native-gesture-handler';
import { useDispatch, useSelector } from 'react-redux';
import { setCredentials } from '../slices/authSlice';
import { useLoginMutation } from '../slices/userApiSlice';
import axios from 'axios';

export default function SignIn() {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const navigation = useNavigation()

    const dispatch = useDispatch()

    const [login, { isLoading }] = useLoginMutation()
    const { userInfo } = useSelector((state) => state.auth)
    const goBack = () => {
        navigation.goBack()
    }

    const loginClicked = async () => {

        if (email && password) {


            try {
                const res = await login({ email, password }).unwrap()
                console.log(res)
                dispatch(setCredentials(res.userId))
            } catch (err) {
                console.log(err)
            }


        } else {
            Alert.alert("Please enter all the fields")
        }
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.navigationContainer}>
                <Pressable onPress={goBack}>
                    <Ionicons style={styles.navIcon} name="chevron-back" size={25} color="black"

                    />
                </Pressable>
                <Text style={styles.navHeader}>Sign In</Text>
                <Text style={styles.navHeader}></Text>

            </View>


            <View style={styles.inputContainer}>
                <Text style={styles.inputText}>Email</Text>
                <TextInput onChangeText={setEmail} value={email} placeholder='Enter email address here' style={styles.InputField}

                    placeholderTextColor="grey"


                />

            </View>

            <View style={styles.inputContainer}>
                <Text style={styles.inputText}>Password</Text>
                <TextInput onChangeText={setPassword} value={password} secureTextEntry={true} placeholder='Enter your password to login' style={styles.InputField} placeholderTextColor="grey"

                />
                <TouchableOpacity style={styles.forgotPassContain}>
                    <Text style={styles.forgotPassText}>Forgot Password?</Text>
                </TouchableOpacity>
            </View>



            <View style={styles.footerContainer}>
                <TouchableOpacity style={[styles.loginBtn, { backgroundColor: (email != '' && password) != "" ? '#ffc876' : '#a0a0a0' }]} onPress={loginClicked}>
                    <Text style={styles.loginBtnText}>Login</Text>
                </TouchableOpacity>
            </View>


        </SafeAreaView >
    )
}

const styles = StyleSheet.create({

    container: {
        marginTop: Platform.OS === 'android' ? 30 : 0,
        flex: 1,
        backgroundColor: '#f4f4f4'
    },
    navigationContainer: {
        flexDirection: 'row',
        paddingHorizontal: 20,
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingTop: 10,
        marginBottom: 20,
    },
    navIcon: {

    },

    navHeader: {
        marginLeft: 'auto',
        marginRight: 10,
        fontSize: 30,
        letterSpacing: 1,
        fontWeight: '600'
    },

    inputContainer: {
        paddingHorizontal: 20,
        marginTop: 20
    },

    inputText: {
        fontSize: 16,
        fontWeight: '600'
    },

    InputField: {
        backgroundColor: 'white',
        paddingHorizontal: 12,
        paddingVertical: 16,
        borderRadius: 8,
        marginTop: 12,
        fontSize: 16
    },
    footerContainer: {
        marginTop: 'auto',
        padding: 20
    },
    loginBtn: {
        backgroundColor: '#a0a0a0',
        // ffc876
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 20
    },
    loginBtnText: {
        textAlign: 'center',
        fontSize: 18,
        fontWeight: 'bold'
    },
    forgotPassContain: {
        marginTop: 10
    },
    forgotPassText: {
        textAlign: 'right',
        color: '#989898',
        fontSize: 12
    }
})