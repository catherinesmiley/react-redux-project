import React from 'react';
import ItemsContainer from './ItemsContainer'

const Category = ({ match, categories }) => {
    // try useParams instead and delete the props being passed in to render method in CategoriesContainer
    let category = categories.find(c => c.id === parseInt(match.params.id))

    if (categories.length === 0) return null 
    
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