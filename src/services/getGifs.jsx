import { API_KEY, API_URL } from './settings'

export default function getGifs(
  { keyword = 'gif', limit = 10 } = {},
  trend = false
) {
  let apiURL = ''
  if (trend) {
    apiURL = `${API_URL}/gifs/trending?api_key=${API_KEY}&limit=10&rating=g`
  } else {
    apiURL = `${API_URL}/gifs/search?api_key=${API_KEY}&q=${keyword}&limit=${limit}&offset=0&rating=r&lang=en`
  }

  return fetch(apiURL)
    .then(res => res.json())
    .then(response => {
      const { data } = response
      const gifs = data.map(g => {
        const { id, title, images } = g
        const { url } = images.downsized_medium
        return { id, title, url }
      })
      return gifs
    })
}
