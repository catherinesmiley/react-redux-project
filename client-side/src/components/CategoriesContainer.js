import React, { Component } from 'react';
import { connect } from 'react-redux'
import { fetchCategories } from '../actions/categories'
import CategoriesForm from './CategoriesForm'
import Categories from './Categories'

class CategoriesContainer extends Component {

    componentDidMount() {
        this.props.fetchCategories()
    }

    render() {
        return (
            <div>
                <CategoriesForm categories={this.props.categories} />
                <Categories categories={this.props.categories} />
            </div>
        );
    }
}

// const mapStateToProps = state => {
//     return {
//         categories: state.categories
//     }
// }

const mapStateToProps = ({ categories }) => ({ categories })

export default connect(mapStateToProps, { fetchCategories })(CategoriesContainer);