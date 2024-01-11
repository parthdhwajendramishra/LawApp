import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { LeadScreens } from '../pages/leads/screens/LeadScreens';
import GroupScreens from '../pages/groups/screens/GroupScreens';
import NavGrid from './NavGrid';
import { AccountScreens } from '../pages/accounts/screens/AccountsScreens';
import DocumentsScreen from '../pages/documents/screens/DocumentsScreen';
import { ContactScreens } from '../pages/contacts/screens/ContactScreens';


const DrawerStack = createStackNavigator();
const TabScreen = ({ navigation }: any) => {
    return (
        <DrawerStack.Navigator
            screenOptions={{
                headerShown: false,
            }}>
            <DrawerStack.Screen name="AllTabs" component={NavGrid} />
            <DrawerStack.Screen name="LeadS" component={LeadScreens} />
            <DrawerStack.Screen name="AccountCRUD" component={AccountScreens} />
            <DrawerStack.Screen name="ContactCRUD" component={ContactScreens} />
            <DrawerStack.Screen name="DocumentsCRUD" component={DocumentsScreen} />
            {/* <DrawerStack.Screen name="ContactCRUD" component={ContactScreens} /> */}
        </DrawerStack.Navigator>
    )
}

export default TabScreen

const styles = StyleSheet.create({})