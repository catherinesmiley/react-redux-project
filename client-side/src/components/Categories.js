import React from 'react';
import { Link, Switch, Route } from 'react-router-dom'
import Category from './Category'

const Categories = props => {
    const categories = props.categories.map((category, index) => {
        console.log(category.items)
        return <div key={index}>
            <Link
                to={`/categories/${category.id}`}
            ><h2>{category.name}</h2></Link>
            <h4>{category.description}</h4>
            {/* add conditional for categories without items  */}
            {/* {category.items.map(function(item, index) {
                return (<li key={index}>{item.name}</li>)
            })}            */}
            {/* ternary - if no items, render "no items" text - put on category show page */}
        </div>
    })

    return (
        <div>
        {categories}
        {/* <Switch>
            <Route exact path="/categories/:id" render={(props) => <Category {...props} categories={props.categories} />} />
        </Switch> */}
        </div>
    );
};

export default Categories;