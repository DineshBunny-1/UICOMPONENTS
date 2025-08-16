import type { Meta, StoryObj } from '@storybook/react';
import { InputField } from '../components/InputField/InputField';

const meta: Meta<typeof InputField> = {
  title: 'Components/InputField',
  component: InputField,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['filled', 'outlined', 'ghost'],
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
    },
    disabled: { control: 'boolean' },
    invalid: { control: 'boolean' },
    label: { control: 'text' },
    placeholder: { control: 'text' },
    helperText: { control: 'text' },
    errorMessage: { control: 'text' },
  },
  args: {
    label: 'Email Address',
    placeholder: 'you@example.com',
    disabled: false,
    invalid: false,
  },
};

export default meta;
type Story = StoryObj<typeof InputField>;

export const Outlined: Story = {
  args: {
    variant: 'outlined',
  },
};

export const Filled: Story = {
  args: {
    variant: 'filled',
  },
};

export const Ghost: Story = {
  args: {
    variant: 'ghost',
  },
};

export const Small: Story = {
  args: {
    size: 'sm',
    label: 'Small Input',
  },
};

export const Medium: Story = {
  args: {
    size: 'md',
    label: 'Medium Input',
  },
};

export const Large: Story = {
  args: {
    size: 'lg',
    label: 'Large Input',
  },
};

export const WithHelperText: Story = {
  args: {
    helperText: 'This is a helpful message.',
  },
};

export const Invalid: Story = {
  args: {
    invalid: true,
    errorMessage: 'This field is required.',
  },
};

export const Disabled: Story = {
  args: {
    label: 'Disabled Input',
    disabled: true,
    value: 'Cannot edit this',
  },
};
