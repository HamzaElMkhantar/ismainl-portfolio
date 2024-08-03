import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className='not-found' style={{textAlign:'center'}}>
        <h4 style={{color:'#424242'}}>404 - PAGE NOT FOUND</h4>
        <p style={{color:'#424242'}}>The page you are looking for might have been removed had its name changed or is temporarily unavailable.</p>
        <p style={{color:'#424242'}}>You can return to our homepage by clicking <Link to="/">here</Link></p>
    </div>
  )
}

export default NotFound