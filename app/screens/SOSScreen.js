import React, { useState, useEffect } from 'react';
import { View, Text, AppState } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import colors from '../config/colors';
import Icon from 'react-native-vector-icons/MaterialIcons';
import RingerMode from 'rn-ringer-mode';
import DeviceInfo from 'react-native-device-info';
import NetInfo from "@react-native-community/netinfo";



function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}

const SOSScreen = () => {

    const [ringerMode, setRingerMode] = useState('');
    const [appState, setAppState] = useState(AppState.currentState);

    const handleAppStateChange = (nextAppState) => {
        setAppState(nextAppState);
    };

    const getRingerMode = async () => {
        try {
            const mode = await RingerMode.getRingerMode();
            setRingerMode(capitalizeFirstLetter(mode));
        } catch (error) {
            console.error('Error getting ringer mode:', error);
        }
    };

    useEffect(() => {
        AppState.addEventListener('change', handleAppStateChange);
        getRingerMode();

        const ringerModeInterval = setInterval(getRingerMode, 5000);

        return () => {
            AppState.removeEventListener('change', handleAppStateChange);
            clearInterval(ringerModeInterval);
        };
    }, []);

    const [batteryInfo, setBatteryInfo] = useState({});

    const getBatteryInfo = async () => {
        try {
            const batteryLevel = await DeviceInfo.getBatteryLevel();
            if (typeof batteryLevel === 'number' && !isNaN(batteryLevel)) {
                const batteryInfoObject = (batteryLevel * 100).toFixed(0) + "%"
                setBatteryInfo(batteryInfoObject);
            } else {
                console.error('Invalid battery level:', batteryLevel);
            }
        } catch (error) {
            console.error('Error getting battery info:', error);
            setBatteryInfo({});
        }
    };

    useEffect(() => {
        // Fetch the initial battery info when the component mounts
        getBatteryInfo();

        // Periodically check the battery info (e.g., every 5 seconds)
        const batteryInfoInterval = setInterval(getBatteryInfo, 5000);

        // Clean up the interval when the component unmounts
        return () => {
            clearInterval(batteryInfoInterval);
        };
    }, []);



    const [signalStrength, setSignalStrength] = useState(null);

    const classifySignalStrength = (strength) => {
        if (strength >= -70) {
            return 'Good';
        } else if (strength >= -85) {
            return 'Average';
        } else {
            return 'Bad';
        }
    };

    const checkSignalStrength = async () => {
        try {
            const state = await NetInfo.fetch();
            if (state.type === 'cellular' && state.details) {
                const strength = state.details.signalStrength;
                setSignalStrength(strength);
            } else {
                setSignalStrength(null);
            }
        } catch (error) {
            console.error('Error getting signal strength:', error);
            setSignalStrength(null);
        }
    };

    useEffect(() => {
        checkSignalStrength();

        const signalStrengthInterval = setInterval(checkSignalStrength, 5000);

        return () => {
            clearInterval(signalStrengthInterval);
        };
    }, []);

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
                                                {/* Medium */}
                                                {signalStrength} dBm ({classifySignalStrength(signalStrength)})
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
                                                {JSON.stringify(batteryInfo, null, 2)}
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
                                                {ringerMode}
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

export default SOSScreen;