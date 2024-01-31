import React from 'react'
import '../../App.css'
import CardItem from '../CardItem'
import '../Cards.css'

function Features() {
  return (
    <div className = "features">
        <div className='cards__features'>
            <h1>Features</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem
                        src = '/images/comprehensive.jpg'
                        text="The Alan App provides a comprehensive allergy guide in the form of allergy translators, symptom trackers, restaurant menus, allergy-friendly recipes and more!"
                        label = "Ratings"
                        path = '/reviews'
                        />
                        <CardItem
                        src = '/images/emergency.jpg'
                        text="The Alan App has over 1,500 total registered users through the App Store"
                        label = "Users"
                        path = '/reviews'
                        />
                        <CardItem
                        src = '/images/community.jpg'
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
