import React from 'react'
import {Link} from 'react-router-dom'

function CardItem() {
  return (
    <>
        <li className="cards__item">
            <div className="card">
                <div className="card__image">
                    <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80" alt=""/>
                </div>
                <div className="card__content">
                    <h3 className="card__title">Card Title</h3>
                    <p className="card__text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, quod, quaerat.</p>
                </div>
            </div>
        </li>
    </>
  )
}

export default CardItem
