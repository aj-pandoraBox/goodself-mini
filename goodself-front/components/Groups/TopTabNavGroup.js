import { ScrollView, StyleSheet, Text, View, Animated } from 'react-native'
import React, { useState } from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import GroupPost from './GroupPost';
import GroupChallenges from './GroupChallenges';

const Tab = createMaterialTopTabNavigator();

export default function TopTabNavGroup() {


    return (
        <>

            <Tab.Navigator style={styles.nav} screenOptions={{
                tabBarActiveTintColor: '#feba68', tabBarInactiveTintColor: 'black', tabBarLabelStyle: { fontWeight: 'bold', fontSize: 12 }, tabBarIndicatorStyle: { backgroundColor: '#febc6f' },
                tabBarStyle: { backgroundColor: '#fdf7ee' },
            }}>
                <Tab.Screen name="Groups" component={GroupPost} />
                <Tab.Screen name="Challenges" children={() => <GroupChallenges />} />



            </Tab.Navigator >
        </>
    )
}

const styles = StyleSheet.create({
    nav: {

    }
})