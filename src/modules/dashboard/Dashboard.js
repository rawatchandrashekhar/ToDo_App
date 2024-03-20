import React, { useState } from 'react'
import { View } from 'react-native'
import styles from './Style'
import Input from '../../components/Input'
import Space from '../../components/Space'
import Button from '../../components/Button'
import NoDataView from './NoDataView'
import Card from './Card'
import ModalCompo from '../../components/ModalCompo'
import DeleteModalView from './DeleteModalView'
import EditModalView from './EditModalView'

const Dashboard = () => {

    const [deleteModalVisible, setDeleteModalVisible] = useState(false);
    const [editModalVisible, setEditModalVisible] = useState(false);

    return (
        <View style={styles.container}>
            <View style={styles.sub_container}>
                <View style={styles.inputsContainer}>
                    <Input placeholderText={'Title...'} />
                    <Space mV={5} />
                    <Input placeholderText={'About...'} />
                </View>
                <View style={styles.buttonContainer}>
                    <Button />
                </View>
            </View>
            <Space mV={50} />
            <NoDataView />
            <Card setDeleteModalVisible={setDeleteModalVisible} setEditModalVisible={setEditModalVisible} />
            <ModalCompo
                modalVisible={deleteModalVisible}
                setModalVisible={setDeleteModalVisible}
                content={<DeleteModalView setDeleteModalVisible={setDeleteModalVisible} />} />
            <ModalCompo
                bottomStyle={{ justifyContent: "flex-end" }}
                modalVisible={editModalVisible}
                setModalVisible={setEditModalVisible}
                content={<EditModalView setEditModalVisible={setEditModalVisible} />} />
        </View>
    )
}

export default Dashboard