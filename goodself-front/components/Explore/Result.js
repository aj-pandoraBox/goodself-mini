import React from 'react';
import { FlatList, StyleSheet, Text, View, ImageBackground, Dimensions } from 'react-native';

const data = [
    {
        id: '1',
        imageUri:
            'https://img.freepik.com/premium-photo/nature_838106-884.jpg?size=626&ext=jpg&ga=GA1.1.1413502914.1696982400&semt=ais',
        text: 'Lets be healthy together',
    },

];
const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;
export default function Result() {

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
        <>
            <View style={styles.contain}>
                <View style={styles.catContain}>
                    <Text style={[styles.catText, { backgroundColor: '#ffb65e' }]}>Users</Text>
                    <Text style={styles.catText}>Talks</Text>
                    <Text style={styles.catText}>Content</Text>
                </View>
                <View style={styles.resultContain}>

                </View>
            </View>
            <FlatList

                data={data}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                style={styles.flatList}
                numColumns={3}
            />
        </>

    );
}

const styles = StyleSheet.create({
    contain: {
        padding: 20,
    },
    catContain: {
        flexDirection: 'row',
        gap: 20,
    },
    catText: {
        flex: 1,
        textAlign: 'center',
        backgroundColor: '#cccaca',
        paddingVertical: 8,
        fontSize: 16,
        borderRadius: 16,
        overflow: 'hidden',
    },
    resultContain: {
        // flex: 1,
        // backgroundColor: 'red',
        // flexDirection: 'row',
        // gap: 10,
        // flexWrap: 'wrap',
        // marginTop: 20,

    },
    image: {
        width: '31%',
        height: 1,
        aspectRatio: 1 / 1.5,
        borderRadius: 15,
        overflow: 'hidden',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 10,
        marginBottom: 10
    },
    image2: {
        width: '100%',
        height: '100%',
    },
    text: {
        textAlign: 'center',
        color: 'white',
        fontWeight: '500',
        fontSize: 13,
    },
    flatList: {
        padding: 20,
        paddingTop: 0,
        height: screenHeight,
        width: screenWidth,

    },
});
