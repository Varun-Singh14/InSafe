import React, {useState, useEffect} from 'react';
import { View, Text } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import colors from '../config/colors';
import Icon from 'react-native-vector-icons/MaterialIcons';

const SOSScreen = () => {
    return (
        <>
            <ScrollView
                style={{
                    backgroundColor: colors.white,
                }}
            >
                <SafeAreaView>
                    <View>
                        <View>
                            <View
                                style={{
                                    height: 439,
                                    width: 360,
                                    backgroundColor: colors.primary,
                                    borderBottomRightRadius: 200,
                                    borderBottomLeftRadius: 200,
                                    alignItems: 'center',
                                    elevation: 10,
                                }}
                            >
                                <Text
                                    style={{
                                        fontSize: 32,
                                        fontFamily: "Ubuntu-Medium",
                                        color: colors.white,
                                        marginTop: 20,
                                    }}
                                >
                                    Catelyn Stark
                                </Text>
                                <Text
                                    style={{
                                        fontSize: 16,
                                        fontFamily: "Ubuntu-Medium",
                                        color: colors.white,
                                    }}
                                >
                                    online
                                </Text>
                                <TouchableOpacity
                                    style={{
                                        width: 294,
                                        height: 294,
                                        backgroundColor: colors.white,
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        borderRadius: 300,
                                        marginTop: 30,
                                        elevation: 10,
                                    }}
                                >
                                    <Icon name="sos" size={159} color={colors.primary} />
                                </TouchableOpacity>
                            </View>
                            <View
                                style={{
                                    paddingHorizontal: 22,
                                    marginVertical: 16
                                }}
                            >
                                <Text
                                    style={{
                                        fontFamily: "Ubuntu-Medium",
                                        fontSize: 16,
                                        color: colors.dark,
                                    }}
                                >
                                    Current Status
                                </Text>
                                <View
                                    style={{
                                        flex: 1,
                                        flexDirection: 'row',
                                        justifyContent: 'space-between',
                                        marginTop: 16,
                                        marginHorizontal: 10,
                                    }}
                                >
                                    <View
                                        style={{
                                            alignItems: 'center'
                                        }}>
                                        <Icon name="signal-cellular-alt" size={24} color={colors.dark} />
                                        <View
                                            style={{
                                                alignItems: 'center'
                                            }}
                                        >
                                            <Text
                                                style={{
                                                    fontSize: 14,
                                                    fontFamily: "Ubuntu-Regular",
                                                    color: colors.dark,
                                                    marginTop: 5,
                                                }}
                                            >
                                                Signal
                                            </Text>
                                            <Text
                                                style={{
                                                    fontSize: 12,
                                                    fontFamily: "Ubuntu-Light",
                                                    color: colors.dark,
                                                }}
                                            >
                                                Medium
                                            </Text>
                                        </View>
                                    </View>
                                    <View
                                        style={{
                                            alignItems: 'center'
                                        }}>
                                        <Icon name="battery-5-bar" size={24} color={colors.dark} />
                                        <View
                                            style={{
                                                alignItems: 'center'
                                            }}
                                        >
                                            <Text
                                                style={{
                                                    fontSize: 14,
                                                    fontFamily: "Ubuntu-Regular",
                                                    color: colors.dark,
                                                    marginTop: 5,
                                                }}
                                            >
                                                Battery
                                            </Text>
                                            <Text
                                                style={{
                                                    fontSize: 12,
                                                    fontFamily: "Ubuntu-Light",
                                                    color: colors.dark,
                                                }}
                                            >
                                                43%
                                            </Text>
                                        </View>
                                    </View>
                                    <View
                                        style={{
                                            alignItems: 'center'
                                        }}>
                                        <Icon name="vibration" size={24} color={colors.dark} />
                                        <View
                                            style={{
                                                alignItems: 'center'
                                            }}
                                        >
                                            <Text
                                                style={{
                                                    fontSize: 14,
                                                    fontFamily: "Ubuntu-Regular",
                                                    color: colors.dark,
                                                    marginTop: 5,
                                                }}
                                            >
                                                Phone
                                            </Text>
                                            <Text
                                                style={{
                                                    fontSize: 12,
                                                    fontFamily: "Ubuntu-Light",
                                                    color: colors.dark,
                                                }}
                                            >
                                                silent
                                            </Text>
                                        </View>
                                    </View>
                                    <View
                                        style={{
                                            alignItems: 'center'
                                        }}>
                                        <Icon name="directions-walk" size={24} color={colors.dark} />
                                        <View
                                            style={{
                                                alignItems: 'center'
                                            }}
                                        >
                                            <Text
                                                style={{
                                                    fontSize: 14,
                                                    fontFamily: "Ubuntu-Regular",
                                                    color: colors.dark,
                                                    marginTop: 5,
                                                }}
                                            >
                                                Walking
                                            </Text>
                                            <Text
                                                style={{
                                                    fontSize: 12,
                                                    fontFamily: "Ubuntu-Light",
                                                    color: colors.dark,
                                                }}
                                            >
                                                5.3 km/h
                                            </Text>
                                        </View>
                                    </View>
                                </View>
                            </View>

                            <View
                                style={{
                                    paddingHorizontal: 22,
                                    marginVertical: 16
                                }}
                            >
                                <Text
                                    style={{
                                        fontFamily: "Ubuntu-Medium",
                                        fontSize: 16,
                                        color: colors.dark,
                                    }}
                                >
                                    You are on your way
                                </Text>
                                <View
                                    style={{
                                        paddingHorizontal: 20,
                                        marginTop: 16,
                                    }}
                                >
                                    <View
                                        style={{
                                            flex: 1,
                                            flexDirection: 'row',
                                            alignItems: 'center'
                                        }}
                                    >
                                        <Icon name="location-on" size={24} color={colors.dark} />
                                        <View
                                            style={{
                                                marginLeft: 9,
                                            }}
                                        >
                                            <Text
                                                style={{
                                                    fontFamily: "Ubuntu-Medium",
                                                    color: colors.dark,
                                                }}
                                            >
                                                Live Location
                                            </Text>
                                            <Text>
                                                VIT University, Chennai
                                            </Text>
                                        </View>
                                    </View>
                                    <View
                                        style={{
                                            flex: 1,
                                            flexDirection: 'row',
                                            alignItems: 'center',
                                            marginTop: 16,
                                        }}
                                    >
                                        <Icon name="route" size={24} color={colors.dark} />
                                        <View
                                            style={{
                                                marginLeft: 9,
                                            }}
                                        >
                                            <Text
                                                style={{
                                                    fontFamily: "Ubuntu-Medium",
                                                    color: colors.dark,
                                                }}
                                            >
                                                Destination unknown
                                            </Text>
                                            <Text>
                                                Add location for recommended route
                                            </Text>
                                        </View>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>
                </SafeAreaView>
            </ScrollView>
        </>
    )
}

export default SOSScreen