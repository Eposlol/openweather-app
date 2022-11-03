import React from 'react'

function TopButtons({setQuery}) {
    const cities = [
        {id: 1,
        title: 'Moscow'},
        {id: 2,
         title:'London'},
        {id: 3,
        title: 'New york'},
        {id: 4,
        title: 'Tokyo'}, 
        {id: 5,
        title: 'Sydney'}
    ]
  return (
    <div className='flex item-center justify-around my-6'>
        {cities.map((city)=> (
            <button key={city.id} onClick={() => setQuery({q: city.title})} className='text-white text-lg font-medium hover:text-cyan-300'>{city.title}</button>
        ))}
    </div>
  )
}

export default TopButtons