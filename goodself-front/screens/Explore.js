import { StyleSheet, Text, View, SafeAreaView, TextInput } from 'react-native'
import React from 'react'
import { Ionicons, Feather } from '@expo/vector-icons';
import Result from '../components/Explore/Result';

export default function Explore() {
    return (
        <View style={styles.container}>
            <View style={styles.navConatiner}>
                <Ionicons style={styles.personTopNavIco} name="person" size={24} color="black" />
                <View style={{ flex: 1 }}>
                    <TextInput placeholderTextColor={"grey"} style={styles.navInput} placeholder='Search' ></TextInput>
                    <View style={styles.navSearchContain} >
                        <Feather style={styles.navSearchIcon} name="search" size={24} color="black" />
                    </View>
                </View>
            </View>

            <Result />



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
    }
})