import React from 'react';

const CategoryItems = props => {
    let items = props.items.filter(i => i.category_id === props.categoryID)

    return (
        <div>
            {/* is index needed? */}
            {items.map((item, index) => {
                return (<p key={item.id}>{item.name} <button onClick={() => props.deleteItem(item)}>✓</button></p>)
            })}  
        </div>
    );
};

export default CategoryItems;