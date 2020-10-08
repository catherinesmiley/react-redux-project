import React from 'react';

const CategoryItems = props => {
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