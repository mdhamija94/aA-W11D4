class Bench < ApplicationRecord

  validates :description, :lat, :long, presence: true

  def self.in_bounds(bounds) 
    
  end

end
