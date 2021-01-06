// TODO: add and export your own actions
export const SET_MESSAGES = 'SET_MESSAGES';
export const CREATE_MESSAGE = 'CREATE_MESSAGE';

export function fetchMessages(channel) {
  const promise = fetch(`/api/v1/channels/${channel}/messages`, { credentials: "same-origin" }).then(r => r.json());
  return {
    type: SET_MESSAGES,
    payload: promise
  };
}

export function createMessage(channel, author, content) {
  const body = { author, content };
  const promise = fetch(`/api/v1/channels/${channel}/messages`, {
    method: 'Post',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
    credentials: "same-origin"
  })
    .then(r => r.json());

  return {
    type: CREATE_MESSAGE,
    payload: promise
  };
}

