import React, { Component } from 'react';
import { connect } from 'react-redux'
import { fetchCategories } from '../actions/categories'
import { Switch, Route } from 'react-router-dom'
import Categories from './Categories'
import Category from './Category'
import CategoriesForm from './CategoriesForm'

class CategoriesContainer extends Component {

    componentDidMount() {
        this.props.fetchCategories()
    }

    render() {
        return (
            <div>
                <Switch>
                    <Route exact path="/categories" render={(props) => <Categories {...props} categories={this.props.categories} />} />
                    <Route exact path="/categories/new" component={CategoriesForm} />
                    <Route exact path="/categories/:id" render={(props) => <Category {...props} categories={this.props.categories} />} />
                </Switch>
            </div>
        );
    }
}   

const mapStateToProps = ({ categories }) => ({ categories })

export default connect(mapStateToProps, { fetchCategories })(CategoriesContainer);