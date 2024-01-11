import {
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import { theme } from "../../core/theme";
import { commanStyles } from "./commanStyle";
import { crudStyles } from "./crudStyles";
import { Entypo, AntDesign, MaterialIcons, Ionicons } from "@expo/vector-icons";
import { useDispatch, useSelector } from "react-redux";
import { headerItemOnClick, headerItemOnHoverIn, headerItemOnHoverOut, subMenuOpen, } from "./services/headerSlice";


type HeaderItemParams = {
  handleMouseEnter: Function;
  handleMouseLeave: Function;
  ToggleMenu: Function;
  hoveredItems: string | null;
  visible: string;
  // setVisible: any;
  subMenu: { title: string; subSubMenu: { id: string, name: string }[]; subMenuNavigation?: string, isNotNested?: boolean }[];
  name: string;
  navigationName: string;
  subMenuIcon: any;
  navigation: any
};

const HeaderItem = ({
  handleMouseEnter,
  handleMouseLeave,
  ToggleMenu,
  hoveredItems,
  visible,
  name,
  subMenu,
  navigationName,
  subMenuIcon,
  navigation
}: HeaderItemParams) => {
  const [subSubMenuVisible, setSubSubMenuVisible] = useState<String>("")
  const currentHoveredItem = useSelector((state: any) => state.HeaderSlice.currentHoveredItem)
  const currentSubmenuOpen = useSelector((state: any) => state.HeaderSlice.currentSubmenuOpen)
  const currentItem = useSelector((state: any) => state.HeaderSlice.currentItem)
  const dispatch = useDispatch()

  return (
    <View>
      <Pressable
        onHoverIn={() => {
          dispatch(headerItemOnHoverIn({ item: navigationName }))

        }}
        onHoverOut={() => {
          dispatch(headerItemOnHoverOut({ item: navigationName }))
        }}
      >
        <TouchableOpacity
          style={[
            crudStyles.userHeader,
            {
              backgroundColor:
                currentHoveredItem === navigationName ? '#745db0' : "transparent",
            },
            {
              // borderTopWidth: 2,

            }
          ]}
          onPress={() => {
            // ToggleMenu({ screen: navigationName, heading: navigationName })
            navigation.reset({ index: 0, routes: [{ name: navigationName }] })
            // navigation.navigate(navigationName)
            dispatch(headerItemOnClick({ item: navigationName }))
          }
          }
        >
          <Text
            style={{
              color: '#fff',
              fontSize: 16,

            }}
          >
            {name}
            <AntDesign
              name="caretdown"
              style={{ paddingLeft: 6 }}
              size={9}
              color={"#fff"}
            />
          </Text>
        </TouchableOpacity>
        {currentHoveredItem === navigationName ? (
          <View style={commanStyles.dropdown_menu}>
            {subMenu.map((item, index) => {
              return (
                <View
                  key={index}
                >
                  <Pressable
                    // key={index}
                    onHoverIn={() => {
                      handleMouseEnter(navigationName + (index + 1));
                      dispatch(headerItemOnHoverIn({ item: navigationName }))
                      dispatch(subMenuOpen({ item: navigationName + (index + 1) }))

                    }}
                    onHoverOut={() => {
                      handleMouseLeave();
                    }}
                  >
                    <TouchableOpacity
                      onPress={() => {
                        // if (subSubMenuVisible != navigationName + (index + 1)) {
                        //   setSubSubMenuVisible(navigationName + (index + 1))
                        // } else {
                        //   setSubSubMenuVisible("")
                        // };
                        if (subMenu[index].subSubMenu.length <= 0) {
                          if (subMenu[index].isNotNested) {
                            // navigation.navigate(subMenu[index].subMenuNavigation)
                            navigation.reset({ index: 0, routes: [{ name: subMenu[index].subMenuNavigation }] })
                          } else {
                            navigation.reset({ index: 0, routes: [{ name: navigationName, params: { screen: subMenu[index].subMenuNavigation } }] })
                          }
                        }
                        // ToggleMenu({
                        //   screen: subMenu[index].subMenuNavigation,
                        //   heading: navigationName,
                        //   stopNavigation: subMenu[index].subSubMenu.length > 0 ? true : false
                        // })
                        // dispatch(subMenuOpen({ item: navigationName + (index + 1) }))
                        dispatch(headerItemOnHoverIn({ item: navigationName, clicked: true }))

                      }}
                      style={[
                        commanStyles.item,
                        {
                          backgroundColor:
                            hoveredItems === navigationName + (index + 1)
                              ? theme.colors.header
                              : '#745db0',
                          paddingLeft: 10,
                          paddingVertical: 20,
                          flexDirection: 'row', alignItems: 'center',
                        },
                      ]}
                    >
                      < Ionicons name={subMenuIcon[index]} size={18} color={hoveredItems === navigationName + (index + 1)
                        ? theme.colors.primary
                        : "#fff"} />
                      <Text
                        style={{
                          color:
                            hoveredItems === navigationName + (index + 1)
                              ? theme.colors.primary
                              : "#fff",
                          fontSize: 14,
                          paddingHorizontal: 10,

                        }}
                      >
                        {item.title}

                      </Text>
                      {item.subSubMenu.length > 0 ? (<AntDesign name="caretright" size={8} color={hoveredItems === navigationName + (index + 1) ? theme.colors.primary : "white"} />) : null}
                    </TouchableOpacity>
                  </Pressable>
                  {
                    item.subSubMenu.length >= 0 ? (
                      currentSubmenuOpen == navigationName + (index + 1) ? (
                        <View style={commanStyles.dropdown_submenu}>
                          {item.subSubMenu.map((subSubMenuItem, subSubMenuindex) => {
                            return (
                              <Pressable
                                // key={index}
                                onHoverIn={() => {
                                  handleMouseEnter(navigationName + (index + 1) + (subSubMenuindex + 1));
                                  dispatch(headerItemOnHoverIn({ item: navigationName }))
                                }}
                                onHoverOut={() => {
                                  handleMouseLeave();
                                }}
                              >
                                <TouchableOpacity
                                  onPress={() => {
                                    navigation.reset({ index: 0, routes: [{ name: navigationName, params: { screen: item.subMenuNavigation, params: { id: subSubMenuItem.id } } }] })
                                    setSubSubMenuVisible("")
                                    visible = ""
                                    dispatch(headerItemOnHoverIn({ item: navigationName, clicked: true }))
                                  }}
                                  style={[
                                    commanStyles.item,
                                    {
                                      backgroundColor:
                                        hoveredItems === navigationName + (index + 1) + (subSubMenuindex + 1)
                                          ? theme.colors.header
                                          : '#745db0',
                                      paddingHorizontal: 5, paddingLeft: 20,
                                      paddingVertical: 20,
                                      justifyContent: 'center'
                                    }

                                  ]}>
                                  <Text
                                    key={subSubMenuindex}
                                    style={{
                                      color:
                                        hoveredItems === navigationName + (index + 1) + (subSubMenuindex + 1)
                                          ? theme.colors.primary
                                          : "#fff",
                                      fontSize: 14,

                                    }}
                                  >
                                    {subSubMenuItem.name}
                                  </Text>
                                </TouchableOpacity>
                              </Pressable>
                            );
                          })}
                        </View>
                      ) : null
                    ) : null
                  }
                </View>
              );
            })}
          </View>
        ) : (
          <></>
        )
        }
      </Pressable>
    </View >
  );
};
export default HeaderItem;
const styles = StyleSheet.create({});
