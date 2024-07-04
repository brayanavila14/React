import { Navbar, Nav, Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const MyNavbar = () => {
    return (
        <Navbar bg='dark' variant='dark' expand='lg'>
            <Container>
                <Navbar.Brand as={NavLink} to='/'>
                    Mi Sitio
                </Navbar.Brand>
                <Navbar.Toggle aria-controls='basic-navbar-nav' />
                <Navbar.Collapse id='basic-navbar-nav'>
                    <Nav className='me-auto'>
                        <Nav.Link as={NavLink} to='/' exact>
                            Inicio
                        </Nav.Link>
                        <Nav.Link as={NavLink} to='/about'>
                            Acerca de
                        </Nav.Link>
                        <Nav.Link as={NavLink} to='/contact'>
                            Contacto
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default MyNavbar;
