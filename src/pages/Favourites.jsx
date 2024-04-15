import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Favourites = ({ favoriteRecipes }) => {
    // State to store details of favorite recipes
    const [favoriteRecipeDetails, setFavoriteRecipeDetails] = useState([]);

    // Function to fetch recipe details by ID
    const fetchRecipeDetails = async (recipeId) => {
        try {
            const response = await axios.get(`https://api.example.com/recipes/${recipeId}`); // Replace with your API endpoint
            return response.data; // Assuming API returns the recipe details
        } catch (error) {
            console.error('Error fetching recipe details:', error);
            return null;
        }
    };

    useEffect(() => {
        // Fetch details of favorite recipes when component mounts
        const fetchFavoriteRecipeDetails = async () => {
            const details = await Promise.all(
                favoriteRecipes.map(async (recipe) => {
                    const recipeDetails = await fetchRecipeDetails(recipe.id);
                    return { ...recipe, details: recipeDetails };
                })
            );
            setFavoriteRecipeDetails(details);
        };

        fetchFavoriteRecipeDetails();
    }, [favoriteRecipes]);

    return (
        <div>
            <h1>Favourites</h1>
            {favoriteRecipeDetails.map((recipe) => (
                <div key={recipe.id}>
                    <h2>{recipe.details.title}</h2>
                    {/* Render other details of the recipe */}
                    <img src={recipe.details.image} alt={recipe.details.title} />
                    <p>{recipe.details.instructions}</p>
                    {/* You can render more details as needed */}
                </div>
            ))}
        </div>
    );
};

export default Favourites;
