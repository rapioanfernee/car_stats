import { useState, useEffect } from 'react'
import { View, TextInput, StyleSheet } from 'react-native'
import DateTimePicker from '@react-native-community/datetimepicker';

import config1 from '../colors'
import Button from './Button'

const DatePickerTextInput = (props) => {

    const [date, setDate] = useState(new Date(Date.now()))
    const [textValue, setTextValue] = useState(props.value);
    const [open, setOpen] = useState(false)

    const getFormattedDate = (date) => {
        let year = date.getFullYear();
        let month = (1 + date.getMonth()).toString().padStart(2, '0');
        let day = date.getDate().toString().padStart(2, '0');

        return month + '/' + day + '/' + year;
    }

    const onDateSelect = (_, selectedDate) => {
        setOpen(false);
        setDate(selectedDate)
        const formattedDate = getFormattedDate(selectedDate)
        setTextValue(formattedDate)
        props.onChange(formattedDate)
    }

    return (
        <View style={styles.container}>
            {/* To-do: Add in typing of date */}
            <TextInput
                style={{ ...styles.textInput, ...props.customStyle }}
                // onBlur={props.onBlur}
                editable={false}
                value={textValue}
            />
            <Button
                buttonStyle={styles.datePickerIconStyle}
                text="Date"
                onButtonPress={() => setOpen(true)}
            />
            {open && (
                <DateTimePicker
                    testID="dateTimePicker"
                    value={date}
                    mode='date'
                    is24Hour={true}
                    onChange={onDateSelect}
                />
            )}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
    },
    textInput: {
        borderWidth: 1,
        borderRadius: 8,
        padding: 8,
        marginVertical: 4,
    },
    datePickerIconStyle: {
        border: 1,
        borderRadius: 8,
        backgroundColor: config1.grey,
        paddingVertical: 13,
        paddingHorizontal: 32,
        //absolute positioning
        position: 'absolute',
        bottom: 5,
        right: 1
    }
})

export default DatePickerTextInput