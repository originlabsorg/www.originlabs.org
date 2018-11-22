import React, { Component } from 'react'
import Form from './Form'

const Contact = () => (
  <section id="contact">
    <div className="inner">
      <Form />
      <section className="split">
        <section>
          <div className="contact-method">
            <span className="icon alt fa-envelope" />
            <h3>Email</h3>
            <a href="#">contact@originlabs.org</a>
          </div>
        </section>
        <section>
          <div className="contact-method">
            <span className="icon alt fa-phone" />
            <h3>Phone</h3>
            <span>(415) 506-7160</span>
          </div>
        </section>
        <section>
          <div className="contact-method">
            <span className="icon alt fa-home" />
            <h3>Address</h3>
            <span>
              1 Market Plaza SP6
              <br />
              San Francisco, CA 94105
              <br />
              United States of America
            </span>
          </div>
        </section>
      </section>
    </div>
  </section>
)

export default Contact
