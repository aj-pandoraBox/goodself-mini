import { View, Text, StyleSheet, TextInput, TouchableWithoutFeedback, Pressable } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import { useUsernamecheckMutation } from '../../slices/userApiSlice';


const CreateUsername = ({ setNext, addNewUserData, val }) => {

    const [username, setUsername] = useState("")
    const [checkUsername] = useUsernamecheckMutation()
    const [error, setError] = useState(false)
    useEffect(() => {
        if (username && val <= 3 && !error) {
            addNewUserData("username", username)
            setNext(true)

        } else {
            setNext(false)
        }
    }, [username, val, error])

    useEffect(() => {

        const check = async () => {
            try {
                const result = await checkUsername({ username })
                if (result?.error?.status == 400) {
                    setError(true)

                } else {
                    setError(false)
                }
            } catch (err) {
                setError(true)
            }

        }

        if (username != "") {
            check()
        }
    }, [username])


    return (
        <View style={styles.Container} >
            <Text style={styles.ContainerHeader}>
                Pick a <Text style={{ fontWeight: 'bold' }}>Username?</Text>
            </Text>


            <View style={styles.ContainerInputBox}>
                <View style={styles.Inner}>


                    <TextInput
                        onChangeText={setUsername}
                        value={username}
                        placeholder='Create your username'
                        placeholderTextColor="gray"
                        style={[styles.ContainerInputStyle,]}
                        editable={true}
                    />

                    {!error && username != "" && (<Ionicons name="checkmark-circle-outline" color="black" style={styles.Checkmark} />)}

                    {error && username != "" && (<MaterialIcons name="error" size={24} style={[styles.Checkmark, { color: 'orange' }]} />)}


                </View>

            </View>


        </View>
    )
}

export default CreateUsername

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