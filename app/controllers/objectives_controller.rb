class ObjectivesController < ApplicationController
  before_action :set_goal
  before_action :set_objective, only: [:show]
  
  def index
    @objectives = @goal.objectives.all
    render json: @objectives
  end
  
  def show
    @objective = Objective.find(params[:id])
    render json: @objective, status: 200
  end
  
  def create
    @objective = @goal.objectives.create(objective_params)
    render json: @objective, status: :created
  end
  
  def toggle
    @objective = Objective.find(params[:id])
    @objective.toggle!(:completed)  
    render json: @objective
  end
  
  def destroy
    @objective = Objective.find(params[:id])
    @objective.destroy
  
    render json :@objective
  end
  
  private
  def objective_params
    params.require(:objective).permit(:description)
  end
  
  def set_goal
    @goal = Goal.find_by(id: params[:goal_id])
  end
  
  def set_objective
    @objective = @goal.objectives.find_by(id: params[:id])
  end 
end