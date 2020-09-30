import React, { Component } from 'react';
import { connect } from 'react-redux'
import { fetchCategories } from './actions/categories'

class App extends Component {

    componentDidMount() {
        console.log("props", this.props)
        this.props.fetchCategories()
        console.log("props now", this.props)
    }

    render() {
        return (
            <div>
                hi!!!!!!
            </div>
        );
    }
}

export default connect(null, { fetchCategories })(App);