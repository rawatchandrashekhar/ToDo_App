import React from 'react'
import { View, Text } from 'react-native'
import Button from '../../components/Button'
import Space from '../../components/Space'
import styles from './Style'
import Input from '../../components/Input'

const EditModalView = ({ setEditModalVisible }) => {

    const handleSave = () => {

    }

    return (
        <View style={{ ...styles.modalView, borderTopWidth: 0 }}>
            <View style={{ width: "100%" }}>
                <Input />
                <Space mV={5} />
                <Input height={300} isMultiline={true} />
            </View>
            <Space mV={15} />
            <View style={styles.deleteModalButtonContainer}>
                <Button
                    onPress={() => setEditModalVisible(false)}
                    borderWidth={1}
                    btnWidth={100}
                    paddingVertical={10}
                    isText={true}
                    textView={<Text style={styles.deleteModalTextStyle}>Cancel</Text>} />
                <Button
                    onPress={() => handleSave()}
                    borderWidth={1}
                    btnWidth={100}
                    paddingVertical={10}
                    isText={true}
                    textView={<Text style={styles.deleteModalTextStyle}>Save</Text>} />
            </View>
        </View>
    )
}

export default EditModalView