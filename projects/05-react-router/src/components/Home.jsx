import { Container } from 'react-bootstrap';

const Home = () => {
    return (
        <>
            <Container className='mt-5'>
                <h1>Bienvenido a Nuestro Sitio Web</h1>
                <p>
                    Este es un ejemplo de cómo integrar React Router en una
                    aplicación de React. Puedes navegar por las diferentes
                    secciones de la página utilizando los enlaces del menú.
                </p>
            </Container>
        </>
    );
};

export default Home;
