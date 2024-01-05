import { StyleSheet } from "react-native"
import { theme } from "../../core/theme"
export const profileStyles = StyleSheet.create({
    container: {
        width: '150%',
    },
    card: {
        padding: 20,
        marginLeft: 320
    },
    card_android: {
        padding: 20,
        marginLeft: 60
    },
    cardContent: {
        flexDirection: 'row',
        marginBottom: 10,
        paddingTop: 0

    },
    cardTitle: {
        fontSize: 14,
        fontWeight: "600",
        textAlign: 'left',
    },
    cardData: {
        fontSize: 14,
        marginStart: 10,
        textAlign: 'left',
    },
    container_android: {
        width: '100%'
    },
    cardButton: {
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center'
    },
    avatar: {
        marginLeft: 20
    },
    label: {
        margin: 8,
    },
    appButtonContainer: {
        elevation: 8,
        backgroundColor: theme.colors.primary,
        borderRadius: 4,
        paddingVertical: 10,
        paddingHorizontal: 12,
        marginTop: 5,
    },
    appButtonText: {
        fontSize: 18,
        color: "#fff",
        fontWeight: "bold",
        alignSelf: "center",
        textTransform: "uppercase",
    },
    // Dropdown Style
    dropdown: {
        paddingHorizontal: 16,
        height: 50,
        borderColor: 'gray',
        borderWidth: 0.5,
        marginVertical: 8,
        borderRadius: 4,
        backgroundColor: theme.colors.surface,
    },
    icon: {
        marginRight: 5,
    },
    placeholderStyle: {
        fontSize: 16,
    },
    selectedTextStyle: {
        fontSize: 16,
    },
    iconStyle: {
        width: 20,
        height: 20,
    },
    row: {
        flexDirection: 'row',
        marginTop: 4,
        alignItems: 'center',
    },
    link: {
        fontWeight: 'bold',
        color: theme.colors.primary,
        marginVertical: 10,
    },
    groupContainer: {
        width: '100%',
        justifyContent: 'center',
        alignContent: 'center',
        padding: 10,
    },
    // Taken from users 
    lable: {
        flex: 1,
        width: '100%',
        padding: 3,
        marginLeft: 5,
        fontWeight: "600",
        color: "black",
    },
    TextInputStyle: {
        padding: 10,
        borderWidth: 1,
        borderColor: "blue",
        margin: 5
    },

    //Table Style

    inputSearchStyle: {
        height: 45,
        fontSize: 16,
        marginLeft: '68%',
        borderColor: '#6850a4',
        borderRadius: 5,
        width: 300,
    },
    table_top_container: {
        alignItems: 'center',
    },
    button_n_serach: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        paddingLeft: '2%',
    },
})