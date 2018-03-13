class IngredientsController < ApplicationController
  
  def index
    ingredients = Ingredient.all
    render json: ingredients
  end

  # get method
  def show
    ingredient = Ingredient.find(params[:id])
    render json: ingredient
  end

  # post method
  def create
    p "in create. ingredient_params:", ingredient_params
    ingredient = Ingredient.create!(ingredient_params)
    render json: ingredient
  end

  # put method
  def update
    ingredient = Ingredient.find(params[:id])
    ingredient.update!(ingredient_params)
    render json: ingredient
  end

  # delete method
  def destroy 
    ingredient = Ingredient.find(params[:id])
    ingredient.destroy!
    render plain: "ingredient DELETED!"
  end

  private

  # defining the variable ingredient_params...
  def ingredient_params
    params.require(:ingredient).permit(:name, :recipe_id)
  end

end