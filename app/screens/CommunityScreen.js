import React, { useState } from 'react';
import { Dimensions, View, Text, ScrollView, SafeAreaView, Image, TouchableOpacity } from 'react-native';
import styles from '../config/styles';
import colors from '../config/colors';
import Icon from 'react-native-vector-icons/MaterialIcons';

const { height, width } = Dimensions.get("window");

const CommunityScreen = () => {

    const [isFilled1, setIsFilled1] = useState(false);
    const [isFilled2, setIsFilled2] = useState(false);

    const handleIconPress1 = () => {
        setIsFilled1(!isFilled1);
    };

    const handleIconPress2 = () => {
        setIsFilled2(!isFilled2);
    };

    return (
        <>
            <ScrollView>
                <SafeAreaView>
                <View
                        style={{
                            borderColor: colors.separator,
                            borderBottomWidth: 2,
                        }}
                    >
                        <View>
                            <View
                                style={{
                                    flex: 1,
                                    height: 56,
                                    backgroundColor: colors.white,
                                    alignItems: 'center',
                                    flexDirection: 'row',
                                    paddingHorizontal: 21,
                                }}>
                                <Image
                                    source={require('../../assets/images/ProfilePic.jpg')}
                                    style={{
                                        width: 36,
                                        height: 36,
                                        borderRadius: 50,
                                    }}
                                />
                                <Text
                                    style={{
                                        width: 214,
                                        marginLeft: 12,
                                        fontSize: 18,
                                        fontFamily: "Ubuntu-Medium",
                                        color: colors.dark,
                                        fontFamily: "Ubuntu-Medium",
                                    }}
                                >
                                    Catelyn Stark
                                </Text>
                                <Icon name="more-horiz" size={30} color={colors.postIconDark} marginLeft={27} />
                            </View>
                            <View
                                style={{
                                    backgroundColor: colors.white
                                }}
                            >
                                <View
                                    style={{
                                        backgroundColor: colors.white,
                                    }}
                                >
                                    <Text
                                        style={{
                                            width: 318,
                                            fontFamily: "Ubuntu-Regular",
                                            fontSize: 16,
                                            color: colors.dark,
                                            marginHorizontal: 21,
                                            marginTop: 16,
                                            flexWrap: 'wrap',
                                            lineHeight: 20,
                                        }}>
                                        The best protection any women can have is courage. A Strong women doesn't need protection, but she deserves it.
                                    </Text>
                                    <Image
                                        source={require('../../assets/images/post.jpg')}
                                        style={{
                                            width: 318,
                                            height: 190,
                                            borderRadius: 6,
                                            marginHorizontal: 21,
                                            marginTop: 16,
                                        }}
                                    />
                                </View>
                                <View
                                    style={{
                                        flex: 1,
                                        height: 30,
                                        backgroundColor: colors.white,
                                        alignItems: 'center',
                                        flexDirection: 'row',
                                        paddingHorizontal: 21,
                                        marginVertical: 16,
                                        justifyContent: 'space-between',
                                        width: 88,
                                    }}
                                >
                                    <TouchableOpacity onPress={handleIconPress1}>
                                        <Icon
                                            name={isFilled1 ? 'favorite' : 'favorite-outline'} // Use your icon names here
                                            size={30}
                                            color={isFilled1 ? 'red' : colors.postIconDark} // Change colors as needed
                                        />
                                    </TouchableOpacity>
                                    <Icon name="chat-bubble-outline" size={30} color={colors.postIconDark} marginHorizontal={8} />
                                    <Icon name="send" size={30} color={colors.postIconDark} />
                                </View>
                            </View>
                        </View>
                    </View>
                    <View
                        style={{
                            borderColor: colors.separator,
                            borderBottomWidth: 2,
                        }}
                    >
                        <View>
                            <View
                                style={{
                                    flex: 1,
                                    height: 56,
                                    backgroundColor: colors.white,
                                    alignItems: 'center',
                                    flexDirection: 'row',
                                    paddingHorizontal: 21,
                                }}>
                                <Image
                                    source={require('../../assets/images/ProfilePic.jpg')}
                                    style={{
                                        width: 36,
                                        height: 36,
                                        borderRadius: 50,
                                    }}
                                />
                                <Text
                                    style={{
                                        width: 214,
                                        marginLeft: 12,
                                        fontSize: 18,
                                        fontFamily: "Ubuntu-Medium",
                                        color: colors.dark,
                                        fontFamily: "Ubuntu-Medium",
                                    }}
                                >
                                    Catelyn Stark
                                </Text>
                                <Icon name="more-horiz" size={30} color={colors.postIconDark} marginLeft={27} />
                            </View>
                            <View
                                style={{
                                    backgroundColor: colors.white
                                }}
                            >
                                <View
                                    style={{
                                        backgroundColor: colors.white,
                                    }}
                                >
                                    <Text
                                        style={{
                                            width: 318,
                                            fontFamily: "Ubuntu-Regular",
                                            fontSize: 16,
                                            color: colors.dark,
                                            marginHorizontal: 21,
                                            marginTop: 16,
                                            flexWrap: 'wrap',
                                            lineHeight: 20,
                                        }}>
                                        The best protection any women can have is courage. A Strong women doesn't need protection, but she deserves it.
                                    </Text>
                                    <Image
                                        source={require('../../assets/images/post.jpg')}
                                        style={{
                                            width: 318,
                                            height: 190,
                                            borderRadius: 6,
                                            marginHorizontal: 21,
                                            marginTop: 16,
                                        }}
                                    />
                                </View>
                                <View
                                    style={{
                                        flex: 1,
                                        height: 30,
                                        backgroundColor: colors.white,
                                        alignItems: 'center',
                                        flexDirection: 'row',
                                        paddingHorizontal: 21,
                                        marginVertical: 16,
                                        justifyContent: 'space-between',
                                        width: 88,
                                    }}
                                >
                                    <TouchableOpacity onPress={handleIconPress2}>
                                        <Icon
                                            name={isFilled2 ? 'favorite' : 'favorite-outline'} // Use your icon names here
                                            size={30}
                                            color={isFilled2 ? 'red' : colors.postIconDark} // Change colors as needed
                                        />
                                    </TouchableOpacity>
                                    <Icon name="chat-bubble-outline" size={30} color={colors.postIconDark} marginHorizontal={8} />
                                    <Icon name="send" size={30} color={colors.postIconDark} />
                                </View>
                            </View>
                        </View>
                    </View>
                </SafeAreaView>
            </ScrollView>
        </>
    );
}

export default CommunityScreen;