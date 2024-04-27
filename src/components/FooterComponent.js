import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const FooterButton = () => {
    const navigation = useNavigation();

    const goToHomeScreen = () => {
        navigation.navigate('Home');
    };

    return (
        <TouchableOpacity onPress={goToResultScreen} style={[styles.container]}>
            <Text style={[styles.text]}>Home</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#780000',
        width: 130,
        borderWidth: 4,
        borderRadius: 4,
        borderColor: '#780000',
    },

    text: {
        textAlign: 'center',
        color: '#fff',
        paddingHorizontal: 20,
        paddingVertical: 10,
        fontWeight: "bold",
    },
});

export default FooterButton;