import React from 'react';
import ItemsContainer from './ItemsContainer'
import { useParams } from 'react-router-dom'

const Category = ({ categories }) => {
    const { id } = useParams()
    const cat = categories.find(c => c.id === parseInt(id))

    if (categories.length === 0) return null 
    
    return (
        <>
            <h2>{cat.name}</h2>
            <ItemsContainer category={cat}/>
        </>
    );
};

export default Category;