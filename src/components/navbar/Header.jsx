import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import InstagramIcon from '@mui/icons-material/Instagram';
import { LinkContainer } from 'react-router-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import './Header.css'; // Custom styles for additional tweaks if necessary
import { animateScroll as scroll, Element } from 'react-scroll';

function Header() {
  function ScrollToTop() {
    const { pathname } = useLocation();
  
    React.useEffect(() => {
      scroll.scrollToTop();
    }, [pathname]);
  
    return null;
  }
  return (
    <Navbar collapseOnSelect expand="lg" style={{backgroundColor:'#f0f0f0', position:'sticky', top:'0', zIndex:"9999",width:'100dvw'}} className="py-3">
      <Container>
        <Link onClick={() => scroll.scrollToTop()} style={{textDecoration:'none'}} to='/'>
          <h2 style={{ color: '#424242',fontWeight:'800',fontStretch: "extra-expanded", letterSpacing:'3px' }}>jhsmail</h2>
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
          <Nav>
            <LinkContainer to="/my-work">
              <Nav.Link style={{ fontSize: '18px', color: "#424242" }} className='mx-2'>WORKS</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/about">
              <Nav.Link style={{ fontSize: '18px', color: "#424242" }} className='mx-2'>ABOUT</Nav.Link>
            </LinkContainer>
            <a href='#contact' style={{textDecoration:'none'}}>
              <Nav.Link href='#contact' style={{ fontSize: '18px', color: "#424242" }} className='mx-2'>CONTACT</Nav.Link>
            </a>
            <Nav.Link href="https://www.instagram.com/jhsmail" target="_blank" rel="noopener noreferrer" className="mx-2">
              <InstagramIcon style={{ color: '#424242', fontSize: '24px' }} />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
