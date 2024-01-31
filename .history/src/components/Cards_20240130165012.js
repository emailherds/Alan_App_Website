import React from 'react'
import CardItem from './CardItem'
import './Cards.css'

function Cards() {
  return (
    <div className='cards'>
      <h1>Highly rated on the app store.</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
            <ul className="cards__items">
                <CardItem
                src = "/images/stars.jpg"
                text="Highly rated on the app store!"
                label = "Ratings"
                path = '/reviews'
                />
            </ul>
        </div>
      </div>
    </div>
  )
}

export default Cards
