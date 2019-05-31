import fetch from 'node-fetch'
import { isArray } from 'lodash'

function check(response) {
  if (!response.ok) {
    return response.text()
      .then((body) => {
        const title = response.statusText
        throw new Error(`${title}, ${body}`)
      })
  }
  return response
}

function jsonResponse(response) {
  return response.text().then(text => (text ? JSON.parse(text) : {}))
}

function getSearchParams(params) {
  const searchParams = new URLSearchParams()
  Object.keys(params).forEach((key) => {
    const { [key]: val } = params
    if (isArray(val)) {
      val.forEach(el => searchParams.append(key, el))
    } else {
      searchParams.append(key, val)
    }
  })
  return searchParams
}

export default function request(_url, init = { headers: {} }) {
  const url = new URL(_url)
  const { params } = init
  if (params) {
    url.search = getSearchParams(params)
  }
  if (!init.headers['Content-Type']) {
    const contentType = 'application/json'
    Object.assign(init.headers, { 'Content-Type': contentType })
  }
  return fetch(url, init)
    .then(check)
    .then(jsonResponse)
}
