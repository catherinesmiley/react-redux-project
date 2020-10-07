import React, { Component } from 'react';
import { connect } from 'react-redux'
import { addItem } from '../actions/items'

class ItemsForm extends Component {

    constructor(props) {
        super(props)
        this.state = {
            name: "", 
            category_id: this.props.categoryID
    }
}

    handleOnChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleOnSubmit = event => {
        event.preventDefault()
        const item = {
            name: this.state.name,
            // add id?
            category_id: this.props.categoryID
        }
        console.log("item on submit", item)
        this.props.addItem(item)
    }

    render() {
        return (
            <div>
                <form onSubmit={event => this.handleOnSubmit(event)}>
                    <input
                        type="text"
                        placeholder="New item name"
                        name="name"
                        onChange={this.handleOnChange}
                        value={this.state.name}
                    />
                    <br />
                    <input type="submit" value="Add new item"/>
                </form>
            </div>
        );
    }
}

export default connect(null, { addItem })(ItemsForm);