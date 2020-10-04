import React, { Component } from 'react';

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

    render() {
        return (
            <div>
                <form>
                    <input 
                        type="text" 
                        placeholder="Checklist name"
                        name="name"
                        onChange={this.handleOnChange}
                        value={this.state.name}
                    />
                    <input type="submit" value="Create new checklist"/>
                </form>
            </div>
        );
    }
}

export default CategoriesForm;