import React from 'react';

const Category = ({ match, categories }) => {
    // destructure - go through the state of our categories and filter out the category with an id of our match
    let category = categories.find(c => c.id === parseInt(match.params.id))
    console.log(category)
    if (categories.length === 0) return null 
    // when you do a refresh it doesn't remember the props - categories container no longer being mounted, only category is
    // this interferes with the rerender so this component maintains its props
    return (
        <div>
            {category.name}
        </div>
    );
};

export default Category;