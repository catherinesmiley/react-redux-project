import React from 'react';

const CategoryItems = ({ categoryID, items, deleteItem }) => {
    let itemsList = items.filter(i => i.category_id === categoryID)

    return (
        <div>
            {itemsList.map(item => {
                return (<p key={item.id}>{item.name} <button onClick={() => deleteItem(item)}>✓</button></p>)
            })}  
        </div>
    );
};

export default CategoryItems;