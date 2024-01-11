import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { theme } from '../../core/theme';
import { Button, Dialog, IconButton, Portal } from 'react-native-paper';
import { AccountTaskListRequestDto } from '../accounts/model/account';
import ActiveDocumentView from './activeDocumentList';
import DocumentCard from './documentCard';

const DocumentView = ({ data, activeTask, headers, title, functions, modal_visibility,enableField=false }: any) => {

    const [visible, setVisible] = React.useState(modal_visibility);

    const showDialog = () => {
        setVisible(true);
    }

    const linkDocument = (data: AccountTaskListRequestDto) => {
        functions.linkDocument(data);
        hideDialog();
    }
    const hideDialog = () => setVisible(false);

    const table_Headers = [
        { id: 1, label: 'documentName' },
        { id: 2, label: 'category' },
        { id: 3, label: 'activeStatus' },
    ]

    return (
        <>
            <View style={{ width: '100%' }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style={{ fontSize: 22, color: theme.colors.primary, alignSelf: 'center' }}>DOCUMENT</Text>
                    <IconButton
                        icon="plus"
                        iconColor={theme.colors.primary}
                        size={24}
                        onPress={() => showDialog()}
                        disabled={enableField}
                    />
                </View>

                <View style={{ flexDirection: 'row', flexWrap: 'wrap', }}>
                    {data.length > 0 && data.map((item: any, index: any) => (
                        <DocumentCard item={item} title={title} headers={headers} key={index} functions={functions} enableField={enableField}/>
                    ))
                    }
                </View>
            </View>

            <Portal>
                <Dialog visible={visible} onDismiss={hideDialog} style={{ height: '90%' }}>
                    <Dialog.Title style={styles.title}>SELECT THE DOCUMENTS TO LINK</Dialog.Title>
                    <Dialog.Content style={{ height: '75%' }}>
                        <ActiveDocumentView data={activeTask.data} functions={{ linkDocument }} headers={table_Headers} documentId={data.map((item: any) => (
                            item['document']['id']
                        ))} propertyNames={["documentName"]} />
                    </Dialog.Content>
                    <Dialog.Actions>
                        <Button mode="contained" onPress={() => setVisible(false)} style={{ backgroundColor: theme.colors.error, width: 90 }}>
                            Cancel
                        </Button>
                    </Dialog.Actions>
                </Dialog>
            </Portal>
        </>
    )
}

export default DocumentView;

const styles = StyleSheet.create({
    title: {
        textAlign: 'center',
    },

});