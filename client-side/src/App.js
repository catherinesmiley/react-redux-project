import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import CategoriesContainer from './components/CategoriesContainer'
import CategoriesForm from './components/CategoriesForm'
import Home from './components/Home'
import Navbar from './components/Navbar'

class App extends Component {

    render() {
        return (
            <Router>
                <div>
                    <Navbar />
                    <Route exact path="/" component={Home} />
                    <Route exact path="/categories" component={CategoriesContainer} />
                    <Route exact path="/categories/new" component={CategoriesForm} />
                        <CategoriesContainer />
                        <CategoriesForm />
                </div>
            </Router>
        );
    }
}

export default App;