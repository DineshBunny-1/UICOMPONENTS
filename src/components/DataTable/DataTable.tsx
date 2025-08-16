import React, { useState, useMemo } from 'react';
import { clsx } from 'clsx';
import { DataTableProps, Column } from '../../types';
import { FaSort, FaSortUp, FaSortDown } from 'react-icons/fa';

type SortDirection = 'asc' | 'desc' | null;

/**
 * A flexible data table component with sorting, selection, loading, and empty states.
 */
export const DataTable = <T extends { id: string | number }>({
  data,
  columns,
  loading = false,
  selectable = false,
  onRowSelect,
  className = '',
}: DataTableProps<T>) => {
  const [sortColumn, setSortColumn] = useState<keyof T | null>(null);
  const [sortDirection, setSortDirection] = useState<SortDirection>(null);
  const [selectedRows, setSelectedRows] = useState<Set<string | number>>(new Set());

  const handleSort = (key: keyof T) => {
    if (sortColumn === key) {
      setSortDirection(prev => (prev === 'asc' ? 'desc' : 'asc'));
    } else {
      setSortColumn(key);
      setSortDirection('asc');
    }
  };

  const sortedData = useMemo(() => {
    if (!sortColumn || !sortDirection) return data;

    return [...data].sort((a, b) => {
      const aValue = a[sortColumn];
      const bValue = b[sortColumn];

      if (aValue < bValue) return sortDirection === 'asc' ? -1 : 1;
      if (aValue > bValue) return sortDirection === 'asc' ? 1 : -1;
      return 0;
    });
  }, [data, sortColumn, sortDirection]);

  const handleSelectRow = (id: string | number) => {
    const newSelection = new Set(selectedRows);
    if (newSelection.has(id)) {
      newSelection.delete(id);
    } else {
      newSelection.add(id);
    }
    setSelectedRows(newSelection);
    if (onRowSelect) {
      onRowSelect(data.filter(row => newSelection.has(row.id)));
    }
  };

  const handleSelectAll = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      const allIds = new Set(data.map(row => row.id));
      setSelectedRows(allIds);
      if (onRowSelect) {
        onRowSelect(data);
      }
    } else {
      setSelectedRows(new Set());
      if (onRowSelect) {
        onRowSelect([]);
      }
    }
  };

  const isAllSelected = selectedRows.size === data.length && data.length > 0;

  const renderSortIcon = (key: keyof T) => {
    if (sortColumn !== key || !sortDirection) return <FaSort className="inline ml-1 text-gray-400" />;
    if (sortDirection === 'asc') return <FaSortUp className="inline ml-1" />;
    return <FaSortDown className="inline ml-1" />;
  };

  return (
    <div className={clsx("overflow-x-auto rounded-lg border border-gray-200", className)}>
      <table className="min-w-full divide-y divide-gray-200 bg-white">
        <thead className="bg-gray-50">
          <tr>
            {selectable && (
              <th className="px-6 py-3 text-left">
                <input
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                  checked={isAllSelected}
                  onChange={handleSelectAll}
                />
              </th>
            )}
            {columns.map(col => (
              <th
                key={col.key as string}
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500 cursor-pointer"
                onClick={() => handleSort(col.key)}
              >
                {col.header}
                {renderSortIcon(col.key)}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {loading ? (
            Array.from({ length: 5 }).map((_, i) => (
              <tr key={i}>
                {selectable && <td className="px-6 py-4"><div className="h-4 w-4 bg-gray-200 rounded animate-pulse"></div></td>}
                {columns.map(col => (
                  <td key={col.key as string} className="px-6 py-4">
                    <div className="h-4 bg-gray-200 rounded animate-pulse"></div>
                  </td>
                ))}
              </tr>
            ))
          ) : sortedData.length === 0 ? (
            <tr>
              <td colSpan={columns.length + (selectable ? 1 : 0)} className="px-6 py-12 text-center text-gray-500">
                No data available.
              </td>
            </tr>
          ) : (
            sortedData.map(item => (
              <tr
                key={item.id}
                className={clsx('hover:bg-gray-50', { 'bg-blue-50': selectedRows.has(item.id) })}
              >
                {selectable && (
                  <td className="px-6 py-4">
                    <input
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                      checked={selectedRows.has(item.id)}
                      onChange={() => handleSelectRow(item.id)}
                    />
                  </td>
                )}
                {columns.map(col => (
                  <td key={col.key as string} className="whitespace-nowrap px-6 py-4 text-sm text-gray-800">
                    {col.render ? col.render(item) : (item[col.key] as React.ReactNode)}
                  </td>
                ))}
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};