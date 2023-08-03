import React from 'react'
import ReactLoading from 'react-loading'

function Loader() {
    return (
        <div>            
            <ReactLoading type="bubbles" color = '#0C4160' height={100} width={50}/>
        </div>
    )
}

export default Loader