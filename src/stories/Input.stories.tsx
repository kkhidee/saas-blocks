import type { Meta, StoryObj } from '@storybook/react';
import Input from '@/components/input';
import { BanknotesIcon } from '@heroicons/react/16/solid';

const meta = {
  title: 'Example/Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: { label: 'Label' },
} satisfies Meta<typeof Input>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Label',
    placeholder: 'Placeholder',
  },
};

export const WithHelper: Story = {
  args: {
    label: 'Label',
    placeholder: 'Placeholder',
    helper: 'Helper text',
  },
};

export const Invalid: Story = {
  args: {
    label: 'Label',
    placeholder: 'Placeholder',
    helper: 'Helper text',
    invalid: true,
    errorMessage: 'Error message',
  },
};

export const WithLeadingIcon: Story = {
  args: {
    label: 'Label',
    placeholder: 'Placeholder',
    leadingIcon: <BanknotesIcon />,
  },
};

export const WithTrailingIcon: Story = {
  args: {
    label: 'Label',
    placeholder: 'Placeholder',
    trailingIcon: <BanknotesIcon className="text-green-600" />,
  },
};

export const WithLeadingAddon: Story = {
  args: {
    label: 'Label',
    placeholder: 'Placeholder',
    leadingAddon: 'https://',
  },
};

export const WithLeadingAddonAndTrailingIcon: Story = {
  args: {
    label: 'Label',
    placeholder: 'Placeholder',
    leadingAddon: 'https://',
    trailingIcon: <BanknotesIcon className="text-green-600" />,
  },
};

export const WithTrailingAddon: Story = {
  args: {
    label: 'Label',
    placeholder: 'Placeholder',
    trailingAddon: 'USD',
  },
};
