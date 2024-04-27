import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import SearchBar from "../components/SearchBar.js";
import RoundedButton from "../components/RoundedButton.js"
import { useNavigation } from "@react-navigation/native";

const RecipeListScreen = () => {

    const navigation = useNavigation();

    // Placeholder recipe data (you can replace it with actual data later)
    const recipes = [
        { id: 1, title: "Example 1" },
        { id: 2, title: "Example 2" },
        { id: 3, title: "Example 3" },
        { id: 4, title: "Example 4" },
        { id: 5, title: "Example 5" },
        { id: 6, title: "Example 6" },
        { id: 7, title: "Example 7" },
        { id: 8, title: "Example 8" },
        { id: 9, title: "Example 9" },
        { id: 10, title: "Example 10" },
        { id: 11, title: "Example 11" },
        { id: 12, title: "Example 12" },
        // Add more recipe items as needed
    ];


    return (
        <View style={styles.container}>
            <SearchBar />
            <ScrollView contentContainerStyle={styles.content}>
                <View style={styles.recipeContainer}>
                    {recipes.map((recipe, index) => (
                        <TouchableOpacity key={recipe.id} style={styles.recipeButton}>
                            <Text style={styles.recipeTitle}>{recipe.title}</Text>
                        </TouchableOpacity>
                    ))}
                </View>
            </ScrollView>
            <View style={styles.bottomButtons}>
                <TouchableOpacity onPress={() => navigation.navigate('Favorite')} />
                <RoundedButton title="Home" onPress={() => navigation.navigate('Home')} />
                <RoundedButton title="Profile" onPress={() => navigation.navigate('Profile')} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    content: {
        flexGrow: 1,
        paddingVertical: 10,
    },
    recipeContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
    },
    recipeButton: {
        width: '48%', // Adjust as needed for spacing between items
        aspectRatio: 1, // Square button
        backgroundColor: '#e0e0e0', // Placeholder color
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10,
        borderRadius: 10,
    },
    recipeTitle: {
        fontSize: 14, // Smaller font size for titles
        fontWeight: 'bold',
    },
    bottomButtons: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 'auto', // Push buttons to the bottom
        marginBottom: 20, // Add some space at the bottom
    },
});

export default RecipeListScreen;