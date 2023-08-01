import React from 'react'

function MyLinks() {
    return (
        <div className="myLinks">
            <div className='linkedin'>
                <a href="https://www.linkedin.com/in/hhuang8/" target='_blank' rel="noopener noreferrer">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/600px-LinkedIn_logo_initials.png" alt="" className='linkedinIcon'/></a>
                </div>
            <div className='github'>
                <a href="https://github.com/potatomon0" target='_blank' rel="noopener noreferrer">
                <img src="https://www.shareicon.net/data/2015/09/15/101512_logo_512x512.png" alt="" className='githubIcon'/></a>
            </div>
        </div>
    )
}

export default MyLinks