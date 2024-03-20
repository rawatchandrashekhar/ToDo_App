import React from 'react';
import { Modal, StyleSheet, View } from 'react-native';
import { COLORS } from '../assets/colors/colors';

const ModalCompo = ({ bottomStyle, content, modalVisible, setModalVisible }) => {

    return (
        <View style={styles.centeredView}>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    setModalVisible(!modalVisible);
                }}>
                <View style={{ ...styles.centeredView, ...bottomStyle, backgroundColor: 'rgba(0,0,0,0.7)' }}>
                    {content}
                </View>
            </Modal>
        </View>
    );
};

ModalCompo.defaultProps = {
    bottomStyle: {
        // justifyContent:"flex-end"
    },
    content: <></>
}

export default ModalCompo;

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        // marginTop: 22,
        // backgroundColor: 'rgba(0,0,0,0.7)'
    },
    modalView: {
        borderTopWidth: 3,
        borderTopColor: COLORS.OrangeBackground,
        width: "90%",
        margin: 20,
        backgroundColor: COLORS.DarkGreyBackground,
        // borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
    },
    buttonOpen: {
        backgroundColor: '#F194FF',
    },
    buttonClose: {
        backgroundColor: '#2196F3',
    },
    textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
});