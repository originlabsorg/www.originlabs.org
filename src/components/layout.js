import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import '../assets/scss/main.scss'
import Header from './Header'
import Menu from './Menu'
import Contact from './Contact'
import Footer from './Footer'

class Layout extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            loading: true
        }
    }

    componentDidMount () {
        this.timeoutId = setTimeout(() => {
            this.setState({loading: false});
        }, 100);
    }

    componentWillUnmount () {
        if (this.timeoutId) {
            clearTimeout(this.timeoutId);
        }
    }

    render() {
        const { isMenuVisible, loading } = this.state;

        return (
            <div
                className={classNames('body', {
                    'is-loading': loading
                })}
            >
                <div id="wrapper">
                    {this.props.children}
                    <Contact />
                    <Footer />
                </div>
            </div>
        )
    }
}

Layout.propTypes = {
    children: PropTypes.node
}

Layout.defaultProps = {
    children: null
}


export default Layout
