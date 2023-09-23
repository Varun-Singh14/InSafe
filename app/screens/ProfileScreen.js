import React, { useState } from 'react';
import { View, TextInput, Text, ScrollView, SafeAreaView, Image, ImageBackground } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import colors from '../config/colors';

const ProfileScreen = () => {

    return (
        <>
            <ScrollView
                style={{
                    backgroundColor: colors.white
                }}
            >
                <SafeAreaView>
                    <View>
                        <View
                            style={{
                                alignItems: 'center',
                                marginTop: 100,
                            }}
                        >
                            <View
                                style={{
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    padding: 2,
                                    borderColor: colors.primary,
                                    borderWidth: 2,
                                    borderRadius: 50,
                                    height: 160,
                                    width: 160,
                                }}
                            >
                                <ImageBackground
                                    source={require('../../assets/images/ProfilePic.jpg')}
                                    style={{
                                        width: 150,
                                        height: 150,
                                        borderRadius: 50,
                                        elevation: 10,
                                        overflow: 'hidden',
                                    }}
                                />
                            </View>
                        </View>
                        <View
                            style={{
                                marginHorizontal: 50,
                            }}
                        >
                            <View
                                style={{
                                    alignItems: 'center',
                                    justifyContent: 'space-between',
                                    flex: 1,
                                    flexDirection: 'row',
                                    marginTop: 50,
                                }}
                            >
                                <Text
                                    style={{
                                        fontFamily: "Ubuntu-Medium",
                                        fontSize: 16,
                                        color: colors.dark,
                                        width: 90,
                                    }}
                                >
                                    Name
                                </Text>
                                <Text
                                    style={{
                                        fontFamily: "Ubuntu-Medium",
                                        fontSize: 16,
                                        color: colors.dark,
                                    }}
                                >
                                    :
                                </Text>
                                <Text
                                    style={{
                                        fontFamily: "Ubuntu-Medium",
                                        fontSize: 16,
                                        color: colors.primary,
                                    }}
                                >
                                    Catalyn Stark
                                </Text>
                            </View>
                            <View
                                style={{
                                    alignItems: 'center',
                                    justifyContent: 'space-between',
                                    flex: 1,
                                    flexDirection: 'row',
                                    marginVertical: 20,
                                }}
                            >
                                <Text
                                    style={{
                                        fontFamily: "Ubuntu-Medium",
                                        fontSize: 16,
                                        color: colors.dark,
                                    }}
                                >
                                    Username
                                </Text>
                                <Text
                                    style={{
                                        fontFamily: "Ubuntu-Medium",
                                        fontSize: 16,
                                        color: colors.dark,
                                    }}
                                >
                                    :
                                </Text>
                                <Text
                                    style={{
                                        fontFamily: "Ubuntu-Medium",
                                        fontSize: 16,
                                        color: colors.primary,
                                    }}
                                >
                                    20MIS11XX
                                </Text>
                            </View>
                            <View
                                style={{
                                    alignItems: 'center',
                                    justifyContent: 'space-between',
                                    flex: 1,
                                    flexDirection: 'row',
                                }}
                            >
                                <Text
                                    style={{
                                        fontFamily: "Ubuntu-Medium",
                                        fontSize: 16,
                                        color: colors.dark,
                                    }}
                                >
                                    Phone Number
                                </Text>
                                <Text
                                    style={{
                                        fontFamily: "Ubuntu-Medium",
                                        fontSize: 16,
                                        color: colors.dark,
                                    }}
                                >
                                    :
                                </Text>
                                <Text
                                    style={{
                                        fontFamily: "Ubuntu-Medium",
                                        fontSize: 16,
                                        color: colors.primary,
                                    }}
                                >
                                    +91-7989878989
                                </Text>
                            </View>
                            <View>
                                <TouchableOpacity
                                    style={{
                                        backgroundColor: colors.primary,
                                        borderRadius: 8,
                                        padding: 12,
                                        alignItems: 'center',
                                        marginTop: 80,
                                    }}
                                >
                                    <Text style={{ color: 'white', fontSize: 16, fontFamily: "Ubuntu-Medium" }}>Sign out</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </SafeAreaView>
            </ScrollView>
        </>
    );
};

export default ProfileScreen;
