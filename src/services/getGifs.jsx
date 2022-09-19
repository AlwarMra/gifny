import { API_KEY, API_URL } from './settings'

function getFromApi(apiResponse) {
  const { data } = apiResponse
  const gifs = data.map(g => {
    const { id, title, images } = g
    const { url } = images.downsized_medium
    return { id, title, url }
  })
  return gifs
}

export default function getGifs({
  keyword = 'gif',
  limit = 25,
  page = 0,
  trend = false,
  rating = 'r',
} = {}) {
  let apiURL = ''
  if (trend) {
    apiURL = `${API_URL}/gifs/trending?api_key=${API_KEY}&limit=10&offset=${
      page * limit
    }&rating=${rating}`
  } else {
    apiURL = `${API_URL}/gifs/search?api_key=${API_KEY}&q=${keyword}&limit=${limit}&offset=${
      page * limit
    }&rating=${rating}&lang=en`
  }

  return fetch(apiURL)
    .then(res => {
      return res.json()
    })
    .then(response => {
      if (response.data.length === 0 || response.data === undefined)
        throw Error('Not gifs found')

      return getFromApi(response)
    })
}
