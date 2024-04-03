import React, { useEffect , useState} from 'react';
import '../../App.css';
import axios from "axios";

function Reviews() {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    axios.get("http://localhost:5555/reviews").then(
      response => console.log(response)
    )
  }, [])

  return (
    <div>
      
    </div>
  )
}

export default Reviews
