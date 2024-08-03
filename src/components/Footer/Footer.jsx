import React from 'react'
import Nav from 'react-bootstrap/Nav';
import InstagramIcon from '@mui/icons-material/Instagram';
import { Link } from 'react-router-dom';
const Footer = () => {
  return (
    <div className='p-5 mt-5' style={{textAlign:'center', backgroundColor:'#e2e3e4'}}>
       <Link to='/contact' style={{ backgroundColor:'#e2e3e4',fontSize:'20px', fontWeight:'300', color:'#424242', fontStretch:'expanded', letterSpacing:'4px'}} className='mb-2'>contact</Link>
        <p style={{ backgroundColor:'#e2e3e4',fontSize:'15px', fontWeight:'130', color:'#424242', fontStretch:'expanded'}}>Images and text © Ismail</p>
        <Nav.Link href="https://www.instagram.com/jhsmail" target="_blank" rel="noopener noreferrer" className="mx-2">
            <InstagramIcon style={{ backgroundColor:'#e2e3e4',color: '#424242', fontSize: '24px' }} />
        </Nav.Link>
    </div>
  )
}

export default Footer