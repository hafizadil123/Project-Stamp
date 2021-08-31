import React from 'react';
import NavBar from '../../Components/NavBar';
import SideBar from '../../Components/SideBar';
import Tabs from '../../Components/Tabs';
import { Container, Row, Col } from 'react-bootstrap';

const DashboardScreen = () => {
  return (
    <>
      <NavBar />
        <Container>
          <Row>
            <Col md={{ span: 4, offset: 8 }} lg={{ span: 4, offset: 8 }}>
              <span>Token: </span>
              <button style={{ borderRadius: '30px', marginLeft: '60px' }} className="login-button">NEW DOWNLOAD</button>
            </Col>
          </Row>
        </Container>
        <Container>
          <Row>
            <Col xs={3} md={3} lg={3}>
              <SideBar />
            </Col>
            <Col xs={9} md={9} lg={9}>
              <Tabs />
            </Col>
          </Row>
        </Container>
    </>
  );
}

export default DashboardScreen;
