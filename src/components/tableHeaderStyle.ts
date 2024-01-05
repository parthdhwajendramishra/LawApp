import { StyleSheet } from "react-native"
import { theme } from "../../core/theme"

export const tableHeaderStyle = StyleSheet.create({
    heading_box: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: '2%',
        marginBottom: '-2%',
        marginTop: '2%'
    },
    button: {
        marginLeft: 5,
        marginVertical: 20,
        backgroundColor: theme.colors.primary,
        color: '#fff',
        fontWeight: 'bold',
        borderRadius: 4,
        padding: 10,
    },
    heading: {
        fontSize: 28,
        fontWeight: '800',
        marginVertical: 15,
        color: theme.colors.primary
    },

})