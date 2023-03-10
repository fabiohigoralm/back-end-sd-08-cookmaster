const RecipesModels = require('../models/Recipes');
const { NOT_FOUND } = require('./utils/variableStatus');

const ERROR_RECIPE = {
  error: {
    code: NOT_FOUND,
    message: 'recipe not found'
  }
};

const createRecipes = async (newRecipe) => {
  const create = await RecipesModels.createRecipes(newRecipe);
  return create;
};

const findAll = async () => {
  const allRecipe = await RecipesModels.findAll();
  return allRecipe;
};

const findById = async (id) => {
  const idRecipe = await RecipesModels.findById(id);
  if (!idRecipe) {
    return ERROR_RECIPE;
  }
  return idRecipe;
};
const updateById = async ({ id, name, ingredients, preparation }, role) => {
  const { _id } = await RecipesModels.findById(id);//_id da receuta
  const { _id: userId } = role;
  const editRecipe = await
  RecipesModels.updateById({ _id, name, ingredients, preparation, userId });
  return editRecipe;
};

const deleteRecipe = async (id) => {
  const recipe = await RecipesModels.findById(id);
  if (!recipe) { return ERROR_RECIPE; }
};

const updateImage = async(_id,image)=>{
  const recipe = await RecipesModels.updateImage(_id,image);
  if(!recipe){return ERROR_RECIPE; }
  return recipe;
};


module.exports = {
  createRecipes,
  findAll,
  findById,
  updateById,
  deleteRecipe,
  updateImage
 
};