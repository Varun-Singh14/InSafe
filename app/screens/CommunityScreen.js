import React from 'react';
import { View, Text } from 'react-native';
import styles from '../config/styles';

const CommunityScreen = () => {
    return (
        <View style={{ flex: 1 }}>
            <Text
                style={styles.customFontBold}
            >Hello, Community</Text>
        </View>
    );
}

export default CommunityScreen;