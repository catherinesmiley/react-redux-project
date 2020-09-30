import React, { Component } from 'react';
import { connect } from 'react-redux'
import { fetchCategories } from './actions/categories'

class App extends Component {

    componentDidMount() {
        console.log("props", this.props)
        this.props.fetchCategories()
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