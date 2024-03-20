import { View, Text } from 'react-native'
import React from 'react'
import styles from './Style'
import Space from '../../components/Space'

const NoDataView = () => {
    return (
        <View style={styles.noDataViewContainer}>
            <View style={styles.noDataViewBorder} />
            <Space mV={5} />
            <Text style={styles.noDataViewText}>No tasks</Text>
            <Space mV={5} />
            <View style={styles.noDataViewBorder} />
        </View>
    )
}

export default NoDataView