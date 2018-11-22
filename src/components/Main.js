import React from 'react'
import { Link } from 'gatsby'
import pic01 from '../assets/images/mobile.png'
import pic02 from '../assets/images/web.png'
import pic03 from '../assets/images/data.png'
import enova from '../assets/images/clients/enova.png'
import taskrabbit from '../assets/images/clients/taskrabbit.png'
import trusted from '../assets/images/clients/trusted.png'
import persist from '../assets/images/clients/persist.png'
import blackbird from '../assets/images/clients/blackbird.png'
import gfl from '../assets/images/clients/gfl.png'
import carbonfive from '../assets/images/clients/carbonfive.png'
import tablexi from '../assets/images/clients/tablexi.png'
import trunkclub from '../assets/images/clients/trunkclub.png'

// ideally we should create a component for each "article" and just iterate over an array of objects which describes each "article";

const Main = () => (
  <div id="main">
    <section id="one" className="tiles">
      <article style={{ backgroundImage: `url(${pic01})` }}>
        <header className="major">
          <h3>Mobile Applications</h3>
          <p>Cross-Paltform Mobile Development</p>
        </header>
        <p className="description">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged.
        </p>
      </article>
      <article style={{ backgroundImage: `url(${pic02})` }}>
        <header className="major">
          <h3>Web Applications</h3>
          <p>Cross-Platform Web Development</p>
        </header>
        <p className="description">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged.
        </p>
      </article>
      <article style={{ backgroundImage: `url(${pic03})` }}>
        <header className="major">
          <h3>Big Data</h3>
          <p>Lorem etiam nullam</p>
        </header>
        <p className="description">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged.
        </p>
      </article>
    </section>
    <section id="two">
      <div className="inner">
        <div className="row">
          <a href="https://www.greenfieldlabs.com">
            <div className="logo" style={{ backgroundImage: `url(${gfl})` }} />
          </a>
          <a href="https://www.blackbird.us">
            <div
              className="logo"
              style={{ backgroundImage: `url(${blackbird})` }}
            />
          </a>
          <a href="https://www.trunkclub.com">
            <div
              className="logo"
              style={{ backgroundImage: `url(${trunkclub})` }}
            />
          </a>
          <a href="https://www.usetrusted.com">
            <div
              className="logo"
              style={{ backgroundImage: `url(${trusted})` }}
            />
          </a>
          <a href="https://www.persistiq.com">
            <div
              className="logo"
              style={{ backgroundImage: `url(${persist})` }}
            />
          </a>
          <a href="https://www.taskrabbit.com">
            <div
              className="logo-wide"
              style={{ backgroundImage: `url(${taskrabbit})` }}
            />
          </a>
          <a href="https://www.enova.com">
            <div
              className="logo-wide"
              style={{ backgroundImage: `url(${enova})` }}
            />
          </a>
          <a href="https://www.tablexi.com">
            <div
              className="logo-wide"
              style={{ backgroundImage: `url(${tablexi})` }}
            />
          </a>
          <a href="https://www.carbonfive.com">
            <div
              className="logo-wide"
              style={{ backgroundImage: `url(${carbonfive})` }}
            />
          </a>
        </div>
      </div>
    </section>
  </div>
)

export default Main
