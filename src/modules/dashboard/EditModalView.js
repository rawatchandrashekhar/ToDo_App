import React, { useState } from 'react'
import { View, Text, ToastAndroid } from 'react-native'
import Button from '../../components/Button'
import Space from '../../components/Space'
import styles from './Style'
import Input from '../../components/Input'
import { useDispatch } from 'react-redux'
import { updateTodo } from '../../storage/redux/slices/todoSlice'

const EditModalView = ({ setEditModalVisible, selectedDataForUpdate }) => {

    const dispatch = useDispatch();

    const [title, setTitle] = useState(selectedDataForUpdate?.title);
    const [about, setAbout] = useState(selectedDataForUpdate?.about);

    const handleUpdate = () => {
        const data = { title, about, id: selectedDataForUpdate.id };
        dispatch(updateTodo(data));
        setEditModalVisible(false);
        ToastAndroid.show("Record updated successfully!", ToastAndroid.SHORT);
    }

    return (
        <View style={{ ...styles.modalView, borderTopWidth: 0 }}>
            <View style={{ width: "100%" }}>
                <Input value={title} onChange={(txt) => setTitle(txt)} placeholderText={'Title...'} />
                <Space mV={5} />
                <Input value={about} onChange={(txt) => setAbout(txt)} height={300} isMultiline={true} placeholderText={'About...'} />
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
                    onPress={() => handleUpdate()}
                    borderWidth={1}
                    btnWidth={100}
                    paddingVertical={10}
                    isText={true}
                    textView={<Text style={styles.deleteModalTextStyle}>Update</Text>} />
            </View>
        </View>
    )
}

export default EditModalView