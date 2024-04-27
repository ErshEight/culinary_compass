import React from "react";
import { View, Text, StyleSheet } from "react-native";

const RecipeDetailScreen = ({ route }) => {
    const { recipeId } = route.params;

    return (
        <View style={styles.container}>
            <Text>Recipe Detail Screen</Text>
            <Text>Recipe ID: {recipeId}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default RecipeDetailScreen;
