import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Avatar, Card, IconButton } from 'react-native-paper';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { LeadScreens } from '../pages/leads/screens/LeadScreens';
import GroupScreens from '../pages/groups/screens/GroupScreens';
import NavGrid from './NavGrid';
import TabScreen from './TabScreen';

const Tab = createBottomTabNavigator();
const MoreTabNavigator = ({ navigation }: any) => {
    return (
        <TabScreen navigation={navigation} />
    )
}
//export default MoreTab
export default MoreTabNavigator

const styles = StyleSheet.create({})