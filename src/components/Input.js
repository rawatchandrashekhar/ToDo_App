import React from 'react'
import { StyleSheet, TextInput } from 'react-native'
import { COLORS } from '../assets/colors/colors';

const Input = ({ placeholderText, keyType, onChange, height, isMultiline }) => {

    const [isFocused, setIsFocused] = React.useState(false);

    const handleChange = (txt) => {
        onChange(txt)
    }

    return (
        <TextInput
            placeholder={placeholderText}
            multiline={isMultiline ? true : false}
            placeholderTextColor={isFocused ? COLORS.OrangeBackground : COLORS.WhiteSmokeBackground}
            onFocus={() => {
                setIsFocused(true);
            }}
            onBlur={() => setIsFocused(false)}
            onChangeText={(txt) => handleChange(txt)}
            keyboardType={keyType}
            style={{ ...styles.inputStyle, borderColor: isFocused ? COLORS.OrangeBackground : COLORS.WhiteSmokeBackground, height: height }}
        />
    )
}

export default Input

Input.defaultProps = {
    placeholderText: 'Add Placeholder Text',
    keyType: 'default',
    onChange: () => { },
    height: 40,
    isMultiline: false
}

const styles = StyleSheet.create({
    inputStyle: {
        borderWidth: 1,
        borderRadius: 5,
        height: 40,
        backgroundColor: COLORS.DarkGreyBackground,
        paddingHorizontal: 10,
        color: COLORS.WhiteSmokeBackground,
        textAlignVertical: "top"
    }
})