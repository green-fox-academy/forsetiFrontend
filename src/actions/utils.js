export const sendHBodyWithMethod = (body, method) => ({
  method: method,
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(body),
});