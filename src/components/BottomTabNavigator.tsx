import * as React from 'react';
import { createMaterialBottomTabNavigator } from 'react-native-paper/react-navigation';
import RoleScreens from '../pages/roles/screens/RoleScreens';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import GroupScreens from '../pages/groups/screens/GroupScreens';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { LeadScreens } from '../pages/leads/screens/LeadScreens';
import UserScreens from '../pages/users/screens/UserScreens';
import Dashboard from '../pages/dashboard/dashboard';
import { theme } from '../core/theme';
import MoreTab from './MoreTab';
import MoreTabNavigator from './MoreTab';
import PrimaryTabs from './PrimaryTabs';
import { useState } from 'react';
import { TouchableOpacity, Text, View, Modal } from 'react-native';

const Tab = createBottomTabNavigator();

function MyTabs() {
    return (
        <PrimaryTabs />
    );
}


export default MyTabs;