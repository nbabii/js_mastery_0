import React, { useState } from 'react';
import "../App.css"; 


function Menu() {
    const [activeTab, setActiveTab] = useState('Pizza');
  
    const menuData = {
      Pizza: [
        { name: 'Margherita', description: 'Fresh tomatoes, fresh mozzarella, fresh basil', price: '$12.50' },
        { name: 'Formaggio', description: 'Four cheeses (mozzarella, parmesan, pecorino, jarlsberg)', price: '$15.50' },
        { name: 'Chicken', description: 'Fresh tomatoes, mozzarella, chicken, onions', price: '$17.00' },
        { name: 'Pineapple o\'Clock', description: 'Fresh tomatoes, mozzarella, fresh pineapple, bacon, fresh basil', price: '$16.50' },
        { name: 'Meat Town', description: 'Fresh tomatoes, mozzarella, hot pepperoni, hot sausage, beef, chicken', price: '$20.00', label: 'Hot' },
        { name: 'Parma', description: 'Fresh tomatoes, mozzarella, parma, bacon, fresh arugula', price: '$21.50', label: 'New' },
      ],
      Salads: [   
        { name: 'Lasagna', description: 'Special sauce, mozzarella, parmesan, ground beef', price: '$13.50', label: 'Popular' },
        { name: 'Ravioli', description: 'Ravioli filled with cheese', price: '$14.50' },
        { name: 'Spaghetti Classica', description: 'Fresh tomatoes, onions, ground beef', price: '$11.00' },
        { name: 'Seafood Pasta', description: 'Salmon, shrimp, lobster, garlic', price: '$25.50' },
      ],
      Starters: [
        { name: 'Today\'s Soup', description: 'Ask the waiter', price: '$5.50', label: 'Seasonal' },
        { name: 'Bruschetta', description: 'Bread with pesto, tomatoes, onion, garlic', price: '$8.50' },
        { name: 'Garlic Bread', description: 'Grilled ciabatta, garlic butter, onions', price: '$9.50' },
        { name: 'Tomozzarella', description: 'Tomatoes and mozzarella', price: '$10.50' },
      ],
    };
  
    return (
      <div className="menu-page">
          <h1 className="menu-title">The Menu</h1>
        <div className="menu-container">
        
          <div className="menu-tabs">
            <button
              className={activeTab === 'Pizza' ? 'active' : ''}
              onClick={() => setActiveTab('Pizza')}
            >
              Pizza
            </button>
            <button
              className={activeTab === 'Salads' ? 'active' : ''}
              onClick={() => setActiveTab('Salads')}
            >
              Salads
            </button>
            <button
              className={activeTab === 'Starters' ? 'active' : ''}
              onClick={() => setActiveTab('Starters')}
            >
              Starters
            </button>
          </div>
          <div className="menu-list">
          {menuData[activeTab].length > 0 ? (
            menuData[activeTab].map((item, index) => (
              <div key={index} className="menu-item">
                <div className="menu-item-name-label">
                  <h3 className="menu-item-name">{item.name}</h3>
                  {item.label && (
                    <span className={`menu-label ${item.label.toLowerCase()}`}>
                      {item.label}
                    </span>
                  )}
                </div>
                <p className="menu-item-description">{item.description}</p>
                <span className="menu-item-price">{item.price}</span>
              </div>
            ))
          ) : (
            <p className="empty-tab">No items available yet.</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Menu;