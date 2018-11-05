import React, { Component } from 'react'
import firebase from '../services/Firebase'

class Form extends Component {
    state = {
        name: '',
        email: '',
        message: '',
    }

    handleFieldChange = (ev) => {
        const target = ev.target;
        const value = target.value;
        const inputName = target.getAttribute('name')
        this.setState({ [inputName]: value })
    }

    handleFormSubmit = (ev) => {
        ev.preventDefault();
        console.log('form submitted')
        firebase.database().ref('/contacts').push(this.state, function(error) {
            if (error) {
                console.error('ERROR---------------------')
                console.log(error);
            } else {
                console.log('SUCCESS+++++++++++++++++++')
            }
          })
    }

    render() {
        const { name, email, message } = this.state
        return (
            <section>
                <form method="post" onSubmit={this.handleFormSubmit}>
                    <div className="field half first">
                        <label htmlFor="name">Name</label>
                        <input type="text" name="name" id="name" value={name} onChange={this.handleFieldChange}/>
                    </div>
                    <div className="field half">
                        <label htmlFor="email">Email</label>
                        <input type="text" name="email" id="email" value={email} onChange={this.handleFieldChange}/>
                    </div>
                    <div className="field">
                        <label htmlFor="message">Message</label>
                        <textarea name="message" id="message" rows="6" value={message} onChange={this.handleFieldChange}></textarea>
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
