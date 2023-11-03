import { SafeAreaView, StyleSheet, Text, View, Pressable, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { Entypo } from '@expo/vector-icons';

export default function CreateGroup() {
    const navigation = useNavigation()
    const goBack = () => {
        navigation.pop()
    }
    return (

        <SafeAreaView style={styles.container}>
            <View style={styles.navigationContainer}>
                <Pressable onPress={goBack}>
                    <Ionicons style={styles.navIcon} name="chevron-back" size={25} color="black"

                    />
                </Pressable>
                <Text style={styles.navHeader}>Create a Group</Text>

            </View>
            <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}  >
                <View style={{ flex: 1, }}>
                    <View style={{ flex: 0.7 }}>
                        <Text style={styles.placeholderText}>Mandator fields are market with an asterisk (*)</Text>


                        <Pressable style={styles.imageAddContain}>

                            <Entypo name="circle-with-plus" size={24} color="white" />
                        </Pressable>
                        <Text style={styles.imagePlacehodler}>Add Cover photo *</Text>
                    </View>


                    <View style={{ flex: 1, }}>
                        <TextInput placeholder='Group Name *' style={styles.textInputGroupName} placeholderTextColor={"grey"} />

                        <TextInput placeholder='Description *' style={[styles.textInputGroupName, { marginTop: 0, height: 100, paddingTop: 10 }]} placeholderTextColor={"grey"} multiline={true} />


                    </View>
                </View>
            </KeyboardAvoidingView>

            <TouchableOpacity style={styles.createGroupContain}><Text style={styles.createGroupText}>Create Group</Text></TouchableOpacity>


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
    navHeader: {
        flex: 1,
        textAlign: 'center',
        fontSize: 28,
        fontWeight: '600'
    },
    placeholderText: {
        color: 'grey',
        paddingHorizontal: 20,
    },
    imageAddContain: {
        alignSelf: 'center',
        backgroundColor: 'grey',
        width: 100,
        height: '60%',
        borderRadius: 20,
        marginTop: 20,
        justifyContent: 'center',
        alignItems: 'center',

    },

    imageIconBack: {
        color: 'black'
    },
    imagePlacehodler: {
        fontSize: 14,
        textAlign: 'center',
        marginTop: 10,
        color: 'grey',
    },
    textInputGroupName: {
        backgroundColor: 'white',
        margin: 20,
        marginTop: 0,
        paddingHorizontal: 20,
        paddingVertical: 15,
        borderRadius: 10
    },
    createGroupContain: {
        marginTop: 'auto',
        margin: 20,
        backgroundColor: 'grey',
        padding: 10,
        borderRadius: 40,
        paddingVertical: 13
    },
    createGroupText: {
        textAlign: 'center',
        fontSize: 18,
        fontWeight: '500'
    }

})