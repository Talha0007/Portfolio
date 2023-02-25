import React, { useState, useEffect } from 'react'
import Loader from 'react-loaders'
import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
// import ProjectCard from '../Card/ProjectCard'

const Portfolio = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  return (
    <>
      <div className="container portfolio-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['P', 'o', 'r', 't', 'f', 'o', 'l', 'i', 'o']}
              idx={15}
            />
          </h1>
          <p className="bold-content">
            "I'm inviting you to take a look at my Portfolio and explore the
            Designs and Web Applications I've created, showcasing my skills and
            passion for web development."
            <br />
          </p>
        </div>
        <div className="show-portfolio">Comming Soon....</div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Portfolio
