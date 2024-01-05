import React, { useState } from 'react'
import { ScrollView } from 'react-native-gesture-handler';
import DataCard from './DataCard';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { theme } from '../core/theme';
import TextInput from './TextInput';
import { Entypo, AntDesign } from '@expo/vector-icons';
import { Dropdown } from "react-native-element-dropdown";
import { crudStyles } from '../pages/common/crudStyles';

const CardView = ({ title, headers, data, functions, propertyNames }: any) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [sortBy, setSortBy] = useState('');
    const [sortOrder, setSortOrder] = useState('asc');
    const [showIcon, setShowAscIcon] = useState(true);
    const setSortedField = (field: string) => {
        setSortBy(field);
    }
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
    const handleSort = () => {
        setShowAscIcon(!showIcon);
        if (sortOrder === 'asc')
            setSortOrder('desc')
        else
            setSortOrder('asc')
    };
    return (
        <>
            <View>
                <View style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
                    <TouchableOpacity onPress={() => handleSort()} style={{ marginTop: '3%', marginRight: '2%' }}>
                        <AntDesign name={showIcon === true ? "arrowup" : "arrowdown"} size={30} color="black" />
                    </TouchableOpacity>
                    <Dropdown
                        style={styles.dropdown}
                        placeholderStyle={crudStyles.placeholderStyle}
                        selectedTextStyle={crudStyles.selectedTextStyle}
                        data={headers}
                        maxHeight={300}
                        labelField="label"
                        valueField="id"
                        placeholder="Select Field"
                        value={data.label}
                        onChange={(item: any) => { setSortedField(item.label) }}
                    />
                </View>
                <View style={{ position: 'relative', margin: '2%' }}>
                    <TextInput
                        style={styles.inputSearchStyle}
                        placeholder="Search..."
                        value={searchTerm}
                        onChangeText={text => setSearchTerm(text)}
                    />
                    {searchTerm != '' && (<View style={{ position: 'absolute', right: 10, top: 25 }}>
                        <Entypo name="cross" size={24} color="grey" onPress={() => setSearchTerm('')} />
                    </View>)}
                </View>
            </View>
            <ScrollView>
                {sortedData.length > 0 && sortedData.map((item: any, index: any) => (
                    <DataCard item={item} title={title} headers={headers} functions={functions} key={index} />
                ))
                }
            </ScrollView>
        </>
    )
}

export default CardView

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
    hoveredlistDataRow: {
        borderColor: '#004d66',
        backgroundColor: '#80dfff'
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
        height: 52,
        fontSize: 16,
        border: 0,
        width: '100%',
        // margin: '2%'
    },

    noRecords: {
        alignSelf: 'center',
        fontSize: 35,
        fontWeight: 'bold',
        color: theme.colors.backdrop,
        marginVertical: '10%'
    },
    dropdown: {
        paddingHorizontal: 16,
        height: 40,
        borderColor: 'gray',
        borderWidth: 0.5,
        marginVertical: 8,
        borderRadius: 4,
        backgroundColor: theme.colors.surface,
        width: 150,
        marginRight: '2%'
    },
});


