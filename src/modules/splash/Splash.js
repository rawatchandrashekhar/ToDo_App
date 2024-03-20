import React, { useEffect } from 'react'
import { View, Text } from 'react-native'
import styles from './style'

const Splash = (props) => {

    useEffect(() => {
        let timeout = setTimeout(() => {
            props.navigation.reset({
                index: 0,
                routes: [{ name: 'Dashboard' }]
            })
        }, 2000);
        return () => {
            clearTimeout(timeout);
        }
    }, [])

    return (
        <View style={styles.container}>
            <Text style={styles.titleStyle}>GYIZER</Text>
            <Text style={styles.desStyle}>TODO APP</Text>
        </View>
    )
}

export default Splash