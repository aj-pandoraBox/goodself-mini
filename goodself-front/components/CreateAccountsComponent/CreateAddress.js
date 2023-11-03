import { View, Text, StyleSheet, TextInput, TouchableWithoutFeedback, Pressable, Platform } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import { Ionicons } from '@expo/vector-icons';
import RNPickerSelect from 'react-native-picker-select';
import axios from 'axios'
const CreateAddress = ({ setNext, addNewUserData, val }) => {
    const [countries, setCountries] = useState([])
    useEffect(() => {
        axios.get("https://api.first.org/data/v1/countries").then((resp) => {
            const tempCountries = []
            for (const key in resp.data.data) {

                tempCountries.push({
                    label: resp.data.data[key].country,
                    value: resp.data.data[key].country,
                    key: key,
                })
            }
            setCountries(tempCountries)
        })
    }, [])


    const [selectedCountry, setSelectedCountry] = useState('');
    const [selectedCity, setSelectedCity] = useState('');

    const pickerRef = useRef(null);
    const [showPicker, setShowPicker] = useState(false);
    const placeholder = {
        label: 'Select a country',
        value: null,
    };

    const items = [
        { label: 'Item 1', value: 'item1', key: "1" },
        { label: 'Item 2', value: 'item2', key: "2" },
        { label: 'Item 3', value: 'item3', key: "3" },
    ];
    const openCountryPicker = () => {
        if (Platform.OS == 'ios') {
            pickerRef.current.togglePicker()

        }
    };

    useEffect(() => {
        if (selectedCountry && selectedCity && val <= 2) {
            addNewUserData("country", selectedCountry)
            addNewUserData("city", selectedCity)

            setNext(true)

        } else {
            setNext(false)
        }
    }, [val, selectedCountry, selectedCity])

    const showCountryPicker = () => {
        alert("ss")
    }

    return (

        <View style={styles.Container} key="1">
            <Text style={styles.ContainerHeader}>
                Where are you <Text style={{ fontWeight: 'bold' }}>from?</Text>
            </Text>


            <View style={styles.ContainerInputBox}>
                <View style={styles.Inner}>


                    <TextInput
                        placeholder='Country'
                        placeholderTextColor="gray"
                        style={[styles.ContainerInputStyle,]}
                        value={selectedCountry}
                        editable={false}

                    />

                    {selectedCountry && (<Ionicons name="checkmark-circle-outline" color="black" style={styles.Checkmark} />)}


                    <Pressable style={{ width: '100%', height: '100%', position: 'absolute', top: 0 }} onPress={() => { openCountryPicker() }}></Pressable>



                </View>




            </View>






            {Platform.OS == 'ios' && (<RNPickerSelect
                onValueChange={(value) => setSelectedCountry(value)}

                items={countries}
                value={selectedCountry}
                useNativeAndroidPickerStyle={true}
                ref={pickerRef}
                placeholder={placeholder}
                hideDoneBar={true}
                style={styles.pickerStyle}

            />)}


            <View style={[styles.ContainerInputBox, { marginTop: 10 }]}>
                <View style={styles.Inner}>


                    <TextInput
                        value={selectedCity}
                        onChangeText={setSelectedCity}
                        placeholder='City'
                        placeholderTextColor="gray"
                        style={[styles.ContainerInputStyle,]}
                        editable={true}
                    />

                    {selectedCity && (<Ionicons name="checkmark-circle-outline" color="black" style={styles.Checkmark} />)}




                </View>




            </View>



        </View>
    )
}

export default CreateAddress

const styles = StyleSheet.create({

    //name container styles

    Container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    ContainerHeader: {
        fontSize: 25,
        marginBottom: 15
    },
    ContainerInputBox: {
        flexDirection: 'row',
        gap: 20,
        alignItems: 'center'
    },
    ContainerInputStyle: {
        backgroundColor: '#feffff',
        borderColor: '#cccccc',
        padding: 10,
        paddingVertical: 14,
        borderRadius: 10,
        borderWidth: 1,
        width: '100%',
        paddingRight: 40
    },
    Inner: {
        width: '80%',
        flexDirection: 'row',

    },
    Checkmark: {
        position: 'absolute',
        top: '50%',
        right: "5%",
        fontSize: 20,
        color: '#429542',
        transform: [{ translateY: -10 }],


    },

    pickerStyle: {

        inputIOS: {
            display: 'none',
        },
        inputAndroid: {
            width: '85%',
            marginLeft: 30
        },

    }




})