import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Avatar, Button, Checkbox } from 'react-native-paper';
import TextInput from './TextInput';
import { Entypo } from '@expo/vector-icons';
import { theme } from '../core/theme';
import Icon from 'react-native-vector-icons/FontAwesome';
import { ScrollView } from 'react-native-gesture-handler';

const CustomTable1 = ({ data, headers, functions, propertyNames }: any) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [sortBy, setSortBy] = useState('');
    const [sortOrder, setSortOrder] = useState('asc');
    const [selectAll, setSelectAll] = useState(false);
    const [checkboxStates, setCheckboxStates] = React.useState(new Array(data.length).fill(false));
    const [showAscIcon, setShowAscIcon] = useState(() => {
        return Array.from({ length: headers.length }, () => '')
    });
    const filteredData = data.filter((item: any) => {
        return propertyNames.some((propertyName: any) => {
            const propertyValue = item[propertyName];
            const valueString = String(propertyValue).toLowerCase();
            const searchTermLower = searchTerm.toLowerCase();
            return valueString.includes(searchTermLower);
        });
    });

    const handleSelectAll = () => {
        const newSelectAll = !selectAll;
        setSelectAll(newSelectAll);
        const updatedStates = new Array(data.length).fill(newSelectAll);
        setCheckboxStates(updatedStates);
    };


    const sortedData = [...filteredData].sort((a, b) => {
        if (sortBy === null) return 0;

        const sortValueA = a[sortBy];
        const sortValueB = b[sortBy];

        if (typeof sortValueA === 'string' && typeof sortValueB === 'string') {
            return sortOrder === 'asc' ? sortValueA.localeCompare(sortValueB) : sortValueB.localeCompare(sortValueA);
        }

        return sortOrder === 'asc' ? sortValueA - sortValueB : sortValueB - sortValueA;
    });


    const pagedData = sortedData;



    const handleSort = (column: string, index: number, val: string = 'asc') => {

        const temp = ['', '', '', '', '']
        temp[index] = val === "asc" ? "desc" : "asc"
        setShowAscIcon(temp);

        if (column === sortBy) {
            setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');

        } else {
            setSortBy(column);
            setSortOrder('asc');
        }
    };

    return (
        <>
            <View style={styles.container}>

                <View style={styles.heading_box}>
                    <View style={{ position: 'relative' }}>
                        <TextInput
                            style={styles.inputSearchStyle}
                            placeholder="Search..."
                            value={searchTerm}
                            onChangeText={text => setSearchTerm(text)} />
                        {searchTerm != '' && (<View style={{ position: 'absolute', right: 10, top: 20 }}>
                            <Entypo name="cross" size={24} color="grey" onPress={() => setSearchTerm('')} />
                        </View>)}
                    </View>
                </View>

                <View style={styles.headerRow}>
                    <TouchableOpacity style={styles.headerIcon}>
                        <Checkbox
                            status={selectAll ? 'checked' : 'unchecked'}
                            onPress={handleSelectAll}
                        />
                    </TouchableOpacity>
                    {headers.map((header: any, index: number) => (
                        <TouchableOpacity key={header.id} onPress={() => handleSort(header.label, index, showAscIcon[index])} style={styles.headerCell}>
                            <Icon style={{ marginRight: 5, }} name={showAscIcon[index] ? showAscIcon[index] == "asc" ? "sort-asc" : "sort-desc" : ''} size={18} />
                            <Text style={{ textTransform: 'capitalize', fontSize: 16, fontWeight: 'bold' }}>{header.label}</Text>
                        </TouchableOpacity>
                    ))}
                    <TouchableOpacity style={styles.headerIcon}>

                    </TouchableOpacity>
                    <TouchableOpacity style={styles.headerIcon}>

                    </TouchableOpacity>
                </View>


            </View>
            <ScrollView onScroll={({ nativeEvent }) => {
                if (nativeEvent.layoutMeasurement.height +
                    nativeEvent.contentOffset.y >=
                    nativeEvent.contentSize.height - 20) {
                    functions.loadMore();
                }
            }} scrollEventThrottle={800}
                style={styles.container}
            >

                <View style={styles.table}>
                    <View>

                        {pagedData.map((item, index) => (
                            <View key={index} style={styles.dataRow}>
                                <View style={styles.headerIcon}>
                                    <Checkbox
                                        status={checkboxStates[index] ? 'checked' : 'unchecked'}
                                        onPress={() => {
                                            if (!selectAll) {
                                                const updatedStates = [...checkboxStates];
                                                updatedStates[index] = !updatedStates[index];
                                                setCheckboxStates(updatedStates);
                                            }
                                        }}
                                        disabled={selectAll} // Disable row checkboxes when header checkbox is checked
                                    />
                                </View>
                                {headers.map((header: any) => (
                                    <View style={{ flex: 1, justifyContent: 'center' }}>
                                        <Text key={header.id} style={styles.dataCell}>{item[header.label]}</Text>
                                    </View>
                                )
                                )}

                                <TouchableOpacity style={styles.headerIcon} onPress={() => functions.goToUpdate(item.id)}>
                                    <Avatar.Icon size={24} icon="pencil" style={{ backgroundColor: theme.colors.primary }} />
                                </TouchableOpacity>

                                <TouchableOpacity style={styles.headerIcon} onPress={() => functions.goToDelete(item.id)}>
                                    <Avatar.Icon size={24} icon="delete" style={{ backgroundColor: theme.colors.error }} />
                                </TouchableOpacity>

                            </View>
                        ))}
                    </View>
                </View>
            </ScrollView></>
    );
};

const styles = StyleSheet.create({
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
        borderRadius: 4,
        marginBottom: 0
    },
    headerCell: {
        flex: 1,
        // justifyContent: "flex-start",
        alignItems: 'center',
        fontWeight: 'bold',
        flexDirection: 'row',
        borderRadius: 4
    },
    headerIcon: {
        width: '3%',
        // alignItems: 'center',
        justifyContent: 'center',
    },
    dataRow: {
        flexDirection: 'row',
        padding: 10,
        borderBottomWidth: 1,
        borderColor: 'gray',
        borderRadius: 4
    },
    dataCell: {
        textAlign: 'left',
        paddingLeft: 10,
        // textAlignVertical: 'center',
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
});

export default CustomTable1;
