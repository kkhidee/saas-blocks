import type { Meta, StoryObj } from '@storybook/react';
import Modal from '@/components/modal';
import { fn } from '@storybook/test';

const meta = {
  title: 'Example/Modal',
  component: Modal,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    isOpen: false,
    closeModal: fn(),
    title: 'Modal title',
    children: <div>Modal content</div>,
    type: 'simple',
  },
} satisfies Meta<typeof Modal>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    isOpen: true,
    closeModal: fn(),
    title: 'Modal title',
    children: <div>Modal content</div>,
    type: 'simple',
  },
};

export const Plain: Story = {
  args: {
    isOpen: true,
    closeModal: fn(),
    title: 'Modal title',
    children: <div>Modal content</div>,
    type: 'plain',
  },
};
