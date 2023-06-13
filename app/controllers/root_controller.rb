class RootController < ApplicationController
  def index
    @greeting = Greeting.order('RANDOM()').first
  end
end
