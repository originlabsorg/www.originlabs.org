import React from 'react'
import Recaptcha from 'react-recaptcha'
import keys from '../../keys'

const CustomRecaptcha = ({ callback }) => (
    <Recaptcha
        className="g-recaptcha"
        sitekey={keys.recaptcha.siteKey}
        theme="dark"
        onloadCallback={callback}
    />
)

export default CustomRecaptcha;