import React from "react";
import { NavLink } from "react-router-dom";
import { classNames } from "../../utils/functions";

type NavigationProps = React.HTMLAttributes<HTMLElement>;

export const Navigation = ({ className, ...restProps }: NavigationProps) => {
    const computedClasses = classNames("bg-gray-800 mb-12", className);

    return (
        <nav className={computedClasses} {...restProps}>
            <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                <div className="relative flex justify-between h-16">
                    <div className="flex-1 flex items-center">
                        <div className="flex-1">
                            <div className="flex space-x-4">
                                <NavLink
                                    className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                                    to="/"
                                >
                                    Home
                                </NavLink>
                                <NavLink
                                    className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                                    to="/tic-tac-toe"
                                >
                                    Tic-Tac-Toe
                                </NavLink>
                                <NavLink
                                    className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                                    to="/memory"
                                >
                                    Memory Game
                                </NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};
