class Api::V1::MessagesController < ApplicationController
  before_action :set_channel

  def index
    messages = @channel.messages.order('created_at ASC')
    # @email = Message.user_id.nickname
    render json: messages
  end

  def create
    message = @channel.messages.build(content: params[:content])
    message.user = current_user
    message.save
    render json: message
  end

  private

  def set_channel
    # Check: how can i retrieve a channel using a channel name only?
    @channel = Channel.find_by(name: params[:channel_id])
  end
end
