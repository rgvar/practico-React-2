import { Container, Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useAppDispatch } from '../../../hooks/redux';
import { setLogout } from '../../../redux/slices/auth';

export const Header = () => {

    const dispatch = useAppDispatch();

    const handleLogout = () => {
        dispatch(setLogout());
    };
  return (
    <Navbar bg="dark" data-bs-theme="dark">
        <Container>
            <Navbar.Brand >
                <Link to={'/'} className='nav-link'>Inicio</Link>
            </Navbar.Brand>
            <Nav className="me-auto">
                <Nav.Item>
                    <Link to={'/search'} className='nav-link'>Buscar</Link>
                </Nav.Item>
                <Nav.Item>
                    <Link to={'/dc-heroes'} className='nav-link'>DC</Link>
                </Nav.Item>
                <Nav.Item>
                    <Link to={'/marvel-heroes'} className='nav-link'>Marvel</Link>
                </Nav.Item>
            </Nav>
            <Navbar.Collapse className="justify-content-end gap-2">
                <Navbar.Text>Ingresado como Admin</Navbar.Text>
                <Nav.Item>
                    <div className='d-flex justify-content-center align-items-center'
                         onClick={handleLogout}>
                        <span style={{color:"#fff", cursor: "pointer"}} className="material-symbols-outlined">logout</span>
                    </div>
                </Nav.Item>
            </Navbar.Collapse>
        </Container>
    </Navbar>
  )
}
