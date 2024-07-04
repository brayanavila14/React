import { Container, Row, Col, Card } from 'react-bootstrap';

const About = () => {
    return (
        <Container className='mt-5'>
            <Row className='justify-content-md-center'>
                <Col xs={12} md={8}>
                    <Card>
                        <Card.Header>Acerca de</Card.Header>
                        <Card.Body>
                            <Card.Title>Nuestra Misión</Card.Title>
                            <Card.Text>
                                Nuestra misión es proporcionar soluciones
                                innovadoras y sostenibles que mejoren la vida de
                                las personas. Nos esforzamos por liderar con
                                nuestros valores y para hacer una diferencia
                                positiva en cada comunidad que servimos.
                            </Card.Text>
                            <Card.Title>Nuestros Valores</Card.Title>
                            <Card.Text>
                                - Innovación: Buscamos constantemente formas
                                innovadoras de mejorar nuestros servicios y
                                productos.
                                <br />
                                - Sostenibilidad: Nos comprometemos a operar de
                                manera sostenible y respetuosa con el medio
                                ambiente.
                                <br />- Comunidad: Valoramos las comunidades en
                                las que operamos y nos esforzamos por contribuir
                                positivamente a ellas.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default About;
