import React, { useEffect , useState} from 'react';
import '../../App.css';
import axios from "axios";
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';

function Reviews() {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios.get("http://localhost:5555/reviews").then(
      response => {
        setReviews(response.data.data);
        setLoading(false);
      }
    ).catch((error) => {
      console.log(error);
      setLoading(false);
    })
  }, [])

  let total = 0;
  for(let i = 0; i < reviews.length; i++){
    total += reviews[i].rating
  }
  const average = reviews.length ? (total / reviews.length).toFixed(1) : 0;

  return (
    <div className='review'>
      <Container className='review-summary'>
        <Card className='review-summary-card'>
          <Row>
            <Col>
              <Card.title className="review-summary-title">
            </Col>
          </Row>
        </Card>
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

export default Reviews