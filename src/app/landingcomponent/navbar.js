"use client"
import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './navbar.css'
import Image from 'next/image';
import logo from '../../../public/images/logo.png'
const NavBar = () => {
  return (
    <Navbar expand="lg" variant="light" className="rtl mainnav" >
      <Navbar.Brand href="#"><Image height={50} width={50} src={logo}/></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav"  className=''>
        <Nav className="ml-auto"> 
          <Nav.Link href="#" className='m-3'>الصفحة الرئيسية </Nav.Link>
          <Nav.Link href="#" className='m-3'>عن التطبيق</Nav.Link>
          <Nav.Link href="#" className='m-3'>مميزات التطبيق </Nav.Link>
          <Nav.Link href="#" className='m-3'>عملاءنا </Nav.Link>
          <Nav.Link href="#" className='m-3'>تواصل معنا  </Nav.Link>
          {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown" className='m-3'>
            <NavDropdown.Item href="#" >Action</NavDropdown.Item>
            <NavDropdown.Item href="#" >Another action</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#" >Something else here</NavDropdown.Item>
          </NavDropdown> */}
          {/* <Nav.Link disabled href="#" >Disabled</Nav.Link> */}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;

