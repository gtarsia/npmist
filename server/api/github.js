import request from '../lib/request'

export function githubGetRepo({ owner, repo }) {
  const Authorization = 'token a7b7a12a4894b3a86dee15f3eb693522f06bca0d'
  const headers = { Authorization }
  return request(`https://api.github.com/repos/${owner}/${repo}`, { headers })
}
