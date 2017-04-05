class Book < ActiveRecord::Base
  has_many :users
  has_many :questions
  has_many :comments
  has_attached_file :image
  validates_attachment :image, content_type: {content_type: ["image/jpeg", "image/gif", "image/png"]}
end
