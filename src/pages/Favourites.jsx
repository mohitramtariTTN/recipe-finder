import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Favourites = ({ favoriteRecipes }) => {
    const [favoriteRecipeDetails, setFavoriteRecipeDetails] = useState([]);
    const fetchRecipeDetails = async (recipeId) => {
        try {
            const response = await axios.get(`https://api.spoonacular.com/recipes/${recipeId}/information?apiKey=25d021b92fb24c668d22da74bdf81f5e`);
            return response.data;
        } catch (error) {
            console.error('Error fetching recipe details:', error);
            return null;
        }
    };

    useEffect(() => {
        // Fetch details of favorite recipes when component mounts
        const fetchFavoriteRecipeDetails = async () => {
            const details = await Promise.all(
                favoriteRecipes?.map(async (recipe) => {
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
            {favoriteRecipeDetails?.map((recipe) => (
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
