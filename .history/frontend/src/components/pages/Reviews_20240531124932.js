import React, { useEffect, useState } from 'react';
import '../../App.css';
import axios from 'axios';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';

function Reviews() {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios.get('http://localhost:5555/reviews').then(
      response => {
        setReviews(response.data.data);
        setLoading(false);
      }
    ).catch((error) => {
      console.log(error);
      setLoading(false);
    });
  }, []);

  const averageRating = reviews.reduce((acc, review) => acc + review.rating, 0) / reviews.length || 0;

  return (
    <div className='review'>
      <h1>Reviews</h1>
      <Container className='review-summary'>
        <Row>
          <Col>
            <h2 className='review-average'>{averageRating.toFixed(1)}</h2>
            <div className='review-stars'>
              {Array.from({ length: 5 }, (_, i) => (
                <span key={i} className='star'>
                  {i < Math.round(averageRating) ? '★' : '☆'}
                </span>
              ))}
            </div>
          </Col>
          <Col className='text-end'>
            <p>Over {reviews.length} Reviews</p>
          </Col>
        </Row>
      </Container>
      {loading ? (
        <h2>Loading</h2>
      ) : (
        reviews.map((review, index) => (
          <Container key={index} className='mb-3'>
            <Card className='review-card'>
              <Card.Body>
                <Row>
                  <Col>
                    <Card.Title className='review-title'>{review.name}</Card.Title>
                  </Col>
                  <Col className='text-end'>
                    <div className='review-stars'>
                      {Array.from({ length: 5 }, (_, i) => (
                        <span key={i} className='star'>
                          {i < review.rating ? '★' : '☆'}
                        </span>
                      ))}
                    </div>
                  </Col>
                </Row>
                <Card.Text className='review-description'>{review.description}</Card.Text>
              </Card.Body>
            </Card>
          </Container>
        ))
      )}
    </div>
  );
}

export default Reviews;