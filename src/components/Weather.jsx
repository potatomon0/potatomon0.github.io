import {useContext,useState} from 'react'

function Weather() {
    let {data} = useContext(AppContext)
  return (
    <div>
        {data}
    </div>
  )
}

export default Weather