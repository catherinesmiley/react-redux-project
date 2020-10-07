import React, { Component } from 'react';
import { connect } from 'react-redux'

class ItemsForm extends Component {

    state = {
        name: "", 
        category_id: ""
    }

    render() {
        return (
            <div>
                <form>
                    <input
                        type="text"
                        placeholder="New item name"
                        name="name"
                    />
                    <br />
                    <input type="submit" value="Add new item"/>
                </form>
            </div>
        );
    }
}

export default ItemsForm;