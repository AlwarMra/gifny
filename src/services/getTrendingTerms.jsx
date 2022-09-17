import { API_KEY, API_URL } from './settings'

export default function getTrendingTerms() {
  const apiURL = `${API_URL}/trending/searches?api_key=${API_KEY}`

  return fetch(apiURL)
    .then(res => {
      if (!res.ok) throw Error('Trending searches not found')
      return res.json()
    })
    .then(res => {
      const { data } = res
      return data
    })
}
