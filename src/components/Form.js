import React, { Component } from 'react'
import firebase from '../services/Firebase'
import CustomRecaptcha from './CustomRecaptcha'
import { reCaptcha, staticmanEndpoint } from '../config'
import $ from "jquery";

const submitForm = (table, onSuccess, onError) => {
    $.ajax({
        type: 'POST',
        url: staticmanEndpoint,
        data: $(table).serialize(),
        contentType: "application/x-www-form-urlencoded",
        success: (data) => onSuccess(data),
        error: (err) => onError(err)
    })
}

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
        const target = ev.target
        const value = target.value
        const inputName = target.getAttribute('id')
        this.setState({ [inputName]: value })
    }

    onSuccess = () => {
        this.setState({
            submissionResponse: 'The contact form was successfully submitted!',
            sendingButtonMessage: 'Message sent!'
        })
        this.resetForm()
    }

    onError = () => {
        this.setState({
            submissionResponse: 'There was an error with the submission, please try again later!',
        })
    }

    resetForm = () => this.setState({ name:'', email:'', message:'' })

    clearSubmissionResponse = () => this.setState({ submissionResponse: '' })

    handleFormSubmit = (ev) => {
        ev.preventDefault()
        const { name, email, message } = this.state
        this.setState({ sendingButtonMessage: 'Sending...' })

        // save form to firebase
        firebase
            .database()
            .ref('/contacts')
            .push({
                name,
                email,
                message,
            })
            .then(() => {
                this.setState({ submissionResponse: 'Processing...' })
                
            })
            .catch((error) => {
                this.setState({ submissionResponse: 'Something went wrong!' })
            })

        // submit form to staticman server
        submitForm(ev.target, this.onSuccess, this.onError)
    }

    checkCaptcha = (res) => {
        this.setState({ reCaptchaCheck: res.length && true })
    }

    render() {
        const { name, email, message, reCaptchaCheck, sendingButtonMessage, submissionResponse } = this.state
        return (
            <section>
                <form
                    method="post"
                    onSubmit={this.handleFormSubmit}
                    onChange={this.clearSubmissionResponse}
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
                                disabled={!reCaptchaCheck}
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
