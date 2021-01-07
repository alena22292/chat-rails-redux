# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require "faker"
puts "Cleaning database..."
Message.destroy_all
User.destroy_all
Channel.destroy_all

puts "Creating chatroom content..."

ActiveRecord::Base.connection.tables.each do |t|
  ActiveRecord::Base.connection.reset_pk_sequence!(t)
end

user1 = User.new(
    nickname: Faker::Name.name,
    email: Faker::Internet.email,
    password: (0..9).to_a.shuffle.take(6).join('').to_s
  )
user1.save!


user2 = User.new(
    nickname: Faker::Name.name,
    email: Faker::Internet.email,
    password: (0..9).to_a.shuffle.take(6).join('').to_s
  )
user2.save!

user3 = User.new(
    nickname: Faker::Name.name,
    email: Faker::Internet.email,
    password: (0..9).to_a.shuffle.take(6).join('').to_s
  )
user3.save!

# channel1 = Channel.new(name: Faker::Games::Heroes.name)
channel1 = Channel.new(name: "coding")
channel1.save!

# channel2 = Channel.new(name: Faker::Games::Heroes.name)
channel2 = Channel.new(name: 'general')
channel2.save!

channel3 = Channel.new(name: 'react')
channel3.save!

channel4 = Channel.new(name: 'rails')
channel4.save!

4.times do
  message = Message.new(
    content: Faker::Quotes::Shakespeare.as_you_like_it_quote
  )
  message.user = user1
  message.channel = channel1
  message.save!
end
4.times do
  message = Message.new(
    content: Faker::Quotes::Shakespeare.as_you_like_it_quote
  )
  message.user = user2
  message.channel = channel1
  message.save!
end
4.times do
  message = Message.new(
    content: Faker::Quotes::Shakespeare.as_you_like_it_quote
  )
  message.user = user3
  message.channel = channel1
  message.save!
end
3.times do
  message = Message.new(
    content: Faker::Quotes::Shakespeare.as_you_like_it_quote
  )
  message.user = user1
  message.channel = channel2
  message.save!
end

