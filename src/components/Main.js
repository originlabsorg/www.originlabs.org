import React from 'react'
import pic01 from '../assets/images/mobile.png'
import pic02 from '../assets/images/web.png'
import pic03 from '../assets/images/data.png'

// ideally we should create a component for each "article" and just iterate over an array of objects which describes each "article";

const Main = () => (
    <div id="main">
        <section id="one" className="tiles">
            <article style={{backgroundImage: `url(${pic01})`}}>
                <header className="major">
                    <h3>Mobile Apps</h3>
                    <p>Cross-Paltform Mobile Development</p>
                </header>
                <p className="description">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
            </article>
            <article style={{backgroundImage: `url(${pic02})`}}>
                <header className="major">
                    <h3>Web Apps</h3>
                    <p>Web App Design & Development</p>
                </header>
                <p className="description">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
            </article>
            <article style={{backgroundImage: `url(${pic03})`}}>
                <header className="major">
                    <h3>Magna</h3>
                    <p>Lorem etiam nullam</p>
                </header>
                <p className="description">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
            </article>
        </section>
        <section id = "two" >
            <div className = "inner">
                <h1>Client badges go here!</h1>
            </div>
        </section>
    </div>
)

export default Main