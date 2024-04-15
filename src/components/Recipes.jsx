import React, { useEffect, useState } from 'react';
import { BiSearchAlt2 } from 'react-icons/bi';
import Loading from './Loading';
import Searchbar from './SearchBar';
import RecipeCard from './RecipeCard';
import { fetchRecipes } from '../utils';
import Button from './Button';

const Recipes = () => {
    const [recipes, setRecipes] = useState([]);
    const [query, setQuery] = useState('');
    const [limit, setLimit] = useState(12);
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setQuery(e.target.value);
    };

    const fetchRecipe = async () => {
        try {
            setLoading(true);
            const data = await fetchRecipes({ query, limit });
            setRecipes(data);
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    };

    const handleSearchedRecipe = async (e) => {
        e.preventDefault();
        setLoading(true);
        setLimit(12);
        setRecipes([]); // Clear existing recipes
        await fetchRecipe(); // Fetch new recipes based on the search query
    };

    const showMore = async () => {
        setLoading(true);
        setLimit((prev) => prev + 8);
        await fetchRecipe();
    };

    useEffect(() => {
        fetchRecipe();
    }, []);

    return (
        <div className="w-full">
            <div className="w-full flex items-center justify-center pt-10 pb-5 px-0 md:px-10">
                <form className="w-full lg:w-2/4" onSubmit={handleSearchedRecipe}>
                    <Searchbar
                        placeholder="eg. Cake, Vegan, Chicken"
                        handleInputChange={handleChange}
                        rightIcon={<BiSearchAlt2 className="text-gray-600" onClick={handleSearchedRecipe} />}
                    />
                </form>
            </div>

            <div className="w-full  flex flex-wrap gap-10 px-0 lg:px-10 py-10">
                {recipes.map((item, index) => (
                    <RecipeCard recipe={item} key={index} />
                ))}
            </div>

            {loading && <Loading />}

            {!loading && recipes.length > 0 && (
                <div className="flex w-full items-center justify-center py-10">
                    <Button
                        title="Show More"
                        containerStyle="bg-green-800 text-white px-3 py-1 rounded-full text-sm"
                        handleClick={showMore}
                    />
                </div>
            )}

            {recipes.length === 0 && !loading && (
                <div className="text-white w-full items-center justify-center py-10">
                    <p className="text-center">No Recipe Found</p>
                </div>
            )}
        </div>
    );
};

export default Recipes;
