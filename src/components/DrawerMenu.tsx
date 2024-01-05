import * as React from "react";
import { TouchableOpacity, View, StyleSheet, Platform } from "react-native";
import { Menu } from "react-native-paper";
import { AntDesign } from "@expo/vector-icons";
import { getUpdateAuth } from "../authentication/services/auth/getUpdateAuth";
import { useDispatch } from "react-redux";
import {
  removeTokenW,
  removeUsernameW,
} from "../authentication/services/localStorage/tokenServiceWeb";
const DrawerMenu = ({ onMenuClick }: any) => {
  const dispatch = useDispatch();
  const [visible, setVisible] = React.useState(false);
  const ToggleMenu = (screen: string) => {
    if (screen === "hide") {
      setVisible(!visible);
    } else {
      setVisible(!visible);
      onMenuClick(screen);
    }
  };

  const logout = () => {
    if (Platform.OS === "web") {
      removeTokenW("token");
      removeUsernameW("username");
    }
    dispatch<any>(getUpdateAuth({ token: "", username: "" }));
  };
  return (
    <>
      <TouchableOpacity
        onPress={() => ToggleMenu("hide")}
        style={[
          Platform.OS === "android"
            ? styles.dropdown_icon_android
            : styles.dropdown_icon,
          { backgroundColor: "#574389", padding: 10, borderRadius: 50 },
        ]}
      >
        {!visible ? (
          <AntDesign name="user" size={15} color="white" />
        ) : (
          <AntDesign name="user" size={15} color="white" />
        )}
      </TouchableOpacity>
      {visible ? (
        <View
          style={[
            Platform.OS === "android"
              ? styles.dropdown_menu_android
              : styles.dropdown_menu,
          ]}
        >
          <Menu.Item
            leadingIcon="face-man-profile"
            onPress={() => ToggleMenu("UserProfile")}
            title="Profile"
            style={styles.item}
          />
          <Menu.Item
            leadingIcon="application-settings"
            onPress={() => {
              ToggleMenu("ChangePassword");
            }}
            title="Change Password"
            style={styles.item}
          />
          <Menu.Item
            leadingIcon="logout"
            onPress={logout}
            title="Logout"
            style={styles.item1}
          />
        </View>
      ) : (
        <></>
      )}
    </>
  );
};

export const styles = StyleSheet.create({
  dropdown_icon: {
    marginRight: "4%",
    position: "absolute",
  },
  dropdown_icon_android: {
    marginRight: "5%",
    position: "absolute",
  },
  dropdown_menu: {
    flex: 1,
    marginTop: 49,
    marginRight: 5
  },
  dropdown_menu_android: {
    flex: 1,
    marginTop: "24%",
  },
  item: {
    borderEndWidth: 1,
    borderStartWidth: 1,
    borderTopWidth: 1,
    backgroundColor: "white",
  },
  item1: {
    borderEndWidth: 1,
    borderStartWidth: 1,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    backgroundColor: "white",
  },
});

export default DrawerMenu;
