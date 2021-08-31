import React from 'react';
import { Tabs, Tab, Row, Col } from 'react-bootstrap';
import ImageComponent from '../Image';

const TabsComponent = () => {
  return (
    <>
      <Tabs defaultActiveKey="images" className="mb-3">
        <Tab eventKey="images" title="Images">
          <Row>
            {
              [1, 2, 3, 4, 5, 6, 7, 8, 9].map(() => {
                return <Col style={{ marginBottom: '20px' }}>
                  <ImageComponent />
                </Col>
              })
            }
          </Row>
        </Tab>
        <Tab eventKey="watermarks" title="Watermarks">
          2 Watermarks component
        </Tab>
        <Tab eventKey="downloaded" title="Downloaded">
          3 Downloaded component
        </Tab>
      </Tabs>
    </>
  );
}

export default TabsComponent;
