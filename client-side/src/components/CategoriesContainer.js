import React, { Component } from 'react';
import { connect } from 'react-redux'
import { fetchCategories } from '../actions/categories'

class CategoriesContainer extends Component {

    componentDidMount() {
        this.props.fetchCategories()
    }

    render() {
        console.log("categories in render", this.props.categories)
        let categories = this.props.categories.map((category, index) => 
            <div key={index}>
                <h2>{category.name}</h2>
                <h4>{category.description}</h4>
                <ul>
                    {/* render each item */}
                </ul>
            </div>
        )
        return (
            <div>
                {categories}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        categories: state.categories
    }
}

export default connect(mapStateToProps, { fetchCategories })(CategoriesContainer);