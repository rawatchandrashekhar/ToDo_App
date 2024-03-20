import React, { useState } from 'react'
import { FlatList, Keyboard, ToastAndroid, View } from 'react-native'
import styles from './Style'
import Input from '../../components/Input'
import Space from '../../components/Space'
import Button from '../../components/Button'
import NoDataView from './NoDataView'
import Card from './Card'
import ModalCompo from '../../components/ModalCompo'
import DeleteModalView from './DeleteModalView'
import EditModalView from './EditModalView'
import { useDispatch, useSelector } from 'react-redux'
import { addTodo } from '../../storage/redux/slices/todoSlice'
import uuid from 'react-native-uuid';

const Dashboard = () => {

    const dispatch = useDispatch();
    const list = useSelector(state => state.todo.list);

    const [deleteModalVisible, setDeleteModalVisible] = useState(false);
    const [editModalVisible, setEditModalVisible] = useState(false);
    const [selectedDataForDelete, setSelectedDataForDelete] = useState("");
    const [selectedDataForUpdate, setSelectedDataForUpdate] = useState("");
    const [input, setInput] = useState({
        title: "",
        about: ""
    })

    const handleAdd = () => {
        if (input.title === "" && input.about === "") {
            ToastAndroid.show("Please add something in both field!", ToastAndroid.SHORT);
        } else {
            const data = { ...input, id: uuid.v4() };
            dispatch(addTodo(data))
            setInput({
                title: "",
                about: ""
            });
            Keyboard.dismiss();
            ToastAndroid.show("Record added successfully!", ToastAndroid.SHORT);
        }
    }

    return (
        <View style={styles.container}>
            <View style={styles.sub_container}>
                <View style={styles.inputsContainer}>
                    <Input value={input.title} placeholderText={'Title...'} onChange={(txt) => setInput({ ...input, title: txt })} />
                    <Space mV={5} />
                    <Input value={input.about} placeholderText={'About...'} onChange={(txt) => setInput({ ...input, about: txt })} />
                </View>
                <View style={styles.buttonContainer}>
                    <Button onPress={() => handleAdd()} />
                </View>
            </View>
            {list?.length === 0 ? <>
                <Space mV={50} />
                <NoDataView />
            </> : <>
                <Space mV={30} />
                <FlatList
                    data={list}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => <Card item={item} setDeleteModalVisible={setDeleteModalVisible} setEditModalVisible={setEditModalVisible} setSelectedDataForDelete={setSelectedDataForDelete} setSelectedDataForUpdate={setSelectedDataForUpdate} />}
                /></>}
            <ModalCompo
                modalVisible={deleteModalVisible}
                setModalVisible={setDeleteModalVisible}
                content={<DeleteModalView selectedDataForDelete={selectedDataForDelete} setDeleteModalVisible={setDeleteModalVisible} />} />
            <ModalCompo
                bottomStyle={{ justifyContent: "flex-end" }}
                modalVisible={editModalVisible}
                setModalVisible={setEditModalVisible}
                content={<EditModalView selectedDataForUpdate={selectedDataForUpdate} setEditModalVisible={setEditModalVisible} />} />
        </View>
    )
}

export default Dashboard