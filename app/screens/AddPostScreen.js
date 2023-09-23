import React, { useState } from 'react';
import { View, TextInput, Text, ScrollView, SafeAreaView } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import colors from '../config/colors';

const AddPostScreen = () => {
    const [postText, setPostText] = useState('');

    const handlePostTextChange = (text) => {
        setPostText(text);
    };

    const handlePost = () => {
        console.log('Posted text:', postText);
    };

    return (
        <ScrollView
            style={{
                backgroundColor: colors.white
            }}
        >
            <SafeAreaView>
                <View>
                    <View style={{ padding: 16 }}>
                        <TextInput
                            style={{
                                borderRadius: 8,
                                padding: 10,
                                marginBottom: 16,
                                fontFamily: "Ubuntu-Regular",
                                fontSize: 16,
                                color: colors.dark,
                            }}
                            placeholder="What's happening..."
                            value={postText}
                            onChangeText={handlePostTextChange}
                            multiline={true}
                            numberOfLines={8}
                            textAlignVertical='top'
                        />
                    </View>
                    <View
                        style={{
                            padding: 16
                        }}
                    >
                        <Text
                            style={{
                                fontFamily: "Ubuntu-Medium",
                                fontSize: 14,
                                color: colors.dark,
                            }}
                        >
                            Upload what's happening...
                        </Text>
                        <View
                            style={{
                                marginTop: 16,
                                alignItems: 'center',
                                justifyContent: 'center',
                                width: 318,
                                height: 295,
                                borderColor: colors.primary,
                                borderWidth: 1,
                                borderRadius: 6,
                                backgroundColor: colors.areaShade,
                            }}
                        >

                            <TouchableOpacity
                                style={{
                                    borderRadius: 8,
                                    padding: 12,
                                    alignItems: 'center',
                                    borderColor: colors.primary,
                                    borderWidth: 1,
                                    borderRadius: 6,
                                }}
                                onPress={handlePost}
                            >
                                <Text style={{ color: colors.primary, fontFamily: "Ubuntu-Medium", fontSize: 16 }}>Select Images</Text>
                            </TouchableOpacity>
                        </View>

                        <TouchableOpacity
                            style={{
                                backgroundColor: colors.primary,
                                borderRadius: 8,
                                padding: 12,
                                alignItems: 'center',
                                marginTop:21,
                            }}
                            onPress={handlePost}
                        >
                            <Text style={{ color: 'white', fontSize: 16, fontFamily: "Ubuntu-Medium" }}>Post</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </SafeAreaView>
        </ScrollView>
    );
};

export default AddPostScreen;
