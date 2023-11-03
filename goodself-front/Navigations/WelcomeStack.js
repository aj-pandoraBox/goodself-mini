import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native'
import React, { useEffect } from 'react'
import Welcome from '../screens/Welcome';
import CreateAccount from '../screens/CreateAccount';

import { createStackNavigator } from '@react-navigation/stack';
import SignIn from '../screens/SignIn';
import LoggedInNav from './LoggedInNav';
import CreateGroup from '../components/Groups/CreateGroup';
import { useDispatch, useSelector } from 'react-redux';
import { loadUserFromAsyncStorage } from '../slices/authSlice';

const Stack = createStackNavigator();

const WelcomeStack = () => {
    const { userInfo, initialLoad } = useSelector((state) => state.auth)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(loadUserFromAsyncStorage())
    }, [initialLoad, userInfo])
    return (

        <>

            {initialLoad && (
                <View style={{ flex: 1, backgroundColor: 'black' }}>
                </View>
            )}

            {!initialLoad && !userInfo && (<Stack.Navigator>



                <Stack.Screen name="Welcome" component={Welcome} options={{ headerShown: false }} />

                <Stack.Screen name="CreateAccount" component={CreateAccount} options={{
                    headerShown: false
                }} />

                <Stack.Screen name="SignIn" component={SignIn} options={{ headerShown: false }} />




            </Stack.Navigator>)}


            {!initialLoad && userInfo && (<Stack.Navigator>

                <Stack.Screen name="HomeNav" component={LoggedInNav} options={{ headerShown: false }} />

                <Stack.Screen name="GroupCreateNav" component={CreateGroup} options={{ headerShown: false }} />


            </Stack.Navigator>)}

        </>
    )
}

export default WelcomeStack
