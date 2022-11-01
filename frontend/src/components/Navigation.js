import { Container, Nav, Navbar } from "react-bootstrap";

const Navigation = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">Todo App</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#">Fill In</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default Navigation;
