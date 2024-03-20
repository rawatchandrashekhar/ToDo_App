import React from 'react'
import { TouchableOpacity, StyleSheet, Text } from 'react-native'
import { COLORS } from '../assets/colors/colors'
import MCI from "react-native-vector-icons/MaterialCommunityIcons"

const Button = ({ btnWidth, onPress, icon, paddingVertical, borderWidth, isText, textView }) => {
    return (
        <TouchableOpacity activeOpacity={0.9} onPress={onPress} style={{ ...styles.container, width: btnWidth, paddingVertical: paddingVertical, borderWidth: borderWidth }}>
            {isText ? textView : icon}
        </TouchableOpacity>
    )
}

Button.defaultProps = {
    btnWidth: '100%',
    onPress: () => { },
    icon: <MCI name='plus' size={45} color={COLORS.OrangeBackground} />,
    paddingVertical: 20,
    borderWidth: 2,
    isText: false,
    textView: <Text></Text>
}

export default Button

const styles = StyleSheet.create({
    container: {
        borderRadius: 5,
        alignItems: "center",
        justifyContent: "center",
        borderColor: COLORS.OrangeBackground,
        backgroundColor: COLORS.DarkGreyBackground
    }
})