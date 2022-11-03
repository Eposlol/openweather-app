import React, { useState } from 'react'
import { UilSearch, UilLocationPoint, UilCelsius, UilFahrenheit   } from '@iconscout/react-unicons'
import { toast } from 'react-toastify';

function Inputs({setQuery, units, setUnits}) {
  const [city, setCity] = useState('');

  const handleUnitChange = (e) => {
    const selectedUnit = e.currentTarget.name
    if (units !== selectedUnit) setUnits(selectedUnit)
  }

  const handleSearchClick = () => {
    if (city !== '') setQuery({q: city})
    setCity('')
  }

  const handleLocationClick = () => {
    if (navigator.geolocation) {
      toast.info('Fetching users location.')
      navigator.geolocation.getCurrentPosition((position) => {
        toast.success('Location fetched!')
        let lat = position.coords.latitude
        let lon = position.coords.longitude
        setQuery({
          lat,
          lon
        })
      })
    }
  }

  return (
    <div className='flex flex-row justify-center my-6'>
            <div className='flex flex-row w-3/4 items-center justify-center space-x-4'>
                <input 
                value={city}
                onChange={(e) => setCity(e.currentTarget.value)}
                type="text" 
                placeholder='search for city...'
                className='text-xl font-light p-2 w-full shadow-xl focus:outline-none capitalize placeholder:lowercase'/>
                <UilSearch 
                onClick={handleSearchClick}
                size={25} 
                className='text-white cursor-pointer transition ease-out hover:scale-125'/>
                <UilLocationPoint 
                onClick={handleLocationClick}
                size={25} className='text-white cursor-pointer transition ease-out hover:scale-125'/>
            </div>
            <div className='flex flex-row w-1/4 items-center justify-center'>
                <button 
                onClick={handleUnitChange}
                name='metric' className='text-white font-light'> <UilCelsius size={20} className='text-white cursor-pointer transition ease-out hover:scale-125'/></button>
                <p className='text-white text-xl mx-1'>|</p>
                <button 
                 onClick={handleUnitChange}
                name='imperial' className='text-white font-light'><UilFahrenheit size={20} className='text-white cursor-pointer transition ease-out hover:scale-125'/></button>
            </div>
    </div>
  )
}

export default Inputs