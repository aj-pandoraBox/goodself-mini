import { View, Text, StyleSheet, SafeAreaView, Platform, TextInput, KeyboardAvoidingView, Button, Animated, Pressable, Alert } from 'react-native';
import React, { useEffect, useRef, useState } from 'react'
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import PagerView from 'react-native-pager-view';
import CreateName from '../components/CreateAccountsComponent/CreateName';
import CreateBirthday from '../components/CreateAccountsComponent/CreateBirthday';
import CreateAddress from '../components/CreateAccountsComponent/CreateAddress';
import CreateUsername from '../components/CreateAccountsComponent/CreateUsername';
import CreateEmail from '../components/CreateAccountsComponent/CreateEmail';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useRegisterMutation } from '../slices/userApiSlice';
import { useDispatch } from 'react-redux';
import { setCredentials } from '../slices/authSlice';


const CreateAccount = ({ route }) => {
    const [val, setVal] = useState(0)
    const scroller = useRef(null)
    const navigation = useNavigation()
    const { type } = route.params;
    const [userData, setUserData] = useState({})
    const [next, setNext] = useState(false)

    const [register] = useRegisterMutation()
    const dispatch = useDispatch()
    useEffect(() => {
        addNewUserData("role", type)
        if (scroller.current) {
            scroller.current.setPage(val);
        }
    }, [val]);


    const addNewUserData = (Key, Value) => {
        setUserData((prev) => ({ ...prev, [Key]: Value }))
    }

    const createAcc = async () => {



        try {
            const res = await register({ ...userData }).unwrap()
            if (res?.userId) {
                dispatch(setCredentials(res.userId))
            }

            if (res?.message?.message) {
                Alert.alert(res?.message?.message)
            }

        } catch (err) {
            Alert.alert(err?.data?.message)
        }



    }


    const nextPage = () => {
        if (next) {


            if (val < 4) {
                setVal((prevVal) => prevVal + 1);

            } else {
                navigation.push("HomeNav")
            }

            setNext(false)
        }

    }

    const goBack = () => {
        if (val == 0) {
            navigation.pop()
            return
        }
        setVal((prevVal) => prevVal - 1);

    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.navigationContainer}>
                <Pressable onPress={goBack}>
                    <Ionicons style={styles.navIcon} name="chevron-back" size={25} color="black"

                    />
                </Pressable>
                <Text style={styles.navHeader}>Create Account</Text>
                <Text style={styles.navHeader}></Text>

            </View>
            <View style={styles.navDivider}>
                <View style={[styles.innerNavDivider, { width: `${(val + 1) * 20}%` }]}></View>
            </View>


            <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>

                <PagerView style={[styles.viewPager, { marginLeft: 2 }]} ref={scroller} initialPage={val} scrollEnabled={false} orientation="horizontal">

                    <View key="1">
                        <CreateName setNext={setNext} addNewUserData={addNewUserData} val={val} />
                    </View>
                    <View key="2">
                        <CreateBirthday setNext={setNext} addNewUserData={addNewUserData} val={val} />
                    </View>

                    <View key="3">
                        <CreateAddress setNext={setNext} addNewUserData={addNewUserData} val={val} />
                    </View>

                    <View key="4">
                        <CreateUsername setNext={setNext} addNewUserData={addNewUserData} val={val} />
                    </View>

                    <View key="5">
                        <CreateEmail setNext={setNext} addNewUserData={addNewUserData} val={val} />
                    </View>




                </PagerView>


            </KeyboardAvoidingView>


            <View style={styles.footer}>
                {val <= 3 && (<Pressable onPress={nextPage}>
                    <View style={[styles.footerIconContainer, { backgroundColor: next ? "#ffc876" : 'lightgrey' }]}>
                        <AntDesign style={styles.footerIcon} name="arrowright" size={24} color="black" />
                    </View>
                </Pressable>)}

                {val > 3 && (
                    <TouchableOpacity onPress={createAcc} style={styles.createAccountBtnContainer}>
                        <Text style={styles.createAccountBtnText}>Create Account</Text>
                    </TouchableOpacity>
                )}

                <View style={styles.footerPaggingContainer}>


                    {[...Array(5)].map((_, index) => {
                        return (
                            <View key={index} style={[styles.footerPagging, { backgroundColor: index == val ? '#feb968' : '#d7d7d7' }]}></View>
                        )
                    })}


                </View>

            </View >



        </SafeAreaView >
    )
}

export default CreateAccount

const styles = StyleSheet.create({
    viewPager: {
        flex: 1,
    },
    page: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    container: {
        marginTop: Platform.OS === 'android' ? 30 : 0,
        flex: 1,
    },
    navigationContainer: {
        flexDirection: 'row',
        paddingHorizontal: 20,
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingTop: 10
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
    navDivider: {
        marginTop: 10,
        width: '100%',
        height: 5,
        backgroundColor: '#e8e8e9'
    },
    innerNavDivider: {
        backgroundColor: '#ffc876',
        height: 5,

    },



    //footer design
    footer: {
        paddingHorizontal: 20,
        marginBottom: 10
    },
    footerIconContainer: {
        alignSelf: 'flex-end',
        backgroundColor: '#ffc876',
        width: 50,
        aspectRatio: 1,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 50
    },
    footerIcon: {
        color: '#ffffff',
        fontSize: 28
    },
    footerPaggingContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 20,
        gap: 15
    },
    footerPagging: {
        backgroundColor: '#d7d7d7',
        width: 10,
        aspectRatio: 1,
        borderRadius: 50
    },
    createAccountBtnContainer: {
        backgroundColor: '#ffc876',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 13,
        borderRadius: 20,
        width: "90%",
        alignSelf: 'center',
        opacity: 1

    },
    createAccountBtnText: {
        color: "#ffffff",
        fontWeight: 'bold',
        fontSize: 18
    }

})
