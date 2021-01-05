// TODO: add and export your own actions
export const SET_MESSAGES = 'SET_MESSAGES';
export const CREATE_MESSAGE = 'CREATE_MESSAGE';

export function fetchMessages(channel) {
  const promise = fetch(`https://wagon-chat.herokuapp.com/${channel}/messages`).then(r => r.json());
  return {
    type: SET_MESSAGES,
    payload: promise
  };
}

export function createMessage(channel, author, content) {
  const body = { author, content };
  const promise = fetch(`https://wagon-chat.herokuapp.com/${channel}/messages`, {
    method: 'Post',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body)
  })
    .then(r => r.json());

  return {
    type: CREATE_MESSAGE,
    payload: promise
  };
}

