class RecipesController < ApplicationController
  before_action :ensure_signed_in

  def index
    recipes = Recipe.all
    render json: recipes
  end

  # get method for individual recipe
  def show
    recipe = Recipe.find(params[:id])
    # recipes = Recipe.find_by(params[:id])
    # render json: recipe
    render json: recipe
  end

  # post method
  def create
    p "in create. recipe_params:", recipe_params
    recipe = Recipe.create!(recipe_params)
    render json: recipe
  end

  # put method
  def update
    recipe = Recipe.find(params[:id])
    recipe.update!(recipe_params)
    render json: recipe
  end

  # delete method
  def destroy 
    recipe = Recipe.find(params[:id])
    recipe.destroy!
    render plain: "recipe DELETED!"
  end

  # allows us to get/view all of the recipes associated by user id
  # at this route 'localhost:3000/recipes/:id/ingredients'
  def ingredients_by_recipe
    recipe = Recipe.find(params[:id])
    render json: recipe.ingredients
  end

  private

  # defining the variable recipe_params
  def recipe_params
    params.require(:recipe).permit(:name, :instructions, :image, :user_id)
  end

end