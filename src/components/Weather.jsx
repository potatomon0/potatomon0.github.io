import {useContext,useState} from 'react'
import {AppContext} from '../contexts/context'

function Weather() {
    let {data} = useContext(AppContext)
    const loaded = ()=>{
      return (
        <div>
            {data.data.location.name}
        </div>
      )
    }
    const loading=()=>{
      <div>Loading...</div>
    }
  return data ? loaded():loading()
}

export default Weather