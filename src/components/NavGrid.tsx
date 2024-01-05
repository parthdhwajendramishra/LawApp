import { StyleSheet, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Avatar, Card } from 'react-native-paper'
import { theme } from '../core/theme'

const NavGrid = ({ navigation }: any) => {
    return (
        <View style={{ marginTop: '15%', flexDirection: 'column', flexWrap: 'wrap' }}>
            <TouchableOpacity onPress={() => { navigation.navigate('LeadS') }}>
                <Card.Title
                    title="Leads"
                    subtitle="Leads CRUD"
                    left={(props) => <Avatar.Icon {...props} icon="filter" />}
                    style={styles.cardStyle}
                />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => { navigation.navigate('AccountCRUD') }}>
                <Card.Title
                    title="Accounts"
                    subtitle="Account CRUD"
                    left={(props) => <Avatar.Icon {...props} icon="account" />}
                    style={styles.cardStyle}
                />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => { navigation.navigate('ContactCRUD') }}>
                <Card.Title
                    title="Contacts"
                    subtitle="Contact CRUD"
                    left={(props) => <Avatar.Icon {...props} icon="account" />}
                    style={styles.cardStyle}
                />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => { navigation.navigate('DocumentsCRUD') }}>
                <Card.Title
                    title="Documents"
                    subtitle="Document CRUD"
                    left={(props) => <Avatar.Icon {...props} icon="account" />}
                    style={styles.cardStyle}
                />
            </TouchableOpacity>

        </View>
    )
}

export default NavGrid

const styles = StyleSheet.create({
    cardStyle: {
        width: '90%',
        borderColor: 'red',
        backgroundColor: theme.colors.backdrop,
        marginLeft: '5%',
        marginBottom: '2%',
        borderRadius: 5,
    }
})