import React from 'react'
import Scrollchor from 'react-scrollchor'
import InstagramIcon from './shared/svg/instagram'
import GitHubIcon from './shared/svg/github'
import TwitterIcon from './shared/svg/twitter'
import LinkedInIcon from './shared/svg/linkedin'

const Menu = ({menuOpen, toggleMenu}) => {
  return (
    <div className='menu'>
      <div className='menu__inner'>
        <div className='menu__logo'>
          <div id='menu-toggle' className='menu__logo__text util--hide-medium-down' onClick={toggleMenu}>TL</div>
          <div id='home_link' className='menu__logo__text util--show-medium'><Scrollchor to=''>TL</Scrollchor></div>
        </div>
        <div className={`menu__items ${menuOpen ? `menu--open` : ''}`}>
          <a id='about_link' href='#' className='menu__item menu__item--link'>
            <Scrollchor to='about'>
              About
            </Scrollchor>
          </a>
          <a id='apps_link' href='#apps' className='menu__item menu__item--link'>
            <Scrollchor to='apps'>
              Apps
            </Scrollchor>
          </a>
          <a id='writing_link' href='#writing' className='menu__item menu__item--link'>
            <Scrollchor to='writing'>
              Writing
            </Scrollchor>
          </a>
          <div className='menu__item menu__item--link'>
            <a href='https://talum.github.io' target='_blank' rel='noopener noreferrer'>Tech Blog</a>
          </div>
          <div className='menu__item menu__item--icons'>
            <div className='svg-container'>
              <a href='https://www.instagram.com/tracidini'
                 target='_blank' rel='noopener noreferrer'>
                <InstagramIcon/>
              </a>
            </div>
            <div className='svg-container'>
              <a href='https://www.twitter.com/tracidini'
                 target='_blank' rel='noopener noreferrer'>
                <TwitterIcon/>
              </a>
            </div>
            <div className='svg-container'>
              <a href='https://www.linkedin.com/in/tracylum'
                 target='_blank' rel='noopener noreferrer'>
                <svg className='svg__icon svg__icon--fill-white'>
                  <LinkedInIcon/>
                </svg>
              </a>
            </div>
            <div className='svg-container'>
              <a href='https://www.github.com/talum' target='_blank' rel='noopener noreferrer'>
                <GitHubIcon />
              </a>
            </div>
          </div>
        </div>
      </div>
  </div>
  )
}

export default Menu
