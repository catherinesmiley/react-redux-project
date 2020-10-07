import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import CategoriesContainer from './components/CategoriesContainer'
import Home from './components/Home'
import Navbar from './components/Navbar'

class App extends Component {

    render() {
        return (
            <Router>
                <div>
                    <Navbar />
                    <Switch>
                        <Route exact path="/" component={Home} />
                    </Switch>
                    <CategoriesContainer />
                    {/* <Route exact path="/categories" component={CategoriesContainer} />
                    <Route exact path="/categories/new" component={CategoriesForm} /> */}
                </div>
            </Router>
        );
    }
}

export default App;