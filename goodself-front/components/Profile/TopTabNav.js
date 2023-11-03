import { ScrollView, StyleSheet, Text, View, Animated } from 'react-native'
import React, { useState } from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import ProfilePost from './ProfilePost';
import ProfileVideo from './ProfileVideo';
import Header from './Header';

const Tab = createMaterialTopTabNavigator();

export default function TopTabNav() {

    const tabs = [
        { name: 'ProfilePost', component: ProfilePost },
        { name: 'ProfileVideo', component: ProfileVideo },
    ];

    return (
        <>
            <Header />

            <Tab.Navigator style={styles.nav} screenOptions={{
                tabBarActiveTintColor: '#feba68', tabBarInactiveTintColor: 'black', tabBarLabelStyle: { fontWeight: 'bold', fontSize: 12 }, tabBarIndicatorStyle: { backgroundColor: '#febc6f' },
                tabBarStyle: { backgroundColor: '#fdf7ee' },
            }}>
                <Tab.Screen name="Interests" component={ProfilePost} />
                <Tab.Screen name="Posts" children={() => <ProfilePost />} />
                <Tab.Screen name="Talks" component={ProfilePost} />
                <Tab.Screen name="Folder" component={ProfileVideo} />


            </Tab.Navigator >
        </>
    )
}

const styles = StyleSheet.create({
    nav: {
        marginTop: 15,

    }
})