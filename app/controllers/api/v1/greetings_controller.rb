class Api::V1::GreetingsController < ApplicationController
  def index
    random_greeting = Greeting.order('RANDOM()').first
    render json: random_greeting
  end
end
