import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons';

export default function Header() {
    return (
        <View style={styles.topContainer}>
            <View style={styles.headContain}>
                <Image style={styles.headImage} source={{ uri: 'https://wallpapers-clan.com/wp-content/uploads/2023/01/anime-aesthetic-boy-pfp-4.jpg' }} />
                <View style={styles.headInfo}>
                    <Text style={styles.headUsername}>@ajaymandani</Text>
                    <Text style={styles.headTitle}>User</Text>
                    <Text style={styles.headDegree}>Fanshawe College - Mobile App Dev</Text>
                    <Text style={styles.headPlace}>London, Canada</Text>
                </View>
            </View>

            <View style={styles.personInstructContain}>
                <Text style={[styles.personInstructContainContent, { backgroundColor: '#feb969', }]}>Follow</Text>
                <Text style={[styles.personInstructContainContent, { backgroundColor: '#fedaa3', }]}>Message</Text>
                <Text style={[styles.personInstructContainContent, { borderColor: 'black', borderWidth: 2 }]}>Resume</Text>
            </View>

            <View style={styles.perosnLinkContain}>
                <AntDesign style={styles.perosnLinkContainIcon} name="link" size={24} color="black" />
                <Text style={styles.perosnLinkText}>https://theimpactfulparent.com/</Text>
            </View>
            <Text style={styles.headDesc}>
                PARENTING COACH: I help parents turn their chaos into connection with their children.
            </Text>
            <View style={styles.ScoreContain}>
                <View style={styles.ScoreInfoBox}>
                    <Text style={styles.scoreHeadText}>Posts</Text>
                    <Text style={styles.scoreNumberText}>90</Text>
                </View>
                <View style={styles.ScoreInfoBox}>
                    <Text style={styles.scoreHeadText}>Talks</Text>
                    <Text style={styles.scoreNumberText}>0</Text>
                </View>
                <View style={styles.ScoreInfoBox}>
                    <Text style={styles.scoreHeadText}>Following</Text>
                    <Text style={styles.scoreNumberText}>30</Text>
                </View>
                <View style={styles.ScoreInfoBox}>
                    <Text style={styles.scoreHeadText}>Followers</Text>
                    <Text style={styles.scoreNumberText}>20</Text>
                </View>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({

    topContainer: {
        marginTop: 25,
        paddingHorizontal: 20
    },
    headContain: {
        flexDirection: 'row',
        gap: 20,
        alignItems: 'center'
    },
    headImage: {
        width: 80,
        aspectRatio: 1,
        borderRadius: 50,
        borderColor: '#feba69',
        borderWidth: 3
    },
    headInfo: {
        gap: 1
    },
    headUsername: {
        fontWeight: 'bold'
    },
    headTitle: {
        fontWeight: '400'
    },
    headDegree: {
        fontWeight: '400',

    },
    headPlace: {
        fontWeight: '300',
        color: 'grey'
    },
    personInstructContain: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        gap: 20,
        marginTop: 20
    },
    personInstructContainContent: {
        flex: 1,
        textAlign: 'center',
        borderRadius: 20,
        overflow: 'hidden',
        paddingVertical: 8,
        borderWidth: 2,
        borderColor: 'transparent'
    }
    ,
    perosnLinkContain: {
        flexDirection: 'row',
        marginTop: 10,
        alignItems: 'center',
        gap: 6
    },
    perosnLinkContainIcon: {
        fontSize: 15,
        marginLeft: 5
    },
    perosnLinkText: {
        color: '#00a2fe'
    },
    headDesc: {
        marginTop: 10,
        marginLeft: 5,
        fontSize: 14,
        fontWeight: '400'
    },
    ScoreContain: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginLeft: 5,
        marginTop: 15,
        backgroundColor: '#f8f9f9',
        paddingHorizontal: 30,
        paddingVertical: 7,
        borderRadius: 20

    },
    ScoreInfoBox: {
        alignItems: 'center',
        gap: 5
    },
    scoreHeadText: {
        fontSize: 12,

    },
    scoreNumberText: {
        fontSize: 15,
        fontWeight: 'bold'
    },

})