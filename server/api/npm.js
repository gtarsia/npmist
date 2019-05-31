import request from '../lib/request'

export async function npmSuggestions(q) {
  const headers = { 'x-spiferack': 1 }
  const { objects } = await request(`https://www.npmjs.com/search?q=${q}`, { headers })
  return objects
}

export function npmGetPackage(p) {
  const headers = { 'x-spiferack': 1 }
  return request(`https://www.npmjs.com/package/${p}`, { headers })
}
