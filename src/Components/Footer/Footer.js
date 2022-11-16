import React from 'react'
import './Footer.css'
import {FaGithub} from 'react-icons/fa'

export default function Footer() {
    const leftItems = ['Terms', 'Privacy', 'Security', 'Status', 'Docs']
    const rightItems = ['Contact Github', 'Pricing', 'API', 'Training', 'Blog', 'About']
  return (
    <React.Fragment>
        <div className='container'>
        <ul className='footer-list d-flex flex-column flex-lg-row align-items-center justify-content-between'>
            {leftItems.map((item, i) => {
                return <li key={i + 'left'} className='m-2 m-lg-0'>{item}</li>
            })}
            <li className='m-2 m-lg-0'><FaGithub fontSize={24} /></li>
            {rightItems.map((item, i) => {
                return <li key={i+ 'right'} className='m-2 m-lg-0'>{item}</li>
            })}
        </ul>
        </div>
    </React.Fragment>
  )
}
