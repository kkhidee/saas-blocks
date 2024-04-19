import type { Meta, StoryObj } from '@storybook/react';
import Checkbox from '@/components/checkbox';

const meta = {
  title: 'Example/Checkbox',
  component: Checkbox,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: { label: 'Label' },
} satisfies Meta<typeof Checkbox>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Label',
  },
};
