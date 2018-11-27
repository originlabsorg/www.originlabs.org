import React from 'react'
// import logo from '../assets/images/logo.png'

const Banner = () => (
  <section id="banner" className="major">
    <div className="inner">
      <div className="content">
        <p>
          We are a digital products studio located in the
          <br />
          San Francisco Bay Area
        </p>
        <ul className="actions">
          <li>
            <a href="#contact" className="button next scrolly">
              Get In Touch
            </a>
          </li>
        </ul>
      </div>
    </div>
  </section>
)

const headerStyle = {
  display: 'flex',
  alignContent: 'center',
}

const logoStyle = {
  height: '50px',
  width: '50px',
  marginTop: '20px',
  marginRight: '5px',
}

export default Banner
