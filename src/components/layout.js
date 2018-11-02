import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import Contact from './Contact'
import Footer from './Footer'
import '../assets/scss/main.scss'

class Layout extends React.Component {
    state = {
        loading: true
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
        return (
            <div
                className={classNames('body', {
                    'is-loading': this.state.loading
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
