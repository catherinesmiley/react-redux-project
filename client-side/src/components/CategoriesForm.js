import React, { Component } from 'react';
import { connect } from 'react-redux'
import { addCategory } from '../actions/categories'

class CategoriesForm extends Component {

    state = {
        name: "",
        description: ""
    }

    handleOnChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleOnSubmit = event => {
        event.preventDefault()
        // create add category action, add as prop, and call here
        const category = {
            name: this.state.name,
            description: this.state.description
            // add id? 
        }

        this.props.addCategory(category)
    }

    render() {
        return (
            <div>
                <form onSubmit={event => this.handleOnSubmit(event)}>
                    <input 
                        type="text" 
                        placeholder="Checklist name"
                        name="name"
                        onChange={this.handleOnChange}
                        value={this.state.name}
                    />
                    <br />
                    <input 
                        type="text" 
                        placeholder="Checklist description"
                        name="description"
                        onChange={this.handleOnChange}
                        value={this.state.description}
                    />
                    <br />
                    <input type="submit" value="Create new checklist"/>
                </form>
            </div>
        );
    }
}

export default connect(null, { addCategory })(CategoriesForm);