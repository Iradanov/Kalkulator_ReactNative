import { StyleSheet } from "react-native";
import { myColors } from "./Colors";

export const Styles = StyleSheet.create({
    //gumbi i tekst
    btnGrey: {
        width: 72,
        height: 72,
        borderRadius: 24,
        backgroundColor: myColors.btnGrey,
        justifyContent: "center",
        alignItems: "center",
        margin: 8,
    },
    btnZero: {
        width: 160,
        height: 72,
        borderRadius: 24,
        backgroundColor: myColors.btnGrey,
        justifyContent: "center",
        alignItems: "center",
        margin: 8,
    },
    smallTextDark: {
        fontSize: 32,
        color: myColors.black,
    },
    
    // tipkovnica
    row: {
        maxWidth: '100%',
        flexDirection: "row",
    },
    viewBottom: {
        position: 'absolute',
        bottom: 30,
    },
    screenFirstNumber: {
        fontSize: 96,
        color: myColors.grey,
        fontWeight: '200',
        alignSelf: "flex-end",
    },
    screenSecondNumber: {
        fontSize: 40,
        color: myColors.grey,
        fontWeight: '200',
        alignSelf: "flex-end",
    },
})