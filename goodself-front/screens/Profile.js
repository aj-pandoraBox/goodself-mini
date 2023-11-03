import { StyleSheet, Text, View, SafeAreaView, ScrollView, FlatList, SectionList, Pressable, TouchableOpacity } from 'react-native'
import React from 'react'
import { Ionicons, Feather } from '@expo/vector-icons';
import TopTabNav from '../components/Profile/TopTabNav';
import Header from '../components/Profile/Header';
import ProfilePost from '../components/Profile/ProfilePost';
import { AntDesign } from '@expo/vector-icons';
import { useLoginMutation, useLogoutMutation } from '../slices/userApiSlice';
import { logout } from '../slices/authSlice';
import { useDispatch } from 'react-redux';

export default function Profile() {


    const [logoutMutation, { isLoading }] = useLogoutMutation()

    const dispatch = useDispatch()
    const logoutClicked = async () => {

        try {
            const res = await logoutMutation().unwrap()
            dispatch(logout())
            console.log(res)
        } catch (err) {
            console.log(err)
        }

    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.navConatiner}>
                <TouchableOpacity onPress={logoutClicked}>
                    <AntDesign name="logout" size={20} color="black" />
                </TouchableOpacity>
                <Text style={styles.iconText} >Ajay Mandani</Text>
                <Feather style={styles.iconNavMore} name="more-vertical" size={24} color="black" />
            </View>



            <TopTabNav />


        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: Platform.OS === 'android' ? 30 : 0,
        flex: 1,
        backgroundColor: '#ffffff'
    },
    navConatiner: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        paddingHorizontal: 15,
    },
    iconNavBack: {
        fontSize: 26,
    },
    iconText: {
        flex: 1,
        textAlign: 'center',
        marginRight: -20,
        fontSize: 22,
        fontWeight: '500'
    },
    iconNavMore: {
        fontSize: 26,
        marginLeft: 'auto'
    }
})