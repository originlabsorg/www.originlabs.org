import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/Layout'
import Banner from '../components/Banner'

import pic01 from '../assets/images/mobile.png'
import pic02 from '../assets/images/web.png'
import pic03 from '../assets/images/data.png'
import pic04 from '../assets/images/pic04.jpg'
import pic05 from '../assets/images/pic05.jpg'
import pic06 from '../assets/images/pic06.jpg'

const HomeIndex = () => (
    <Layout>
        <Helmet
            title="Gatsby Starter - Forty"
            meta={[
                { name: 'description', content: 'Sample' },
                { name: 'keywords', content: 'sample, something' },
            ]}
        >
        </Helmet>
        <Banner />
        <div id="main">
            <section id="one" className="tiles">
                <article style={{backgroundImage: `url(${pic01})`}}>
                    <header className="major">
                        <h3>Mobile Apps</h3>
                        <p>Cross-Paltform Mobile Development</p>
                    </header>
                </article>
                <article style={{backgroundImage: `url(${pic02})`}}>
                    <header className="major">
                        <h3>Web Apps</h3>
                        <p>Web App Design & Development</p>
                    </header>
                </article>
                <article style={{backgroundImage: `url(${pic03})`}}>
                    <header className="major">
                        <h3>Magna</h3>
                        <p>Lorem etiam nullam</p>
                    </header>
                </article>
            </section>
            <section id = "two" >
                <div className = "inner">
                    <h1>Client badges go here!</h1>
                </div>
            </section>
        </div>

    </Layout>
)

export default HomeIndex