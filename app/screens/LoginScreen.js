import React, { useState } from 'react';
import { View, Text, Button, ScrollView, SafeAreaView, TextInput, TouchableWithoutFeedback, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import colors from '../config/colors';
import SPACING from '../config/SPACING';

const LoginScreen = () => {
    const navigation = useNavigation();

    const [text1, setText1] = useState('');
    const [text2, setText2] = useState('');

    const handleTextChange1 = (newText) => {
        setText1(newText);
    };

    const handleTextChange2 = (newText) => {
        setText2(newText);
    };

    const [isLoginSuccessful, setIsLoginSuccessful] = useState(false);

    const handleLogin = () => {
        // Implement your login logic here.
        // If login is successful, set isLoginSuccessful to true.
        // For example, you can use AsyncStorage or a state management library like Redux.
        setIsLoginSuccessful(true);

        // Navigate to the main page.
        navigation.navigate('Main');
    };


    const [isTextInput1Focused, setIsTextInput1Focused] = useState(false);
    const [isTextInput2Focused, setIsTextInput2Focused] = useState(false);

    const handleTextInput1Focus = () => {
        setIsTextInput1Focused(true);
        setIsTextInput2Focused(false);
    };

    const handleTextInput2Focus = () => {
        setIsTextInput2Focused(true);
        setIsTextInput1Focused(false);
    };

    const handleBlur = () => {
        setIsTextInput1Focused(false);
        setIsTextInput2Focused(false);
    };


    return (
        <>
            <ScrollView
                style={{
                    paddingTop: SPACING * 4,
                }}>
                <SafeAreaView>
                    <TouchableWithoutFeedback>
                        <View
                            style={{
                                flex: 1,
                                justifyContent: 'center',
                            }}>
                            <View
                                style={{
                                    marginHorizontal: 21,
                                    paddingTop: 60,
                                }}
                            >
                                <View>
                                    <Text
                                        style={{
                                            fontSize: 36,
                                            color: colors.primary,
                                            fontFamily: "Ubuntu-Bold"
                                        }}
                                    >Login</Text>

                                    <Text
                                        style={{
                                            fontSize: 16,
                                            color: colors.gray,
                                            marginTop: 10,
                                            fontFamily: "Ubuntu-Medium"
                                        }}
                                    >Please sign in to continue</Text>
                                </View>
                                <View
                                    style={{
                                        marginTop: 16,
                                    }}
                                >
                                    <TextInput
                                        style={[
                                            {
                                                width: 317,
                                                height: 46,
                                                borderColor: 'gray',
                                                borderWidth: 2,
                                                padding: 8,
                                                marginBottom: 16,
                                                borderRadius: 8,
                                                paddingHorizontal: 14,
                                                fontFamily: "Ubuntu-Medium",
                                            },
                                            { borderColor: isTextInput1Focused ? colors.primary : colors.gray }
                                        ]}
                                        onFocus={handleTextInput1Focus}
                                        onBlur={handleBlur}
                                        placeholder="Username"
                                        onChangeText={handleTextChange1}
                                        value={text1}
                                    />
                                    <TextInput
                                        style={[
                                            {
                                                width: 317,
                                                height: 46,
                                                borderColor: 'gray',
                                                borderWidth: 2,
                                                padding: 8,
                                                marginBottom: 12,
                                                borderRadius: 8,
                                                paddingHorizontal: 14,
                                                fontFamily: "Ubuntu-Medium",
                                            },
                                            { borderColor: isTextInput2Focused ? colors.primary : colors.gray }
                                        ]}
                                        onFocus={handleTextInput2Focus}
                                        onBlur={handleBlur}
                                        placeholder="Password"
                                        onChangeText={handleTextChange2}
                                        value={text2}
                                    />
                                    <Text
                                        style={{
                                            fontSize: 16,
                                            color: colors.primary,
                                            marginBottom: 52,
                                            textAlign: 'right',
                                            fontFamily: "Ubuntu-Medium",
                                        }}
                                    >Forgot Password ?</Text>
                                </View>
                                <TouchableOpacity
                                    style={{
                                        width: 317,
                                        height: 46,
                                        backgroundColor: colors.primary,
                                        borderRadius: 8,
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                    }}
                                    onPress={handleLogin} >
                                    <Text
                                        style={{
                                            color: 'white',
                                            fontSize: 16,
                                            fontFamily: "Ubuntu-Medium",
                                        }}>
                                        Login
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </TouchableWithoutFeedback>
                </SafeAreaView>
            </ScrollView>
        </>
    );
};

export default LoginScreen;
