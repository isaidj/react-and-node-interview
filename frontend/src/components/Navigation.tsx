// src/components/Navigation.tsx
import React from "react";
import { NavLink } from "react-router-dom";

const Navigation: React.FC = () => {
  return (
    <nav className="bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center  text-white mr-6 gap-2">
            <img
              src="/netforemost.ico"
              alt="logo"
              className="h-8 w-8 rounded-full"
            />
            <NavLink to="/" className="text-white font-bold">
              News App
            </NavLink>
          </div>
          <div>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium"
                  : "text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              }
              end
            >
              Home
            </NavLink>
            <NavLink
              to="/management"
              className={({ isActive }) =>
                isActive
                  ? "bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium"
                  : "text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              }
            >
              Management
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
