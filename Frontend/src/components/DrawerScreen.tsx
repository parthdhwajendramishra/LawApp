import React, { useState } from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import DrawerMenu from "./DrawerMenu";
import {
  useWindowDimensions,
} from "react-native";
import Dashboard from "../dashboard/dashboard";
import { DrawerActions } from "@react-navigation/native";
import { ChangePassword } from "../authentication/screens/changePassword";
import ProfileScreens from "../profile/screens/ProfileScreens";
import RoleScreens from "../roles/screens/RoleScreens";
import GroupScreens from "../groups/screens/GroupScreens";
import { theme } from "../../core/theme";
import UserScreens from "../users/screens/UserScreens";
import { LeadScreens } from "../leads/screens/LeadScreens";
import { AccountScreens } from "../accounts/screens/AccountsScreens";
import DocumentsScreen from "../documents/screens/DocumentsScreen";
import { ContactScreens } from "../contacts/screens/ContactScreens";
import Header from "./Header";
import TaskScreen from "../tasks/screens/TaskScreen";
import { IndustryScreens } from "../industry/screens/IndustryScreens";

const Drawer = createDrawerNavigator();

const DrawerScreen: React.FC = ({ navigation }: any) => {

  const [visible, setVisible] = useState<string>("");
  interface toggleMenuParams {
    screen?: string;
    heading?: string;
    stopNavigation?: boolean
  }

  // const ToggleMenu = (params: toggleMenuParams) => {
  //   if (params.stopNavigation) {
  //     return
  //   }

  //   if (visible === params.heading) setVisible("");
  //   else setVisible(params.heading as string);

  //   navigation.reset({ index: 0, routes: [{ name: params.heading, params: { screen: params.screen } }] })
  // };

  const dimensions = useWindowDimensions();
  const [selectedScreen, setSelectedScreen] = useState("Dashboard");

  const handleMenuClick = (screenName: string) => {
    setSelectedScreen(screenName);
    navigation.dispatch(DrawerActions.jumpTo(" "));
  };

  return (
    <>
      <Drawer.Navigator
        screenOptions={{
          headerShown: true,
          drawerType: dimensions.width >= 768 ? "permanent" : "front",
          drawerStyle: {
            width: 0,
            backgroundColor: theme.colors.primary,
          },
          drawerActiveBackgroundColor: "transparent",
          headerTitle: "",
          headerStyle: {
            backgroundColor: theme.colors.primary,
            height: 50,
          },
        }}
      >
        <Drawer.Screen
          name="Dashboard"
          component={Dashboard}
          options={{
            headerLeft: () => (
              <Header
                navigation={navigation}
                // ToggleMenu={ToggleMenu}
                visible={visible}
              />
            ),
            headerRight: () => <DrawerMenu onMenuClick={handleMenuClick} />,
            drawerActiveTintColor: theme.colors.primary,
          }}
        />
        <Drawer.Screen
          name="Roles"
          component={RoleScreens}
          options={{
            headerRight: () => <DrawerMenu onMenuClick={handleMenuClick} />,
            headerLeft: () => (
              <Header
                navigation={navigation}
                // // ToggleMenu={ToggleMenu}
                visible={visible}
              />
            ),
            drawerActiveTintColor: theme.colors.primary,
          }}
        />
        <Drawer.Screen
          name="Groups"
          component={GroupScreens}
          options={{
            headerRight: () => <DrawerMenu onMenuClick={handleMenuClick} />,
            headerLeft: () => (
              <Header
                navigation={navigation}
                // // ToggleMenu={ToggleMenu}
                visible={visible}
              />
            ),
            drawerActiveTintColor: theme.colors.primary,
          }}
        />
        <Drawer.Screen
          name="Users"
          component={UserScreens}
          options={{
            headerRight: () => <DrawerMenu onMenuClick={handleMenuClick} />,
            headerLeft: () => (
              <Header
                navigation={navigation}
                // // ToggleMenu={ToggleMenu}
                visible={visible}
              />
            ),
            drawerActiveTintColor: theme.colors.primary,
          }}
        />
        <Drawer.Screen
          name="Accounts"
          component={AccountScreens}
          options={{
            headerRight: () => <DrawerMenu onMenuClick={handleMenuClick} />,
            headerLeft: () => (
              <Header
                navigation={navigation}
                // // ToggleMenu={ToggleMenu}
                visible={visible}
              />
            ),
            drawerActiveTintColor: theme.colors.primary,
          }}
        />
        <Drawer.Screen
          name="Leads"
          component={LeadScreens}
          options={{
            headerRight: () => <DrawerMenu onMenuClick={handleMenuClick} />,
            headerLeft: () => (
              <Header
                navigation={navigation}
                // // ToggleMenu={ToggleMenu}
                visible={visible}
              />
            ),
            drawerActiveTintColor: theme.colors.primary,
          }}
        />

        <Drawer.Screen
          name="Contacts"
          component={ContactScreens}
          options={{
            headerRight: () => <DrawerMenu onMenuClick={handleMenuClick} />,
            headerLeft: () => (
              <Header
                navigation={navigation}
                // // ToggleMenu={ToggleMenu}
                visible={visible}
              />
            ),
            drawerActiveTintColor: theme.colors.primary,
          }}
        />

        <Drawer.Screen
          name="Documents"
          component={DocumentsScreen}
          options={{
            headerRight: () => <DrawerMenu onMenuClick={handleMenuClick} />,
            headerLeft: () => (
              <Header
                navigation={navigation}
                // // ToggleMenu={ToggleMenu}
                visible={visible}
              />
            ),
            drawerActiveTintColor: theme.colors.primary,
          }}
        />

        <Drawer.Screen
          name="Tasks"
          component={TaskScreen}
          options={{
            headerRight: () => <DrawerMenu onMenuClick={handleMenuClick} />,
            headerLeft: () => (
              <Header
                navigation={navigation}
                // // ToggleMenu={ToggleMenu}
                visible={visible}
              />
            ),
            drawerActiveTintColor: theme.colors.primary,
          }}
        />

        <Drawer.Screen
          name="Industry"
          component={IndustryScreens}
          options={{
            headerRight: () => <DrawerMenu onMenuClick={handleMenuClick} />,
            headerLeft: () => (
              <Header
                navigation={navigation}
                // // ToggleMenu={ToggleMenu}
                visible={visible}
              />
            ),
            drawerActiveTintColor: theme.colors.primary,
          }}
        />

        <Drawer.Screen
          name=" "
          component={
            selectedScreen === "ChangePassword"
              ? ChangePassword
              : ProfileScreens
          }
          options={{
            headerLeft: () => (
              <Header
                navigation={navigation}
                // // ToggleMenu={ToggleMenu}
                visible={visible}
              />
            ),

            headerRight: () => <DrawerMenu onMenuClick={handleMenuClick} />,
          }}
        />
      </Drawer.Navigator>
    </>
  );
};

export default DrawerScreen;
