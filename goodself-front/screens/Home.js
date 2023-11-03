import { Platform, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import Post from '../components/Home/Post';

export default function Home() {
    return (
        <View style={styles.container}>
            <View style={styles.navigationContainer}>


                <Ionicons style={styles.personTopNavIco} name="person" size={24} color="black" />

                <Text style={styles.navTextHead}>goodself</Text>


                <MaterialCommunityIcons name="lightning-bolt-outline" size={18} color="black" style={[styles.iconBoltNav, styles.navRightMargin]} />

                <Ionicons name="chatbubble-ellipses-outline" size={24} color="black" style={styles.navRightMargin} />

                <Entypo name="calendar" size={24} color="black" style={styles.navRightMargin} />
            </View>

            <Post />


        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: Platform.OS === 'android' ? 0 : 0,
        flex: 1,
        backgroundColor: '#ffffff'

    },

    navigationContainer: {
        // backgroundColor: '#e7e7e7',
        flexDirection: 'row',
        paddingTop: 60,
        paddingBottom: 10,
        paddingHorizontal: 20,
        alignItems: 'center',
    },

    iconSearchNav: {
        marginLeft: 'auto',
        width: 30,
        aspectRatio: 1,
        backgroundColor: '#fdb96f',
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: -12
    },

    iconSearchNavIcon: {
        fontSize: 15,
    },

    iconBoltNav: {
        marginLeft: 'auto',

    },

    personTopNavIco: {
        marginRight: 'auto',
        marginLeft: 6,
        fontSize: 29,
        color: '#3d3d3d'

    },
    navTextHead: {
        marginLeft: 'auto',
        fontSize: 30,
        marginRight: -12,
        fontWeight: '600',
        color: "#323232"
    },

    navRightMargin: {
        marginRight: 12,
        fontSize: 23,
        color: "#323232"
    }


})