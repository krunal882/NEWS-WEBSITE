import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const NavScrollExample = () => {
    return (
        <Navbar expand="lg" className="bg-black fixed-top" style={{ padding: '0px 2px' }}>
            <Container fluid>
                <Navbar.Brand href="/" className='text-white' style={{ fontSize: '30px' }}>NEWS</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0 text-white"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Nav.Link href="/all" key="all" category="all" className='text-white'>Home</Nav.Link>
                        <Nav.Link href="/entertainment" key="entertainment" category="entertainment" className='text-white'>Entertainment-news</Nav.Link>
                        <Nav.Link href="/science" key="science" category="science" className='text-white'>Science-News</Nav.Link>
                        <Nav.Link href="/sports" key="sports" category="sports" className='text-white'>Sports-news</Nav.Link>
                        <Nav.Link href="/top" key="top" category="top" className='text-white'>Top-news</Nav.Link>
                        <Nav.Link href="/trending" key="trending" category="trending" className='text-white'>Trending-News</Nav.Link>
                    </Nav>
                    <Form className="d-flex">
                        <Form.Control
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                        />
                        <Button variant="outline-success" className='text-white'>Search</Button>
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavScrollExample;
