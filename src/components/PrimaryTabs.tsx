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

const Tab = createBottomTabNavigator();

function PrimaryTabs() {
    return (
        <Tab.Navigator screenOptions={{
            headerShown: false,
        }}>
            <Tab.Screen
                name="Dashboard"
                component={Dashboard}
                options={{
                    tabBarLabel: 'Home',
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name='view-dashboard' color={color} size={26} />
                    ),
                }} />
            <Tab.Screen
                name="Roles"
                component={RoleScreens}
                options={{
                    tabBarLabel: 'Roles',
                    tabBarIcon: ({ color = theme.colors.primary }) => (
                        <MaterialCommunityIcons name='account-group' color={color} size={26} />
                    ),
                }} />
            <Tab.Screen
                name="Groups"
                component={GroupScreens}
                options={{
                    tabBarLabel: 'Groups',
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name='group' color={color} size={26} />
                    ),
                }} />

            <Tab.Screen
                name="Users"
                component={UserScreens}
                options={{
                    tabBarLabel: 'Users',
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name='account' color={color} size={26} />
                    ),
                }} />
            <Tab.Screen
                name="More"
                component={MoreTabNavigator}
                options={{
                    tabBarLabel: 'More',
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name='more' color={color} size={26} />
                    ),
                }} />
        </Tab.Navigator>
    );
}
export default PrimaryTabs;
