import React from 'react'
import Recaptcha from 'react-recaptcha'
import { reCaptcha } from '../config'

const CustomRecaptcha = ({ callback }) => (
    <Recaptcha
        className="g-recaptcha"
        sitekey={reCaptcha.siteKey}
        theme="dark"
        verifyCallback={callback}
    />
)

export default CustomRecaptcha;