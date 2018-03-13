class User < ApplicationRecord
  PASSWORD_LENGTH = (6..25)
  USERNAME_LENGTH = (5..15)

  # we do not want to store passowrds in our database, 
  # so we can use regular active record validations
  # we can still read the password without saving it to our database

  validates_presence_of :username
  validates :username, length: USERNAME_LENGTH, uniqueness: true

  validates :password, length: PASSWORD_LENGTH, allow_nil: true

  has_many :recipes

  attr_reader :password

  # note: this is a class method
  def self.find_from_credentials(username, password)
    user = find_by(username: username) # same as User.find_by( ...)
    return nil unless user
    user if user.is_password?(password)
  end

  # we can confirm a password attempt with the code below
  def is_password?(password_attempt)
    BCrypt::Password.new(password_digest).is_password?(password_attempt)
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end
  
end
