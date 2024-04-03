import React, { useEffect , useState} from 'react';
import '../../App.css';
import axios from "axios";
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container';

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

      )}
    </div>
  )
}

export default Reviews
