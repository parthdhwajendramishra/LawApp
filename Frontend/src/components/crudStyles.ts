import { StyleSheet } from "react-native"
import { theme } from "../../core/theme"

export const crudStyles = StyleSheet.create({
    container: {
        alignContent: 'center',
        alignItems: 'center',
        // backgroundColor: '#c3b0f5',
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
        flexDirection: 'row',
        marginTop: 4,
        alignItems: 'center',
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
    //Table Style (AP Added)
    containerList: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff' },
    headList: { height: 40, backgroundColor: 'lightGray', paddingVertical: 10 },
    headtextList: { margin: 6, fontSize: 16, fontWeight: "700" },
    textList: { margin: 6, fontSize: 14, fontWeight: "normal" },
    rowList: { flexDirection: 'row', backgroundColor: '#FFF1C1' },
    updateButton: { width: 58, height: 18, backgroundColor: '#78B7BB', borderRadius: 2, textAlign: 'center', color: '#fff' },
    deleteButton: { backgroundColor: 'red' },
    roleContainer: {
        width: '100%',
        justifyContent: 'center',
        alignContent: 'center',
        // padding: 10,
    },
    segmentContainer: {
        width: '100%',
        justifyContent: 'center',
        alignContent: 'center',
        paddingVertical: 20,
    },
    groupContainer: {
        width: '100%',
        justifyContent: 'center',
        alignContent: 'center',
        paddingVertical: 10,
    },
    TextInputStyle: {
        textAlign: 'left',
        borderWidth: 1,
        borderColor: 'blue',
        padding: 5,
        fontSize: 14,
        width: "70%",
    },
    lable: {
        fontWeight: "600",
        color: "#545253",
        fontSize: 14,
        padding: 4,
        paddingLeft: 0,
        textTransform: 'capitalize'
    },
    addressLable: {
        fontWeight: "700",
        color: "#807d7e",
        fontSize: 13,
        padding: 4,
        paddingLeft: 0,
        marginTop: 4,
    },
    segmentLable: {
        fontWeight: "600",
        color: "#545253",
        fontSize: 14,
    },
    selectContainer: {
        // flex: 1,
        width: '100%',
        borderWidth: 1,
        borderColor: theme.colors.backdrop,
        borderRadius: 4,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: theme.colors.surface,
        paddingHorizontal: 15,
        paddingVertical: 8,
        marginVertical: 12,
    },
    //Submit Button style
    appButtonContainer: {
        elevation: 8,
        backgroundColor: theme.colors.primary,
        borderRadius: 4,
        paddingVertical: 10,
        paddingHorizontal: 12,
        marginRight: 20,
        marginBottom: 20,
    },
    appButtonContainerDisable: {
        height: 0,
        width: 0,
    },
    appButtonCancelUser: {
        elevation: 8,
        // backgroundColor: theme.colors.secondary,
        backgroundColor: "#71737a",
        borderRadius: 4,
        paddingVertical: 10,
        paddingHorizontal: 12,
    },
    appButtonContainerUser: {
        elevation: 8,
        backgroundColor: theme.colors.primary,
        borderRadius: 4,
        paddingVertical: 10,
        paddingHorizontal: 12,
    },
    appButtonCancel: {
        elevation: 8,
        // backgroundColor: theme.colors.secondary,
        backgroundColor: "#71737a",
        borderRadius: 4,
        paddingVertical: 10,
        paddingHorizontal: 12,
        marginLeft: 20,
        marginBottom: 20,
    },
    appButtonDelete: {
        elevation: 8,
        backgroundColor: theme.colors.error,
        borderRadius: 4,
        paddingVertical: 10,
        paddingHorizontal: 12,
        marginRight: 20,
        marginBottom: 20,
    },
    appButtonText: {
        fontSize: 18,
        color: "#fff",
        fontWeight: "bold",
        alignSelf: "center",
        textTransform: "uppercase"
    },
    appButtonTextDisable: {
        fontSize: 0,
    },
    dropdown: {
        paddingHorizontal: 16,
        height: 50,
        borderColor: 'gray',
        borderWidth: 0.5,
        marginVertical: 8,
        borderRadius: 4,
        backgroundColor: theme.colors.surface,
    },
    countryDropdown: {
        paddingHorizontal: 16,
        height: 50,
        width: "100%",
        borderColor: 'gray',
        borderWidth: 0.5,
        marginVertical: 8,
        borderRadius: 4,
        backgroundColor: theme.colors.surface,
    },
    placeholderStyle: {
        fontSize: 16,
    },
    selectedTextStyle: {
        fontSize: 16,
    },
    //Table Style

    button_n_serach: {
        flexDirection: 'row',
        marginLeft: '1%',
        justifyContent: 'space-between',

    },

    //Upload Image Styles
    modalStyle: {
        backgroundColor: 'white',
        height: 400,
        width: 600,
        alignSelf: 'center',
        borderRadius: 20
    },
    imageWrapper: {
        marginRight: 10,
        marginBottom: 10,
        borderWidth: 2,
        borderColor: 'transparent',
        borderRadius: 5,
        overflow: 'hidden',
    },
    selectedImageWrapper: {
        borderColor: theme.colors.primary,
        shadowColor: theme.colors.primary,
        shadowOpacity: 0.8,
        shadowRadius: 10,
        elevation: 5,
    },
    uploadWarpper: {
        borderColor: theme.colors.primary,
        shadowColor: theme.colors.primary,
        borderRadius: 5,
        shadowOpacity: 0.8,
        shadowRadius: 10,
        elevation: 5,
        width: 60,
        height: 80,
        alignItems: 'center'
    },
    uploadIcon: {
        position: 'absolute',
        left: 330,
        top: 80,
    },
    uploadIcon_android: {
        position: 'absolute',
        left: 220,
        top: 80,
    },
    listButton: {
        width: 100,
        marginTop: 78,
        marginLeft: 60
    },
    listButton_android: {
        width: 100,
        marginTop: 10,
        marginLeft: '5%',
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
    },
    editButton_android: {
        width: 100,
        marginTop: 10,
        marginLeft: '5%',
    },
    addButton: {
        width: 100,
        marginLeft: 60
    },
    inputContainer: {
        marginRight: 20,
    },
    // inputPaper: {
    //    marginBottom:80      
    //   },
    textHeading: {
        fontSize: 24,
        fontWeight: '800',
        marginVertical: 20,
        alignSelf: 'center',
        color: theme.colors.primary
    },
    leadHeading: {
        fontSize: 28,
        fontWeight: '800',
        marginVertical: 15,
        color: theme.colors.primary
    },
    tableTitle: {
        fontWeight: 'bold',
        fontSize: 15
    },
    checkbox_android: {
        width: '50%'
    },
    checkbox: {
        width: '25%',
    },
    textbutton: {
        padding: 15,
        borderRadius: 8,
        margin: 10,
        marginTop: 78
    },
    // AP Styling Started
    leadAddListButton_web: {
        width: 100,
        // marginTop: 78,
        position: 'absolute',
        // top: 20,
        right: 20,
        // marginLeft: '5%'
    },
    leadAddContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 30,
        paddingBottom: 20,
        backgroundColor: theme.colors.background,
        margin: 20,
        marginTop: 0,
        // position: 'relative',
        // width: '100%',
        // justifyContent: 'center',
        // alignContent: 'center',
    },
    leadAddMobile: {
        // flex: 1,
        // flexDirection: 'row',
        // justifyContent: 'space-between',
        padding: 30,
        paddingBottom: 20,
        backgroundColor: theme.colors.background,
        margin: 20,
        marginTop: 0,
        // position: 'relative',
        // width: '100%',
        // justifyContent: 'center',
        // alignContent: 'center',
    },
    leadAddContainerMobile: {
        padding: 30,
        paddingBottom: 20,
        backgroundColor: theme.colors.background,
        margin: 20,
        marginTop: 0,
    },

    // AP Styling End
    detailHeader: {
        fontSize: 22,
        // marginLeft: 20,
        marginTop: 20,
        marginBottom: 5,
        color: "#8672B6",
        fontWeight: "500",
        textAlign: 'left',
    },
    detailNameHeader: {
        fontSize: 32,
        // marginLeft: 20,
        marginBottom: 10,
        color: theme.colors.primary,
        fontWeight: "900",
        textAlign: 'left',
    },
    heading_box: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: '2%',
        marginBottom: '0%',
        marginTop: '5%'
    },
    inputSearchStyle: {
        height: 42,
        fontSize: 16,
        // borderColor: '#6850a4',
        // borderRadius: 5,
        border: 0,
        width: 300,
    },
    newLead: {
        marginHorizontal: 5,
        marginVertical: 20,
        backgroundColor: theme.colors.primary,
        color: '#fff',
        fontWeight: 'bold',
        borderRadius: 4,
        padding: 10,
    },
    clear: {
        marginHorizontal: 5,
        marginVertical: 20,
        // backgroundColor: theme.colors.primary,
        color: theme.colors.primary,
        fontWeight: 'bold',
        borderRadius: 4,
        padding: 10,
        borderWidth: 1,
        borderColor: theme.colors.primary
    },
    list_text: {
        fontSize: 20,
        textAlign: 'center',
        margin: 20
    },
    userHeader: {
        paddingTop: 25,
        paddingBottom: 15,
        textAlignVertical: 'center',
        paddingHorizontal: 10,

    },
    searchStyle: {
        padding: 12
    }
})