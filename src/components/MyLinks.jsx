import React from 'react'
import resume from '../files/hhResume.pdf'
import user from '../img/user2.png'
import github from '../img/github.png'
import linkedin from '../img/linkedin.png'

function MyLinks() {
    return (
        <div className="myLinks">
            <div className='linkedin'>
                <a href="https://www.linkedin.com/in/hhuang8/" target='_blank' rel="noopener noreferrer">
                <img src={linkedin} alt="" className='linkIcon'/></a>
                </div>
            <div className='github'>
                <a href="https://github.com/potatomon0" target='_blank' rel="noopener noreferrer">
                <img src={github} alt="" className='linkIcon'/></a>
            </div>
            <div className="resume">
                <a href={resume} target="_blank"><img src={user} alt="" className="linkIcon" rel="noopener noreferrer"/></a>
            </div>
        </div>
    )
}

export default MyLinks