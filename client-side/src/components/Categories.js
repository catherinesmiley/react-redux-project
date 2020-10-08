import React from 'react';
import { Link } from 'react-router-dom'

const Categories = props => {
    const categories = props.categories.categories.map((category, index) => {
        // console.log(category.items)
        return <div key={index}>
            <Link
                to={`/categories/${category.id}`}
            ><h2>{category.name}</h2></Link>
            {/* conditional if no category name */}
            {/* add validations to category model */}
            <h4>{category.description}</h4>
        </div>
    })

    return (
        <div>{categories}</div>
    );
};

export default Categories;