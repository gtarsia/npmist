import request from './request'

export const apiUrl = process.env.NODE_ENV === 'production'
  ? 'http://localhost:3600'
  : 'http://localhost:3600'

export default function endpoint(_url, init) {
  const url = `${apiUrl}${_url}`
  return request(url, init)
}
