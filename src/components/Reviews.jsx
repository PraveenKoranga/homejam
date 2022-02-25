import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { reviews } from "../content/reviews";

const Reviews = () => {
  return (
    <>
      <div className="review-box">
        <Container className="review-container">
          <h1 className="students-reviews">
            <span className="students-heading">Reviews</span>
          </h1>
          <div>
            <Row>
              <AliceCarousel autoPlay autoPlayInterval="3000">
                {reviews.map((reviews) => (
                  <Col lg={4} md={4} xs={12}>
                    <div className="review">
                      <div className="review-header">
                        <img
                          src={reviews.picture}
                          alt="no"
                          width="60px"
                          className="profile"
                        />
                        <div className="name-location">
                          <p>{reviews.name}</p>
                          <p>
                            <img src={reviews.flag} alt="no" width="30px" />
                            &nbsp;&nbsp; {reviews.place}
                          </p>
                        </div>
                      </div>
                      <p className="comment">{reviews.comment}</p>
                    </div>
                  </Col>
                ))}
              </AliceCarousel>
            </Row>
          </div>
          )
        </Container>
      </div>
    </>
  );
};

export default Reviews;
