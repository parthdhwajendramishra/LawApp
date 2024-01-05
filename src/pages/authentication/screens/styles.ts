import { StyleSheet } from "react-native"
import { theme } from "../../../theme/theme"
export const styles = StyleSheet.create({
    container: {
        alignContent: 'center',
        alignItems: 'center',
        backgroundColor: '#c3b0f5',
        padding: '20%'
    },
    input: {
        height: 40,
        minwidth: 500,
        marginBottom: '2%'
    },
    text: {
        fontSize: 35
    },
    button: {
        width: 500,
        borderRadius: 0,
    },
    //login added.....
    forgotPassword: {
        fontWeight: 'bold',
        color: theme.colors.primary,
        width: '100%',
        alignItems: 'flex-end',
        marginVertical: 3,
    },
    row: {
        marginTop: 4,
        alignItems: 'center',
        justifyContent: 'center',
    },
    label: {
        color: theme.colors.secondary,
        marginVertical: 5,
    },
    link: {
        fontWeight: 'bold',
        color: theme.colors.primary,
        marginVertical: 10,
    },
})