import React, { useState } from 'react';
import "../App.css"; 
import "../Menu.css";
import menuData from '../menu-data.js';


function Menu() {
    const [activeTab, setActiveTab] = useState('Pizza');
  
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
            menuData[activeTab].map((item) => (
              <div key={item.id} className="menu-item">
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