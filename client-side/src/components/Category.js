import React from 'react';
import ItemsContainer from './ItemsContainer'

const Category = ({ match, categories }) => {
    let category = categories.categories.find(c => c.id === parseInt(match.params.id))

    if (categories.categories.length === 0) return null 
    
    return (
        <>
        <div>
            <h2>{category.name}</h2>
            <ItemsContainer category={category}/>
        </div>
        </>
    );
};

export default Category;