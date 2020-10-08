import React, { Component } from 'react';
import CategoryItems from './CategoryItems'
import ItemsForm from './ItemsForm'
import { connect } from 'react-redux'
// import { fetchItems } from '../actions/items'

class ItemsContainer extends Component {

    // componentDidMount() {
    //     this.props.fetchItems()
    //     console.log("props in items container", this.props)
    // }
    render() {
        console.log("props in items container", this.props.category.items)
        return (
            <div>
                <CategoryItems categoryID={this.props.category.id} items={this.props.category.items} />
                <ItemsForm categoryID={this.props.category.id} />
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        items: state.items.items
    }
}

// const mapStateToProps = ({ items }) => ({ items })

export default connect(mapStateToProps)(ItemsContainer);