import React from 'react';
import { NavLink } from 'react-router-dom'

const Categories = props => {
    const categories = props.categories.map((category, index) => {
        console.log(category.items)
        return <div key={index}>
            <NavLink
                to="/categories"
                exact
            ><h2>{category.name}</h2></NavLink>
            <h4>{category.description}</h4>
            {/* add conditional for categories without items  */}
            {category.items.map(function(item, index) {
                return (<li key={index}>{item.name}</li>)
            })}           
        </div>
    })

    return (
        <div>{categories}</div>
    );
};

export default Categories;