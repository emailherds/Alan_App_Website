import React from 'react'
import {Link} from 'react-router-dom'

function CardItemTwo(props) {
  return (
    <>
        <li className='cards__item'>
          <Link className='cards__item__link' to={props.path}>
            <figure className='cards__item__pic-wrapTwo' data-category={props.label}>
              <img
                className='cards__item__imgTwo'
                alt='Allergy'
                src={props.src}
              />
              </figure>
              <div className='cards__item__info'>
                <h5 className='cards__item__textTwo'>{props.text}</h5>
              </div>
          </Link>
        </li>
    </>
  );
}

export default CardItemTwo
