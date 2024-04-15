const SECOND_API_KEY = '94c1ba5547854be080032f565232a847';
const API_KEY = 'e412d6d44ab640b7b70027ba380553d6';

export async function fetchRecipes(filter) {
    const { query, limit } = filter;
    const url = `https://api.spoonacular.com/recipes/complexSearch?query=${query}&number=${limit}&apiKey=${API_KEY}`;

    const response = await fetch(url)

    const data = await response.json();

    return data?.results;
}

export async function fetchRecipe(id) {
    const url = `https://api.spoonacular.com/recipes/${id}/information?apiKey=${API_KEY}`

    const response = await fetch(url)

    const data = await response.json();

    return data;
}

export async function fetchSimilarRecipes(id, limit) {
    const url = `https://api.spoonacular.com/recipes/${id}/similar?number=5&apiKey=${API_KEY}`;
    const response = await fetch(url)

    const data = await response.json();

    return data;
}