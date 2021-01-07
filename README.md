Rails chat is a connected chat application with Rails 5.1, React/Redux, ActionCable for real time updates and the webpacker gem.
The goal is to implement the database to store messages and channels. There is provided an API for the front-end, as Redux action creators will need to retrieve some information from Rails.
There are three models with relative validation: users, messages, channels.
In api/v1/messages controller were implemented two methods: index and create, was needed a before_action to retrieve the Channel model (by name). For the index action, render the list of messages as json.

Redux state contains two keys: channels and messages, however the current user comes from Reails Devise, and the selected channel comes from URL (routes: channel#show). In the current app, it is stored in the state to be able to change it on click.
