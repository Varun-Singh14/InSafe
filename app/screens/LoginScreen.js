import React, { useState } from 'react';
import { View, Text, Button, ScrollView, SafeAreaView, TextInput, TouchableWithoutFeedback, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import colors from '../config/colors';
import SPACING from '../config/SPACING';
import { firebase } from '../../firebaseConnection';


const LoginScreen = () => {
    const navigation = useNavigation();

    const [name, setName] = useState('');
    const [password, setPassword] = useState('');

    const [isLoginSuccessful, setIsLoginSuccessful] = useState(false);

    const handleLogin = () => {
        setIsLoginSuccessful(true);
        navigation.navigate('Main');
    };

    const insertData = () => {
        firebase.database().ref('users/' + name).set({
            fname: name,
            fpass: password,
        });
    }


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
                                        onChangeText={(text) => setName(text)}
                                        value={name}
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
                                        onChangeText={(text) => setPassword(text)}
                                        value={password}
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
                                    onPress={insertData} >
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
