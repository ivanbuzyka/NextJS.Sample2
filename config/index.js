const dev = process.env.NODE_ENV !== 'production'

export const server = dev ? 'http://localhost:3000' : 'https://62cec64c826a88972d02c65d.mockapi.io'