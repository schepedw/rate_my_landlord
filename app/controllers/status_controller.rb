class StatusController < ApplicationController
  def show
    render json: { status: :running }
  end
end
