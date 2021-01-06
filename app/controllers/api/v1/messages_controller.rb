class Api::V1::MessagesController < ApplicationController
  before_action :set_channel

  def index
    @messages = Message.all
    @email = Message.user_id.email
    render json: @messages
  end

  def create
    @message = Message.create(message_params)
    render json: @message
  end

  private

  def set_channel
    # Check: how can i retrieve a channel using a channel name only?
    # @channel = Channel.find_by(name: params[:channel_id])
  end
  def message_params
    params.require(:message).permit(:content)
  end
end
