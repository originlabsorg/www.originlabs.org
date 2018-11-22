import React from 'react'
// import logo from '../assets/images/logo.png'

const Banner = () => (
    <section id="banner" className="major">
        <div className="inner">
            {/* <header className="major" style={headerStyle}>
                <h1>Origin Labs</h1>
                <derspan className="icon fa-flask"></derspan>
            </header> */}
            <div className="content">
                <p>A responsive site template designed by HTML5 UP<br />
                and released under the Creative Commons.</p>
                <ul className="actions">
                    <li><a href="#contact" className="button next scrolly">Get In Touch</a></li>
                </ul>
            </div>
        </div>
    </section>
)

const headerStyle = {
    display: 'flex',
    alignContent: 'center'
}

const logoStyle = {
    height: '50px',
    width: '50px',
    marginTop: '20px',
    marginRight: '5px'
}

export default Banner
