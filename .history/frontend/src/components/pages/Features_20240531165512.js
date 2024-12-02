import React from 'react'
import '../../App.css'
import CardItem from '../CardItemTwo.js'
import '../CardsTwo.css'

function Features() {
  return (
    <div className = "features">
        <div className="features-container">
            <h1>Features</h1>
            <div className="cards__containerTwo">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem
                        src = '/images/comprehensive.jpg'
                        text="The Alan App provides a comprehensive allergy guide in the form of allergy translators, symptom trackers, restaurant menus, allergy-friendly recipes and more!"
                        label = "Guide"
                        path = '/reviews'
                        />
                        <CardItem
                        src = '/images/emergency.jpg'
                        text="The Alan App also provides emergency care assistance in the form of guides on allergic reaction symptoms, instructions on epinephrine administration, and more!"
                        label = "Emergency Care"
                        path = '/reviews'
                        />
                        <CardItem
                        src = '/images/community.jpg'
                        text="The Alan App provides a group messaging feature, enabling people to speak with others in various age categories regarding food allergies. We plan to roll out an individual messaging function in the near future!"
                        label = "Community"
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
