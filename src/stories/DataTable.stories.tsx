import type { Meta, StoryObj } from '@storybook/react';
import { DataTable } from '../components/DataTable/DataTable';
import { Column } from '../types';

interface User {
  id: number;
  name: string;
  email: string;
  role: 'Admin' | 'User' | 'Editor';
  age: number;
}

const mockUsers: User[] = [
  { id: 1, name: 'Jane Cooper', email: 'jane.cooper@example.com', role: 'Admin', age: 28 },
  { id: 2, name: 'Cody Fisher', email: 'cody.fisher@example.com', role: 'User', age: 45 },
  { id: 3, name: 'Esther Howard', email: 'esther.howard@example.com', role: 'Editor', age: 32 },
  { id: 4, name: 'Jenny Wilson', email: 'jenny.wilson@example.com', role: 'User', age: 25 },
  { id: 5, name: 'Kristin Watson', email: 'kristin.watson@example.com', role: 'Admin', age: 36 },
];

const columns: Column<User>[] = [
  { key: 'name', header: 'Name' },
  { key: 'email', header: 'Email' },
  {
    key: 'role',
    header: 'Role',
    render: (user) => {
      const roleColor = {
        Admin: 'bg-green-100 text-green-800',
        Editor: 'bg-blue-100 text-blue-800',
        User: 'bg-gray-100 text-gray-800',
      };
      return (
        <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${roleColor[user.role]}`}>
          {user.role}
        </span>
      );
    },
  },
  { key: 'age', header: 'Age' },
];

const meta: Meta<typeof DataTable<User>> = {
  title: 'Components/DataTable',
  component: DataTable,
  tags: ['autodocs'],
  argTypes: {
    loading: { control: 'boolean' },
    selectable: { control: 'boolean' },
  },
  args: {
    columns,
    data: mockUsers,
    loading: false,
    selectable: false,
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    data: mockUsers,
  },
};

export const Selectable: Story = {
  args: {
    selectable: true,
    data: mockUsers,
  },
};

export const Loading: Story = {
  args: {
    loading: true,
    data: [], // Pass empty array for loading skeleton
  },
};

export const Empty: Story = {
  args: {
    data: [],
  },
};

export const WithSorting: Story = {
  args: {
    data: mockUsers,
  },
  render: (args) => (
    <div>
      <p className="mb-2 text-sm text-gray-600">Click on column headers to sort the data.</p>
      <DataTable {...args} />
    </div>
  ),
};