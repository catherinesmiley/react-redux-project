import React, { Component } from 'react';
import { connect } from 'react-redux'

class ItemsForm extends Component {

    state = {
        name: "", 
        // category_id: ""
    }

    handleOnChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleOnSubmit = event => {
        event.preventDefault()
        const item = {
            name: this.state.name
            // add id?
            // add id of associated category?
        }
        console.log("item on submit", item)
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

export default ItemsForm;