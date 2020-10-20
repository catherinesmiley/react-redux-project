import React, { Component } from 'react';
import CategoryItems from './CategoryItems'
import ItemsForm from './ItemsForm'
import { connect } from 'react-redux'
import { fetchItems, deleteItem } from '../actions/items'

class ItemsContainer extends Component {

    componentDidMount() {
        this.props.fetchItems()
        // fetchcategories instead?
    }

    render() {
        return (
            <div>
                <CategoryItems categoryID={this.props.category.id} items={this.props.items} deleteItem={this.props.deleteItem} />
                <ItemsForm categoryID={this.props.category.id} />
            </div>
        );
    }
}

const mapStateToProps = ({ items }) => ({ items })

export default connect(mapStateToProps, { fetchItems, deleteItem })(ItemsContainer);