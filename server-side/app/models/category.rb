class Category < ApplicationRecord
    has_many :items, optional: true
end
