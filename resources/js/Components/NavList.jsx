import React from 'react';

const NavList = ({ items, className, style }) => (
  <ul className={`p-0 ${className}`} style={style}>
    {items.map((item) => (
      <li>
        <a href={item.href}>
          <img
            className="w-8 h-8 mr-2.5"
            src={item.iconSrc}
            fill="currentColor"
            viewBox="0 0 20 20"
          />
          <div className="text-neutral-50 navbar_content">
            <p className="navbar_title">{item.title}</p>
            <p className="navbar_description">{item.description}</p>
          </div>
        </a>
      </li>
    ))}
  </ul>
);

export default NavList;
