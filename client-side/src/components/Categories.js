import React from 'react';
import { Link } from 'react-router-dom'

const Categories = ({ categories }) => {
    const categoriesList = categories.map((category, index) => {
        return <div key={category.id} className="catList">
            <Link
                to={`/categories/${category.id}`}
            ><h2>{category.name}</h2></Link>
            <h4>{category.description}</h4>
        </div>
    })

    return (
        <div>{categoriesList}</div>
    );
};

export default Categories;