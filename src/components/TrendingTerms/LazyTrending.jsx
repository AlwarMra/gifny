import Spinner from '../Spinner/'
import React, { Suspense } from 'react'
import useNearScreen from '../../hooks/useNearScreen'

const TrendingTerms = React.lazy(() => import('./TrendingTerms'))

const LazyTrending = () => {
  const { isNearScreen, fromRef } = useNearScreen()

  return (
    <div ref={fromRef}>
      <Suspense fallback={<Spinner />}>
        {isNearScreen ? <TrendingTerms /> : <Spinner />}
      </Suspense>
    </div>
  )
}

export default LazyTrending
