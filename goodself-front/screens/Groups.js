import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Ionicons, Feather } from '@expo/vector-icons';
import TopTabNavGroup from '../components/Groups/TopTabNavGroup';
import { useNavigation } from '@react-navigation/native';

export default function Groups() {
    const navigation = useNavigation()
    return (
        <View style={styles.container}>
            <View style={styles.navConatiner}>
                <Ionicons style={styles.personTopNavIco} name="person" size={24} color="black" />

                <Text style={styles.groupsText}>Groups+</Text>
                <TouchableOpacity style={styles.groupsCreateBtn} onPress={() => { navigation.push("GroupCreateNav") }}>
                    <Text style={styles.groupsCreateBtnText}>Create</Text>
                </TouchableOpacity>
            </View>

            <TopTabNavGroup />



        </View>
    )
}

const styles = StyleSheet.create({

    container: {
        marginTop: Platform.OS === 'android' ? 0 : 0,
        flex: 1,
        backgroundColor: '#ffffff'
    },
    navConatiner: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingTop: 50,
        paddingBottom: 10,
        paddingHorizontal: 15,
        backgroundColor: '#f6f6f6'
    },
    personTopNavIco: {
        fontSize: 30
    },
    navInput: {
        marginLeft: 20,
        backgroundColor: '#ffffff',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 20,
        fontSize: 17,
    },
    navSearchContain: {
        position: 'absolute',
        right: 6,
        backgroundColor: '#ffb65e',
        borderRadius: 20,
        width: 30,
        aspectRatio: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 4
    },
    navSearchIcon: {
        color: 'white',
        fontSize: 20
    },
    groupsText: {
        flex: 1,
        textAlign: 'center',
        fontSize: 25,
        fontWeight: '600'
    },
    groupsCreateBtn: {

    },
    groupsCreateBtnText: {
        color: '#247cb7',
        fontWeight: '500',
        fontSize: 16
    }
})