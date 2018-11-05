import React, { Component } from 'react';
import PropTypes from 'prop-types';

class FirebaseProvider extends Component {

    static propTypes = {
        children: PropTypes.element,
        firebase: PropTypes.object.isRequired,
    }

    static chidlContextTypes = {
        firebase: PropTypes.object,
    }

    getChildContext() {
        return this.props.firebase
    }

    render() {
        return this.props.children
    }
}

export default FirebaseProvider;