import type { Meta, StoryObj } from '@storybook/react';
import Tag from '@/components/tag';
import { BanknotesIcon } from '@heroicons/react/16/solid';

const meta = {
  title: 'Example/Tag',
  component: Tag,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: { children: 'Tag' },
} satisfies Meta<typeof Tag>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Tag',
    color: 'default',
    rounded: 'full',
    size: 'sm',
  },
};

export const WithIcon: Story = {
  args: {
    children: 'Tag',
    color: 'default',
    rounded: 'full',
    size: 'sm',
    iconComponent: <BanknotesIcon />,
  },
};
