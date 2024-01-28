import styled from '@emotion/styled';
import get from 'lodash/get';

import { Checkbox } from '@mantine/core';

export interface IColumnType<T> {
  key: string;
  title: string | JSX.Element;
  width?: number;
  render?: (column: IColumnType<T>, item: T) => void;
  show?: boolean;
  type?: string;
}

interface DynamicTableProps<T> {
  data: T[] | undefined;
  columns: IColumnType<T>[];
  setSelected?: (id: string) => void;
  selected?: string[];
}

interface TableHeaderProps<T> {
  columns: IColumnType<T>[];
}

interface TableRowProps<T> {
  data: T[];
  columns: IColumnType<T>[];
  setSelected?: (id: string) => void;
  selected?: string[];
}

interface TableRowCellProps<T> {
  item: T;
  column: IColumnType<T>;
  setSelected?: (id: string) => void;
  selected?: string[];
}

const TableHeaderCell = styled.th`
  padding: 8px;
  gap: 8px;
  color: gray;
  text-align: left;
  font-size: 16px;
  font-weight: 400;
  height: 42px;
  text-transform: uppercase;
  position: relative;
`;

const TableWrapper = styled.table`
  border-spacing: 2px;
  width: 100%;
  border-collapse: collapse;
  th:first-of-type {
    position: sticky;
    left: 0;
    z-index: 2;
  }
  th {
    position: sticky;
    left: 0;
    background: white;
    z-index: 1;
  }
  td:first-of-type {
    position: sticky;
    left: 0;
    z-index: 2;
  }
  td {
    position: sticky;
    left: 0;
    background: white;
    z-index: 1;
  }
`;

const TableCell = styled.td`
  padding: 8px;
  color: gray;
  font-size: 12px;
  font-weight: 400;
`;

const TableRowItem = styled.tr`
  border-bottom: 1px solid gray;
`;

const TableHeaderWrapper = styled.tr`
  border-bottom: 1px solid gray;
`;

function TableRowCell<T>({ item, column }: TableRowCellProps<T>): JSX.Element {
  let value;
  if (column.render) {
    value = column.render!(column, item);
  } else {
    value = get(item, column.key);
  }
  return <TableCell>{value}</TableCell>;
}

function TableHeader<T>({ columns }: TableHeaderProps<T>): JSX.Element {
  return (
    <TableHeaderWrapper>
      {columns
        .filter(col => col.show === true)
        .map((column, columnIndex) => (
          <TableHeaderCell
            key={`table-head-cell-${columnIndex}`}
            style={{ width: column.width }}
          >
            {column.title}
          </TableHeaderCell>
        ))}
    </TableHeaderWrapper>
  );
}

function TableRow<T>({ data, columns }: TableRowProps<T>): JSX.Element {
  return (
    <>
      {data.map((item, itemIndex) => (
        <TableRowItem key={`table-body-${itemIndex}`}>
          {columns
            .filter(col => col.show === true)
            .map((column, columnIndex) => (
              <TableRowCell
                key={`table-row-cell-${columnIndex}`}
                item={item}
                column={column}
              />
            ))}
        </TableRowItem>
      ))}
    </>
  );
}

export function DynamicTable<T>({
  data,
  columns,
}: DynamicTableProps<T>): JSX.Element {
  return (
    <TableWrapper>
      <thead>
        <TableHeader columns={columns} />
      </thead>
      <tbody>
        {data && data.length > 0 ? (
          <TableRow data={data} columns={columns} />
        ) : (
          <tr>
            <td colSpan={20} align="center">
              No Records Found.
            </td>
          </tr>
        )}
      </tbody>
    </TableWrapper>
  );
}
