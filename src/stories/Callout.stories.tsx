import type { Meta, StoryObj } from '@storybook/react';
import Callout from '@/components/callout';
import { fn } from '@storybook/test';

const meta = {
  title: 'Example/Callout',
  component: Callout,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    title: 'This is an info callout!',
    subtitle: 'Congrats! You have built the most amazing product in the world!',
    variant: 'info',
    onClose: fn(),
  },
} satisfies Meta<typeof Callout>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Information: Story = {
  args: {
    title: 'This is an info callout!',
    subtitle: 'Congrats! You have built the most amazing product in the world!',
    variant: 'info',
    onClose: fn(),
  },
};

export const Success: Story = {
  args: {
    title: 'This is a success callout!',
    subtitle: 'Congrats! You have built the most amazing product in the world!',
    variant: 'success',
    onClose: fn(),
  },
};

export const Error: Story = {
  args: {
    title: 'This is an error callout!',
    subtitle: 'Congrats! You have built the most amazing product in the world!',
    variant: 'error',
    onClose: fn(),
  },
};

export const Warning: Story = {
  args: {
    title: 'This is a warning callout!',
    subtitle: 'Congrats! You have built the most amazing product in the world!',
    variant: 'warning',
    onClose: fn(),
  },
};
