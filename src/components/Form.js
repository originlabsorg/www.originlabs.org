import React, { Component } from 'react'
import firebase from '../services/Firebase'
import CustomRecaptcha from './Recaptcha'

class Form extends Component {
    state = {
        name: '',
        email: '',
        message: '',
        reCaptcha: false,
    }

    handleFieldChange = (ev) => {
        const target = ev.target;
        const value = target.value;
        const inputName = target.getAttribute('id')
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

    checkCaptcha = (res) => {
        // this.setState({ reCaptcha: res })
        console.log('callback has fired!!!!')
    }

    render() {
        const { name, email, message } = this.state
        return (
            <section>
                <form
                    method="post"
                    // onSubmit={this.handleFormSubmit}
                    action="https://staticmanserver.herokuapp.com/v2/entry/bogdanvidican/staticman/master/comments"
                >
                    <input name="options[slug]" type="hidden" value=""></input>
                    <input
                        type="hidden"
                        name="options[reCaptcha][siteKey]"
                        value="6Lc2dXkUAAAAAL6hepoPO4BYkTI_uRzQ8xR92kvy"
                    />
                    <input
                        type="hidden"
                        name="options[reCaptcha][secret]"
                        value="DAdCdBYBho/WcGWzC+VfJA1oYwmyYftgKCsW9S1m/SdepmSaSdtGZoj6SeZBB9N3XVioWQlPd5N/FyE8YbFn/oIDFnc+J+2myK8IHP7yivuaEfUR1fgApAlf4TROE90mlQ1zOrFLiTuFq2zIDF9dZlVtNQzreBI8yA37utIb54geXAvqukoehFSTNDjZis0NEgLCaKCxtB9E56uDCVHX8G6ODU/dftdoGxryHOojj9rfHWAFoJ3tslNhCkUixQLt41bJRVfKAXWu2v6FNI1bl1F2McetNUwrd9QTFY7qjJwadzVbO18jQ5MAjvRJvko3RN3SxOPpHJ9RAquj32n7StyzBCQRkmO/l+SkYOjySO85Qob9DIfjuK2sxxoUNFOkpTIu5mlDwirh7anD2IsucuYuLMpzzhjzOlqU4/jbMSQhx7YmFI5nZo1MuqNfrKJxVvz95Jo5ctWuFhR7hUfXFmlwvPJ8+4VJvnhpauspfz1Q2kgZPFDQDzww47rsUtKWJx7RRyBFvDqqgxw5jPJRMX8MnfoENrHKz13VY5SzuIstNmw6q91j/pprOt6FZQqyqNxqbXVt/bYJP/PU5yN3lsvhzz0V9ic3hQ40ccpmkZO3O2uPA/PBfey7DrLhp2YHE+KcXridOzmxwHolN8U4xcahbCw4Fogt54B4od9Qbts="
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
                            onChange={this.handleFieldChange} required
                        ></textarea>
                    </div>
                    <CustomRecaptcha callback={this.checkCaptcha} />
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

