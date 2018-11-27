import React from 'react'
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
          <h3>Custom Development</h3>
          <p>Cross-Platform Applications and Infrastructure</p>
        </header>
        <p className="description">
          Our team is pretty handy when it comes to building software! Over the past 10 hears we have helped our clients overcome countless technical challenges and build incredible products using modern tools and frameworks.
          <ul>
          <li>Cross Platform App Development</li>
          <li>Microservice Architecture</li>
          <li>Continuous Integration & Delivery</li>
          <li>Legacy Re-engineering</li>
          <li>Data Science and Big Data</li>
          </ul>
        </p>
      </article>
      <article style={{ backgroundImage: `url(${pic02})` }}>
        <header className="major">
          <h3>UI / UX Design</h3>
          <p>Branding, Interaction and User Experience </p>
        </header>
        <p className="description">
          We care about every little detail! At the heart of all of our products are simple and memorable user experiences. Our process is design-led, meaning we start with the user in mind and work our way down to the implementation details.
          <ul>
          <li>Branding</li>
          <li>User Research & Testing</li>
          <li>Wireframing & Storyboarding</li>
          <li>Interaction & Experience Design</li>
          <li>Front End Development</li>
          </ul>
        </p>
      </article>
      <article style={{ backgroundImage: `url(${pic03})` }}>
        <header className="major">
          <h3>Management and Strategy</h3>
          <p>Agile Team Management and Roadmapping</p>
        </header>
        <p className="description">
          By relentlessly gathering feedback we keep our clients happy and our projects on track! Our short feedback cycles allow us to build what our clients actually want while keeping the costs low.
          <ul>
          <li>Business Strategy</li>
          <li>Project Management</li>
          <li>Concept Validation</li>
          <li>ROI Analysis</li>
          </ul>
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
