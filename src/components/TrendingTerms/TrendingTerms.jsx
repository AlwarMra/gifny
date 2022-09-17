import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import getTrendingTerms from '../../services/getTrendingTerms'
const TrendingTerms = () => {
  const [trends, setTrends] = useState([])
  const [accordion, setAccordion] = useState(false)
  const [accordionClass, setAccordionClass] = useState('max-h-0')
  function openAccordion() {
    if (window.innerWidth <= 768) {
      setAccordion(!accordion)
      accordion ? setAccordionClass('max-h-0') : setAccordionClass('max-h-60')
    }
  }

  useEffect(() => {
    getTrendingTerms().then(res => {
      setTrends(res)
    })
  }, [])
  return (
    <div className='mb-8'>
      <h2
        onClick={openAccordion}
        className='border-gradient p-2 text-gradient text-3xl mb-4 mr-4 font-bold md:text-right md:border-0 md:mr-0'
      >
        The most popular
        <span className='float-right md:hidden'>{accordion ? '-' : '+'}</span>
      </h2>
      <ul
        className={
          'ease-in duration-300 list-none flex flex-wrap justify-end ' +
          accordionClass +
          ' overflow-hidden md:block md:max-h-full'
        }
      >
        {trends.map(trend => (
          <li
            key={trend}
            className='text-right mb-4 cursor-pointer mr-4 md:mr-0'
          >
            <Link
              className='underlined text-gray-100 text-xl relative no-underline'
              to={`/search/${trend}`}
            >
              {trend}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default TrendingTerms
