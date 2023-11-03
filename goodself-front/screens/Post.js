import { KeyboardAvoidingView, Pressable, StyleSheet, Text, TextInput, TouchableOpacity, View, Platform, Alert, Image } from 'react-native'
import React, { useState } from 'react'
import { Ionicons, Feather } from '@expo/vector-icons';
import { useAddPostMutation } from '../slices/postApiSlice';
import * as ImagePicker from 'expo-image-picker';

export default function Post() {
    const [savePost] = useAddPostMutation()
    const [desc, setDesc] = useState("")
    const [title, setTitle] = useState("")
    const [image, setImage] = useState(null);

    const save = async () => {
        if (title && desc && image) {
            try {
                const formData = new FormData();
                formData.append('title', title);
                formData.append('message', desc);
                formData.append('imageURL', {
                    uri: image.uri,
                    name: 'image.jpg',
                    type: 'image/jpeg',
                });
                const result = await savePost(formData).unwrap();
                Alert.alert("New Post Added")
                setImage("")
                setTitle("")
                setDesc("")
            } catch (err) {
                console.error('Error adding the post:', err);
            }
        } else {
            Alert.alert("Need all the required fields")
        }
    }


    const addPhoto = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 0.5,
        });


        if (!result.canceled) {
            const responseImage = result.assets[0];


            setImage(responseImage)

        }
    }

    return (
        <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === 'ios' ? 'padding' : 'height'} >
            <View style={styles.container}>
                <View style={styles.navConatiner}>
                    {/* <Ionicons name="ios-chevron-back" size={24} color="black" /> */}
                    <Text style={styles.navHead}>Image/Video</Text>
                    <TouchableOpacity onPress={save} style={styles.navShareContain}>
                        <Text style={styles.navShare}>Share</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.mediaInputContain}>

                    {image && (
                        <Image resizeMode="cover" source={{ uri: image.uri }} style={{ width: '100%', height: '100%', marginBottom: 20, position: 'absolute', top: 0, left: 0 }} />
                    )}
                    <TouchableOpacity onPress={addPhoto}>
                        <View style={styles.mediaBtn}>
                            <Ionicons name="image-outline" size={24} color="black" />
                            <Text style={styles.mediaText} >Add Media</Text>
                        </View>
                    </TouchableOpacity>
                </View>

                <View style={styles.textContainer}>
                    <Text style={styles.textcontainHead}>Mandatory fields are marked with an asterisk (*)</Text>
                    <View style={styles.textBox}>
                        <TextInput onChangeText={setTitle} value={title} placeholderTextColor={"grey"} style={styles.input} placeholder='Title*' />
                        <Text style={styles.inputFooter}>{title.length}/45 characters</Text>
                    </View>

                    <View style={styles.textBox}>
                        <TextInput placeholderTextColor={"grey"} style={styles.input} value={desc} onChangeText={setDesc} placeholder='Description*' />
                        <Text style={styles.inputFooter}>{desc.length}/45 characters</Text>
                    </View>
                </View>




            </View>
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: Platform.OS === 'android' ? 0 : 0,
        flex: 1,
        backgroundColor: '#ffffff',

    },
    navConatiner: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingTop: 50,
        paddingBottom: 10,
        paddingHorizontal: 15,
        backgroundColor: '#f6f6f6'
    },
    personTopNavIco: {
        fontSize: 30
    },
    navInput: {
        flex: 1,
        marginLeft: 20,
        backgroundColor: '#ffffff',
        paddingVertical: 14,
        paddingHorizontal: 20,
        borderRadius: 20,
        fontSize: 17

    },
    navHead: {
        flex: 1,
        textAlign: 'center',
        fontSize: 27,
        fontWeight: '600'
    },
    navShareContain: {

    },
    navShare: {
        fontSize: 16
    }

    ,

    mediaInputContain: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 0.7
    },
    mediaBtn: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
        backgroundColor: '#ffb65e',
        padding: 10,
        borderRadius: 20,
        paddingHorizontal: 20
    },
    mediaText: {
        fontSize: 16,
        fontWeight: '500'
    },

    textContainer: {
        backgroundColor: "#f6f6f6",
        flex: 1,
        padding: 20,

    },
    textcontainHead: {
        fontSize: 14,
        color: 'grey'
    },
    textBox: {
        marginTop: 10
    },
    input: {
        backgroundColor: 'white',
        paddingHorizontal: 20,
        paddingVertical: 15,

        borderRadius: 10
    },
    inputFooter: {
        marginTop: 10,
        alignSelf: 'flex-end'
    }

})