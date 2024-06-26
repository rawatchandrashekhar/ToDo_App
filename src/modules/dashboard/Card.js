import React, { useState } from 'react'
import { View, Text } from 'react-native'
import Button from '../../components/Button'
import II from "react-native-vector-icons/Ionicons"
import { COLORS } from '../../assets/colors/colors'
import Space from '../../components/Space'
import ET from "react-native-vector-icons/Entypo"
import FE from "react-native-vector-icons/Feather"
import styles from './Style'

const Card = ({ setDeleteModalVisible = () => { }, setEditModalVisible = () => { }, item, setSelectedDataForDelete, setSelectedDataForUpdate }) => {

    const [show, setShow] = useState(false);

    const handleShow = () => {
        setShow(!show);
    }

    return (
        <View style={styles.cardRoot}>
            <View style={styles.cardContainer}>
                <View style={styles.cardSubContainer}>
                    <Text numberOfLines={1} style={styles.cardTitleStyle}>{item?.title}</Text>
                    <Space mV={1} />
                    <Text numberOfLines={1} style={styles.cardAboutStyle}>{item?.about}</Text>
                </View>
                <View style={styles.cardSubContainerTwo}>
                    <Button
                        onPress={() => handleShow()}
                        borderWidth={1}
                        paddingVertical={3}
                        icon={<II name='information' size={24} color={COLORS.OrangeBackground} />}
                    />
                </View>
            </View>
            {show ? <View style={styles.cardShowButtonContainer}>
                <Button
                    onPress={() => { setSelectedDataForDelete(item); setDeleteModalVisible(true) }}
                    btnWidth={40}
                    borderWidth={1}
                    paddingVertical={3}
                    icon={<ET name='cross' size={24} color={COLORS.OrangeBackground} />}
                />
                <Space mH={5} />
                <Button
                    onPress={() => { setSelectedDataForUpdate(item); setEditModalVisible(true) }}
                    btnWidth={40}
                    borderWidth={1}
                    paddingVertical={3}
                    icon={<FE name='edit-2' size={24} color={COLORS.OrangeBackground} />}
                />
            </View> : null}
        </View>
    )
}

export default Card