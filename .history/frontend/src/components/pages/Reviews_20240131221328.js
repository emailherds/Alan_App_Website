import React, { useEffect , useState} from 'react';
import '../../App.css';
import axios from "axios";
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container';
// import 'bootstrap/dist/css/bootstrap.min.css';
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

  return (
    <div className=''>
      <h1>Reviews</h1>
      {loading ? (
        <h2>Loading...</h2>
      ):(
        <Container>
          <Row>
            <Card style={{ width: '18rem' }}>
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
                <Card.Link href="#">Card Link</Card.Link>
                <Card.Link href="#">Another Link</Card.Link>
              </Card.Body>
            </Card>
          </Row>
        </Container>
      )}
    </div>
  )
}

export default Reviews
