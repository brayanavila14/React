import React from 'react';
import { Container, Card, ListGroup } from 'react-bootstrap';

const Contact = () => {
    return (
        <Container className='mt-5'>
            <Card>
                <Card.Header>Contacto</Card.Header>
                <ListGroup variant='flush'>
                    <ListGroup.Item>
                        Email: contacto@miempresa.com
                    </ListGroup.Item>
                    <ListGroup.Item>Teléfono: +34 123 456 789</ListGroup.Item>
                    <ListGroup.Item>
                        Dirección: Calle Falsa 123, Ciudad, País
                    </ListGroup.Item>
                </ListGroup>
            </Card>
        </Container>
    );
};

export default Contact;
