import React from "react";
import { EmptyState } from "../empty-state";

interface TableHeadProps {
    children: React.ReactNode;
}

const TableHead = ({ children }: TableHeadProps): React.ReactElement => {
    return <thead className="bg-gray-50">{children}</thead>;
};

interface TableBodyProps {
    children: React.ReactNode;
}

const TableBody = ({ children }: TableBodyProps): React.ReactElement => {
    return (
        <tbody className="bg-white divide-y divide-gray-200">{children}</tbody>
    );
};

interface TableProps {
    children?: React.ReactNode | React.ReactNode[];
}

export const Table = ({ children = "" }: TableProps): React.ReactElement => {
    return children ? (
        <div className="shadow overflow-hidden border-b border-gray-200 rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
                {children}
            </table>
        </div>
    ) : (
        <EmptyState icon={"☹️"} title="Ups! No results found">
            We can’t find anything with that term at the moment, try searching
            something else.
        </EmptyState>
    );
};

Table.Head = TableHead;
Table.Body = TableBody;
