import { View, Text, StyleSheet, TextInput, TouchableWithoutFeedback, Pressable } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import DateTimePickerModal from 'react-native-modal-datetime-picker';


const CreateBirthday = ({ setNext, addNewUserData, val }) => {
    const [date, setDate] = useState("");
    const [tempdate, setTempDate] = useState(new Date());
    const [errorShow, setErrorShow] = useState(false);

    const [isDatePickerVisible, setDatePickerVisible] = useState(false);

    const showDatePicker = () => {
        setDatePickerVisible(true);
    };

    const hideDatePicker = () => {
        setDatePickerVisible(false);
    };

    const handleConfirm = (selectedDate) => {
        if (selectedDate) {
            setTempDate(selectedDate);
            setDate(selectedDate.toLocaleDateString())
            const selectedDOB = selectedDate;
            const eighteenYearsAgo = new Date();
            eighteenYearsAgo.setFullYear(eighteenYearsAgo.getFullYear() - 18);

            if (selectedDOB <= eighteenYearsAgo) {
                setErrorShow(false)

            } else {
                setErrorShow(true)
            }
        }
        hideDatePicker();
    };

    const handleDayPress = (day) => {
        setDate(new Date(day.dateString));
        hideCalendar();
    };

    useEffect(() => {
        if (date && !errorShow && val <= 1) {
            addNewUserData("DOB", date)
            setNext(true)
        } else {
            setNext(false)
        }
    }, [val, date])

    return (
        <View style={styles.Container} >
            <Text style={styles.ContainerHeader}>
                What's your <Text style={{ fontWeight: 'bold' }}>Birthday?</Text>
            </Text>


            <View style={styles.ContainerInputBox}>
                <View style={styles.Inner}>


                    <TextInput
                        placeholder='Date of Birth (DD/MM/YYYY)'
                        placeholderTextColor="gray"
                        style={[styles.ContainerInputStyle,]}
                        value={date}
                        editable={false}
                    />

                    {!errorShow && date && (<Ionicons name="checkmark-circle-outline" color="black" style={styles.Checkmark} />)}

                    {errorShow && date && (
                        <MaterialIcons name="error" size={24} style={[styles.Checkmark, { color: 'orange' }]} />)}

                    <Pressable style={{ width: '100%', height: '100%', position: 'absolute', top: 0 }} onPress={() => { showDatePicker() }}></Pressable>
                </View>

            </View>
            <Text style={styles.InfoText}>You must be 18 years or older to join the platform.</Text>

            <DateTimePickerModal
                isVisible={isDatePickerVisible}
                display={"inline"}
                mode="date"
                date={tempdate}
                onConfirm={handleConfirm}
                onCancel={hideDatePicker}
            />

        </View>
    )
}

export default CreateBirthday

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
        paddingVertical: 13,
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

    InfoText: {
        color: 'grey',
        marginTop: 7,
        width: "80%",
        fontWeight: '400'
    }


})