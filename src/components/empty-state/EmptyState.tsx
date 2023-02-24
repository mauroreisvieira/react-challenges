import React from "react";

interface EmptyStateProps {
    title?: string;
    icon?: React.ReactNode;
    children?: React.ReactNode;
}

export const EmptyState = ({
    title,
    icon,
    children,
}: EmptyStateProps): React.ReactElement => {
    return (
        <div className="bg-gray-50 py-20 px-16 text-center rounded-lg shadow">
            {icon && <div className="text-6xl text-gray-800 mb-4">{icon}</div>}
            {title && (
                <h2 className="text-xl font-semibold text-gray-800">
                    {title}
                </h2>
            )}
            {children && (
                <p className="mt-2 text-sm leading-6 text-gray-600">
                    {children}
                </p>
            )}
        </div>
    );
};
