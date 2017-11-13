class User < ApplicationRecord
  rolify
  devise :database_authenticatable, :registerable,
    :confirmable, :lockable, :timeoutable,
    :recoverable, :rememberable, :trackable, :validatable
end
