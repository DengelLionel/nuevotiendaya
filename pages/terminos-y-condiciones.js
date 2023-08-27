import React from 'react'
import Head from "next/head";
import PageBanner from "../components/Common/PageBanner";
import { Container, Row, Col, Card } from 'react-bootstrap';
import Link from 'next/link';
const terminoscondiciones = () => {
  return (
    <>
    <Head>
        <title>Términos y Condiciones de Uso - Crea tienda ya</title>
    </Head>
    <PageBanner
        title="Términos y Condiciones de Uso - Crea tienda ya"
        content="Bienvenido a Crea Tienda Ya. Por favor, lea cuidadosamente los siguientes términos y condiciones antes de utilizar nuestros servicios."
    />
  <Container className="mt-4">
  <Row>
    <Col>
      <Card className="mb-4">
        <Card.Body>
          <h2>Aceptación de Términos y Condiciones</h2>
          <p>
            Al acceder y utilizar los servicios de Crea Tienda Ya, usted acepta cumplir y quedar sujeto a estos términos y condiciones. Si no está de acuerdo con estos términos, por favor, no utilice nuestros servicios.
          </p>
        </Card.Body>
      </Card>
    </Col>
  </Row>

  <Row>
    <Col>
      <Card className="mb-4">
        <Card.Body>
          <h2>Modificaciones</h2>
          <p>
            Crea Tienda Ya se reserva el derecho de modificar estos términos y condiciones en cualquier momento. Los cambios serán efectivos inmediatamente después de su publicación en nuestro sitio web. Se espera que los usuarios revisen estos términos de forma regular para mantenerse informados sobre las actualizaciones.
          </p>
        </Card.Body>
      </Card>
    </Col>
  </Row>

  <Row>
    <Col>
      <Card className="mb-4">
        <Card.Body>
          <h2>Política de Privacidad</h2>
          <p>
            Su privacidad es importante para nosotros. Por favor, lea nuestra <Link href="/politica-de-privacidad">Política de Privacidad</Link> que describe cómo recopilamos, utilizamos y protegemos su información personal.
          </p>
        </Card.Body>
      </Card>
    </Col>
  </Row>

  <Row>
    <Col>
      <Card className="mb-4">
        <Card.Body>
          <h2>Derechos de Propiedad Intelectual</h2>
          <p>
            Todos los derechos de propiedad intelectual en nuestro sitio web y contenido son propiedad de Crea Tienda Ya. No está permitida la reproducción, distribución o modificación de ningún contenido sin nuestro consentimiento por escrito.
          </p>
        </Card.Body>
      </Card>
    </Col>
  </Row>

  <Row>
    <Col>
      <Card className="mb-4">
        <Card.Body>
          <h2>Limitación de Responsabilidad</h2>
          <p>
            Crea Tienda Ya no se hace responsable de ningún daño directo, indirecto, incidental, especial o consecuente que pueda resultar del uso de nuestros servicios.
          </p>
        </Card.Body>
      </Card>
    </Col>
  </Row>

  <Row>
    <Col>
      <Card>
        <Card.Body>
          <h2>Contacto</h2>
          <p>
            Si tiene alguna pregunta o comentario sobre estos términos y condiciones, por favor <Link href="/contactanos">contáctenos</Link>.
          </p>
          <p>Última actualización: <span className="text-muted"> 25/08/2023</span></p>
        </Card.Body>
      </Card>
    </Col>
  </Row>
</Container>
</>
  )
}

export default terminoscondiciones