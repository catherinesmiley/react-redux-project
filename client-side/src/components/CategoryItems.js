import React from 'react';

const CategoryItems = props => {
    console.log("props in category items", props)
    let items = props.items.filter(i => i.category_id === props.categoryID)
    return (
        <div>
            {items.map(function(item, index) {
                return (<li key={index}>{item.name}</li>)
            })}    
        </div>
    );
};

export default CategoryItems;