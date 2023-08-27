import React from 'react'
import Head from "next/head";
import PageBanner from "../components/Common/PageBanner";
import { Container, Row, Col, Card } from 'react-bootstrap';
const politicadeprivacidad = () => {
  return (
    <>
    <Head>
        <title>Política de privacidad - Crea tienda ya</title>
    </Head>
    <PageBanner
        title="Política de privacidad - Crea tienda ya"
        content="Nuestra política de privacidad"
    />
    <Container className="mt-4">
        <Row>
          <Col>
            <Card className="mb-4">
              <Card.Body>
                <h2>Recopilación de Información</h2>
                <p>
                  En "Crea Tienda Ya" valoramos y respetamos tu privacidad. Esta política de privacidad explica cómo recopilamos, utilizamos y protegemos la información personal que nos proporcionas cuando utilizas nuestros servicios.
                </p>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row>
    <Col>
      <Card className="mb-4">
        <Card.Body>
          <h2>Uso de la Información</h2>
          <p>
            Utilizamos la información personal proporcionada para brindar y mejorar nuestros servicios, procesar transacciones y responder a tus consultas y solicitudes.
          </p>
        </Card.Body>
      </Card>
    </Col>
  </Row>

  <Row>
    <Col>
      <Card className="mb-4">
        <Card.Body>
          <h2>Protección de Datos</h2>
          <p>
            Tu información personal está protegida y almacenada de manera segura. No compartimos ni vendemos tu información con terceros sin tu consentimiento.
          </p>
        </Card.Body>
      </Card>
    </Col>
  </Row>

  <Row>
    <Col>
      <Card className="mb-4">
        <Card.Body>
          <h2>Cookies y Tecnologías Similares</h2>
          <p>
            Utilizamos cookies y tecnologías similares para mejorar tu experiencia en nuestro sitio web y personalizar el contenido según tus intereses.
          </p>
        </Card.Body>
      </Card>
    </Col>
  </Row>

  <Row>
    <Col>
      <Card>
        <Card.Body>
          <h2>Enlaces a Terceros</h2>
          <p>
            Nuestro sitio web puede contener enlaces a sitios de terceros. No nos responsabilizamos por las prácticas de privacidad de estos sitios y te recomendamos leer sus políticas de privacidad.
          </p>
        </Card.Body>
      </Card>
    </Col>
  </Row>
        
        <Row>
          <Col>
            <Card>
              <Card.Body>
                <h2>Consentimiento</h2>
                <p>
                  Al utilizar nuestros servicios, aceptas los términos de esta política de privacidad.
                </p>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <p>
          Para cualquier pregunta o inquietud sobre nuestra política de privacidad, por favor contáctanos en{' '}
          <a href="mailto:info@creatiendaya.com">info@creatiendaya.com</a>.
        </p>
        <p>Fecha de última actualización: 01/08/2023</p>
      </Container>
</>
  )
}

export default politicadeprivacidad