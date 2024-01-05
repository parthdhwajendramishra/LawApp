import React, { useState } from "react";
import {
  TouchableOpacity,
  Text,
  View,
  Pressable,
} from "react-native";
import { theme } from "../../core/theme";
import { Entypo, AntDesign } from "@expo/vector-icons";
import { commanStyles } from "./commanStyle";
import { Menu } from "react-native-paper";
import { crudStyles } from "./crudStyles";

export const CustomHeaderLeft = ({ navigation, ToggleMenu, visible }: any) => {
  const [hoveredItems, setHoveredItems] = useState<string | null>(null);

  const handleMouseEnter = (itemName: string) => {
    setHoveredItems(itemName);
  };

  const handleMouseLeave = () => {
    setHoveredItems(null);
  };

  const [isRightIconVisible, setIsRightIconVisible] = useState(true);
  const [isSubmenuVisible, setIsSubmenuVisible] = useState(false);

  return (
    <View style={{ flexDirection: "row", marginLeft: "10%" }}>
      <TouchableOpacity
        style={{ marginRight: 20, paddingVertical: 20 }}
        onPress={() => navigation.navigate("Dashboard")}
      >
        <Entypo name="home" size={24} color="white" />
      </TouchableOpacity>

      <View
        style={{
          position: "relative",
        }}
      >
        <Pressable
          onHoverIn={() => {
            handleMouseEnter("user");
          }}
          onHoverOut={() => {
            handleMouseLeave();
          }}
        >
          <TouchableOpacity
            style={[crudStyles.userHeader,
            {
              backgroundColor:
                hoveredItems === "user" ? "white" : "transparent",
            }]
            }
            onPress={() => ToggleMenu({ screen: "Users", heading: "user" })}
          >
            <Text
              style={{
                color: hoveredItems === "user" ? theme.colors.primary : "#fff",
                fontSize: 18,
              }}
            >
              Users Management{" "}
              {!visible.user ? (
                <AntDesign
                  name="down"
                  size={12}
                  color={
                    hoveredItems === "user" ? theme.colors.primary : "#fff"
                  }
                />
              ) : (
                <AntDesign
                  name="up"
                  size={12}
                  color={
                    hoveredItems === "user" ? theme.colors.primary : "#fff"
                  }
                />
              )}
            </Text>
          </TouchableOpacity>
        </Pressable>
        {visible.user ? (
          <View style={commanStyles.dropdown_menu}>
            <Pressable
              onHoverIn={() => {
                handleMouseEnter("user1");
              }}
              onHoverOut={() => {
                handleMouseLeave();
              }}
            >
              <TouchableOpacity
                onPress={() => ToggleMenu({ screen: "Roles", heading: "user" })}
                style={[
                  commanStyles.item,
                  {
                    backgroundColor:
                      hoveredItems === "user1" ? "white" : theme.colors.primary,
                    paddingHorizontal: 5,
                  },
                ]}
              >
                <Text
                  style={{
                    color:
                      hoveredItems === "user1" ? theme.colors.primary : "#fff",
                    fontSize: 16,
                  }}
                >
                  Roles
                </Text>
              </TouchableOpacity>
            </Pressable>
            <Pressable
              onHoverIn={() => handleMouseEnter("user2")}
              onHoverOut={() => {
                handleMouseLeave();
              }}
            >
              <TouchableOpacity
                onPress={() => ToggleMenu({ screen: "Users", heading: "user" })}
                //   onPress={() => ToggleMenu("Users")}
                // title="Users"
                style={[
                  commanStyles.item,
                  {
                    backgroundColor:
                      hoveredItems === "user2" ? "white" : theme.colors.primary,
                    paddingHorizontal: 5,
                  },
                ]}
              >
                <Text
                  style={{
                    color:
                      hoveredItems === "user2" ? theme.colors.primary : "#fff",
                    fontSize: 16,
                  }}
                >
                  Users
                </Text>
              </TouchableOpacity>
            </Pressable>
            <Pressable
              onHoverIn={() => handleMouseEnter("user3")}
              onHoverOut={() => {
                handleMouseLeave();
              }}
            >
              <TouchableOpacity
                onPress={() =>
                  ToggleMenu({ screen: "Groups", heading: "user" })
                }
                style={[
                  commanStyles.item,
                  {
                    backgroundColor:
                      hoveredItems === "user3" ? "white" : theme.colors.primary,
                    paddingHorizontal: 5,
                  },
                ]}
              >
                <Text
                  style={{
                    color:
                      hoveredItems === "user3" ? theme.colors.primary : "#fff",
                    fontSize: 16,
                  }}
                >
                  Groups
                </Text>
              </TouchableOpacity>
            </Pressable>
          </View>
        ) : (
          <></>
        )}
      </View>

      <View style={{ position: "relative" }}>
        <Pressable
          onHoverIn={() => {
            handleMouseEnter("lead");
            // ToggleMenuOnHover("lead");
          }}
          onHoverOut={() => {
            // ToggleMenuHoverOut("lead");
            handleMouseLeave();
          }}
        >
          <TouchableOpacity
            style={[
              crudStyles.userHeader,
              {
                backgroundColor:
                  hoveredItems === "lead" ? "white" : "transparent",
              }]}
            onPress={() => {
              navigation.navigate("Leads");
              ToggleMenu({ screen: "Leads", heading: "lead" });
            }}
          >
            <Text
              style={{
                color: hoveredItems === "lead" ? theme.colors.primary : "#fff",
                fontSize: 18,
              }}
            >
              Leads{" "}
              {!visible.lead ? (
                <AntDesign
                  name="down"
                  size={12}
                  color={
                    hoveredItems === "lead" ? theme.colors.primary : "#fff"
                  }
                />
              ) : (
                <AntDesign
                  name="up"
                  size={12}
                  color={
                    hoveredItems === "lead" ? theme.colors.primary : "#fff"
                  }
                />
              )}
            </Text>
          </TouchableOpacity>
        </Pressable>

        {visible.lead ? (
          <View style={commanStyles.dropdown_menu}>
            <Pressable
              onHoverIn={() => {
                handleMouseEnter("lead1");
              }}
              onHoverOut={() => {
                handleMouseLeave();
              }}
            >
              <TouchableOpacity
                onPress={() => ToggleMenu({ screen: "Leads", heading: "lead" })}
                style={[
                  commanStyles.item,
                  {
                    backgroundColor:
                      hoveredItems === "lead1" ? "white" : theme.colors.primary,
                    paddingHorizontal: 5,
                  },
                ]}
              >
                <Text
                  style={{
                    color:
                      hoveredItems === "lead1" ? theme.colors.primary : "#fff",
                    fontSize: 16,
                  }}
                >
                  View Leads
                </Text>
              </TouchableOpacity>
            </Pressable>
            <TouchableOpacity
              style={[{ position: "relative" }]}
            >
              <Pressable
                onHoverIn={() => {
                  handleMouseEnter("lead2");
                }}
                onHoverOut={() => {
                  handleMouseLeave();
                }}
              >
                <TouchableOpacity
                  onPress={() => {
                    setIsRightIconVisible(!isRightIconVisible);
                    setIsSubmenuVisible(!isSubmenuVisible);
                  }}
                  style={[
                    commanStyles.item,
                    {
                      backgroundColor:
                        hoveredItems === "lead2"
                          ? "white"
                          : theme.colors.primary,
                      paddingHorizontal: 5,
                    },
                  ]}
                >
                  <Text
                    style={{
                      color:
                        hoveredItems === "lead2"
                          ? theme.colors.primary
                          : "#fff",
                      fontSize: 16,
                    }}
                  >
                    Recently Viewed
                  </Text>

                  <TouchableOpacity style={{ position: "absolute", left: 132 }}>
                    {isRightIconVisible ? (
                      <View style={{ marginLeft: 10 }}>
                        <Entypo
                          name="chevron-right"
                          size={24}
                          color={
                            hoveredItems === "lead2"
                              ? theme.colors.primary
                              : "#fff"
                          }
                        />
                      </View>
                    ) : (
                      <View style={{ marginLeft: 10 }}>
                        <Entypo
                          name="chevron-down"
                          size={24}
                          color={
                            hoveredItems === "lead2"
                              ? theme.colors.primary
                              : "#fff"
                          }
                        />
                      </View>
                    )}
                  </TouchableOpacity>
                </TouchableOpacity>
              </Pressable>
              {!isRightIconVisible && isSubmenuVisible && (
                <View style={commanStyles.dropdown_submenu}>
                  <Pressable
                    onHoverIn={() => {
                      handleMouseEnter("lead21");
                    }}
                    onHoverOut={() => {
                      handleMouseLeave();
                    }}
                  >
                    <TouchableOpacity
                      style={[
                        commanStyles.item,
                        {
                          backgroundColor:
                            hoveredItems === "lead21"
                              ? "white"
                              : theme.colors.primary,
                          paddingHorizontal: 5,
                        },
                      ]}
                    >
                      <Text
                        style={{
                          color:
                            hoveredItems === "lead21"
                              ? theme.colors.primary
                              : "#fff",
                          fontSize: 16,
                        }}
                      >
                        Item 1
                      </Text>
                    </TouchableOpacity>
                  </Pressable>
                  <Pressable
                    onHoverIn={() => {
                      handleMouseEnter("lead22");
                    }}
                    onHoverOut={() => {
                      handleMouseLeave();
                    }}
                  >
                    <TouchableOpacity
                      style={[
                        commanStyles.item,
                        {
                          backgroundColor:
                            hoveredItems === "lead22"
                              ? "white"
                              : theme.colors.primary,
                          paddingHorizontal: 5,
                        },
                      ]}
                    >
                      <Text
                        style={{
                          color:
                            hoveredItems === "lead22"
                              ? theme.colors.primary
                              : "#fff",
                          fontSize: 16,
                        }}
                      >
                        Item 2
                      </Text>
                    </TouchableOpacity>
                  </Pressable>
                </View>
              )}
            </TouchableOpacity>
          </View>
        ) : (
          <></>
        )}
      </View>

      <View style={{ position: "relative" }}>
        <Pressable
          onHoverIn={() => {
            handleMouseEnter("account");
          }}
          onHoverOut={() => {
            handleMouseLeave();
          }}
        >
          <TouchableOpacity
            style={[
              crudStyles.userHeader,
              {
                backgroundColor:
                  hoveredItems === "account" ? "white" : "transparent",
              }]}
            onPress={() => {
              navigation.navigate("Accounts");
              ToggleMenu({ screen: "Accounts", heading: "accounts" });
            }}
          >
            <Text
              style={{
                color:
                  hoveredItems === "account" ? theme.colors.primary : "#fff",
                fontSize: 18,
              }}
            >
              Accounts{" "}
              {!visible.accounts ? (
                <AntDesign
                  name="down"
                  size={12}
                  color={
                    hoveredItems === "account" ? theme.colors.primary : "#fff"
                  }
                />
              ) : (
                <AntDesign
                  name="up"
                  size={12}
                  color={
                    hoveredItems === "account" ? theme.colors.primary : "#fff"
                  }
                />
              )}
            </Text>
          </TouchableOpacity>
        </Pressable>
        {visible.accounts ? (
          <View style={commanStyles.dropdown_menu}>
            <Pressable
              onHoverIn={() => handleMouseEnter("account1")}
              onHoverOut={() => {
                handleMouseLeave();
              }}
            >
              <TouchableOpacity
                onPress={() =>
                  ToggleMenu({ screen: "Accounts", heading: "accounts" })
                }
                style={[
                  commanStyles.item,
                  {
                    backgroundColor:
                      hoveredItems === "account1"
                        ? "white"
                        : theme.colors.primary,
                    paddingHorizontal: 5,
                  },
                ]}
              >
                <Text
                  style={{
                    color:
                      hoveredItems === "account1"
                        ? theme.colors.primary
                        : "#fff",
                    fontSize: 16,
                  }}
                >
                  View Accounts
                </Text>
              </TouchableOpacity>
            </Pressable>
            <TouchableOpacity
              style={{ position: "relative" }}
            >
              <Pressable
                onHoverIn={() => handleMouseEnter("account2")}
                onHoverOut={() => {
                  handleMouseLeave();
                }}
              >
                <TouchableOpacity
                  onPress={() => {
                    setIsRightIconVisible(!isRightIconVisible);
                    setIsSubmenuVisible(!isSubmenuVisible);
                  }}
                  style={[
                    commanStyles.item,
                    {
                      backgroundColor:
                        hoveredItems === "account2"
                          ? "white"
                          : theme.colors.primary,
                      paddingHorizontal: 5,
                    },
                  ]}
                >
                  <Text
                    style={{
                      color:
                        hoveredItems === "account2"
                          ? theme.colors.primary
                          : "#fff",
                      fontSize: 16,
                    }}
                  >
                    Recently Viewed
                  </Text>

                  <TouchableOpacity style={{ position: "absolute", left: 132 }}>
                    {isRightIconVisible ? (
                      <View style={{ marginLeft: 10 }}>
                        <Entypo
                          name="chevron-right"
                          size={24}
                          color={
                            hoveredItems === "account2"
                              ? theme.colors.primary
                              : "#fff"
                          }
                        />
                      </View>
                    ) : (
                      <View style={{ marginLeft: 10 }}>
                        <Entypo
                          name="chevron-down"
                          size={24}
                          color={
                            hoveredItems === "account2"
                              ? theme.colors.primary
                              : "#fff"
                          }
                        />
                      </View>
                    )}
                  </TouchableOpacity>
                </TouchableOpacity>
              </Pressable>

              {!isRightIconVisible && isSubmenuVisible && (
                <View style={commanStyles.dropdown_submenu}>
                  <Pressable
                    onHoverIn={() => handleMouseEnter("account21")}
                    onHoverOut={() => {
                      handleMouseLeave();
                    }}
                  >
                    <TouchableOpacity
                      style={[
                        commanStyles.item,
                        {
                          backgroundColor:
                            hoveredItems === "account21"
                              ? "white"
                              : theme.colors.primary,
                          paddingHorizontal: 5,
                        },
                      ]}
                    >
                      <Text
                        style={{
                          color:
                            hoveredItems === "account21"
                              ? theme.colors.primary
                              : "#fff",
                          fontSize: 16,
                        }}
                      >
                        Item 1
                      </Text>
                    </TouchableOpacity>
                  </Pressable>
                  <Pressable
                    onHoverIn={() => {
                      handleMouseEnter("account22");
                    }}
                    onHoverOut={() => {
                      handleMouseLeave();
                    }}
                  >
                    <TouchableOpacity
                      style={[
                        commanStyles.item,
                        {
                          backgroundColor:
                            hoveredItems === "account22"
                              ? "white"
                              : theme.colors.primary,
                          paddingHorizontal: 5,
                        },
                      ]}
                    >
                      <Text
                        style={{
                          color:
                            hoveredItems === "account22"
                              ? theme.colors.primary
                              : "#fff",
                          fontSize: 16,
                        }}
                      >
                        Item 2
                      </Text>
                    </TouchableOpacity>
                  </Pressable>
                </View>
              )}
            </TouchableOpacity>
          </View>
        ) : (
          <></>
        )}
      </View>

      {/* contactttttttttttttttttttttt */}
      <View style={{ position: "relative" }}>
        <Pressable
          onHoverIn={() => {
            handleMouseEnter("contact");
          }}
          onHoverOut={() => {
            handleMouseLeave();
          }}
        >
          <TouchableOpacity
            style={[
              crudStyles.userHeader,
              {
                backgroundColor:
                  hoveredItems === "contact" ? "white" : "transparent",
              }]}
            onPress={() => {
              navigation.navigate("Contact");
              ToggleMenu({ screen: "Contacts", heading: "contacts" });
            }}
          >
            <Text
              style={{
                color:
                  hoveredItems === "contact" ? theme.colors.primary : "#fff",
                fontSize: 18,
              }}
            >
              Contacts{" "}
              {!visible.contacts ? (
                <AntDesign
                  name="down"
                  size={12}
                  color={
                    hoveredItems === "contact" ? theme.colors.primary : "#fff"
                  }
                />
              ) : (
                <AntDesign
                  name="up"
                  size={12}
                  color={
                    hoveredItems === "contact" ? theme.colors.primary : "#fff"
                  }
                />
              )}
            </Text>
          </TouchableOpacity>
        </Pressable>
        {visible.contacts ? (
          <View style={commanStyles.dropdown_menu}>
            <Pressable
              onHoverIn={() => handleMouseEnter("contact1")}
              onHoverOut={() => {
                handleMouseLeave();
              }}
            >
              <TouchableOpacity
                onPress={() =>
                  ToggleMenu({ screen: "Contacts", heading: "contacts" })
                }
                style={[
                  commanStyles.item,
                  {
                    backgroundColor:
                      hoveredItems === "contact1"
                        ? "white"
                        : theme.colors.primary,
                    paddingHorizontal: 5,
                  },
                ]}
              >
                <Text
                  style={{
                    color:
                      hoveredItems === "contact1"
                        ? theme.colors.primary
                        : "#fff",
                    fontSize: 16,
                  }}
                >
                  View Contacts
                </Text>
              </TouchableOpacity>
            </Pressable>
            <TouchableOpacity
              style={{ position: "relative" }}
            >
              <Pressable
                onHoverIn={() => handleMouseEnter("contact2")}
                onHoverOut={() => {
                  handleMouseLeave();
                }}
              >
                <TouchableOpacity
                  onPress={() => {
                    setIsRightIconVisible(!isRightIconVisible);
                    setIsSubmenuVisible(!isSubmenuVisible);
                  }}
                  style={[
                    commanStyles.item,
                    {
                      backgroundColor:
                        hoveredItems === "contact2"
                          ? "white"
                          : theme.colors.primary,
                      paddingHorizontal: 5,
                    },
                  ]}
                >
                  <Text
                    style={{
                      color:
                        hoveredItems === "contact2"
                          ? theme.colors.primary
                          : "#fff",
                      fontSize: 16,
                    }}
                  >
                    Recently Viewed
                  </Text>

                  <TouchableOpacity style={{ position: "absolute", left: 132 }}>
                    {isRightIconVisible ? (
                      <View style={{ marginLeft: 10 }}>
                        <Entypo
                          name="chevron-right"
                          size={24}
                          color={
                            hoveredItems === "contact2"
                              ? theme.colors.primary
                              : "#fff"
                          }
                        />
                      </View>
                    ) : (
                      <View style={{ marginLeft: 10 }}>
                        <Entypo
                          name="chevron-down"
                          size={24}
                          color={
                            hoveredItems === "contact2"
                              ? theme.colors.primary
                              : "#fff"
                          }
                        />
                      </View>
                    )}
                  </TouchableOpacity>
                </TouchableOpacity>
              </Pressable>

              {!isRightIconVisible && isSubmenuVisible && (
                <View style={commanStyles.dropdown_submenu}>
                  <Pressable
                    onHoverIn={() => handleMouseEnter("contact21")}
                    onHoverOut={() => {
                      handleMouseLeave();
                    }}
                  >
                    <TouchableOpacity
                      style={[
                        commanStyles.item,
                        {
                          backgroundColor:
                            hoveredItems === "contact21"
                              ? "white"
                              : theme.colors.primary,
                          paddingHorizontal: 5,
                        },
                      ]}
                    >
                      <Text
                        style={{
                          color:
                            hoveredItems === "contact21"
                              ? theme.colors.primary
                              : "#fff",
                          fontSize: 16,
                        }}
                      >
                        Item 1
                      </Text>
                    </TouchableOpacity>
                  </Pressable>
                  <Pressable
                    onHoverIn={() => {
                      handleMouseEnter("contact22");
                    }}
                    onHoverOut={() => {
                      handleMouseLeave();
                    }}
                  >
                    <TouchableOpacity
                      style={[
                        commanStyles.item,
                        {
                          backgroundColor:
                            hoveredItems === "contact22"
                              ? "white"
                              : theme.colors.primary,
                          paddingHorizontal: 5,
                        },
                      ]}
                    >
                      <Text
                        style={{
                          color:
                            hoveredItems === "contact22"
                              ? theme.colors.primary
                              : "#fff",
                          fontSize: 16,
                        }}
                      >
                        Item 2
                      </Text>
                    </TouchableOpacity>
                  </Pressable>
                </View>
              )}
            </TouchableOpacity>
          </View>
        ) : (
          <></>
        )}
      </View>

      {/* Documentttttttt */}
      <View style={{ position: "relative" }}>
        <Pressable
          onHoverIn={() => {
            handleMouseEnter("document");
            // ToggleMenuOnHover("lead");
          }}
          onHoverOut={() => {
            // ToggleMenuHoverOut("lead");
            handleMouseLeave();
          }}
        >
          <TouchableOpacity
            style={[
              crudStyles.userHeader, {
                backgroundColor:
                  hoveredItems === "document" ? "white" : "transparent",
              }]}
            onPress={() => {
              navigation.navigate("Documents");
              ToggleMenu({ screen: "Documents", heading: "document" });
            }}
          >
            <Text
              style={{
                color: hoveredItems === "document" ? theme.colors.primary : "#fff",
                fontSize: 18,
              }}
            >
              Documents{" "}
              {!visible.document ? (
                <AntDesign
                  name="down"
                  size={12}
                  color={
                    hoveredItems === "document" ? theme.colors.primary : "#fff"
                  }
                />
              ) : (
                <AntDesign
                  name="up"
                  size={12}
                  color={
                    hoveredItems === "document" ? theme.colors.primary : "#fff"
                  }
                />
              )}
            </Text>
          </TouchableOpacity>
        </Pressable>

        {visible.document ? (
          <View style={commanStyles.dropdown_menu}>
            <Pressable
              onHoverIn={() => {
                handleMouseEnter("document1");
              }}
              onHoverOut={() => {
                handleMouseLeave();
              }}
            >
              <TouchableOpacity
                onPress={() => ToggleMenu({ screen: "Documents", heading: "document" })}
                style={[
                  commanStyles.item,
                  {
                    backgroundColor:
                      hoveredItems === "document1" ? "white" : theme.colors.primary,
                    paddingHorizontal: 5,
                  },
                ]}
              >
                <Text
                  style={{
                    color:
                      hoveredItems === "document1" ? theme.colors.primary : "#fff",
                    fontSize: 16,
                  }}
                >
                  View Documents
                </Text>
              </TouchableOpacity>
            </Pressable>
            <TouchableOpacity
              style={[{ position: "relative" }]}
            >
              <Pressable
                onHoverIn={() => {
                  handleMouseEnter("document2");
                }}
                onHoverOut={() => {
                  handleMouseLeave();
                }}
              >
                <TouchableOpacity
                  onPress={() => {
                    setIsRightIconVisible(!isRightIconVisible);
                    setIsSubmenuVisible(!isSubmenuVisible);
                  }}
                  style={[
                    commanStyles.item,
                    {
                      backgroundColor:
                        hoveredItems === "document2"
                          ? "white"
                          : theme.colors.primary,
                      paddingHorizontal: 5,
                    },
                  ]}
                >
                  <Text
                    style={{
                      color:
                        hoveredItems === "document2"
                          ? theme.colors.primary
                          : "#fff",
                      fontSize: 16,
                    }}
                  >
                    Recently Viewed
                  </Text>

                  <TouchableOpacity style={{ position: "absolute", left: 132 }}>
                    {isRightIconVisible ? (
                      <View style={{ marginLeft: 10 }}>
                        <Entypo
                          name="chevron-right"
                          size={24}
                          color={
                            hoveredItems === "document2"
                              ? theme.colors.primary
                              : "#fff"
                          }
                        />
                      </View>
                    ) : (
                      <View style={{ marginLeft: 10 }}>
                        <Entypo
                          name="chevron-down"
                          size={24}
                          color={
                            hoveredItems === "document2"
                              ? theme.colors.primary
                              : "#fff"
                          }
                        />
                      </View>
                    )}
                  </TouchableOpacity>
                </TouchableOpacity>
              </Pressable>
              {!isRightIconVisible && isSubmenuVisible && (
                <View style={commanStyles.dropdown_submenu}>
                  <Pressable
                    onHoverIn={() => {
                      handleMouseEnter("document21");
                    }}
                    onHoverOut={() => {
                      handleMouseLeave();
                    }}
                  >
                    <TouchableOpacity
                      style={[
                        commanStyles.item,
                        {
                          backgroundColor:
                            hoveredItems === "document21"
                              ? "white"
                              : theme.colors.primary,
                          paddingHorizontal: 5,
                        },
                      ]}
                    >
                      <Text
                        style={{
                          color:
                            hoveredItems === "document21"
                              ? theme.colors.primary
                              : "#fff",
                          fontSize: 16,
                        }}
                      >
                        Item 1
                      </Text>
                    </TouchableOpacity>
                  </Pressable>
                  <Pressable
                    onHoverIn={() => {
                      handleMouseEnter("document22");
                    }}
                    onHoverOut={() => {
                      handleMouseLeave();
                    }}
                  >
                    <TouchableOpacity
                      style={[
                        commanStyles.item,
                        {
                          backgroundColor:
                            hoveredItems === "document22"
                              ? "white"
                              : theme.colors.primary,
                          paddingHorizontal: 5,
                        },
                      ]}
                    >
                      <Text
                        style={{
                          color:
                            hoveredItems === "document22"
                              ? theme.colors.primary
                              : "#fff",
                          fontSize: 16,
                        }}
                      >
                        Item 2
                      </Text>
                    </TouchableOpacity>
                  </Pressable>
                </View>
              )}
            </TouchableOpacity>
          </View>
        ) : (
          <></>
        )}
      </View>
    </View>
  )
};
