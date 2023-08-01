import {createContext,useState} from 'react'
import axios from 'axios'

export const AppContext = createContext()

const AppContextProvider=(props)=>{
    const [data,setData]=useState(null)
    const [count,setCount] = useState(0)
    const next = ()=>{
        console.log(count)
        setCount(count+1)
    }
    const previous = ()=>{
        console.log(count)
        setCount(count-1)
    }
    const getIP = async()=>{
        let ipData=await axios.get("https://ipinfo.io/json?token=d382220d0ac319")
        console.log(ipData)
        console.log(ipData.data.city)
        let city = await ipData.data.city
        let weatherData = await axios.get(`http://api.weatherapi.com/v1/current.json?key=a3df53367c0a445b93c11640230108&q=${city}&aqi=no`)
        console.log(weatherData)
        setData(weatherData)
    }
    return (
        <AppContext.Provider value={{data,setData,getIP,count,setCount, next, previous}}>
            {props.children}
        </AppContext.Provider>
    )
}


export default AppContextProvider