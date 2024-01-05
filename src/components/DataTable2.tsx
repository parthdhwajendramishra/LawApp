import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Pressable } from 'react-native';
import { Avatar, Button } from 'react-native-paper';
import TextInput from './TextInput';
import { Entypo, AntDesign } from '@expo/vector-icons';
import { theme } from '../core/theme';
import { Checkbox } from 'react-native-paper';
import { Dropdown } from 'react-native-element-dropdown';
import Ionicons from '@expo/vector-icons/Ionicons';

const CustomTable2 = ({ data, headers, functions, propertyNames, total = 0 }: any) => {

    const [currentPage, setCurrentPage] = useState(1);
    const [searchTerm, setSearchTerm] = useState('');
    const [sortBy, setSortBy] = useState('');
    const [sortOrder, setSortOrder] = useState('asc');
    const [size, setSize] = useState(10);
    const [selectAll, setSelectAll] = useState(false);
    const [actions, setActions] = useState('');
    const [hoveredItems, setHoveredItems] = useState<Boolean[]>([false, false, false, false, false]);
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

    const sortedData = [...filteredData].sort((a, b) => {
        if (sortBy === null) return 0;

        const sortValueA = a[sortBy];
        const sortValueB = b[sortBy];

        if (typeof sortValueA === 'string' && typeof sortValueB === 'string') {
            return sortOrder === 'asc' ? sortValueA.localeCompare(sortValueB) : sortValueB.localeCompare(sortValueA);
        }

        return sortOrder === 'asc' ? sortValueA - sortValueB : sortValueB - sortValueA;
    });

    const itemsPerPage = size;
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const pagedData = sortedData.slice(startIndex, endIndex);

    const totalPages = Math.ceil(total / itemsPerPage);
    const [checkboxStates, setCheckboxStates] = React.useState(new Array(data.length).fill(false));

    const pageSize = [
        { label: '5', value: 5 },
        { label: '10', value: 10 },
        { label: '15', value: 15 },
        { label: '20', value: 20 },
    ];

    const bulkActions = [
        { label: 'EXPORT', value: 'EXPORT' },
        { label: 'DELETE', value: 'DELETE' },
        { label: 'MASS UPDATE', value: 'MASS UPDATE' },
        { label: 'MERGE', value: 'MERGE' },
    ];

    const handleSelectAll = () => {
        const newSelectAll = !selectAll;
        setSelectAll(newSelectAll);
        const updatedStates = new Array(data.length).fill(newSelectAll);
        setCheckboxStates(updatedStates);
    };

    const handleMouseEnter = (index: number) => {
        const temp = [false, false, false, false, false]
        temp[index] = true
        setHoveredItems(temp);
    };

    const handleMouseLeave = () => {
        setHoveredItems([false, false, false, false, false]);
    };

    if (currentPage > totalPages)
        setCurrentPage(currentPage - 1);

    const changePage = (offset: number) => {
        const newPage = currentPage + offset;

        if (newPage >= 1) {
            setCurrentPage(newPage);
            functions.pageChanged(newPage - 1);
        }
    };

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
        <View style={styles.container}>
            <View style={styles.heading_box}>
                <View style={{ flex: 1, flexDirection: "row", justifyContent: 'space-between' }}>

                    <View style={{ flexDirection: 'row' }}>
                        <View style={{ alignItems: "flex-start", flexDirection: 'row' }}>
                            <TextInput
                                style={styles.inputSearchStyle}
                                placeholder="Search..."
                                value={searchTerm}
                                onChangeText={text => setSearchTerm(text)}
                            />
                            {searchTerm != '' && (<View style={{ position: 'absolute', right: 10, top: 20 }}>
                                <Entypo name="cross" size={24} color="grey" onPress={() => setSearchTerm('')} />
                            </View>)}
                        </View>
                        {selectAll &&
                            <View style={{ width: 180, marginVertical: 10, marginLeft: '5%' }}>
                                <Dropdown
                                    style={styles.dropdown_bulk}
                                    placeholderStyle={{ fontSize: 16 }}
                                    selectedTextStyle={{ fontSize: 16, }}
                                    data={bulkActions}
                                    maxHeight={340}
                                    labelField="label"
                                    valueField="value"
                                    placeholder="Bulk Action"
                                    value={actions}
                                    onChange={(item: any) => { setActions(item.value) }}
                                />
                            </View>
                        }
                    </View>

                    {/* <View style={{ alignItems: "flex-end", width: "5%", marginVertical: 10 }}> */}
                    {/* Page size logic */}
                    {/* <View style={{ marginTop: 12 }}>
                        <Dropdown
                            style={styles.dropdown}
                            placeholderStyle={{ fontSize: 16 }}
                            selectedTextStyle={{ fontSize: 16, }}
                            data={pageSize}
                            maxHeight={300}
                            labelField="label"
                            valueField="value"
                            placeholder="Size"
                            value={size}
                            onChange={(item: any) => { setSize(item.value) }}
                        />
                    </View> */}
                </View>
            </View>
            <View style={styles.table}>
                <View style={styles.headerRow}>
                    <TouchableOpacity style={styles.headerIcon}>
                        <Checkbox
                            status={selectAll ? 'checked' : 'unchecked'}
                            onPress={handleSelectAll}
                        />
                    </TouchableOpacity>
                    {headers.map((header: any, index: number) => (
                        <TouchableOpacity key={header.id} onPress={() => handleSort(header.label, index, showAscIcon[index])} style={styles.headerCell}>
                            <AntDesign name={showAscIcon[index] ? showAscIcon[index] == "asc" ? "arrowup" : "arrowdown" : undefined} size={18} color="black" />
                            <Text style={{ textTransform: 'capitalize', fontSize: 16, fontWeight: 'bold', textAlign: "left", paddingLeft: 10, }}>{header.label}</Text>
                        </TouchableOpacity>
                    ))}
                    <TouchableOpacity style={styles.headerIcon}>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.headerIcon}>
                    </TouchableOpacity>
                </View>
                {pagedData.length > 0 ? pagedData.map((item, index) => (
                    // isSelected = handleMouseEnter === item.id
                    <Pressable
                        onHoverIn={() => {
                            handleMouseEnter(index);
                        }}
                        onHoverOut={() => {
                            handleMouseLeave();
                        }}
                    >
                        <View style={{ backgroundColor: hoveredItems[index] ? "#D3D3D3" : "transparent", }}>
                            <TouchableOpacity
                                // style={[isHovered && styles.hoveredlistDataRow]}
                                onPress={() => functions.goToRowDetail(item.id)}
                            >
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
                                    {headers.map((header: any) =>
                                    (
                                        <View style={{ flex: 1, justifyContent: 'center' }}>
                                            {/* <Text key={header.id} style={styles.dataCell}>{item[header.label]}</Text>*/}
                                            <Text key={header.id} style={{ textAlign: 'left', paddingLeft: 10, color: hoveredItems[index] ? "#003300" : theme.colors.secondary, }}>{item[header.label]}</Text>
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
                            </TouchableOpacity>
                        </View>
                    </Pressable>
                )) : <Text style={styles.noRecords}>No Record's Found......</Text>}
            </View>
            <View style={styles.pagination}>
                <TouchableOpacity onPress={() => changePage(-1)}>
                    <Ionicons name="caret-back" size={32} color={theme.colors.primary} />
                </TouchableOpacity>

                <Text style={styles.pageText}>{currentPage}/{totalPages}</Text>

                <TouchableOpacity onPress={() => changePage(1)}>
                    <Ionicons name="caret-forward" size={32} color={theme.colors.primary} />
                </TouchableOpacity>
            </View>
        </View >
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
        paddingTop: 5,
        paddingBottom: 5,
        paddingLeft: 2,
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
        padding: 2,
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
    },
    dropdown: {
        width: "100%",
        paddingVertical: 3,
        paddingHorizontal: 13,
        borderColor: 'gray',
        borderRadius: 4,
        borderWidth: 0.5,
        backgroundColor: theme.colors.surface,
        fontSize: 12,
    },
    dropdown_bulk: {
        width: "100%",
        padding: 3,
        borderColor: 'gray',
        borderRadius: 4,
        borderWidth: 0.5,
        backgroundColor: theme.colors.surface,
        fontSize: 12,

    },
});

export default CustomTable2;
