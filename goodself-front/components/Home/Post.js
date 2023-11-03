import { StyleSheet, Text, View, Image, ScrollView, FlatList, RefreshControl } from 'react-native'
import React, { useEffect, useState } from 'react'
import Groups from './Groups';
import { AntDesign, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { useGetPostQuery } from '../../slices/postApiSlice.js';
import { useDispatch } from 'react-redux';

export default function Post() {
    const { data: postData, isLoading, isFetching, isError, refetch } = useGetPostQuery({}, { refetchOnMountOrArgChange: true })

    const [refreshing, setRefreshing] = useState(false)
    const dispatch = useDispatch()
    const [data, setData] = useState([
        // {
        //     _id: '1',
        //     name: 'Dr Sonya Haardt',
        //     profession: 'Cardiologist',
        //     description: 'Health Check Ups',
        //     imageUri: 'https://t4.ftcdn.net/jpg/03/83/25/83/360_F_383258331_D8imaEMl8Q3lf7EKU2Pi78Cn0R7KkW9o.jpg',
        //     postImageUri: 'https://s20427.pcdn.co/wp-content/uploads/2018/07/8-Components-of-Personal-Wellness.jpg',
        // },
        // {
        //     _id: '2',
        //     name: 'Dr Sonya Haardt',
        //     profession: 'Cardiologist',
        //     description: 'Health Check Ups',
        //     imageUri: 'https://t4.ftcdn.net/jpg/03/83/25/83/360_F_383258331_D8imaEMl8Q3lf7EKU2Pi78Cn0R7KkW9o.jpg',
        //     postImageUri: 'https://images2.alphacoders.com/132/1329016.png',
        // },
    ])

    useEffect(() => {
        if (!isFetching && postData) {
            setData([...postData])
            setRefreshing(false);
        }
    }, [isFetching])



    const handleRefresh = async () => {
        setRefreshing(true);

        refetch()

        setRefreshing(false);

    };


    const renderItem = ({ item }) => (
        <View style={styles.postBoxContain}>
            <View style={styles.postHeadContain}>
                <Image style={styles.headImage} source={{ uri: item?.imageUri ? item?.imageUri : "https://wallpapers-clan.com/wp-content/uploads/2023/01/anime-aesthetic-boy-pfp-4.jpg" }} />
                <View style={styles.HeadNameContain}>
                    <Text style={styles.HeadNameText}>{item?.name ? item.name : item.userId.firstName}</Text>
                    <Text style={styles.HeadNameProfession}>{item.userId.role}</Text>
                </View>
            </View>
            <View style={styles.descContain}>
                <Text style={styles.descHead}>{item.title}</Text>
                <Text style={styles.descText}>
                    {item.message}
                </Text>
            </View>
            <Image source={{ uri: item?.postImageUri ? item?.postImageUri : item.imageUrl }} style={[styles.imagePost, { backgroundColor: 'lightgrey' }]} />
            <View>

                <View style={styles.tagsContain}>
                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} >
                        <Text style={styles.tags}>Dentistry</Text>
                        <Text style={styles.tags}>Oralhygenie</Text>
                        <Text style={styles.tags}>happy thoughts</Text>
                        <Text style={styles.tags}>therapy</Text>
                    </ScrollView>
                </View>

                <View style={styles.footer}>
                    <View style={styles.footerIconContain}>
                        <AntDesign name="like2" size={24} color="black" />
                        <AntDesign name="dislike2" size={24} color="black" />
                        <AntDesign name="staro" size={24} color="black" style={styles.footerStarIcon} />
                        <Ionicons name="ios-chatbubble-ellipses-outline" size={24} color="black" />
                        <MaterialCommunityIcons name="send" size={24} color="black" />
                    </View>
                    <Text style={styles.footerDate}>August 28, 2000</Text>
                </View>

            </View>

        </View>
    );

    return (
        <View style={styles.postContainer}>
            {isFetching && <><Text style={{ marginLeft: 20 }}>Loading...</Text></>}
            <FlatList
                refreshControl={
                    <RefreshControl refreshing={refreshing} onRefresh={handleRefresh} />
                }
                data={data}
                keyExtractor={(item) => item._id}
                renderItem={renderItem}
                style={{ flex: 1 }}
                ListHeaderComponent={<Groups />}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    postContainer: {
        flex: 1,
    },
    postBoxContain: {
        marginTop: 20
    },
    postHeadContain: {
        paddingHorizontal: 20,
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10
    },
    headImage: {
        width: 50,
        aspectRatio: 1,
        borderRadius: 50,
        borderColor: '#ffdfad',
        borderWidth: 2
    },
    HeadNameContain: {
        gap: 4
    },
    HeadNameText: {
        fontSize: 15,
        fontWeight: '600'
    },
    HeadNameProfession: {
        color: 'grey',
        fontSize: 12
    }
    ,

    descContain: {
        paddingHorizontal: 20,
        marginTop: 10
    },
    descHead: {
        fontSize: 15,
        fontWeight: '500'
    },
    descText: {
        marginTop: 5,
        fontSize: 14,
        fontWeight: '300'
    }
    ,
    imagePost: {
        marginTop: 20,
        width: '100%',
        aspectRatio: 1,
    }
    ,
    tagsContain: {
        flexDirection: 'row',
        marginTop: 10,
        paddingLeft: 20,
        gap: 20,

    },
    tags: {
        marginRight: 20,
        backgroundColor: '#cbcbcb',
        padding: 10,
        borderRadius: 15,
        overflow: "hidden",
        color: 'black',
        fontSize: 12

    }
    ,
    footer: {
        marginTop: 14,
        marginHorizontal: 25,
    },
    footerIconContain: {
        flexDirection: 'row',
        gap: 10
    },
    footerStarIcon: {
        marginLeft: 'auto',
    },
    footerDate: {
        marginTop: 15,
        paddingBottom: 20,
        fontSize: 12,
        color: 'grey',
        fontWeight: "500"

    }
})