import {createContext,useState} from 'react'
import axios from 'axios'

export const AppContext = createContext()

const AppContextProvider=(props)=>{
    const [data,setData]=useState(null)
    const getIP = async()=>{
        // let ipData = await axios.get('https://ipgeolocation.abstractapi.com/v1/?api_key=1572035068e24b7dbc10e3a1c9d570ee')
        // let ipData = await axios.get('https://api-bdc.net/data/ip-geolocation&localityLanguage=en&key=[YOUR API KEY]')
        let ipData=await axios.get("https://ipinfo.io/json?token=d382220d0ac319")
        console.log(ipData)
        console.log(ipData.data.city)
        let city = await ipData.data.city
        let weatherData = await axios.get(`http://api.weatherapi.com/v1/current.json?key=a3df53367c0a445b93c11640230108&q=${city}&aqi=no`)
        console.log(weatherData)
        setData(weatherData)
    }
    return (
        <AppContext.Provider value={{data,setData,getIP}}>
            {props.children}
        </AppContext.Provider>
    )
}


export default AppContextProvider