import React from 'react'
import '../../App.css'
import CardItem from '../CardItem'
import '../Cards.css'

function Features() {
  return (
    <div className = "features">
        <div className='cards'>
            {/* <h1>Features</h1> */}
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem
                        src = '/images/stars.jpg'
                        text="The Alan App has a rating of 4.5 stars out of 5 on the App Store."
                        label = "Ratings"
                        path = '/reviews'
                        />
                        <CardItem
                        src = '/images/people.jpg'
                        text="The Alan App has over 1,500 total registered users through the App Store"
                        label = "Users"
                        path = '/reviews'
                        />
                        <CardItem
                        src = '/images/people.jpg'
                        text="The Alan App has over 1,500 total registered users through the App Store"
                        label = "Users"
                        path = '/reviews'
                        />
                    </ul>
                </div>
        </div>
        </div>
    </div>
  )
}

export default Features
