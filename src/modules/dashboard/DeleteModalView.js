import React from 'react'
import { Text, ToastAndroid, View } from 'react-native'
import styles from './Style'
import Space from '../../components/Space'
import Button from '../../components/Button'
import { useDispatch } from 'react-redux'
import { deleteTodo } from '../../storage/redux/slices/todoSlice'

const DeleteModalView = ({ setDeleteModalVisible, selectedDataForDelete }) => {

    const dispatch = useDispatch();

    const handleDelete = () => {
        dispatch(deleteTodo(selectedDataForDelete));
        setDeleteModalVisible(false);
        ToastAndroid.show("Record deleted successfully!", ToastAndroid.SHORT);
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