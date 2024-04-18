import type { Meta, StoryObj } from '@storybook/react';
import Avatar from '@/components/avatar';
import DefaultAvatar from './assets/avatar.png';

const meta = {
  title: 'Example/Avatar',
  component: Avatar,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: { src: DefaultAvatar, size: '1', rounded: 'xl' },
} satisfies Meta<typeof Avatar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    src: DefaultAvatar,
    size: '1',
    rounded: 'xl',
  },
};

export const FullRounded: Story = {
  args: {
    src: DefaultAvatar,
    size: '1',
    rounded: 'full',
  },
};
