import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import Loader from 'react-loaders'
import profile from '../../assets/images/profile.png'

import {
  faInstagram,
  faLinkedin,
  faSkype,
} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const nameArray = ['T', 'a', 'l', 'h', 'a', ' ', 'H', 'a', 'm', 'e', 'e', 'd']
  const jobArray = [
    'W',
    'e',
    'b',
    ' ',
    'D',
    'e',
    'v',
    'e',
    'l',
    'o',
    'p',
    'e',
    'r',
  ]

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)
  }, [])

  return (
    <>
      <div className="container home-page">
        <div className="text-zone">
          <h1>
            <span className={letterClass}>H</span>
            <span className={`${letterClass} _12`}>i</span>,
            <br />
            <span className={`${letterClass} _13`}>I</span>'
            <span className={`${letterClass} _14`}>m</span>
            &ensp;
            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              idx={15}
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={jobArray}
              idx={22}
            />
          </h1>

          <h2>
            MERN Stack | Frontend Developer | ReactJS Expert | UI UX Designer
          </h2>
          <Link to="/contact" className="flat-button">
            CONTACT ME
          </Link>
        </div>
        <div className="profile-container">
          <div className="profile-card" data-tilt>
            <img src={profile} alt="profile" className="profile-image" />
            <h2>Talha hameed</h2>
            <p>
              Computer Science Student having expertise in Web Development, UI
              UX Designing and <b>Machine Learning</b>
            </p>
            {/* <div className="links">
              <a href="https://facebook.com">
                <img src={facebook} alt="facebook" />
              </a>
              <a href="https://twitter.com">
                <img src={twitter} alt="twitter" />
              </a>
              <a href="https://telegram.com">
                <img src={telegram} alt="telegram" />
              </a>
            </div> */}
            <ul>
              <li>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.linkedin.com/in/talha-hameed-520a4b242/"
                >
                  <FontAwesomeIcon icon={faLinkedin} color="#bab2b2" />
                </a>
              </li>

              <li>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.instagram.com/talhaaz007"
                >
                  <FontAwesomeIcon icon={faInstagram} color="#bab2b2" />
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="skype:echo123?talha.hameed068"
                >
                  <FontAwesomeIcon icon={faSkype} color="#bab2b2" />
                </a>
              </li>
            </ul>
            <Link to="/portfolio" className="btn">
              my work
            </Link>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Home
