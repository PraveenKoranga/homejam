import React from "react";
import { Card, Container, Row, Col } from "react-bootstrap";
import { BiBookmark, BiArrowToRight } from "react-icons/bi";
import { Link } from "react-router-dom";
import { shows } from "../content/upcommingshows";

const UpcommigShows = () => {
  return (
    <div className="main-body">
      <Container className="upcomming-heading">
        <p>Upcomming Shows</p>
        <span className="line"></span>
        <Link className="view-all" to="/">
          View All
        </Link>
      </Container>
      <br />
      <Container>
        <Row>
          {shows.map((Shows) => (
            <Col lg={3} xs={12} md={3}>
              <Card className="card">
                <Card.Img
                  variant="top"
                  src={Shows.picture}
                  height="200px"
                  width="100%"
                />
                <Card.Body className="card-body">
                  <Card.Title className="card-title">{Shows.title}</Card.Title>
                  <Card.Text className="name">{Shows.name}</Card.Text>
                  <div className="card-footer">
                    <Link to="/" className="more-info">
                      More Info
                      <BiArrowToRight fontSize="25px" width="30px" />
                    </Link>
                    <BiBookmark color="purple" fontSize="30px" />
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default UpcommigShows;
