import React, { Component } from 'react'
import firebase from '../services/Firebase'
import serialize from '../libs/serialize'
import CustomRecaptcha from './Recaptcha'
import { reCaptcha, staticmanEndpoint } from '../config'

class Form extends Component {
    state = {
        name: '',
        email: '',
        message: '',
        reCaptchaCheck: false,
        sendingButtonMessage: 'Send Message',
        submissionResponse: '',
    }

    handleFieldChange = (ev) => {
        const target = ev.target;
        const value = target.value;
        const inputName = target.getAttribute('id')
        this.setState({ [inputName]: value })
    }

    handleFormSubmit = (ev) => {
        console.log('here')
        ev.preventDefault()
        this.setState({ sendingButtonMessage: 'Sending...' })
        firebase.database().ref('/contacts').push(this.state)
            .then(function() {
                console.log('Contacts added successfully')
            })
            .catch(function(error) {
                console.log('Something went wrong!')
            });

        fetch(
            staticmanEndpoint[process.env.NODE_ENV],
            {
                method:'POST',
                headers: new Headers({
                            'Content-Type': 'application/x-www-form-urlencoded',
                }),
                data: 'fields%5Bname%5D=Bogdan+Vidican&fields%5Bemail%5D=bogdanvidican%40gmail.com&fields%5Burl%5D=&fields%5Bmessage%5D=TESTING THIS MOFO!!!!!!!'
            }
        )

        this.setState({ sendingButtonMessage: 'Message sent!' })
    }

    checkCaptcha = (res) => {
        // this.setState({ reCaptcha: res, submissionResponse: res.message })
        this.setState({ submissionResponse: 'Test message!' })
        console.log('callback has fired!!!!', res)
    }

    render() {
        const { name, email, message, reCaptchaCheck, sendingButtonMessage, submissionResponse } = this.state
        return (
            <section>
                <form
                    method="post"
                    onSubmit={this.handleFormSubmit}
                    // action={staticmanEndpoint[process.env.NODE_ENV]}
                    action={staticmanEndpoint['production']}
                >
                    <input name="options[slug]" type="hidden" value=""></input>
                    <input
                        type="hidden"
                        name="options[reCaptcha][siteKey]"
                        value={reCaptcha.siteKey}
                    />
                    <input
                        type="hidden"
                        name="options[reCaptcha][secret]"
                        value={reCaptcha.encryptedSecretKey}
                    />
                    <div className="field half first">
                        <label htmlFor="name">Name</label>
                        <input 
                            type="text"
                            name="fields[name]"
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
                            name="fields[email]"
                            id="email"
                            value={email}
                            onChange={this.handleFieldChange}
                            required
                        />
                    </div>
                    <div className="field">
                        <label htmlFor="message">Message</label>
                        <textarea
                            name="fields[message]"
                            id="message"
                            rows="6"
                            value={message}
                            onChange={this.handleFieldChange}
                            required
                        ></textarea>
                    </div>
                    <div className="field">
                        {submissionResponse && <p>{submissionResponse}</p>}
                    </div>
                    <CustomRecaptcha callback={this.checkCaptcha} />
                    <ul className="actions">
                        <li>
                            <input
                                type="submit"
                                value={sendingButtonMessage}
                                className="special"
                                disabled={reCaptchaCheck}
                            />
                        </li>
                        <li>
                            <input type="reset" value="Clear" />
                        </li>
                    </ul>
                </form>
            </section>
        )
    }
}

export default Form
