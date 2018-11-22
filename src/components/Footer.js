import React from 'react'

const Footer = () => (
  <footer id="footer">
    <div className="inner">
      <ul className="icons">
        <li>
          <a
            href="https://www.twitter.com/originlabsorg"
            className="icon alt fa-twitter">
            <span className="label">Twitter</span>
          </a>
        </li>
        <li>
          <a
            href="https://www.github.com/originlabsorg"
            className="icon alt fa-github">
            <span className="label">GitHub</span>
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/originlabsorg"
            className="icon alt fa-linkedin">
            <span className="label">LinkedIn</span>
          </a>
        </li>
      </ul>
      <ul className="copyright">
        <li>&copy; {`Origin Labs ${new Date().getFullYear()}`}</li>
      </ul>
    </div>
  </footer>
)

export default Footer
