const API_KEY = 'fb17afc89ff8403b8f085f07ff479ed9';

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