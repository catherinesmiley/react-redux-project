import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import CategoriesContainer from './components/CategoriesContainer'
import CategoriesForm from './components/CategoriesForm'
import Home from './components/Home'

class App extends Component {

    render() {
        return (
            <Router>
                <div>
                    <Route exact path="/" component={Home} />
                        <CategoriesContainer />
                        <CategoriesForm />
                </div>
            </Router>
        );
    }
}

export default App;