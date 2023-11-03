import { FlatList, ImageBackground, StyleSheet, Text, View, PixelRatio } from 'react-native'
import React from 'react'
import { FontAwesome5, MaterialCommunityIcons } from '@expo/vector-icons';

export default function Groups() {
    const fontScale = PixelRatio.getFontScale();
    const getFontSize = size => {
        return size / fontScale
    };
    const data = [
        {
            id: '1',
            imageSource: 'https://www.uab.edu/humanresources/home/images/EmployeeWellness/Wellness_ART_Prevention.jpg',
            title: '5kM RUM',
            subtitle: 'Fitness',
        },
        {
            id: '2',
            imageSource: 'https://community.thriveglobal.com/wp-content/uploads/2018/08/wellness-expo-stones.jpg',
            title: 'Overcome Obsticles',
            subtitle: 'Fitness',
        },
        {
            id: '3',
            imageSource: 'https://media.istockphoto.com/id/1306374807/photo/fit-woman-drinking-a-green-detox-smoothie-at-the-gym.jpg?s=612x612&w=0&k=20&c=dbPFnCHAdTkDgqhrByQa80nMXa29mvS8X-MGGfZfZw8=',
            title: 'Yoga',
            subtitle: 'Fitness',
        },
        {
            id: '4',
            imageSource: 'https://content.gallup.com/origin/gallupinc/GallupSpaces/Production/Cms/WORKPLACEV9CMS/bldxj0g--ke8x-lrawaipg.jpg',
            title: 'Run it off',
            subtitle: 'Fitness',
        },
        // Add more data objects as needed
    ];



    const renderItem = ({ item }) => {
        return (
            <ImageBackground
                resizeMode="cover"
                source={{ uri: item.imageSource }}
                style={styles.groupImage}
                imageStyle={{ borderRadius: 10, backgroundColor: 'rgba(0,0,0,0.5)' }}
            >
                <View style={styles.ImageOverlay}>
                    <Text style={styles.centerHead}>{item.title}</Text>
                    <Text style={styles.bottomHead}>{item.subtitle}</Text>
                </View>
            </ImageBackground>
        );
    };

    return (
        <View style={styles.conatiner}>
            <Text style={styles.groupHead}>Groups</Text>
            <View style={styles.groupContainer}>
                <FlatList
                    data={data}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                />
            </View>

            <View style={styles.infoContain}>

                <View style={[styles.infoBox, { borderColor: '#58a9f4' }]}>
                    <Text numberOfLines={1} style={[styles.infoHead, { color: '#58a9f4', fontSize: getFontSize(16) }]}>Challenges</Text>
                    <Text style={[styles.infoSecondary, { color: '#58a9f4' }]}>Explore Now</Text>
                    <View style={[styles.iconInfo, { backgroundColor: '#f2f8fb' }]}>
                        <MaterialCommunityIcons name="run-fast" size={20} color="#90bcef" />
                    </View>
                </View>

                <View style={[styles.infoBox, { borderColor: '#79cd76' }]}>
                    <Text numberOfLines={1} style={[styles.infoHead, { color: '#79cd76', fontSize: getFontSize(16) }]}>Live Chats</Text>
                    <Text style={[styles.infoSecondary, { color: '#79cd76' }]}>Explore Now </Text>
                    <View style={[styles.iconInfo, { backgroundColor: '#f2fdf0' }]}>
                        <FontAwesome5 name="microphone" size={18} color="#74cc66" />
                    </View>
                </View>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    conatiner: {
        paddingLeft: 20,
        marginTop: 15,
        marginBottom: 30
    },
    groupHead: {
        fontSize: 16,
        fontWeight: '600'
    },
    groupContainer: {
        marginTop: 10,
        flexDirection: 'row',
        gap: 10
    },
    groupImage: {
        marginRight: 10,
        width: 110,
        aspectRatio: 1 / 1.5,
        borderRadius: 50,
    },
    ImageOverlay: {
        backgroundColor: 'rgba(0,0,0,0.2)',
        width: '100%',
        height: '100%',
        borderRadius: 10,
        justifyContent: 'center'

    },
    centerHead: {
        marginTop: '50%',
        paddingTop: 20,
        flex: 1,
        color: 'white',
        fontWeight: '600',
        fontSize: 13,
        alignSelf: 'center'
    },
    bottomHead: {
        marginTop: 'auto',
        color: 'white',
        fontSize: 10,
        fontWeight: '400',
        padding: 8
    }
    ,
    infoContain: {
        marginTop: 35,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginRight: 10
    },
    infoBox: {
        flex: 1,
        borderWidth: 2,
        marginRight: 10,
        padding: 30,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,

    },
    infoHead: {
        fontWeight: 'bold',
    },

    infoSecondary: {
        marginTop: 5,
        fontWeight: 'light',
        fontSize: 13
    },

    iconInfo: {
        width: 30,
        aspectRatio: 1,
        borderRadius: 50,
        position: 'absolute',
        top: -15,
        justifyContent: 'center',
        alignItems: 'center'
    }
})