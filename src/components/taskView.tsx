import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import TaskCard from './taskCard';
import { theme } from '../../core/theme';
import { Button, Dialog, IconButton, Portal } from 'react-native-paper';

import ActiveTaskView from './activeTaskList';

const TaskView = ({ data, activeTask, headers, title, functions, modal_visibility,enableField=false }: any) => {
    const [visible, setVisible] = React.useState(modal_visibility);

    const showDialog = () => {
        setVisible(true);
    }
    const linkTask = (data: any) => {
        functions.linkTask(data);
        hideDialog();

    }
    const hideDialog = () => setVisible(false);
    const table_Headers = [
        { id: 1, label: 'subject' },
        { id: 2, label: 'priority' },
        { id: 3, label: 'status' }
    ]
    return (
        <>
            <View style={{ width: '100%' }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style={{ fontSize: 22, color: theme.colors.primary, alignSelf: 'center' }}>TASK</Text>
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
                        <TaskCard item={item} title={title} headers={headers} key={index} functions={functions} enableField={enableField}/>
                    ))
                    }
                </View>
            </View>
            <Portal>
                <Dialog visible={visible} onDismiss={hideDialog} style={{ height: '90%' }}>

                    <Dialog.Title style={styles.title}>SELECT THE TASK TO LINK</Dialog.Title>
                    <Dialog.Content style={{ height: '75%' }}>
                        <ScrollView>
                            <ActiveTaskView data={activeTask.data} functions={{ linkTask }} headers={table_Headers} taskId={data.map((item: any) => (
                                item['task']['id']
                            ))} propertyNames={["subject"]} />
                        </ScrollView>

                    </Dialog.Content>
                    <Dialog.Actions style={{ marginBottom: 0, marginTop: 0 }}>
                        <Button mode="contained" onPress={() => setVisible(false)} style={{ backgroundColor: theme.colors.error, width: 90 }}>
                            Cancel
                        </Button>
                    </Dialog.Actions>

                </Dialog>
            </Portal>
        </>
    )
}

export default TaskView;

const styles = StyleSheet.create({
    title: {
        textAlign: 'center',
    },
    container: {
        margin: '2%',
        marginTop: '0%',
    },
    searchInput: {
        padding: 10,
        marginBottom: 10,
        borderWidth: 1,
        borderColor: 'gray',
    },
    table: {
        borderWidth: 1,
        borderColor: 'lightgray',
        borderRadius: 4
    },
    headerRow: {
        flexDirection: 'row',
        backgroundColor: 'lightgray',
        padding: 10,
        borderBottomWidth: 1,
        borderColor: 'gray',
        borderRadius: 4
    },
    headerCell: {
        flex: 1,
        alignItems: 'center',
        fontWeight: 'bold',
        flexDirection: 'row',
        borderRadius: 4
    },
    headerIcon: {
        width: '3%',
        justifyContent: 'center',
    },
    dataRow: {
        flexDirection: 'row',
        padding: 10,
        borderBottomWidth: 1,
        borderColor: 'gray',
        borderRadius: 4
    },
    listDataRow: {
        borderColor: 'gray',
        borderRadius: 4,
    },
    dataCell: {
        textAlign: 'left',
        paddingLeft: 10,
    },
    pagination: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        marginTop: 10,
    },
    pageText: {
        marginHorizontal: 15,
        fontSize: 16,
    },
    inputSearchStyle: {
        height: 42,
        fontSize: 16,
        border: 0,
        width: 300,
    },
    heading_box: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginLeft: '0%',
        marginTop: 0
    },
    noRecords: {
        alignSelf: 'center',
        fontSize: 35,
        fontWeight: 'bold',
        color: theme.colors.backdrop,
        marginVertical: '10%'
    }
});