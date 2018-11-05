import React, { Component } from 'react'
import firebase from '../services/Firebase'

class Form extends Component {
    state = {
        name: '',
        email: '',
        message: '',
        error: 'sadasfdas',
    }

    handleFieldChange = (ev) => {
        const target = ev.target;
        const value = target.value;
        const inputName = target.getAttribute('name')
        this.setState({ [inputName]: value })
    }

    handleFormSubmit = (ev) => {
        ev.preventDefault()
        firebase.database().ref('/contacts').push(this.state)
            .then(function() {
                console.log('Contacts added successfully')
            })
            .catch(function(error) {
                console.log('Something went wrong!')
            });
    }

    render() {
        const { name, email, message } = this.state
        return (
            <section>
                <form method="post" onSubmit={this.handleFormSubmit}>
                    <div className="field half first">
                        <label htmlFor="name">Name</label>
                        <input 
                            type="text"
                            name="name"
                            id="name"
                            value={name}
                            onChange={this.handleFieldChange}
                            pattern="[A-Za-z\-'\s]+"
                            required
                        />
                    </div>
                    <div className="field half">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            value={email}
                            onChange={this.handleFieldChange}
                            required
                        />
                    </div>
                    <div className="field">
                        <label htmlFor="message">Message</label>
                        <textarea name="message" id="message" rows="6" value={message} onChange={this.handleFieldChange} required></textarea>
                    </div>
                    <ul className="actions">
                        <li><input type="submit" value="Send Message" className="special" /></li>
                        <li><input type="reset" value="Clear" /></li>
                    </ul>
                </form>
            </section>
        )
    }
}

export default Form
