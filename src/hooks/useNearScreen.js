import { useEffect, useState, useRef } from 'react'

export default function useNearScreen({
  distance = '100px',
  externalRef,
  once = true,
}) {
  const [isNearScreen, setIsNearScreen] = useState(false)
  const fromRef = useRef()
  const element = externalRef ? externalRef.current : fromRef.current

  useEffect(() => {
    const onChange = (entries, observer) => {
      const el = entries[0]
      if (el.isIntersecting) {
        setIsNearScreen(true)
        once && observer.disconnect()
      } else {
        !once && setIsNearScreen(false)
      }
    }
    const observer = new IntersectionObserver(onChange, {
      rootMargin: distance,
    })
    if (element) observer.observe(element)

    return () => observer.disconnect()
  })
  return { isNearScreen, element }
}
