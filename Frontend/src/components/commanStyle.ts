import { StyleSheet } from "react-native"
import { theme } from "../../core/theme"
export const commanStyles = StyleSheet.create({
    deleteButton: { backgroundColor: 'red' },
    dropdown_icon: {
        marginLeft: '2%',
        position: 'absolute'
    },
    dropdown_icon_android: {
        marginLeft: '5%',
        position: 'absolute'
    },
    dropdown_menu: {
        position: 'absolute',
        top: 57,
        width: 230,
    },
    dropdown_submenu: {
        flex: 1,
        position: 'absolute',
        width: 200,
        left: 200,
    },
    dropdown_menu_android: {
        flex: 1,
        marginTop: '24%',
        position: 'absolute'

    },
    item: {
        position: 'relative',
        backgroundColor: theme.colors.primary,
        height: 30,
        color: 'white',
        marginRight: 30,
        // Textcolor: '#fff'
    },
    item1: {
        borderEndWidth: 1,
        borderStartWidth: 1,
        borderBottomWidth: 1,
        backgroundColor: 'powderblue',
        borderColor: "rgb(111 199 225)",
        height: 30,
    }
})