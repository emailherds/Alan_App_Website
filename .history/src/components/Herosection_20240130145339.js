import React from 'react'
import {Button} from './Button'
import './HeroSection.css'
import '../App.css'

function HeroSection() {
  return (
    <div classname = "hero-container">
      <h1>The Alan App</h1>
      <p>An all in one allergy app</p>
      <div className="hero-btns">
        <Button></Button>
      </div>
    </div>
  )
}

export default Herosection
