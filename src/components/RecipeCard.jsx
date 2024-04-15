import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as solidStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as regularStar } from '@fortawesome/free-regular-svg-icons';

const RecipeCard = ({ recipe, username }) => {
    const { id, title, image } = recipe;

    // State to manage favorite recipes
    const [favorites, setFavorites] = useState([]);

    // Function to toggle favorite status
    const toggleFavorite = (e) => {
        // Prevent the default behavior of the link
        e.preventDefault();
        
        // Check if recipe is already in favorites
        const index = favorites.findIndex(favorite => favorite.id === id);

        // If recipe is not in favorites, add it
        if (index === -1) {
            setFavorites([...favorites, { id, title }]);
            console.log(`Recipe ${title} added to favorites for user ${username}`);
        } else {
            // If recipe is already in favorites, remove it
            const updatedFavorites = [...favorites];
            updatedFavorites.splice(index, 1);
            setFavorites(updatedFavorites);
            console.log(`Recipe ${title} removed from favorites for user ${username}`);
        }
    };

    // Check if the recipe is already in favorites
    const isFavorite = favorites.some(favorite => favorite.id === id);

    return (
        <Link to={`/recipes/${id}`} className='w-full md:w-[220px]'>
            <div className='bg-gradient shadow w-full rounded-lg relative'>
                {/* Star icon */}
                <FontAwesomeIcon
                    icon={isFavorite ? solidStar : regularStar}
                    className="text-yellow-400 absolute top-2 right-2 cursor-pointer"
                    onClick={toggleFavorite}
                />
                {image == null ? (
                    <img
                        src="https://img.spoonacular.com/recipes/782585-312x231.jpg"
                        alt={title}
                        className='rounded-lg h-[200px] md:h-[150px] w-full'
                    />
                ) : (
                    <img
                        src={image}
                        alt={title}
                        className='rounded-lg h-[200px] md:h-[150px] w-full'
                    />
                )}
                <div className='p-3'>
                    <p className='text-white font-semibold'>{title}</p>
                </div>
            </div>
        </Link>
    );
};

export default RecipeCard;
