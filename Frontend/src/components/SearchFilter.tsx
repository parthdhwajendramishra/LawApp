import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import TextInput from '../../components/TextInput'
import { Entypo } from '@expo/vector-icons';
import { theme } from '../../core/theme';
import { Dropdown } from 'react-native-element-dropdown';

const SearchFilter = ({ hideFilter, clearFilter, headers, applyFilter }: any) => {

    const sortOrderValue = [
        { label: 'ASC', value: 'ASC' },
        { label: 'DESC', value: 'DESC' },

    ];

    const SortByValue = headers.map((item: { label: any; }) => ({
        label: item.label,
        value: item.label,
    }));

    const filterFunction = () => {
        applyFilter({ ...filterData });
    }

    const dataObject: any = {};
    for (const item of headers) {
        dataObject[item.label] = '';
    }
    dataObject.sortOrder = '';
    dataObject.sortBy = '';

    const [filterData, setFilterData]: any = useState(dataObject);

    const clearFilters = () => {
        const newData = { ...filterData }; // Create a copy of the current state object

        // Iterate over the keys and set them to empty strings
        for (const key in newData) {
            if (newData.hasOwnProperty(key)) {
                newData[key] = '';
            }
        }

        // Update the state with the new object
        setFilterData(newData);
        clearFilter();
    }


    return (
        <View style={{ padding: 20 }}>
            <View style={{ flexDirection: 'row', justifyContent: "flex-end", backgroundColor: theme.colors.primary, borderRadius: 4, marginBottom: 10 }}>
                <Text style={{ fontSize: 18, color: '#fff', padding: 10, fontWeight: 'bold' }}>Filter</Text>
                <Entypo name="cross" size={24} color="white" onPress={() => hideFilter()} style={{ marginTop: 8, marginRight: 10 }} />
            </View>
            <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'flex-start', flexWrap: 'wrap' }}>
                {headers.map((header: any, index: any) => (
                    <View style={{ width: '22%', marginRight: '2%', marginLeft: '1%' }} key={index}>
                        <Text style={styles.lable}>{header.heading}</Text>
                        <TextInput
                            style={{ padding: 1, height: 25 }}
                            returnKeyType="next"
                            autoCapitalize="none"
                            mode="outlined"
                            value={filterData[header.label]}
                            onChangeText={val => setFilterData({ ...filterData, [header.label]: val })}
                        />
                    </View>
                ))
                }

            </View>
            <View style={{ width: '20%', marginTop: 3, flexDirection: 'row', marginLeft: '1%' }}>
                <View>
                    <Text style={styles.lable}>Sort Order</Text>
                    <Dropdown
                        style={styles.dropdown}
                        placeholderStyle={styles.placeholderStyle}
                        selectedTextStyle={styles.selectedTextStyle}
                        data={sortOrderValue}
                        maxHeight={200}
                        labelField="label"
                        valueField="value"
                        value={filterData.sortOrder}
                        placeholder="SELECT ORDER"
                        onChange={(item: any) => { setFilterData({ ...filterData, sortOrder: item.value }) }}
                    />
                </View>

                <View style={{ marginLeft: '5%' }}>
                    <Text style={styles.lable}>Sort By</Text>
                    <Dropdown
                        style={styles.dropdown}
                        placeholderStyle={styles.placeholderStyle}
                        selectedTextStyle={styles.selectedTextStyle}
                        data={SortByValue}
                        maxHeight={300}
                        labelField="label"
                        valueField="value"
                        value={filterData.sortBy}
                        placeholder="SELECT FIELD"
                        onChange={(item: any) => { setFilterData({ ...filterData, sortBy: item.value }) }}
                    />
                </View>
            </View>

            <View style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
                <TouchableOpacity onPress={() => {
                    clearFilters()
                }}><Text style={styles.clear}>Clear</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={filterFunction}>
                    <Text style={styles.apply}>Apply</Text>
                </TouchableOpacity>
            </View>
        </View >
    )
}

export default SearchFilter

const styles = StyleSheet.create({
    lable: {
        fontWeight: "400",
        color: "#545253",
        fontSize: 14,
        padding: 0,
        paddingLeft: 0,
        marginBottom: -10,
        textTransform: 'capitalize'
    },
    dropdown: {
        paddingHorizontal: 16,
        height: 30,
        borderColor: 'gray',
        borderWidth: 0.5,
        marginVertical: 10,
        borderRadius: 4,
        backgroundColor: theme.colors.surface,
    },
    placeholderStyle: {
        fontSize: 12,
    },
    selectedTextStyle: {
        fontSize: 12,
    },
    clear: {
        marginHorizontal: 5,
        marginVertical: 10,
        color: theme.colors.primary,
        fontWeight: 'bold',
        borderRadius: 4,
        padding: 10,
        borderWidth: 1,
        borderColor: theme.colors.primary
    },
    apply: {
        marginHorizontal: 5,
        marginVertical: 10,
        backgroundColor: theme.colors.primary,
        color: '#fff',
        fontWeight: 'bold',
        borderRadius: 4,
        padding: 10,
    },
})