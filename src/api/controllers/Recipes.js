const rescue = require('express-rescue');
const RecipesService = require('../services/Recipes');
const verifyRecipe = require('../services/utils/RecipeSchema');

const {CREATED}=require('../services/utils/variableStatus');

const createRecipes = rescue(async (req, res, next) =>  {
  const {_id}=req.id;

  const { error } = verifyRecipe.validate(req.body);
  if(error){
    return next(error);}

  const { name , ingredients ,preparation} = req.body;
  const new_recipe = await RecipesService.createRecipes({name ,
    ingredients ,preparation , userId:_id});
 
  return res.status(CREATED).json(new_recipe);

});

module.exports={createRecipes};