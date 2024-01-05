import { StyleSheet, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Avatar, Card, Dialog, IconButton, Portal, Text } from 'react-native-paper';
import { Button } from 'react-native-paper';
import { Menu } from 'react-native-paper';
import { theme } from '../../core/theme';


const TaskCard = ({ item, title, headers, functions, enableField }: any) => {
    const [visible, setVisible] = React.useState(false);
    const [Id, setId]: any = React.useState(-1);

    const showDialog = (itemId: number) => {
        setId(itemId);
        setVisible(true);
    }
    const hideDialog = () => setVisible(false);

    const [menuVisible, setMenuVisible] = React.useState(false);

    const openMenu = () => setMenuVisible(true);
    const closeMenu = () => setMenuVisible(false);

    const deleteUser = () => {
        functions.goToDelete(item.accountId ? item.accountId : item.leadId ? item.leadId : item.contactId, item.id);
        setVisible(false);
    }

    const bgColor = item['task']['priority'] === 'HIGH' ? '#f8d7da' : item['task']['priority'] === 'LOW' ? '#d1e7dd' : undefined
    return (
        <>
            <Card style={{ margin: 5, height: 145, width: 260, backgroundColor: bgColor }}>
                <Card.Title
                    titleVariant='titleLarge'
                    style={{}}
                    title={item['task'][title]}
                    right={(props) => <IconButton {...props} icon="dots-vertical" onPress={() => openMenu()} disabled={enableField} />} />
                <View
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'flex-end',
                        height: '1%',
                    }}>
                    <Menu
                        visible={menuVisible}
                        onDismiss={closeMenu}
                        anchor={<Button> </Button>}

                    >
                        <Menu.Item onPress={() => { showDialog(item.id); closeMenu() }} leadingIcon='delete' title="Remove" />
                    </Menu>
                </View>
                <Card.Content>
                    <TouchableOpacity onPress={() => { functions.goToInfoPage(item.id) }}>
                        {headers.map((header: any) => header.label !== title &&
                            <View key={header.id} style={{ flexDirection: 'row' }}>
                                <Text style={{ textTransform: 'capitalize', fontWeight: 'bold' }}>{header.label}{':  '}</Text>
                                <Text>{item['task'][header.label]}</Text></View>
                        )}
                    </TouchableOpacity>
                </Card.Content>
            </Card>
            <Portal>
                <Dialog visible={visible} onDismiss={hideDialog}>
                    <Dialog.Icon icon="alert" />
                    <Dialog.Title style={styles.title}>Do you want to Remove?</Dialog.Title>
                    <Dialog.Actions>
                        <Button onPress={() => setVisible(false)}><Text style={{ color: theme.colors.error }}>Cancel</Text></Button>
                        <Button onPress={() => deleteUser()}>Ok</Button>
                    </Dialog.Actions>
                </Dialog>
            </Portal></>
    )
}

export default TaskCard

const styles = StyleSheet.create({
    title: {
        textAlign: 'center',
    }
})