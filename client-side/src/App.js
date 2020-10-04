import React, { Component } from 'react';
import CategoriesContainer from './components/CategoriesContainer'
import CategoriesForm from './components/CategoriesForm'

class App extends Component {

    render() {
        return (
            <div>
                <CategoriesContainer />
                <CategoriesForm />
            </div>
        );
    }
}

export default App;