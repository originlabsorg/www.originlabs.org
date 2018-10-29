import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

const Header = ({ onToggleMenu }) => (
    <header id="header" className="alt">
        <nav>
            <a className="menu-link" onClick={onToggleMenu} href="javascript:;">Menu</a>
        </nav>
    </header>
)

Header.propTypes = {
    onToggleMenu: PropTypes.func.isRequired
}

export default Header
