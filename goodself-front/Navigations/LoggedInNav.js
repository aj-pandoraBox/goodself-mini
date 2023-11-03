import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
const Tab = createBottomTabNavigator();
import { MaterialCommunityIcons, Entypo, Ionicons } from '@expo/vector-icons';
import Profile from '../screens/Profile';
import Explore from '../screens/Explore';
import Post from '../screens/Post';
import Groups from '../screens/Groups';


export default function LoggedInNav() {
    return (
        <Tab.Navigator screenOptions={{
            headerShown: false, tabBarStyle: {
                backgroundColor: '#f1f1f1',
            },
            tabBarActiveTintColor: 'black',
            tabBarInactiveTintColor: '#717171',
        }}>
            <Tab.Screen name="Home" component={Home} options={{

                tabBarIcon: (({ size, color }) => {
                    return < MaterialCommunityIcons name="home-variant" size={22} color={color} />
                }),

            }} />

            <Tab.Screen name="Explore" component={Explore} options={{

                tabBarIcon: (({ size, color }) => {
                    return <Entypo name="compass" size={22} color={color} />
                }),

            }} />
            <Tab.Screen name="Post" component={Post} options={{

                tabBarIcon: (({ size, color }) => {
                    return <Ionicons name="add-circle" size={28} color={"#ffba6e"} />
                }),

            }} />
            <Tab.Screen name="Groups+" component={Groups}
                options={{

                    tabBarIcon: (({ size, color }) => {
                        return <MaterialCommunityIcons name="account-group-outline" size={22} color={color} />
                    }),

                }} />

            <Tab.Screen name="Profile" component={Profile}
                options={{

                    tabBarIcon: (({ size, color }) => {
                        return <Ionicons name="person" size={22} color={color} />
                    }),

                }}
            />

        </Tab.Navigator>
    )
}

const styles = StyleSheet.create({})