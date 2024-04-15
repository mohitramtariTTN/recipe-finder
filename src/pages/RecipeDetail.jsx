import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { fetchRecipe, fetchSimilarRecipes } from '../utils'
import Loading from '../components/Loading'
import Header from '../components/Header'
import { AiFillPushpin } from "react-icons/ai"
import RecipeCard from '../components/RecipeCard'
import { Banner1 } from '../images'


const RecipeDetail = () => {
  const [recipe, setRecipe] = useState(null)
  const [similarRecipes, setSimilarRecipes] = useState([])
  const [loading, setLoading] = useState(false)

  const { id } = useParams()

  const getRecipe = async (id) => {
    try {
      setLoading(true)
      const data = await fetchRecipe(id)
      setRecipe(data)
      const recommend = await fetchSimilarRecipes(id)
      setSimilarRecipes(recommend)
      setLoading(false)
    } catch (error) {
      console.log(error)

      setLoading(false)
    }
  }

  useEffect(() => {
    getRecipe(id)
  }, [id])


  if (loading) {
    return (
      <div className='w-full h-[100vh] flex items-center justify-center'>
        <Loading />
      </div>
    );
  }
  return (
    <div className='w-full'>
      <Header
        title={recipe?.label}
        image={Banner1}
      />

      <div className='w-full px-4 lg:px-20 pt-5'>

        {/* Recipe Name and Image */}
        <div className='flex flex-col items-center'>
          <p className='text-center text-green-500 text-3xl font-bold'>{recipe?.title}</p>
          <br></br>
        </div>


        <div className='flex gap-10 items-center justify-center px-4'>
          {/* Health Score */}
          <div className='flex flex-col justify-between'>
            <span className='text-white text-center border border-gray-500 py-1.5 px-2 rounded-full mb-2'>{recipe?.healthScore} </span>
            <p className='text-neutral-100 text-[12px] md:text-md'>HEALTH SCORE</p>
          </div>

          {/* Total Time */}
          <div className='flex flex-col justify-center'>
            <span className='text-white text-center border border-gray-500 py-1.5 rounded-full mb-2'>
              {recipe?.readyInMinutes}
            </span>
            <p className='text-neutral-100 text-[12px] md:text-md'>
              TOTAL TIME
            </p>
          </div>

          {/* Servings */}
          <div className='flex flex-col justify-center'>
            <span className='text-white text-center border border-gray-500 py-1.5 rounded-full mb-2'>
              {recipe?.servings}
            </span>
            <p className='text-neutral-100 text-[12px] md:text-md'>SERVINGS</p>
          </div>
        </div>

        {/* Rest of the Content */}
        {/* Left Side, Right Side, and Bottom Side */}
        <div className='w-full flex flex-col md:flex-row gap-8 py-20 pxx-4 md:px-10'>
          {/* LEFT SIDE */}
          <div className='w-full md:w-2/5 md:border-r border-slate-800 pr-1'>
            <div className='flex flex-col gap-5'>
              <p className='text-green-500 text-2xl underline'>Ingredients</p>
              {recipe?.extendedIngredients?.map((ingredient, index) => {
                return (
                  <p key={index} className='text-neutral-100 flex gap-2'>
                    <AiFillPushpin className='text-green-800 text-xl' /> {ingredient.original}
                  </p>
                );
              })}
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className='w-full md:w-3/5'>
            <div className='flex flex-col gap-5'>
              <p className='text-green-500 text-2xl underline'>Summary</p>
              <div className='text-neutral-100' dangerouslySetInnerHTML={{ __html: recipe?.summary }} />
              <p className='text-green-500 text-2xl underline'>Steps</p>
              {
                recipe?.analyzedInstructions[0]?.steps.map((step, index) => {
                  return (
                    <div key={index} className='flex gap-2 items-center'>
                      <div className='w-6 h-6'>
                        <AiFillPushpin className='text-green-800 text-xl' />
                      </div>
                      <p className='text-neutral-100'>{step.step}</p>
                    </div>
                  );
                })
              }
            </div>
          </div>
        </div>

        {/* BOTTOM SIDE */}
        <div className='w-full overflow-x-auto max-w-full'>
        <p className='text-green-500 text-2xl underline'>Similar Recipes</p>
          <div className='flex gap-10 px-0 lg:px-10 py-10'>
            {similarRecipes.length > 0 ? (
              similarRecipes.map((item, index) => (
                <RecipeCard recipe={item} key={index} />
              ))
            ) : (
              <div className='text-white w-full items-center justify-center py-10'>
                <p className='text-center'>No Recipe Found</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default RecipeDetail