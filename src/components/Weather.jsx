import {useContext,useState} from 'react'
import {AppContext} from '../contexts/context'

function Weather() {
    let {data} = useContext(AppContext)
  return (
    <div>
        {data}
    </div>
  )
}

export default Weather