import React from 'react'
import { Text, View } from 'react-native'
import styles from './Style'
import Space from '../../components/Space'
import Button from '../../components/Button'

const DeleteModalView = ({ setDeleteModalVisible }) => {

    const handleDelete = () => {
        console.log("inside the handle delete fun");
    }

    return (
        <View style={styles.modalView}>
            <Text style={styles.modalText}>Delete this task?</Text>
            <Space mV={15} />
            <View style={styles.deleteModalButtonContainer}>
                <Button
                    onPress={() => handleDelete()}
                    borderWidth={1}
                    btnWidth={100}
                    paddingVertical={10}
                    isText={true}
                    textView={<Text style={styles.deleteModalTextStyle}>Yes</Text>} />
                <Button
                    onPress={() => setDeleteModalVisible(false)}
                    borderWidth={1}
                    btnWidth={100}
                    paddingVertical={10}
                    isText={true}
                    textView={<Text style={styles.deleteModalTextStyle}>No</Text>} />
            </View>
        </View>
    )
}

export default DeleteModalView