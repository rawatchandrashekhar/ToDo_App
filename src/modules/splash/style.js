import { StyleSheet } from "react-native";
import { COLORS } from "../../assets/colors/colors";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.DarkBackground,
        alignItems: "center",
        justifyContent: "center"
    },
    titleStyle: {
        fontSize: 45,
        fontWeight: "600",
        color: COLORS.WhiteSmokeBackground
    },
    desStyle: {
        fontSize: 30,
        color: COLORS.WhiteSmokeBackground
    }
})

export default styles