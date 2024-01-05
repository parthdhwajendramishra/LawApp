import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Pressable, ActivityIndicator } from 'react-native';
import { Avatar, Button } from 'react-native-paper';
import TextInput from './TextInput';
import { Entypo, AntDesign } from '@expo/vector-icons';
import { theme } from '../core/theme';
import { Checkbox } from 'react-native-paper';
import Ionicons from '@expo/vector-icons/Ionicons';
import { string } from 'yup';
import { FullScreenLoader } from './FullScreenLoader';

const CustomTable = ({ data, headers, functions, propertyNames, navigation, loading }: any) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [searchTerm, setSearchTerm] = useState('');
    const [sortBy, setSortBy] = useState('');
    const [sortOrder, setSortOrder] = useState('asc');
    const [selectAll, setSelectAll] = useState(false);
    const [hoveredItems, setHoveredItems] = useState<Boolean[]>([false, false, false, false, false]);
    const [showAscIcon, setShowAscIcon] = useState(() => {
        return Array.from({ length: headers.length }, () => '')
    });

    const itemsPerPage = 10;

    const [checkboxStates, setCheckboxStates] = React.useState(new Array(data.length).fill(false));
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

    const handleMouseEnter = (index: number) => {
        const temp = [false, false, false, false, false]
        temp[index] = true
        setHoveredItems(temp);
    };

    const handleMouseLeave = () => {
        setHoveredItems([false, false, false, false, false]);
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

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const pagedData = sortedData.slice(startIndex, endIndex);

    const totalPages = Math.ceil(sortedData.length / itemsPerPage);

    const changePage = (offset: number) => {
        const newPage = currentPage + offset;
        if (newPage >= 1 && newPage <= totalPages) {
            setCurrentPage(newPage);
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
                <View style={{ position: 'relative' }}>
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
                        <TouchableOpacity key={index} onPress={() => handleSort(header.label, index, showAscIcon[index])} style={styles.headerCell}>
                            <AntDesign name={showAscIcon[index] ? showAscIcon[index] == "asc" ? "arrowup" : "arrowdown" : undefined} size={18} color="black" />
                            <Text style={{ textTransform: 'capitalize', fontSize: 16, fontWeight: 'bold', textAlign: "left", paddingLeft: 10, }}>{header.heading}</Text>
                        </TouchableOpacity>
                    ))}

                    <TouchableOpacity style={styles.headerIcon}>

                    </TouchableOpacity>
                    <TouchableOpacity style={styles.headerIcon}>

                    </TouchableOpacity>
                </View>

                {loading ? <View style={{ padding: 10 }}>
                    <ActivityIndicator size="large" color="#2196F3" />
                </View>
                    :

                    pagedData.map((item, index) => {
                        return (

                            <Pressable
                                onHoverIn={() => {
                                    handleMouseEnter(index);
                                }}
                                onHoverOut={() => {
                                    handleMouseLeave();
                                }}
                                key={index}
                            >
                                <View style={{ backgroundColor: hoveredItems[index] ? "#D3D3D3" : "transparent", }}>
                                    <TouchableOpacity
                                        onPress={() => functions.goToRowDetail(item.id)}
                                    >
                                        <View style={styles.dataRow}>

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

                                            {headers.map((header: any, index: any) => {
                                                return (
                                                    <View style={{ flex: 1, justifyContent: 'center' }} key={index} >
                                                        <Text
                                                            key={header.id}
                                                            style={{ textAlign: 'left', paddingLeft: 10, color: hoveredItems[index] ? "#003300" : theme.colors.secondary, }}>
                                                            {(item[header.label]) === null ? '' : String(item[header.label])}
                                                        </Text>
                                                    </View>
                                                )
                                            })}


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
                        )
                    }
                    )}
                {
                    !loading && pagedData.length === 0 && (
                        <Text style={styles.noRecords}>No Record's Found......</Text>
                    )}

            </View>

            {
                pagedData.length > 0 && <View style={styles.pagination}>
                    <TouchableOpacity onPress={() => changePage(-1)}>
                        <Ionicons name="caret-back" size={32} color={theme.colors.primary} />
                    </TouchableOpacity>

                    <Text style={styles.pageText}>{currentPage}/{totalPages}</Text>

                    <TouchableOpacity onPress={() => changePage(1)}>
                        <Ionicons name="caret-forward" size={32} color={theme.colors.primary} />
                    </TouchableOpacity>
                </View>
            }
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
    }
});

export default CustomTable;
