import { FlatList, ImageBackground, Animated, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from './Header';

export default function ProfilePost() {
    const data = [
        {
            id: '1',
            imageUri: 'https://img.freepik.com/premium-photo/nature_838106-884.jpg?size=626&ext=jpg&ga=GA1.1.1413502914.1696982400&semt=ais',
            text: 'Lets be health, all of us!',
        },
        {
            id: '2',
            imageUri: 'https://img.freepik.com/premium-photo/nature_838106-884.jpg?size=626&ext=jpg&ga=GA1.1.1413502914.1696982400&semt=ais',
            text: 'Lets be health, all of us!',
        },
        {
            id: '3',
            imageUri: 'https://img.freepik.com/premium-photo/nature_838106-884.jpg?size=626&ext=jpg&ga=GA1.1.1413502914.1696982400&semt=ais',
            text: 'Lets be health, all of us!',
        },
        {
            id: '4',
            imageUri: 'https://img.freepik.com/premium-photo/nature_838106-884.jpg?size=626&ext=jpg&ga=GA1.1.1413502914.1696982400&semt=ais',
            text: 'Lets be health, all of us!',
        },
    ];
    const renderItem = ({ item }) => (

        <ImageBackground
            imageStyle={styles.image2}
            resizeMode="cover"
            style={styles.image}
            source={{ uri: item.imageUri }}
        >
            <Text style={styles.text}>{item.text}</Text>
        </ImageBackground>

    );


    return (


        <FlatList data={data}

            renderItem={renderItem}
            keyExtractor={(item) => item.id}
            style={[styles.container, { backgroundColor: 'white' }]}
            contentContainerStyle={[styles.contentContainer, { backgroundColor: "white" }]}
            numColumns="3"
        />



    )
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 20,
        paddingHorizontal: 10,
        backgroundColor: '#fffffff',

    },
    contentContainer: {
        paddingBottom: 50,
        backgroundColor: '#fffffff',

    },
    contain: {
        backgroundColor: '#ffffff',
        flexDirection: 'row',
        gap: 10,
        flexWrap: 'wrap',
        flex: 1,


    },
    image: {
        width: '31%',
        height: 1,
        aspectRatio: 1 / 1.6,
        backgroundColor: 'grey',
        borderRadius: 10,
        overflow: 'hidden',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 5
    },
    image2: {
        backgroundColor: 'grey',
        height: '100%',
        width: '100%'
    },
    text: {
        color: '#ffffff',
        fontWeight: '500',
        fontSize: 15,
        padding: 3,
        textAlign: 'center'

    }
})