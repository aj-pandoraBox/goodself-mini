import { View, Text, StyleSheet, TextInput, TouchableWithoutFeedback, Pressable } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Ionicons, MaterialIcons } from '@expo/vector-icons';

import { useEmailcheckMutation } from '../../slices/userApiSlice';


const CreateEmail = ({ addNewUserData }) => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState(false)

    const [checkEmail] = useEmailcheckMutation()
    useEffect(() => {

        if (email && password) {
            addNewUserData("email", email)
            addNewUserData("password", password)
            check()

        }
    }, [email, password])

    const check = async () => {

        try {
            const result = await checkEmail({ email }).unwrap()
            if (result?.error?.status == 400) {
                setError(true)

            } else {
                setError(false)
            }
        } catch (err) {
            console.log(err)
            setError(true)
        }

    }

    return (
        <View style={styles.Container} >
            <Text style={styles.ContainerHeader}>
                What's your <Text style={{ fontWeight: 'bold' }}>Email?</Text>
            </Text>


            <View style={styles.ContainerInputBox}>
                <View style={styles.Inner}>


                    <TextInput
                        onChangeText={setEmail}
                        value={email}
                        editable={true}
                        placeholder='Email Address'
                        placeholderTextColor="gray"
                        style={[styles.ContainerInputStyle,]}
                    />


                    {email != "" && password != "" && !error && (<Ionicons name="checkmark-circle-outline" color="black" style={styles.Checkmark} />)}

                    {email != "" && password != "" && error && (<MaterialIcons name="error" size={24} style={[styles.Checkmark, { color: 'orange' }]} />)}



                </View>

            </View>

            <View style={[styles.ContainerInputBox, { marginTop: 10 }]}>
                <View style={styles.Inner}>


                    <TextInput
                        onChangeText={setPassword}
                        secureTextEntry={true}
                        value={password}
                        editable={true}
                        placeholder='Password'
                        placeholderTextColor="gray"
                        style={[styles.ContainerInputStyle,]}
                    />



                </View>

            </View>
            <Text style={styles.InfoText}>We may user your email to verify your account at any point</Text>



        </View>
    )
}

export default CreateEmail

const styles = StyleSheet.create({

    //name container styles

    Container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    ContainerHeader: {
        fontSize: 25,
        marginBottom: 15
    },
    ContainerInputBox: {
        flexDirection: 'row',
        gap: 20,
        alignItems: 'center'
    },
    ContainerInputStyle: {
        backgroundColor: '#feffff',
        borderColor: '#cccccc',
        padding: 10,
        paddingVertical: 13,
        borderRadius: 10,
        borderWidth: 1,
        width: '100%',
        paddingRight: 40
    },
    Inner: {
        width: '80%',
        flexDirection: 'row',

    },
    Checkmark: {
        position: 'absolute',
        top: '50%',
        right: "5%",
        fontSize: 20,
        color: '#429542',
        transform: [{ translateY: -10 }],


    },

    InfoText: {
        color: 'grey',
        marginTop: 7,
        width: "80%",
        fontWeight: '400'
    }


})