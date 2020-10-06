import React from 'react';
import { NavLink } from 'react-router-dom'

const Categories = props => {
    const categories = props.categories.map((category, index) => {
        console.log("category items in map", category.items)
        return <div key={index}>
            <NavLink
                to="/categories"
                exact
            ><h2>{category.name}</h2></NavLink>
            <h4>{category.description}</h4>
            {/* {categories.map(function(item, index) {
                return (<li key={index}>{item}</li>)
            })} */}
        </div>
        // render each item
    })

    // const items = categories.map((item, index) => {
    //     console.log("item", item)
    //     return (<li key={index}>{item}</li>)
    // })

    return (
        <div>
            {categories}
            {/* {items} */}
        </div>
    );
};

export default Categories;