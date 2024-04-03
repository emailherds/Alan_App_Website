import React, { useEffect } from 'react';
import '../../App.css';
import axios from "axios";

function Reviews() {
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
