import React from 'react';
import ItemsContainer from './ItemsContainer'

const Category = ({ match, categories }) => {
    // debugger;
    // destructure - go through the state of our categories and filter out the category with an id of our match
    let category = categories.categories.find(c => c.id === parseInt(match.params.id))
    console.log(category)
    if (categories.categories.length === 0) return null 
    // when you do a refresh it doesn't remember the props - categories container no longer being mounted, only category is
    // this interferes with the rerender so this component maintains its props
    return (
        <>
        <div>
            {category.name}
            <ItemsContainer category={category}/>
        </div>
        </>
    );
};

export default Category;