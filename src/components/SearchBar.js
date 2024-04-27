import React from "react";
import { View, TextInput, StyleSheet } from "react-native";

const SearchBar = () => {
    return (
        <View style={styles.container}>
            <TextInput
                placeholder="Search..."
                style={styles.input}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 20,
        marginTop: 20,
        marginBottom: 10,
    },
    input: {
        height: 40,
        backgroundColor: '#fff',
        paddingHorizontal: 10,
        borderRadius: 8,
    },
});

export default SearchBar;
