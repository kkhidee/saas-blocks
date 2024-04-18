import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import Button from '@/components/button';
import { BeakerIcon } from '@heroicons/react/16/solid';

const meta = {
  title: 'Example/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: { children: 'Button', type: 'button', size: 'sm', variant: 'primary' },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: 'Button',
    onClick: fn(),
    type: 'button',
    size: 'sm',
    variant: 'primary',
    rounded: 'xl',
  },
};

export const Secondary: Story = {
  args: {
    children: 'Button',
    onClick: fn(),
    type: 'button',
    size: 'sm',
    variant: 'secondary',
    rounded: 'xl',
  },
};

export const Ghost: Story = {
  args: {
    children: 'Button',
    onClick: fn(),
    type: 'button',
    size: 'sm',
    variant: 'ghost',
    rounded: 'xl',
  },
};

export const Outlined: Story = {
  args: {
    children: 'Button',
    onClick: fn(),
    type: 'button',
    size: 'sm',
    variant: 'outlined',
    rounded: 'xl',
  },
};

export const Critical: Story = {
  args: {
    children: 'Button',
    onClick: fn(),
    type: 'button',
    size: 'sm',
    variant: 'critical',
    rounded: 'xl',
  },
};

export const WithIcon: Story = {
  args: {
    children: 'Button',
    onClick: fn(),
    type: 'button',
    size: 'sm',
    variant: 'primary',
    rounded: 'xl',
    iconComponent: <BeakerIcon />,
  },
};
