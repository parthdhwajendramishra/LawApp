import { StyleSheet, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Card, Dialog, IconButton, Portal, Text } from 'react-native-paper';
import { Button } from 'react-native-paper';
import { Menu } from 'react-native-paper';
import { theme } from '../../core/theme';


const DocumentCard = ({ item, title, headers, functions,enableField }: any) => {
    const [visible, setVisible] = React.useState(false);

    const showDialog = (itemId: number) => {

        setVisible(true);
    }
    const hideDialog = () => setVisible(false);

    const [menuVisible, setMenuVisible] = React.useState(false);

    const openMenu = () => setMenuVisible(true);
    const closeMenu = () => setMenuVisible(false);

    const deleteDocs = () => {
        functions.goToDelete(item.accountId ? item.accountId : item.leadId ? item.leadId : item.contactId, item.id);
        setVisible(false);
    }

    //const bgColor = item['task']['priority'] === 'HIGH' ? '#f8d7da' : item['task']['priority'] === 'LOW' ? '#d1e7dd' : undefined

    return (
        <>
            <Card style={{ margin: 5, height: 145, width: 260 }}>

                <Card.Title
                    titleVariant='titleLarge'
                    style={{}}
                    title={item['document'][title]}
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
                                <Text>{item['document'][header.label]}</Text></View>

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
                        <Button onPress={() => deleteDocs()}>Ok</Button>
                    </Dialog.Actions>
                </Dialog>
            </Portal></>
    )
}

export default DocumentCard

const styles = StyleSheet.create({
    title: {
        textAlign: 'center',
    }
})