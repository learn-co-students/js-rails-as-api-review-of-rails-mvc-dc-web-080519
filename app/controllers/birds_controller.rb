# Add code from Readme
class BirdsController < ApplicationRecord
  def index
    @birds = Bird.all
  end
end
