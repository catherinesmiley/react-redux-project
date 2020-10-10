import React from 'react';
import { Link } from 'react-router-dom'

const Categories = props => {
    const categories = props.categories.categories.map((category, index) => {
        return <div key={index} className="catList">
            <Link
                to={`/categories/${category.id}`}
            ><h2>{category.name}</h2></Link>
            <h4>{category.description}</h4>
        </div>
    })

    return (
        <div>{categories}</div>
    );
};

export default Categories;