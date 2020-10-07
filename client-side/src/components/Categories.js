import React from 'react';
import { Link } from 'react-router-dom'

const Categories = props => {
    const categories = props.categories.map((category, index) => {
        console.log(category.items)
        return <div key={index}>
            <Link
                to={`/categories/${category.id}`}
            ><h2>{category.name}</h2></Link>
            <h4>{category.description}</h4>
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