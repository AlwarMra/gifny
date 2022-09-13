import { API_KEY, API_URL } from './settings'

export default function getSingleGif(id) {
  const apiURL = `${API_URL}/gifs/${id}?api_key=${API_KEY}`

  return fetch(apiURL)
    .then(res => res.json())
    .then(response => {
      const data = response.data
      const { id, title, images } = data
      const { url } = images.downsized_medium
      return { id, title, url }
    })
}
