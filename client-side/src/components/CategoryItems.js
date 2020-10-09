import React from 'react';

const CategoryItems = props => {
    let items = props.items.filter(i => i.category_id === props.categoryID)
    console.log("props in category items", props)
    return (
        <div>
            {items.map(function(item, index) {
                return (<p key={item.id}>{item.name} <button onClick={() => props.deleteItem(item)}>✓</button></p>)
            })}    
        </div>
    );
};

export default CategoryItems;