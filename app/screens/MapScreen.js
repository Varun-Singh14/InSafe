import React from 'react';
import { Button, PermissionsAndroid, View, Dimensions, Text } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import { WebView } from 'react-native-webview';
import Icon from 'react-native-vector-icons/MaterialIcons';
import colors from '../config/colors';

const { height, width } = Dimensions.get("window");
const requestLocation = async () => {
    try {
        const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
            {
                title: 'Location Permission',
                message:
                    'Approve Location Permission',
                buttonNeutral: 'Ask Me Later',
                buttonNegative: 'Cancel',
                buttonPositive: 'OK',
            },
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
            console.log('You can use the location');
        } else {
            console.log('Location permission denied');
        }
    } catch (err) {
        console.warn(err);
    }
};

const MapScreen = () => {
    return (
            <WebView source={{ uri: 'https://surya152002.github.io/sih/' }} />
        //     <View
        //         style={{
        //             backgroundColor: colors.white,
        //             flex:1,
        //             flexDirection:'row',
        //             justifyContent: 'space-between',
        //         }}
        //     >
        //         <View>
        //             <Icon name="description" size={30} color={colors.primary} />
        //             <Text
        //                 style={{
        //                     marginTop:10,
        //                     alignItems: 'center',
        //                     fontFamily: "Ubuntu-Medium",
        //                     fontSize:14,
        //                     color: colors.primary,
        //                 }}
        //             >
        //                 File a complaint
        //             </Text>
        //         </View>
        //         <View>
        //             <Icon name="description" size={30} color={colors.primary} />
        //             <Text
        //                 style={{
        //                     marginTop:10,
        //                     alignItems: 'center',
        //                     fontFamily: "Ubuntu-Medium",
        //                     fontSize:14,
        //                     color: colors.primary,
        //                 }}
        //             >
        //                 File a complaint
        //             </Text>
        //         </View>
        //     </View>
        // </View>
    );
};

export default MapScreen;