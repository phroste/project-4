class Recipe < ApplicationRecord
  belongs_to :user

  validates_presence_of :name, :instructions, :image
end
