import { StyleSheet } from "react-native";
import { COLORS } from "../../assets/colors/colors";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.DarkBackground,
        paddingHorizontal: 10,
        paddingTop: 20,
        width: "100%",
    },
    sub_container: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },
    inputsContainer: {
        width: "75%"
    },
    buttonContainer: {
        width: "20%"
    },
    noDataViewContainer: {
        alignItems: "center"
    },
    noDataViewBorder: {
        borderWidth: 2,
        borderColor: COLORS.OrangeBackground,
        width: "18%"
    },
    noDataViewText: {
        color: COLORS.WhiteSmokeBackground,
        fontSize: 25,
    },
    cardContainer: {
        borderWidth: 1,
        borderColor: COLORS.OrangeBackground,
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 10,
        backgroundColor: COLORS.DarkGreyBackground
    },
    cardSubContainer: {
        width: "80%"
    },
    cardSubContainerTwo: {
        width: "10%"
    },
    cardTitleStyle: {
        color: COLORS.WhiteSmokeBackground,
        fontSize: 23,
        width: "70%"
    },
    cardAboutStyle: {
        color: COLORS.WhiteSmokeBackground,
        fontSize: 15,
        width: "100%"
    },
    cardShowButtonContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginVertical: 10,
        justifyContent: "flex-end"
    },
    cardRoot: {
        marginBottom: 15
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
    modalText: {
        marginBottom: 15,
        color: COLORS.WhiteSmokeBackground,
        textAlign: 'center',
        fontSize: 20
    },
    deleteModalButtonContainer: {
        flexDirection: "row",
        width: "80%",
        alignItems: "center",
        justifyContent: "space-between"
    },
    deleteModalTextStyle: {
        color: COLORS.WhiteSmokeBackground,
        fontSize: 15
    }
})

export default styles