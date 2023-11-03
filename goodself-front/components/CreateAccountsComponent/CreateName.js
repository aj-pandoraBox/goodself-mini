import { View, Text, StyleSheet, TextInput } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Ionicons } from '@expo/vector-icons';


const CreateName = ({ setNext, addNewUserData, val }) => {


    const [name, setName] = useState("")
    const [lastName, setLastName] = useState("")

    useEffect(() => {
        if (name != "" && lastName != "" && val == 0) {
            setNext(true)
            addNewUserData("firstName", name)
            addNewUserData("lastName", lastName)
        } else {
            setNext(false)
        }

    }, [name, lastName, val])


    return (
        <View style={styles.nameContainer} >
            <Text style={styles.nameContainerHeader}>
                What's your <Text style={{ fontWeight: 'bold' }}>Name?</Text>
            </Text>
            <View style={styles.nameContainerInputBox}>
                <View style={styles.nameInner}>
                    <TextInput onChangeText={setName} value={name} placeholderTextColor="gray" placeholder='First Name' style={styles.nameContainerInputStyle} />

                    {name && (<Ionicons name="checkmark-circle-outline" color="black" style={styles.nameCheckmark} />)}

                </View>



                <View style={styles.nameInner}>
                    <TextInput onChangeText={setLastName} value={lastName} placeholderTextColor="gray" placeholder='Last Name' style={styles.nameContainerInputStyle} />

                    {lastName && (<Ionicons name="checkmark-circle-outline" color="black" style={styles.nameCheckmark} />)}
                </View>
            </View>
        </View>
    )
}

export default CreateName

const styles = StyleSheet.create({

    //name container styles

    nameContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    nameContainerHeader: {
        fontSize: 25,
        marginBottom: 15
    },
    nameContainerInputBox: {
        flexDirection: 'row',
        gap: 20,
        alignItems: 'center'
    },
    nameContainerInputStyle: {
        backgroundColor: '#feffff',
        borderColor: '#cccccc',
        padding: 10,
        paddingVertical: 13,
        borderRadius: 10,
        borderWidth: 1,
        width: '100%',
        paddingRight: 40
    },
    nameInner: {
        width: '38%',
        flexDirection: 'row',

    },
    nameCheckmark: {
        position: 'absolute',
        top: '50%',
        right: "5%",
        fontSize: 20,
        color: '#429542',
        transform: [{ translateY: -10 }],


    },


})