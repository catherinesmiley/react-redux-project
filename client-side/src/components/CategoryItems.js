import React from 'react';

const CategoryItems = props => {
    let items = props.items.filter(i => i.category_id === props.categoryID)
    console.log("props in category items", props)
    return (
        <div>
            {items.map(function(item, index) {
                return (<li key={item.id}>{item.name}<button onClick={() => props.deleteItem(item.id)}>x</button></li>)
                // <button onClick={() => props.delete(item.id)}>x</button>
            })}    
        </div>
    );
};

export default CategoryItems;