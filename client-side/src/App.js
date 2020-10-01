import React, { Component } from 'react';
import { connect } from 'react-redux'
import CategoriesContainer from './components/CategoriesContainer'

class App extends Component {

    render() {
        return (
            <div>
                <CategoriesContainer />
            </div>
        );
    }
}

export default App;