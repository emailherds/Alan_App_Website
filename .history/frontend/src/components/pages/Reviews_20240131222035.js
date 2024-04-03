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
        <h2>Loading</h2>
      ):(
        {reviews.map((review, index) => (
            <Container Key={book._id}>
            </Container>
              <h1></h1>
              <h1></h1>
              <h1></h1>
          ))}
      )}
    </div>
  )
}

export default Reviews
